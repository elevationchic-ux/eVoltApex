const fs = require('fs');
const path = require('path');

// Script pour vérifier et organiser les images de produits existants
const products = require('../src/lib/products.ts');

const OUTPUT_DIR = path.join(__dirname, '../public/images/products');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🚀 Checking product images...\n');

let missingImages = 0;
let existingImages = 0;

for (const product of products) {
  const productId = product.id;
  const mainImage = product.image_url;

  if (mainImage.startsWith('/')) {
    const imagePath = path.join(__dirname, '..', 'public', mainImage);
    if (fs.existsSync(imagePath)) {
      existingImages++;
      console.log(`✓ ${productId}: ${mainImage}`);
    } else {
      missingImages++;
      console.log(`✗ ${productId}: Missing ${mainImage}`);
    }
  } else {
    console.log(`! ${productId}: External URL - ${mainImage}`);
  }
}

console.log(`\n\n📊 Summary:`);
console.log(`   - Existing local images: ${existingImages}`);
console.log(`   - Missing local images: ${missingImages}`);
console.log(`   - Products with external URLs: ${products.filter(p => !p.image_url.startsWith('/')).length}`);

console.log(`\n💡 To download external images, you'll need to:`);
console.log(`   1. Visit the manufacturer's press room`);
console.log(`   2. Download high-quality PNG images`);
console.log(`   3. Place them in ${OUTPUT_DIR}`);
console.log(`   4. Update product.image_url to point to local files`);
