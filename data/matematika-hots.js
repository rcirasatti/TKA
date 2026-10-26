// Paket HOTS Matematika — soal cerita & penalaran bergaya tryout TKA (bukan salinan; angka dan konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["matematika-hots"] = { soal: [

  // ===================== BILANGAN & LOGIKA =====================
  {
    id: "mth-01", bab: "Bilangan & Logika", level: 2, tipe: "pg",
    soal: "Dua petugas mendata kucing di sebuah penampungan. Menurut petugas pertama, ada 45 ekor kucing dan 18 ekor di antaranya jantan. Menurut petugas kedua, ada 25 ekor kucing berbulu oranye dan sisanya berbulu putih. Jika terdapat 8 ekor kucing jantan berbulu oranye, banyak kucing betina berbulu putih adalah …",
    opsi: ["8 ekor", "10 ekor", "12 ekor", "15 ekor", "17 ekor"],
    kunci: 1,
    hint: "Buat tabel 2×2: baris jantan/betina, kolom oranye/putih. Isi yang diketahui, lalu lengkapi dengan pengurangan.",
    pembahasan: "<table><tr><th></th><th>Oranye</th><th>Putih</th><th>Total</th></tr><tr><td>Jantan</td><td>8</td><td>10</td><td>18</td></tr><tr><td>Betina</td><td>17</td><td><b>10</b></td><td>27</td></tr><tr><td>Total</td><td>25</td><td>20</td><td>45</td></tr></table><p>Betina = 45 − 18 = 27. Betina oranye = 25 − 8 = 17. Betina putih = 27 − 17 = <b>10 ekor</b>.</p>"
  },
  {
    id: "mth-02", bab: "Bilangan & Logika", level: 2, tipe: "pg",
    soal: "Koperasi sekolah memiliki sejumlah buku tulis. Pada hari pertama terjual 10 buku, pada hari kedua terjual 3/4 dari sisa buku, dan pada hari ketiga terjual 5 buku. Jika sekarang tersisa 3 buku, banyak buku tulis mula-mula adalah …",
    opsi: ["40", "42", "44", "46", "48"],
    kunci: 1,
    hint: "Kerjakan mundur dari akhir: sebelum hari ketiga ada 3 + 5 buku. Jumlah itu adalah 1/4 dari sisa setelah hari pertama.",
    pembahasan: "<p>Sebelum hari ke-3: 3 + 5 = 8 buku.</p><p>Hari ke-2 terjual 3/4, sehingga 8 buku = 1/4 sisa setelah hari ke-1 → sisa setelah hari ke-1 = 32 buku.</p><p>Mula-mula = 32 + 10 = <b>42 buku</b>.</p><p>Cek: 42 − 10 = 32 → terjual 24, sisa 8 → terjual 5, sisa 3 ✔.</p>"
  },
  {
    id: "mth-03", bab: "Bilangan & Logika", level: 2, tipe: "pg",
    soal: "Diketahui a = <sup>8</sup>√3, b = <sup>6</sup>√2, dan c = <sup>12</sup>√5. Nilai a<sup>24</sup> + b<sup>24</sup> − c<sup>24</sup> adalah …",
    opsi: ["18", "20", "28", "43", "68"],
    kunci: 0,
    hint: "Tulis sebagai pangkat pecahan: a = 3<sup>1/8</sup>, sehingga a<sup>24</sup> = 3<sup>24/8</sup>.",
    pembahasan: "<p>a<sup>24</sup> = 3<sup>24/8</sup> = 3<sup>3</sup> = 27<br>b<sup>24</sup> = 2<sup>24/6</sup> = 2<sup>4</sup> = 16<br>c<sup>24</sup> = 5<sup>24/12</sup> = 5<sup>2</sup> = 25</p><p>27 + 16 − 25 = <b>18</b>.</p>"
  },
  {
    id: "mth-04", bab: "Bilangan & Logika", level: 2, tipe: "pg",
    soal: "Bentuk (3 + 1/√2) / (3 − 1/√2) dapat dinyatakan sebagai a + b√2 dengan a dan b bilangan rasional. Nilai 17a + 17b adalah …",
    opsi: ["17", "19", "23", "25", "29"],
    kunci: 3,
    hint: "Kalikan pembilang dan penyebut dengan √2 dulu agar menjadi (3√2 + 1)/(3√2 − 1), lalu rasionalkan dengan sekawan (3√2 + 1).",
    pembahasan: "<p>Kalikan atas-bawah dengan √2: (3√2 + 1)/(3√2 − 1).</p><p>Kalikan sekawan: (3√2 + 1)<sup>2</sup> / (18 − 1) = (18 + 6√2 + 1)/17 = (19 + 6√2)/17.</p><p>a = 19/17, b = 6/17 → 17a + 17b = 19 + 6 = <b>25</b>.</p>"
  },
  {
    id: "mth-05", bab: "Bilangan & Logika", level: 3, tipe: "pg",
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
    pembahasan: "<p>(1) 3 ganjil. Ganjil × ganjil = ganjil, jadi 3x genap hanya jika x genap → (1) saja <b>cukup</b>.</p><p>(2) x + 2 genap ⇔ x genap (menambah 2 tidak mengubah sifat genap/ganjil) → (2) saja juga <b>cukup</b>.</p><p>Jadi jawabannya: <b>masing-masing pernyataan saja sudah cukup</b>. Jebakan: banyak siswa langsung memilih \"dua pernyataan bersama-sama\".</p>"
  },
  {
    id: "mth-06", bab: "Bilangan & Logika", level: 3, tipe: "pg",
    stimulus: "<p>Enam sahabat, yaitu Anton, Beni, Citra, Dewi, Eka, dan Fani, duduk mengelilingi meja bundar dengan 6 kursi. Semua menghadap ke tengah meja. (Anggap \"kanan\" berarti satu kursi searah jarum jam, dan \"kiri\" berarti satu kursi berlawanan arah jarum jam.)</p><p>• Anton duduk berhadapan dengan Beni.<br>• Citra duduk tepat di sebelah kiri Anton.<br>• Dewi duduk tepat di sebelah kanan Beni.<br>• Eka duduk bersebelahan dengan Anton.</p>",
    soal: "Siapakah yang duduk di antara Anton dan Dewi (melalui sisi yang hanya berisi satu orang)?",
    opsi: ["Beni", "Citra", "Eka", "Fani", "Tidak ada"],
    kunci: 1,
    hint: "Beri nomor kursi 1–6 searah jarum jam. Letakkan Anton di kursi 1, sehingga Beni di kursi 4 (berhadapan). Lanjutkan dengan petunjuk berikutnya.",
    pembahasan: "<p>Kursi 1–6 searah jarum jam. Anton = 1, Beni = 4 (berhadapan).</p><p>Citra di kiri Anton (berlawanan jarum jam) → kursi 6. Dewi di kanan Beni (searah jarum jam) → kursi 5. Eka bersebelahan dengan Anton; kursi 6 sudah terisi, jadi Eka = 2. Fani = 3.</p><p>Urutan: Anton(1) – Eka(2) – Fani(3) – Beni(4) – Dewi(5) – Citra(6). Antara Anton dan Dewi lewat kursi 6 → <b>Citra</b>.</p>"
  },

  // ===================== ALJABAR & FUNGSI =====================
  {
    id: "mth-07", bab: "Aljabar & Fungsi", level: 2, tipe: "pg",
    soal: "Rara berangkat ke sekolah setiap pukul 06.15 dengan motor. Jika ia berkendara dengan kecepatan 30 km/jam, ia tiba 10 menit setelah bel masuk. Jika kecepatannya 45 km/jam, ia tiba 5 menit sebelum bel. Bel masuk sekolah berbunyi pukul …",
    opsi: ["06.40", "06.45", "06.50", "06.55", "07.00"],
    kunci: 2,
    hint: "Selisih waktu tempuh kedua kecepatan = 10 + 5 = 15 menit = 1/4 jam. Susun d/30 − d/45 = 1/4 untuk mencari jarak d.",
    pembahasan: "<p>d/30 − d/45 = 1/4 → (3d − 2d)/90 = 1/4 → d = 22,5 km.</p><p>Dengan 30 km/jam: waktu = 22,5/30 = 0,75 jam = 45 menit → tiba 07.00, terlambat 10 menit → bel pukul <b>06.50</b>.</p><p>Cek dengan 45 km/jam: 30 menit → tiba 06.45, yaitu 5 menit sebelum 06.50 ✔.</p>"
  },
  {
    id: "mth-08", bab: "Aljabar & Fungsi", level: 2, tipe: "pg",
    soal: "Untuk mengangkut 120 ton barang sekaligus, sebuah perusahaan menyewa 30 truk dengan tiga jenis kapasitas: jenis I (2 ton), jenis II (4 ton), dan jenis III (6 ton). Jika truk jenis I yang disewa 6 unit, banyak truk jenis III yang disewa adalah …",
    opsi: ["3", "6", "9", "12", "18"],
    kunci: 1,
    hint: "Misalkan jenis II = b dan jenis III = c. Dari jumlah truk: b + c = 24. Dari kapasitas: 6×2 + 4b + 6c = 120.",
    pembahasan: "<p>b + c = 30 − 6 = 24.<br>12 + 4b + 6c = 120 → 4b + 6c = 108.</p><p>Substitusi b = 24 − c: 96 − 4c + 6c = 108 → 2c = 12 → c = <b>6</b> (dan b = 18).</p>"
  },
  {
    id: "mth-09", bab: "Aljabar & Fungsi", level: 2, tipe: "pg",
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
    pembahasan: "<p>Kondisi 1: y = 40x + 10 → <b>40x − y = −10</b>.</p><p>Kondisi 2: y = 45(x − 1) + 30 = 45x − 15 → <b>45x − y = 15</b>.</p><p>(Jika diselesaikan: x = 5 bus, y = 210 siswa.)</p>"
  },
  {
    id: "mth-10", bab: "Aljabar & Fungsi", level: 2, tipe: "pg",
    soal: "Pembuatan kerajinan dari x kg bambu melalui dua mesin. Mesin pertama menghasilkan rangka p = f(x) = x<sup>2</sup> + 20x − 1.000. Mesin kedua mengubah rangka menjadi produk jadi h(p) = p/50 + 4. Jika tersedia 40 kg bambu, banyak produk jadi yang dihasilkan adalah …",
    opsi: ["28", "30", "32", "34", "36"],
    kunci: 2,
    hint: "Ini fungsi komposisi (h ∘ f)(40): hitung f(40) dulu, lalu masukkan hasilnya ke h.",
    pembahasan: "<p>f(40) = 1.600 + 800 − 1.000 = 1.400.</p><p>h(1.400) = 1.400/50 + 4 = 28 + 4 = <b>32</b>.</p>"
  },
  {
    id: "mth-11", bab: "Aljabar & Fungsi", level: 2, tipe: "mcma",
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
    pembahasan: "<p>y = x<sup>2</sup> + 2x + 1 = (x + 1)<sup>2</sup> → puncak (−1, 0).<br>y = x<sup>2</sup> − 6x + 4 = (x − 3)<sup>2</sup> − 5 → puncak <b>(3, −5)</b> ✔.</p><p>Puncak berpindah dari (−1, 0) ke (3, −5): <b>kanan 4, bawah 5</b> ✔.</p><p>Sumbu simetri x = 3, bukan −3 ✘. Saat x = 0, y = 4 → memotong sumbu y di (0, 4) ✔. Nilai minimum = −5, bukan 4 ✘.</p>"
  },

  // ===================== BARISAN, DERET & SOAL CERITA =====================
  {
    id: "mth-12", bab: "Barisan & Soal Cerita", level: 2, tipe: "pg",
    soal: "Seorang siswa mengamati tinggi tanaman selama 12 hari. Tinggi tanaman naik mengikuti pola tetap selama 8 hari pertama, lalu tidak bertambah lagi. Tinggi pada enam hari pertama: 5 mm, 6 mm, 9 mm, 14 mm, 21 mm, 30 mm. Tinggi tanaman pada hari ke-12 adalah …",
    opsi: ["41 mm", "54 mm", "67 mm", "69 mm", "105 mm"],
    kunci: 1,
    hint: "Lihat selisih antarhari: 1, 3, 5, 7, 9, … Lanjutkan sampai hari ke-8 saja, karena setelah itu tinggi tetap.",
    pembahasan: "<p>Selisih: 1, 3, 5, 7, 9 → berikutnya 11, 13.</p><p>Hari 7 = 30 + 11 = 41 mm. Hari 8 = 41 + 13 = 54 mm.</p><p>Setelah hari ke-8 tinggi tetap → hari ke-12 = <b>54 mm</b>.</p><p>Jebakan: meneruskan pola sampai hari ke-12 (69 → 86 → 105 → 126 mm).</p>"
  },
  {
    id: "mth-13", bab: "Barisan & Soal Cerita", level: 3, tipe: "kategori",
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
    pembahasan: "<p>1. Selisih 2, 3, 4, 5, 6, 7, 8 → baris 6 = 23, baris 7 = 30, baris 8 = <b>38</b> ✔.</p><p>2. Harga: baris 1–2 = 80 rb, 3–4 = 75 rb, 5–6 = 70 rb, 7–8 = 65 rb, 9–10 = <b>60 rb</b> ✔.</p><p>3. 4 × Rp60.000 = <b>Rp240.000</b>, bukan Rp260.000 → Salah.</p><p>4. Baris 6 = Rp70.000, baris 7 = Rp65.000 → lebih mahal ✔.</p>"
  },
  {
    id: "mth-14", bab: "Barisan & Soal Cerita", level: 3, tipe: "pg",
    soal: "Bu Sari memiliki 4 warung, dan setiap warung membutuhkan 7 liter minyak goreng. Minyak tersedia dalam botol 5 liter seharga Rp60.000 dan kemasan 1 liter seharga Rp14.000. Jika Bu Sari membeli sekaligus untuk seluruh warungnya, biaya minimum agar kebutuhan tercukupi adalah …",
    opsi: ["Rp300.000", "Rp342.000", "Rp352.000", "Rp360.000", "Rp392.000"],
    kunci: 1,
    hint: "Kebutuhan total 28 liter. Botol 5 L lebih murah per liter (Rp12.000/L), tetapi bandingkan juga pilihan membeli lebih dari 28 liter.",
    pembahasan: "<p>Total kebutuhan = 4 × 7 = 28 liter. Bandingkan beberapa kombinasi:</p><p>• 5 botol + 3 kemasan 1 L = 25 + 3 = 28 L → 300.000 + 42.000 = <b>Rp342.000</b><br>• 6 botol = 30 L → Rp360.000<br>• 4 botol + 8 kemasan = 28 L → 240.000 + 112.000 = Rp352.000<br>• 28 kemasan 1 L → Rp392.000</p><p>Biaya minimum = <b>Rp342.000</b>. (Rp300.000 hanya 25 L, tidak mencukupi.)</p>"
  },
  {
    id: "mth-15", bab: "Barisan & Soal Cerita", level: 2, tipe: "pg",
    stimulus: "<p>Aturan diskon sebuah toko:</p><p>(1) Belanja minimal Rp500.000 mendapat diskon 10%.<br>(2) Belanja di atas Rp1.000.000 mendapat tambahan diskon 5% dari harga <i>setelah</i> diskon pertama.</p>",
    soal: "Rani membeli 3 kemeja seharga Rp250.000 per buah dan 1 pasang sepatu seharga Rp450.000. Biaya yang harus dibayar Rani adalah …",
    opsi: ["Rp1.020.000", "Rp1.026.000", "Rp1.080.000", "Rp1.140.000", "Rp1.200.000"],
    kunci: 1,
    hint: "Hitung total belanja, terapkan diskon 10%, lalu terapkan 5% dari hasil itu (bukan langsung 15%).",
    pembahasan: "<p>Total = 3 × 250.000 + 450.000 = 1.200.000 (memenuhi kedua syarat).</p><p>Diskon 1: 1.200.000 × 0,9 = 1.080.000.<br>Diskon 2: 1.080.000 × 0,95 = <b>Rp1.026.000</b>.</p><p>Jebakan: diskon langsung 15% → Rp1.020.000 (salah, karena diskon kedua dihitung dari harga setelah diskon pertama).</p>"
  },
  {
    id: "mth-16", bab: "Barisan & Soal Cerita", level: 3, tipe: "pg",
    soal: "Toko \"Langkah\" menjual sepatu model A (beli Rp150.000, jual Rp200.000) dan model B (beli Rp250.000, jual Rp350.000). Toko hanya dapat menampung paling banyak 120 pasang sepatu dan modalnya Rp24.000.000. Keuntungan maksimum yang dapat diperoleh adalah …",
    opsi: ["Rp6.000.000", "Rp9.000.000", "Rp9.600.000", "Rp10.000.000", "Rp12.000.000"],
    kunci: 2,
    hint: "Kendala: x + y ≤ 120 dan 150x + 250y ≤ 24.000 (dalam ribuan) → 3x + 5y ≤ 480. Keuntungan: 50x + 100y (ribuan). Uji semua titik pojok, termasuk titik pada sumbu.",
    pembahasan: "<p>Titik pojok daerah penyelesaian:</p><p>• (120, 0) → 50 × 120 = 6.000 rb<br>• Titik potong: x = 120 − y → 3(120 − y) + 5y = 480 → y = 60, x = 60 → 3.000 + 6.000 = 9.000 rb<br>• (0, 96) → 100 × 96 = <b>9.600 rb</b></p><p>Keuntungan maksimum = <b>Rp9.600.000</b> (seluruhnya model B).</p><p>Jebakan: menganggap titik potong pasti maksimum (Rp9.000.000).</p>"
  },
  {
    id: "mth-17", bab: "Barisan & Soal Cerita", level: 3, tipe: "kategori",
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
    pembahasan: "<p>1. p = 2k, q = 3k → 0,5k + 1,5k = 2k = 4 → k = 2 (p = 4, q = 6) ✔.</p><p>2. Paling banyak jika semua tombol Q: 10 × 0,5 = 5 L ✔.</p><p>3. p + q = 20 dan p + 2q = 48 → q = 28 &gt; 20, tidak mungkin (maksimal 20 × 0,5 = 10 L) → Salah.</p><p>4. p + q = 30 dan p + 2q = 48 → q = 18, p = 12 ✔.</p>"
  },

  // ===================== GEOMETRI & TRIGONOMETRI =====================
  {
    id: "mth-18", bab: "Geometri & Trigonometri", level: 2, tipe: "kategori",
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
    pembahasan: "<p>1. Busur = ¼ × 2 × 22/7 × 14 = 22 m ✔.</p><p>2. Luas = ¼ × 22/7 × 196 = 154 m<sup>2</sup> ✔.</p><p>3. Keliling = 22 + 14 + 14 = <b>50 m</b>, bukan 36 m (lupa menambah dua jari-jari) → Salah.</p><p>4. Segitiga OAB siku-siku: ½ × 14 × 14 = 98 → tembereng = 154 − 98 = 56 m<sup>2</sup> ✔.</p>"
  },
  {
    id: "mth-19", bab: "Geometri & Trigonometri", level: 3, tipe: "kategori",
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
    pembahasan: "<p>1. RS = PR × sin P = 15 × 4/5 = 12 cm ✔.</p><p>2. QR = √(RS<sup>2</sup> + SQ<sup>2</sup>) = √(144 + 25) = 13 cm ✔.</p><p>3. PS = √(225 − 144) = 9 → cos P = PS/PR = 9/15 = <b>3/5</b>, bukan 3/4 → Salah.</p><p>4. PQ = 9 + 5 = 14 → luas = ½ × 14 × 12 = 84 cm<sup>2</sup> ✔.</p>"
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
    pembahasan: "<p>Stok akhir: Senin 5 + 6 − 4 = 7; Selasa 7 + 8 − 10 = 5; Rabu 5 + 5 − 3 = 7; Kamis 7 + 4 − 7 = 4; Jumat 4 + 9 − 5 = 8.</p><p>1. Terbanyak Jumat = 8 ✔.<br>2. Selasa = 5 ✔.<br>3. Rata-rata = (7 + 5 + 7 + 4 + 8)/5 = 31/5 = 6,2 ✔.<br>4. Total pasokan = 32, total terjual = 29 → penjualan lebih <i>kecil</i> → Salah.</p>"
  }
]};
