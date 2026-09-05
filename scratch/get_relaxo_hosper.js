const fs = require('fs');

async function getLogos() {
  const sites = [
    { name: 'relaxo', url: 'https://relaxohomeappliances.com/' },
    { name: 'hosper', url: 'https://hosper.in/' }
  ];

  for (const s of sites) {
    try {
      const res = await fetch(s.url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const html = await res.text();
      const imgs = html.match(/src=["'][^"']*(?:logo|brand)[^"']*["']/gi) || html.match(/<img[^>]+logo[^>]+>/gi) || html.match(/<img[^>]+>/gi);
      console.log(s.name, imgs ? imgs.slice(0, 10) : 'none');
    } catch (e) {
      console.error(s.name, e.message);
    }
  }
}

getLogos();
