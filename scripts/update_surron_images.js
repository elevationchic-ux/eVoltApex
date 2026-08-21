const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'src', 'lib', 'products.ts');
let content = fs.readFileSync(productsFile, 'utf8');

// Map ALL Sur-Ron product IDs to unique SVG images
const surronImageMap = {
  'surron-light-bee-x': 'surron-light-bee-x.jpg', // original keeps jpg
  'surron-light-bee-x-2018': 'surron-light-bee-x-2018.svg',
  'surron-light-bee-x-2022': 'surron-light-bee-x-2022.svg',
  'surron-light-bee-x-2024': 'surron-light-bee-x-2024.svg',
  'surron-light-bee-x-2025': 'surron-light-bee-x-2025.svg',
  'surron-light-bee-x-2026': 'surron-light-bee-x-2026.svg',
  'surron-light-bee-l1e-2020': 'surron-light-bee-l1e-2020.svg',
  'surron-light-bee-l1e-2023': 'surron-light-bee-l1e-2023.svg',
  'surron-light-bee-l1e-2026': 'surron-light-bee-l1e-2026.svg',
  'surron-light-bee-s-youth': 'surron-light-bee-s-youth.svg',
  'surron-light-bee-s-youth-2024': 'surron-light-bee-s-youth-2024.svg',
  'surron-light-bee-2-offroad-2026': 'surron-light-bee-2-offroad-2026.svg',
  'surron-light-bee-2-homologuee-2026': 'surron-light-bee-2-homologuee-2026.svg',
  'surron-hyper-bee-2025': 'surron-hyper-bee-2025.svg',
  'surron-hyper-bee-x-2026': 'surron-hyper-bee-x-2026.svg',
  'surron-ultra-bee-x-2023': 'surron-ultra-bee-x-2023.svg',
  'surron-ultra-bee-t-2024': 'surron-ultra-bee-t-2024.svg',
  'surron-ultra-bee-r-2024': 'surron-ultra-bee-r-2024.svg',
  'surron-ultra-bee-l3e-2025': 'surron-ultra-bee-l3e-2025.svg',
  'surron-ultra-bee-c-2025': 'surron-ultra-bee-c-2025.svg',
  'surron-ultra-bee-hp-2026': 'surron-ultra-bee-hp-2026.svg',
  'surron-storm-bee-f-offroad': 'surron-storm-bee-f-offroad.svg',
  'surron-storm-bee-e-enduro': 'surron-storm-bee-e-enduro.svg',
  'surron-storm-bee-r-supermoto': 'surron-storm-bee-r-supermoto.svg',
  'surron-storm-bee-104v-2026': 'surron-storm-bee-104v-2026.svg',
  'surron-light-bee-x-black-edition': 'surron-light-bee-x-black-edition.svg',
  'surron-light-bee-x-kling-edition': 'surron-light-bee-x-kling-edition.svg',
  'surron-ultra-bee-anniversary-edition': 'surron-ultra-bee-anniversary-edition.svg',
};

let updated = 0;
const lines = content.split(/\r?\n/);
const nl = content.includes('\r\n') ? '\r\n' : '\n';
let currentId = null;

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/^(\s*)id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[2];
  }
  
  if (currentId && surronImageMap[currentId]) {
    const imgMatch = lines[i].match(/^(\s*)image_url:\s*"[^"]+"/);
    if (imgMatch) {
      const indent = imgMatch[1];
      const newImg = `/images/products/${surronImageMap[currentId]}`;
      lines[i] = `${indent}image_url: "${newImg}",`;
      
      // Also update the images array on the next line
      if (i + 1 < lines.length) {
        const imagesMatch = lines[i + 1].match(/^(\s*)images:\s*\["[^"]*"\]/);
        if (imagesMatch) {
          const imgIndent = imagesMatch[1];
          lines[i + 1] = `${imgIndent}images: ["${newImg}"],`;
        }
      }
      
      updated++;
      delete surronImageMap[currentId];
    }
  }
}

const newContent = lines.join(nl);
fs.writeFileSync(productsFile, newContent);

console.log(`Updated ${updated} Sur-Ron products with unique images`);
const remaining = Object.keys(surronImageMap);
if (remaining.length > 0) {
  console.log(`\nWARNING: ${remaining.length} product IDs not found:`);
  remaining.forEach(id => console.log(`  - ${id}`));
}
