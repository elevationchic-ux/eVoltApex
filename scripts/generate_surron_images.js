const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');

// Reuse the SVG generation functions from the other script
function motorcycleSVG(bodyColor, accentColor, style, label) {
  let bodyPath = '';
  let extras = '';
  switch(style) {
    case 'sport':
      bodyPath = `<path d="M180,280 L220,240 L320,220 L420,210 L520,220 L600,240 L650,260 L680,280 L700,300 L680,310 L600,320 L500,325 L400,325 L300,320 L220,310 L180,300 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M320,220 L350,180 L420,160 L500,155 L560,165 L600,190 L600,240" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <rect x="580" y="200" width="80" height="30" rx="5" fill="${accentColor}" opacity="0.8"/>`;
      extras = `<path d="M650,250 L700,230 L720,240 L700,260" fill="${accentColor}" opacity="0.6"/>`;
      break;
    case 'naked':
      bodyPath = `<path d="M180,280 L230,250 L330,235 L430,225 L530,230 L620,245 L670,270 L690,290 L680,305 L600,315 L500,320 L400,320 L300,315 L220,305 L180,295 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M330,235 L360,200 L430,185 L500,180 L550,190 L580,210 L580,240" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <circle cx="400" cy="210" r="25" fill="${accentColor}" opacity="0.3"/>`;
      extras = `<rect x="350" y="195" width="100" height="8" rx="4" fill="${accentColor}" opacity="0.5"/>`;
      break;
    case 'adventure':
      bodyPath = `<path d="M170,280 L220,250 L320,230 L420,215 L530,220 L630,240 L680,265 L700,290 L690,310 L600,320 L500,325 L400,325 L300,320 L220,310 L170,295 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M320,230 L340,180 L400,155 L480,145 L540,155 L580,180 L600,220" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M400,145 L410,120 L430,110 L460,110 L480,120 L480,145" fill="${accentColor}" opacity="0.4"/>`;
      extras = `<rect x="380" y="130" width="60" height="15" rx="3" fill="${accentColor}" opacity="0.5"/>`;
      break;
    case 'supermoto':
      bodyPath = `<path d="M190,275 L230,245 L330,225 L430,215 L530,220 L620,240 L660,260 L680,280 L670,300 L600,310 L500,315 L400,315 L300,310 L230,300 L190,290 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M330,225 L360,185 L430,170 L500,165 L550,175 L580,200 L580,230" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M360,185 L370,155 L390,140 L430,135 L460,140 L470,160" fill="${accentColor}" opacity="0.4"/>`;
      extras = `<path d="M500,165 L510,140 L530,130 L550,135 L555,155" fill="${bodyColor}" opacity="0.7"/>`;
      break;
    case 'dirt':
    default:
      bodyPath = `<path d="M200,270 L240,240 L340,220 L440,210 L530,215 L610,235 L650,255 L670,275 L660,295 L590,305 L490,310 L390,310 L290,305 L230,295 L200,285 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M340,220 L370,180 L440,165 L510,160 L560,170 L590,195 L580,225" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M370,180 L380,150 L410,135 L450,130 L480,140 L490,165" fill="${accentColor}" opacity="0.4"/>`;
      extras = `<path d="M200,270 L180,250 L190,240 L210,250" fill="${accentColor}" opacity="0.4"/>
        <path d="M650,255 L680,240 L690,250 L670,270" fill="${accentColor}" opacity="0.4"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#16213e;stop-opacity:1"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="60%" r="40%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="900" height="500" fill="url(#bg)"/>
  <ellipse cx="450" cy="380" rx="350" ry="60" fill="url(#glow)"/>
  <circle cx="220" cy="320" r="65" fill="none" stroke="#444" stroke-width="8"/>
  <circle cx="220" cy="320" r="55" fill="none" stroke="#333" stroke-width="3"/>
  <circle cx="220" cy="320" r="15" fill="#555"/>
  <circle cx="680" cy="320" r="65" fill="none" stroke="#444" stroke-width="8"/>
  <circle cx="680" cy="320" r="55" fill="none" stroke="#333" stroke-width="3"/>
  <circle cx="680" cy="320" r="15" fill="#555"/>
  ${bodyPath}
  ${extras}
  <path d="M350,210 Q400,195 480,195 Q520,195 540,205 L530,215 Q490,205 440,205 Q390,205 360,215 Z" fill="#222" stroke="#333" stroke-width="1"/>
  <ellipse cx="640" cy="240" rx="15" ry="12" fill="#FFE066" opacity="0.8"/>
  <ellipse cx="640" cy="240" rx="8" ry="6" fill="#FFF" opacity="0.9"/>
  <text x="450" y="460" text-anchor="middle" fill="${accentColor}" font-family="Arial,sans-serif" font-size="16" font-weight="bold" opacity="0.7">${label}</text>
</svg>`;
}

// Sur-Ron products: [filename, style, bodyColor, accentColor, label]
const surronProducts = [
  ['surron-light-bee-x-2018', 'dirt', '#ff6600', '#1a1a1a', 'LB X 2018'],
  ['surron-light-bee-x-2022', 'dirt', '#ff8500', '#212529', 'LB X 2022'],
  ['surron-light-bee-x-2024', 'dirt', '#e85d04', '#030712', 'LB X 2024'],
  ['surron-light-bee-x-2025', 'dirt', '#dc2f02', '#1a1a1a', 'LB X 2025'],
  ['surron-light-bee-x-2026', 'dirt', '#d00000', '#f8f9fa', 'LB X 2026'],
  ['surron-light-bee-l1e-2020', 'dirt', '#2a9d8f', '#264653', 'LB L1E 2020'],
  ['surron-light-bee-l1e-2023', 'dirt', '#264653', '#e9c46a', 'LB L1E 2023'],
  ['surron-light-bee-l1e-2026', 'dirt', '#005f73', '#94d2bd', 'LB L1E 2026'],
  ['surron-light-bee-s-youth', 'dirt', '#06d6a0', '#1a1a1a', 'LB S Youth'],
  ['surron-light-bee-s-youth-2024', 'dirt', '#386641', '#a7c957', 'LB S Youth 2024'],
  ['surron-light-bee-2-offroad-2026', 'dirt', '#00b4d8', '#03045e', 'LB 2 Off-Road'],
  ['surron-light-bee-2-homologuee-2026', 'naked', '#0077b6', '#caf0f8', 'LB 2 Route'],
  ['surron-hyper-bee-2025', 'dirt', '#7209b7', '#f72585', 'Hyper Bee 2025'],
  ['surron-hyper-bee-x-2026', 'dirt', '#560bad', '#480ca8', 'Hyper Bee X'],
  ['surron-ultra-bee-x-2023', 'dirt', '#3a86ff', '#1a1a1a', 'Ultra Bee X'],
  ['surron-ultra-bee-t-2024', 'dirt', '#4361ee', '#f8f9fa', 'Ultra Bee T'],
  ['surron-ultra-bee-r-2024', 'dirt', '#4cc9f0', '#1a1a1a', 'Ultra Bee R'],
  ['surron-ultra-bee-l3e-2025', 'naked', '#7209b7', '#e0aaff', 'Ultra Bee L3E'],
  ['surron-ultra-bee-c-2025', 'naked', '#5a189a', '#ffd60a', 'Ultra Bee C'],
  ['surron-ultra-bee-hp-2026', 'sport', '#240046', '#e63946', 'Ultra Bee HP'],
  ['surron-storm-bee-f-offroad', 'dirt', '#d62828', '#1a1a1a', 'Storm Bee F'],
  ['surron-storm-bee-e-enduro', 'adventure', '#e63946', '#f1faee', 'Storm Bee E'],
  ['surron-storm-bee-r-supermoto', 'supermoto', '#457b9d', '#f1faee', 'Storm Bee R'],
  ['surron-storm-bee-104v-2026', 'dirt', '#1d3557', '#e63946', 'Storm Bee 104V'],
  ['surron-light-bee-x-black-edition', 'dirt', '#1a1a1a', '#ffd166', 'LB X Black Ed.'],
  ['surron-light-bee-x-kling-edition', 'dirt', '#6a040f', '#ffb703', 'LB X K Edition'],
  ['surron-ultra-bee-anniversary-edition', 'sport', '#9b2226', '#ee9b00', 'Ultra Bee Anniv.'],
];

let generated = 0;
for (const [filename, style, bodyColor, accentColor, label] of surronProducts) {
  const svg = motorcycleSVG(bodyColor, accentColor, style, label);
  const filepath = path.join(outDir, filename + '.svg');
  fs.writeFileSync(filepath, svg);
  generated++;
  console.log(`Generated: ${filename}.svg`);
}
console.log(`\nTotal Sur-Ron SVGs generated: ${generated}`);
