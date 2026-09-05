const fs = require('fs');
const path = require('path');

const dir = 'public/brands/official';
const files = ['havells.svg', 'legrand.svg', 'lg.svg', 'panasonic.svg', 'schneider.svg'];

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const wMatch = content.match(/width=["']([0-9.]+)(?:px)?["']/i);
  const hMatch = content.match(/height=["']([0-9.]+)(?:px)?["']/i);
  console.log(f, 'w:', wMatch ? wMatch[1] : 'none', 'h:', hMatch ? hMatch[1] : 'none');
}
