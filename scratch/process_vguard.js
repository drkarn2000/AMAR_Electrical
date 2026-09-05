const sharp = require('sharp');

async function processVGuard() {
  // Extract kangaroo and V-GUARD, excluding the tagline below
  // In 827x827: kangaroo starts around y=200, V-GUARD ends around y=550
  const { data, info } = await sharp('public/brands/official/vguard_newlogo.jpg')
    .extract({ left: 30, top: 220, width: 767, height: 320 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(info.width * info.height * 4);

  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const brightness = (r + g + b) / 3;

    if (brightness < 15) {
      // pure black background -> transparent
      rgba[i * 4] = 0;
      rgba[i * 4 + 1] = 0;
      rgba[i * 4 + 2] = 0;
      rgba[i * 4 + 3] = 0;
    } else {
      // Anti-aliasing
      const alpha = Math.min(255, Math.round((brightness / 60) * 255));
      rgba[i * 4] = r;
      rgba[i * 4 + 1] = g;
      rgba[i * 4 + 2] = b;
      rgba[i * 4 + 3] = alpha;
    }
  }

  await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .resize({ width: 600, height: 240, fit: 'inside' })
    .png()
    .toFile('public/brands/official/v-guard.png');

  console.log('V-Guard processed successfully');
}

processVGuard().catch(console.error);
