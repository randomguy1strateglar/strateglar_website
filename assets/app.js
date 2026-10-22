(function () {
  'use strict';
  var C = window.PMBA5 || { social: {} };

  /* ---------- social icons (footer) ---------- */
  var ICON = {
    telegram: '<path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13 1.4 11.5c-1-.3-1-1 .2-1.5L20.6 2.8c.9-.3 1.6.2 1.3 1.5z"/>',
    instagram: '<path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1C3.8 5.2 5.1 3.9 7.8 3.8 9 3.6 9.3 3.6 12 3.6zM12 2c-2.7 0-3.1 0-4.1.1C4.2 2.2 2.2 4.2 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.7 2.1 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.2 5.7-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.2-3.7-2.1-5.7-5.8-5.8C15.1 2 14.7 2 12 2z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>',
    facebook: '<path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.6C10.1 1.6 9.3 4.5 9.3 6.3v2.2H7v4h2.3V22.4H14V12.5h3.2l.4-4z"/>',
    youtube: '<path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.7 15.5v-7l6.1 3.5z"/>'
  };
  var ul = document.getElementById('social');
  if (ul) {
    ['telegram', 'instagram', 'linkedin', 'facebook', 'youtube'].forEach(function (k) {
      var s = C.social[k] || { label: k, url: null };
      var svg = '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[k] + '</svg>';
      var li = document.createElement('li');
      li.innerHTML = s.url
        ? '<a href="' + s.url + '" target="_blank" rel="noopener" aria-label="' + s.label + ' (yangi oynada)">' + svg + '</a>'
        : '<span role="img" aria-label="' + s.label + ' — tez orada" title="' + s.label + ' — tez orada">' + svg + '</span>';
      ul.appendChild(li);
    });
  }
  /* keep every Telegram button in sync with config */
  if (C.social.telegram && C.social.telegram.url) {
    document.querySelectorAll('[data-social="telegram"]').forEach(function (a) { a.href = C.social.telegram.url; });
  }

  /* ---------- Gantt hero ---------- */
  var G = document.getElementById('gantt');
  if (G) {
    var start = new Date('2026-10-21T00:00:00+05:00'), DAYS = 18, MS = 864e5;
    var rows = [
      { name: 'IPMA nima?',      sub: 'tanishuv',   href: '#darajalar', from: 0,  len: 6 },
      { name: '4 daraja',        sub: 'D, C, B, A', href: '#darajalar', from: 5,  len: 5 },
      { name: 'ICB 4.0',         sub: '29 element', href: '#icb',       from: 8,  len: 4 },
      { name: "Sertifikat yo'li",sub: '5 bosqich',  href: '#yol',       from: 10, len: 4 },
      { name: 'Webinar',         sub: '3-noyabr',   href: '#tadbirlar', ms: 13 },
      { name: 'Bilim markazi',   sub: 'har kuni',   href: '#bilim',     from: 7,  len: 11 },
      { name: 'Ochiq Q&A',       sub: '6-noyabr',   href: '#tadbirlar', ms: 16 }
    ];
    var axis = G.querySelector('.gantt__axis'), body = G.querySelector('.gantt__rows');
    var ax = '<span></span>';
    for (var d = 0; d < DAYS; d++) {
      var dt = new Date(start.getTime() + d * MS), dd = dt.getUTCDate() + (dt.getUTCHours() >= 19 ? 1 : 0);
      var day = new Date(start.getTime() + d * MS + 5 * 36e5);
      var n = day.getUTCDate(), mon = day.getUTCMonth() + 1;
      ax += '<span class="' + (n === 21 || n === 1 || day.getUTCDay() === 1 ? 'wk' : '') + '">' + n + (n === 1 || d === 0 ? '.' + (mon < 10 ? '0' : '') + mon : '') + '</span>';
    }
    axis.innerHTML = ax;
    // today progress: how much of each bar has elapsed
    var now = Date.now(), todayIdx = (now - start.getTime()) / MS;
    rows.forEach(function (r, i) {
      var a = document.createElement('a');
      a.className = 'grow'; a.href = r.href; a.setAttribute('role', 'listitem');
      var label = '<span class="grow__name">' + r.name + ' <small>' + r.sub + '</small></span>';
      if (r.ms !== undefined) {
        a.innerHTML = label + '<svg class="grow__dia" viewBox="0 0 20 20" style="grid-column:' + (r.ms + 2) + ';animation-delay:' + (0.25 + i * 0.09) + 's"><rect x="4" y="4" width="12" height="12" rx="2" transform="rotate(45 10 10)"/></svg>';
        a.setAttribute('aria-label', r.name + ', ' + r.sub);
      } else {
        var done = Math.max(0, Math.min(1, (todayIdx - r.from) / r.len));
        a.innerHTML = label + '<span class="grow__bar" style="grid-column:' + (r.from + 2) + ' / span ' + r.len + ';animation-delay:' + (0.15 + i * 0.09) + 's"><i style="width:' + (done * 100).toFixed(1) + '%"></i></span>';
        a.setAttribute('aria-label', r.name + ', ' + r.sub);
      }
      body.appendChild(a);
    });
    var tl = G.querySelector('.gantt__today');
    function placeToday() {
      if (todayIdx < 0 || todayIdx > DAYS) { tl.style.display = 'none'; return; }
      var first = axis.children[1], last = axis.children[DAYS];
      var gx = G.getBoundingClientRect().left, x0 = first.getBoundingClientRect().left - gx, x1 = last.getBoundingClientRect().right - gx;
      tl.style.left = (x0 + (x1 - x0) * (todayIdx / DAYS)) + 'px'; tl.style.display = 'block';
    }
    placeToday(); window.addEventListener('resize', placeToday);
  }

  /* ---------- levels tabs (pbma.uz/sertifikatsiya/ipma) ---------- */
  var LV = {
    D: { code: 'Level D', title: 'Project Management Associate', exp: 'Shart emas', who: 'PMO koordinatsiyasi, yosh mutaxassislar', exam: '120 savollik kompyuter testi' },
    C: { code: 'Level C', title: 'Certified Project Manager', exp: 'Kamida 3 yil loyiha boshqaruvi', who: "O'rta murakkablikdagi loyihalar: byudjet, muddat va sifat to'liq nazorati", exam: 'Yozma imtihon, amaliy keyslar va intervyu' },
    B: { code: 'Level B', title: 'Certified Senior Project Manager', exp: '5+ yil, shundan 3 yili murakkab loyihalarda', who: "Tarmoqlararo murakkab loyihalar", exam: 'Test, keys hisoboti va intervyu' },
    A: { code: 'Level A', title: 'Certified Projects Director', exp: '5+ yil portfel yoki dastur boshqaruvi', who: 'Yirik strategik portfellar', exam: 'Hisobot va assessor bilan intervyu' }
  };
  var tabs = document.querySelectorAll('.levels [role="tab"]'), panel = document.getElementById('lv-panel');
  function select(btn) {
    tabs.forEach(function (t) { var on = t === btn; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    var d = LV[btn.dataset.lv];
    panel.querySelectorAll('[data-f]').forEach(function (el) { el.textContent = d[el.dataset.f]; });
    panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (k) { var n = tabs[(i + k + tabs.length) % tabs.length]; n.focus(); select(n); e.preventDefault(); }
    });
  });

  /* ---------- ICB 4.0 grid (IPMA ICB 4.0 elements) ---------- */
  var ICB = {
    p: ['Strategiya', 'Boshqaruv tizimi, tuzilma va jarayonlar', 'Muvofiqlik, standartlar va qoidalar', "Kuch va manfaatlar", 'Madaniyat va qadriyatlar'],
    o: ["O'zini anglash va o'zini boshqarish", 'Shaxsiy halollik va ishonchlilik', 'Shaxsiy muloqot', 'Munosabatlar va jalb qilish', 'Yetakchilik', 'Jamoaviy ish', 'Nizo va inqirozlar', 'Topqirlik', 'Muzokaralar', "Natijaga yo'nalganlik"],
    a: ['Loyiha dizayni', 'Talablar va maqsadlar', "Ko'lam (scope)", 'Vaqt', 'Tashkiliy tuzilma va axborot', 'Sifat', 'Moliya', 'Resurslar', 'Xaridlar', 'Rejalashtirish va nazorat', 'Risk va imkoniyatlar', "Manfaatdor tomonlar", "O'zgarish va transformatsiya", 'Tanlash va muvozanatlash']
  };
  var GN = { p: 'Istiqbol', o: 'Odamlar', a: 'Amaliyot' };
  var lab = document.getElementById('icb-label'), def = lab ? lab.textContent : '';
  document.querySelectorAll('.icb__group').forEach(function (g) {
    var k = g.dataset.g, box = g.querySelector('.icb__cells');
    ICB[k].forEach(function (name, i) {
      var b = document.createElement('button');
      b.className = 'cell'; b.type = 'button';
      b.setAttribute('aria-label', GN[k] + ' ' + (i + 1) + ': ' + name);
      var show = function () { lab.textContent = GN[k] + ' · ' + name; };
      b.addEventListener('mouseenter', show); b.addEventListener('focus', show);
      b.addEventListener('click', show);
      b.addEventListener('mouseleave', function () { lab.textContent = def; });
      box.appendChild(b);
    });
  });

  /* ---------- countdowns ---------- */
  var cds = document.querySelectorAll('[data-countdown]');
  function tick() {
    cds.forEach(function (el) {
      var diff = new Date(el.dataset.countdown).getTime() - Date.now();
      if (diff <= 0) { el.innerHTML = '<div><b>✓</b><small>boʻlib oʻtdi</small></div>'; return; }
      var d = Math.floor(diff / 864e5), h = Math.floor(diff % 864e5 / 36e5), m = Math.floor(diff % 36e5 / 6e4);
      el.innerHTML = '<div><b>' + d + '</b><small>kun</small></div><div><b>' + h + '</b><small>soat</small></div><div><b>' + m + '</b><small>daqiqa</small></div>';
    });
  }
  if (cds.length) { tick(); setInterval(tick, 30000); }
})();
