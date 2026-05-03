Place self-hosted woff2 font files here.

Required files:
  instrument-serif-regular.woff2
  instrument-serif-italic.woff2
  geist-regular.woff2
  geist-medium.woff2
  geist-semibold.woff2

Sources (free):
  Instrument Serif → https://fonts.google.com/specimen/Instrument+Serif
  Geist           → https://vercel.com/font  (or https://fontshare.com/fonts/switzer as a Switzer alt)

If the woff2 files are missing, the site falls back to Georgia (serif) and
system-ui (sans) via the @font-face declarations in src/styles/global.css —
nothing breaks visually beyond losing the custom typeface.
