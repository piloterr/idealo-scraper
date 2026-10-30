#!/usr/bin/env bash
# Idealo Product API – cURL example
# Usage: PILOTERR_API_KEY=your-key ./product.sh
set -euo pipefail

curl -sS -G "https://api.piloterr.com/v2/idealo/product" \
  -H "x-api-key: ${PILOTERR_API_KEY}" \
  --data-urlencode query=https://www.idealo.es/precios/205227870/asics-novablast-5-1011b974.html
