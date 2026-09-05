const sharp = require('sharp');

async function processBluebird() {
  const { data, info } = await sharp('public/brands/official/bluebird.webp')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];

    if (r > 240 && g > 240 && b > 240) {
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0;
    } else {
      const brightness = (r + g + b) / 3;
      let alpha = 255;
      if (brightness > 200) {
        alpha = Math.round(255 * (255 - brightness) / 55);
      }
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = Math.max(0, Math.min(255, alpha));
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ width: 500, height: 160, fit: 'inside' })
    .png()
    .toFile('public/brands/official/bluebird.png');

  console.log('Bluebird processed successfully');
}

processBluebird().catch(console.error);
