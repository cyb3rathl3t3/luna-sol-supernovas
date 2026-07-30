/* Luna Sol & The Supernovas — Interactive */

(function () {
  'use strict';

  // ---------- Starfield ----------
  const canvas = document.getElementById('stars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let w, h, animationId;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      const count = Math.floor((w * h) / 9000);
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random() * 0.7 + 0.3,
          s: Math.random() * 0.4 + 0.1
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 192, 192, ${star.a})`;
        ctx.fill();
        star.y += star.s;
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  // ---------- Mobile Nav ----------
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // ---------- Header scroll effect ----------
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.style.background = 'rgba(14, 18, 25, 0.95)';
      } else {
        header.style.background = 'rgba(14, 18, 25, 0.85)';
      }
    });
  }
})();
