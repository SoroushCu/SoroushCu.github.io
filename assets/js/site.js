(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var themeColorMeta = document.getElementById('theme-color-meta');
  var darkPreference = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var storageKey = 'theme';

  function readSavedTheme() {
    try {
      var saved = window.localStorage.getItem(storageKey);
      return saved === 'dark' || saved === 'light' ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function computedTheme() {
    var saved = readSavedTheme();
    if (saved) {
      return saved;
    }
    return darkPreference && darkPreference.matches ? 'dark' : 'light';
  }

  function updateThemeControl(theme) {
    if (!themeToggle) {
      return;
    }

    var isDark = theme === 'dark';
    var nextTheme = isDark ? 'light' : 'dark';
    var label = 'Switch to ' + nextTheme + ' mode';

    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
    themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }

    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#171a1d' : '#ffffff');
    }

    updateThemeControl(theme);
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      // A private-browsing or storage policy may prevent persistence.
    }
  }

  applyTheme(computedTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      saveTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (darkPreference) {
    var followSystemTheme = function (event) {
      if (!readSavedTheme()) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    };

    if (typeof darkPreference.addEventListener === 'function') {
      darkPreference.addEventListener('change', followSystemTheme);
    } else if (typeof darkPreference.addListener === 'function') {
      darkPreference.addListener(followSystemTheme);
    }
  }

  // Keep the profile-menu control accessible while the bundled AcademicPages
  // script handles its visual open/close animation.
  var followButton = document.querySelector('.author__urls-wrapper > button');
  if (followButton) {
    followButton.setAttribute('aria-expanded', followButton.classList.contains('open') ? 'true' : 'false');
    followButton.addEventListener('click', function () {
      window.requestAnimationFrame(function () {
        followButton.setAttribute('aria-expanded', followButton.classList.contains('open') ? 'true' : 'false');
      });
    });
  }
})();
