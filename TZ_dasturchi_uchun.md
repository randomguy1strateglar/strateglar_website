# STG-30 · Dasturchiga texnik topshiriq (TZ)

Assalomu alaykum! PMBA saytiga quyidagilarni qo'shishni so'raymiz. Tayyor namuna (HTML/CSS/JS) shu repozitoriyda — ko'chirib olsangiz bo'ladi.

## 1. Footer: 5 ta ijtimoiy tarmoq ikonkasi
- Tartib: Telegram, Instagram, LinkedIn, Facebook, YouTube.
- Har biri **yangi oynada** ochilsin: `target="_blank" rel="noopener"`, `aria-label="Telegram (yangi oynada)"`.
- Havolalar (`assets/config.js` dagi kabi):

| Tarmoq | Havola |
|---|---|
| Telegram | https://t.me/pmba5 |
| Instagram | https://www.instagram.com/pmba.5/ |
| YouTube | https://www.youtube.com/@PMBA5 |
| LinkedIn | keyinroq beriladi |
| Facebook | keyinroq beriladi |

- Namuna kod: `index.html` → `<ul class="social" id="social">` + `assets/app.js` (ikonkalar inline SVG, tashqi kutubxonasiz).

## 2. /bilim-markazi sahifasi oxirida Telegram obuna bloki
- Sarlavha: **Yangi materiallarni Telegram'da oling**
- Matn: Har kuni bitta foydali post, PM-quiz va tadbir eslatmalari. Reklama yo'q.
- Tugma: **Obuna bo'lish** → https://t.me/pmba5 (yangi oynada)
- Namuna: `bilim-markazi/index.html` → `<section id="obuna">`.

## 3. UTM (ijtimoiy tarmoqdan saytga keluvchi havolalar)
Biz tarmoqlarda saytga quyidagi formatda havola beramiz — GA4 da `utm_source` bo'yicha ko'rinadi:
`https://pbma.uz/?utm_source={telegram|instagram|youtube|facebook|linkedin}&utm_medium={post|bio|video}&utm_campaign={launch|webinar|shorts}`
To'liq jadval: STG-31 UTM jadvali.

## Muddat
02.11.2026 gacha. Savol bo'lsa — Fazliddin Fayzullayev (STRATEGLAR jamoasi), Jira STG-30.

## Tekshiruv ro'yxati (qo'shilgandan keyin)
- [ ] Kompyuterda: 5 ikonka ko'rinadi, har biri yangi oynada to'g'ri sahifani ochadi
- [ ] Telefonda: xuddi shunday
- [ ] /bilim-markazi oxirida blok bor, tugma t.me/pmba5 ni ochadi
