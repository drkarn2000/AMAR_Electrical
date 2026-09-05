const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, 'public', 'brands', 'official');

const remaining = [
  {
    name: 'anchor.svg',
    url: 'https://upload.wikimedia.org/wikipedia/en/3/32/Anchor_by_Panasonic_logo.svg'
  },
  {
    name: 'philips.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Philips_logo.svg'
  },
  {
    name: 'syska.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Syska_logo.png'
  },
  {
    name: 'legrand.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_Legrand_SA.svg'
  }
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function downloadOne(item) {
  return new Promise((resolve) => {
    const filePath = path.join(outDir, item.name);
    const file = fs.createWriteStream(filePath);
    const options = {
      headers: {
        'User-Agent': 'ElectricalShopBrandUpdater/1.0 (https://electricalshop.local; contact@electricalshop.local)'
      }
    };
    https.get(item.url, options, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filePath);
          console.log(`[SUCCESS] ${item.name} (${stats.size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`[STATUS ${res.statusCode}] ${item.name}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error(`[ERROR] ${item.name}:`, e.message);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of remaining) {
    console.log('Downloading', item.name, '...');
    await downloadOne(item);
    await sleep(2500);
  }
}

run();
