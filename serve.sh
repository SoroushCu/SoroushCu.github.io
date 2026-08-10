#!/usr/bin/env sh
set -eu

PORT="${1:-8000}"
cd "$(dirname "$0")"

if command -v python3 >/dev/null 2>&1; then
  PYTHON=python3
elif command -v python >/dev/null 2>&1; then
  PYTHON=python
else
  printf '%s\n' 'Python 3 is required for the local preview but was not found.' >&2
  printf '%s\n' 'Install Python 3, then run this script again.' >&2
  exit 1
fi

printf 'Serving Soroush Mesforush website at http://127.0.0.1:%s/\n' "$PORT"
printf '%s\n' 'Press Ctrl+C to stop the server.'
"$PYTHON" -m http.server "$PORT" --bind 127.0.0.1
