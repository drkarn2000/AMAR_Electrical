const sharp = require('sharp');

async function processKapson() {
  // First upscale the cropped image 4x with sharp lanczos3 to get smooth edges
  const upscaled = await sharp('public/brands/official/kapson_cropped.png')
    .resize(476, 276, { kernel: 'lanczos3' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = upscaled;
  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  const rgba = Buffer.alloc(width * height * 4);

  // We want to detect the pink box and pink text.
  // The KS inside the pink box is white.
  // The outer background is white.
  
  // Pink color has high R (typically > 160), low G (< 100), medium/high B (> 80).
  // Saturation is very high: (R - G) > 80.
  
  // First, find the bounding box of the pink box to know where white means "KS"
  // Let's inspect pixel values
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x);
      const r = data[idx * channels];
      const g = data[idx * channels + 1];
      const b = data[idx * channels + 2];

      const isPink = (r > 140 && g < 130 && b > 70 && (r - g) > 50);
      
      // Is it inside the top pink square region?
      // In the cropped image, the square is centered horizontally around x=width/2, y from 10% to 50%
      const inBoxRegion = (y < height * 0.52 && x > width * 0.32 && x < width * 0.68);

      if (isPink) {
        // Vibrant corporate magenta/pink
        rgba[idx * 4] = r;
        rgba[idx * 4 + 1] = g;
        rgba[idx * 4 + 2] = b;
        rgba[idx * 4 + 3] = 255;
      } else if (inBoxRegion && r > 200 && g > 200 && b > 200) {
        // White "KS" inside the pink box
        rgba[idx * 4] = 255;
        rgba[idx * 4 + 1] = 255;
        rgba[idx * 4 + 2] = 255;
        rgba[idx * 4 + 3] = 255;
      } else {
        // Outer background -> transparent
        // Calculate soft anti-aliasing if close to pink
        if (r > 160 && (r - g) > 20 && g < 220) {
          const alpha = Math.max(0, Math.min(255, Math.round((255 - g) * 1.5)));
          rgba[idx * 4] = r;
          rgba[idx * 4 + 1] = g;
          rgba[idx * 4 + 2] = b;
          rgba[idx * 4 + 3] = alpha;
        } else {
          rgba[idx * 4] = 0;
          rgba[idx * 4 + 1] = 0;
          rgba[idx * 4 + 2] = 0;
          rgba[idx * 4 + 3] = 0;
        }
      }
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .trim()
    .resize({ width: 400, height: 180, fit: 'inside' })
    .png()
    .toFile('public/brands/official/kapson.png');

  console.log('Kapson processed successfully');
}

processKapson().catch(console.error);
