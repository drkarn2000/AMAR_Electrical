const fs = require('fs');
const path = require('path');

const dir = 'public/brands/official';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const hasViewBox = content.includes('viewBox');
  const svgTagMatch = content.match(/<svg[^>]*>/i);
  console.log(f, 'hasViewBox:', hasViewBox, 'tag:', svgTagMatch ? svgTagMatch[0].slice(0, 100) : 'none');
}
