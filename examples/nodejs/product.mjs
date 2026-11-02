// Idealo Product API – Node.js example (Node 18+, native fetch, ES module)
// Usage: PILOTERR_API_KEY=your-key node product.mjs

const params = new URLSearchParams({
  "query": "https://www.idealo.es/precios/205227870/asics-novablast-5-1011b974.html",
});

const response = await fetch(`https://api.piloterr.com/v2/idealo/product?${params}`, {
  headers: { "x-api-key": process.env.PILOTERR_API_KEY },
  signal: AbortSignal.timeout(120_000),
});

if (!response.ok) {
  console.error(`Piloterr error ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
