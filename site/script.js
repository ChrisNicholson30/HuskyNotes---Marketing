/* Husky Notes marketing site — small, dependency-free interactions */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- theme: respect saved choice, else system preference ----
     (initial theme is applied by an inline script in <head> to avoid a flash;
     here we keep the browser UI colour in sync once a manual choice is made) ---- */
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    var color = theme === 'light' ? '#F4F8FB' : '#0B1622';
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    metas.forEach(function (m) {
      m.removeAttribute('media'); // manual choice should override system preference
      m.setAttribute('content', color);
    });
  }

  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('husky-theme', next); } catch (e) {}
    });
  }

  /* ---- nav: shadow on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var burger = document.getElementById('navBurger');
  var links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- reveal-on-scroll ---- */
  var revealEls = document.querySelectorAll(
    '.card, .theme-card, .split__copy, .split__art, .open__inner, .section__head, .stat'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- current year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
