async function run() {
  try {
    const res = await fetch('https://companyvakil.com/trademark/ks-kapson-cable-glands-label-1587841', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const imgs = html.match(/src=["'][^"']*(?:trademark|tm|label|logo)[^"']*["']/gi) || html.match(/<img[^>]+>/gi);
    console.log('companyvakil imgs:', imgs ? imgs.slice(0, 10) : 'none');
  } catch (e) {
    console.error(e.message);
  }
}
run();
