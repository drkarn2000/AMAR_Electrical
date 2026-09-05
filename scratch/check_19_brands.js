const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'Havells', file: 'havells.svg' },
  { name: 'Panasonic', file: 'panasonic.svg' },
  { name: 'Eleczo', file: 'eleczo.png' },
  { name: 'Polycab', file: 'polycab.png' },
  { name: 'Schneider Electric', file: 'schneider.svg' },
  { name: 'RR Kabel', file: 'rr-kabel.svg' },
  { name: 'Philips', file: 'philips.svg' },
  { name: 'Crompton', file: 'crompton.webp' },
  { name: 'Syska', file: 'syska.png' },
  { name: 'Legrand', file: 'legrand.svg' },
  { name: 'Finolex', file: 'finolex.svg' },
  { name: 'V-Guard', file: 'v-guard.png' },
  { name: 'Angel Cables', file: 'angel-cables.png' },
  { name: 'Bluebird', file: 'bluebird.png' },
  { name: 'KEI', file: 'kei.png' },
  { name: 'Khaitan', file: 'khaitan.png' },
  { name: 'Kapson', file: 'kapson.png' },
  { name: 'LG', file: 'lg.svg' },
  { name: 'Bajaj', file: 'bajaj.png' }
];

console.log('Total brands:', brands.length);

for (const b of brands) {
  const fullPath = path.join('public', 'brands', 'official', b.file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`[OK] ${b.name.padEnd(20)} -> /brands/official/${b.file} (${stats.size} bytes)`);
  } else {
    console.log(`[MISSING] ${b.name.padEnd(20)} -> ${fullPath}`);
  }
}
