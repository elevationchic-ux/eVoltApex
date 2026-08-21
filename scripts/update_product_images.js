const fs = require('fs');
const path = require('path');

// Import the mapping data
const { svgProducts } = require('./image_download_mapping.js');

const PRODUCTS_FILE = path.join(__dirname, '../src/lib/products.ts');
const PRODUCTS_OUTPUT = path.join(__dirname, '../src/lib/products.ts');
const IMAGES_DIR = path.join(__dirname, '../public/images/products');

console.log('🔄 Starting product image update...\n');

// Read the products file
let productsContent = fs.readFileSync(PRODUCTS_FILE, 'utf8');

let updatedCount = 0;
let skippedCount = 0;
let missingCount = 0;

// Create a mapping of current to target images
const imageMapping = {};
svgProducts.forEach(product => {
  imageMapping[product.currentImage] = product.targetImage;
});

// Check which target images exist
const existingFiles = fs.readdirSync(IMAGES_DIR);
const targetImages = Object.values(imageMapping);
const existingTargets = targetImages.filter(img => existingFiles.includes(img.replace('/images/products/', '')));

console.log(`📊 Image Status:`);
console.log(`   - Total mappings: ${Object.keys(imageMapping).length}`);
console.log(`   - Target images found: ${existingTargets.length}`);
console.log(`   - Target images missing: ${targetImages.length - existingTargets.length}\n`);

// Update the products.ts file
svgProducts.forEach(product => {
  const currentImage = product.currentImage;
  const targetImage = product.targetImage;
  const targetFilename = targetImage.replace('/images/products/', '');

  // Check if target image exists
  if (existingFiles.includes(targetFilename)) {
    // Replace both image_url and images array
    if (productsContent.includes(currentImage)) {
      // Replace image_url
      productsContent = productsContent.replace(
        `image_url: "${currentImage}"`,
        `image_url: "${targetImage}"`
      );

      // Replace in images array
      productsContent = productsContent.replace(
        `images: ["${currentImage}"]`,
        `images: ["${targetImage}"]`
      );

      updatedCount++;
      console.log(`✓ Updated: ${product.name}`);
      console.log(`  ${currentImage} → ${targetImage}`);
    } else {
      skippedCount++;
      console.log(`⊘ Skipped: ${product.name} (already updated or not found)`);
    }
  } else {
    missingCount++;
    console.log(`✗ Missing: ${product.name}`);
    console.log(`  Target file not found: ${targetFilename}`);
  }
});

console.log(`\n📊 Update Summary:`);
console.log(`   - Successfully updated: ${updatedCount}`);
console.log(`   - Skipped (already done): ${skippedCount}`);
console.log(`   - Missing target images: ${missingCount}`);

// Write the updated content back
if (updatedCount > 0) {
  fs.writeFileSync(PRODUCTS_OUTPUT, productsContent, 'utf8');
  console.log(`\n✅ Updated ${PRODUCTS_FILE}`);
} else {
  console.log(`\n⚠️  No updates made - check if images are downloaded`);
}

console.log(`\n💡 Next steps:`);
if (missingCount > 0) {
  console.log(`   1. Download missing images (see IMAGE_DOWNLOAD_CHECKLIST.md)`);
  console.log(`   2. Run this script again`);
}
if (updatedCount > 0) {
  console.log(`   1. Verify the images display correctly in your app`);
  console.log(`   2. Run your development server to test`);
  console.log(`   3. Consider deleting old SVG files if no longer needed`);
}
