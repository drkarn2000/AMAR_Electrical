const sharp = require('sharp');

async function processAngel() {
  const image = sharp('public/brands/official/angel_test.png').trim();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  
  // Create RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);
  
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    
    // Check white or near-white background
    if (r > 245 && g > 245 && b > 245) {
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0; // transparent
    } else {
      // smooth alpha for anti-aliasing near edges
      const brightness = (r + g + b) / 3;
      let alpha = 255;
      if (brightness > 210) {
        alpha = Math.round(255 * (255 - brightness) / 45);
      }
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = Math.max(0, Math.min(255, alpha));
    }
  }
  
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ width: 600, height: 200, fit: 'inside' })
    .png()
    .toFile('public/brands/official/angel-cables.png');
    
  console.log('Angel Cables processed successfully!');
}

processAngel().catch(console.error);
