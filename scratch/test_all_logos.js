const sharp = require('sharp');
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

async function testAll() {
  for (const b of brands) {
    const p = path.join('public', 'brands', 'official', b.file);
    try {
      const meta = await sharp(p).metadata();
      console.log(`[PASS] ${b.name.padEnd(20)}: ${meta.format} ${meta.width}x${meta.height}`);
    } catch (e) {
      console.error(`[FAIL] ${b.name}: ${e.message}`);
    }
  }
}

testAll();
