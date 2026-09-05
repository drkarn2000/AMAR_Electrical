const fs = require('fs');
const path = require('path');

const dir = 'public/brands/official';

const svgSpecs = [
  { file: 'havells.svg', w: 300, h: 198 },
  { file: 'panasonic.svg', w: 600, h: 91.7 },
  { file: 'schneider.svg', w: 188.74001, h: 57 },
  { file: 'legrand.svg', w: 250, h: 62.096 },
  { file: 'lg.svg', w: 600, h: 275 }
];

for (const s of svgSpecs) {
  const filePath = path.join(dir, s.file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('viewBox')) {
    // Add viewBox and preserveAspectRatio right after <svg
    content = content.replace(/<svg\b([^>]*)>/i, (match, attrs) => {
      return `<svg viewBox="0 0 ${s.w} ${s.h}" preserveAspectRatio="xMidYMid meet" ${attrs}>`;
    });
    fs.writeFileSync(filePath, content);
    console.log(`Added viewBox to ${s.file}`);
  } else {
    console.log(`${s.file} already has viewBox`);
  }
}
