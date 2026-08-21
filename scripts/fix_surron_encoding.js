const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'src', 'lib', 'products.ts');

// Read as buffer to handle mixed encoding
const buf = fs.readFileSync(productsFile);

// Find the last product before Sur-Ron section
// Look for the pattern: the last good product ends, then corrupted Sur-Ron starts
// We need to find where the Sur-Ron products begin

// Convert to string, replacing invalid chars
const content = buf.toString('utf8');
const lines = content.split(/\r?\n/);

// Find the line that starts the corrupted Sur-Ron section
// It contains "surron-light-bee-x-2018" or garbled characters
let surronStartLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('surron-light-bee-x-2018') || 
      lines[i].includes('surron-light-bee-x-2018-originale') ||
      (lines[i].includes('뿯') || lines[i].includes('\uFFFD'))) {
    surronStartLine = i;
    break;
  }
}

if (surronStartLine === -1) {
  console.log('Could not find Sur-Ron section start');
  process.exit(1);
}

console.log(`Found corrupted Sur-Ron section starting at line ${surronStartLine + 1}`);

// Go back to find the closing brace of the previous product
let prevProductEnd = surronStartLine - 1;
while (prevProductEnd > 0 && !lines[prevProductEnd].trim().startsWith('}')) {
  prevProductEnd--;
}
console.log(`Previous product ends at line ${prevProductEnd + 1}`);

// Find the end of the file (the closing ]; of the products array)
let arrayEndLine = lines.length - 1;
while (arrayEndLine > 0 && !lines[arrayEndLine].trim().startsWith('];')) {
  arrayEndLine--;
}
console.log(`Products array ends at line ${arrayEndLine + 1}`);

// Keep everything before the Sur-Ron section + the closing ];
const cleanLines = [
  ...lines.slice(0, prevProductEnd + 1),  // up to and including the closing }
  '',  // blank line
  '];',  // close the array
  ''  // trailing newline
];

// Write the clean version
const nl = content.includes('\r\n') ? '\r\n' : '\n';
const cleanContent = cleanLines.join(nl);
fs.writeFileSync(productsFile, cleanContent);

console.log(`Cleaned file: removed lines ${surronStartLine + 1} to ${arrayEndLine + 1}`);
console.log(`New file has ${cleanLines.length} lines`);
console.log('Now re-run generate_surron_products.js to insert clean Sur-Ron products');
