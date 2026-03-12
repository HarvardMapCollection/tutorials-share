(function () {
  'use strict';

  // Mobile Menu
  var menuToggle = document.getElementById('menu-toggle');
  var siteNav = document.getElementById('site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('is-open');
      var isOpen = siteNav.classList.contains('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !menuToggle.contains(e.target)) {
        siteNav.classList.remove('is-open');
      }
    });
  }

  // Header Scroll Effect
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // Image Zoom
  var overlay = document.getElementById('zoom-overlay');
  var zoomImage = document.getElementById('zoom-image');

  if (overlay && zoomImage) {
    document.querySelectorAll('.zoomable').forEach(function (img) {
      img.addEventListener('click', function () {
        zoomImage.src = this.src;
        zoomImage.alt = this.alt;
        overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      });
    });

    overlay.addEventListener('click', function () {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-active')) {
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  document.querySelectorAll('.content img:not(.zoomable)').forEach(function (img) {
    img.classList.add('zoomable');
  });

  // Code Block Copy Buttons
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var pre = codeBlock.parentNode;
    pre.style.position = 'relative';

    var classes = codeBlock.className || '';
    var langMatch = classes.match(/language-(\w+)/);
    if (langMatch) {
      var langLabel = document.createElement('span');
      langLabel.className = 'code-lang';
      langLabel.textContent = langMatch[1];
      pre.appendChild(langLabel);
    }

    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.type = 'button';

    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(codeBlock.textContent).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('is-copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('is-copied');
        }, 2000);
      });
    });

    pre.appendChild(btn);
  });

  // Reading Progress
  var progressBar = document.querySelector('.reading-progress .progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }, { passive: true });
  }

})();
