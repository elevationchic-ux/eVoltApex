const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'products');

// SVG templates for different vehicle types
function motorcycleSVG(bodyColor, accentColor, style, label) {
  // style: sport, naked, adventure, cruiser, supermoto, dirt
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
      extras = `<rect x="380" y="130" width="60" height="15" rx="3" fill="${accentColor}" opacity="0.5"/>
        <path d="M300,260 L280,230 L290,220 L310,230" fill="${accentColor}" opacity="0.3"/>`;
      break;
    case 'cruiser':
      bodyPath = `<path d="M150,290 L200,270 L320,255 L440,245 L560,250 L650,265 L710,285 L730,300 L720,315 L640,320 L520,325 L400,325 L280,320 L200,310 L150,300 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M320,255 L340,230 L400,215 L480,210 L540,220 L580,240" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>`;
      extras = `<path d="M150,290 L120,280 L100,290 L110,300 L150,300" fill="${accentColor}" opacity="0.5"/>
        <ellipse cx="680" cy="280" rx="30" ry="15" fill="${accentColor}" opacity="0.3"/>`;
      break;
    case 'supermoto':
      bodyPath = `<path d="M190,275 L230,245 L330,225 L430,215 L530,220 L620,240 L660,260 L680,280 L670,300 L600,310 L500,315 L400,315 L300,310 L230,300 L190,290 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M330,225 L360,185 L430,170 L500,165 L550,175 L580,200 L580,230" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M360,185 L370,155 L390,140 L430,135 L460,140 L470,160" fill="${accentColor}" opacity="0.4"/>`;
      extras = `<path d="M500,165 L510,140 L530,130 L550,135 L555,155" fill="${bodyColor}" opacity="0.7"/>`;
      break;
    case 'dirt':
      bodyPath = `<path d="M200,270 L240,240 L340,220 L440,210 L530,215 L610,235 L650,255 L670,275 L660,295 L590,305 L490,310 L390,310 L290,305 L230,295 L200,285 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M340,220 L370,180 L440,165 L510,160 L560,170 L590,195 L580,225" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M370,180 L380,150 L410,135 L450,130 L480,140 L490,165" fill="${accentColor}" opacity="0.4"/>`;
      extras = `<path d="M200,270 L180,250 L190,240 L210,250" fill="${accentColor}" opacity="0.4"/>
        <path d="M650,255 L680,240 L690,250 L670,270" fill="${accentColor}" opacity="0.4"/>`;
      break;
    default: // commuter/scooter
      bodyPath = `<path d="M200,280 L250,260 L350,245 L450,240 L550,245 L630,260 L670,280 L680,300 L670,315 L600,320 L500,325 L400,325 L300,320 L240,310 L200,295 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M350,245 L370,215 L430,200 L490,195 L540,205 L570,225 L570,250" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>`;
      extras = `<rect x="380" y="250" width="120" height="40" rx="8" fill="${accentColor}" opacity="0.2"/>`;
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
    <linearGradient id="floor" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#2a2a3e;stop-opacity:0.5"/>
      <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="900" height="500" fill="url(#bg)"/>
  <ellipse cx="450" cy="380" rx="350" ry="60" fill="url(#glow)"/>
  <ellipse cx="450" cy="370" rx="300" ry="20" fill="url(#floor)"/>
  <!-- Wheels -->
  <circle cx="220" cy="320" r="65" fill="none" stroke="#444" stroke-width="8"/>
  <circle cx="220" cy="320" r="55" fill="none" stroke="#333" stroke-width="3"/>
  <circle cx="220" cy="320" r="15" fill="#555"/>
  <circle cx="680" cy="320" r="65" fill="none" stroke="#444" stroke-width="8"/>
  <circle cx="680" cy="320" r="55" fill="none" stroke="#333" stroke-width="3"/>
  <circle cx="680" cy="320" r="15" fill="#555"/>
  <!-- Spokes -->
  ${[0,30,60,90,120,150].map(a => `<line x1="${220+55*Math.cos(a*Math.PI/180)}" y1="${320+55*Math.sin(a*Math.PI/180)}" x2="${220-55*Math.cos(a*Math.PI/180)}" y2="${320-55*Math.sin(a*Math.PI/180)}" stroke="#3a3a3a" stroke-width="1.5"/>`).join('\n  ')}
  ${[0,30,60,90,120,150].map(a => `<line x1="${680+55*Math.cos(a*Math.PI/180)}" y1="${320+55*Math.sin(a*Math.PI/180)}" x2="${680-55*Math.cos(a*Math.PI/180)}" y2="${320-55*Math.sin(a*Math.PI/180)}" stroke="#3a3a3a" stroke-width="1.5"/>`).join('\n  ')}
  <!-- Body -->
  ${bodyPath}
  ${extras}
  <!-- Seat -->
  <path d="M350,210 Q400,195 480,195 Q520,195 540,205 L530,215 Q490,205 440,205 Q390,205 360,215 Z" fill="#222" stroke="#333" stroke-width="1"/>
  <!-- Headlight -->
  <ellipse cx="640" cy="240" rx="15" ry="12" fill="#FFE066" opacity="0.8"/>
  <ellipse cx="640" cy="240" rx="8" ry="6" fill="#FFF" opacity="0.9"/>
  <!-- Label -->
  <text x="450" y="460" text-anchor="middle" fill="${accentColor}" font-family="Arial,sans-serif" font-size="16" font-weight="bold" opacity="0.7">${label}</text>
</svg>`;
}

function bicycleSVG(bodyColor, accentColor, style, label) {
  // style: road, mtb, cargo, commuter, gravel, cargo-longtail
  let framePath = '';
  let extras = '';
  let wheelSize = style === 'cargo' ? 50 : 55;
  
  switch(style) {
    case 'road':
      framePath = `<path d="M250,300 L380,220 L550,220 L650,300" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M380,220 L420,300 L550,220" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M380,220 L350,180 L330,175" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <path d="M550,220 L580,200 L600,200 L610,210" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <line x1="420" y1="300" x2="420" y2="260" stroke="${bodyColor}" stroke-width="4"/>
        <path d="M400,260 L440,260" fill="none" stroke="#333" stroke-width="3"/>`;
      extras = `<rect x="390" y="230" width="80" height="12" rx="6" fill="${accentColor}" opacity="0.6"/>`;
      break;
    case 'mtb':
      framePath = `<path d="M240,300 L370,215 L540,215 L660,300" fill="none" stroke="${bodyColor}" stroke-width="7" stroke-linecap="round"/>
        <path d="M370,215 L415,300 L540,215" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M370,215 L340,175 L320,170" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M540,215 L570,195 L595,195 L605,205" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <line x1="415" y1="300" x2="415" y2="255" stroke="${bodyColor}" stroke-width="5"/>
        <path d="M395,255 L435,255" fill="none" stroke="#333" stroke-width="4"/>
        <path d="M350,240 L370,215" fill="none" stroke="${accentColor}" stroke-width="8" stroke-linecap="round" opacity="0.5"/>`;
      extras = `<rect x="395" y="225" width="70" height="14" rx="7" fill="${accentColor}" opacity="0.5"/>
        <circle cx="415" cy="300" r="12" fill="#444" stroke="#555" stroke-width="2"/>`;
      break;
    case 'gravel':
      framePath = `<path d="M245,300 L375,218 L545,218 L655,300" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M375,218 L418,300 L545,218" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M375,218 L345,178 L325,173" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <path d="M545,218 L575,198 L600,198 L610,208" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <line x1="418" y1="300" x2="418" y2="258" stroke="${bodyColor}" stroke-width="4"/>
        <path d="M398,258 L438,258" fill="none" stroke="#333" stroke-width="3"/>`;
      extras = `<rect x="393" y="228" width="75" height="12" rx="6" fill="${accentColor}" opacity="0.5"/>
        <path d="M245,300 L230,300 L225,290" fill="none" stroke="${bodyColor}" stroke-width="3"/>`;
      break;
    case 'cargo':
      framePath = `<path d="M220,300 L350,230 L500,230 L600,260 L680,300" fill="none" stroke="${bodyColor}" stroke-width="7" stroke-linecap="round"/>
        <path d="M350,230 L390,300 L500,230" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M350,230 L320,190 L300,185" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M500,230 L530,210 L555,210 L565,220" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <line x1="390" y1="300" x2="390" y2="260" stroke="${bodyColor}" stroke-width="5"/>`;
      extras = `<rect x="200" y="260" width="150" height="40" rx="5" fill="${accentColor}" opacity="0.3" stroke="${accentColor}" stroke-width="2"/>
        <rect x="210" y="265" width="130" height="30" rx="3" fill="${bodyColor}" opacity="0.2"/>`;
      break;
    case 'cargo-longtail':
      framePath = `<path d="M200,300 L340,230 L520,230 L650,260 L720,300" fill="none" stroke="${bodyColor}" stroke-width="7" stroke-linecap="round"/>
        <path d="M340,230 L380,300 L520,230" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M340,230 L310,190 L290,185" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M520,230 L550,210 L575,210 L585,220" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <line x1="380" y1="300" x2="380" y2="260" stroke="${bodyColor}" stroke-width="5"/>`;
      extras = `<rect x="520" y="250" width="180" height="35" rx="5" fill="${accentColor}" opacity="0.3" stroke="${accentColor}" stroke-width="2"/>
        <rect x="180" y="265" width="120" height="30" rx="5" fill="${accentColor}" opacity="0.2" stroke="${accentColor}" stroke-width="1.5"/>`;
      break;
    default: // commuter
      framePath = `<path d="M250,300 L380,225 L540,225 L650,300" fill="none" stroke="${bodyColor}" stroke-width="6" stroke-linecap="round"/>
        <path d="M380,225 L415,300 L540,225" fill="none" stroke="${bodyColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M380,225 L355,185 L335,180" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <path d="M540,225 L565,205 L590,205 L600,215" fill="none" stroke="${bodyColor}" stroke-width="4" stroke-linecap="round"/>
        <line x1="415" y1="300" x2="415" y2="260" stroke="${bodyColor}" stroke-width="4"/>
        <path d="M395,260 L435,260" fill="none" stroke="#333" stroke-width="3"/>`;
      extras = `<rect x="395" y="235" width="70" height="12" rx="6" fill="${accentColor}" opacity="0.5"/>
        <path d="M350,250 L340,270 L360,270 Z" fill="${accentColor}" opacity="0.3"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f2027;stop-opacity:1"/>
      <stop offset="50%" style="stop-color:#203a43;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#2c5364;stop-opacity:1"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="65%" r="35%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="900" height="500" fill="url(#bg)"/>
  <ellipse cx="450" cy="380" rx="320" ry="50" fill="url(#glow)"/>
  <!-- Wheels -->
  <circle cx="250" cy="320" r="${wheelSize}" fill="none" stroke="#555" stroke-width="6"/>
  <circle cx="250" cy="320" r="${wheelSize-8}" fill="none" stroke="#444" stroke-width="2"/>
  <circle cx="250" cy="320" r="10" fill="#666"/>
  <circle cx="650" cy="320" r="${wheelSize}" fill="none" stroke="#555" stroke-width="6"/>
  <circle cx="650" cy="320" r="${wheelSize-8}" fill="none" stroke="#444" stroke-width="2"/>
  <circle cx="650" cy="320" r="10" fill="#666"/>
  <!-- Spokes -->
  ${[0,36,72,108,144].map(a => `<line x1="${250+(wheelSize-8)*Math.cos(a*Math.PI/180)}" y1="${320+(wheelSize-8)*Math.sin(a*Math.PI/180)}" x2="${250-(wheelSize-8)*Math.cos(a*Math.PI/180)}" y2="${320-(wheelSize-8)*Math.sin(a*Math.PI/180)}" stroke="#4a4a4a" stroke-width="1"/>`).join('\n  ')}
  ${[0,36,72,108,144].map(a => `<line x1="${650+(wheelSize-8)*Math.cos(a*Math.PI/180)}" y1="${320+(wheelSize-8)*Math.sin(a*Math.PI/180)}" x2="${650-(wheelSize-8)*Math.cos(a*Math.PI/180)}" y2="${320-(wheelSize-8)*Math.sin(a*Math.PI/180)}" stroke="#4a4a4a" stroke-width="1"/>`).join('\n  ')}
  <!-- Frame -->
  ${framePath}
  ${extras}
  <!-- Seat -->
  <ellipse cx="415" cy="252" rx="18" ry="6" fill="#333"/>
  <!-- Label -->
  <text x="450" y="460" text-anchor="middle" fill="${accentColor}" font-family="Arial,sans-serif" font-size="16" font-weight="bold" opacity="0.7">${label}</text>
</svg>`;
}

function scooterSVG(bodyColor, accentColor, style, label) {
  let bodyPath = '';
  let extras = '';
  
  switch(style) {
    case 'retro':
      bodyPath = `<path d="M280,280 Q300,240 350,230 L500,225 Q560,225 590,240 L620,260 Q640,280 640,300 L630,320 L580,330 L400,335 L320,330 L280,310 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M350,230 L360,200 L400,185 L440,180 L460,185 L470,200 L470,225" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <rect x="340" y="280" width="200" height="30" rx="10" fill="${accentColor}" opacity="0.15"/>`;
      extras = `<circle cx="360" cy="260" r="20" fill="${accentColor}" opacity="0.2"/>
        <rect x="600" y="250" width="30" height="20" rx="5" fill="#FFE066" opacity="0.7"/>`;
      break;
    case 'modern':
      bodyPath = `<path d="M270,285 Q290,250 340,235 L510,225 Q570,228 600,245 L635,270 Q650,290 645,310 L635,325 L575,335 L390,338 L310,330 L270,310 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M340,235 L355,195 L400,178 L450,175 L480,182 L495,200 L500,225" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M355,195 L345,175 L355,165 L380,160 L400,165 L400,178" fill="${accentColor}" opacity="0.3"/>`;
      extras = `<rect x="350" y="270" width="180" height="35" rx="8" fill="${accentColor}" opacity="0.12"/>
        <rect x="610" y="255" width="25" height="15" rx="4" fill="#FFE066" opacity="0.7"/>`;
      break;
    default: // sport
      bodyPath = `<path d="M260,280 Q280,245 330,230 L520,220 Q580,222 615,242 L650,268 Q665,288 660,310 L648,325 L585,335 L395,338 L305,328 L260,308 Z" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2"/>
        <path d="M330,230 L350,190 L410,172 L470,168 L510,178 L530,200 L530,225" fill="${bodyColor}" stroke="${accentColor}" stroke-width="2" opacity="0.9"/>
        <path d="M350,190 L340,165 L360,152 L400,148 L430,155 L435,175" fill="${accentColor}" opacity="0.3"/>`;
      extras = `<path d="M520,220 L560,200 L580,205 L570,225" fill="${accentColor}" opacity="0.2"/>
        <rect x="620" y="252" width="28" height="18" rx="5" fill="#FFE066" opacity="0.7"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0f3460;stop-opacity:1"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="60%" r="38%">
      <stop offset="0%" style="stop-color:${accentColor};stop-opacity:0.12"/>
      <stop offset="100%" style="stop-color:transparent;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="900" height="500" fill="url(#bg)"/>
  <ellipse cx="450" cy="380" rx="330" ry="55" fill="url(#glow)"/>
  <!-- Wheels (smaller for scooter) -->
  <circle cx="290" cy="325" r="50" fill="none" stroke="#444" stroke-width="7"/>
  <circle cx="290" cy="325" r="40" fill="none" stroke="#383838" stroke-width="2.5"/>
  <circle cx="290" cy="325" r="12" fill="#555"/>
  <circle cx="630" cy="325" r="50" fill="none" stroke="#444" stroke-width="7"/>
  <circle cx="630" cy="325" r="40" fill="none" stroke="#383838" stroke-width="2.5"/>
  <circle cx="630" cy="325" r="12" fill="#555"/>
  <!-- Body -->
  ${bodyPath}
  ${extras}
  <!-- Seat -->
  <path d="M380,225 Q420,215 480,215 Q520,218 540,225 L530,232 Q500,225 460,223 Q420,223 390,230 Z" fill="#222" stroke="#333" stroke-width="1"/>
  <!-- Label -->
  <text x="450" y="460" text-anchor="middle" fill="${accentColor}" font-family="Arial,sans-serif" font-size="16" font-weight="bold" opacity="0.7">${label}</text>
</svg>`;
}

// Product definitions: [filename, type, style, bodyColor, accentColor, label]
const products = [
  // === Zero SR/F duplicates (3 products, 1 already has image, need 2) ===
  ['moto-volt-r-roadster', 'motorcycle', 'naked', '#1a1a1a', '#e63946', 'VOLT R ROADSTER'],
  ['zero-fxe-supermotard', 'motorcycle', 'supermoto', '#f1faee', '#2a9d8f', 'ZERO FXE'],
  
  // === Zero DSR/X duplicates (3 products, need 2) ===
  ['moto-trail-adv-explore', 'motorcycle', 'adventure', '#556b2f', '#dda15e', 'TRAIL ADV'],
  ['zero-ds-dual-sport', 'motorcycle', 'adventure', '#6c757d', '#adb5bd', 'ZERO DS'],
  
  // === Mondraker Crafty duplicates (5 products, need 4) ===
  ['tern-gsd-s00-dual-battery', 'bicycle', 'cargo-longtail', '#2d3436', '#00b894', 'TERN GSD S00'],
  ['carqon-cruise-family', 'bicycle', 'cargo-longtail', '#2d3436', '#e17055', 'CARQON CRUISE'],
  ['moustache-friday-27-fs-speed', 'bicycle', 'cargo', '#1b4332', '#95d5b2', 'MOUSTACHE FRIDAY'],
  ['gazelle-grenoble-c8-hmb', 'bicycle', 'commuter', '#023047', '#ffb703', 'GAZELLE GRENOBLE'],
  
  // === Livewire S2 Delmar duplicates (8 products, need 7) ===
  ['livewire-s2-mulholland', 'motorcycle', 'sport', '#212529', '#ff6b35', 'S2 MULHOLLAND'],
  ['moto-cafe-e-retro', 'motorcycle', 'cruiser', '#6c757d', '#ffd166', 'MOTO CAFE E'],
  ['horwin-cr6-pro-cafe', 'motorcycle', 'cruiser', '#343a40', '#06d6a0', 'HORWIN CR6 PRO'],
  ['super-soco-tc-max-racer', 'motorcycle', 'sport', '#000000', '#ef476f', 'TC-MAX RACER'],
  ['tromox-ukko-s-pro', 'motorcycle', 'naked', '#3d5a80', '#98c1d9', 'TROMOX UKKO S'],
  ['niu-rqi-sport-125', 'motorcycle', 'sport', '#14213d', '#fca311', 'NIU RQI SPORT'],
  ['braaap-moto-e-125', 'motorcycle', 'naked', '#2b2d42', '#ef233c', 'BRAAAP MOTO E'],
  
  // === Specialized Levo Pro duplicates (9 products, need 8) ===
  ['forestal-siryon-diode', 'bicycle', 'mtb', '#1a1a2e', '#e94560', 'FORESTAL SIRYON'],
  ['specialized-creo-2-carbon', 'bicycle', 'road', '#386641', '#a7c957', 'SPECIALIZED CREO 2'],
  ['scott-addict-eride-10', 'bicycle', 'road', '#d62828', '#fcbf49', 'SCOTT ADDICT E'],
  ['pinarello-nytro-e-gravel', 'bicycle', 'gravel', '#003049', '#669bbc', 'PINARELLO NYTRO'],
  ['cervelo-rouvida-grx', 'bicycle', 'gravel', '#264653', '#e9c46a', 'CERVELO ROUVIDA'],
  ['stromer-st7-pinion-1440wh', 'bicycle', 'commuter', '#212529', '#ffd60a', 'STROMER ST7'],
  ['riese-muller-delite4-hs', 'bicycle', 'mtb', '#005f73', '#94d2bd', 'R&M DELITE4'],
  ['specialized-como-50-igh', 'bicycle', 'commuter', '#283618', '#dda15e', 'SPECIALIZED COMO'],
  
  // === Specialized Kenevo SL duplicates (8 products, need 7) ===
  ['scott-lumen-eride-900', 'bicycle', 'mtb', '#540b0e', '#e09f3e', 'SCOTT LUMEN E'],
  ['bmc-roadmachine-01-amp', 'bicycle', 'road', '#1b263b', '#415a77', 'BMC ROADMACHINE'],
  ['urban-arrow-family-cargoline', 'bicycle', 'cargo', '#004e64', '#25a18e', 'URBAN ARROW'],
  ['riese-muller-supercharger-hs', 'bicycle', 'commuter', '#3a0ca3', '#7209b7', 'R&M SUPERCHARGER'],
  ['vanmoof-s5-halo-ring', 'bicycle', 'commuter', '#1a1a1a', '#00f5d4', 'VANMOOF S5'],
  ['angell-mobility-rapide', 'bicycle', 'road', '#f8f9fa', '#4361ee', 'ANGELL RAPIDE'],
  ['electra-loft-go-7d-eq', 'bicycle', 'commuter', '#4a4e69', '#c9ada7', 'ELECTRA LOFT GO'],
  
  // === Canyon Spectral ON duplicates (8 products, need 7) ===
  ['pivot-shuttle-lt-team', 'bicycle', 'mtb', '#2d00f7', '#e500a4', 'PIVOT SHUTTLE LT'],
  ['cannondale-topstone-neo-crb', 'bicycle', 'gravel', '#ff7600', '#1a1a1a', 'CANNONDALE TOPSTONE'],
  ['canyon-endurace-on-8', 'bicycle', 'road', '#00b4d8', '#03045e', 'CANYON ENDURACE ON'],
  ['wilier-triestina-hyrid', 'bicycle', 'road', '#006d77', '#83c5be', 'WILIER HYRID'],
  ['stromer-st5-pinion-45', 'bicycle', 'commuter', '#14213d', '#fca311', 'STROMER ST5'],
  ['specialized-vado-50-igh-speed', 'bicycle', 'commuter', '#386641', '#6a994e', 'SPECIALIZED VADO'],
  ['desiknio-x20-pinion-carbon', 'bicycle', 'gravel', '#7b2cbf', '#c77dff', 'DESIKNIO X20'],
  
  // === Trek Rail 99 duplicates (7 products, need 6) ===
  ['orbea-wild-m-ltd', 'bicycle', 'mtb', '#e63946', '#1d3557', 'ORBEA WILD M'],
  ['trek-domane-plus-slr9', 'bicycle', 'road', '#000000', '#d90429', 'TREK DOMANE+ SLR9'],
  ['velo-cargo-longtail', 'bicycle', 'cargo-longtail', '#2b9348', '#d9ed92', 'CARGO LONGTAIL'],
  ['babboe-city-mountain', 'bicycle', 'cargo', '#6a040f', '#ffb703', 'BABBOE CITY'],
  ['gazelle-ultimate-c380-speed', 'bicycle', 'commuter', '#003047', '#028090', 'GAZELLE ULTIMATE'],
  ['moustache-samedi-287-open', 'bicycle', 'commuter', '#5a189a', '#e0aaff', 'MOUSTACHE SAMEDI'],
  
  // === Cube Stereo 160 duplicates (7 products, need 6) ===
  ['moustache-samedi-29-game', 'bicycle', 'mtb', '#240046', '#c77dff', 'MOUSTACHE SAMEDI 29'],
  ['bianchi-e-arcadex-gravel', 'bicycle', 'gravel', '#008080', '#66d9e8', 'BIANCHI E-ARCADEX'],
  ['riese-muller-load4-75', 'bicycle', 'cargo', '#023047', '#219ebc', 'R&M LOAD4 75'],
  ['cube-cargo-hybrid-750', 'bicycle', 'cargo', '#1b4332', '#b7e4c7', 'CUBE CARGO HYBRID'],
  ['kalkhoff-image-7b-excite-45', 'bicycle', 'commuter', '#3a0ca3', '#4cc9f0', 'KALKHOFF IMAGE'],
  ['schindelhauer-heinrich-enviolo', 'bicycle', 'commuter', '#495057', '#adb5bd', 'SCHINDELHAUER'],
  
  // === Apex Enduro Carbon duplicates (6 products, need 5) ===
  ['velo-gravel-carbon-adventure', 'bicycle', 'gravel', '#264653', '#2a9d8f', 'GRAVEL CARBON'],
  ['orbea-gain-m20i-carbon', 'bicycle', 'road', '#e76f51', '#264653', 'ORBEA GAIN M20i'],
  ['moustache-lundi-20-cargo', 'bicycle', 'cargo', '#005f73', '#ee9b00', 'MOUSTACHE LUNDI'],
  ['stromer-st3-pinion-speed', 'bicycle', 'commuter', '#0d1b2a', '#e0e1dd', 'STROMER ST3'],
  ['flyer-upstreet5-723-hs', 'bicycle', 'commuter', '#1b4332', '#52b788', 'FLYER UPSTREET5'],
  
  // === Santa Cruz Heckler duplicates (6 products, need 5) ===
  ['yeti-160e-t1-turq', 'bicycle', 'mtb', '#4a044e', '#9b5de5', 'YETI 160E'],
  ['yuba-spicy-curry-v4', 'bicycle', 'cargo-longtail', '#9b2226', '#ee9b00', 'YUBA SPICY CURRY'],
  ['riese-muller-multicharger', 'bicycle', 'cargo', '#003047', '#8ecae6', 'R&M MULTICHARGER'],
  ['cowboy-cruiser-st-connected', 'bicycle', 'commuter', '#f8f9fa', '#212529', 'COWBOY CRUISER'],
  ['tenways-cgo800s-belt', 'bicycle', 'commuter', '#2b2d42', '#8d99ae', 'TENWAYS CGO800S'],
  
  // === Sur-Ron duplicates (31 products share same image, need 30) ===
  ['kollter-es1-pro-enduro', 'motorcycle', 'dirt', '#ff6700', '#1a1a1a', 'KOLLTER ES1 PRO'],
  ['caofen-f80-enduro-oil', 'motorcycle', 'dirt', '#2d6a4f', '#b7e4c7', 'CAOFEN F80'],
  ['horwin-ht5-trail', 'motorcycle', 'adventure', '#264653', '#e9c46a', 'HORWIN HT5'],
  ['bmw-ce-04-avantgarde', 'scooter', 'modern', '#00a8e8', '#1a1a1a', 'BMW CE 04'],
  ['silence-s01-plus-official', 'scooter', 'modern', '#00b4d8', '#03045e', 'SILENCE S01+'],
  ['ray-77-gt-tourer', 'motorcycle', 'cruiser', '#6c757d', '#ffd166', 'RAY 77 GT'],
  ['segway-e300se-abs', 'scooter', 'sport', '#14213d', '#fca311', 'SEGWAY E300SE'],
  ['moto-city-ls-125', 'scooter', 'modern', '#2b2d42', '#ef233c', 'MOTO CITY LS'],
  ['niu-mqi-gt-evo-100', 'scooter', 'modern', '#000000', '#00f5d4', 'NIU MQI GT EVO'],
  ['horwin-ek3-deluxe', 'scooter', 'retro', '#774936', '#ddb892', 'HORWIN EK3'],
  ['frison-t10-gt', 'motorcycle', 'dirt', '#d62828', '#1a1a1a', 'FRISON T10 GT'],
  ['zeeho-ae8-s-plus', 'scooter', 'sport', '#003047', '#028090', 'ZEEHO AE8 S+'],
  ['bmw-ce-02-iconic', 'scooter', 'sport', '#495057', '#0096c7', 'BMW CE 02'],
  ['surron-light-bee-supermoto', 'motorcycle', 'supermoto', '#ff8500', '#212529', 'SUR-RON LB SUPERMOTO'],
  ['surron-ultra-bee-x', 'motorcycle', 'dirt', '#00b4d8', '#1a1a1a', 'SUR-RON ULTRA BEE X'],
  ['surron-ultra-bee-sm', 'motorcycle', 'supermoto', '#2a9d8f', '#264653', 'SUR-RON ULTRA BEE SM'],
  ['surron-storm-bee-f', 'motorcycle', 'dirt', '#e63946', '#1d3557', 'STORM BEE F'],
  ['surron-storm-bee-r', 'motorcycle', 'dirt', '#457b9d', '#f1faee', 'STORM BEE R'],
  ['surron-hyper-bee-youth', 'motorcycle', 'dirt', '#06d6a0', '#1a1a1a', 'HYPER BEE YOUTH'],
  ['stark-varg-80hp', 'motorcycle', 'dirt', '#ff4800', '#1a1a1a', 'STARK VARG 80HP'],
  ['stark-varg-60hp', 'motorcycle', 'dirt', '#3a86ff', '#1a1a1a', 'STARK VARG 60HP'],
  ['talaria-sting-r-mx4', 'motorcycle', 'dirt', '#ffd60a', '#1a1a1a', 'TALARIA STING R'],
  ['talaria-dragon-88v', 'motorcycle', 'dirt', '#7209b7', '#f72585', 'TALARIA DRAGON'],
  ['talaria-komodo-72v', 'motorcycle', 'adventure', '#386641', '#a7c957', 'TALARIA KOMODO'],
  ['eride-pro-ss-2026', 'motorcycle', 'dirt', '#e63946', '#f1faee', 'ERIDE PRO SS'],
  ['eride-pro-sr-race', 'motorcycle', 'dirt', '#1d3557', '#e63946', 'ERIDE PRO SR'],
  ['altis-sigma-72v', 'motorcycle', 'dirt', '#6a040f', '#ffb703', 'ALTIS SIGMA'],
  ['moto-apex-dirt-72v', 'motorcycle', 'dirt', '#2d6a4f', '#95d5b2', 'MOTO APEX DIRT'],
  ['electric-motion-escape-r', 'motorcycle', 'dirt', '#005f73', '#94d2bd', 'EM ESCAPE R'],
  ['electric-motion-epure-race', 'motorcycle', 'dirt', '#9b2226', '#ae2012', 'EM EPURE RACE'],
];

let generated = 0;
for (const [filename, type, style, bodyColor, accentColor, label] of products) {
  let svg;
  switch(type) {
    case 'motorcycle':
      svg = motorcycleSVG(bodyColor, accentColor, style, label);
      break;
    case 'bicycle':
      svg = bicycleSVG(bodyColor, accentColor, style, label);
      break;
    case 'scooter':
      svg = scooterSVG(bodyColor, accentColor, style, label);
      break;
  }
  const filepath = path.join(outDir, filename + '.svg');
  fs.writeFileSync(filepath, svg);
  generated++;
  console.log(`Generated: ${filename}.svg`);
}

console.log(`\nTotal generated: ${generated} unique SVG images`);
