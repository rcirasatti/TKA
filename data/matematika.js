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
    pembahasan: "<h4>Konsep</h4><p>Bentuk akar hanya bisa dijumlah/dikurang jika <b>angka di dalam akarnya sama</b> (seperti suku sejenis: 5a + 3a = 8a). Karena itu, setiap akar disederhanakan dulu: pecah angkanya menjadi <i>kuadrat sempurna × sisa</i>, lalu keluarkan kuadratnya: √(a²·b) = a√b.</p><h4>Langkah</h4><ol><li>√50 = √(25 × 2) = 5√2</li><li>√18 = √(9 × 2) = 3√2</li><li>√8 = √(4 × 2) = 2√2</li><li>Semuanya sekarang \"√2\", jadi tinggal hitung koefisiennya: 5 + 3 − 2 = 6 → <b>6√2</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 4√2 muncul jika √8 dianggap 4√2 (salah memecah: 8 = 4 × 2, yang keluar adalah √4 = 2, bukan 4).</li><li><b>B</b> 5√2 hanya √50, lupa menambah dan mengurangi suku lainnya.</li><li><b>D</b> 8√2 = 5√2 + 3√2, lupa mengurangi √8.</li><li><b>E</b> 10√2 = semua dijumlahkan (5 + 3 + 2), tanda minus terabaikan.</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan kuadrat sempurna 4, 9, 16, 25, 36, 49, 64, 81, 100. Cari faktor kuadrat <i>terbesar</i> supaya sekali sederhanakan langsung beres.</p>"
  },
  {
    id: "mtk-02", bab: "Bilangan Real", level: 1, tipe: "pg",
    soal: "Nilai dari 8<sup>2/3</sup> + 27<sup>1/3</sup> − 16<sup>1/2</sup> adalah …",
    opsi: ["1", "2", "3", "5", "7"],
    kunci: 2,
    hint: "a<sup>m/n</sup> = (akar pangkat n dari a)<sup>m</sup>. Contoh: 8<sup>2/3</sup> = (∛8)<sup>2</sup>.",
    pembahasan: "<h4>Konsep</h4><p>Pangkat pecahan artinya akar: a<sup>m/n</sup> = (ⁿ√a)<sup>m</sup>. Penyebut = jenis akar, pembilang = pangkat. Kerjakan akarnya dulu supaya angkanya kecil.</p><h4>Langkah</h4><ol><li>8<sup>2/3</sup> = (∛8)² = 2² = 4</li><li>27<sup>1/3</sup> = ∛27 = 3</li><li>16<sup>1/2</sup> = √16 = 4</li><li>4 + 3 − 4 = <b>3</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 1 muncul jika 8<sup>2/3</sup> dianggap 2 (pangkat 2 di pembilang terlupa).</li><li><b>B</b> 2 muncul jika ∛27 dihitung 2: 4 + 2 − 4 = 2.</li><li><b>D</b> 5 muncul jika 16<sup>1/2</sup> dianggap 2 (dikira ∜16).</li><li><b>E</b> 7 = 4 + 3, lupa mengurangi 16<sup>1/2</sup>.</li></ul><p class=\"tips\"><b>Tips:</b> ubah basis ke bentuk pangkat prima: 8 = 2³ → (2³)<sup>2/3</sup> = 2² = 4. Pangkatnya tinggal dikali.</p>"
  },
  {
    id: "mtk-03", bab: "Bilangan Real", level: 2, tipe: "mcma",
    soal: "Bilangan berikut yang termasuk bilangan irasional adalah … (pilih semua yang benar)",
    opsi: ["√2", "√16", "π", "0,25", "∛7"],
    kunci: [0, 2, 4],
    hint: "Bilangan rasional dapat ditulis sebagai pecahan a/b (a, b bulat, b ≠ 0). Coba sederhanakan dulu setiap bilangan.",
    pembahasan: "<h4>Konsep</h4><p><b>Rasional</b> = bisa ditulis sebagai pecahan a/b (bilangan bulat, b ≠ 0); desimalnya berhenti atau berulang. <b>Irasional</b> = tidak bisa ditulis sebagai pecahan; desimalnya tak berhenti dan tak berulang. Akar dari bilangan yang <i>bukan</i> kuadrat/kubik sempurna selalu irasional.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ √2 = 1,41421…, 2 bukan kuadrat sempurna → irasional.</li><li><b>B</b> ✘ √16 = 4 = 4/1 → rasional. Tanda akar tidak otomatis berarti irasional.</li><li><b>C</b> ✔ π = 3,14159… → irasional. 22/7 atau 3,14 hanyalah <i>pendekatan</i>, bukan nilai π sebenarnya.</li><li><b>D</b> ✘ 0,25 = 1/4 → rasional (desimal berhenti).</li><li><b>E</b> ✔ ∛7 = 1,9129…; 7 bukan bilangan kubik (1, 8, 27, …) → irasional.</li></ul><p class=\"tips\"><b>Tips:</b> cek dulu apakah angka di dalam akar adalah kuadrat (untuk √) atau kubik (untuk ∛) sempurna. Kalau ya → rasional; kalau tidak → irasional.</p>"
  },
  {
    id: "mtk-04", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Bentuk rasional dari 6 / (3 − √3) adalah …",
    opsi: ["3 − √3", "3 + √3", "6 + 2√3", "2 + √3", "(3 + √3)/2"],
    kunci: 1,
    hint: "Kalikan pembilang dan penyebut dengan sekawan penyebut, yaitu (3 + √3). Ingat (a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup>.",
    pembahasan: "<h4>Konsep</h4><p>Merasionalkan penyebut = menghilangkan akar dari penyebut. Untuk penyebut berbentuk (a − √b), kalikan atas-bawah dengan <b>sekawannya</b> (a + √b), karena (a − √b)(a + √b) = a² − b (akarnya hilang).</p><h4>Langkah</h4><ol><li>6/(3 − √3) × (3 + √3)/(3 + √3)</li><li>Penyebut: 3² − (√3)² = 9 − 3 = 6</li><li>Pembilang: 6(3 + √3)</li><li>6(3 + √3)/6 = <b>3 + √3</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 3 − √3 muncul jika salah tanda sekawan (dikali 3 − √3 lagi).</li><li><b>C</b> 6 + 2√3 = 2(3 + √3); penyebut dianggap 3 (salah menghitung 9 − 3 sebagai 3).</li><li><b>D</b> 2 + √3: cek dengan mengalikan balik, (2 + √3)(3 − √3) = 3 + √3 ≠ 6, jadi salah.</li><li><b>E</b> (3 + √3)/2 muncul jika penyebut dihitung 9 + 3 = 12 (tanda di (a−√b)(a+√b) salah).</li></ul><p class=\"tips\"><b>Tips:</b> sekawan = tanda di tengah dibalik. Penyebut hasil selalu a² − b, jadi bisa langsung dihitung tanpa mengalikan panjang.</p>"
  },

  // ===================== ALJABAR =====================
  {
    id: "mtk-05", bab: "Persamaan Linear", level: 1, tipe: "pg",
    soal: "Rina membeli 2 buku dan 3 pensil seharga Rp19.000. Dina membeli 3 buku dan 2 pensil yang sama seharga Rp21.000. Harga 1 buku dan 2 pensil adalah …",
    opsi: ["Rp8.000", "Rp10.000", "Rp11.000", "Rp13.000", "Rp16.000"],
    kunci: 2,
    hint: "Misalkan harga buku = b dan pensil = p. Jumlahkan kedua persamaan, lalu kurangkan, untuk mendapat b + p dan b − p.",
    pembahasan: "<h4>Konsep</h4><p>Soal cerita dua barang → sistem persamaan linear dua variabel (SPLDV). Jika koefisiennya \"bersilang\" (2 &amp; 3 lalu 3 &amp; 2), trik cepatnya: <b>jumlahkan</b> dan <b>kurangkan</b> kedua persamaan.</p><h4>Langkah</h4><ol><li>Misalkan b = harga buku, p = harga pensil: 2b + 3p = 19.000 dan 3b + 2p = 21.000.</li><li>Dijumlah: 5b + 5p = 40.000 → b + p = 8.000.</li><li>Dikurang (kedua − pertama): b − p = 2.000.</li><li>Dari dua hasil itu: b = 5.000, p = 3.000.</li><li>Yang ditanya: 1 buku + 2 pensil = 5.000 + 2 × 3.000 = <b>Rp11.000</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Rp8.000 = harga 1 buku + 1 pensil, bukan 1 buku + 2 pensil.</li><li><b>B</b> Rp10.000 = 2 buku (2 × 5.000) atau salah pasangan.</li><li><b>D</b> Rp13.000 = 2 buku + 1 pensil (pertanyaannya terbalik).</li><li><b>E</b> Rp16.000 = 2 × (b + p), menggandakan keduanya.</li></ul><p class=\"tips\"><b>Tips:</b> setelah dapat b dan p, baca ulang <i>apa yang ditanya</i>. Pengecoh soal SPLDV hampir selalu berupa kombinasi lain dari b dan p.</p>"
  },
  {
    id: "mtk-06", bab: "Persamaan Linear", level: 2, tipe: "pg",
    stimulus: "<p>Diketahui sistem persamaan:</p><p>x + y + z = 6<br>x − y + z = 2<br>2x + y − z = 1</p>",
    soal: "Nilai x + 2y + 3z adalah …",
    opsi: ["10", "12", "14", "16", "18"],
    kunci: 2,
    hint: "Kurangkan persamaan pertama dengan persamaan kedua — x dan z langsung hilang.",
    pembahasan: "<h4>Konsep</h4><p>Sistem tiga variabel diselesaikan dengan <b>eliminasi</b>: pilih dua persamaan yang bila dijumlah/dikurang langsung menghilangkan variabel, sampai tersisa satu variabel.</p><h4>Langkah</h4><ol><li>(1) − (2): (x + y + z) − (x − y + z) = 6 − 2 → 2y = 4 → <b>y = 2</b>.</li><li>Substitusi y = 2 ke (1): x + z = 4. Ke (3): 2x + 2 − z = 1 → 2x − z = −1.</li><li>Jumlahkan: 3x = 3 → <b>x = 1</b>, sehingga <b>z = 3</b>.</li><li>Cek ke (3): 2(1) + 2 − 3 = 1 ✔.</li><li>x + 2y + 3z = 1 + 4 + 9 = <b>14</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 10, <b>B</b> 12, <b>D</b> 16, <b>E</b> 18 muncul dari salah satu nilai x, y, z yang keliru (misalnya z = 2 atau x = 3). Selalu cek jawaban ke ketiga persamaan.</li></ul><p class=\"tips\"><b>Tips:</b> cari dulu dua persamaan yang hanya berbeda tanda di satu variabel. Di sini (1) dan (2) hanya beda di y, jadi y langsung ketemu.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Soal <b>kecukupan data</b>: kamu tidak perlu menghitung nilai akhirnya, cukup tentukan apakah informasinya <i>cukup untuk mendapatkan satu nilai pasti</i>. Satu persamaan dengan dua variabel tidak pernah cukup, karena solusinya tak hingga banyaknya.</p><h4>Langkah</h4><ol><li>(1) saja: 2x + y = 10 → x = 1, y = 8; x = 2, y = 6; … banyak kemungkinan → <b>tidak cukup</b>.</li><li>(2) saja: x − y = 2 → x = 3, y = 1; x = 5, y = 3; … → <b>tidak cukup</b>.</li><li>Gabungan: dijumlah → 3x = 12 → x = 4 (tunggal) → <b>cukup</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>/<b>B</b> masing-masing persamaan masih punya dua variabel, jadi x tidak tunggal.</li><li><b>D</b> sama alasannya: tidak ada satu pun yang cukup sendirian.</li><li><b>E</b> salah karena gabungan keduanya justru menghasilkan x = 4 dengan pasti.</li></ul><p class=\"tips\"><b>Tips:</b> urutan cek baku: (1) saja → (2) saja → gabungan. Jumlah persamaan yang <i>berbeda</i> harus ≥ jumlah variabel yang terlibat.</p>"
  },
  {
    id: "mtk-08", bab: "Program Linear", level: 3, tipe: "pg",
    stimulus: "<p>Sebuah toko kue membuat dua jenis roti:</p><table><tr><th></th><th>Tepung</th><th>Mentega</th><th>Keuntungan</th></tr><tr><td>Roti A</td><td>200 g</td><td>20 g</td><td>Rp5.000</td></tr><tr><td>Roti B</td><td>100 g</td><td>60 g</td><td>Rp6.000</td></tr><tr><td>Persediaan</td><td>4 kg</td><td>900 g</td><td></td></tr></table>",
    soal: "Keuntungan maksimum yang dapat diperoleh toko tersebut adalah …",
    opsi: ["Rp90.000", "Rp100.000", "Rp120.000", "Rp135.000", "Rp160.000"],
    kunci: 3,
    hint: "Buat model: tepung 200x + 100y ≤ 4.000 dan mentega 20x + 60y ≤ 900. Sederhanakan, cari titik potong kedua garis, lalu uji semua titik pojok.",
    pembahasan: "<h4>Konsep</h4><p>Program linear: (1) buat model kendala dari tabel, (2) cari titik-titik pojok daerah yang memenuhi, (3) masukkan ke fungsi tujuan. Nilai maksimum selalu ada di <b>salah satu titik pojok</b>.</p><h4>Langkah</h4><ol><li>x = roti A, y = roti B. Satuan disamakan dulu: 4 kg = 4.000 g.</li><li>Tepung: 200x + 100y ≤ 4.000 → <b>2x + y ≤ 40</b>.</li><li>Mentega: 20x + 60y ≤ 900 → <b>x + 3y ≤ 45</b>. Ditambah x ≥ 0, y ≥ 0.</li><li>Titik pojok: (20, 0) dari kendala tepung; (0, 15) dari kendala mentega; titik potong: x = 45 − 3y → 2(45 − 3y) + y = 40 → y = 10, x = 15 → (15, 10).</li><li>f = 5.000x + 6.000y: (20,0) → 100.000; (0,15) → 90.000; (15,10) → 75.000 + 60.000 = <b>135.000</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Rp90.000 = titik (0, 15), hanya roti B.</li><li><b>B</b> Rp100.000 = titik (20, 0), hanya roti A.</li><li><b>C</b> Rp120.000 tidak berasal dari titik pojok mana pun.</li><li><b>E</b> Rp160.000 muncul jika memakai titik (0, 40) atau (45, 0) yang melanggar kendala lain.</li></ul><p class=\"tips\"><b>Tips:</b> titik potong kedua garis hampir selalu menjadi jawaban soal maksimum. Tapi tetap uji semua titik pojok, karena kadang yang maksimum justru titik di sumbu.</p>"
  },
  {
    id: "mtk-09", bab: "Fungsi", level: 1, tipe: "pg",
    soal: "Diketahui f(x) = 2x<sup>2</sup> − 3x + 1. Nilai f(−2) adalah …",
    opsi: ["−1", "3", "11", "15", "17"],
    kunci: 3,
    hint: "Ganti setiap x dengan (−2). Hati-hati: (−2)<sup>2</sup> = 4 dan −3 × (−2) = +6.",
    pembahasan: "<h4>Konsep</h4><p>f(−2) artinya setiap x diganti −2. Yang sering salah adalah <b>tanda</b>: bungkus −2 dengan kurung supaya kuadrat dan perkaliannya benar.</p><h4>Langkah</h4><ol><li>f(−2) = 2(−2)² − 3(−2) + 1</li><li>(−2)² = 4 → 2 × 4 = 8</li><li>−3 × (−2) = +6</li><li>8 + 6 + 1 = <b>15</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> −1 muncul jika (−2)² dianggap −4: 2(−4) + 6 + 1 = −1.</li><li><b>B</b> 3 muncul jika −3(−2) dianggap −6: 8 − 6 + 1 = 3.</li><li><b>C</b> 11 muncul jika 2(−2)² dihitung 4 (lupa dikali 2): 4 + 6 + 1 = 11.</li><li><b>E</b> 17 tidak berasal dari langkah yang benar. Cek ulang penjumlahan akhir: 8 + 6 + 1 = 15.</li></ul><p class=\"tips\"><b>Tips:</b> (−a)² selalu positif, sedangkan −a² = −(a²) negatif. Selalu tulis kurungnya saat substitusi bilangan negatif.</p>"
  },
  {
    id: "mtk-10", bab: "Fungsi", level: 2, tipe: "pg",
    soal: "Diketahui f(x) = 2x + 3 dan g(x) = x<sup>2</sup> − 1. Fungsi komposisi (g ∘ f)(x) adalah …",
    opsi: ["2x<sup>2</sup> + 1", "4x<sup>2</sup> + 12x + 8", "4x<sup>2</sup> + 12x + 10", "2x<sup>2</sup> + 3x − 1", "4x<sup>2</sup> + 8"],
    kunci: 1,
    hint: "(g ∘ f)(x) = g(f(x)): masukkan f(x) ke dalam g. Jangan tertukar dengan (f ∘ g)(x).",
    pembahasan: "<h4>Konsep</h4><p>(g ∘ f)(x) = g(f(x)): <b>f dikerjakan dulu</b>, hasilnya dimasukkan ke g. Bacanya dari kanan ke kiri.</p><h4>Langkah</h4><ol><li>f(x) = 2x + 3 dimasukkan ke g(x) = x² − 1, jadi x di g diganti (2x + 3).</li><li>g(2x + 3) = (2x + 3)² − 1</li><li>(2x + 3)² = 4x² + 12x + 9</li><li>Hasil: 4x² + 12x + 9 − 1 = <b>4x² + 12x + 8</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 2x² + 1 = (f ∘ g)(x) = 2(x² − 1) + 3, urutannya terbalik.</li><li><b>C</b> 4x² + 12x + 10: lupa mengurangi 1 dan malah menambah 1.</li><li><b>D</b> 2x² + 3x − 1: f dan g hanya digabung asal, bukan disubstitusi.</li><li><b>E</b> 4x² + 8: (2x + 3)² dianggap 4x² + 9 (suku tengah 2·2x·3 = 12x terlupa).</li></ul><p class=\"tips\"><b>Tips:</b> (a + b)² = a² + <b>2ab</b> + b². Suku tengah 2ab adalah bagian yang paling sering terlupa.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Untuk fungsi pecahan f(x) = (ax + b)/(cx + d): <b>domain</b> = semua x yang tidak membuat penyebut nol; <b>range</b> = semua y kecuali a/c (asimtot datar), yang juga sama dengan nilai yang dikecualikan pada domain inversnya.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Penyebut x − 3 ≠ 0 → x ≠ 3.</li><li><b>2</b> <i>Benar.</i> f(4) = (2·4 + 1)/(4 − 3) = 9/1 = 9.</li><li><b>3</b> <i>Benar.</i> Tulis y = (2x + 1)/(x − 3) → y(x − 3) = 2x + 1 → xy − 2x = 3y + 1 → x(y − 2) = 3y + 1 → x = (3y + 1)/(y − 2). Tukar nama variabel: f<sup>−1</sup>(x) = (3x + 1)/(x − 2).</li><li><b>4</b> <i>Salah.</i> f(x) tidak pernah bernilai 2 (= 2/1, rasio koefisien x). Buktinya: f<sup>−1</sup> tidak terdefinisi di x = 2. Jadi range = semua real kecuali 2.</li></ul><p class=\"tips\"><b>Tips cepat invers:</b> untuk f(x) = (ax + b)/(cx + d), inversnya f<sup>−1</sup>(x) = (−dx + b)/(cx − a). Di sini a = 2, b = 1, c = 1, d = −3 → (3x + 1)/(x − 2).</p>"
  },
  {
    id: "mtk-12", bab: "Barisan dan Deret", level: 1, tipe: "pg",
    soal: "Suku ke-20 dari barisan aritmetika 3, 7, 11, 15, … adalah …",
    opsi: ["75", "79", "80", "83", "87"],
    kunci: 1,
    hint: "U<sub>n</sub> = a + (n − 1)b, dengan a suku pertama dan b beda.",
    pembahasan: "<h4>Konsep</h4><p>Barisan aritmetika bertambah dengan beda tetap b. Rumus suku ke-n: <b>U<sub>n</sub> = a + (n − 1)b</b>. Mengapa n − 1? Karena dari suku pertama ke suku ke-n hanya ada n − 1 \"lompatan\".</p><h4>Langkah</h4><ol><li>a = 3, b = 7 − 3 = 4.</li><li>U<sub>20</sub> = 3 + (20 − 1) × 4 = 3 + 76 = <b>79</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 75 = 3 + 18 × 4 = U<sub>19</sub>, kurang satu lompatan.</li><li><b>C</b> 80 = 20 × 4, lupa suku awal dan memakai n, bukan n − 1.</li><li><b>D</b> 83 = 3 + 20 × 4, memakai n, bukan n − 1.</li><li><b>E</b> 87 = U<sub>22</sub>.</li></ul><p class=\"tips\"><b>Tips:</b> cek rumusmu pada n = 1: U<sub>1</sub> harus sama dengan a. 3 + 0 × 4 = 3 ✔.</p>"
  },
  {
    id: "mtk-13", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Sebuah gedung pertunjukan memiliki 15 baris kursi. Baris paling depan terdiri atas 20 kursi, dan setiap baris di belakangnya bertambah 2 kursi. Jumlah seluruh kursi di gedung tersebut adalah …",
    opsi: ["300", "480", "510", "540", "600"],
    kunci: 2,
    hint: "Ini deret aritmetika dengan a = 20, b = 2, n = 15. Gunakan S<sub>n</sub> = n/2 × (2a + (n − 1)b).",
    pembahasan: "<h4>Konsep</h4><p>Jumlah kursi tiap baris membentuk barisan aritmetika (20, 22, 24, …). Total kursi = <b>deret</b>: S<sub>n</sub> = n/2 × (2a + (n − 1)b) atau S<sub>n</sub> = n/2 × (a + U<sub>n</sub>).</p><h4>Langkah</h4><ol><li>a = 20, b = 2, n = 15.</li><li>Baris terakhir: U<sub>15</sub> = 20 + 14 × 2 = 48 kursi.</li><li>S<sub>15</sub> = 15/2 × (20 + 48) = 15 × 34 = <b>510 kursi</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 300 = 15 × 20, menganggap semua baris berisi 20 kursi.</li><li><b>B</b> 480 muncul jika baris terakhir dihitung 44 atau n − 1 salah.</li><li><b>D</b> 540 = 15/2 × (20 + 52), memakai U<sub>n</sub> = a + n·b.</li><li><b>E</b> 600 = 15 × 40, salah besar menghitung rata-rata baris.</li></ul><p class=\"tips\"><b>Tips:</b> jumlah deret aritmetika = banyak suku × rata-rata suku pertama dan terakhir. Ini gampang diingat dan cepat dihitung.</p>"
  },
  {
    id: "mtk-14", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Pada suatu barisan geometri diketahui suku ke-3 adalah 12 dan suku ke-6 adalah 96. Suku ke-8 barisan tersebut adalah …",
    opsi: ["192", "256", "384", "768", "96"],
    kunci: 2,
    hint: "U<sub>n</sub> = a·r<sup>n−1</sup>. Bagi U<sub>6</sub> dengan U<sub>3</sub> untuk mendapat r<sup>3</sup>.",
    pembahasan: "<h4>Konsep</h4><p>Barisan geometri dikali rasio tetap r: U<sub>n</sub> = ar<sup>n−1</sup>. Jika diketahui dua suku, <b>bagi keduanya</b> supaya a hilang dan r ketemu.</p><h4>Langkah</h4><ol><li>U<sub>6</sub>/U<sub>3</sub> = ar⁵/ar² = r³ = 96/12 = 8 → r = 2.</li><li>U<sub>3</sub> = ar² = 12 → a × 4 = 12 → a = 3.</li><li>U<sub>8</sub> = 3 × 2⁷ = 3 × 128 = <b>384</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 192 = U<sub>7</sub> (kurang satu kali dikali 2).</li><li><b>B</b> 256 = 2⁸, lupa mengalikan a = 3.</li><li><b>D</b> 768 = U<sub>9</sub> (pakai r⁸, bukan r⁷).</li><li><b>E</b> 96 adalah U<sub>6</sub> yang sudah diketahui.</li></ul><p class=\"tips\"><b>Tips:</b> lebih cepat tanpa mencari a: U<sub>8</sub> = U<sub>6</sub> × r² = 96 × 4 = 384.</p>"
  },
  {
    id: "mtk-15", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Seorang pasien diberi obat 500 mg. Setiap jam, kadar obat dalam darahnya berkurang 20% dari kadar jam sebelumnya. Kadar obat setelah 2 jam adalah …",
    opsi: ["300 mg", "320 mg", "340 mg", "360 mg", "400 mg"],
    kunci: 1,
    hint: "Berkurang 20% berarti tersisa 80% = 0,8 dari jumlah sebelumnya. Ini peluruhan (barisan geometri), bukan pengurangan tetap.",
    pembahasan: "<h4>Konsep</h4><p>\"Berkurang 20% <b>dari kadar jam sebelumnya</b>\" berarti yang tersisa tiap jam 80% dari nilai terakhir, jadi ini <b>peluruhan (geometri)</b>, bukan pengurangan tetap. Rumus: M<sub>t</sub> = M<sub>0</sub>(1 − p)<sup>t</sup>.</p><h4>Langkah</h4><ol><li>Setelah 1 jam: 500 × 0,8 = 400 mg.</li><li>Setelah 2 jam: 400 × 0,8 = <b>320 mg</b>.</li><li>Atau langsung: 500 × 0,8² = 500 × 0,64 = 320 mg.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 300 mg: 20% selalu dihitung dari 500 (−100 mg tiap jam). Ini bunga tunggal, bukan peluruhan.</li><li><b>C</b> 340 mg dan <b>D</b> 360 mg: salah menghitung persen pada jam kedua.</li><li><b>E</b> 400 mg adalah kadar setelah 1 jam saja.</li></ul><p class=\"tips\"><b>Tips:</b> kata kunci \"dari sebelumnya\" atau \"dari sisa\" → kalikan dengan (1 − p) berulang. Kata \"dari awal\" → kurangi jumlah tetap.</p>"
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
    pembahasan: "<h4>Konsep</h4><p><b>Bunga tunggal</b>: bunga selalu dihitung dari modal awal, jadi tiap tahun jumlahnya sama: M = M<sub>0</sub>(1 + n·i). <b>Bunga majemuk</b>: bunga dihitung dari saldo terbaru (bunga berbunga): M = M<sub>0</sub>(1 + i)<sup>n</sup>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Andi: bunga 10% × 10 juta = 1 juta/tahun → 10 juta + 3 × 1 juta = 13.000.000.</li><li><b>2</b> <i>Benar.</i> Budi: 10 juta × 1,1³ = 10 juta × 1,331 = 13.310.000 (11 juta → 12,1 juta → 13,31 juta).</li><li><b>3</b> <i>Benar.</i> 13.310.000 − 13.000.000 = 310.000.</li><li><b>4</b> <i>Salah.</i> Tahun ke-1: 10% × 10 juta = 1.000.000. Tahun ke-2: 10% × 11 juta = 1.100.000. Bunga majemuk makin besar tiap tahun.</li></ul><p class=\"tips\"><b>Tips:</b> 1,1² = 1,21 dan 1,1³ = 1,331. Hafalkan karena sering muncul.</p>"
  },

  // ===================== GEOMETRI DAN PENGUKURAN =====================
  {
    id: "mtk-17", bab: "Geometri", level: 1, tipe: "pg",
    soal: "Sebuah tangga sepanjang 13 m disandarkan pada tembok vertikal. Jarak kaki tangga ke tembok adalah 5 m. Tinggi ujung atas tangga dari lantai adalah …",
    opsi: ["8 m", "10 m", "12 m", "13 m", "18 m"],
    kunci: 2,
    hint: "Tangga, tembok, dan lantai membentuk segitiga siku-siku. Tangga adalah sisi miringnya.",
    pembahasan: "<h4>Konsep</h4><p>Tangga, tembok, dan lantai membentuk segitiga siku-siku. Tangga adalah <b>sisi miring</b> (terpanjang, di depan sudut siku-siku). Pythagoras: miring² = sisi₁² + sisi₂².</p><h4>Langkah</h4><ol><li>Miring = 13 m, alas = 5 m, tinggi = t.</li><li>t² = 13² − 5² = 169 − 25 = 144 → t = <b>12 m</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 8 m = 13 − 5, mengurangkan panjang sisi langsung (tanpa kuadrat).</li><li><b>B</b> 10 m tidak memenuhi Pythagoras: 10² + 5² = 125 ≠ 169.</li><li><b>D</b> 13 m adalah panjang tangga itu sendiri; tinggi pasti lebih pendek dari sisi miring.</li><li><b>E</b> 18 m = 13 + 5, mustahil karena lebih panjang dari tangganya.</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan tripel Pythagoras: 3-4-5, 5-12-13, 8-15-17, 7-24-25, serta kelipatannya (6-8-10, 9-12-15).</p>"
  },
  {
    id: "mtk-18", bab: "Geometri", level: 2, tipe: "pg",
    soal: "Dua garis sejajar dipotong oleh sebuah garis lain. Sepasang sudut dalam sepihak yang terbentuk besarnya (3x + 10)° dan (2x + 20)°. Nilai x adalah …",
    opsi: ["20", "25", "30", "34", "40"],
    kunci: 2,
    hint: "Sudut dalam sepihak pada dua garis sejajar saling berpelurus (jumlahnya 180°). Jangan tertukar dengan sudut dalam berseberangan yang besarnya sama.",
    pembahasan: "<h4>Konsep</h4><p>Dua garis sejajar dipotong garis lain: sudut <b>dalam sepihak</b> (sama-sama di antara kedua garis sejajar, di sisi yang sama dari garis potong) jumlahnya <b>180°</b>. Bedakan dengan sudut <i>dalam berseberangan</i> dan <i>sehadap</i> yang besarnya <b>sama</b>.</p><h4>Langkah</h4><ol><li>(3x + 10) + (2x + 20) = 180</li><li>5x + 30 = 180 → 5x = 150 → <b>x = 30</b></li><li>Cek: 100° + 80° = 180° ✔</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 20: 5x = 100, salah memindahkan konstanta (180 − 80).</li><li><b>B</b> 25: 5x + 30 = 155, salah aritmetika.</li><li><b>D</b> 34: dari 5x = 170, konstanta hanya dikurangi 10.</li><li><b>E</b> 40: 5x = 200, konstanta malah ditambahkan.</li></ul><p class=\"tips\"><b>Tips:</b> jika menganggap kedua sudut sama besar (tertukar dengan sudut berseberangan), hasilnya x = 10. Pembuat soal sengaja tidak memasukkan 10 ke opsi. Hafalkan: <i>sepihak = 180°, berseberangan &amp; sehadap = sama</i>.</p>"
  },
  {
    id: "mtk-19", bab: "Geometri", level: 2, tipe: "pg",
    soal: "Pada sore hari, sebuah tiang setinggi 2 m memiliki bayangan sepanjang 1,5 m. Pada saat yang sama, bayangan sebuah pohon panjangnya 6 m. Tinggi pohon tersebut adalah …",
    opsi: ["4,5 m", "6 m", "7,5 m", "8 m", "9 m"],
    kunci: 3,
    hint: "Tiang dengan bayangannya dan pohon dengan bayangannya membentuk dua segitiga yang sebangun.",
    pembahasan: "<h4>Konsep</h4><p>Pada saat yang sama, sinar matahari datang dengan sudut sama, sehingga tiang dan pohon beserta bayangannya membentuk dua segitiga <b>sebangun</b>. Perbandingan tinggi : bayangan sama untuk keduanya.</p><h4>Langkah</h4><ol><li>tinggi tiang / bayangan tiang = tinggi pohon / bayangan pohon</li><li>2 / 1,5 = t / 6</li><li>t = 6 × 2 / 1,5 = 12 / 1,5 = <b>8 m</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 4,5 m = 6 × 1,5 / 2, perbandingannya terbalik.</li><li><b>B</b> 6 m menyamakan tinggi dengan panjang bayangan.</li><li><b>C</b> 7,5 m: selisih tetap (6 + 1,5), bukan perbandingan.</li><li><b>E</b> 9 m: salah bagi.</li></ul><p class=\"tips\"><b>Tips:</b> cek logika: bayangan tiang lebih pendek dari tiangnya (1,5 &lt; 2), jadi pohon juga harus lebih tinggi dari bayangannya (&gt; 6 m). Itu langsung menggugurkan A dan B.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Rumus pencerminan titik (x, y):</p><ul><li>sumbu x → (x, −y) · sumbu y → (−x, y)</li><li>garis y = x → (y, x) · titik O → (−x, −y)</li><li>translasi (a, b) → (x + a, y + b)</li></ul><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Sumbu y: (3, −2) → (−3, −2).</li><li><b>B</b> ✘ Sumbu x: hanya y yang berubah tanda → (3, 2), bukan (−3, 2).</li><li><b>C</b> ✔ y = x: koordinat ditukar → (−2, 3).</li><li><b>D</b> ✔ Titik O: kedua tanda dibalik → (−3, 2).</li><li><b>E</b> ✘ Translasi (1, 2): (3 + 1, −2 + 2) = (4, 0), bukan (4, 4).</li></ul><p class=\"tips\"><b>Tips:</b> cermin terhadap sumbu x = koordinat <b>x tetap</b>. Cermin terhadap sumbu y = koordinat <b>y tetap</b>. Sumbu yang disebut adalah koordinat yang tidak berubah.</p>"
  },
  {
    id: "mtk-21", bab: "Transformasi Geometri", level: 2, tipe: "pg",
    soal: "Titik P(2, 5) ditranslasikan oleh (−3, 1), kemudian dirotasikan 90° berlawanan arah jarum jam dengan pusat O(0, 0). Bayangan akhir titik P adalah …",
    opsi: ["(−6, −1)", "(6, 1)", "(1, −6)", "(−1, 6)", "(6, −1)"],
    kunci: 0,
    hint: "Kerjakan berurutan. Rotasi 90° berlawanan arah jarum jam: (x, y) → (−y, x).",
    pembahasan: "<h4>Konsep</h4><p>Transformasi berurutan dikerjakan <b>satu per satu sesuai urutan</b>. Rotasi 90° berlawanan arah jarum jam (positif) terhadap O: (x, y) → (−y, x).</p><h4>Langkah</h4><ol><li>Translasi (−3, 1): (2 − 3, 5 + 1) = (−1, 6).</li><li>Rotasi 90°: (x, y) = (−1, 6) → (−y, x) = <b>(−6, −1)</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> (6, 1) = rotasi 90° <i>searah</i> jarum jam: (x, y) → (y, −x) memberi (6, 1).</li><li><b>C</b> (1, −6) = rotasi 180° dari hasil translasi.</li><li><b>D</b> (−1, 6) = hasil translasi saja, rotasinya belum dikerjakan.</li><li><b>E</b> (6, −1) = koordinat hanya ditukar tanpa mengatur tanda.</li></ul><p class=\"tips\"><b>Tips:</b> cek dengan kuadran. (−1, 6) ada di kuadran II; diputar 90° berlawanan jarum jam akan masuk kuadran III (x dan y negatif). Hanya A yang di kuadran III.</p>"
  },
  {
    id: "mtk-22", bab: "Pengukuran", level: 1, tipe: "pg",
    soal: "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah … (π = 22/7)",
    opsi: ["440 cm<sup>3</sup>", "770 cm<sup>3</sup>", "1.540 cm<sup>3</sup>", "3.080 cm<sup>3</sup>", "4.620 cm<sup>3</sup>"],
    kunci: 2,
    hint: "Volume tabung = luas alas × tinggi = πr<sup>2</sup>t.",
    pembahasan: "<h4>Konsep</h4><p>Volume tabung = luas alas × tinggi = <b>πr²t</b>. Pakai π = 22/7 jika jari-jari kelipatan 7, supaya 7 bisa dicoret.</p><h4>Langkah</h4><ol><li>V = 22/7 × 7 × 7 × 10</li><li>Coret 7: 22 × 7 × 10 = <b>1.540 cm³</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 440 = 2πrt = luas selimut tabung, bukan volume.</li><li><b>B</b> 770: r² dihitung 7 × 3,5 (jari-jari dikali setengahnya), hasilnya separuh volume.</li><li><b>D</b> 3.080: r² dihitung 7 × 14 (jari-jari dikali diameter).</li><li><b>E</b> 4.620 = 3 × volume, seperti membalik rumus kerucut (⅓) menjadi ×3.</li></ul><p class=\"tips\"><b>Tips:</b> volume kerucut = ⅓ volume tabung, volume bola = 4/3 πr³. Jangan tertukar.</p>"
  },
  {
    id: "mtk-23", bab: "Pengukuran", level: 3, tipe: "pg",
    soal: "Sebuah kolam berbentuk balok berukuran panjang 8 m, lebar 5 m, dan kedalaman 1,5 m. Kolam akan diisi air hingga 80% penuh menggunakan selang dengan debit 20 liter per menit. Waktu yang dibutuhkan adalah …",
    opsi: ["30 jam", "40 jam", "48 jam", "50 jam", "60 jam"],
    kunci: 1,
    hint: "Hitung volume air dalam m<sup>3</sup>, ubah ke liter (1 m<sup>3</sup> = 1.000 L), bagi dengan debit, lalu ubah menit ke jam.",
    pembahasan: "<h4>Konsep</h4><p>Soal debit: <b>waktu = volume / debit</b>. Kuncinya ada di konversi satuan: 1 m³ = 1.000 liter, dan 1 jam = 60 menit.</p><h4>Langkah</h4><ol><li>Volume kolam = 8 × 5 × 1,5 = 60 m³.</li><li>Yang diisi hanya 80%: 0,8 × 60 = 48 m³ = 48.000 L.</li><li>Waktu = 48.000 / 20 = 2.400 menit.</li><li>2.400 / 60 = <b>40 jam</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 30 jam: memakai 60% atau salah volume.</li><li><b>C</b> 48 jam: angka 48 m³ langsung dianggap jam.</li><li><b>D</b> 50 jam: lupa 80%, mengisi penuh 60.000 L.</li><li><b>E</b> 60 jam: volume 60 m³ langsung dianggap jam.</li></ul><p class=\"tips\"><b>Tips:</b> garis bawahi kata \"80% penuh\" atau \"setengah\" di soal. Itu jebakan yang paling sering terlewat.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Pada kubus rusuk s: diagonal bidang = <b>s√2</b>, diagonal ruang = <b>s√3</b>. Jarak titik ke garis atau bidang = panjang ruas yang <b>tegak lurus</b> terhadap garis atau bidang itu.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> AC adalah diagonal alas: √(6² + 6²) = √72 = 6√2.</li><li><b>2</b> <i>Benar.</i> AG adalah diagonal ruang: √(AC² + CG²) = √(72 + 36) = √108 = 6√3.</li><li><b>3</b> <i>Benar.</i> E tepat di atas A dan AE tegak lurus alas, jadi jaraknya = AE = 6 cm.</li><li><b>4</b> <i>Salah.</i> CG tegak (vertikal), sedangkan AC mendatar di alas dan menyentuh CG di C, jadi AC ⊥ CG. Jarak A ke CG = AC = <b>6√2</b> cm, bukan 6 cm.</li></ul><p class=\"tips\"><b>Tips:</b> untuk jarak titik ke rusuk tegak, \"turunkan\" titik itu ke alas lalu ukur jarak mendatarnya ke kaki rusuk.</p>"
  },

  // ===================== TRIGONOMETRI =====================
  {
    id: "mtk-25", bab: "Trigonometri", level: 1, tipe: "pg",
    soal: "Segitiga ABC siku-siku di B dengan AB = 4 cm, BC = 3 cm, dan AC = 5 cm. Nilai cos A adalah …",
    opsi: ["3/5", "4/5", "3/4", "4/3", "5/4"],
    kunci: 1,
    hint: "cos = sisi samping sudut / sisi miring. Sisi yang mengapit sudut A (selain sisi miring) adalah AB.",
    pembahasan: "<h4>Konsep</h4><p>Perbandingan trigonometri bergantung pada <b>posisi sisi terhadap sudut</b> yang ditanya: sin = depan/miring, cos = samping/miring, tan = depan/samping (SinDeMi, CosSaMi, TanDeSa).</p><h4>Langkah</h4><ol><li>Sudut siku-siku di B, jadi sisi miring = AC = 5 (di depan sudut siku-siku).</li><li>Dilihat dari A: sisi samping (menempel pada A) = AB = 4; sisi depan = BC = 3.</li><li>cos A = 4/5.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 3/5 = sin A (atau cos C), sisi depan tertukar dengan sisi samping.</li><li><b>C</b> 3/4 = tan A.</li><li><b>D</b> 4/3 = cotan A.</li><li><b>E</b> 5/4 = sec A (kebalikan cos).</li></ul><p class=\"tips\"><b>Tips:</b> beri label sisi relatif terhadap sudut yang ditanya <i>sebelum</i> memakai rumus. Sisi \"samping\" adalah sisi yang menyentuh sudut itu, selain sisi miring.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Dari satu perbandingan trigonometri, gambar segitiga siku-siku lalu cari sisi ketiga dengan Pythagoras. Kebalikannya: sec = 1/cos, cosec = 1/sin, cot = 1/tan.</p><h4>Langkah</h4><p>sin α = 5/13 → depan = 5, miring = 13 → samping = √(169 − 25) = 12.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> cos α = samping/miring = 12/13.</li><li><b>2</b> <i>Benar.</i> tan α = depan/samping = 5/12.</li><li><b>3</b> <i>Salah.</i> sec α = 1/cos α = 13/12. Nilai 13/5 adalah cosec.</li><li><b>4</b> <i>Benar.</i> cosec α = 1/sin α = 13/5.</li></ul><p class=\"tips\"><b>Tips:</b> pasangan kebalikan: sin ↔ cosec, cos ↔ sec. Huruf \"co\" selalu berpasangan dengan yang tanpa \"co\".</p>"
  },
  {
    id: "mtk-27", bab: "Trigonometri", level: 2, tipe: "pg",
    soal: "Sebuah layang-layang diterbangkan dengan benang sepanjang 100 m yang terbentang lurus. Benang membentuk sudut 30° terhadap permukaan tanah. Jika ujung benang dipegang tepat di permukaan tanah, tinggi layang-layang adalah …",
    opsi: ["25 m", "50 m", "50√2 m", "50√3 m", "100 m"],
    kunci: 1,
    hint: "Benang adalah sisi miring, tinggi layang-layang adalah sisi di depan sudut 30°. Perbandingan apa yang menghubungkan sisi depan dan sisi miring?",
    pembahasan: "<h4>Konsep</h4><p>Benang adalah sisi miring, tinggi layang-layang adalah sisi <b>depan</b> sudut 30°, dan jarak mendatar adalah sisi samping. Sisi depan dan miring dihubungkan oleh <b>sin</b>.</p><h4>Langkah</h4><ol><li>sin 30° = tinggi / 100</li><li>tinggi = 100 × ½ = <b>50 m</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 25 m = 100 × ¼, salah nilai sin 30°.</li><li><b>C</b> 50√2 m = 100 × sin 45°, sudutnya salah.</li><li><b>D</b> 50√3 m = 100 × cos 30°, itu jarak mendatar, bukan tinggi.</li><li><b>E</b> 100 m adalah panjang benang; tinggi pasti lebih kecil dari sisi miring.</li></ul><p class=\"tips\"><b>Tips:</b> sudut istimewa: sin 30° = ½, sin 45° = ½√2, sin 60° = ½√3, dan cos-nya urutan terbalik. Ingat juga: sudut kecil → tinggi kecil, jadi 50 m (setengah benang) masuk akal untuk 30°.</p>"
  },

  // ===================== DATA DAN PELUANG =====================
  {
    id: "mtk-28", bab: "Data", level: 1, tipe: "pg",
    soal: "Diagram lingkaran menunjukkan pilihan ekstrakurikuler 480 siswa sebuah sekolah. Juring untuk ekstrakurikuler futsal memiliki sudut pusat 75°. Banyak siswa yang memilih futsal adalah …",
    opsi: ["75 siswa", "80 siswa", "100 siswa", "120 siswa", "150 siswa"],
    kunci: 2,
    hint: "Satu lingkaran penuh = 360° = seluruh siswa. Bagian futsal = (sudut futsal / 360°) × jumlah siswa.",
    pembahasan: "<h4>Konsep</h4><p>Satu lingkaran penuh = 360° = seluruh data. Jadi jumlah anggota satu juring = <b>(sudut juring / 360°) × total</b>.</p><h4>Langkah</h4><ol><li>Futsal = 75/360 × 480</li><li>480/360 = 4/3 → 75 × 4/3 = <b>100 siswa</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 75 siswa: besar sudut langsung dianggap jumlah siswa.</li><li><b>B</b> 80 siswa: memakai 60° atau salah pembagian.</li><li><b>D</b> 120 siswa = 90/360 × 480 (seperempat lingkaran).</li><li><b>E</b> 150 siswa: membagi dengan 240 alih-alih 360.</li></ul><p class=\"tips\"><b>Tips:</b> hitung dulu \"1° = berapa siswa\": 480/360 = 4/3 siswa per derajat. Untuk juring lain di soal yang sama, tinggal kalikan.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Urutkan data dulu. <b>Rata-rata</b> = jumlah/banyak data; <b>median</b> = nilai tengah (jika data genap, rata-rata dua nilai tengah); <b>modus</b> = nilai paling sering; <b>jangkauan</b> = maksimum − minimum.</p><h4>Langkah</h4><p>Data urut: 6, 7, 8, 8, 9, 10 (n = 6, jumlah = 48).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Rata-rata = 48/6 = 8.</li><li><b>B</b> ✘ Dua nilai tengah (data ke-3 dan ke-4) = 8 dan 8 → median 8. Nilai 8,5 muncul jika data tidak diurutkan dulu (8 dan 9 di urutan asli).</li><li><b>C</b> ✔ Modus 8 (muncul 2 kali).</li><li><b>D</b> ✔ Jangkauan = 10 − 6 = 4.</li><li><b>E</b> ✘ Di atas 8 hanya 9 dan 10 → 2 siswa. Nilai 8 <i>sama dengan</i> rata-rata, bukan di atasnya.</li></ul><p class=\"tips\"><b>Tips:</b> <b>selalu urutkan data</b> sebelum mencari median. Itu kesalahan nomor satu di soal statistika.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Ukuran data: jangkauan = maks − min; rata-rata = jumlah/n; median = nilai tengah data terurut; modus = nilai yang paling sering muncul.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> 11 − 4 = 7.</li><li><b>2</b> <i>Benar.</i> (4 + 6 + 6 + 7 + 8 + 11)/6 = 42/6 = 7.</li><li><b>3</b> <i>Benar.</i> n = 6 (genap), jadi median = rata-rata data ke-3 dan ke-4 = (6 + 7)/2 = 6,5.</li><li><b>4</b> <i>Salah.</i> Yang muncul dua kali adalah 6, jadi modus = 6. Angka 7 adalah rata-rata, bukan modus.</li></ul><p class=\"tips\"><b>Tips:</b> rata-rata, median, dan modus bisa berbeda-beda pada data yang sama. Jangan menganggap ketiganya selalu sama.</p>"
  },
  {
    id: "mtk-31", bab: "Data", level: 2, tipe: "pg",
    soal: "Rata-rata nilai 30 siswa kelas A adalah 70, sedangkan rata-rata nilai 20 siswa kelas B adalah 80. Rata-rata nilai gabungan kedua kelas adalah …",
    opsi: ["72", "74", "75", "76", "78"],
    kunci: 1,
    hint: "Jangan langsung merata-ratakan 70 dan 80. Hitung jumlah nilai tiap kelas (rata-rata × banyak siswa), lalu bagi dengan total siswa.",
    pembahasan: "<h4>Konsep</h4><p>Rata-rata gabungan adalah <b>rata-rata berbobot</b>: kelas yang siswanya lebih banyak lebih berpengaruh. Rumus: x̄ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂).</p><h4>Langkah</h4><ol><li>Jumlah nilai A = 30 × 70 = 2.100.</li><li>Jumlah nilai B = 20 × 80 = 1.600.</li><li>Gabungan = 3.700 / 50 = <b>74</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 72: bobot terlalu condong ke kelas A.</li><li><b>C</b> 75 = (70 + 80)/2. Ini hanya benar jika jumlah siswa kedua kelas sama.</li><li><b>D</b> 76: bobotnya tertukar (20 × 70 + 30 × 80)/50.</li><li><b>E</b> 78: condong ke kelas B.</li></ul><p class=\"tips\"><b>Tips:</b> hasil pasti di antara 70 dan 80, dan lebih dekat ke kelas yang siswanya lebih banyak (A = 70). Jadi harus &lt; 75. Itu langsung menggugurkan C, D, E.</p>"
  },
  {
    id: "mtk-32", bab: "Data", level: 3, tipe: "pg",
    stimulus: "<table><tr><th>Nilai</th><th>Frekuensi</th></tr><tr><td>41–50</td><td>4</td></tr><tr><td>51–60</td><td>6</td></tr><tr><td>61–70</td><td>10</td></tr><tr><td>71–80</td><td>8</td></tr><tr><td>81–90</td><td>2</td></tr></table>",
    soal: "Median dari data pada tabel tersebut adalah …",
    opsi: ["63,5", "65,0", "65,5", "66,5", "67,2"],
    kunci: 2,
    hint: "n = 30, jadi median ada di data ke-15. Cari kelas yang memuat data ke-15 menggunakan frekuensi kumulatif, lalu pakai Me = L + ((n/2 − F)/f) × p.",
    pembahasan: "<h4>Konsep</h4><p>Median data berkelompok: <b>Me = L + ((n/2 − F)/f) × p</b>, dengan L = tepi bawah kelas median, F = frekuensi kumulatif <i>sebelum</i> kelas median, f = frekuensi kelas median, p = panjang kelas.</p><h4>Langkah</h4><ol><li>n = 4 + 6 + 10 + 8 + 2 = 30 → median ada di data ke-15.</li><li>Frekuensi kumulatif: 4, 10, 20, … → data ke-15 di kelas 61–70.</li><li>L = 61 − 0,5 = 60,5; F = 10; f = 10; p = 10.</li><li>Me = 60,5 + ((15 − 10)/10) × 10 = 60,5 + 5 = <b>65,5</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 63,5: F dianggap 12 atau salah posisi data.</li><li><b>B</b> 65,0: L dianggap 60 (tepi bawah tidak dikurangi 0,5).</li><li><b>D</b> 66,5: L dianggap 61 (memakai batas bawah, bukan tepi bawah).</li><li><b>E</b> 67,2: rumus modus atau F salah.</li></ul><p class=\"tips\"><b>Tips:</b> tepi bawah = batas bawah − 0,5 (untuk data bulat). Selisih 0,5 inilah yang membedakan opsi B, C, D.</p>"
  },
  {
    id: "mtk-33", bab: "Peluang", level: 1, tipe: "pg",
    soal: "Sebuah dadu bersisi enam dilempar sekali. Peluang muncul mata dadu bilangan prima adalah …",
    opsi: ["1/6", "1/3", "1/2", "2/3", "5/6"],
    kunci: 2,
    hint: "Daftar mata dadu 1–6 yang merupakan bilangan prima. Ingat: 1 bukan bilangan prima.",
    pembahasan: "<h4>Konsep</h4><p>Peluang = banyak kejadian yang diinginkan / banyak semua kemungkinan. <b>Bilangan prima</b> = bilangan &gt; 1 yang hanya habis dibagi 1 dan dirinya sendiri. <b>1 bukan prima</b>.</p><h4>Langkah</h4><ol><li>Ruang sampel: 1, 2, 3, 4, 5, 6 → n(S) = 6.</li><li>Prima: 2, 3, 5 → n(A) = 3.</li><li>P = 3/6 = <b>1/2</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 1/6: hanya satu mata dadu dihitung.</li><li><b>B</b> 1/3: hanya 2 bilangan dihitung (misalnya 2 terlupa karena genap).</li><li><b>D</b> 2/3: 1 ikut dianggap prima (1, 2, 3, 5).</li><li><b>E</b> 5/6: semua kecuali satu.</li></ul><p class=\"tips\"><b>Tips:</b> 2 adalah satu-satunya bilangan prima genap, dan 1 bukan prima. Dua fakta ini paling sering dijadikan jebakan.</p>"
  },
  {
    id: "mtk-34", bab: "Peluang", level: 2, tipe: "pg",
    soal: "Dua buah dadu dilempar bersamaan. Peluang munculnya jumlah mata dadu 8 adalah …",
    opsi: ["1/9", "5/36", "1/6", "7/36", "2/9"],
    kunci: 1,
    hint: "Ruang sampel dua dadu ada 6 × 6 = 36. Daftar pasangan (dadu 1, dadu 2) yang jumlahnya 8, termasuk urutan yang dibalik.",
    pembahasan: "<h4>Konsep</h4><p>Dua dadu → ruang sampel 6 × 6 = 36 pasangan <b>berurutan</b>: dadu pertama dan kedua dianggap berbeda, jadi (2,6) ≠ (6,2).</p><h4>Langkah</h4><ol><li>Jumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 pasangan.</li><li>P = <b>5/36</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 1/9 = 4/36: (4,4) terlewat atau dihitung kurang satu.</li><li><b>C</b> 1/6 = 6/36: itu peluang jumlah <b>7</b>, jumlah paling sering.</li><li><b>D</b> 7/36: jumlah kejadian dihitung berlebih.</li><li><b>E</b> 2/9 = 8/36: (1,7) atau pasangan tak mungkin ikut dihitung.</li></ul><p class=\"tips\"><b>Tips:</b> banyak cara mendapat jumlah k pada dua dadu: k − 1 untuk k ≤ 7, dan 13 − k untuk k ≥ 7. Untuk 8: 13 − 8 = 5.</p>"
  },
  {
    id: "mtk-35", bab: "Peluang", level: 3, tipe: "pg",
    soal: "Sebuah kotak berisi 5 bola merah dan 3 bola biru. Dua bola diambil sekaligus secara acak. Peluang terambilnya kedua bola berwarna merah adalah …",
    opsi: ["5/16", "5/14", "25/64", "1/2", "3/8"],
    kunci: 1,
    hint: "Diambil sekaligus berarti tanpa pengembalian. Gunakan kombinasi: C(5, 2) / C(8, 2), atau kalikan peluang bertahap 5/8 × 4/7.",
    pembahasan: "<h4>Konsep</h4><p>\"Diambil sekaligus\" = <b>tanpa pengembalian</b>, dan urutan tidak penting → pakai kombinasi C(n, r). Cara lain: kalikan peluang bertahap, dengan jumlah bola berkurang setelah pengambilan pertama.</p><h4>Langkah</h4><ol><li>Kombinasi: C(5, 2) = 10 cara pilih 2 merah; C(8, 2) = 28 cara pilih 2 bola apa saja.</li><li>P = 10/28 = <b>5/14</b>.</li><li>Cek bertahap: 5/8 × 4/7 = 20/56 = 5/14 ✔.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 5/16 = 5/8 × 1/2, salah peluang kedua.</li><li><b>C</b> 25/64 = 5/8 × 5/8, seolah bola dikembalikan.</li><li><b>D</b> 1/2: hanya menebak dari proporsi.</li><li><b>E</b> 3/8: peluang terambil satu bola biru (sekali ambil).</li></ul><p class=\"tips\"><b>Tips:</b> \"sekaligus\" atau \"tanpa pengembalian\" → penyebut berkurang (8, lalu 7). \"Dengan pengembalian\" → penyebut tetap.</p>"
  }
]};
