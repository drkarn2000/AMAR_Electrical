const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'services');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const services = [
  { id: 'home-wiring', url: 'https://images.unsplash.com/photo-1588616437819-7d30e6f76e66?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'new-house-wiring', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 'office-wiring', url: 'https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'factory-wiring', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { id: 'electrical-maintenance', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80' },
  { id: 'fault-finding', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { id: 'short-circuit-repair', url: 'https://images.unsplash.com/photo-1758101755915-462eddc23f57?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'fan-installation', url: 'https://images.unsplash.com/photo-1555470100-1728256970aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'light-installation', url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80' },
  { id: 'mcb-installation', url: 'https://images.unsplash.com/photo-1555618568-211cf84456ca?auto=format&fit=crop&w=800&q=80' },
  { id: 'earthing', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80' },
  { id: 'inverter-installation', url: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80' },
  { id: 'cctv-wiring', url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80' },
  { id: 'door-bell-installation', url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80' },
  { id: 'water-pump-installation', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80' },
  { id: 'generator-connection', url: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80' },
  { id: 'three-phase-connection', url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
  { id: 'panel-installation', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80' },
  { id: 'electrical-consultancy', url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80' }
];

function downloadImage(item) {
  return new Promise((resolve) => {
    const dest = path.join(outDir, `${item.id}.jpg`);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`[EXISTS] ${item.id}.jpg`);
      return resolve(true);
    }
    const file = fs.createWriteStream(dest);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (redirectRes) => {
          redirectRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`[SUCCESS] ${item.id}.jpg (${fs.statSync(dest).size} bytes)`);
            resolve(true);
          });
        }).on('error', () => resolve(false));
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`[SUCCESS] ${item.id}.jpg (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`[FAIL ${res.statusCode}] ${item.id}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`[ERROR] ${item.id}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  console.log('Downloading 19 service images...');
  for (const s of services) {
    await downloadImage(s);
  }
  console.log('Finished downloading all service images!');
}

main();
