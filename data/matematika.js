// Bank soal Matematika — urutan mengikuti kerangka asesmen TKA SMA (Pusmendik):
// Bilangan → Aljabar → Geometri & Pengukuran → Trigonometri → Data & Peluang, dari Level 1 ke Level 3.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL.matematika = { soal: [

  // ===================== BILANGAN =====================
  {
    id: "mtk-01", bab: "Bilangan Real", level: 1, tipe: "pg",
    soal: "Hasil dari √50 + √18 − √8 adalah …",
    opsi: ["4√2", "5√2", "6√2", "8√2", "10√2"],
    kunci: 2,
    hint: "Ubah setiap bentuk akar menjadi (bilangan) × √2 dengan mencari faktor kuadrat sempurna: 50 = 25 × 2, dan seterusnya.",
    pembahasan: "<p>√50 = √(25×2) = 5√2<br>√18 = √(9×2) = 3√2<br>√8 = √(4×2) = 2√2</p><p>5√2 + 3√2 − 2√2 = <b>6√2</b>.</p>"
  },
  {
    id: "mtk-02", bab: "Bilangan Real", level: 1, tipe: "pg",
    soal: "Nilai dari 8<sup>2/3</sup> + 27<sup>1/3</sup> − 16<sup>1/2</sup> adalah …",
    opsi: ["1", "2", "3", "5", "7"],
    kunci: 2,
    hint: "a<sup>m/n</sup> = (akar pangkat n dari a)<sup>m</sup>. Contoh: 8<sup>2/3</sup> = (∛8)<sup>2</sup>.",
    pembahasan: "<p>8<sup>2/3</sup> = (∛8)<sup>2</sup> = 2<sup>2</sup> = 4<br>27<sup>1/3</sup> = ∛27 = 3<br>16<sup>1/2</sup> = √16 = 4</p><p>4 + 3 − 4 = <b>3</b>.</p>"
  },
  {
    id: "mtk-03", bab: "Bilangan Real", level: 2, tipe: "mcma",
    soal: "Bilangan berikut yang termasuk bilangan irasional adalah … (pilih semua yang benar)",
    opsi: ["√2", "√16", "π", "0,25", "∛7"],
    kunci: [0, 2, 4],
    hint: "Bilangan rasional dapat ditulis sebagai pecahan a/b (a, b bulat, b ≠ 0). Coba sederhanakan dulu setiap bilangan.",
    pembahasan: "<p>• √2 = 1,41421… (tak berulang, tak berhenti) → irasional ✔<br>• √16 = 4 → rasional<br>• π = 3,14159… → irasional ✔ (22/7 hanya pendekatan)<br>• 0,25 = 1/4 → rasional<br>• ∛7 = 1,9129… (7 bukan bilangan pangkat tiga) → irasional ✔</p>"
  },
  {
    id: "mtk-04", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Bentuk rasional dari 6 / (3 − √3) adalah …",
    opsi: ["3 − √3", "3 + √3", "6 + 2√3", "2 + √3", "(3 + √3)/2"],
    kunci: 1,
    hint: "Kalikan pembilang dan penyebut dengan sekawan penyebut, yaitu (3 + √3). Ingat (a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup>.",
    pembahasan: "<p>6/(3 − √3) × (3 + √3)/(3 + √3) = 6(3 + √3) / (9 − 3) = 6(3 + √3)/6 = <b>3 + √3</b>.</p>"
  },

  // ===================== ALJABAR =====================
  {
    id: "mtk-05", bab: "Persamaan Linear", level: 1, tipe: "pg",
    soal: "Rina membeli 2 buku dan 3 pensil seharga Rp19.000. Dina membeli 3 buku dan 2 pensil yang sama seharga Rp21.000. Harga 1 buku dan 2 pensil adalah …",
    opsi: ["Rp8.000", "Rp10.000", "Rp11.000", "Rp13.000", "Rp16.000"],
    kunci: 2,
    hint: "Misalkan harga buku = b dan pensil = p. Jumlahkan kedua persamaan, lalu kurangkan, untuk mendapat b + p dan b − p.",
    pembahasan: "<p>2b + 3p = 19.000 dan 3b + 2p = 21.000.</p><p>Dijumlah: 5b + 5p = 40.000 → b + p = 8.000.<br>Dikurang: b − p = 2.000.<br>Maka b = 5.000 dan p = 3.000.</p><p>1 buku + 2 pensil = 5.000 + 6.000 = <b>Rp11.000</b>.</p>"
  },
  {
    id: "mtk-06", bab: "Persamaan Linear", level: 2, tipe: "pg",
    stimulus: "<p>Diketahui sistem persamaan:</p><p>x + y + z = 6<br>x − y + z = 2<br>2x + y − z = 1</p>",
    soal: "Nilai x + 2y + 3z adalah …",
    opsi: ["10", "12", "14", "16", "18"],
    kunci: 2,
    hint: "Kurangkan persamaan pertama dengan persamaan kedua — x dan z langsung hilang.",
    pembahasan: "<p>(1) − (2): 2y = 4 → y = 2.</p><p>Substitusi y = 2: dari (1) x + z = 4; dari (3) 2x − z = −1.<br>Dijumlah: 3x = 3 → x = 1, maka z = 3.</p><p>x + 2y + 3z = 1 + 4 + 9 = <b>14</b>.</p>"
  },
  {
    id: "mtk-07", bab: "Persamaan Linear", level: 3, tipe: "pg",
    soal: "Berapakah nilai x?<br>(1) 2x + y = 10<br>(2) x − y = 2<br><br>Tentukan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    opsi: [
      "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup",
      "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup",
      "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup",
      "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup",
      "Pernyataan (1) dan (2) tidak cukup"
    ],
    kunci: 2,
    hint: "Satu persamaan dengan dua variabel punya tak hingga banyak penyelesaian. Cek dulu masing-masing pernyataan sendiri-sendiri, baru gabungkan.",
    pembahasan: "<p>(1) saja: 2x + y = 10 → x bisa 1, 2, 3, … tergantung y → <b>tidak cukup</b>.<br>(2) saja: x − y = 2 → juga tidak cukup.</p><p>Gabungan: dijumlah → 3x = 12 → x = 4 (tunggal) → <b>cukup</b>.</p><p>Jadi jawabannya: dua pernyataan bersama-sama cukup, satu saja tidak cukup.</p>"
  },
  {
    id: "mtk-08", bab: "Program Linear", level: 3, tipe: "pg",
    stimulus: "<p>Sebuah toko kue membuat dua jenis roti:</p><table><tr><th></th><th>Tepung</th><th>Mentega</th><th>Keuntungan</th></tr><tr><td>Roti A</td><td>200 g</td><td>20 g</td><td>Rp5.000</td></tr><tr><td>Roti B</td><td>100 g</td><td>60 g</td><td>Rp6.000</td></tr><tr><td>Persediaan</td><td>4 kg</td><td>900 g</td><td></td></tr></table>",
    soal: "Keuntungan maksimum yang dapat diperoleh toko tersebut adalah …",
    opsi: ["Rp90.000", "Rp100.000", "Rp120.000", "Rp135.000", "Rp160.000"],
    kunci: 3,
    hint: "Buat model: tepung 200x + 100y ≤ 4.000 dan mentega 20x + 60y ≤ 900. Sederhanakan, cari titik potong kedua garis, lalu uji semua titik pojok.",
    pembahasan: "<p>Misalkan x = roti A, y = roti B.</p><p>Tepung: 200x + 100y ≤ 4.000 → 2x + y ≤ 40<br>Mentega: 20x + 60y ≤ 900 → x + 3y ≤ 45<br>x ≥ 0, y ≥ 0</p><p>Titik potong: dari x = 45 − 3y → 2(45 − 3y) + y = 40 → 90 − 5y = 40 → y = 10, x = 15.</p><p>Uji titik pojok, f = 5.000x + 6.000y:<br>(20, 0) → 100.000<br>(0, 15) → 90.000<br>(15, 10) → 75.000 + 60.000 = <b>135.000</b></p><p>Keuntungan maksimum <b>Rp135.000</b> (15 roti A dan 10 roti B).</p>"
  },
  {
    id: "mtk-09", bab: "Fungsi", level: 1, tipe: "pg",
    soal: "Diketahui f(x) = 2x<sup>2</sup> − 3x + 1. Nilai f(−2) adalah …",
    opsi: ["−1", "3", "11", "15", "17"],
    kunci: 3,
    hint: "Ganti setiap x dengan (−2). Hati-hati: (−2)<sup>2</sup> = 4 dan −3 × (−2) = +6.",
    pembahasan: "<p>f(−2) = 2(−2)<sup>2</sup> − 3(−2) + 1 = 2(4) + 6 + 1 = <b>15</b>.</p>"
  },
  {
    id: "mtk-10", bab: "Fungsi", level: 2, tipe: "pg",
    soal: "Diketahui f(x) = 2x + 3 dan g(x) = x<sup>2</sup> − 1. Fungsi komposisi (g ∘ f)(x) adalah …",
    opsi: ["2x<sup>2</sup> + 1", "4x<sup>2</sup> + 12x + 8", "4x<sup>2</sup> + 12x + 10", "2x<sup>2</sup> + 3x − 1", "4x<sup>2</sup> + 8"],
    kunci: 1,
    hint: "(g ∘ f)(x) = g(f(x)): masukkan f(x) ke dalam g. Jangan tertukar dengan (f ∘ g)(x).",
    pembahasan: "<p>(g ∘ f)(x) = g(2x + 3) = (2x + 3)<sup>2</sup> − 1 = 4x<sup>2</sup> + 12x + 9 − 1 = <b>4x<sup>2</sup> + 12x + 8</b>.</p><p>Jebakan: 2x<sup>2</sup> + 1 adalah (f ∘ g)(x) = 2(x<sup>2</sup> − 1) + 3.</p>"
  },
  {
    id: "mtk-11", bab: "Fungsi", level: 3, tipe: "kategori",
    stimulus: "<p>Diketahui fungsi f(x) = (2x + 1) / (x − 3).</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Domain f adalah semua bilangan real kecuali x = 3.",
      "Nilai f(4) = 9.",
      "Invers fungsinya adalah f<sup>−1</sup>(x) = (3x + 1) / (x − 2).",
      "Range (daerah hasil) f adalah semua bilangan real."
    ],
    kunci: [true, true, true, false],
    hint: "Penyebut tidak boleh nol. Untuk invers, tulis y = (2x + 1)/(x − 3), lalu nyatakan x dalam y. Range f sama dengan domain f<sup>−1</sup>.",
    pembahasan: "<p>1. x − 3 ≠ 0 → x ≠ 3 ✔.</p><p>2. f(4) = (8 + 1)/(4 − 3) = 9 ✔.</p><p>3. y(x − 3) = 2x + 1 → xy − 2x = 3y + 1 → x(y − 2) = 3y + 1 → x = (3y + 1)/(y − 2). Jadi f<sup>−1</sup>(x) = (3x + 1)/(x − 2) ✔.</p><p>4. Domain f<sup>−1</sup> adalah x ≠ 2, sehingga range f adalah semua real <b>kecuali 2</b> → Salah.</p>"
  },
  {
    id: "mtk-12", bab: "Barisan dan Deret", level: 1, tipe: "pg",
    soal: "Suku ke-20 dari barisan aritmetika 3, 7, 11, 15, … adalah …",
    opsi: ["75", "79", "80", "83", "87"],
    kunci: 1,
    hint: "U<sub>n</sub> = a + (n − 1)b, dengan a suku pertama dan b beda.",
    pembahasan: "<p>a = 3, b = 7 − 3 = 4.</p><p>U<sub>20</sub> = 3 + 19 × 4 = 3 + 76 = <b>79</b>.</p>"
  },
  {
    id: "mtk-13", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Sebuah gedung pertunjukan memiliki 15 baris kursi. Baris paling depan terdiri atas 20 kursi, dan setiap baris di belakangnya bertambah 2 kursi. Jumlah seluruh kursi di gedung tersebut adalah …",
    opsi: ["300", "480", "510", "540", "600"],
    kunci: 2,
    hint: "Ini deret aritmetika dengan a = 20, b = 2, n = 15. Gunakan S<sub>n</sub> = n/2 × (2a + (n − 1)b).",
    pembahasan: "<p>S<sub>15</sub> = 15/2 × (2·20 + 14·2) = 15/2 × 68 = <b>510 kursi</b>.</p><p>Cek: baris terakhir = 20 + 14·2 = 48 kursi; S = 15 × (20 + 48)/2 = 510 ✔.</p>"
  },
  {
    id: "mtk-14", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Pada suatu barisan geometri diketahui suku ke-3 adalah 12 dan suku ke-6 adalah 96. Suku ke-8 barisan tersebut adalah …",
    opsi: ["192", "256", "384", "768", "96"],
    kunci: 2,
    hint: "U<sub>n</sub> = a·r<sup>n−1</sup>. Bagi U<sub>6</sub> dengan U<sub>3</sub> untuk mendapat r<sup>3</sup>.",
    pembahasan: "<p>U<sub>6</sub>/U<sub>3</sub> = ar<sup>5</sup>/ar<sup>2</sup> = r<sup>3</sup> = 96/12 = 8 → r = 2.</p><p>ar<sup>2</sup> = 12 → a = 3.</p><p>U<sub>8</sub> = 3 × 2<sup>7</sup> = 3 × 128 = <b>384</b>.</p>"
  },
  {
    id: "mtk-15", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Seorang pasien diberi obat 500 mg. Setiap jam, kadar obat dalam darahnya berkurang 20% dari kadar jam sebelumnya. Kadar obat setelah 2 jam adalah …",
    opsi: ["300 mg", "320 mg", "340 mg", "360 mg", "400 mg"],
    kunci: 1,
    hint: "Berkurang 20% berarti tersisa 80% = 0,8 dari jumlah sebelumnya. Ini peluruhan (barisan geometri), bukan pengurangan tetap.",
    pembahasan: "<p>Setelah 1 jam: 500 × 0,8 = 400 mg.<br>Setelah 2 jam: 400 × 0,8 = <b>320 mg</b>.</p><p>Rumus: M<sub>t</sub> = M<sub>0</sub>(1 − p)<sup>t</sup> = 500 × 0,8<sup>2</sup> = 320 mg.</p><p>Jebakan: 300 mg diperoleh jika 20% dihitung dari 500 setiap jam (dianggap tetap 100 mg).</p>"
  },
  {
    id: "mtk-16", bab: "Barisan dan Deret", level: 3, tipe: "kategori",
    stimulus: "<p>Andi menabung Rp10.000.000 di bank X dengan <b>bunga tunggal</b> 10% per tahun. Budi menabung Rp10.000.000 di bank Y dengan <b>bunga majemuk</b> 10% per tahun. Keduanya tidak mengambil atau menambah tabungan selama 3 tahun.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Tabungan Andi setelah 3 tahun menjadi Rp13.000.000.",
      "Tabungan Budi setelah 3 tahun menjadi Rp13.310.000.",
      "Selisih tabungan Budi dan Andi setelah 3 tahun adalah Rp310.000.",
      "Bunga yang diterima Budi pada tahun ke-2 sama dengan bunga pada tahun ke-1."
    ],
    kunci: [true, true, true, false],
    hint: "Bunga tunggal selalu dihitung dari modal awal. Bunga majemuk dihitung dari saldo terakhir (bunga ikut berbunga): M<sub>n</sub> = M<sub>0</sub>(1 + i)<sup>n</sup>.",
    pembahasan: "<p>1. Andi: bunga tiap tahun 1.000.000 → 10.000.000 + 3 × 1.000.000 = 13.000.000 ✔.</p><p>2. Budi: 10.000.000 × 1,1<sup>3</sup> = 10.000.000 × 1,331 = 13.310.000 ✔.</p><p>3. Selisih = 13.310.000 − 13.000.000 = 310.000 ✔.</p><p>4. Bunga Budi tahun ke-1 = 1.000.000, tahun ke-2 = 10% × 11.000.000 = 1.100.000 → tidak sama → Salah.</p>"
  },

  // ===================== GEOMETRI DAN PENGUKURAN =====================
  {
    id: "mtk-17", bab: "Geometri", level: 1, tipe: "pg",
    soal: "Sebuah tangga sepanjang 13 m disandarkan pada tembok vertikal. Jarak kaki tangga ke tembok adalah 5 m. Tinggi ujung atas tangga dari lantai adalah …",
    opsi: ["8 m", "10 m", "12 m", "13 m", "18 m"],
    kunci: 2,
    hint: "Tangga, tembok, dan lantai membentuk segitiga siku-siku. Tangga adalah sisi miringnya.",
    pembahasan: "<p>Teorema Pythagoras: t<sup>2</sup> = 13<sup>2</sup> − 5<sup>2</sup> = 169 − 25 = 144 → t = <b>12 m</b>.</p><p>(5, 12, 13 adalah tripel Pythagoras yang sering muncul.)</p>"
  },
  {
    id: "mtk-18", bab: "Geometri", level: 2, tipe: "pg",
    soal: "Dua garis sejajar dipotong oleh sebuah garis lain. Sepasang sudut dalam sepihak yang terbentuk besarnya (3x + 10)° dan (2x + 20)°. Nilai x adalah …",
    opsi: ["20", "25", "30", "34", "40"],
    kunci: 2,
    hint: "Sudut dalam sepihak pada dua garis sejajar saling berpelurus (jumlahnya 180°). Jangan tertukar dengan sudut dalam berseberangan yang besarnya sama.",
    pembahasan: "<p>(3x + 10) + (2x + 20) = 180 → 5x + 30 = 180 → x = <b>30</b>.</p><p>Besar sudutnya 100° dan 80°. Jika keliru menganggap kedua sudut sama besar: 3x + 10 = 2x + 20 → x = 10 (tidak ada di opsi).</p>"
  },
  {
    id: "mtk-19", bab: "Geometri", level: 2, tipe: "pg",
    soal: "Pada sore hari, sebuah tiang setinggi 2 m memiliki bayangan sepanjang 1,5 m. Pada saat yang sama, bayangan sebuah pohon panjangnya 6 m. Tinggi pohon tersebut adalah …",
    opsi: ["4,5 m", "6 m", "7,5 m", "8 m", "9 m"],
    kunci: 3,
    hint: "Tiang dengan bayangannya dan pohon dengan bayangannya membentuk dua segitiga yang sebangun.",
    pembahasan: "<p>Kesebangunan: tinggi tiang / bayangan tiang = tinggi pohon / bayangan pohon.</p><p>2 / 1,5 = t / 6 → t = 6 × 2 / 1,5 = <b>8 m</b>.</p>"
  },
  {
    id: "mtk-20", bab: "Transformasi Geometri", level: 2, tipe: "mcma",
    soal: "Diketahui titik A(3, −2). Pernyataan berikut yang benar tentang bayangan titik A adalah … (pilih semua yang benar)",
    opsi: [
      "Refleksi terhadap sumbu y menghasilkan (−3, −2)",
      "Refleksi terhadap sumbu x menghasilkan (−3, 2)",
      "Refleksi terhadap garis y = x menghasilkan (−2, 3)",
      "Refleksi terhadap titik asal O(0, 0) menghasilkan (−3, 2)",
      "Translasi oleh (1, 2) menghasilkan (4, 4)"
    ],
    kunci: [0, 2, 3],
    hint: "Sumbu y: (x, y) → (−x, y). Sumbu x: (x, y) → (x, −y). Garis y = x: (x, y) → (y, x). Titik O: (x, y) → (−x, −y). Translasi: tambahkan komponennya.",
    pembahasan: "<p>• Sumbu y: (3, −2) → (−3, −2) ✔<br>• Sumbu x: (3, −2) → (3, 2), bukan (−3, 2) ✘<br>• Garis y = x: (3, −2) → (−2, 3) ✔<br>• Titik O: (3, −2) → (−3, 2) ✔<br>• Translasi (1, 2): (3 + 1, −2 + 2) = (4, 0), bukan (4, 4) ✘</p>"
  },
  {
    id: "mtk-21", bab: "Transformasi Geometri", level: 2, tipe: "pg",
    soal: "Titik P(2, 5) ditranslasikan oleh (−3, 1), kemudian dirotasikan 90° berlawanan arah jarum jam dengan pusat O(0, 0). Bayangan akhir titik P adalah …",
    opsi: ["(−6, −1)", "(6, 1)", "(1, −6)", "(−1, 6)", "(6, −1)"],
    kunci: 0,
    hint: "Kerjakan berurutan. Rotasi 90° berlawanan arah jarum jam: (x, y) → (−y, x).",
    pembahasan: "<p>Translasi: (2 − 3, 5 + 1) = (−1, 6).</p><p>Rotasi 90° berlawanan jarum jam: (x, y) → (−y, x) → (−6, −1).</p><p>Bayangan akhir: <b>(−6, −1)</b>. Opsi (−1, 6) adalah hasil translasi saja.</p>"
  },
  {
    id: "mtk-22", bab: "Pengukuran", level: 1, tipe: "pg",
    soal: "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah … (π = 22/7)",
    opsi: ["440 cm<sup>3</sup>", "770 cm<sup>3</sup>", "1.540 cm<sup>3</sup>", "3.080 cm<sup>3</sup>", "4.620 cm<sup>3</sup>"],
    kunci: 2,
    hint: "Volume tabung = luas alas × tinggi = πr<sup>2</sup>t.",
    pembahasan: "<p>V = 22/7 × 7 × 7 × 10 = 22 × 7 × 10 = <b>1.540 cm<sup>3</sup></b>.</p>"
  },
  {
    id: "mtk-23", bab: "Pengukuran", level: 3, tipe: "pg",
    soal: "Sebuah kolam berbentuk balok berukuran panjang 8 m, lebar 5 m, dan kedalaman 1,5 m. Kolam akan diisi air hingga 80% penuh menggunakan selang dengan debit 20 liter per menit. Waktu yang dibutuhkan adalah …",
    opsi: ["30 jam", "40 jam", "48 jam", "50 jam", "60 jam"],
    kunci: 1,
    hint: "Hitung volume air dalam m<sup>3</sup>, ubah ke liter (1 m<sup>3</sup> = 1.000 L), bagi dengan debit, lalu ubah menit ke jam.",
    pembahasan: "<p>Volume kolam = 8 × 5 × 1,5 = 60 m<sup>3</sup>.<br>Volume air = 80% × 60 = 48 m<sup>3</sup> = 48.000 L.</p><p>Waktu = 48.000 / 20 = 2.400 menit = 2.400 / 60 = <b>40 jam</b>.</p><p>Jebakan: lupa 80% → 50 jam.</p>"
  },
  {
    id: "mtk-24", bab: "Pengukuran", level: 3, tipe: "kategori",
    stimulus: "<p>Diketahui kubus ABCD.EFGH dengan panjang rusuk 6 cm. (ABCD adalah alas, EFGH adalah tutup, dengan E tepat di atas A, F di atas B, G di atas C, dan H di atas D.)</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Panjang diagonal bidang AC adalah 6√2 cm.",
      "Panjang diagonal ruang AG adalah 6√3 cm.",
      "Jarak titik E ke bidang ABCD adalah 6 cm.",
      "Jarak titik A ke garis CG adalah 6 cm."
    ],
    kunci: [true, true, true, false],
    hint: "Diagonal bidang kubus = s√2, diagonal ruang = s√3. Jarak titik ke garis adalah panjang garis tegak lurus dari titik itu ke garis. Garis CG tegak lurus bidang alas.",
    pembahasan: "<p>1. AC = √(6<sup>2</sup> + 6<sup>2</sup>) = 6√2 ✔.</p><p>2. AG = √(AC<sup>2</sup> + CG<sup>2</sup>) = √(72 + 36) = √108 = 6√3 ✔.</p><p>3. E tepat di atas A, jadi jaraknya = rusuk AE = 6 cm ✔.</p><p>4. CG tegak lurus bidang ABCD, sehingga garis dari A yang tegak lurus CG adalah AC. Jarak A ke CG = AC = <b>6√2 cm</b>, bukan 6 cm → Salah.</p>"
  },

  // ===================== TRIGONOMETRI =====================
  {
    id: "mtk-25", bab: "Trigonometri", level: 1, tipe: "pg",
    soal: "Segitiga ABC siku-siku di B dengan AB = 4 cm, BC = 3 cm, dan AC = 5 cm. Nilai cos A adalah …",
    opsi: ["3/5", "4/5", "3/4", "4/3", "5/4"],
    kunci: 1,
    hint: "cos = sisi samping sudut / sisi miring. Sisi yang mengapit sudut A (selain sisi miring) adalah AB.",
    pembahasan: "<p>Untuk sudut A: sisi samping = AB = 4, sisi depan = BC = 3, sisi miring = AC = 5.</p><p>cos A = samping/miring = <b>4/5</b>. (sin A = 3/5, tan A = 3/4.)</p>"
  },
  {
    id: "mtk-26", bab: "Trigonometri", level: 2, tipe: "kategori",
    stimulus: "<p>Diketahui α adalah sudut lancip dan sin α = 5/13.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "cos α = 12/13",
      "tan α = 5/12",
      "sec α = 13/5",
      "cosec α = 13/5"
    ],
    kunci: [true, true, false, true],
    hint: "Gambar segitiga siku-siku dengan sisi depan 5 dan sisi miring 13, cari sisi samping dengan Pythagoras. Ingat: sec = 1/cos dan cosec = 1/sin.",
    pembahasan: "<p>Sisi depan = 5, miring = 13 → samping = √(169 − 25) = 12.</p><p>1. cos α = 12/13 ✔<br>2. tan α = 5/12 ✔<br>3. sec α = 1/cos α = <b>13/12</b>, bukan 13/5 → Salah<br>4. cosec α = 1/sin α = 13/5 ✔</p>"
  },
  {
    id: "mtk-27", bab: "Trigonometri", level: 2, tipe: "pg",
    soal: "Sebuah layang-layang diterbangkan dengan benang sepanjang 100 m yang terbentang lurus. Benang membentuk sudut 30° terhadap permukaan tanah. Jika ujung benang dipegang tepat di permukaan tanah, tinggi layang-layang adalah …",
    opsi: ["25 m", "50 m", "50√2 m", "50√3 m", "100 m"],
    kunci: 1,
    hint: "Benang adalah sisi miring, tinggi layang-layang adalah sisi di depan sudut 30°. Perbandingan apa yang menghubungkan sisi depan dan sisi miring?",
    pembahasan: "<p>sin 30° = tinggi / benang → tinggi = 100 × sin 30° = 100 × ½ = <b>50 m</b>.</p><p>Jebakan: 50√3 m diperoleh jika memakai cos 30° (itu jarak mendatar, bukan tinggi).</p>"
  },

  // ===================== DATA DAN PELUANG =====================
  {
    id: "mtk-28", bab: "Data", level: 1, tipe: "pg",
    soal: "Diagram lingkaran menunjukkan pilihan ekstrakurikuler 480 siswa sebuah sekolah. Juring untuk ekstrakurikuler futsal memiliki sudut pusat 75°. Banyak siswa yang memilih futsal adalah …",
    opsi: ["75 siswa", "80 siswa", "100 siswa", "120 siswa", "150 siswa"],
    kunci: 2,
    hint: "Satu lingkaran penuh = 360° = seluruh siswa. Bagian futsal = (sudut futsal / 360°) × jumlah siswa.",
    pembahasan: "<p>Futsal = 75/360 × 480 = 75 × 4/3 = <b>100 siswa</b>.</p>"
  },
  {
    id: "mtk-29", bab: "Data", level: 2, tipe: "mcma",
    stimulus: "<p>Nilai ulangan 6 siswa: <b>7, 8, 6, 9, 10, 8</b>.</p>",
    soal: "Pernyataan yang benar tentang data tersebut adalah … (pilih semua yang benar)",
    opsi: [
      "Rata-ratanya 8",
      "Mediannya 8,5",
      "Modusnya 8",
      "Jangkauannya 4",
      "Ada 3 siswa yang nilainya di atas rata-rata"
    ],
    kunci: [0, 2, 3],
    hint: "Urutkan data dulu dari yang terkecil. Median data genap = rata-rata dua data tengah.",
    pembahasan: "<p>Data urut: 6, 7, 8, 8, 9, 10.</p><p>• Rata-rata = 48/6 = 8 ✔<br>• Median = (8 + 8)/2 = 8, bukan 8,5 ✘<br>• Modus = 8 (muncul 2 kali) ✔<br>• Jangkauan = 10 − 6 = 4 ✔<br>• Nilai di atas 8 hanya 9 dan 10 → 2 siswa ✘</p>"
  },
  {
    id: "mtk-30", bab: "Data", level: 2, tipe: "kategori",
    stimulus: "<p>Data berat badan (kg) enam ekor kucing: <b>4, 6, 6, 7, 8, 11</b>.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Jangkauan data adalah 7.",
      "Rata-rata data adalah 7.",
      "Median data adalah 6,5.",
      "Modus data adalah 7."
    ],
    kunci: [true, true, true, false],
    hint: "Jangkauan = data terbesar − data terkecil. Modus = data yang paling sering muncul.",
    pembahasan: "<p>1. Jangkauan = 11 − 4 = 7 ✔.<br>2. Rata-rata = (4 + 6 + 6 + 7 + 8 + 11)/6 = 42/6 = 7 ✔.<br>3. Median = (6 + 7)/2 = 6,5 ✔.<br>4. Modus = <b>6</b> (muncul 2 kali), bukan 7 → Salah.</p>"
  },
  {
    id: "mtk-31", bab: "Data", level: 2, tipe: "pg",
    soal: "Rata-rata nilai 30 siswa kelas A adalah 70, sedangkan rata-rata nilai 20 siswa kelas B adalah 80. Rata-rata nilai gabungan kedua kelas adalah …",
    opsi: ["72", "74", "75", "76", "78"],
    kunci: 1,
    hint: "Jangan langsung merata-ratakan 70 dan 80. Hitung jumlah nilai tiap kelas (rata-rata × banyak siswa), lalu bagi dengan total siswa.",
    pembahasan: "<p>Jumlah nilai A = 30 × 70 = 2.100. Jumlah nilai B = 20 × 80 = 1.600.</p><p>Rata-rata gabungan = (2.100 + 1.600)/50 = 3.700/50 = <b>74</b>.</p><p>Jebakan: (70 + 80)/2 = 75 — salah karena jumlah siswa kedua kelas berbeda.</p>"
  },
  {
    id: "mtk-32", bab: "Data", level: 3, tipe: "pg",
    stimulus: "<table><tr><th>Nilai</th><th>Frekuensi</th></tr><tr><td>41–50</td><td>4</td></tr><tr><td>51–60</td><td>6</td></tr><tr><td>61–70</td><td>10</td></tr><tr><td>71–80</td><td>8</td></tr><tr><td>81–90</td><td>2</td></tr></table>",
    soal: "Median dari data pada tabel tersebut adalah …",
    opsi: ["63,5", "65,0", "65,5", "66,5", "67,2"],
    kunci: 2,
    hint: "n = 30, jadi median ada di data ke-15. Cari kelas yang memuat data ke-15 menggunakan frekuensi kumulatif, lalu pakai Me = L + ((n/2 − F)/f) × p.",
    pembahasan: "<p>n = 30 → letak median = data ke-15.</p><p>Frekuensi kumulatif: 4, 10, 20, … → data ke-15 ada di kelas <b>61–70</b>.</p><p>L = 60,5 (tepi bawah), F = 10 (kumulatif sebelum kelas median), f = 10, p = 10.</p><p>Me = 60,5 + ((15 − 10)/10) × 10 = 60,5 + 5 = <b>65,5</b>.</p>"
  },
  {
    id: "mtk-33", bab: "Peluang", level: 1, tipe: "pg",
    soal: "Sebuah dadu bersisi enam dilempar sekali. Peluang muncul mata dadu bilangan prima adalah …",
    opsi: ["1/6", "1/3", "1/2", "2/3", "5/6"],
    kunci: 2,
    hint: "Daftar mata dadu 1–6 yang merupakan bilangan prima. Ingat: 1 bukan bilangan prima.",
    pembahasan: "<p>Mata dadu prima: 2, 3, 5 → n(A) = 3, n(S) = 6.</p><p>P = 3/6 = <b>1/2</b>.</p>"
  },
  {
    id: "mtk-34", bab: "Peluang", level: 2, tipe: "pg",
    soal: "Dua buah dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu 8 adalah …",
    opsi: ["1/9", "5/36", "1/6", "7/36", "2/9"],
    kunci: 1,
    hint: "Ruang sampel dua dadu ada 6 × 6 = 36. Daftar pasangan (dadu 1, dadu 2) yang jumlahnya 8, termasuk urutan yang dibalik.",
    pembahasan: "<p>Pasangan berjumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 kejadian.</p><p>P = <b>5/36</b>.</p><p>Jebakan: jika (2,6) dan (6,2) dianggap sama, hasilnya 3/36 — padahal kedua dadu berbeda.</p>"
  },
  {
    id: "mtk-35", bab: "Peluang", level: 3, tipe: "pg",
    soal: "Sebuah kotak berisi 5 bola merah dan 3 bola biru. Dua bola diambil sekaligus secara acak. Peluang terambilnya kedua bola berwarna merah adalah …",
    opsi: ["5/16", "5/14", "25/64", "1/2", "3/8"],
    kunci: 1,
    hint: "Diambil sekaligus berarti tanpa pengembalian. Gunakan kombinasi: C(5, 2) / C(8, 2), atau kalikan peluang bertahap 5/8 × 4/7.",
    pembahasan: "<p>Cara kombinasi: C(5, 2) = 10, C(8, 2) = 28 → P = 10/28 = <b>5/14</b>.</p><p>Cara bertahap: 5/8 × 4/7 = 20/56 = 5/14 ✔.</p><p>Jebakan: 25/64 = 5/8 × 5/8 (seolah-olah bola dikembalikan).</p>"
  }
]};
