const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'src', 'lib', 'products.ts');
let content = fs.readFileSync(productsFile, 'utf8');

// Mapping: product ID -> new image filename (without path prefix)
const imageMap = {
  // Zero SR/F duplicates
  'moto-volt-r': 'moto-volt-r-roadster.svg',
  'zero-fxe-supermotard': 'zero-fxe-supermotard.svg',
  
  // Zero DSR/X duplicates
  'moto-trail-adv': 'moto-trail-adv-explore.svg',
  'zero-ds-dual-sport': 'zero-ds-dual-sport.svg',
  
  // Mondraker Crafty duplicates
  'tern-gsd-s00-dual-batt': 'tern-gsd-s00-dual-battery.svg',
  'carqon-cruise-family': 'carqon-cruise-family.svg',
  'moustache-friday-27-fs-speed': 'moustache-friday-27-fs-speed.svg',
  'gazelle-grenoble-c8-hmb': 'gazelle-grenoble-c8-hmb.svg',
  
  // Livewire S2 Delmar duplicates
  'livewire-s2-mulholland': 'livewire-s2-mulholland.svg',
  'moto-cafe-e': 'moto-cafe-e-retro.svg',
  'horwin-cr6-pro-manual': 'horwin-cr6-pro-cafe.svg',
  'super-soco-tc-max-pro': 'super-soco-tc-max-racer.svg',
  'tromox-ukko-s-pro': 'tromox-ukko-s-pro.svg',
  'niu-rqi-sport-125': 'niu-rqi-sport-125.svg',
  'braaap-moto-e-125': 'braaap-moto-e-125.svg',
  
  // Specialized Levo Pro duplicates
  'forestal-siryon-diode': 'forestal-siryon-diode.svg',
  'specialized-creo-2-carbon': 'specialized-creo-2-carbon.svg',
  'scott-addict-eride-10': 'scott-addict-eride-10.svg',
  'pinarello-nytro-e-gravel': 'pinarello-nytro-e-gravel.svg',
  'cervelo-rouvida-grx': 'cervelo-rouvida-grx.svg',
  'stromer-st7-pinion-1440wh': 'stromer-st7-pinion-1440wh.svg',
  'riese-muller-delite4-hs': 'riese-muller-delite4-hs.svg',
  'specialized-como-50-igh': 'specialized-como-50-igh.svg',
  
  // Specialized Kenevo SL duplicates
  'scott-lumen-eride-900': 'scott-lumen-eride-900.svg',
  'bmc-roadmachine-01-amp': 'bmc-roadmachine-01-amp.svg',
  'urban-arrow-family-cargoline': 'urban-arrow-family-cargoline.svg',
  'riese-muller-supercharger-hs': 'riese-muller-supercharger-hs.svg',
  'vanmoof-s5-halo-ring': 'vanmoof-s5-halo-ring.svg',
  'angell-mobility-rapide': 'angell-mobility-rapide.svg',
  'electra-loft-go-7d-eq': 'electra-loft-go-7d-eq.svg',
  
  // Canyon Spectral ON duplicates
  'pivot-shuttle-lt-team': 'pivot-shuttle-lt-team.svg',
  'cannondale-topstone-neo-crb': 'cannondale-topstone-neo-crb.svg',
  'canyon-endurace-on-8': 'canyon-endurace-on-8.svg',
  'wilier-triestina-hyrid': 'wilier-triestina-hyrid.svg',
  'stromer-st5-pinion-45': 'stromer-st5-pinion-45.svg',
  'specialized-vado-50-igh-speed': 'specialized-vado-50-igh-speed.svg',
  'desiknio-x20-pinion-carbon': 'desiknio-x20-pinion-carbon.svg',
  
  // Trek Rail 99 duplicates
  'orbea-wild-m-ltd': 'orbea-wild-m-ltd.svg',
  'trek-domane-plus-slr9': 'trek-domane-plus-slr9.svg',
  'velo-cargo-longtail': 'velo-cargo-longtail.svg',
  'babboe-city-mountain': 'babboe-city-mountain.svg',
  'gazelle-ultimate-c380-speed': 'gazelle-ultimate-c380-speed.svg',
  'moustache-samedi-287-open': 'moustache-samedi-287-open.svg',
  
  // Cube Stereo 160 duplicates
  'moustache-samedi-29-game': 'moustache-samedi-29-game.svg',
  'bianchi-e-arcadex-gravel': 'bianchi-e-arcadex-gravel.svg',
  'riese-muller-load4-75': 'riese-muller-load4-75.svg',
  'cube-cargo-hybrid-750': 'cube-cargo-hybrid-750.svg',
  'kalkhoff-image-7b-excite-45': 'kalkhoff-image-7b-excite-45.svg',
  'schindelhauer-heinrich-enviolo': 'schindelhauer-heinrich-enviolo.svg',
  
  // Apex Enduro Carbon duplicates
  'velo-gravel-carbon': 'velo-gravel-carbon-adventure.svg',
  'orbea-gain-m20i-carbon': 'orbea-gain-m20i-carbon.svg',
  'moustache-lundi-20-cargo': 'moustache-lundi-20-cargo.svg',
  'stromer-st3-pinion-speed': 'stromer-st3-pinion-speed.svg',
  'flyer-upstreet5-723-hs': 'flyer-upstreet5-723-hs.svg',
  
  // Santa Cruz Heckler duplicates
  'yeti-160e-t1-turq': 'yeti-160e-t1-turq.svg',
  'yuba-spicy-curry-v4': 'yuba-spicy-curry-v4.svg',
  'riese-muller-multicharger': 'riese-muller-multicharger.svg',
  'cowboy-cruiser-st-connected': 'cowboy-cruiser-st-connected.svg',
  'tenways-cgo800s-belt': 'tenways-cgo800s-belt.svg',
  
  // Sur-Ron duplicates (all shared surron-light-bee-x.jpg)
  'kollter-es1-pro-enduro': 'kollter-es1-pro-enduro.svg',
  'caofen-f80-enduro-oil': 'caofen-f80-enduro-oil.svg',
  'horwin-ht5-trail': 'horwin-ht5-trail.svg',
  'bmw-ce-04-avantgarde': 'bmw-ce-04-avantgarde.svg',
  'silence-s01-plus-official': 'silence-s01-plus-official.svg',
  'ray-77-gt-tourer': 'ray-77-gt-tourer.svg',
  'segway-e300se-abs': 'segway-e300se-abs.svg',
  'moto-city-ls-125': 'moto-city-ls-125.svg',
  'niu-mqi-gt-evo-100': 'niu-mqi-gt-evo-100.svg',
  'horwin-ek3-deluxe': 'horwin-ek3-deluxe.svg',
  'frison-t10-gt': 'frison-t10-gt.svg',
  'zeeho-ae8-s-plus': 'zeeho-ae8-s-plus.svg',
  'bmw-ce-02-iconic': 'bmw-ce-02-iconic.svg',
  'surron-light-bee-supermoto': 'surron-light-bee-supermoto.svg',
  'surron-ultra-bee': 'surron-ultra-bee-x.svg',
  'surron-ultra-bee-sm': 'surron-ultra-bee-sm.svg',
  'surron-storm-bee': 'surron-storm-bee-f.svg',
  'surron-storm-bee-r': 'surron-storm-bee-r.svg',
  'surron-hyper-bee-youth': 'surron-hyper-bee-youth.svg',
  'stark-varg-80hp': 'stark-varg-80hp.svg',
  'stark-varg-60hp': 'stark-varg-60hp.svg',
  'talaria-sting-r-mx4': 'talaria-sting-r-mx4.svg',
  'talaria-dragon-88v': 'talaria-dragon-88v.svg',
  'talaria-komodo-72v': 'talaria-komodo-72v.svg',
  'eride-pro-ss-2026': 'eride-pro-ss-2026.svg',
  'eride-pro-sr-race': 'eride-pro-sr-race.svg',
  'altis-sigma-72v': 'altis-sigma-72v.svg',
  'moto-apex-dirt-72v': 'moto-apex-dirt-72v.svg',
  'electric-motion-escape-r': 'electric-motion-escape-r.svg',
  'electric-motion-epure-race': 'electric-motion-epure-race.svg',
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
  
  if (currentId && imageMap[currentId]) {
    const imgMatch = lines[i].match(/^(\s*)image_url:\s*"[^"]+"/);
    if (imgMatch) {
      const indent = imgMatch[1];
      const newImg = `/images/products/${imageMap[currentId]}`;
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
      delete imageMap[currentId]; // prevent double-update
    }
  }
}

const newContent = lines.join(nl);
fs.writeFileSync(productsFile, newContent);

console.log(`Updated ${updated} products with unique images`);
const remaining = Object.keys(imageMap);
if (remaining.length > 0) {
  console.log(`\nWARNING: ${remaining.length} product IDs not found in products.ts:`);
  remaining.forEach(id => console.log(`  - ${id}`));
}
