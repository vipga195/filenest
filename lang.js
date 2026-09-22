(function () {
  var KEY = 'filenest-lang';
  var root = document.documentElement;

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'vi' || q === 'en') return q;
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === 'vi' || saved === 'en') return saved;
    } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en';
  }

  function apply(lang) {
    root.lang = lang;
    var t = root.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'vi' ? 'English' : 'Tiếng Việt';
  }

  apply(pick());

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.lang);
    var btn = document.getElementById('lang-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = root.lang === 'vi' ? 'en' : 'vi';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
  });
})();
