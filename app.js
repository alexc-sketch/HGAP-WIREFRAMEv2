(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var ARROW = '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E60027" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';
  var esc = function (t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  var close = function (el) { if (el) el.setAttribute('data-closed', ''); };
  var open = function (el) { if (el) el.removeAttribute('data-closed'); };
  var isOpen = function (el) { return el && !el.hasAttribute('data-closed'); };

  var scrim = $('[data-js="scrim"]');
  var search = $('#hg-search');
  var mega = $('#hg-mega');
  var mobileMenu = $('#hg-mobile-menu');
  var state = { menu: null, cat: 0 };

  [scrim, search, mega, mobileMenu].forEach(close);
  $$('[data-js="mob-sub"]').forEach(close);

  /* ---------- Build map toggle ---------- */
  var buildBtn = $('[data-js="build"]');
  function setBuild(on) {
    document.body.classList.toggle('show-build', on);
    buildBtn.textContent = on ? 'Build map: On' : 'Build map: Off';
    buildBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    buildBtn.style.background = on ? '#FFD54A' : '#FFFFFF';
  }
  buildBtn.addEventListener('click', function () { setBuild(!document.body.classList.contains('show-build')); });
  setBuild(false);

  /* ---------- Close everything ---------- */
  function closeAll() {
    state.menu = null;
    [scrim, search, mega, mobileMenu].forEach(close);
    styleNav();
    setMobileIcon(false);
    $$('[data-js="search-toggle"]').forEach(function (b) { if (b.hasAttribute('aria-expanded')) b.setAttribute('aria-expanded', 'false'); });
  }
  scrim.addEventListener('click', closeAll);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

  /* ---------- Search ---------- */
  $$('[data-js="search-toggle"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var willOpen = !isOpen(search);
      closeAll();
      if (willOpen) {
        open(search);
        $$('[data-js="search-toggle"]').forEach(function (b) { if (b.hasAttribute('aria-expanded')) b.setAttribute('aria-expanded', 'true'); });
        var input = $('input', search); if (input) input.focus();
      }
    });
  });

  /* ---------- Mega menu (two-pane drilldown) ---------- */
  var navBtns = $$('[data-js="nav"]');
  function styleNav() {
    navBtns.forEach(function (b) {
      var on = b.getAttribute('data-key') === state.menu;
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
      b.style.background = on ? '#E60027' : 'transparent';
      b.style.color = on ? '#FFFFFF' : '#1A1A1A';
      var chev = $('svg', b); if (chev) chev.style.transform = on ? 'rotate(180deg)' : '';
    });
  }
  function renderMega() {
    var m = MENUS.filter(function (x) { return x.key === state.menu; })[0];
    if (!m) return;
    var c = m.cats[Math.min(state.cat, m.cats.length - 1)];
    var left = m.cats.map(function (cat, i) {
      var on = i === state.cat;
      return '<li><button type="button" data-cat="' + i + '" aria-current="' + on + '" style="width: 100%; background: none; border: 0; font: inherit; text-align: left; cursor: pointer; min-height: 44px; display: flex; align-items: center; gap: 10px; padding: 0; color: #1A1A1A; font-size: 16px;">' +
        '<span style="' + (on ? 'font-weight: 600; text-decoration: underline; text-decoration-color: #E60027; text-decoration-thickness: 2px; text-underline-offset: 5px;' : 'font-weight: 400;') + '">' + esc(cat.name) + '</span>' +
        (on ? '<span aria-hidden="true" style="display: block; width: 28px; height: 2px; background: #E60027;"></span>' : '') + '</button></li>';
    }).join('');
    var links = c.links.map(function (l) {
      return '<li><a href="#top" style="color: #1A1A1A; text-decoration: none; font-size: 15px; font-weight: 500; min-height: 44px; display: flex; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 1px solid #E3E3E3">' + esc(l) + ' ' + ARROW + '</a></li>';
    }).join('');
    mega.setAttribute('aria-label', m.label + ' menu');
    mega.innerHTML =
      '<div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); min-height: 400px">' +
        '<div style="background: #F2F2F2; padding: 36px 32px 36px clamp(16px, 4vw, 40px); display: flex; flex-direction: column; gap: 18px">' +
          '<a href="' + m.href + '" style="color: #1A1A1A; font-size: 20px; font-weight: 600; text-decoration: underline; text-underline-offset: 4px">' + esc(m.label) + '</a>' +
          '<ul style="list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px">' + left + '</ul>' +
        '</div>' +
        '<div style="position: relative; padding: 40px clamp(24px, 4vw, 48px); display: flex; flex-direction: column; gap: 16px">' +
          '<button type="button" data-close aria-label="Close menu" style="position: absolute; top: 16px; right: 16px; width: 44px; height: 44px; background: none; border: 0; color: #1A1A1A; cursor: pointer; display: flex; align-items: center; justify-content: center"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"></path></svg></button>' +
          '<a href="#top" style="color: #1A1A1A; text-decoration: none; font-size: 30px; font-weight: 300; display: inline-flex; align-items: center; gap: 12px; align-self: flex-start">' + esc(c.name) + ' ' + ARROW.replace('15', '22').replace('15', '22') + '</a>' +
          '<p style="margin: 0; font-size: 16px; color: #333333; max-width: 560px">' + esc(c.desc) + '</p>' +
          '<ul style="list-style: none; margin: 8px 0 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 32px; max-width: 640px">' + links + '</ul>' +
        '</div>' +
      '</div>';
    $$('[data-cat]', mega).forEach(function (b) {
      var pick = function () { var i = +b.getAttribute('data-cat'); if (i !== state.cat) { state.cat = i; renderMega(); var nb = $('[data-cat="' + i + '"]', mega); if (nb && document.activeElement !== nb && b === document.activeElement) nb.focus(); } };
      b.addEventListener('mouseenter', pick); b.addEventListener('click', pick); b.addEventListener('focus', pick);
    });
    $('[data-close]', mega).addEventListener('click', closeAll);
  }
  navBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var key = b.getAttribute('data-key');
      if (state.menu === key) { closeAll(); return; }
      closeAll();
      state.menu = key; state.cat = 0;
      renderMega(); open(mega); open(scrim); styleNav();
    });
  });
  styleNav();

  /* ---------- Mobile menu ---------- */
  var mobileToggle = $('[data-js="mobile-toggle"]');
  function setMobileIcon(on) {
    var p = $('[data-js="mobile-icon"]');
    if (p) p.setAttribute('d', on ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', on ? 'true' : 'false');
  }
  if (mobileToggle) mobileToggle.addEventListener('click', function () {
    var willOpen = !isOpen(mobileMenu);
    closeAll();
    if (willOpen) { open(mobileMenu); open(scrim); setMobileIcon(true); }
  });
  $$('[data-js="mob-acc"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sub = btn.parentNode.querySelector('[data-js="mob-sub"]');
      var willOpen = !isOpen(sub);
      $$('[data-js="mob-sub"]').forEach(close);
      $$('[data-js="mob-acc"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); var s = $('svg', b); if (s) s.style.transform = ''; });
      if (willOpen) { open(sub); btn.setAttribute('aria-expanded', 'true'); var s = $('svg', btn); if (s) s.style.transform = 'rotate(180deg)'; }
    });
  });
  setMobileIcon(false);

  /* ---------- Hero carousel ---------- */
  var track = $('[data-js="track"]');
  var slides = track ? Array.prototype.slice.call(track.children) : [];
  var tabs = $$('[data-js="tab"]');
  var pauseBtn = $('[data-js="pause"]');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur = 0, paused = reduce, hover = false;
  var TAB = 'font: inherit; font-size: 14px; font-weight: 600; height: 40px; padding: 0 18px; border-radius: 999px; cursor: pointer; ';
  function go(i) {
    cur = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    track.style.transition = reduce ? 'none' : 'transform 650ms cubic-bezier(0.22, 0.7, 0.2, 1)';
    slides.forEach(function (s, k) {
      s.setAttribute('aria-hidden', k === cur ? 'false' : 'true');
      $$('a, button', s).forEach(function (a) { a.setAttribute('tabindex', k === cur ? '0' : '-1'); });
    });
    tabs.forEach(function (t, k) {
      t.setAttribute('aria-selected', k === cur ? 'true' : 'false');
      t.setAttribute('style', TAB + (k === cur ? 'background: #1A1A1A; color: #FFFFFF; border: 1px solid #1A1A1A;' : 'background: #FFFFFF; color: #1A1A1A; border: 1px solid #BDBDBD;'));
    });
  }
  function setPaused(p) {
    paused = p;
    pauseBtn.setAttribute('aria-label', p ? 'Play slideshow' : 'Pause slideshow');
    var icon = $('[data-js="pause-icon"]'); if (icon) icon.setAttribute('d', p ? 'M8 5v14l11-7z' : 'M7 5h4v14H7zM13 5h4v14h-4z');
  }
  if (track && slides.length) {
    tabs.forEach(function (t, k) { t.addEventListener('click', function () { go(k); }); });
    $('[data-js="prev"]').addEventListener('click', function () { go(cur - 1); });
    $('[data-js="next"]').addEventListener('click', function () { go(cur + 1); });
    pauseBtn.addEventListener('click', function () { setPaused(!paused); });
    var car = $('[data-js="carousel"]');
    car.addEventListener('mouseenter', function () { hover = true; });
    car.addEventListener('mouseleave', function () { hover = false; });
    car.addEventListener('focusin', function () { hover = true; });
    car.addEventListener('focusout', function () { hover = false; });
    setInterval(function () { if (!paused && !hover && !state.menu && !isOpen(mobileMenu)) go(cur + 1); }, 6000);
    setPaused(paused); go(0);
  }

  /* ---------- Product finder: More filters (mobile) ---------- */
  var moreBtn = $('[data-js="more"]');
  var moreFields = $$('label.hg-more');
  if (moreBtn) moreBtn.addEventListener('click', function () {
    var show = moreFields[0] && moreFields[0].classList.contains('hg-more');
    moreFields.forEach(function (f) { f.classList.toggle('hg-more', !show); });
    moreBtn.textContent = show ? 'Fewer Filters' : 'More Filters (3)';
    moreBtn.setAttribute('aria-expanded', show ? 'true' : 'false');
  });
})();
