# PMBA5 — landing sahifa (STRATEGLAR jamoasi)

STG-30 vazifasi: saytdan ijtimoiy tarmoqlarga va Telegram kanalga o'tish.
PMBA SMM musobaqasi doirasidagi **o'quv loyiha**, rasmiy sayt emas (rasmiy: https://pbma.uz).

## Tarkib
- `index.html` — landing: Gantt-reja hero, IPMA darajalari (D/C/B/A), ICB 4.0 (29 element), sertifikatlash 5 bosqichi, tadbirlar (countdown), bilim markazi va Telegram obuna bloki.
- `bilim-markazi/index.html` — Bilim markazi; sahifa oxirida **"Yangi materiallarni Telegram'da oling" + "Obuna bo'lish"** bloki.
- Footer'da **5 ta ijtimoiy tarmoq ikonkasi**, yangi oynada ochiladi.
- `assets/config.js` — barcha havolalar shu yerda. LinkedIn hozircha `null` ("tez orada" ko'rinishida); havola kelganda faqat shu faylni o'zgartiring.

## Ishga tushirish
Statik sayt — build kerak emas. GitHub Pages: **Settings → Pages → Branch: main / root → Save**.
Lokal: `python3 -m http.server` → http://localhost:8000

## Ma'lumot manbalari
IPMA darajalari, 5 bosqich, ICB 4.0 — pbma.uz/sertifikatsiya/ipma va IPMA ICB 4.0. Tadbirlar — Jira STG-74, STG-79.
