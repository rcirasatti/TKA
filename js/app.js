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
    grafik: svg('<path d="M5 20V10M12 20V4M19 20v-7"/>'),
    tanda: svg('<path d="M7 4h10v16l-5-4-5 4z"/>')
  };

  var el = {
    judul: document.getElementById("judul"),
    sub: document.getElementById("sub"),
    stat: document.getElementById("stat"),
    prog: document.getElementById("prog"),
    nav: document.getElementById("nav"),
    isi: document.getElementById("isi"),
    kembali: document.getElementById("kembali")
  };

  var TKA = window.TKA;
  var param = new URLSearchParams(location.search);
  var semuaMapel = (window.DAFTAR_MAPEL || []).filter(function (m) { return m.siap; });

  // set     = kumpulan soal yang sedang dikerjakan (paket, bab, ulas, atau tanda)
  // daftar  = soal-soal di set itu
  // posisi  = { idx, … } posisi set; untuk mode paket sama dengan data paket di localStorage
  var set, daftar, posisi, kunciPosisi = null;
  var toko = {}; // id paket → { idx, jawab, total } — jawaban selalu disimpan per paket asal

  function cariMapel(id) { return semuaMapel.filter(function (m) { return m.id === id; })[0]; }
  function grupDasar(id) { return id.replace(/-hots$/, ""); }
  function labelPaket(id) { return /-hots$/.test(id) ? "Paket HOTS" : "Reguler"; }
  function namaMapel(id) { var m = cariMapel(id); return m ? m.nama : id; }

  function gagal(pesan) {
    el.judul.textContent = "Ups";
    el.isi.innerHTML = '<div class="kosong"><p>' + pesan + '</p><a href="index.html">Kembali ke daftar mapel</a></div>';
  }
  function kosong(judul, sub, pesan) {
    el.judul.textContent = judul;
    el.sub.textContent = sub;
    document.title = judul + " · Latihan TKA";
    el.isi.innerHTML = '<div class="kosong"><p>' + pesan + '</p><a href="index.html">Kembali ke beranda</a></div>';
  }

  // ---------- Penyimpanan ----------
  function tokoPaket(id) {
    if (!toko[id]) {
      var x = TKA.bacaJson("tka-" + id);
      toko[id] = x && x.jawab ? x : { idx: 0, jawab: {} };
    }
    return toko[id];
  }
  function simpan() {
    Object.keys(toko).forEach(function (id) { TKA.tulisJson("tka-" + id, toko[id]); });
    if (kunciPosisi) TKA.tulisJson(kunciPosisi, posisi);
  }

  // Mode ulas memakai lembar jawaban sendiri agar progres paket asal tidak terhapus.
  function petaJawab(q) { return set.jawabSendiri ? posisi.jawab : tokoPaket(q._paket).jawab; }
  function jawaban(q) { return petaJawab(q)[q.id]; }
  function jw(q) {
    var p = petaJawab(q);
    if (!p[q.id]) p[q.id] = { pilih: null, cek: false, benar: false, hint: false };
    return p[q.id];
  }

  // ---------- Memuat bank soal ----------
  function muatPaket(ids, selesai) {
    var sisa = ids.length;
    if (!sisa) return selesai();
    ids.forEach(function (id) {
      if ((window.BANK_SOAL || {})[id]) { if (!--sisa) selesai(); return; }
      var s = document.createElement("script");
      s.src = "data/" + id + ".js";
      s.onload = s.onerror = function () { if (!--sisa) selesai(); };
      document.body.appendChild(s);
    });
  }
  function soalPaket(id) {
    var b = (window.BANK_SOAL || {})[id];
    if (!b || !b.soal) return [];
    tokoPaket(id).total = b.soal.length; // dipakai beranda untuk bar progres
    b.soal.forEach(function (q) { q._paket = id; });
    return b.soal;
  }
  function unik(arr) { return arr.filter(function (x, i) { return x && arr.indexOf(x) === i; }); }

  // ---------- Jenis set ----------
  if (param.get("set") === "ulas") siapUlas();
  else if (param.get("set") === "tanda") siapTanda();
  else if (param.has("bab")) siapBab(param.get("bab"), param.get("nama"));
  else siapPaket(param.get("mapel"));

  function siapPaket(id) {
    var m = cariMapel(id);
    if (!m) return gagal("Mata pelajaran tidak ditemukan.");
    muatPaket([m.id], function () {
      var d = soalPaket(m.id);
      if (!d.length) return gagal("Bank soal " + m.nama + " belum tersedia.");
      posisi = tokoPaket(m.id);
      try { localStorage.setItem("tka-terakhir", m.id); } catch (e) {}
      var bagian = m.nama.split(" · ");
      mulai({ daftar: d, judul: bagian[0], sub: bagian[1] || "Latihan reguler", nama: m.nama,
        kelompok: function (q) { return q.bab; }, judulKelompok: "Bab" });
    });
  }

  function siapBab(grup, nama) {
    var paket = semuaMapel.filter(function (m) { return grupDasar(m.id) === grup; });
    if (!paket.length) return gagal("Mata pelajaran tidak ditemukan.");
    var mapel = paket[0].nama.split(" · ")[0];
    var ids = paket.map(function (m) { return m.id; });
    if (nama) el.kembali.href = "quiz.html?bab=" + encodeURIComponent(grup);
    muatPaket(ids, function () {
      var semua = [];
      ids.forEach(function (id) { semua = semua.concat(soalPaket(id)); });
      if (!semua.length) return gagal("Bank soal " + mapel + " belum tersedia.");
      if (!nama) return renderPilihBab(mapel, grup, semua);

      // Dari level dasar ke penalaran; untuk level yang sama urutan asli bank soal dipertahankan.
      var d = semua.map(function (q, i) { return [q, i]; })
        .filter(function (x) { return x[0].bab === nama; })
        .sort(function (a, b) { return a[0].level - b[0].level || a[1] - b[1]; })
        .map(function (x) { return x[0]; });
      if (!d.length) return gagal("Bab “" + nama + "” tidak ditemukan.");
      kunciPosisi = "tka-set-bab-" + grup + "-" + nama;
      posisi = TKA.bacaJson(kunciPosisi) || { idx: 0 };
      mulai({ daftar: d, judul: nama, sub: mapel + " · Per bab", nama: mapel + " — " + nama,
        kelompok: function (q) { return labelPaket(q._paket); }, judulKelompok: "Paket",
        asal: function (q) { return labelPaket(q._paket); } });
    });
  }

  function siapUlas() {
    kunciPosisi = "tka-set-ulas";
    var ulas = TKA.ulas(semuaMapel);
    var lama = TKA.bacaJson(kunciPosisi);
    var baru = param.has("baru") || !lama || !Array.isArray(lama.soal);
    if (param.has("baru")) history.replaceState(null, "", "quiz.html?set=ulas");

    var pasangan = baru
      ? TKA.jatuhTempo(ulas).map(function (id) { return [id, ulas[id].p]; })
      : lama.soal;
    muatPaket(unik(pasangan.map(function (x) { return x[1]; })), function () {
      var ada = {};
      pasangan.forEach(function (x) { ada[x[0]] = true; });
      var d = [];
      semuaMapel.forEach(function (m) {
        if (pasangan.some(function (x) { return x[1] === m.id; })) {
          soalPaket(m.id).forEach(function (q) { if (ada[q.id]) d.push(q); });
        }
      });
      if (!d.length) {
        return kosong("Ulas soal salah", "Lintas mapel",
          "Tidak ada soal yang perlu diulas hari ini. Soal yang kamu jawab salah akan muncul di sini, lalu diulang lagi 1, 3, dan 7 hari kemudian sampai benar-benar dikuasai.");
      }
      posisi = baru ? { idx: 0, soal: d.map(function (q) { return [q.id, q._paket]; }), jawab: {} } : lama;
      if (!posisi.jawab) posisi.jawab = {};
      mulai({ daftar: d, judul: "Ulas soal salah", sub: "Lintas mapel", nama: "Ulas soal salah", jawabSendiri: true,
        kelompok: function (q) { return namaMapel(q._paket); }, judulKelompok: "Paket",
        asal: function (q) { return namaMapel(q._paket); } });
    });
  }

  function siapTanda() {
    kunciPosisi = "tka-set-tanda";
    var tanda = TKA.tanda();
    var ids = unik(Object.keys(tanda).map(function (k) { return tanda[k]; }));
    muatPaket(ids, function () {
      var d = [];
      semuaMapel.forEach(function (m) {
        if (ids.indexOf(m.id) >= 0) soalPaket(m.id).forEach(function (q) { if (tanda[q.id]) d.push(q); });
      });
      if (!d.length) {
        return kosong("Soal ditandai", "Lintas mapel",
          "Belum ada soal yang ditandai. Tekan tombol <b>Tandai</b> di atas soal untuk menyimpannya di sini.");
      }
      posisi = TKA.bacaJson(kunciPosisi) || { idx: 0 };
      mulai({ daftar: d, judul: "Soal ditandai", sub: "Lintas mapel", nama: "Soal ditandai",
        kelompok: function (q) { return namaMapel(q._paket); }, judulKelompok: "Paket",
        asal: function (q) { return namaMapel(q._paket); } });
    });
  }

  function mulai(cfg) {
    set = cfg;
    daftar = cfg.daftar;
    if (posisi.idx !== "ringkasan" && !(posisi.idx >= 0 && posisi.idx < daftar.length)) posisi.idx = 0;
    el.judul.textContent = cfg.judul;
    el.sub.textContent = cfg.sub;
    document.title = cfg.nama + " · Latihan TKA";
    simpan();
    render();
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
    if (posisi.idx === "ringkasan") renderRingkasan();
    else renderSoal(daftar[posisi.idx], posisi.idx);
    window.scrollTo(0, 0);
  }

  function renderStat() {
    var n = 0, b = 0;
    daftar.forEach(function (q) {
      var j = jawaban(q);
      if (j && j.cek) { n++; if (j.benar) b++; }
    });
    el.stat.textContent = n + "/" + daftar.length;
    el.stat.title = "Dikerjakan " + n + " dari " + daftar.length + " · Benar " + b;
    el.prog.style.width = (n / daftar.length * 100) + "%";
  }

  function renderNav() {
    var h = "", tanda = TKA.tanda();
    daftar.forEach(function (q, i) {
      var j = jawaban(q), c = "";
      if (j && j.cek) c = j.benar ? "ok" : "bad";
      if (i === posisi.idx) c += " cur";
      if (tanda[q.id]) c += " ditandai";
      h += '<button class="' + c + '" data-go="' + i + '" title="Soal ' + (i + 1) + ' · ' + q.bab + (tanda[q.id] ? ' · ditandai' : '') + '"' +
        (i === posisi.idx ? ' aria-current="step"' : '') + '>' + (i + 1) + '</button>';
    });
    h += '<button class="ke-ring' + (posisi.idx === "ringkasan" ? ' cur' : '') + '" data-go="ringkasan">' + IKON.grafik + 'Ringkasan</button>';
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
    var ditandai = !!TKA.tanda()[q.id];
    var h = '<article class="soal-wrap">';
    h += '<div class="meta"><span class="nomor">Soal ' + (i + 1) + ' <i>/ ' + daftar.length + '</i></span>' +
      (set.asal ? '<span class="sep"></span><span class="paket-asal">' + set.asal(q) + '</span>' : '') +
      '<span class="sep"></span><span>' + q.bab + '</span><span class="sep"></span>' +
      '<span class="lv lv' + q.level + '"><span class="pips"><i></i><i></i><i></i></span>' + LEVEL[q.level] + '</span>' +
      '<button class="tanda" data-act="tanda" aria-pressed="' + ditandai + '" title="' + (ditandai ? "Hapus tanda" : "Tandai soal ini untuk dibuka lagi nanti") + '">' +
      IKON.tanda + '<span class="lbl">' + (ditandai ? "Ditandai" : "Tandai") + '</span></button></div>';
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
        h += '<button class="' + c + '" data-opsi="' + k + '" aria-pressed="' + dipilih + '"' + (kunci ? " disabled" : "") + '>' +
          '<span class="h">' + HURUF[k] + '</span><span class="t">' + o + '</span>' +
          (note ? '<span class="note">' + note + '</span>' : '') + '</button>';
      });
      h += '</div>';
    } else if (q.tipe === "kategori") {
      h += '<table class="kat"><tbody>';
      q.pernyataan.forEach(function (p, k) {
        var v = (j.pilih || [])[k];
        var rc = kunci ? (v === q.kunci[k] ? "ok" : "bad") : "";
        h += '<tr class="' + rc + '"><td class="no">' + (k + 1) + '</td><td>' + p + '</td><td class="pilih"><span class="seg" role="group" aria-label="Pernyataan ' + (k + 1) + '">' +
          '<button class="' + (v === true ? "sel" : "") + '" data-kat="' + k + '" data-v="1" aria-pressed="' + (v === true) + '"' + (kunci ? " disabled" : "") + '>Benar</button>' +
          '<button class="' + (v === false ? "sel" : "") + '" data-kat="' + k + '" data-v="0" aria-pressed="' + (v === false) + '"' + (kunci ? " disabled" : "") + '>Salah</button></span>' +
          (kunci ? '<span class="kunci">Kunci: ' + (q.kunci[k] ? "Benar" : "Salah") + '</span>' : '') +
          '</td></tr>';
      });
      h += '</tbody></table>';
    }

    if (j.hint) h += '<div class="hint-box"><span class="eyebrow">' + IKON.lampu + 'Petunjuk</span>' + q.hint + '</div>';

    if (kunci) {
      h += '<div class="feedback ' + (j.benar ? "ok" : "bad") + '" role="status"><div class="kepala">' +
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
    var perKel = {}, urutKel = [], n = 0, b = 0, salah = [], belum = 0;
    daftar.forEach(function (q, i) {
      var k = set.kelompok(q);
      if (!perKel[k]) { perKel[k] = { n: 0, b: 0, total: 0 }; urutKel.push(k); }
      var r = perKel[k], j = jawaban(q);
      r.total++;
      if (j && j.cek) {
        r.n++; n++;
        if (j.benar) { r.b++; b++; } else salah.push(i);
      } else belum++;
    });
    var pct = n ? Math.round(b / n * 100) : 0;
    var h = '<article class="ringkasan"><span class="eyebrow">Ringkasan</span><h2>' + set.nama + '</h2>';
    h += '<div class="skor"><p class="skor-besar">' + b + '<small> / ' + n + '</small></p><span class="stat">benar dari soal yang sudah dicek (' + pct + '%)' +
      (belum ? ' · ' + belum + ' soal belum dikerjakan' : '') + '</span></div>';
    h += '<table class="ring-table"><thead><tr><th>' + set.judulKelompok + '</th><th>Benar</th><th>Capaian</th></tr></thead><tbody>';
    urutKel.forEach(function (k) {
      var r = perKel[k], p = r.n ? Math.round(r.b / r.n * 100) : 0;
      h += '<tr><td>' + k + '</td><td class="angka">' + r.b + '/' + r.n + ' <span class="stat">dari ' + r.total + '</span></td>' +
        '<td class="batang"><div class="bar"><span style="width:' + p + '%"></span></div></td></tr>';
    });
    h += '</tbody></table>';
    if (set.jawabSendiri) {
      h += '<p class="stat">Soal yang sudah benar akan muncul lagi 1, 3, lalu 7 hari kemudian untuk memastikan kamu benar-benar ingat.</p>';
    }
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

  function renderPilihBab(mapel, grup, semua) {
    el.judul.textContent = mapel;
    el.sub.textContent = "Latihan per bab";
    document.title = mapel + " per bab · Latihan TKA";
    var perBab = {}, urut = [];
    semua.forEach(function (q) {
      if (!perBab[q.bab]) { perBab[q.bab] = { total: 0, n: 0, b: 0, lv: [] }; urut.push(q.bab); }
      var r = perBab[q.bab], j = tokoPaket(q._paket).jawab[q.id];
      r.total++;
      if (r.lv.indexOf(q.level) < 0) r.lv.push(q.level);
      if (j && j.cek) { r.n++; if (j.benar) r.b++; }
    });
    function item(bab) {
      var r = perBab[bab];
      if (!r) return '<li class="kosong"><span class="nama">' + bab + '</span><span class="stat">Belum ada soal</span></li>';
      var lv = r.lv.sort();
      var levelTeks = lv.length > 1 ? "Level " + lv[0] + "–" + lv[lv.length - 1] : "Level " + lv[0];
      return '<li><a href="quiz.html?bab=' + encodeURIComponent(grup) + '&nama=' + encodeURIComponent(bab) + '">' +
        '<span class="nama">' + bab + '</span>' +
        '<span class="stat">' + r.total + ' soal · ' + levelTeks + (r.n ? ' · ' + r.b + ' benar dari ' + r.n : '') + '</span>' +
        '<span class="kanan">' + (r.n ? '<div class="garis"><span style="width:' + Math.round(r.n / r.total * 100) + '%"></span></div>' : '') + IKON.kanan + '</span></a></li>';
    }
    var kerangka = (window.KERANGKA_TKA || {})[grup];
    var h = '<section class="pilih-bab"><span class="eyebrow">Latihan per bab</span><h2>' + mapel + '</h2>' +
      '<p>' + (kerangka ? 'Disusun per elemen kerangka asesmen TKA (Pusmendik). ' : '') +
      'Soal Reguler dan HOTS digabung per bab, diurutkan dari level dasar ke penalaran. Jawabanmu tersimpan bersama paket aslinya.</p>';
    if (!kerangka) {
      h += '<ol class="daftar-bab">' + urut.map(item).join("") + '</ol>';
    } else {
      var resmi = {};
      kerangka.forEach(function (e) {
        e[1].forEach(function (bab) { resmi[bab] = true; });
        h += '<h3 class="elemen">' + e[0] + '</h3><ol class="daftar-bab">' + e[1].map(item).join("") + '</ol>';
      });
      var lain = urut.filter(function (bab) { return !resmi[bab]; });
      if (lain.length) {
        h += '<h3 class="elemen">Di luar kisi-kisi TKA</h3><p class="catatan-elemen">Pengayaan; materi ini tidak tercantum dalam kerangka asesmen TKA.</p>' +
          '<ol class="daftar-bab">' + lain.map(item).join("") + '</ol>';
      }
    }
    h += '</section>';
    el.isi.innerHTML = h;
    simpan(); // total soal per paket ikut tersimpan untuk beranda
  }

  // ---------- Interaksi ----------
  function pergi(idx) {
    posisi.idx = idx === "ringkasan" ? "ringkasan" : Number(idx);
    simpan();
    render();
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t || t.disabled || !daftar || !el.isi.contains(t) && !el.nav.contains(t)) return;

    if (t.dataset.go !== undefined) return pergi(t.dataset.go);

    var q = typeof posisi.idx === "number" ? daftar[posisi.idx] : null;
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
      case "prev": return pergi(posisi.idx - 1);
      case "next": return pergi(posisi.idx + 1);
      case "ringkasan": return pergi("ringkasan");
      case "tanda": TKA.aturTanda(q.id, q._paket); return renderTetap();
      case "hint": j.hint = true; simpan(); return renderTetap();
      case "cek":
        if (!sudahLengkap(q, j)) return;
        j.cek = true; j.benar = nilai(q, j);
        TKA.catatUlas(q.id, q._paket, j.benar);
        // Hasil ulasan juga dicatat di paket asal agar progres beranda ikut terbarui.
        if (set.jawabSendiri) tokoPaket(q._paket).jawab[q.id] = JSON.parse(JSON.stringify(j));
        simpan(); return renderTetap();
      case "ulang":
        j.cek = false; j.benar = false; j.pilih = null; simpan(); return renderTetap();
      case "ulang-salah":
        var pertama = null;
        daftar.forEach(function (x, i) {
          var y = jawaban(x);
          if (y && y.cek && !y.benar) {
            petaJawab(x)[x.id] = { pilih: null, cek: false, benar: false, hint: y.hint };
            if (pertama === null) pertama = i;
          }
        });
        return pergi(pertama === null ? 0 : pertama);
      case "reset":
        if (!confirm("Hapus semua jawaban " + set.nama + " dan mulai dari awal?")) return;
        daftar.forEach(function (x) { delete petaJawab(x)[x.id]; });
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
    if (e.ctrlKey || e.metaKey || e.altKey || !daftar) return;
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
