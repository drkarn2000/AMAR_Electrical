const sharp = require('sharp');

async function createHorizontalBajaj() {
  // From bajaj.png (width 265, height 200):
  // Symbol is roughly top: 0 to 95, left: 35 to 230
  // BAJAJ text is roughly top: 95 to 145, left: 15 to 250
  
  const symbol = await sharp('public/brands/official/bajaj.png')
    .extract({ left: 30, top: 0, width: 205, height: 95 })
    .trim()
    .resize({ height: 80 })
    .toBuffer();

  const text = await sharp('public/brands/official/bajaj.png')
    .extract({ left: 15, top: 92, width: 235, height: 50 })
    .trim()
    .resize({ height: 60 })
    .toBuffer();

  const symMeta = await sharp(symbol).metadata();
  const textMeta = await sharp(text).metadata();

  const gap = 20;
  const totalWidth = symMeta.width + gap + textMeta.width;
  const totalHeight = Math.max(symMeta.height, textMeta.height);

  const canvas = await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: symbol, left: 0, top: Math.round((totalHeight - symMeta.height) / 2) },
    { input: text, left: symMeta.width + gap, top: Math.round((totalHeight - textMeta.height) / 2) }
  ])
  .png()
  .toFile('public/brands/official/bajaj-horizontal.png');

  console.log('Horizontal Bajaj created:', canvas);
}

createHorizontalBajaj().catch(console.error);
