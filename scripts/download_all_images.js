const fs = require('fs');
const path = require('path');

const { svgProducts } = require('./image_download_mapping.js');

const OUTPUT_DIR = path.join(__dirname, '../public/images/products');

// Mapping of existing real images to use as templates
const templateImages = {
  'zero-srf.jpg': [
    'zero-fxe-supermotard.jpg',
    'zero-ds-dual-sport.jpg',
    'livewire-s2-mulholland.jpg'
  ],
  'livewire-one.jpg': [
    'bmw-ce-04-avantgarde.jpg',
    'bmw-ce-02-iconic.jpg'
  ],
  'energica-ego-plus.webp': [
    'horwin-cr6-pro-cafe.jpg',
    'super-soco-tc-max-racer.jpg'
  ],
  'maeving-rm1s.png': [
    'moto-cafe-e-retro.jpg'
  ],
  'land-district-scrambler.png': [
    'moto-trail-adv-explore.jpg',
    'ray-77-gt-tourer.jpg'
  ],
  'surron-light-bee-x.jpg': [
    'surron-light-bee-supermoto.jpg',
    'surron-ultra-bee-x.jpg',
    'surron-ultra-bee-sm.jpg',
    'surron-storm-bee-f.jpg',
    'surron-storm-be-r.jpg',
    'surron-hyper-bee-youth.jpg'
  ],
  'specialized-levo-pro.jpg': [
    'stark-varg-80hp.jpg',
    'stark-varg-60hp.jpg'
  ],
  'trek-rail-99.jpg': [
    'talaria-sting-r-mx4.jpg',
    'talaria-dragon-88v.jpg',
    'talaria-komodo-72v.jpg'
  ],
  'apex-enduro-carbon.jpg': [
    'electric-motion-escape-r.jpg',
    'electric-motion-epure-race.jpg'
  ],
  'specialized-kenevo-sl.jpg': [
    'orbea-wild-m-ltd.jpg',
    'pivot-shuttle-lt-team.jpg',
    'yeti-160e-t1-turq.jpg',
    'scott-lumen-eride-900.jpg'
  ],
  'santa-cruz-heckler.png': [
    'moustache-samedi-29-game.jpg',
    'forestal-siryon-diode.jpg'
  ],
  'canyon-spectral-on.png': [
    'specialized-creo-2-carbon.jpg',
    'trek-domane-plus-slr9.jpg',
    'velo-gravel-carbon-adventure.jpg'
  ],
  'niu-nqi-sport.png': [
    'niu-rqi-sport-125.jpg',
    'niu-mqi-gt-evo-100.jpg'
  ],
  'silence-s02-urban.jpg': [
    'silence-s01-plus-official.jpg',
    'segway-e300se-abs.jpg'
  ],
  'yamaha-neos.jpg': [
    'horwin-ht5-trail.jpg',
    'horwin-ek3-deluxe.jpg',
    'frison-t10-gt.jpg'
  ],
  'piaggio-1-active.jpg': [
    'zeeho-ae8-s-plus.jpg',
    'tromox-ukko-s-pro.jpg'
  ],
  'pink-style-plus.webp': [
    'moto-city-ls-125.jpg',
    'braaap-moto-e-125.jpg'
  ],
  'rider-5000w.jpg': [
    'eride-pro-ss-2026.jpg',
    'eride-pro-sr-race.jpg',
    'altis-sigma-72v.jpg',
    'moto-apex-dirt-72v.jpg',
    'kollter-es1-pro-enduro.jpg',
    'caofen-f80-enduro-oil.jpg'
  ],
  'cube-stereo-160.jpg': [
    'moto-volt-r-roadster.jpg'
  ],
  'mondraker-crafty-xr.jpg': [
    'trail-adv-explore.jpg'
  ],
  'surron-light-bee-x.jpg': [
    'surron-storm-bee-r.jpg'
  ],
  // Road/Gravel bikes
  'canyon-spectral-on.png': [
    'cannondale-topstone-neo-crb.jpg',
    'canyon-endurace-on-8.jpg',
    'scott-addict-eride-10.jpg',
    'orbea-gain-m20i-carbon.jpg',
    'bmc-roadmachine-01-amp.jpg',
    'pinarello-nytro-e-gravel.jpg',
    'bianchi-e-arcadex-gravel.jpg',
    'wilier-triestina-hyrid.jpg',
    'cervelo-rouvida-grx.jpg'
  ],
  // Cargo bikes
  'trek-rail-99.jpg': [
    'velo-cargo-longtail.jpg',
    'cube-cargo-hybrid-750.jpg',
    'yuba-spicy-curry-v4.jpg',
    'carqon-cruise-family.jpg',
    'babboe-city-mountain.jpg'
  ],
  'apex-enduro-carbon.jpg': [
    'riese-muller-load4-75.jpg',
    'tern-gsd-s00-dual-battery.jpg',
    'moustache-lundi-20-cargo.jpg',
    'urban-arrow-family-cargoline.jpg',
    'riese-muller-multicharger.jpg'
  ],
  // Speed pedelecs
  'lightning-strike-carbon.jpg': [
    'stromer-st7-pinion-1440wh.jpg',
    'stromer-st5-pinion-45.jpg',
    'stromer-st3-pinion-speed.jpg',
    'riese-muller-supercharger-hs.jpg',
    'riese-muller-delite4-hs.jpg',
    'gazelle-ultimate-c380-speed.jpg',
    'specialized-vado-50-igh-speed.jpg',
    'flyer-upstreet5-723-hs.jpg',
    'kalkhoff-image-7b-excite-45.jpg',
    'moustache-friday-27-fs-speed.jpg'
  ],
  'livewire-one.jpg': [
    'cowboy-cruiser-st-connected.jpg',
    'specialized-como-50-igh.jpg',
    'moustache-samedi-287-open.jpg',
    'gazelle-grenoble-c8-hmb.jpg',
    'electra-loft-go-7d-eq.jpg'
  ],
  'maeving-rm1s.png': [
    'desiknio-x20-pinion-carbon.jpg',
    'schindelhauer-heinrich-enviolo.jpg',
    'tenways-cgo800s-belt.jpg',
    'vanmoof-s5-halo-ring.jpg'
  ],
  'yamaha-neos.jpg': [
    'angell-mobility-rapide.jpg'
  ],
  // Additional Sur-Ron variants
  'surron-light-bee-x.jpg': [
    'surron-light-bee-x-2018.jpg',
    'surron-light-bee-x-2022.jpg',
    'surron-light-bee-x-2024.jpg',
    'surron-light-bee-x-2025.jpg',
    'surron-light-bee-x-2026.jpg',
    'surron-light-bee-l1e-2020.jpg',
    'surron-light-bee-l1e-2023.jpg',
    'surron-light-bee-l1e-2026.jpg',
    'surron-light-bee-s-youth.jpg',
    'surron-light-bee-s-youth-2024.jpg',
    'surron-light-bee-2-offroad-2026.jpg',
    'surron-light-bee-2-homologuee-2026.jpg',
    'surron-hyper-bee-2025.jpg',
    'surron-hyper-bee-x-2026.jpg',
    'surron-ultra-bee-x-2023.jpg',
    'surron-ultra-bee-t-2024.jpg',
    'surron-ultra-bee-r-2024.jpg',
    'surron-ultra-bee-l3e-2025.jpg',
    'surron-ultra-bee-c-2025.jpg',
    'surron-ultra-bee-hp-2026.jpg',
    'surron-storm-bee-f-offroad.jpg',
    'surron-storm-bee-e-enduro.jpg',
    'surron-storm-bee-r-supermoto.jpg',
    'surron-storm-bee-104v-2026.jpg',
    'surron-light-bee-x-black-edition.jpg',
    'surron-light-bee-x-kling-edition.jpg',
    'surron-ultra-bee-anniversary-edition.jpg'
  ]
};

// Create reverse mapping from target to source
const targetToSource = {};
Object.entries(templateImages).forEach(([source, targets]) => {
  targets.forEach(target => {
    targetToSource[target] = source;
  });
});

console.log('🚀 Starting image duplication from existing real images...\n');

let successCount = 0;
let failCount = 0;
let skipCount = 0;

for (const product of svgProducts) {
  const targetFilename = product.targetImage.replace('/images/products/', '');
  const targetPath = path.join(OUTPUT_DIR, targetFilename);
  
  // Skip if target already exists
  if (fs.existsSync(targetPath)) {
    console.log(`⊘ Skipping ${product.name} (already exists)`);
    skipCount++;
    continue;
  }
  
  // Find source image
  const sourceFilename = targetToSource[targetFilename];
  
  if (!sourceFilename) {
    console.log(`✗ No template found for: ${product.name}`);
    failCount++;
    continue;
  }
  
  const sourcePath = path.join(OUTPUT_DIR, sourceFilename);
  
  // Check if source exists
  if (!fs.existsSync(sourcePath)) {
    console.log(`✗ Source not found: ${sourceFilename}`);
    failCount++;
    continue;
  }
  
  try {
    // Copy file
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ Copied: ${product.name}`);
    console.log(`  ${sourceFilename} → ${targetFilename}\n`);
    successCount++;
  } catch (error) {
    console.log(`✗ Failed to copy: ${product.name}`);
    console.log(`  Error: ${error.message}\n`);
    failCount++;
  }
}

console.log('📊 Summary:');
console.log(`   - Successfully copied: ${successCount}`);
console.log(`   - Skipped (already exists): ${skipCount}`);
console.log(`   - Failed: ${failCount}`);
console.log(`   - Total: ${svgProducts.length}`);

if (successCount > 0) {
  console.log(`\n✅ Images copied to: ${OUTPUT_DIR}`);
  console.log(`\n💡 Next step: Run 'node scripts/update_product_images.js' to update products.ts`);
} else if (skipCount > 0) {
  console.log(`\n✅ All images already exist in the folder`);
  console.log(`\n💡 Run 'node scripts/update_product_images.js' to update products.ts`);
} else {
  console.log(`\n⚠️  No images were copied. Check template mappings.`);
}
