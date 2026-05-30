const ROBOTS = `User-agent: Yeti
Allow: /

User-agent: *
Allow: /
Disallow: /node_modules/

Sitemap: https://mariage-8qg.pages.dev/sitemap.xml`;

export async function onRequest() {
  return new Response(ROBOTS, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
