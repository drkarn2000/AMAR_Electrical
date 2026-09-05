const fs = require('fs');

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log('Downloaded', dest, buf.length, 'bytes');
}

download('https://cdn.eleczo.com/media/logo/stores/1/Eleczo-without-tag-line-3.png', 'public/brands/official/eleczo.png')
  .catch(console.error);
