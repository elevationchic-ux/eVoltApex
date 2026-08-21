const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Generate fresh Sur-Ron output
const outputPath = path.join(__dirname, 'surron_output.ts');
execSync(`node scripts/generate_surron_products.js > "${outputPath}"`, { encoding: 'utf8' });

// Read both files as UTF-8
const productsContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'products.ts'), 'utf8');
const surronContent = fs.readFileSync(outputPath, 'utf8');

// Find the last ]; in products.ts
const lastBracketIdx = productsContent.lastIndexOf('];');
if (lastBracketIdx === -1) {
  console.error('Could not find ]; in products.ts');
  process.exit(1);
}

// Insert Sur-Ron products before the ];
const before = productsContent.substring(0, lastBracketIdx);
const after = productsContent.substring(lastBracketIdx);

// Ensure proper comma and formatting
const trimmedBefore = before.trimEnd();
const needsComma = !trimmedBefore.endsWith(',');

const newContent = trimmedBefore + (needsComma ? ',' : '') + '\n\n' + 
  surronContent.trim() + '\n\n' + after;

// Write as UTF-8
fs.writeFileSync(path.join(__dirname, '..', 'src', 'lib', 'products.ts'), newContent, 'utf8');

console.log('Sur-Ron products inserted cleanly with UTF-8 encoding');
console.log(`New file size: ${newContent.length} chars`);

// Clean up
fs.unlinkSync(outputPath);
