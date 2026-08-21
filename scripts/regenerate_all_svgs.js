const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');

// Read current products to get all image paths
const productsContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'products.ts'), 'utf8');
const imageMatches = [...productsContent.matchAll(/image_url:\s*"\/images\/products\/([^"]+)"/g)];
const allImages = [...new Set(imageMatches.map(m => m[1]))];

// Get ID-to-name mapping
const lines = productsContent.split(/\r?\n/);
const productMap = [];
let currentId = null;
let currentNom = null;
let currentBrand = null;
let currentType = null;

for (const line of lines) {
  const idM = line.match(/^\s*id:\s*"([^"]+)"/);
  if (idM) currentId = idM[1];
  const nomM = line.match(/^\s*nom:\s*"([^"]+)"/);
  if (nomM) currentNom = nomM[1];
  const brandM = line.match(/^\s*brand:\s*"([^"]+)"/);
  if (brandM) currentBrand = brandM[1];
  const typeM = line.match(/^\s*type:\s*"([^"]+)"/);
  if (typeM) currentType = typeM[1];
  const imgM = line.match(/^\s*image_url:\s*"\/images\/products\/([^"]+)"/);
  if (imgM && currentId) {
    productMap.push({ id: currentId, nom: currentNom, brand: currentBrand, type: currentType, image: imgM[1] });
  }
}

console.log(`Found ${allImages.length} unique images, ${productMap.length} products`);

// Color palettes for visual variety
const palettes = [
  { bg1: '#0f0c29', bg2: '#302b63', bg3: '#24243e', accent: '#ff6b35', text: '#fff' },
  { bg1: '#1a1a2e', bg2: '#16213e', bg3: '#0f3460', accent: '#e94560', text: '#fff' },
  { bg1: '#0d1b2a', bg2: '#1b263b', bg3: '#415a77', accent: '#ffd60a', text: '#fff' },
  { bg1: '#10002b', bg2: '#240046', bg3: '#3c096c', accent: '#ff6d00', text: '#fff' },
  { bg1: '#03071e', bg2: '#370617', bg3: '#6a040f', accent: '#ffba08', text: '#fff' },
  { bg1: '#014f86', bg2: '#2a6f97', bg3: '#2c7da0', accent: '#a8dadc', text: '#fff' },
  { bg1: '#1b4332', bg2: '#2d6a4f', bg3: '#40916c', accent: '#95d5b2', text: '#fff' },
  { bg1: '#212529', bg2: '#343a40', bg3: '#495057', accent: '#00f5d4', text: '#fff' },
  { bg1: '#2b2d42', bg2: '#8d99ae', bg3: '#495057', accent: '#ef233c', text: '#fff' },
  { bg1: '#000814', bg2: '#001d3d', bg3: '#003566', accent: '#ffc300', text: '#fff' },
  { bg1: '#1a1a1a', bg2: '#2d2d2d', bg3: '#404040', accent: '#00bbf9', text: '#fff' },
  { bg1: '#0b090a', bg2: '#161a1d', bg3: '#212529', accent: '#ba181b', text: '#fff' },
  { bg1: '#0d1321', bg2: '#1d2d44', bg3: '#3e5c76', accent: '#748cab', text: '#fff' },
  { bg1: '#1b0000', bg2: '#3d0000', bg3: '#6b0000', accent: '#ff9500', text: '#fff' },
  { bg1: '#0a0a0a', bg2: '#1a1a2e', bg3: '#16213e', accent: '#00ff88', text: '#fff' },
];

// Different layout styles
function generateSVG(product, index) {
  const palette = palettes[index % palettes.length];
  const styleType = index % 8; // 8 different visual styles
  const isBike = product.type === 'velo';
  const name = product.nom || product.id;
  const brand = product.brand || '';
  
  // Short name for display (max 25 chars)
  const shortName = name.length > 25 ? name.substring(0, 22) + '...' : name;
  const shortBrand = brand.length > 20 ? brand.substring(0, 17) + '...' : brand;
  
  // Generate unique geometric pattern based on index
  const patternSeed = index * 137;
  const shapes = [];
  
  // Add background decorative elements
  for (let i = 0; i < 5; i++) {
    const x = ((patternSeed + i * 73) % 800) + 50;
    const y = ((patternSeed + i * 47) % 300) + 50;
    const size = ((patternSeed + i * 31) % 60) + 20;
    const opacity = 0.05 + (i * 0.02);
    shapes.push(`<circle cx="${x}" cy="${y}" r="${size}" fill="${palette.accent}" opacity="${opacity}"/>`);
  }
  
  let vehicleGraphic = '';
  
  if (isBike) {
    // Different bicycle styles
    const bikeStyles = [
      // Style 0: Road bike - thin tires, drop bars
      `<circle cx="200" cy="280" r="55" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <circle cx="200" cy="280" r="48" fill="none" stroke="${palette.accent}" stroke-width="1" opacity="0.3"/>
       <circle cx="650" cy="280" r="55" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <circle cx="650" cy="280" r="48" fill="none" stroke="${palette.accent}" stroke-width="1" opacity="0.3"/>
       <line x1="200" y1="280" x2="380" y2="200" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <line x1="380" y1="200" x2="550" y2="200" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <line x1="550" y1="200" x2="650" y2="280" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <line x1="380" y1="200" x2="420" y2="280" stroke="${palette.accent}" stroke-width="3" opacity="0.7"/>
       <line x1="420" y1="280" x2="550" y2="200" stroke="${palette.accent}" stroke-width="3" opacity="0.7"/>
       <path d="M360,195 L340,170 L320,165" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <path d="M550,200 L575,185 L595,185" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <rect x="395" y="210" width="80" height="10" rx="5" fill="${palette.accent}" opacity="0.4"/>`,
       
      // Style 1: MTB - thick tires, flat bars
      `<circle cx="200" cy="280" r="60" fill="none" stroke="${palette.accent}" stroke-width="6" opacity="0.8"/>
       <circle cx="200" cy="280" r="50" fill="none" stroke="${palette.accent}" stroke-width="2" opacity="0.3"/>
       <circle cx="650" cy="280" r="60" fill="none" stroke="${palette.accent}" stroke-width="6" opacity="0.8"/>
       <circle cx="650" cy="280" r="50" fill="none" stroke="${palette.accent}" stroke-width="2" opacity="0.3"/>
       <line x1="200" y1="280" x2="370" y2="195" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <line x1="370" y1="195" x2="540" y2="195" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <line x1="540" y1="195" x2="650" y2="280" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <line x1="370" y1="195" x2="410" y2="280" stroke="${palette.accent}" stroke-width="4" opacity="0.7"/>
       <line x1="410" y1="280" x2="540" y2="195" stroke="${palette.accent}" stroke-width="4" opacity="0.7"/>
       <path d="M350,190 L330,160 L310,155" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <line x1="310" y1="155" x2="350" y2="155" stroke="${palette.accent}" stroke-width="3" opacity="0.6"/>
       <path d="M540" y1="195" x2="560" y2="175" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <rect x="390" y="205" width="90" height="12" rx="6" fill="${palette.accent}" opacity="0.4"/>`,
       
      // Style 2: Cargo bike - extended rear
      `<circle cx="180" cy="290" r="50" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <circle cx="680" cy="290" r="50" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <line x1="180" y1="290" x2="350" y2="210" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <line x1="350" y1="210" x2="550" y2="210" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <line x1="550" y1="210" x2="680" y2="290" stroke="${palette.accent}" stroke-width="5" opacity="0.9"/>
       <rect x="100" y="240" width="160" height="50" rx="8" fill="${palette.accent}" opacity="0.2" stroke="${palette.accent}" stroke-width="2"/>
       <rect x="110" y="250" width="140" height="30" rx="4" fill="${palette.accent}" opacity="0.1"/>
       <path d="M350,210 L390,290" stroke="${palette.accent}" stroke-width="4" opacity="0.7"/>
       <path d="M330,205 L310,175" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>`,
       
      // Style 3: Commuter - step-through frame
      `<circle cx="200" cy="280" r="52" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <circle cx="650" cy="280" r="52" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <path d="M200,280 L350,220 Q420,250 500,220 L650,280" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <line x1="350" y1="220" x2="400" y2="280" stroke="${palette.accent}" stroke-width="3" opacity="0.7"/>
       <path d="M330,215 L310,180 L295,175" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <path d="M500,220 L520,195 L540,195" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <rect x="380" y="230" width="70" height="8" rx="4" fill="${palette.accent}" opacity="0.4"/>
       <path d="M350,220 L360,200 Q400,190 440,200 L500,220" fill="${palette.accent}" opacity="0.15"/>`,
    ];
    vehicleGraphic = bikeStyles[index % bikeStyles.length];
  } else {
    // Motorcycle styles
    const motoStyles = [
      // Style 0: Sport bike - aggressive fairing
      `<circle cx="180" cy="290" r="60" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <circle cx="180" cy="290" r="50" fill="none" stroke="${palette.accent}" stroke-width="2" opacity="0.3"/>
       <circle cx="700" cy="290" r="60" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <circle cx="700" cy="290" r="50" fill="none" stroke="${palette.accent}" stroke-width="2" opacity="0.3"/>
       <path d="M180,290 L280,230 L400,200 L550,195 L650,220 L700,260 L720,290" fill="${palette.accent}" opacity="0.15" stroke="${palette.accent}" stroke-width="2"/>
       <path d="M400,200 L420,160 L500,145 L570,155 L600,180 L600,210" fill="${palette.accent}" opacity="0.2" stroke="${palette.accent}" stroke-width="2"/>
       <path d="M650,220 L680,200 L710,210" fill="${palette.accent}" opacity="0.3"/>
       <ellipse cx="680" cy="225" rx="12" ry="8" fill="#FFE066" opacity="0.8"/>
       <path d="M350,230 Q420,215 500,215 L490,225 Q420,225 360,235 Z" fill="#222" opacity="0.8"/>`,
       
      // Style 1: Naked bike - exposed frame
      `<circle cx="190" cy="290" r="58" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <circle cx="690" cy="290" r="58" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <path d="M190,290 L300,240 L420,220 L560,225 L650,250 L690,280" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <path d="M420,220 L440,180 L510,165 L570,175 L590,200" fill="none" stroke="${palette.accent}" stroke-width="3" opacity="0.8"/>
       <line x1="300" y1="240" x2="350" y2="290" stroke="${palette.accent}" stroke-width="3" opacity="0.6"/>
       <circle cx="500" cy="195" r="15" fill="${palette.accent}" opacity="0.2"/>
       <path d="M380,230 Q430,220 490,220 L480,230 Q430,230 390,235 Z" fill="#222" opacity="0.8"/>
       <rect x="660" y="240" width="20" height="12" rx="3" fill="#FFE066" opacity="0.7"/>`,
       
      // Style 2: Adventure/tall bike
      `<circle cx="180" cy="295" r="62" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <circle cx="700" cy="295" r="62" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <path d="M180,295 L290,235 L420,210 L560,215 L660,240 L700,275" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.9"/>
       <path d="M420,210 L430,155 L490,135 L550,140 L580,165 L580,210" fill="${palette.accent}" opacity="0.15" stroke="${palette.accent}" stroke-width="2"/>
       <rect x="460" y="125" width="50" height="15" rx="3" fill="${palette.accent}" opacity="0.3"/>
       <path d="M380,225 Q430,210 500,210 L490,220 Q430,220 390,230 Z" fill="#222" opacity="0.8"/>
       <path d="M280,250 L260,220 L275,210" fill="${palette.accent}" opacity="0.3"/>`,
       
      // Style 3: Cruiser - low and long
      `<circle cx="160" cy="300" r="55" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <circle cx="720" cy="300" r="55" fill="none" stroke="${palette.accent}" stroke-width="5" opacity="0.8"/>
       <path d="M160,300 L280,260 L440,245 L600,250 L700,270 L720,295" fill="${palette.accent}" opacity="0.15" stroke="${palette.accent}" stroke-width="3"/>
       <path d="M440,245 L450,210 L520,195 L580,200 L600,220" fill="${palette.accent}" opacity="0.2" stroke="${palette.accent}" stroke-width="2"/>
       <path d="M160,300 L120,290 L100,300 L110,310" fill="${palette.accent}" opacity="0.3"/>
       <path d="M380,255 Q450,245 530,245 L520,255 Q450,255 390,260 Z" fill="#222" opacity="0.8"/>
       <ellipse cx="680" cy="260" rx="15" ry="10" fill="${palette.accent}" opacity="0.3"/>`,
       
      // Style 4: Dirt bike - light and angular
      `<circle cx="190" cy="285" r="65" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <circle cx="190" cy="285" r="55" fill="none" stroke="${palette.accent}" stroke-width="1.5" opacity="0.3"/>
       <circle cx="690" cy="285" r="65" fill="none" stroke="${palette.accent}" stroke-width="4" opacity="0.8"/>
       <circle cx="690" cy="285" r="55" fill="none" stroke="${palette.accent}" stroke-width="1.5" opacity="0.3"/>
       <path d="M190,285 L300,230 L430,205 L560,210 L650,235 L690,270" fill="${palette.accent}" opacity="0.12" stroke="${palette.accent}" stroke-width="3"/>
       <path d="M430,205 L450,160 L510,140 L560,150 L580,175" fill="${palette.accent}" opacity="0.2" stroke="${palette.accent}" stroke-width="2"/>
       <path d="M450,160 L460,130 L490,120 L520,125 L525,145" fill="${palette.accent}" opacity="0.25"/>
       <path d="M390,220 Q440,210 500,210 L490,220 Q440,220 400,225 Z" fill="#222" opacity="0.8"/>
       <path d="M190,285 L170,260 L185,250" fill="${palette.accent}" opacity="0.3"/>`,
    ];
    vehicleGraphic = motoStyles[index % motoStyles.length];
  }
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
  <defs>
    <linearGradient id="bg${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${palette.bg1}"/>
      <stop offset="50%" style="stop-color:${palette.bg2}"/>
      <stop offset="100%" style="stop-color:${palette.bg3}"/>
    </linearGradient>
    <radialGradient id="glow${index}" cx="50%" cy="55%" r="45%">
      <stop offset="0%" style="stop-color:${palette.accent};stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="floor${index}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${palette.accent};stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:${palette.bg1};stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="900" height="500" fill="url(#bg${index})"/>
  <ellipse cx="450" cy="380" rx="380" ry="70" fill="url(#glow${index})"/>
  <ellipse cx="450" cy="370" rx="320" ry="15" fill="url(#floor${index})"/>
  ${shapes.join('\n  ')}
  ${vehicleGraphic}
  <!-- Brand label -->
  <text x="450" y="430" text-anchor="middle" fill="${palette.accent}" font-family="Arial,sans-serif" font-size="13" font-weight="bold" opacity="0.6" letter-spacing="3">${shortBrand.toUpperCase()}</text>
  <!-- Product name -->
  <text x="450" y="460" text-anchor="middle" fill="${palette.text}" font-family="Arial,sans-serif" font-size="18" font-weight="bold" opacity="0.85">${shortName}</text>
  <!-- Corner accent -->
  <rect x="20" y="20" width="60" height="3" rx="1.5" fill="${palette.accent}" opacity="0.5"/>
  <rect x="20" y="28" width="30" height="3" rx="1.5" fill="${palette.accent}" opacity="0.3"/>
</svg>`;
}

// Generate all images
let generated = 0;
for (let i = 0; i < allImages.length; i++) {
  const imgFile = allImages[i];
  // Skip non-SVG files (original jpg/png images)
  if (!imgFile.endsWith('.svg')) continue;
  
  // Find a product that uses this image
  const product = productMap.find(p => p.image === imgFile);
  if (!product) continue;
  
  const svg = generateSVG(product, i);
  const filepath = path.join(outDir, imgFile);
  fs.writeFileSync(filepath, svg);
  generated++;
}

console.log(`Regenerated ${generated} unique SVG images with distinct designs`);
