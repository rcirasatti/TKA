// Paket HOTS Matematika — soal cerita & penalaran bergaya tryout TKA (bukan salinan; angka dan konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["matematika-hots"] = { soal: [

  // ===================== BILANGAN & LOGIKA =====================
  {
    id: "mth-01", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Dua petugas mendata kucing di sebuah penampungan. Menurut petugas pertama, ada 45 ekor kucing dan 18 ekor di antaranya jantan. Menurut petugas kedua, ada 25 ekor kucing berbulu oranye dan sisanya berbulu putih. Jika terdapat 8 ekor kucing jantan berbulu oranye, banyak kucing betina berbulu putih adalah …",
    opsi: ["8 ekor", "10 ekor", "12 ekor", "15 ekor", "17 ekor"],
    kunci: 1,
    hint: "Buat tabel 2×2: baris jantan/betina, kolom oranye/putih. Isi yang diketahui, lalu lengkapi dengan pengurangan.",
    pembahasan: "<h4>Konsep</h4><p>Data yang dikelompokkan menurut <b>dua sifat</b> sekaligus (jenis kelamin dan warna) paling mudah diselesaikan dengan <b>tabel 2 × 2</b>. Isi yang diketahui dulu, lalu lengkapi dengan pengurangan baris/kolom.</p><h4>Langkah</h4><table><tr><th></th><th>Oranye</th><th>Putih</th><th>Total</th></tr><tr><th>Jantan</th><td>8</td><td>10</td><td>18</td></tr><tr><th>Betina</th><td>17</td><td><b>10</b></td><td>27</td></tr><tr><th>Total</th><td>25</td><td>20</td><td>45</td></tr></table><ol><li>Betina = 45 − 18 = 27; putih = 45 − 25 = 20.</li><li>Betina oranye = 25 − 8 = 17.</li><li>Betina putih = 27 − 17 = <b>10 ekor</b> (cek: jantan putih = 20 − 10 = 10, 8 + 10 = 18 ✔).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 8 = jantan oranye, data yang sudah diketahui.</li><li><b>C</b> 12 dan <b>D</b> 15: hasil pengurangan yang salah pasangan baris/kolom.</li><li><b>E</b> 17 = betina <i>oranye</i>, bukan betina putih.</li></ul><p class=\"tips\"><b>Tips:</b> setiap kali ada dua kategori yang saling silang, langsung gambar tabel. Kolom \"Total\" membantu mengecek jawaban.</p>"
  },
  {
    id: "mth-02", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Koperasi sekolah memiliki sejumlah buku tulis. Pada hari pertama terjual 10 buku, pada hari kedua terjual 3/4 dari sisa buku, dan pada hari ketiga terjual 5 buku. Jika sekarang tersisa 3 buku, banyak buku tulis mula-mula adalah …",
    opsi: ["40", "42", "44", "46", "48"],
    kunci: 1,
    hint: "Kerjakan mundur dari akhir: sebelum hari ketiga ada 3 + 5 buku. Jumlah itu adalah 1/4 dari sisa setelah hari pertama.",
    pembahasan: "<h4>Konsep</h4><p>Jika yang diketahui adalah <b>keadaan akhir</b>, kerjakan <b>mundur</b>: balik setiap operasi dari hari terakhir ke hari pertama (jual → tambahkan kembali; \"terjual 3/4\" → sisa 1/4, jadi kalikan 4).</p><h4>Langkah</h4><ol><li>Sebelum hari ke-3: 3 + 5 = 8 buku.</li><li>Hari ke-2 terjual 3/4, sisanya 1/4. Jadi 8 = 1/4 × sisa hari pertama → sisa = 32 buku.</li><li>Mula-mula: 32 + 10 = <b>42 buku</b>.</li><li>Cek maju: 42 → 32 → (jual 24) 8 → (jual 5) 3 ✔.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 40 → sisa 30 → terjual 3/4 × 30 = 22,5 (tidak bulat), jadi gugur.</li><li><b>C</b> 44 → 34 → 25,5 terjual, juga tidak bulat. <b>D</b> 46 → 36 → sisa 9 → 4 buku, bukan 3. <b>E</b> 48 → 38 → tidak bulat.</li></ul><p class=\"tips\"><b>Tips:</b> cara tercepat untuk soal pilihan ganda seperti ini: <b>uji opsi</b> dari awal. Opsi yang menghasilkan pecahan buku langsung gugur.</p>"
  },
  {
    id: "mth-03", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Diketahui a = <sup>8</sup>√3, b = <sup>6</sup>√2, dan c = <sup>12</sup>√5. Nilai a<sup>24</sup> + b<sup>24</sup> − c<sup>24</sup> adalah …",
    opsi: ["18", "20", "28", "43", "68"],
    kunci: 0,
    hint: "Tulis sebagai pangkat pecahan: a = 3<sup>1/8</sup>, sehingga a<sup>24</sup> = 3<sup>24/8</sup>.",
    pembahasan: "<h4>Konsep</h4><p>Akar pangkat n sama dengan pangkat 1/n: ⁿ√a = a<sup>1/n</sup>. Jadi (ⁿ√a)<sup>24</sup> = a<sup>24/n</sup>. Pangkat 24 dipilih karena habis dibagi 8, 6, dan 12.</p><h4>Langkah</h4><ol><li>a<sup>24</sup> = 3<sup>24/8</sup> = 3³ = 27</li><li>b<sup>24</sup> = 2<sup>24/6</sup> = 2⁴ = 16</li><li>c<sup>24</sup> = 5<sup>24/12</sup> = 5² = 25</li><li>27 + 16 − 25 = <b>18</b></li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> 20 dan <b>C</b> 28: muncul jika salah satu pangkat 24/n keliru dibagi. Hitung ulang satu per satu: 24/8 = 3, 24/6 = 4, 24/12 = 2.</li><li><b>D</b> 43 = 27 + 16, lupa mengurangi c<sup>24</sup>.</li><li><b>E</b> 68 = 27 + 16 + 25, tanda minus diabaikan.</li></ul><p class=\"tips\"><b>Tips:</b> jangan menghitung nilai desimal akarnya. Ubah ke pangkat pecahan lalu kalikan pangkatnya; hasilnya selalu bilangan bulat yang rapi.</p>"
  },
  {
    id: "mth-04", bab: "Bilangan Real", level: 2, tipe: "pg",
    soal: "Bentuk (3 + 1/√2) / (3 − 1/√2) dapat dinyatakan sebagai a + b√2 dengan a dan b bilangan rasional. Nilai 17a + 17b adalah …",
    opsi: ["17", "19", "23", "25", "29"],
    kunci: 3,
    hint: "Kalikan pembilang dan penyebut dengan √2 dulu agar menjadi (3√2 + 1)/(3√2 − 1), lalu rasionalkan dengan sekawan (3√2 + 1).",
    pembahasan: "<h4>Konsep</h4><p>Pecahan bersusun dengan akar disederhanakan dalam dua tahap: (1) hilangkan pecahan kecil 1/√2 dengan mengalikan atas-bawah √2, (2) rasionalkan penyebut dengan <b>sekawan</b>.</p><h4>Langkah</h4><ol><li>Kalikan atas-bawah dengan √2: (3√2 + 1)/(3√2 − 1).</li><li>Kalikan sekawan (3√2 + 1): pembilang (3√2 + 1)² = 18 + 6√2 + 1 = 19 + 6√2; penyebut 18 − 1 = 17.</li><li>Hasil: 19/17 + (6/17)√2 → a = 19/17, b = 6/17.</li><li>17a + 17b = 19 + 6 = <b>25</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 17: hanya penyebutnya.</li><li><b>B</b> 19 = 17a saja, lupa menambah 17b.</li><li><b>C</b> 23 dan <b>E</b> 29: suku tengah (3√2 + 1)² salah dihitung. Yang benar 2 × 3√2 × 1 = 6√2 (bukan 4√2 → 23, atau 10√2 → 29).</li></ul><p class=\"tips\"><b>Tips:</b> soal meminta 17a + 17b supaya penyebut 17 hilang. Itu petunjuk bahwa penyebut akhirmu memang harus 17.</p>"
  },
  {
    id: "mth-05", bab: "Bilangan Real", level: 3, tipe: "pg",
    soal: "x adalah bilangan bulat. Apakah x bilangan genap?<br>(1) 3x adalah bilangan genap.<br>(2) x + 2 adalah bilangan genap.<br><br>Tentukan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    opsi: [
      "Pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup",
      "Pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup",
      "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU pernyataan SAJA tidak cukup",
      "Pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup",
      "Pernyataan (1) dan (2) tidak cukup"
    ],
    kunci: 3,
    hint: "Uji masing-masing pernyataan sendiri-sendiri. Jika x ganjil, apakah 3x bisa genap? Jika x ganjil, apakah x + 2 bisa genap?",
    pembahasan: "<h4>Konsep</h4><p>Sifat genap/ganjil: ganjil × x bersifat sama dengan x (ganjil × genap = genap, ganjil × ganjil = ganjil). Menambah bilangan genap tidak mengubah sifat genap/ganjil.</p><h4>Langkah</h4><ol><li>(1) 3 ganjil. Kalau x ganjil, 3x ganjil; kalau x genap, 3x genap. Jadi \"3x genap\" memaksa x genap → <b>cukup</b>.</li><li>(2) x + 2 genap ⇔ x genap (dikurangi 2 tetap genap) → <b>cukup</b>.</li><li>Keduanya masing-masing cukup → <b>D</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>/<b>B</b> menganggap salah satu pernyataan tidak cukup, padahal keduanya sama-sama memaksa x genap.</li><li><b>C</b> jebakan paling umum: refleks memilih \"gabungan\" tanpa mengecek tiap pernyataan sendiri-sendiri.</li><li><b>E</b> jelas salah karena masing-masing sudah memberi jawaban pasti \"ya\".</li></ul><p class=\"tips\"><b>Tips:</b> untuk pertanyaan ya/tidak, \"cukup\" artinya jawabannya <i>pasti</i>, baik pasti \"ya\" maupun pasti \"tidak\". Coba dengan angka contoh (x = 2, x = 3) untuk menguji.</p>"
  },
  {
    id: "mth-06", bab: "Penalaran Logis", level: 3, tipe: "pg",
    stimulus: "<p>Enam sahabat, yaitu Anton, Beni, Citra, Dewi, Eka, dan Fani, duduk mengelilingi meja bundar dengan 6 kursi. Semua menghadap ke tengah meja. (Anggap \"kanan\" berarti satu kursi searah jarum jam, dan \"kiri\" berarti satu kursi berlawanan arah jarum jam.)</p><p>• Anton duduk berhadapan dengan Beni.<br>• Citra duduk tepat di sebelah kiri Anton.<br>• Dewi duduk tepat di sebelah kanan Beni.<br>• Eka duduk bersebelahan dengan Anton.</p>",
    soal: "Siapakah yang duduk di antara Anton dan Dewi (melalui sisi yang hanya berisi satu orang)?",
    opsi: ["Beni", "Citra", "Eka", "Fani", "Tidak ada"],
    kunci: 1,
    hint: "Beri nomor kursi 1–6 searah jarum jam. Letakkan Anton di kursi 1, sehingga Beni di kursi 4 (berhadapan). Lanjutkan dengan petunjuk berikutnya.",
    pembahasan: "<h4>Konsep</h4><p>Soal posisi duduk melingkar: beri nomor kursi searah jarum jam, tempatkan dulu orang dengan informasi <b>paling pasti</b> (berhadapan, tepat di sebelah), baru sisanya.</p><h4>Langkah</h4><ol><li>Kursi 1–6 searah jarum jam. Anton = 1 → Beni = 4 (berhadapan).</li><li>Citra tepat di kiri Anton (berlawanan jarum jam) → kursi 6.</li><li>Dewi tepat di kanan Beni (searah jarum jam) → kursi 5.</li><li>Eka bersebelahan dengan Anton; kursi 6 sudah terisi, jadi Eka = 2. Sisa: Fani = 3.</li><li>Urutan: Anton(1) – Eka(2) – Fani(3) – Beni(4) – Dewi(5) – Citra(6). Sisi pendek antara Anton(1) dan Dewi(5) adalah kursi 6 → <b>Citra</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Beni ada di sisi panjang (kursi 4), bersama Eka dan Fani.</li><li><b>C</b> Eka dan <b>D</b> Fani juga di sisi panjang.</li><li><b>E</b> Salah: Anton dan Dewi tidak bersebelahan, ada satu kursi di antaranya.</li></ul><p class=\"tips\"><b>Tips:</b> selalu ikuti definisi \"kanan/kiri\" yang diberikan soal. Arahnya bisa berbeda dengan intuisimu karena semua orang menghadap ke tengah.</p>"
  },

  // ===================== ALJABAR & FUNGSI =====================
  {
    id: "mth-07", bab: "Persamaan dan Pertidaksamaan Linear", level: 2, tipe: "pg",
    soal: "Rara berangkat ke sekolah setiap pukul 06.15 dengan motor. Jika ia berkendara dengan kecepatan 30 km/jam, ia tiba 10 menit setelah bel masuk. Jika kecepatannya 45 km/jam, ia tiba 5 menit sebelum bel. Bel masuk sekolah berbunyi pukul …",
    opsi: ["06.40", "06.45", "06.50", "06.55", "07.00"],
    kunci: 2,
    hint: "Selisih waktu tempuh kedua kecepatan = 10 + 5 = 15 menit = 1/4 jam. Susun d/30 − d/45 = 1/4 untuk mencari jarak d.",
    pembahasan: "<h4>Konsep</h4><p>Jarak sama, kecepatan berbeda → selisih waktu tempuh diketahui. Dari 10 menit terlambat sampai 5 menit lebih awal, selisihnya <b>15 menit = 1/4 jam</b>. Rumus: waktu = jarak / kecepatan.</p><h4>Langkah</h4><ol><li>d/30 − d/45 = 1/4 → (3d − 2d)/90 = 1/4 → d = 22,5 km.</li><li>Kecepatan 30 km/jam: 22,5/30 = 0,75 jam = 45 menit → tiba 07.00, terlambat 10 menit → bel <b>06.50</b>.</li><li>Cek 45 km/jam: 30 menit → tiba 06.45, 5 menit sebelum 06.50 ✔.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li>Cocokkan tiap opsi dengan jam tiba yang sebenarnya (07.00 dan 06.45):</li><li><b>A</b> 06.40 → dengan 30 km/jam terlambat 20 menit, bukan 10.</li><li><b>B</b> 06.45 → dengan 45 km/jam tiba tepat saat bel, bukan 5 menit sebelumnya.</li><li><b>D</b> 06.55 → dengan 30 km/jam terlambat hanya 5 menit.</li><li><b>E</b> 07.00 → dengan 30 km/jam tepat waktu, tidak terlambat.</li></ul><p class=\"tips\"><b>Tips:</b> \"terlambat a menit\" dan \"lebih awal b menit\" → selisih waktu = a + b, bukan a − b.</p>"
  },
  {
    id: "mth-08", bab: "Persamaan dan Pertidaksamaan Linear", level: 2, tipe: "pg",
    soal: "Untuk mengangkut 120 ton barang sekaligus, sebuah perusahaan menyewa 30 truk dengan tiga jenis kapasitas: jenis I (2 ton), jenis II (4 ton), dan jenis III (6 ton). Jika truk jenis I yang disewa 6 unit, banyak truk jenis III yang disewa adalah …",
    opsi: ["3", "6", "9", "12", "18"],
    kunci: 1,
    hint: "Misalkan jenis II = b dan jenis III = c. Dari jumlah truk: b + c = 24. Dari kapasitas: 6×2 + 4b + 6c = 120.",
    pembahasan: "<h4>Konsep</h4><p>Dua hal yang diketahui (jumlah truk dan total muatan) → dua persamaan. Setelah jenis I diketahui, tersisa dua variabel: b (jenis II) dan c (jenis III).</p><h4>Langkah</h4><ol><li>Jumlah truk: 6 + b + c = 30 → b + c = 24.</li><li>Muatan: 6 × 2 + 4b + 6c = 120 → 4b + 6c = 108.</li><li>b = 24 − c: 4(24 − c) + 6c = 108 → 96 + 2c = 108 → <b>c = 6</b> (b = 18).</li><li>Cek: 12 + 72 + 36 = 120 ✔.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 3 dan <b>C</b> 9: tidak memenuhi total muatan (misalnya c = 9 → b = 15 → 12 + 60 + 54 = 126).</li><li><b>D</b> 12: muatan jenis I tidak dimasukkan.</li><li><b>E</b> 18 = banyak truk jenis <i>II</i>, bukan jenis III.</li></ul><p class=\"tips\"><b>Tips:</b> trik cepat: anggap semua 24 truk adalah jenis II (96 ton). Kurang 12 ton; setiap tukar ke jenis III menambah 2 ton → 6 truk.</p>"
  },
  {
    id: "mth-09", bab: "Persamaan dan Pertidaksamaan Linear", level: 2, tipe: "pg",
    soal: "Sebuah sekolah menyewa x bus untuk mengangkut y siswa. Jika setiap bus diisi 40 siswa, ada 10 siswa yang tidak mendapat tempat. Jika setiap bus diisi 45 siswa, ada satu bus yang hanya terisi 30 siswa. Model matematika yang tepat adalah …",
    opsi: [
      "40x − y = −10 dan 45x − y = 15",
      "40x + y = 10 dan 45x + y = 15",
      "40x − y = 10 dan 45x − y = −15",
      "x + 40y = 10 dan x + 45y = 30",
      "40x − y = −10 dan 45x − y = 30"
    ],
    kunci: 0,
    hint: "Kalimat pertama: y = 40x + 10. Kalimat kedua: (x − 1) bus penuh berisi 45 siswa, ditambah satu bus berisi 30 siswa.",
    pembahasan: "<h4>Konsep</h4><p>Ubah setiap kondisi menjadi persamaan \"jumlah siswa = …\". Kunci kondisi kedua: ada <b>(x − 1) bus penuh</b> dan 1 bus berisi 30.</p><h4>Langkah</h4><ol><li>Kondisi 1: y = 40x + 10 (10 siswa tidak kebagian) → <b>40x − y = −10</b>.</li><li>Kondisi 2: y = 45(x − 1) + 30 = 45x − 15 → <b>45x − y = 15</b>.</li><li>(Jika diselesaikan: 5x = 25 → x = 5 bus, y = 210 siswa.)</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> memakai tanda + sehingga tidak sesuai bentuk y = 40x + 10.</li><li><b>C</b> tandanya terbalik semua: berarti bus lebih banyak dari siswa.</li><li><b>D</b> variabel x dan y tertukar perannya.</li><li><b>E</b> kondisi 2 ditulis 45x − y = 30, seolah semua bus penuh lalu ada 30 lebih. Padahal satu bus hanya berisi 30 (kurang 15 dari penuh).</li></ul><p class=\"tips\"><b>Tips:</b> \"satu bus hanya terisi k\" = kapasitas penuh dikurangi (kapasitas − k). Di sini 45x − 15.</p>"
  },
  {
    id: "mth-10", bab: "Fungsi", level: 2, tipe: "pg",
    soal: "Pembuatan kerajinan dari x kg bambu melalui dua mesin. Mesin pertama menghasilkan rangka p = f(x) = x<sup>2</sup> + 20x − 1.000. Mesin kedua mengubah rangka menjadi produk jadi h(p) = p/50 + 4. Jika tersedia 40 kg bambu, banyak produk jadi yang dihasilkan adalah …",
    opsi: ["28", "30", "32", "34", "36"],
    kunci: 2,
    hint: "Ini fungsi komposisi (h ∘ f)(40): hitung f(40) dulu, lalu masukkan hasilnya ke h.",
    pembahasan: "<h4>Konsep</h4><p>Dua mesin berurutan = <b>fungsi komposisi</b>: hasil mesin pertama menjadi input mesin kedua, yaitu (h ∘ f)(x) = h(f(x)).</p><h4>Langkah</h4><ol><li>Mesin 1: f(40) = 40² + 20·40 − 1.000 = 1.600 + 800 − 1.000 = 1.400 rangka.</li><li>Mesin 2: h(1.400) = 1.400/50 + 4 = 28 + 4 = <b>32</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 28 = 1.400/50, lupa menambah 4.</li><li><b>B</b> 30, <b>D</b> 34, <b>E</b> 36: salah menghitung f(40) (misalnya 20x dihitung 400 atau 1.000).</li></ul><p class=\"tips\"><b>Tips:</b> kerjakan fungsi yang paling \"dalam\" (mesin pertama) lebih dulu, lalu bawa hasilnya ke fungsi berikutnya.</p>"
  },
  {
    id: "mth-11", bab: "Fungsi", level: 2, tipe: "mcma",
    soal: "Grafik fungsi y = x<sup>2</sup> − 6x + 4 diperoleh dengan menggeser grafik y = x<sup>2</sup> + 2x + 1. Pernyataan yang benar adalah … (pilih semua yang benar)",
    opsi: [
      "Titik puncak grafik y = x<sup>2</sup> − 6x + 4 adalah (3, −5).",
      "Grafik digeser 4 satuan ke kanan dan 5 satuan ke bawah.",
      "Sumbu simetri grafik y = x<sup>2</sup> − 6x + 4 adalah x = −3.",
      "Grafik y = x<sup>2</sup> − 6x + 4 memotong sumbu y di (0, 4).",
      "Nilai minimum fungsi y = x<sup>2</sup> − 6x + 4 adalah 4."
    ],
    kunci: [0, 1, 3],
    hint: "Ubah kedua fungsi ke bentuk kuadrat sempurna y = (x − p)<sup>2</sup> + q, lalu bandingkan titik puncaknya.",
    pembahasan: "<h4>Konsep</h4><p>Ubah fungsi kuadrat ke <b>bentuk puncak</b> y = (x − p)² + q dengan melengkapkan kuadrat. Puncaknya (p, q), sumbu simetrinya x = p, dan nilai minimumnya q (jika a &gt; 0). Pergeseran grafik = perpindahan titik puncak.</p><h4>Langkah</h4><ol><li>y = x² + 2x + 1 = (x + 1)² → puncak (−1, 0).</li><li>y = x² − 6x + 4 = (x − 3)² − 9 + 4 = (x − 3)² − 5 → puncak (3, −5).</li></ol><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Puncak (3, −5).</li><li><b>B</b> ✔ Dari (−1, 0) ke (3, −5): x bertambah 4 (kanan), y berkurang 5 (bawah).</li><li><b>C</b> ✘ Sumbu simetri x = 3. Tanda di bentuk (x − 3) sering membuat orang menulis −3.</li><li><b>D</b> ✔ x = 0 → y = 4, titik (0, 4).</li><li><b>E</b> ✘ Nilai minimum = q = −5. Angka 4 adalah titik potong sumbu y, bukan nilai minimum.</li></ul><p class=\"tips\"><b>Tips:</b> sumbu simetri cepat: x = −b/(2a) = 6/2 = 3. Nilai minimum = substitusi x = 3: 9 − 18 + 4 = −5.</p>"
  },

  // ===================== BARISAN, DERET & SOAL CERITA =====================
  {
    id: "mth-12", bab: "Barisan dan Deret", level: 2, tipe: "pg",
    soal: "Seorang siswa mengamati tinggi tanaman selama 12 hari. Tinggi tanaman naik mengikuti pola tetap selama 8 hari pertama, lalu tidak bertambah lagi. Tinggi pada enam hari pertama: 5 mm, 6 mm, 9 mm, 14 mm, 21 mm, 30 mm. Tinggi tanaman pada hari ke-12 adalah …",
    opsi: ["41 mm", "54 mm", "67 mm", "69 mm", "105 mm"],
    kunci: 1,
    hint: "Lihat selisih antarhari: 1, 3, 5, 7, 9, … Lanjutkan sampai hari ke-8 saja, karena setelah itu tinggi tetap.",
    pembahasan: "<h4>Konsep</h4><p>Jika selisih antarsuku tidak tetap, lihat <b>selisih dari selisihnya</b>. Di sini selisihnya 1, 3, 5, 7, 9 (bilangan ganjil), jadi barisan bertingkat dua. Baca juga syarat cerita: pola hanya berlaku 8 hari.</p><h4>Langkah</h4><ol><li>Selisih berikutnya: 11, 13.</li><li>Hari ke-7 = 30 + 11 = 41 mm; hari ke-8 = 41 + 13 = 54 mm.</li><li>Setelah hari ke-8 tinggi tidak bertambah → hari ke-12 = <b>54 mm</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 41 mm = tinggi hari ke-7.</li><li><b>C</b> 67 mm: menambah 13 sekali lagi pada 54 (pola diteruskan sehari, dengan selisih salah).</li><li><b>D</b> 69 mm = hari ke-9, pola diteruskan melewati hari ke-8.</li><li><b>E</b> 105 mm = hari ke-11 jika pola terus diteruskan.</li></ul><p class=\"tips\"><b>Tips:</b> di soal HOTS, kalimat syarat seperti \"lalu tidak bertambah lagi\" adalah inti soalnya. Garis bawahi sebelum menghitung.</p>"
  },
  {
    id: "mth-13", bab: "Barisan dan Deret", level: 3, tipe: "kategori",
    stimulus: "<p>Sebuah gedung pertunjukan memiliki 12 baris kursi. Banyak kursi: baris 1 = 3, baris 2 = 5, baris 3 = 8, baris 4 = 12, baris 5 = 17, dan seterusnya dengan pola tetap.</p><p>Harga tiket di dua baris pertama Rp80.000 per orang. Setiap dua baris berikutnya, harga tiket turun Rp5.000.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Baris ke-8 terdiri atas 38 kursi.",
      "Harga tiket di baris ke-9 adalah Rp60.000 per orang.",
      "Total harga tiket 4 orang di baris ke-9 adalah Rp260.000.",
      "Harga tiket di baris ke-6 lebih mahal daripada di baris ke-7."
    ],
    kunci: [true, true, false, true],
    hint: "Selisih banyak kursi: 2, 3, 4, 5, … Untuk harga, kelompokkan baris berpasangan: (1–2), (3–4), (5–6), (7–8), (9–10).",
    pembahasan: "<h4>Konsep</h4><p>Dua pola sekaligus: banyak kursi naik dengan <b>selisih yang bertambah 1</b> (2, 3, 4, …), sedangkan harga tiket turun <b>per dua baris</b>, seperti tangga.</p><h4>Langkah</h4><p>Kursi: 3, 5, 8, 12, 17, 23, 30, <b>38</b>. Harga: baris 1–2 = 80 rb, 3–4 = 75 rb, 5–6 = 70 rb, 7–8 = 65 rb, 9–10 = 60 rb.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Selisih ke-6 dan ke-7 adalah 7 dan 8: 23 + 7 = 30, 30 + 8 = 38.</li><li><b>2</b> <i>Benar.</i> Baris 9 masuk kelompok 9–10 → Rp60.000.</li><li><b>3</b> <i>Salah.</i> 4 × Rp60.000 = Rp240.000, bukan Rp260.000 (260 rb = 4 × 65 rb, harga baris 7–8).</li><li><b>4</b> <i>Benar.</i> Baris 6 (Rp70.000) dan baris 7 (Rp65.000) ada di kelompok berbeda.</li></ul><p class=\"tips\"><b>Tips:</b> untuk pola \"per dua baris\", buat daftar pasangan baris dan harganya. Jangan membagi rata, karena baris 6 dan 7 jatuh di kelompok berbeda.</p>"
  },
  {
    id: "mth-14", bab: "Bilangan Real", level: 3, tipe: "pg",
    soal: "Bu Sari memiliki 4 warung, dan setiap warung membutuhkan 7 liter minyak goreng. Minyak tersedia dalam botol 5 liter seharga Rp60.000 dan kemasan 1 liter seharga Rp14.000. Jika Bu Sari membeli sekaligus untuk seluruh warungnya, biaya minimum agar kebutuhan tercukupi adalah …",
    opsi: ["Rp300.000", "Rp342.000", "Rp352.000", "Rp360.000", "Rp392.000"],
    kunci: 1,
    hint: "Kebutuhan total 28 liter. Botol 5 L lebih murah per liter (Rp12.000/L), tetapi bandingkan juga pilihan membeli lebih dari 28 liter.",
    pembahasan: "<h4>Konsep</h4><p>Soal biaya minimum: hitung harga <b>per liter</b> tiap kemasan, prioritaskan yang termurah, lalu periksa apakah membeli sedikit \"lebih\" justru lebih murah daripada pas.</p><h4>Langkah</h4><ol><li>Kebutuhan total = 4 × 7 = 28 L.</li><li>Per liter: botol 5 L = Rp12.000/L; kemasan 1 L = Rp14.000/L. Jadi sebanyak mungkin pakai botol 5 L.</li><li>5 botol (25 L) + 3 kemasan (3 L) = 300.000 + 42.000 = <b>Rp342.000</b>.</li><li>Bandingkan 6 botol (30 L) = Rp360.000, lebih mahal walau lebih banyak.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Rp300.000 = 5 botol saja, baru 25 L (tidak cukup).</li><li><b>C</b> Rp352.000 = 4 botol + 8 kemasan, kurang optimal.</li><li><b>D</b> Rp360.000 = 6 botol, berlebih 2 L dan lebih mahal.</li><li><b>E</b> Rp392.000 = 28 kemasan 1 L, termahal.</li></ul><p class=\"tips\"><b>Tips:</b> karena dibeli <i>sekaligus</i>, hitung dari total 28 L. Kalau dihitung per warung (7 L = 1 botol + 2 kemasan = Rp88.000 × 4 = Rp352.000), hasilnya lebih mahal.</p>"
  },
  {
    id: "mth-15", bab: "Bilangan Real", level: 2, tipe: "pg",
    stimulus: "<p>Aturan diskon sebuah toko:</p><p>(1) Belanja minimal Rp500.000 mendapat diskon 10%.<br>(2) Belanja di atas Rp1.000.000 mendapat tambahan diskon 5% dari harga <i>setelah</i> diskon pertama.</p>",
    soal: "Rani membeli 3 kemeja seharga Rp250.000 per buah dan 1 pasang sepatu seharga Rp450.000. Biaya yang harus dibayar Rani adalah …",
    opsi: ["Rp1.020.000", "Rp1.026.000", "Rp1.080.000", "Rp1.140.000", "Rp1.200.000"],
    kunci: 1,
    hint: "Hitung total belanja, terapkan diskon 10%, lalu terapkan 5% dari hasil itu (bukan langsung 15%).",
    pembahasan: "<h4>Konsep</h4><p>Diskon bertingkat dihitung <b>berurutan</b>: diskon kedua diambil dari harga <i>setelah</i> diskon pertama. Jadi 10% lalu 5% ≠ 15%, melainkan × 0,9 × 0,95 = × 0,855 (setara 14,5%).</p><h4>Langkah</h4><ol><li>Total = 3 × 250.000 + 450.000 = 1.200.000 (≥ 500 rb dan &gt; 1 juta → dapat dua diskon).</li><li>Diskon 1: 1.200.000 × 0,9 = 1.080.000.</li><li>Diskon 2: 1.080.000 × 0,95 = <b>Rp1.026.000</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Rp1.020.000 = langsung diskon 15% dari 1,2 juta.</li><li><b>C</b> Rp1.080.000 = hanya diskon pertama.</li><li><b>D</b> Rp1.140.000 = hanya diskon 5%.</li><li><b>E</b> Rp1.200.000 = tanpa diskon.</li></ul><p class=\"tips\"><b>Tips:</b> diskon a% lalu b% = kalikan (1 − a)(1 − b). Hasilnya selalu sedikit lebih mahal daripada diskon (a + b)% sekaligus.</p>"
  },
  {
    id: "mth-16", bab: "Persamaan dan Pertidaksamaan Linear", level: 3, tipe: "pg",
    soal: "Toko \"Langkah\" menjual sepatu model A (beli Rp150.000, jual Rp200.000) dan model B (beli Rp250.000, jual Rp350.000). Toko hanya dapat menampung paling banyak 120 pasang sepatu dan modalnya Rp24.000.000. Keuntungan maksimum yang dapat diperoleh adalah …",
    opsi: ["Rp6.000.000", "Rp9.000.000", "Rp9.600.000", "Rp10.000.000", "Rp12.000.000"],
    kunci: 2,
    hint: "Kendala: x + y ≤ 120 dan 150x + 250y ≤ 24.000 (dalam ribuan) → 3x + 5y ≤ 480. Keuntungan: 50x + 100y (ribuan). Uji semua titik pojok, termasuk titik pada sumbu.",
    pembahasan: "<h4>Konsep</h4><p>Program linear dengan dua kendala (tempat dan modal). Fungsi tujuan adalah <b>keuntungan</b> (jual − beli), bukan harga jual. Uji <b>semua</b> titik pojok, karena titik potong tidak selalu maksimum.</p><h4>Langkah</h4><ol><li>Untung: A = 50 rb, B = 100 rb → f = 50x + 100y (ribu).</li><li>Tempat: x + y ≤ 120. Modal: 150x + 250y ≤ 24.000 → 3x + 5y ≤ 480.</li><li>Titik pojok: (120, 0) → 6.000; potong: 3(120 − y) + 5y = 480 → y = 60, x = 60 → 9.000; (0, 96) → 9.600.</li><li>Maksimum <b>Rp9.600.000</b> (96 pasang model B saja).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Rp6.000.000 = 120 pasang model A saja.</li><li><b>B</b> Rp9.000.000 = titik potong. Jebakan: titik potong dianggap pasti maksimum.</li><li><b>D</b> Rp10.000.000 = 100 pasang B, melanggar modal (100 × 250 rb = 25 juta).</li><li><b>E</b> Rp12.000.000 = 120 pasang B, melanggar modal.</li></ul><p class=\"tips\"><b>Tips:</b> model B memberi untung 2× model A tapi modalnya &lt; 2× (250 vs 150). Jadi B lebih efisien per rupiah modal, wajar kalau maksimum ada di \"semua B\".</p>"
  },
  {
    id: "mth-17", bab: "Persamaan dan Pertidaksamaan Linear", level: 3, tipe: "kategori",
    stimulus: "<p>Sebuah dispenser berisi 12 liter air. Tombol P mengeluarkan 250 mL setiap kali ditekan, sedangkan tombol Q mengeluarkan 500 mL setiap kali ditekan.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Jika perbandingan banyak penekanan tombol P dan Q adalah 2 : 3, volume air yang keluar mungkin 4 liter.",
      "Dalam 10 kali penekanan tombol, air yang keluar tidak mungkin lebih dari 5 liter.",
      "Dispenser yang penuh dapat dikosongkan tepat dengan 20 kali penekanan tombol.",
      "Dispenser yang penuh dapat dikosongkan tepat dengan 30 kali penekanan tombol."
    ],
    kunci: [true, true, false, true],
    hint: "Misalkan P ditekan p kali dan Q ditekan q kali: volume = 0,25p + 0,5q liter. Untuk mengosongkan 12 L: p + 2q = 48.",
    pembahasan: "<h4>Konsep</h4><p>Misalkan p = jumlah tekan P (0,25 L), q = jumlah tekan Q (0,5 L). Volume = 0,25p + 0,5q. Agar mudah, kalikan 4: <b>p + 2q = 4 × volume</b>. Ingat p dan q harus bilangan cacah.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> p = 2k, q = 3k → 0,5k + 1,5k = 2k = 4 → k = 2 (p = 4, q = 6). Bilangan bulat, jadi mungkin.</li><li><b>2</b> <i>Benar.</i> Paling banyak jika semua 10 tekanan memakai Q: 10 × 0,5 = 5 L. Tidak mungkin lebih.</li><li><b>3</b> <i>Salah.</i> 12 L butuh p + 2q = 48 dengan p + q = 20 → q = 28 &gt; 20 (mustahil). Maksimal 20 tekanan hanya 10 L.</li><li><b>4</b> <i>Benar.</i> p + q = 30 dan p + 2q = 48 → q = 18, p = 12 (12 × 0,25 + 18 × 0,5 = 3 + 9 = 12 L ✔).</li></ul><p class=\"tips\"><b>Tips:</b> untuk \"mungkin/tidak mungkin\", cek <b>batas ekstrem</b> dulu (semua P atau semua Q). Dalam 20 tekanan isinya hanya 5–10 L, jadi 12 L jelas di luar jangkauan.</p>"
  },

  // ===================== GEOMETRI & TRIGONOMETRI =====================
  {
    id: "mth-18", bab: "Pengukuran", level: 2, tipe: "kategori",
    stimulus: "<p>Sebuah taman berbentuk seperempat lingkaran dengan pusat O dan jari-jari 14 m (gunakan π = 22/7). Titik A dan B adalah ujung-ujung busur taman.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Panjang busur AB adalah 22 m.",
      "Luas taman adalah 154 m<sup>2</sup>.",
      "Keliling taman adalah 36 m.",
      "Luas tembereng (daerah antara busur AB dan tali busur AB) adalah 56 m<sup>2</sup>."
    ],
    kunci: [true, true, false, true],
    hint: "Seperempat lingkaran: busur = ¼ × 2πr, luas = ¼ × πr<sup>2</sup>. Keliling juring = busur + 2 jari-jari. Tembereng = luas juring − luas segitiga OAB.",
    pembahasan: "<h4>Konsep</h4><p>Seperempat lingkaran (juring 90°): busur = ¼ × 2πr, luas = ¼ × πr². <b>Keliling</b> juring = busur + <b>dua jari-jari</b>. Tembereng = luas juring − luas segitiga.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> ¼ × 2 × 22/7 × 14 = 22 m.</li><li><b>2</b> <i>Benar.</i> ¼ × 22/7 × 14 × 14 = 154 m².</li><li><b>3</b> <i>Salah.</i> Keliling = 22 + 14 + 14 = 50 m. Nilai 36 m hanya busur + satu jari-jari.</li><li><b>4</b> <i>Benar.</i> Segitiga OAB siku-siku di O: ½ × 14 × 14 = 98 m². Tembereng = 154 − 98 = 56 m².</li></ul><p class=\"tips\"><b>Tips:</b> \"keliling\" bangun = panjang seluruh tepinya. Bayangkan memagari taman; dua sisi lurus (jari-jari) juga perlu dipagari.</p>"
  },
  {
    id: "mth-19", bab: "Perbandingan Trigonometri", level: 3, tipe: "kategori",
    stimulus: "<p>Pada segitiga PQR, RS adalah garis tinggi dari R ke sisi PQ (S terletak pada PQ). Diketahui PR = 15 cm, SQ = 5 cm, dan sin ∠P = 4/5.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Panjang RS adalah 12 cm.",
      "Panjang QR adalah 13 cm.",
      "Nilai cos ∠P adalah 3/4.",
      "Luas segitiga PQR adalah 84 cm<sup>2</sup>."
    ],
    kunci: [true, true, false, true],
    hint: "Pada segitiga siku-siku PSR: sin P = RS/PR. Cari PS dengan Pythagoras, lalu gunakan segitiga siku-siku RSQ untuk mencari QR.",
    pembahasan: "<h4>Konsep</h4><p>Garis tinggi RS membagi segitiga PQR menjadi dua segitiga <b>siku-siku</b> (di S). Pada segitiga PSR: sin P = RS/PR, cos P = PS/PR. Luas = ½ × alas × tinggi.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> RS = PR × sin P = 15 × 4/5 = 12 cm.</li><li><b>2</b> <i>Benar.</i> Segitiga RSQ: QR = √(12² + 5²) = √169 = 13 cm (tripel 5-12-13).</li><li><b>3</b> <i>Salah.</i> PS = √(15² − 12²) = 9 → cos P = 9/15 = 3/5. Nilai 3/4 adalah tan P (depan/samping = 12/9 = 4/3, kebalikannya 3/4).</li><li><b>4</b> <i>Benar.</i> PQ = PS + SQ = 9 + 5 = 14 → luas = ½ × 14 × 12 = 84 cm².</li></ul><p class=\"tips\"><b>Tips:</b> sin = 4/5 berarti segitiga 3-4-5. Dengan miring 15, sisi-sisinya 9-12-15, jadi tidak perlu menghitung akar.</p>"
  },

  // ===================== DATA =====================
  {
    id: "mth-20", bab: "Data", level: 3, tipe: "kategori",
    stimulus: "<p>Sebuah toko memiliki stok beras 5 kuintal pada Senin pagi. Stok akhir setiap hari = stok hari sebelumnya + pasokan − penjualan.</p><table><tr><th>Hari</th><th>Pasokan (kuintal)</th><th>Terjual (kuintal)</th></tr><tr><td>Senin</td><td>6</td><td>4</td></tr><tr><td>Selasa</td><td>8</td><td>10</td></tr><tr><td>Rabu</td><td>5</td><td>3</td></tr><tr><td>Kamis</td><td>4</td><td>7</td></tr><tr><td>Jumat</td><td>9</td><td>5</td></tr></table>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Stok akhir terbanyak terjadi pada hari Jumat, yaitu 8 kuintal.",
      "Stok akhir hari Selasa adalah 5 kuintal.",
      "Rata-rata stok akhir selama lima hari adalah 6,2 kuintal.",
      "Total penjualan selama lima hari lebih besar daripada total pasokan."
    ],
    kunci: [true, true, true, false],
    hint: "Hitung stok akhir hari demi hari dalam satu kolom baru: 5 + 6 − 4 = 7, lalu lanjutkan.",
    pembahasan: "<h4>Konsep</h4><p>Stok berantai: stok akhir hari ini = stok akhir kemarin + pasokan − terjual. Hitung <b>berurutan</b> hari demi hari; satu kesalahan di awal akan merambat ke hari berikutnya.</p><h4>Langkah</h4><p>Senin 5 + 6 − 4 = 7 · Selasa 7 + 8 − 10 = 5 · Rabu 5 + 5 − 3 = 7 · Kamis 7 + 4 − 7 = 4 · Jumat 4 + 9 − 5 = 8.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Stok tertinggi 8 kuintal, hari Jumat.</li><li><b>2</b> <i>Benar.</i> Selasa = 5 kuintal.</li><li><b>3</b> <i>Benar.</i> (7 + 5 + 7 + 4 + 8)/5 = 31/5 = 6,2.</li><li><b>4</b> <i>Salah.</i> Pasokan = 6 + 8 + 5 + 4 + 9 = 32; terjual = 4 + 10 + 3 + 7 + 5 = 29. Penjualan lebih <i>kecil</i>. Cek: stok naik dari 5 ke 8 = 32 − 29 ✔.</li></ul><p class=\"tips\"><b>Tips:</b> stok akhir − stok awal = total pasokan − total terjual. Rumus ini bisa dipakai untuk mengecek semua hitunganmu sekaligus.</p>"
  }
]};
