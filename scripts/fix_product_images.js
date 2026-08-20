const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const placeholder = '/images/products/placeholder.svg';

// Map of product IDs that need their images replaced with placeholder
const wrongMappings = {
  // Wrong brand images
  'verge-ts-ultra': '/images/products/livewire-one.jpg',
  'lightning-strike-carbon': '/images/products/zero-srs.jpg',
  'damon-hypersport-premier': '/images/products/zero-srs.jpg',
  'energica-ego-plus': '/images/products/zero-srs.jpg',
  'maeving-rm1s-british': '/images/products/livewire-s2-delmar.jpg',
  'buell-fuell-flow': '/images/products/livewire-one.jpg',
  'rgnt-no1-classic': '/images/products/livewire-s2-delmar.jpg',
  'dab-motors-1alpha': '/images/products/livewire-s2-delmar.jpg',
  'alva-electric-roadster': '/images/products/livewire-s2-delmar.jpg',
  'moto-land-nomad': '/images/products/livewire-s2-delmar.jpg',
  'ryvid-anthem-official': '/images/products/livewire-s2-delmar.jpg',
  'ryvid-outset-scrambler': '/images/products/livewire-s2-delmar.jpg',
  'volcon-grunt-evo-fat': '/images/products/surron-light-bee-x.jpg',
  'super-soco-cux-ducati': '/images/products/surron-light-bee-x.jpg',
  'niu-nqi-sport-50': '/images/products/surron-light-bee-x.jpg',
  'silence-s02-urban': '/images/products/surron-light-bee-x.jpg',
  'yamaha-neos-electric': '/images/products/surron-light-bee-x.jpg',
  'piaggio-1-active-plus': '/images/products/surron-light-bee-x.jpg',
  'pink-mobility-style-50': '/images/products/surron-light-bee-x.jpg',
  'rider-5000w-sport': '/images/products/surron-light-bee-x.jpg',
  'yadea-c1s-pro-50': '/images/products/surron-light-bee-x.jpg',
};

let currentProductId = null;
let changesCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Track current product ID
  const idMatch = line.match(/^\s+id:\s+"([^"]+)"/);
  if (idMatch) {
    currentProductId = idMatch[1];
  }
  
  // Check if this line needs replacement
  if (currentProductId && wrongMappings[currentProductId]) {
    const wrongImage = wrongMappings[currentProductId];
    
    if (line.includes(`image_url: "${wrongImage}"`)) {
      lines[i] = line.replace(wrongImage, placeholder);
      changesCount++;
    }
    if (line.includes(`images: ["${wrongImage}"`)) {
      lines[i] = line.replace(wrongImage, placeholder);
      changesCount++;
    }
  }
  
  // Fix all empty images
  if (line.includes('image_url: "",')) {
    lines[i] = line.replace('image_url: "",', `image_url: "${placeholder}",`);
    changesCount++;
  }
  if (line.includes('images: ["", "", ""]')) {
    lines[i] = line.replace('images: ["", "", ""]', `images: ["${placeholder}"]`);
    changesCount++;
  }
}

const result = lines.join('\n');
fs.writeFileSync(filePath, result, 'utf8');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
const emptyRemaining = (verify.match(/image_url: "",/g) || []).length;
const placeholderCount = (verify.match(/placeholder\.svg/g) || []).length;
console.log(`Changes made: ${changesCount}`);
console.log(`Placeholder references: ${placeholderCount}`);
console.log(`Remaining empty images: ${emptyRemaining}`);
