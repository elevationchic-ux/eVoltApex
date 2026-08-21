const fs = require('fs');
const c = fs.readFileSync('src/lib/products.ts', 'utf8');
const lines = c.split(/\r?\n/);

// Extract product id + image_url pairs
let currentId = null;
const products = [];
for (const line of lines) {
  const idMatch = line.match(/^\s*id:\s*"([^"]+)"/);
  if (idMatch) currentId = idMatch[1];
  const imgMatch = line.match(/^\s*image_url:\s*"([^"]+)"/);
  if (imgMatch && currentId) {
    products.push({ id: currentId, image: imgMatch[1] });
  }
}

// Count image usage
const counts = {};
const byImage = {};
for (const p of products) {
  counts[p.image] = (counts[p.image] || 0) + 1;
  if (!byImage[p.image]) byImage[p.image] = [];
  byImage[p.image].push(p.id);
}

const dupes = Object.entries(counts).filter(([, v]) => v > 1).sort((a, b) => b[1] - a[1]);
const singles = Object.entries(counts).filter(([, v]) => v === 1).sort();

console.log(`Total products: ${products.length}`);
console.log(`Unique images: ${Object.keys(counts).length}`);
console.log(`Images used once: ${singles.length}`);
console.log(`Images used multiple times: ${dupes.length}`);
console.log(`\n=== DUPLICATED IMAGES (${dupes.length}) ===`);
for (const [img, n] of dupes) {
  console.log(`\n${n}x ${img}:`);
  for (const id of byImage[img]) {
    console.log(`  - ${id}`);
  }
}
