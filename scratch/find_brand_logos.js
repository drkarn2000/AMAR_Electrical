const https = require('https');
const http = require('http');

function fetchHTML(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => resolve(''));
  });
}

async function run() {
  const [polycab, rrkabel, syska, finolex] = await Promise.all([
    fetchHTML('https://polycab.com/'),
    fetchHTML('https://www.rrkabel.com/'),
    fetchHTML('https://syska.co.in/'),
    fetchHTML('https://finolex.com/')
  ]);

  const findImages = (html, label) => {
    const re = /(?:src|href)=["']([^"']*(?:logo|brand)[^"']*\.(?:svg|png|webp))/gi;
    let m;
    const results = [];
    while ((m = re.exec(html)) !== null) {
      results.push(m[1]);
    }
    console.log(label, results.slice(0, 8));
  };

  findImages(polycab, 'POLYCAB:');
  findImages(rrkabel, 'RR KABEL:');
  findImages(syska, 'SYSKA:');
  findImages(finolex, 'FINOLEX:');
}
run();
