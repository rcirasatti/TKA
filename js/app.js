(function () {
  "use strict";

  var LEVEL = { 1: "Pemahaman", 2: "Aplikasi", 3: "Penalaran" };
  var TIPE = {
    pg: "Pilih satu jawaban yang paling tepat.",
    mcma: "Pilih semua jawaban yang benar — bisa lebih dari satu.",
    kategori: "Tentukan Benar atau Salah untuk setiap pernyataan."
  };
  var HURUF = "ABCDEFGH";

  function svg(d) {
    return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }
  var IKON = {
    kiri: svg('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    kanan: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    lampu: svg('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1.1 2V17h5v-1.2c.1-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z"/>'),
    cek: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    silang: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
    ulang: svg('<path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4"/>'),
    grafik: svg('<path d="M5 20V10M12 20V4M19 20v-7"/>')
  };

  var el = {
    judul: document.getElementById("judul"),
    sub: document.getElementById("sub"),
    stat: document.getElementById("stat"),
    prog: document.getElementById("prog"),
    nav: document.getElementById("nav"),
    isi: document.getElementById("isi")
  };

  var idMapel = new URLSearchParams(location.search).get("mapel");
  var mapel = (window.DAFTAR_MAPEL || []).filter(function (m) { return m.id === idMapel; })[0];
  if (!mapel) return gagal("Mata pelajaran tidak ditemukan.");

  var kunciSimpan = "tka-" + mapel.id;
  var bank, daftar, st;

  var s = document.createElement("script");
  s.src = "data/" + mapel.id + ".js?v=" + Date.now(); // selalu ambil bank soal terbaru
  s.onload = mulai;
  s.onerror = function () { gagal("Bank soal " + mapel.nama + " belum tersedia."); };
  document.body.appendChild(s);

  function gagal(pesan) {
    el.judul.textContent = "Ups";
    el.isi.innerHTML = '<div class="kosong"><p>' + pesan + '</p><a href="index.html">Kembali ke daftar mapel</a></div>';
  }

  // ---------- Penyimpanan ----------
  function muat() {
    try {
      var x = JSON.parse(localStorage.getItem(kunciSimpan) || "null");
      if (x && x.jawab) return x;
    } catch (e) {}
    return { idx: 0, jawab: {} };
  }
  function simpan() {
    try { localStorage.setItem(kunciSimpan, JSON.stringify(st)); } catch (e) {}
  }

  function mulai() {
    bank = (window.BANK_SOAL || {})[mapel.id];
    if (!bank || !bank.soal || !bank.soal.length) return gagal("Bank soal kosong.");
    daftar = bank.soal;
    st = muat();
    if (st.idx >= daftar.length) st.idx = 0;
    st.total = daftar.length; // dipakai beranda untuk bar progres
    simpan();
    try { localStorage.setItem("tka-terakhir", mapel.id); } catch (e) {}
    var bagian = mapel.nama.split(" · ");
    el.judul.textContent = bagian[0];
    el.sub.textContent = bagian[1] || "Latihan reguler";
    document.title = "Latihan TKA " + mapel.nama;
    render();
  }

  function jw(q) {
    if (!st.jawab[q.id]) st.jawab[q.id] = { pilih: null, cek: false, benar: false, hint: false };
    return st.jawab[q.id];
  }

  // ---------- Penilaian ----------
  function sudahLengkap(q, j) {
    if (q.tipe === "pg") return typeof j.pilih === "number";
    if (q.tipe === "mcma") return Array.isArray(j.pilih) && j.pilih.length > 0;
    if (q.tipe === "kategori") {
      return Array.isArray(j.pilih) && q.pernyataan.every(function (_, i) { return typeof j.pilih[i] === "boolean"; });
    }
    return false;
  }
  function nilai(q, j) {
    if (q.tipe === "pg") return j.pilih === q.kunci;
    if (q.tipe === "mcma") {
      var a = j.pilih.slice().sort().join(","), b = q.kunci.slice().sort().join(",");
      return a === b;
    }
    if (q.tipe === "kategori") return q.kunci.every(function (k, i) { return j.pilih[i] === k; });
    return false;
  }
  function teksKunci(q) {
    if (q.tipe === "pg") return HURUF[q.kunci];
    if (q.tipe === "mcma") return q.kunci.slice().sort().map(function (i) { return HURUF[i]; }).join(", ");
    return q.kunci.map(function (k, i) { return (i + 1) + "-" + (k ? "Benar" : "Salah"); }).join(", ");
  }

  // ---------- Render ----------
  function render() {
    renderStat();
    renderNav();
    if (st.idx === "ringkasan") renderRingkasan();
    else renderSoal(daftar[st.idx], st.idx);
    window.scrollTo(0, 0);
  }

  function renderStat() {
    var n = 0, b = 0;
    daftar.forEach(function (q) {
      var j = st.jawab[q.id];
      if (j && j.cek) { n++; if (j.benar) b++; }
    });
    el.stat.textContent = n + "/" + daftar.length;
    el.stat.title = "Dikerjakan " + n + " dari " + daftar.length + " · Benar " + b;
    el.prog.style.width = (n / daftar.length * 100) + "%";
  }

  function renderNav() {
    var h = "";
    daftar.forEach(function (q, i) {
      var j = st.jawab[q.id], c = "";
      if (j && j.cek) c = j.benar ? "ok" : "bad";
      if (i === st.idx) c += " cur";
      h += '<button class="' + c + '" data-go="' + i + '" title="Soal ' + (i + 1) + ' · ' + q.bab + '">' + (i + 1) + '</button>';
    });
    h += '<button class="ke-ring' + (st.idx === "ringkasan" ? ' cur' : '') + '" data-go="ringkasan">' + IKON.grafik + 'Ringkasan</button>';
    el.nav.innerHTML = h;
    // Di HP navigasi bisa digeser; posisikan nomor aktif di tengah.
    var cur = el.nav.querySelector(".cur");
    if (cur && el.nav.scrollWidth > el.nav.clientWidth) {
      el.nav.scrollLeft = cur.offsetLeft - el.nav.clientWidth / 2 + cur.offsetWidth / 2;
    }
  }

  function renderSoal(q, i) {
    var j = jw(q);
    var kunci = j.cek;
    var h = '<article class="soal-wrap">';
    h += '<div class="meta"><span class="nomor">Soal ' + (i + 1) + ' <i>/ ' + daftar.length + '</i></span>' +
      '<span class="sep"></span><span>' + q.bab + '</span><span class="sep"></span>' +
      '<span class="lv lv' + q.level + '"><span class="pips"><i></i><i></i><i></i></span>' + LEVEL[q.level] + '</span></div>';
    if (q.stimulus) h += '<div class="stimulus">' + q.stimulus + '</div>';
    h += '<div class="soal">' + q.soal + '</div>';
    h += '<div class="tipe">' + TIPE[q.tipe] + '</div>';

    if (q.tipe === "pg" || q.tipe === "mcma") {
      var multi = q.tipe === "mcma";
      h += '<div class="opsi' + (multi ? ' multi' : '') + '">';
      q.opsi.forEach(function (o, k) {
        var dipilih = multi ? (j.pilih || []).indexOf(k) >= 0 : j.pilih === k;
        var benar = multi ? q.kunci.indexOf(k) >= 0 : q.kunci === k;
        var c = "", note = "";
        if (kunci) {
          if (benar) { c = "ok"; if (multi && !dipilih) note = "terlewat"; }
          else if (dipilih) c = "bad";
        } else if (dipilih) c = "sel";
        h += '<button class="' + c + '" data-opsi="' + k + '"' + (kunci ? " disabled" : "") + '>' +
          '<span class="h">' + HURUF[k] + '</span><span class="t">' + o + '</span>' +
          (note ? '<span class="note">' + note + '</span>' : '') + '</button>';
      });
      h += '</div>';
    } else if (q.tipe === "kategori") {
      h += '<table class="kat"><tbody>';
      q.pernyataan.forEach(function (p, k) {
        var v = (j.pilih || [])[k];
        var rc = kunci ? (v === q.kunci[k] ? "ok" : "bad") : "";
        h += '<tr class="' + rc + '"><td class="no">' + (k + 1) + '</td><td>' + p + '</td><td class="pilih"><span class="seg">' +
          '<button class="' + (v === true ? "sel" : "") + '" data-kat="' + k + '" data-v="1"' + (kunci ? " disabled" : "") + '>Benar</button>' +
          '<button class="' + (v === false ? "sel" : "") + '" data-kat="' + k + '" data-v="0"' + (kunci ? " disabled" : "") + '>Salah</button></span>' +
          (kunci ? '<span class="kunci">Kunci: ' + (q.kunci[k] ? "Benar" : "Salah") + '</span>' : '') +
          '</td></tr>';
      });
      h += '</tbody></table>';
    }

    if (j.hint) h += '<div class="hint-box"><span class="eyebrow">' + IKON.lampu + 'Petunjuk</span>' + q.hint + '</div>';

    if (kunci) {
      h += '<div class="feedback ' + (j.benar ? "ok" : "bad") + '"><div class="kepala">' +
        (j.benar ? IKON.cek : IKON.silang) +
        '<span class="judul">' + (j.benar ? "Benar" : "Belum tepat") + '</span>' +
        (j.benar ? "" : '<span class="kunci-teks">Kunci: <b>' + teksKunci(q) + '</b></span>') +
        '</div><div class="pembahasan"><span class="eyebrow">Pembahasan</span>' + q.pembahasan + '</div></div>';
    }

    h += '<div class="aksi">';
    h += '<button class="btn ikon" data-act="prev" aria-label="Soal sebelumnya"' + (i === 0 ? " disabled" : "") + '>' + IKON.kiri + '</button>';
    if (!j.hint && !kunci) h += '<button class="btn ghost lbl-wajib" data-act="hint">' + IKON.lampu + '<span class="lbl">Petunjuk</span></button>';
    if (kunci) h += '<button class="btn lbl-wajib" data-act="ulang">' + IKON.ulang + '<span class="lbl">Coba lagi</span></button>';
    h += '<span class="spacer"></span>';
    if (!kunci) h += '<button class="btn primary" data-act="cek"' + (sudahLengkap(q, j) ? "" : " disabled") + '>Cek Jawaban</button>';
    if (i < daftar.length - 1) {
      h += kunci
        ? '<button class="btn primary lbl-wajib" data-act="next"><span class="lbl">Berikutnya</span>' + IKON.kanan + '</button>'
        : '<button class="btn ikon" data-act="next" aria-label="Soal berikutnya">' + IKON.kanan + '</button>';
    } else {
      h += '<button class="btn' + (kunci ? " primary lbl-wajib" : "") + '" data-act="ringkasan">' + IKON.grafik + '<span class="lbl">Ringkasan</span></button>';
    }
    h += '</div></article>';

    el.isi.innerHTML = h;
  }

  function renderRingkasan() {
    var perBab = {}, urutBab = [], n = 0, b = 0, salah = [], belum = 0;
    daftar.forEach(function (q, i) {
      if (!perBab[q.bab]) { perBab[q.bab] = { n: 0, b: 0, total: 0 }; urutBab.push(q.bab); }
      var r = perBab[q.bab], j = st.jawab[q.id];
      r.total++;
      if (j && j.cek) {
        r.n++; n++;
        if (j.benar) { r.b++; b++; } else salah.push(i);
      } else belum++;
    });
    var pct = n ? Math.round(b / n * 100) : 0;
    var h = '<article class="ringkasan"><span class="eyebrow">Ringkasan</span><h2>' + mapel.nama + '</h2>';
    h += '<div class="skor"><p class="skor-besar">' + b + '<small> / ' + n + '</small></p><span class="stat">benar dari soal yang sudah dicek (' + pct + '%)' +
      (belum ? ' · ' + belum + ' soal belum dikerjakan' : '') + '</span></div>';
    h += '<table class="ring-table"><thead><tr><th>Bab</th><th>Benar</th><th>Capaian</th></tr></thead><tbody>';
    urutBab.forEach(function (k) {
      var r = perBab[k], p = r.n ? Math.round(r.b / r.n * 100) : 0;
      h += '<tr><td>' + k + '</td><td class="angka">' + r.b + '/' + r.n + ' <span class="stat">dari ' + r.total + '</span></td>' +
        '<td class="batang"><div class="bar"><span style="width:' + p + '%"></span></div></td></tr>';
    });
    h += '</tbody></table>';
    if (salah.length) {
      h += '<span class="eyebrow">Masih salah — ketuk untuk membuka</span><div class="daftar-salah">';
      salah.forEach(function (i) { h += '<button class="btn" data-go="' + i + '">' + (i + 1) + '</button>'; });
      h += '</div>';
    }
    h += '<div class="aksi">';
    if (salah.length) h += '<button class="btn primary lbl-wajib" data-act="ulang-salah">' + IKON.ulang + '<span class="lbl">Ulangi yang salah</span></button>';
    h += '<button class="btn" data-act="reset">Mulai dari awal</button></div></article>';
    el.isi.innerHTML = h;
  }

  // ---------- Interaksi ----------
  function pergi(idx) {
    st.idx = idx === "ringkasan" ? "ringkasan" : Number(idx);
    simpan();
    render();
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t || t.disabled) return;

    if (t.dataset.go !== undefined) return pergi(t.dataset.go);

    var q = typeof st.idx === "number" ? daftar[st.idx] : null;
    var j = q ? jw(q) : null;

    if (t.dataset.opsi !== undefined && q && !j.cek) {
      var k = Number(t.dataset.opsi);
      if (q.tipe === "pg") j.pilih = k;
      else {
        var arr = Array.isArray(j.pilih) ? j.pilih : [];
        var pos = arr.indexOf(k);
        if (pos >= 0) arr.splice(pos, 1); else arr.push(k);
        j.pilih = arr;
      }
      simpan(); return renderTetap();
    }
    if (t.dataset.kat !== undefined && q && !j.cek) {
      var a = Array.isArray(j.pilih) ? j.pilih : [];
      a[Number(t.dataset.kat)] = t.dataset.v === "1";
      j.pilih = a;
      simpan(); return renderTetap();
    }

    switch (t.dataset.act) {
      case "prev": return pergi(st.idx - 1);
      case "next": return pergi(st.idx + 1);
      case "ringkasan": return pergi("ringkasan");
      case "hint": j.hint = true; simpan(); return renderTetap();
      case "cek":
        if (!sudahLengkap(q, j)) return;
        j.cek = true; j.benar = nilai(q, j); simpan(); return renderTetap();
      case "ulang":
        j.cek = false; j.benar = false; j.pilih = null; simpan(); return renderTetap();
      case "ulang-salah":
        var pertama = null;
        daftar.forEach(function (x, i) {
          var y = st.jawab[x.id];
          if (y && y.cek && !y.benar) {
            st.jawab[x.id] = { pilih: null, cek: false, benar: false, hint: y.hint };
            if (pertama === null) pertama = i;
          }
        });
        return pergi(pertama === null ? 0 : pertama);
      case "reset":
        if (!confirm("Hapus semua jawaban " + mapel.nama + " dan mulai dari awal?")) return;
        st = { idx: 0, jawab: {}, total: daftar.length };
        return pergi(0);
    }
  });

  // Render ulang tanpa melompat ke atas (saat memilih opsi / membuka petunjuk di soal yang sama).
  function renderTetap() {
    var y = window.scrollY;
    render();
    window.scrollTo(0, y);
  }

  // Pintasan keyboard: A–H pilih opsi, Enter cek/lanjut, panah kiri/kanan pindah soal.
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || !st) return;
    var klik = function (sel) {
      var b = el.isi.querySelector(sel);
      if (!b || b.disabled) return false;
      e.preventDefault(); b.click(); return true;
    };
    var huruf = HURUF.indexOf(e.key.toUpperCase());
    if (e.key.length === 1 && huruf >= 0) return klik('[data-opsi="' + huruf + '"]');
    if (e.key === "ArrowLeft") return klik('[data-act="prev"]');
    if (e.key === "ArrowRight") return klik('[data-act="next"]');
    if (e.key === "Enter" && !(e.target.closest && e.target.closest("button"))) {
      return klik('[data-act="cek"]') || klik('[data-act="next"]') || klik('[data-act="ringkasan"]');
    }
  });
})();
