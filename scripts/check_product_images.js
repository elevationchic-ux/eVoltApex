const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/images/products');

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🚀 Checking product images directory...\n');

if (fs.existsSync(OUTPUT_DIR)) {
  const files = fs.readdirSync(OUTPUT_DIR);
  console.log(`📁 Product images directory: ${OUTPUT_DIR}`);
  console.log(`📊 Found ${files.length} files:\n`);

  files.forEach(file => {
    const filePath = path.join(OUTPUT_DIR, file);
    const stats = fs.statSync(filePath);
    console.log(`  - ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  });
} else {
  console.log('❌ Product images directory does not exist');
}

console.log(`\n💡 To add product images:`);
console.log(`   1. Download high-quality PNG images from manufacturer press rooms`);
console.log(`   2. Place them in ${OUTPUT_DIR}`);
console.log(`   3. Use descriptive filenames like: moto-volt-r-main.png, zero-srf-2024-hero.png`);
console.log(`   4. Update product.image_url in src/lib/products.ts to point to /images/products/filename.png`);
