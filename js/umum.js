// Dipakai semua halaman. Dimuat di <head> (tanpa defer) agar tema & ukuran huruf
// terpasang sebelum halaman tergambar, sehingga tidak berkedip.
(function () {
  "use strict";

  var UKURAN = [0.9, 1, 1.1, 1.2, 1.3];
  var akar = document.documentElement;

  function baca(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function tulis(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function terapkan() {
    var tema = baca("tka-tema") || "auto";
    if (tema === "auto") akar.removeAttribute("data-theme");
    else akar.setAttribute("data-theme", tema);
    var u = Number(baca("tka-ukuran"));
    akar.style.fontSize = (UKURAN.indexOf(u) >= 0 ? u : 1) * 100 + "%";
    var gelap = tema === "dark" || (tema === "auto" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = gelap ? "#131311" : "#f6f4ef";
  }
  terapkan();

  // Panel pengaturan tampilan; tombol pemicunya punya atribut data-tampilan.
  function buatPanel(tombol) {
    var panel = document.createElement("div");
    panel.className = "panel-tampilan";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Pengaturan tampilan");
    tombol.setAttribute("aria-expanded", "false");
    tombol.parentNode.appendChild(panel);

    function isi() {
      var tema = baca("tka-tema") || "auto";
      var u = Number(baca("tka-ukuran")) || 1;
      var seg = function (v, label) {
        return '<button data-tema="' + v + '" aria-pressed="' + (tema === v) + '" class="' + (tema === v ? "sel" : "") + '">' + label + '</button>';
      };
      panel.innerHTML =
        '<span class="eyebrow">Tema</span><span class="seg">' + seg("auto", "Otomatis") + seg("light", "Terang") + seg("dark", "Gelap") + '</span>' +
        '<span class="eyebrow">Ukuran huruf</span><span class="ukuran">' +
        '<button class="btn ikon" data-ukuran="-1" aria-label="Perkecil huruf"' + (u <= UKURAN[0] ? " disabled" : "") + '>A−</button>' +
        '<span class="stat">' + Math.round(u * 100) + '%</span>' +
        '<button class="btn ikon" data-ukuran="1" aria-label="Perbesar huruf"' + (u >= UKURAN[UKURAN.length - 1] ? " disabled" : "") + '>A+</button></span>';
    }

    function buka(ya) {
      panel.hidden = !ya;
      tombol.setAttribute("aria-expanded", String(ya));
      if (ya) isi();
    }

    tombol.addEventListener("click", function (e) { e.stopPropagation(); buka(panel.hidden); });
    panel.addEventListener("click", function (e) {
      e.stopPropagation();
      var b = e.target.closest("button");
      if (!b || b.disabled) return;
      if (b.dataset.tema) tulis("tka-tema", b.dataset.tema);
      if (b.dataset.ukuran) {
        var i = UKURAN.indexOf(Number(baca("tka-ukuran")) || 1);
        i = Math.max(0, Math.min(UKURAN.length - 1, (i < 0 ? 1 : i) + Number(b.dataset.ukuran)));
        tulis("tka-ukuran", String(UKURAN[i]));
      }
      terapkan(); isi();
    });
    document.addEventListener("click", function () { buka(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") buka(false); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var t = document.querySelector("[data-tampilan]");
    if (t) buatPanel(t);
  });

  // ---------- Data bersama beranda & halaman soal ----------
  // tka-ulas  = { idSoal: { p: idPaket, due: waktu muncul lagi (ms), t: tahap } }
  // tka-tanda = { idSoal: idPaket }
  var HARI = 864e5, JEDA_ULAS = [1, 3, 7];

  function bacaJson(k) { try { return JSON.parse(baca(k) || "null"); } catch (e) { return null; } }
  function tulisJson(k, v) { tulis(k, JSON.stringify(v)); }

  window.TKA = {
    bacaJson: bacaJson,
    tulisJson: tulisJson,

    // Jawaban salah yang tersimpan di paket tetapi belum tercatat di daftar ulas (mis. dari sebelum fitur ini ada).
    ulas: function (daftarMapel) {
      var u = bacaJson("tka-ulas") || {}, ubah = false;
      (daftarMapel || []).forEach(function (m) {
        var s = bacaJson("tka-" + m.id);
        if (!s || !s.jawab) return;
        Object.keys(s.jawab).forEach(function (id) {
          var j = s.jawab[id];
          if (j && j.cek && !j.benar && !u[id]) { u[id] = { p: m.id, due: Date.now(), t: 0 }; ubah = true; }
        });
      });
      if (ubah) tulisJson("tka-ulas", u);
      return u;
    },
    jatuhTempo: function (u) {
      var kini = Date.now();
      return Object.keys(u).filter(function (id) { return u[id].due <= kini; });
    },
    catatUlas: function (idSoal, idPaket, benar) {
      var u = bacaJson("tka-ulas") || {}, x = u[idSoal], kini = Date.now();
      if (!benar) u[idSoal] = { p: idPaket, due: kini, t: 0 };
      else if (x && x.due <= kini) {
        if (x.t >= JEDA_ULAS.length) delete u[idSoal];
        else u[idSoal] = { p: idPaket, due: kini + JEDA_ULAS[x.t] * HARI, t: x.t + 1 };
      }
      tulisJson("tka-ulas", u);
    },

    tanda: function () { return bacaJson("tka-tanda") || {}; },
    aturTanda: function (idSoal, idPaket) {
      var t = bacaJson("tka-tanda") || {};
      if (t[idSoal]) delete t[idSoal]; else t[idSoal] = idPaket;
      tulisJson("tka-tanda", t);
      return !!t[idSoal];
    }
  };

  // Mode offline: daftarkan service worker (hanya jalan di https / localhost).
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
})();
