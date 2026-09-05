const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, 'public', 'brands', 'official');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sources = [
  {
    name: 'havells.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Havells_Logo.svg'
  },
  {
    name: 'anchor.svg',
    url: 'https://upload.wikimedia.org/wikipedia/en/3/32/Anchor_by_Panasonic_logo.svg'
  },
  {
    name: 'polycab.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Polycab_India_logo.png'
  },
  {
    name: 'finolex.svg',
    url: 'https://www.finolex.com/images/Finolex_logo_header.svg'
  },
  {
    name: 'rr-kabel.svg',
    url: 'https://www.rrkabel.com/wp-content/uploads/2024/08/RR-Kabel-logo.svg'
  },
  {
    name: 'philips.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Philips_logo.svg'
  },
  {
    name: 'crompton.svg',
    url: 'https://worldvectorlogo.com/logos/crompton.svg'
  },
  {
    name: 'syska.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Syska_logo.png'
  },
  {
    name: 'panasonic.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Panasonic_logo.svg'
  },
  {
    name: 'schneider.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg'
  },
  {
    name: 'legrand.svg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_Legrand_SA.svg'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outDir, item.name);
    const file = fs.createWriteStream(filePath);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filePath);
          console.log(`[SUCCESS] ${item.name} (${stats.size} bytes)`);
          resolve();
        });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        console.log(`Redirecting ${item.name} to ${redirectUrl}`);
        https.get(redirectUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            const stats = fs.statSync(filePath);
            console.log(`[SUCCESS via redirect] ${item.name} (${stats.size} bytes)`);
            resolve();
          });
        });
      } else {
        console.error(`[FAILED] ${item.name} Status: ${res.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.error(`[ERROR] ${item.name}: ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log('Downloading all 11 official logos...');
  for (const item of sources) {
    await download(item);
  }
  console.log('Finished downloading all official logos!');
}

main();
