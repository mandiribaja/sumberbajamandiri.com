(function () {
  'use strict';

  // Menu mobile
  var toggle = document.querySelector('.navbar-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Submenu di layar sentuh: ketuk sekali membuka, ketuk kedua mengikuti tautan
  document.querySelectorAll('.nav-list .has-children > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 900px)').matches) {
        var li = a.parentElement;
        if (!li.classList.contains('expanded')) { e.preventDefault(); li.classList.add('expanded'); }
      }
    });
  });

  // Tabel di artikel dibungkus agar bisa digeser di layar kecil
  document.querySelectorAll('.entry-content table').forEach(function (t) {
    if (t.parentElement.classList.contains('table-wrap')) return;
    var w = document.createElement('div');
    w.className = 'table-wrap';
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });
})();
