// Service worker: membuat web tetap bisa dipakai tanpa internet.
// Strategi: saat online selalu tanya server dulu (file yang tidak berubah dibalas 304 yang sangat kecil,
// jadi tetap hemat kuota dan selalu versi terbaru). Kalau offline atau sinyal terlalu lambat, pakai salinan di HP.
// Tidak perlu menaikkan nomor versi saat menambah soal; ubah CACHE hanya bila ingin membuang semua salinan lama.
"use strict";

var CACHE = "tka-v1";
var BATAS_TUNGGU = 4000; // ms; lebih dari ini dianggap sinyal lemah → pakai salinan

self.window = self;
importScripts("js/mapel.js");

var INTI = [
  "./", "index.html", "quiz.html", "manifest.json",
  "css/style.css", "js/umum.js", "js/mapel.js", "js/app.js",
  "ikon/ikon-192.png", "ikon/ikon-512.png", "ikon/apple-touch-icon.png"
].concat((self.DAFTAR_MAPEL || []).filter(function (m) { return m.siap; }).map(function (m) {
  return "data/" + m.id + ".js";
}));

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    // Satu file gagal tidak boleh menggagalkan semuanya.
    return Promise.all(INTI.map(function (u) {
      return fetch(new Request(u, { cache: "no-cache" })).then(function (r) {
        if (r.ok) return c.put(u, r);
      }).catch(function () {});
    }));
  }).then(function () { return self.skipWaiting(); }));});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  // Font Google: jarang berubah, ambil dari salinan dulu.
  if (url.origin !== location.origin) {
    if (!/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) return;
    e.respondWith(caches.match(req).then(function (ada) {
      return ada || fetch(req).then(function (r) {
        var salin = r.clone();
        caches.open(CACHE).then(function (c) { c.put(req, salin); });
        return r;
      });
    }));
    return;
  }

  // File sendiri: utamakan jaringan, simpan salinannya, jatuh ke salinan bila offline/lambat.
  var kunci = url.pathname; // abaikan ?mapel=… dan ?v=…
  // Minta ke alamat tanpa ?v=… agar server bisa membalas 304 bila file tidak berubah.
  var alamat = req.mode === "navigate" ? url.href : url.origin + url.pathname;
  var dariJaringan = fetch(alamat, { cache: "no-cache", credentials: "same-origin" }).then(function (r) {
    // Respons hasil redirect tidak boleh dipakai untuk navigasi; salin jadi respons biasa.
    if (r.redirected) r = new Response(r.body, { status: r.status, statusText: r.statusText, headers: r.headers });
    if (r.ok) {
      var salin = r.clone();
      caches.open(CACHE).then(function (c) { c.put(kunci, salin); });
    }
    return r;
  });
  var dariSalinan = function () {
    return caches.match(kunci).then(function (ada) {
      return ada || caches.match(url.pathname.replace(/\/$/, "/index.html"));
    });
  };

  e.respondWith(new Promise(function (selesai) {
    var sudah = false;
    var beres = function (r) { if (!sudah && r) { sudah = true; selesai(r); } };
    var t = setTimeout(function () { dariSalinan().then(beres); }, BATAS_TUNGGU);
    dariJaringan.then(function (r) { clearTimeout(t); beres(r); }).catch(function () {
      clearTimeout(t);
      dariSalinan().then(function (r) {
        if (r) beres(r);
        else if (!sudah) { sudah = true; selesai(new Response("Offline dan file belum tersimpan.", { status: 503 })); }
      });
    });
    // Jika salinan tidak ada saat timeout, tetap tunggu jaringan.
  }));
});
