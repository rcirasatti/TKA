// Membuat ikon aplikasi (PNG) tanpa pustaka tambahan. Jalankan: node tools/buat-ikon.js
// Hasil: ikon/ikon-192.png, ikon/ikon-512.png, ikon/apple-touch-icon.png (180).
"use strict";

var fs = require("fs");
var path = require("path");
var zlib = require("zlib");

var LATAR = [0x1f, 0x4f, 0x40];   // --accent
var GORES = [0xf6, 0xf4, 0xef];   // --bg
// Tanda centang dalam koordinat 0–1, berada di tengah 60% agar aman untuk ikon "maskable".
var GARIS = [[0.30, 0.52], [0.44, 0.66], [0.71, 0.37]];
var TEBAL = 0.075;

function jarakKeRuas(px, py, a, b) {
  var dx = b[0] - a[0], dy = b[1] - a[1];
  var t = Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / (dx * dx + dy * dy)));
  var x = a[0] + t * dx - px, y = a[1] + t * dy - py;
  return Math.sqrt(x * x + y * y);
}

function gambar(n) {
  var SS = 4, baris = [];
  for (var y = 0; y < n; y++) {
    var buf = Buffer.alloc(1 + n * 3);
    for (var x = 0; x < n; x++) {
      var kena = 0;
      for (var sy = 0; sy < SS; sy++) for (var sx = 0; sx < SS; sx++) {
        var px = (x + (sx + 0.5) / SS) / n, py = (y + (sy + 0.5) / SS) / n;
        for (var i = 0; i < GARIS.length - 1; i++) {
          if (jarakKeRuas(px, py, GARIS[i], GARIS[i + 1]) <= TEBAL / 2) { kena++; break; }
        }
      }
      var a = kena / (SS * SS);
      for (var c = 0; c < 3; c++) buf[1 + x * 3 + c] = Math.round(LATAR[c] * (1 - a) + GORES[c] * a);
    }
    baris.push(buf);
  }
  return png(n, Buffer.concat(baris));
}

var CRC = (function () {
  var t = [];
  for (var n = 0; n < 256; n++) {
    var c = n;
    for (var k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(b) {
  var c = 0xffffffff;
  for (var i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function potongan(jenis, data) {
  var len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  var isi = Buffer.concat([Buffer.from(jenis), data]);
  var crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(isi));
  return Buffer.concat([len, isi, crc]);
}
function png(n, mentah) {
  var ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(n, 0); ihdr.writeUInt32BE(n, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8 bit, RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    potongan("IHDR", ihdr),
    potongan("IDAT", zlib.deflateSync(mentah, { level: 9 })),
    potongan("IEND", Buffer.alloc(0))
  ]);
}

var keluar = path.join(__dirname, "..", "ikon");
if (!fs.existsSync(keluar)) fs.mkdirSync(keluar);
[["ikon-192.png", 192], ["ikon-512.png", 512], ["apple-touch-icon.png", 180]].forEach(function (f) {
  fs.writeFileSync(path.join(keluar, f[0]), gambar(f[1]));
  console.log("ikon/" + f[0]);
});
