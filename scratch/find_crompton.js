const https = require('https');

https.get('https://www.crompton.co.in/', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const re = /(?:src|href)=["']([^"']*(?:logo|brand)[^"']*\.(?:svg|png|webp))/gi;
    let m;
    const results = [];
    while ((m = re.exec(d)) !== null) {
      results.push(m[1]);
    }
    console.log('Crompton results:', results);
  });
});
