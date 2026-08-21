const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'src', 'lib', 'products.ts');
const buf = fs.readFileSync(productsFile);

// The file has mixed encoding: UTF-8 for most, UTF-16LE for Sur-Ron section
// Strategy: find the boundary, extract UTF-16 section, convert it, reassemble

// Find where null bytes start (UTF-16LE has null bytes between ASCII chars)
let firstNull = -1;
for (let i = 0; i < buf.length; i++) {
  if (buf[i] === 0) {
    firstNull = i;
    break;
  }
}

if (firstNull === -1) {
  console.log('No encoding issues found');
  process.exit(0);
}

console.log(`First null byte at position ${firstNull}`);

// Find the start of the corrupted line (go back to find the line start)
let lineStart = firstNull;
while (lineStart > 0 && buf[lineStart - 1] !== 0x0A) lineStart--;
console.log(`Corrupted section starts at byte ${lineStart}`);

// Find where null bytes end
let lastNull = firstNull;
for (let i = firstNull; i < buf.length; i++) {
  if (buf[i] === 0) lastNull = i;
}
console.log(`Last null byte at position ${lastNull}`);

// Find end of corrupted line
let corruptedEnd = lastNull;
while (corruptedEnd < buf.length && buf[corruptedEnd] !== 0x0A) corruptedEnd++;
corruptedEnd++; // include the newline
console.log(`Corrupted section ends at byte ${corruptedEnd}`);

// Extract parts
const beforeCorruption = buf.slice(0, lineStart);
const corruptedSection = buf.slice(lineStart, corruptedEnd);
const afterCorruption = buf.slice(corruptedEnd);

// Convert corrupted section from UTF-16LE to UTF-8
// The corrupted section has UTF-16LE encoding with possible BOM
let cleanSection = '';
try {
  // Try decoding as UTF-16LE
  const decoder = new TextDecoder('utf-16le');
  cleanSection = decoder.decode(corruptedSection);
  // Remove any BOM
  cleanSection = cleanSection.replace(/^\uFEFF/, '');
  // Remove null characters
  cleanSection = cleanSection.replace(/\0/g, '');
  console.log(`Converted ${corruptedSection.length} bytes to ${cleanSection.length} chars`);
} catch(e) {
  console.error('Failed to decode UTF-16LE:', e.message);
  process.exit(1);
}

// Also need to fix the missing comma before the Sur-Ron section
// The line before corruption ends with "}" but needs "},"
const beforeStr = beforeCorruption.toString('utf8');
let fixedBefore = beforeStr;
if (beforeStr.trimEnd().endsWith('}')) {
  fixedBefore = beforeStr.trimEnd() + ',\n';
  console.log('Added missing comma before Sur-Ron section');
}

// Reassemble
const newContent = fixedBefore + cleanSection + afterCorruption.toString('utf8');
fs.writeFileSync(productsFile, newContent);

console.log('File fixed!');
console.log(`New file size: ${newContent.length} chars`);
