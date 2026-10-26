(function () {
  "use strict";

  var LEVEL = { 1: "Level 1 · Pemahaman", 2: "Level 2 · Aplikasi", 3: "Level 3 · Penalaran" };
  var TIPE = {
    pg: "Pilihan ganda — pilih satu jawaban yang paling tepat.",
    mcma: "Pilihan ganda kompleks — pilih SEMUA jawaban yang benar (bisa lebih dari satu).",
    kategori: "Pilihan ganda kompleks — tentukan Benar atau Salah untuk setiap pernyataan."
  };
  var HURUF = "ABCDEFGH";

  var el = {
    judul: document.getElementById("judul"),
    stat: document.getElementById("stat"),
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
    el.isi.innerHTML = '<div class="card"><p>' + pesan + '</p><a href="index.html">Kembali ke daftar mapel</a></div>';
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
    el.judul.textContent = mapel.ico + " " + mapel.nama;
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
    if (st.idx === "ringkasan") return renderRingkasan();
    renderSoal(daftar[st.idx], st.idx);
    window.scrollTo(0, 0);
  }

  function renderStat() {
    var n = 0, b = 0;
    daftar.forEach(function (q) {
      var j = st.jawab[q.id];
      if (j && j.cek) { n++; if (j.benar) b++; }
    });
    el.stat.textContent = "Dikerjakan " + n + "/" + daftar.length + " · Benar " + b;
  }

  function renderNav() {
    var h = "";
    daftar.forEach(function (q, i) {
      var j = st.jawab[q.id], c = "";
      if (j && j.cek) c = j.benar ? "ok" : "bad";
      if (i === st.idx) c += " cur";
      h += '<button class="' + c + '" data-go="' + i + '" title="Soal ' + (i + 1) + ' · ' + q.bab + '">' + (i + 1) + '</button>';
    });
    h += '<button data-go="ringkasan" title="Ringkasan" style="width:auto;padding:0 12px"' +
      (st.idx === "ringkasan" ? ' class="cur"' : '') + '>📊 Ringkasan</button>';
    el.nav.innerHTML = h;
  }

  function renderSoal(q, i) {
    var j = jw(q);
    var kunci = j.cek;
    var h = '<article class="card">';
    h += '<div class="meta"><span class="chip">Soal ' + (i + 1) + ' / ' + daftar.length + '</span>' +
      '<span class="chip">' + q.bab + '</span>' +
      '<span class="chip lv' + q.level + '">' + LEVEL[q.level] + '</span></div>';
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
          '<span class="h">' + HURUF[k] + '</span><span>' + o + '</span>' +
          (note ? '<span class="note">' + note + '</span>' : '') + '</button>';
      });
      h += '</div>';
    } else if (q.tipe === "kategori") {
      h += '<table class="kat"><thead><tr><th>Pernyataan</th><th>Jawaban</th></tr></thead><tbody>';
      q.pernyataan.forEach(function (p, k) {
        var v = (j.pilih || [])[k];
        var rc = kunci ? (v === q.kunci[k] ? "ok" : "bad") : "";
        h += '<tr class="' + rc + '"><td>' + (k + 1) + '. ' + p + '</td><td class="pilih">' +
          '<button class="' + (v === true ? "sel" : "") + '" data-kat="' + k + '" data-v="1"' + (kunci ? " disabled" : "") + '>Benar</button>' +
          '<button class="' + (v === false ? "sel" : "") + '" data-kat="' + k + '" data-v="0"' + (kunci ? " disabled" : "") + '>Salah</button>' +
          (kunci ? '<span class="kunci">Kunci: ' + (q.kunci[k] ? "Benar" : "Salah") + '</span>' : '') +
          '</td></tr>';
      });
      h += '</tbody></table>';
    }

    if (j.hint) h += '<div class="hint-box"><b>💡 Petunjuk:</b> ' + q.hint + '</div>';

    if (kunci) {
      h += '<div class="feedback ' + (j.benar ? "ok" : "bad") + '">' +
        '<div class="judul">' + (j.benar ? "✅ Benar!" : "❌ Belum tepat") + '</div>' +
        (j.benar ? "" : '<div>Jawaban yang benar: <b>' + teksKunci(q) + '</b></div>') +
        '<div class="pembahasan"><b>Pembahasan:</b>' + q.pembahasan + '</div></div>';
    }

    h += '<div class="aksi">';
    h += '<button class="btn" data-act="prev"' + (i === 0 ? " disabled" : "") + '>← Sebelumnya</button>';
    if (!j.hint && !kunci) h += '<button class="btn hint" data-act="hint">💡 Lihat Petunjuk (1x)</button>';
    h += '<span class="spacer"></span>';
    if (!kunci) h += '<button class="btn primary" data-act="cek"' + (sudahLengkap(q, j) ? "" : " disabled") + '>Cek Jawaban</button>';
    else h += '<button class="btn" data-act="ulang">↺ Coba lagi</button>';
    if (i < daftar.length - 1) h += '<button class="btn' + (kunci ? " primary" : "") + '" data-act="next">Berikutnya →</button>';
    else h += '<button class="btn' + (kunci ? " primary" : "") + '" data-act="ringkasan">Lihat Ringkasan</button>';
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
    var h = '<article class="card"><h2 style="margin-top:0">Ringkasan ' + mapel.nama + '</h2>';
    h += '<p class="skor-besar">' + b + ' / ' + n + '</p><p class="stat" style="margin-top:0">benar dari soal yang sudah dicek (' + pct + '%) · ' + belum + ' soal belum dikerjakan</p>';
    h += '<table class="ring-table"><thead><tr><th>Bab</th><th>Benar</th><th>Capaian</th></tr></thead><tbody>';
    urutBab.forEach(function (k) {
      var r = perBab[k], p = r.n ? Math.round(r.b / r.n * 100) : 0;
      h += '<tr><td>' + k + '</td><td>' + r.b + '/' + r.n + ' <span class="stat">(dari ' + r.total + ')</span></td>' +
        '<td><div class="bar"><span style="width:' + p + '%"></span></div></td></tr>';
    });
    h += '</tbody></table>';
    if (salah.length) {
      h += '<p><b>Soal yang masih salah</b> (klik untuk mengulang):</p><div class="daftar-salah">';
      salah.forEach(function (i) { h += '<button class="btn" data-go="' + i + '">' + (i + 1) + '</button>'; });
      h += '</div>';
    }
    h += '<div class="aksi">';
    if (salah.length) h += '<button class="btn primary" data-act="ulang-salah">↺ Ulangi yang salah</button>';
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
      simpan(); return render();
    }
    if (t.dataset.kat !== undefined && q && !j.cek) {
      var a = Array.isArray(j.pilih) ? j.pilih : [];
      a[Number(t.dataset.kat)] = t.dataset.v === "1";
      j.pilih = a;
      simpan(); return render();
    }

    switch (t.dataset.act) {
      case "prev": return pergi(st.idx - 1);
      case "next": return pergi(st.idx + 1);
      case "ringkasan": return pergi("ringkasan");
      case "hint": j.hint = true; simpan(); return render();
      case "cek":
        if (!sudahLengkap(q, j)) return;
        j.cek = true; j.benar = nilai(q, j); simpan(); return render();
      case "ulang":
        j.cek = false; j.benar = false; j.pilih = null; simpan(); return render();
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
        st = { idx: 0, jawab: {} };
        return pergi(0);
    }
  });
})();
