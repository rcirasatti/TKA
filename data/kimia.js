// Bank soal Kimia — urutan mengikuti kerangka asesmen TKA SMA (Pusmendik):
// Kimia Dasar → Kimia Analitik → Kimia Fisik → Kimia Organik, dari Level 1 ke Level 3.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL.kimia = { soal: [

  // ===================== KIMIA DASAR =====================
  {
    id: "kim-01", bab: "Struktur Atom", level: 1, tipe: "pg",
    soal: "Jumlah proton, neutron, dan elektron pada ion <sup>27</sup><sub>13</sub>Al<sup>3+</sup> berturut-turut adalah …",
    opsi: ["13, 14, 13", "13, 14, 10", "13, 27, 10", "14, 13, 10", "13, 14, 16"],
    kunci: 1,
    hint: "Nomor atom = proton, nomor massa = proton + neutron. Muatan 3+ berarti atom melepas 3 elektron.",
    pembahasan: "<h4>Konsep</h4><p>Pada notasi <sup>A</sup><sub>Z</sub>X: Z (bawah) = nomor atom = jumlah <b>proton</b>; A (atas) = nomor massa = proton + <b>neutron</b>. <b>Elektron</b> = proton − muatan ion. Muatan positif berarti atom <i>melepas</i> elektron.</p><h4>Langkah</h4><ol><li>Proton = Z = <b>13</b>.</li><li>Neutron = A − Z = 27 − 13 = <b>14</b>.</li><li>Elektron = 13 − 3 = <b>10</b> (ion 3+ kehilangan 3 elektron).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 13, 14, 13: elektron atom <i>netral</i>; muatan 3+ diabaikan.</li><li><b>C</b> 13, 27, 10: nomor massa dianggap jumlah neutron.</li><li><b>D</b> 14, 13, 10: proton dan neutron tertukar.</li><li><b>E</b> 13, 14, 16: elektron malah <i>ditambah</i> 3. Itu berlaku untuk ion negatif (3−).</li></ul><p class=\"tips\"><b>Tips:</b> ion positif = kehilangan elektron (elektron &lt; proton); ion negatif = mendapat elektron (elektron &gt; proton). Proton dan neutron tidak pernah berubah oleh muatan.</p>"
  },
  {
    id: "kim-02", bab: "Teori Model Atom", level: 1, tipe: "pg",
    soal: "Pada percobaan hamburan sinar alfa oleh lempeng emas tipis, sebagian besar sinar diteruskan, tetapi sebagian kecil dibelokkan atau dipantulkan. Kesimpulan Rutherford dari percobaan ini adalah …",
    opsi: [
      "Atom berbentuk bola pejal bermuatan positif dengan elektron tersebar merata",
      "Elektron bergerak pada lintasan dengan tingkat energi tertentu",
      "Atom sebagian besar ruang kosong dengan inti kecil bermuatan positif yang memusatkan massa atom",
      "Atom tidak dapat dibagi lagi menjadi partikel yang lebih kecil",
      "Posisi elektron hanya dapat ditentukan sebagai peluang (orbital)"
    ],
    kunci: 2,
    hint: "Sinar yang tembus menunjukkan banyak ruang kosong; sinar yang terpantul menunjukkan ada sesuatu yang kecil, padat, dan bermuatan sama dengan sinar alfa.",
    pembahasan: "<h4>Konsep</h4><p>Setiap hasil pengamatan hamburan sinar alfa punya arti sendiri. Sinar alfa bermuatan <b>positif</b> dan bermassa cukup besar.</p><h4>Langkah</h4><ol><li>Sebagian besar sinar <b>tembus lurus</b> → tidak menabrak apa-apa → atom sebagian besar <b>ruang kosong</b>.</li><li>Sebagian kecil <b>dibelokkan/dipantulkan</b> → menabrak sesuatu yang kecil, padat, dan bermuatan <b>positif</b> (menolak alfa) → <b>inti atom</b> yang memusatkan massa.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Model <b>Thomson</b> (roti kismis). Justru dibantah percobaan ini: bola pejal tidak akan memantulkan alfa.</li><li><b>B</b> Model <b>Bohr</b> (tingkat energi), dari spektrum atom hidrogen.</li><li><b>D</b> Model <b>Dalton</b> (atom tak terbagi).</li><li><b>E</b> Model <b>mekanika kuantum</b> (orbital).</li></ul><p class=\"tips\"><b>Tips:</b> urutan model atom: Dalton → Thomson → Rutherford → Bohr → Mekanika kuantum. Hafalkan satu kata kunci per tokoh: <i>pejal, kismis, inti, lintasan, orbital</i>.</p>"
  },
  {
    id: "kim-03", bab: "Sistem dan Sifat Periodik Unsur", level: 1, tipe: "pg",
    soal: "Unsur X memiliki nomor atom 17. Dalam sistem periodik, unsur X terletak pada …",
    opsi: ["Periode 3, golongan VIIA", "Periode 3, golongan VA", "Periode 2, golongan VIIA", "Periode 7, golongan IIIA", "Periode 4, golongan VIIA"],
    kunci: 0,
    hint: "Tulis konfigurasi elektron per kulit (2, 8, …). Jumlah kulit = periode, elektron valensi = golongan A.",
    pembahasan: "<h4>Konsep</h4><p>Letak unsur golongan A ditentukan dari konfigurasi elektron: <b>jumlah kulit = periode</b>, <b>elektron valensi (kulit terluar) = golongan</b>.</p><h4>Langkah</h4><ol><li>Konfigurasi <sub>17</sub>X: 2, 8, 7.</li><li>3 kulit → <b>periode 3</b>.</li><li>7 elektron valensi → <b>golongan VIIA</b> (halogen; X = Cl).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Golongan VA berarti valensi 5 (nomor atom 15, P).</li><li><b>C</b> Periode 2 hanya punya 2 kulit (nomor atom 3–10); VIIA periode 2 adalah F (Z = 9).</li><li><b>D</b> Angka 7 (valensi) salah dipakai sebagai periode.</li><li><b>E</b> Periode 4 berarti 4 kulit; halogen periode 4 adalah Br (Z = 35).</li></ul><p class=\"tips\"><b>Tips:</b> isi kulit maksimal 2, 8, 8 untuk 20 unsur pertama. Untuk Z ≤ 20 konfigurasinya selalu bisa ditulis cepat dengan pola ini.</p>"
  },
  {
    id: "kim-04", bab: "Sistem dan Sifat Periodik Unsur", level: 2, tipe: "kategori",
    stimulus: "<p>Perhatikan unsur-unsur periode 3 berikut (dari kiri ke kanan): <b>Na, Mg, Al, Si, P, S, Cl</b>.</p>",
    soal: "Tentukan benar atau salah pernyataan tentang sifat periodik unsur-unsur tersebut!",
    pernyataan: [
      "Jari-jari atom semakin kecil dari Na ke Cl.",
      "Energi ionisasi secara umum semakin besar dari Na ke Cl.",
      "Cl memiliki keelektronegatifan paling besar di antara unsur tersebut.",
      "Sifat logam semakin kuat dari Na ke Cl."
    ],
    kunci: [true, true, true, false],
    hint: "Dalam satu periode, jumlah kulit tetap tetapi muatan inti bertambah, sehingga elektron makin kuat ditarik inti.",
    pembahasan: "<h4>Konsep</h4><p>Dalam satu periode dari kiri ke kanan, <b>jumlah kulit tetap</b> sementara <b>muatan inti (proton) bertambah</b>. Elektron terluar ditarik makin kuat. Semua sifat periodik bisa diturunkan dari satu fakta ini.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Tarikan inti makin kuat → elektron makin dekat → jari-jari makin kecil.</li><li><b>2</b> <i>Benar.</i> Elektron makin sulit dilepas → energi ionisasi makin besar (ada sedikit pengecualian seperti Mg &gt; Al, karena itu ditulis \"secara umum\").</li><li><b>3</b> <i>Benar.</i> Keelektronegatifan (kemampuan menarik elektron) meningkat ke kanan; Cl paling kanan, jadi paling besar.</li><li><b>4</b> <i>Salah.</i> Sifat logam = mudah melepas elektron. Karena elektron makin sulit dilepas, sifat logam makin <b>lemah</b> ke kanan (Na logam kuat, Cl nonlogam).</li></ul><p class=\"tips\"><b>Tips:</b> jari-jari dan sifat logam bergerak berlawanan arah dengan energi ionisasi dan keelektronegatifan. Hafalkan satu, yang lain tinggal dibalik.</p>"
  },
  {
    id: "kim-05", bab: "Ikatan Kimia", level: 1, tipe: "pg",
    soal: "Pasangan senyawa berikut yang keduanya berikatan ion adalah …",
    opsi: ["HCl dan NaCl", "NaCl dan MgO", "CO<sub>2</sub> dan KBr", "H<sub>2</sub>O dan CaCl<sub>2</sub>", "NH<sub>3</sub> dan MgO"],
    kunci: 1,
    hint: "Ikatan ion umumnya terbentuk antara unsur logam dan unsur nonlogam.",
    pembahasan: "<h4>Konsep</h4><p><b>Ikatan ion</b> terbentuk dari serah-terima elektron, umumnya antara <b>logam</b> (melepas elektron) dan <b>nonlogam</b> (menerima). <b>Ikatan kovalen</b> = pemakaian bersama elektron antar<b>nonlogam</b>.</p><h4>Langkah</h4><ol><li>NaCl: Na (logam) + Cl (nonlogam) → ion.</li><li>MgO: Mg (logam) + O (nonlogam) → ion.</li><li>Keduanya ion → <b>B</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> HCl kovalen (H dan Cl nonlogam). H termasuk nonlogam walau letaknya di golongan IA.</li><li><b>C</b> CO₂ kovalen.</li><li><b>D</b> H₂O kovalen.</li><li><b>E</b> NH₃ kovalen.</li></ul><p class=\"tips\"><b>Tips:</b> cukup cari satu senyawa nonlogam-nonlogam di setiap pasangan untuk menggugurkan opsi. Hanya B yang kedua senyawanya mengandung logam.</p>"
  },
  {
    id: "kim-06", bab: "Ikatan Kimia", level: 2, tipe: "mcma",
    soal: "Spesi berikut yang mengandung ikatan kovalen koordinasi adalah … (pilih semua yang benar)",
    opsi: ["NH<sub>4</sub><sup>+</sup>", "CH<sub>4</sub>", "H<sub>3</sub>O<sup>+</sup>", "H<sub>2</sub>O", "H<sub>3</sub>N–BF<sub>3</sub>"],
    kunci: [0, 2, 4],
    hint: "Ikatan kovalen koordinasi terbentuk saat pasangan elektron ikatan berasal dari SATU atom saja (biasanya dari pasangan elektron bebas).",
    pembahasan: "<h4>Konsep</h4><p><b>Kovalen koordinasi</b>: pasangan elektron ikatan berasal dari <b>satu atom saja</b>, yaitu atom yang punya pasangan elektron bebas (PEB), lalu disumbangkan ke spesi yang \"kosong\" (H⁺ atau atom kekurangan elektron seperti B pada BF₃). Ciri cepatnya: ion seperti NH₄⁺, H₃O⁺, atau senyawa adisi A–B.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ NH₄⁺ = NH₃ + H⁺. PEB pada N dipakai untuk mengikat H⁺ yang tidak punya elektron.</li><li><b>B</b> ✘ CH₄: tiap ikatan C–H mendapat 1 elektron dari C dan 1 dari H, jadi kovalen biasa.</li><li><b>C</b> ✔ H₃O⁺ = H₂O + H⁺. PEB pada O disumbangkan.</li><li><b>D</b> ✘ H₂O: ikatan O–H biasa. PEB-nya ada, tapi tidak sedang disumbangkan.</li><li><b>E</b> ✔ H₃N–BF₃: B pada BF₃ hanya punya 6 elektron (kurang oktet), lalu N menyumbangkan PEB-nya.</li></ul><p class=\"tips\"><b>Tips:</b> punya PEB saja belum cukup. Harus ada pasangan \"pemberi PEB + penerima yang kosong\" di dalam spesi itu.</p>"
  },
  {
    id: "kim-07", bab: "Geometri Molekul", level: 2, tipe: "pg",
    soal: "Diketahui nomor atom N = 7 dan H = 1. Bentuk molekul NH<sub>3</sub> adalah …",
    opsi: ["Linear", "Segitiga datar", "Tetrahedral", "Segitiga piramida", "Bentuk V"],
    kunci: 3,
    hint: "Hitung pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) di atom pusat N, lalu tentukan tipe AX<sub>n</sub>E<sub>m</sub>.",
    pembahasan: "<h4>Konsep</h4><p>Teori VSEPR: bentuk molekul ditentukan oleh jumlah <b>PEI</b> (pasangan elektron ikatan) dan <b>PEB</b> (pasangan elektron bebas) di sekitar atom pusat. PEB ikut \"mendorong\" tapi tidak terlihat sebagai atom, sehingga bentuknya berubah.</p><h4>Langkah</h4><ol><li>N: 5 elektron valensi. 3 dipakai berikatan dengan 3 H → PEI = 3.</li><li>Sisa 2 elektron = 1 PEB.</li><li>Tipe AX₃E → 4 domain (dasar tetrahedral), satu ditempati PEB → <b>segitiga piramida</b> (sudut ±107°).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Linear = AX₂ (contoh CO₂).</li><li><b>B</b> Segitiga datar = AX₃ <i>tanpa</i> PEB (contoh BF₃). Inilah jebakannya: NH₃ juga punya 3 atom terikat, tapi ada 1 PEB.</li><li><b>C</b> Tetrahedral = AX₄ (contoh CH₄).</li><li><b>E</b> Bentuk V = AX₂E₂ (contoh H₂O).</li></ul><p class=\"tips\"><b>Tips:</b> CH₄ → NH₃ → H₂O sama-sama punya 4 domain, tetapi PEB-nya 0 → 1 → 2, sehingga bentuknya tetrahedral → piramida → V.</p>"
  },
  {
    id: "kim-08", bab: "Geometri Molekul", level: 3, tipe: "kategori",
    stimulus: "<p>Diketahui nomor atom Xe = 54 (elektron valensi 8) dan F = 9. Xe dapat membentuk senyawa XeF<sub>4</sub>.</p>",
    soal: "Tentukan benar atau salah pernyataan tentang molekul XeF<sub>4</sub> berikut!",
    pernyataan: [
      "Atom pusat Xe memiliki 4 PEI dan 2 PEB.",
      "Tipe molekulnya AX<sub>4</sub>E<sub>2</sub>.",
      "Bentuk molekulnya segi empat datar.",
      "Molekul XeF<sub>4</sub> bersifat polar."
    ],
    kunci: [true, true, true, false],
    hint: "8 elektron valensi Xe: 4 dipakai untuk 4 ikatan dengan F, sisanya membentuk pasangan bebas. Ingat: PEB yang letaknya berseberangan membuat molekul simetris.",
    pembahasan: "<h4>Konsep</h4><p>VSEPR untuk atom pusat dengan oktet berkembang. Hitung PEI dan PEB, lalu susun domain sejauh mungkin. PEB menempati posisi yang paling berjauhan. Molekul <b>simetris</b> → momen dipol saling meniadakan → <b>nonpolar</b>.</p><h4>Langkah</h4><p>Xe: 8 elektron valensi; 4 dipakai mengikat 4 F → PEI = 4; sisa 4 elektron = 2 PEB → AX₄E₂, 6 domain (dasar oktahedral).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> PEI = 4, PEB = 2.</li><li><b>2</b> <i>Benar.</i> A = Xe, X₄ = 4 atom F, E₂ = 2 PEB.</li><li><b>3</b> <i>Benar.</i> Dua PEB saling berseberangan (atas-bawah), 4 F berada di satu bidang → segi empat datar.</li><li><b>4</b> <i>Salah.</i> Keempat ikatan Xe–F tersusun simetris dan PEB-nya juga berseberangan, jadi tarikan saling meniadakan → <b>nonpolar</b>. Adanya PEB tidak otomatis membuat molekul polar.</li></ul><p class=\"tips\"><b>Tips:</b> molekul nonpolar walau punya PEB: XeF₂ (linear) dan XeF₄ (segi empat datar). Keduanya simetris.</p>"
  },
  {
    id: "kim-09", bab: "Interaksi Antarmolekul", level: 2, tipe: "mcma",
    soal: "Senyawa berikut yang antarmolekulnya dapat membentuk ikatan hidrogen adalah … (pilih semua yang benar)",
    opsi: ["HF", "CH<sub>4</sub>", "NH<sub>3</sub>", "HCl", "CH<sub>3</sub>OH"],
    kunci: [0, 2, 4],
    hint: "Ikatan hidrogen terjadi jika atom H terikat langsung pada atom yang sangat elektronegatif: F, O, atau N.",
    pembahasan: "<h4>Konsep</h4><p><b>Ikatan hidrogen</b> terjadi antarmolekul jika H terikat <b>langsung</b> pada atom kecil yang sangat elektronegatif: <b>F, O, atau N</b> (ingat \"FON\").</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ HF: H langsung pada F.</li><li><b>B</b> ✘ CH₄: H terikat pada C, jadi hanya gaya London.</li><li><b>C</b> ✔ NH₃: H langsung pada N.</li><li><b>D</b> ✘ HCl: Cl memang elektronegatif, tetapi atomnya besar sehingga muatannya tersebar. Antarmolekulnya gaya dipol-dipol, bukan ikatan hidrogen.</li><li><b>E</b> ✔ CH₃OH: punya gugus O–H.</li></ul><p class=\"tips\"><b>Tips:</b> lihat <i>H-nya menempel ke mana</i>, bukan sekadar apakah molekul mengandung O/N/F. Contoh: CH₃–O–CH₃ (dimetil eter) mengandung O, tetapi tidak ada H yang menempel ke O, jadi antar-molekulnya tidak ada ikatan hidrogen.</p>"
  },
  {
    id: "kim-10", bab: "Hukum Dasar Kimia", level: 1, tipe: "pg",
    soal: "Sebanyak 12 gram logam magnesium dibakar dengan oksigen menghasilkan 20 gram magnesium oksida (MgO). Massa oksigen yang bereaksi adalah …",
    opsi: ["4 gram", "8 gram", "12 gram", "20 gram", "32 gram"],
    kunci: 1,
    hint: "Gunakan hukum kekekalan massa (Lavoisier): massa zat sebelum reaksi = massa zat sesudah reaksi.",
    pembahasan: "<h4>Konsep</h4><p><b>Hukum Lavoisier (kekekalan massa)</b>: dalam sistem tertutup, massa zat sebelum reaksi = massa zat sesudah reaksi.</p><h4>Langkah</h4><ol><li>Massa Mg + massa O₂ = massa MgO.</li><li>12 + m = 20 → m = <b>8 gram</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 4 gram: hasil pengurangan dibagi 2 (seolah O₂ dua atom).</li><li><b>C</b> 12 gram = massa magnesium.</li><li><b>D</b> 20 gram = massa MgO.</li><li><b>E</b> 32 gram = 12 + 20 (dijumlahkan) atau M<sub>r</sub> O₂.</li></ul><p class=\"tips\"><b>Tips:</b> jumlah massa pereaksi yang <i>bereaksi</i> = massa produk. Kalau ada pereaksi berlebih, sisanya tidak dihitung sebagai produk (lihat soal berikutnya).</p>"
  },
  {
    id: "kim-11", bab: "Hukum Dasar Kimia", level: 2, tipe: "pg",
    soal: "Perbandingan massa karbon dan oksigen dalam CO<sub>2</sub> adalah 3 : 8. Jika 9 gram karbon direaksikan dengan 32 gram oksigen, massa CO<sub>2</sub> yang terbentuk dan zat yang tersisa adalah …",
    opsi: [
      "41 gram CO<sub>2</sub>, tidak ada sisa",
      "33 gram CO<sub>2</sub>, sisa 8 gram oksigen",
      "33 gram CO<sub>2</sub>, sisa 8 gram karbon",
      "44 gram CO<sub>2</sub>, sisa 3 gram karbon",
      "24 gram CO<sub>2</sub>, sisa 17 gram oksigen"
    ],
    kunci: 1,
    hint: "Hukum Proust: perbandingan massa tetap. Cari dulu berapa gram oksigen yang dibutuhkan untuk 9 gram karbon.",
    pembahasan: "<h4>Konsep</h4><p><b>Hukum Proust (perbandingan tetap)</b>: unsur bergabung dengan perbandingan massa yang tetap. Jika jumlahnya tidak pas, salah satu zat akan <b>bersisa</b>. Zat yang habis duluan disebut pereaksi pembatas.</p><h4>Langkah</h4><ol><li>C : O = 3 : 8. Untuk 9 g C dibutuhkan O = 9 × 8/3 = 24 g.</li><li>O tersedia 32 g → yang bereaksi 24 g, sisa 32 − 24 = <b>8 g oksigen</b>.</li><li>CO₂ = 9 + 24 = <b>33 g</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 41 g = 9 + 32. Semua dijumlah tanpa memperhatikan perbandingan.</li><li><b>C</b> Massa CO₂ benar, tetapi zat yang tersisa tertukar. Karbon justru habis.</li><li><b>D</b> 44 g CO₂ butuh 12 g C, padahal C hanya ada 9 g.</li><li><b>E</b> 24 g adalah oksigen yang bereaksi, bukan CO₂.</li></ul><p class=\"tips\"><b>Tips:</b> bandingkan \"massa tersedia ÷ angka perbandingan\": C = 9/3 = 3, O = 32/8 = 4. Yang lebih kecil (C) habis duluan dan jadi pembatas.</p>"
  },
  {
    id: "kim-12", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 1, tipe: "pg",
    soal: "Volume 4,4 gram gas CO<sub>2</sub> (M<sub>r</sub> = 44) pada keadaan standar (STP, 0 °C dan 1 atm) adalah …",
    opsi: ["1,12 L", "2,24 L", "4,48 L", "22,4 L", "44,8 L"],
    kunci: 1,
    hint: "Ubah massa ke mol (n = massa/M<sub>r</sub>), lalu kalikan dengan volume molar STP = 22,4 L/mol.",
    pembahasan: "<h4>Konsep</h4><p>Jembatan stoikiometri selalu melalui <b>mol</b>: n = massa/M<sub>r</sub>. Pada STP (0 °C, 1 atm), 1 mol gas apa pun bervolume <b>22,4 L</b>.</p><h4>Langkah</h4><ol><li>n = 4,4/44 = 0,1 mol.</li><li>V = 0,1 × 22,4 = <b>2,24 L</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 1,12 L = 0,05 mol (salah bagi).</li><li><b>C</b> 4,48 L = 0,2 mol.</li><li><b>D</b> 22,4 L = volume 1 mol, lupa mengalikan n.</li><li><b>E</b> 44,8 L = 2 mol, atau M<sub>r</sub> dikali alih-alih dibagi.</li></ul><p class=\"tips\"><b>Tips:</b> pada RTP (25 °C, 1 atm) volume molarnya 24 L, bukan 22,4 L. Perhatikan keadaan yang disebut soal.</p>"
  },
  {
    id: "kim-13", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 2, tipe: "pg",
    soal: "Perhatikan persamaan reaksi pembakaran propana berikut.<br><i>a</i> C<sub>3</sub>H<sub>8</sub> + <i>b</i> O<sub>2</sub> → <i>c</i> CO<sub>2</sub> + <i>d</i> H<sub>2</sub>O<br>Setelah disetarakan dengan <i>a</i> = 1, nilai <i>b</i> adalah …",
    opsi: ["3", "4", "5", "7", "10"],
    kunci: 2,
    hint: "Setarakan C dulu, lalu H, terakhir O (hitung total atom O di ruas kanan).",
    pembahasan: "<h4>Konsep</h4><p>Menyetarakan reaksi pembakaran hidrokarbon: setarakan <b>C</b> dulu, lalu <b>H</b>, dan <b>O terakhir</b>, karena O₂ adalah unsur bebas yang paling mudah diatur.</p><h4>Langkah</h4><ol><li>C: 3 di kiri → c = 3 (3 CO₂).</li><li>H: 8 di kiri → d = 4 (4 H₂O, karena tiap H₂O punya 2 H).</li><li>O di kanan = 3 × 2 + 4 × 1 = 10 atom → b = 10/2 = <b>5</b>.</li><li>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 3 = koefisien CO₂ (c).</li><li><b>B</b> 4 = koefisien H₂O (d).</li><li><b>D</b> 7: d dianggap 8 (H₂O dianggap ber-H satu), lalu (6 + 8)/2 = 7.</li><li><b>E</b> 10 = jumlah <i>atom</i> O, lupa dibagi 2 karena O₂ diatomik.</li></ul><p class=\"tips\"><b>Tips:</b> untuk C<sub>x</sub>H<sub>y</sub>, koefisien O₂ = x + y/4. Propana: 3 + 8/4 = 5.</p>"
  },
  {
    id: "kim-14", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 3, tipe: "kategori",
    stimulus: "<p>Sebanyak 5,4 gram logam aluminium (A<sub>r</sub> Al = 27) direaksikan dengan 0,3 mol HCl menurut reaksi:</p><p>2Al(s) + 6HCl(aq) → 2AlCl<sub>3</sub>(aq) + 3H<sub>2</sub>(g)</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "HCl merupakan pereaksi pembatas.",
      "Aluminium yang tersisa sebanyak 0,1 mol.",
      "Volume gas H<sub>2</sub> yang dihasilkan pada STP adalah 3,36 L.",
      "AlCl<sub>3</sub> yang terbentuk sebanyak 0,15 mol."
    ],
    kunci: [true, true, true, false],
    hint: "Bagi mol tiap pereaksi dengan koefisiennya. Hasil bagi terkecil adalah pereaksi pembatas, dan semua hitungan produk mengikuti pereaksi pembatas.",
    pembahasan: "<h4>Konsep</h4><p><b>Pereaksi pembatas</b> = zat yang habis lebih dulu. Cara menentukannya: bagi mol setiap pereaksi dengan koefisiennya; hasil terkecil adalah pembatas. Semua produk dihitung dari pereaksi pembatas.</p><h4>Langkah</h4><p>n Al = 5,4/27 = 0,2 mol; n HCl = 0,3 mol. Al: 0,2/2 = 0,1; HCl: 0,3/6 = 0,05 → HCl pembatas.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> HCl punya nilai mol/koefisien terkecil (0,05).</li><li><b>2</b> <i>Benar.</i> Al bereaksi = 2/6 × 0,3 = 0,1 mol → sisa 0,2 − 0,1 = 0,1 mol.</li><li><b>3</b> <i>Benar.</i> H₂ = 3/6 × 0,3 = 0,15 mol → 0,15 × 22,4 = 3,36 L.</li><li><b>4</b> <i>Salah.</i> AlCl₃ = 2/6 × 0,3 = <b>0,1 mol</b>. Nilai 0,15 adalah mol H₂ (koefisiennya 3, bukan 2).</li></ul><p class=\"tips\"><b>Tips:</b> mol zat yang dicari = (koefisien dicari / koefisien pembatas) × mol pembatas. Jangan memakai mol zat yang berlebih.</p>"
  },

  // ===================== KIMIA ANALITIK =====================
  {
    id: "kim-15", bab: "Larutan", level: 1, tipe: "pg",
    soal: "Sebanyak 4 gram NaOH (M<sub>r</sub> = 40) dilarutkan dalam air hingga volume larutan 500 mL. Konsentrasi (molaritas) larutan NaOH tersebut adalah …",
    opsi: ["0,05 M", "0,1 M", "0,2 M", "0,4 M", "2 M"],
    kunci: 2,
    hint: "M = mol / volume dalam liter. Jangan lupa ubah 500 mL ke liter.",
    pembahasan: "<h4>Konsep</h4><p><b>Molaritas</b> M = mol zat terlarut / volume larutan dalam <b>liter</b>. Kesalahan paling umum adalah lupa mengubah mL ke L.</p><h4>Langkah</h4><ol><li>n NaOH = 4/40 = 0,1 mol.</li><li>V = 500 mL = 0,5 L.</li><li>M = 0,1/0,5 = <b>0,2 M</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 0,05 M = 0,1 × 0,5 (dikali, bukan dibagi).</li><li><b>B</b> 0,1 M = mol saja, volumenya diabaikan (seolah 1 L).</li><li><b>D</b> 0,4 M: mol dihitung 0,2.</li><li><b>E</b> 2 M: volume dianggap 0,05 L (salah konversi).</li></ul><p class=\"tips\"><b>Tips:</b> rumus cepat dengan mL: M = (massa/M<sub>r</sub>) × (1000/mL) = 0,1 × 1000/500 = 0,2.</p>"
  },
  {
    id: "kim-16", bab: "Larutan", level: 1, tipe: "mcma",
    soal: "Larutan berikut yang termasuk elektrolit kuat adalah … (pilih semua yang benar)",
    opsi: ["HCl", "NaCl", "CH<sub>3</sub>COOH", "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glukosa)", "KOH"],
    kunci: [0, 1, 4],
    hint: "Elektrolit kuat = terionisasi sempurna: asam kuat, basa kuat, dan sebagian besar garam.",
    pembahasan: "<h4>Konsep</h4><p><b>Elektrolit kuat</b> terionisasi sempurna dalam air: <b>asam kuat</b> (HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄), <b>basa kuat</b> (NaOH, KOH, Ca(OH)₂, Ba(OH)₂…), dan hampir semua <b>garam</b>. Asam/basa lemah adalah elektrolit lemah; senyawa kovalen nonpolar seperti gula adalah nonelektrolit.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ HCl, asam kuat.</li><li><b>B</b> ✔ NaCl, garam yang terionisasi sempurna.</li><li><b>C</b> ✘ CH₃COOH, asam lemah (hanya sebagian kecil terionisasi) → elektrolit lemah.</li><li><b>D</b> ✘ Glukosa larut sebagai molekul utuh, tidak terionisasi → nonelektrolit.</li><li><b>E</b> ✔ KOH, basa kuat.</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan daftar asam kuat (cukup 6) dan basa kuat (golongan IA dan IIA kecuali Be, Mg). Selain itu, anggap lemah.</p>"
  },
  {
    id: "kim-17", bab: "Asam-Basa", level: 2, tipe: "kategori",
    stimulus: "<p>Perhatikan reaksi berikut:</p><p>NH<sub>3</sub>(aq) + H<sub>2</sub>O(l) ⇌ NH<sub>4</sub><sup>+</sup>(aq) + OH<sup>−</sup>(aq)</p>",
    soal: "Berdasarkan teori asam-basa Brønsted–Lowry, tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "H<sub>2</sub>O bertindak sebagai asam.",
      "NH<sub>4</sub><sup>+</sup> adalah asam konjugasi dari NH<sub>3</sub>.",
      "OH<sup>−</sup> adalah basa konjugasi dari H<sub>2</sub>O.",
      "NH<sub>3</sub> bertindak sebagai asam karena memberikan proton."
    ],
    kunci: [true, true, true, false],
    hint: "Brønsted–Lowry: asam = pemberi proton (H<sup>+</sup>), basa = penerima proton. Lihat siapa yang kehilangan H dan siapa yang mendapat H.",
    pembahasan: "<h4>Konsep</h4><p><b>Brønsted–Lowry</b>: asam = pemberi proton (H⁺), basa = penerima proton. Setelah memberi H⁺, asam menjadi <b>basa konjugasinya</b>; setelah menerima H⁺, basa menjadi <b>asam konjugasinya</b>. Pasangan konjugasi berbeda tepat satu H⁺.</p><h4>Langkah</h4><p>H₂O → OH⁻ (kehilangan H⁺) dan NH₃ → NH₄⁺ (mendapat H⁺).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> H₂O memberi H⁺ ke NH₃, jadi bertindak sebagai asam.</li><li><b>2</b> <i>Benar.</i> NH₃ + H⁺ → NH₄⁺; NH₄⁺ adalah asam konjugasi dari NH₃.</li><li><b>3</b> <i>Benar.</i> H₂O − H⁺ → OH⁻; OH⁻ adalah basa konjugasi dari H₂O.</li><li><b>4</b> <i>Salah.</i> NH₃ <b>menerima</b> proton, jadi bertindak sebagai basa.</li></ul><p class=\"tips\"><b>Tips:</b> H₂O bersifat <i>amfoter</i>: bisa jadi asam (di sini, terhadap NH₃) atau basa (misalnya terhadap HCl). Lihat pasangannya di reaksi.</p>"
  },
  {
    id: "kim-18", bab: "pH", level: 1, tipe: "pg",
    soal: "pH larutan HCl 0,01 M adalah …",
    opsi: ["1", "2", "3", "12", "13"],
    kunci: 1,
    hint: "HCl asam kuat bervalensi 1, jadi [H<sup>+</sup>] = konsentrasi HCl. pH = −log [H<sup>+</sup>].",
    pembahasan: "<h4>Konsep</h4><p>Asam kuat terionisasi sempurna: [H⁺] = a × M, dengan a = jumlah H⁺ yang dilepas (valensi asam). Lalu <b>pH = −log[H⁺]</b>.</p><h4>Langkah</h4><ol><li>HCl → H⁺ + Cl⁻, a = 1.</li><li>[H⁺] = 1 × 0,01 = 10⁻² M.</li><li>pH = −log 10⁻² = <b>2</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> pH 1 = HCl 0,1 M (salah menghitung pangkat).</li><li><b>C</b> pH 3 = konsentrasi 0,001 M.</li><li><b>D</b> pH 12 = 14 − 2. Itu pOH-nya dibalik, berlaku untuk basa 0,01 M.</li><li><b>E</b> pH 13: basa 0,1 M.</li></ul><p class=\"tips\"><b>Tips:</b> asam kuat 10⁻ⁿ M (valensi 1) → pH = n. Larutan asam selalu pH &lt; 7, jadi D dan E langsung gugur.</p>"
  },
  {
    id: "kim-19", bab: "pH", level: 2, tipe: "pg",
    soal: "pH larutan CH<sub>3</sub>COOH 0,1 M (K<sub>a</sub> = 1 × 10<sup>−5</sup>) adalah …",
    opsi: ["1", "2", "3", "5", "6"],
    kunci: 2,
    hint: "Untuk asam lemah: [H<sup>+</sup>] = √(K<sub>a</sub> × M).",
    pembahasan: "<h4>Konsep</h4><p>Asam <b>lemah</b> hanya terionisasi sebagian, jadi [H⁺] tidak sama dengan konsentrasi asam. Rumusnya: <b>[H⁺] = √(K<sub>a</sub> × M)</b>.</p><h4>Langkah</h4><ol><li>[H⁺] = √(10⁻⁵ × 10⁻¹) = √10⁻⁶ = 10⁻³ M.</li><li>pH = <b>3</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> pH 1: diperlakukan seperti asam kuat ([H⁺] = 0,1).</li><li><b>B</b> pH 2: [H⁺] dianggap 10⁻², misalnya karena salah mengakar 10⁻⁶ atau salah mengalikan K<sub>a</sub> × M.</li><li><b>D</b> pH 5 = −log K<sub>a</sub>, yaitu pK<sub>a</sub>, bukan pH larutan.</li><li><b>E</b> pH 6 = −log(K<sub>a</sub> × M) tanpa diakar.</li></ul><p class=\"tips\"><b>Tips:</b> asam lemah dengan konsentrasi sama selalu ber-pH lebih tinggi (kurang asam) daripada asam kuat. CH₃COOH 0,1 M pH 3, sedangkan HCl 0,1 M pH 1.</p>"
  },
  {
    id: "kim-20", bab: "Kesetimbangan Larutan", level: 2, tipe: "pg",
    soal: "Larutan garam berikut yang bersifat basa (pH > 7) adalah …",
    opsi: ["NaCl", "NH<sub>4</sub>Cl", "CH<sub>3</sub>COONa", "KNO<sub>3</sub>", "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>"],
    kunci: 2,
    hint: "Tentukan asam dan basa pembentuk tiap garam. Sifat larutan garam mengikuti komponen yang KUAT.",
    pembahasan: "<h4>Konsep</h4><p><b>Hidrolisis garam</b>: sifat garam ditentukan oleh asam dan basa pembentuknya, dan <b>yang kuat menang</b>. Asam kuat + basa kuat → netral; asam kuat + basa lemah → asam; asam lemah + basa kuat → <b>basa</b>.</p><h4>Langkah</h4><p>CH₃COONa berasal dari CH₃COOH (asam lemah) + NaOH (basa kuat). Ion CH₃COO⁻ menarik H⁺ dari air: CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻. OH⁻ bertambah → pH &gt; 7.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> NaCl: HCl (kuat) + NaOH (kuat) → netral.</li><li><b>B</b> NH₄Cl: HCl (kuat) + NH₃ (lemah) → asam.</li><li><b>D</b> KNO₃: HNO₃ (kuat) + KOH (kuat) → netral.</li><li><b>E</b> (NH₄)₂SO₄: H₂SO₄ (kuat) + NH₃ (lemah) → asam.</li></ul><p class=\"tips\"><b>Tips:</b> pisahkan garam menjadi kation (asal basa) dan anion (asal asam), lalu tanyakan mana yang kuat. Ion NH₄⁺ hampir selalu menandakan garam asam.</p>"
  },
  {
    id: "kim-21", bab: "Kesetimbangan Larutan", level: 3, tipe: "pg",
    soal: "Sebanyak 100 mL CH<sub>3</sub>COOH 0,2 M dicampur dengan 100 mL NaOH 0,1 M. Jika K<sub>a</sub> CH<sub>3</sub>COOH = 1 × 10<sup>−5</sup>, pH campuran adalah …",
    opsi: ["3", "4", "5", "9", "11"],
    kunci: 2,
    hint: "Hitung mmol masing-masing, reaksikan. Jika asam lemah bersisa bersama garamnya, campuran itu larutan penyangga: [H<sup>+</sup>] = K<sub>a</sub> × (mol asam / mol garam).",
    pembahasan: "<h4>Konsep</h4><p>Campuran asam lemah berlebih + basa kuat membentuk <b>larutan penyangga asam</b> (asam lemah + garamnya). Rumus: <b>[H⁺] = K<sub>a</sub> × (mol asam sisa / mol garam)</b>.</p><h4>Langkah</h4><ol><li>CH₃COOH = 100 × 0,2 = 20 mmol; NaOH = 100 × 0,1 = 10 mmol.</li><li>Reaksi: NaOH habis; asam sisa 10 mmol; garam CH₃COONa terbentuk 10 mmol.</li><li>[H⁺] = 10⁻⁵ × 10/10 = 10⁻⁵ → pH = <b>5</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> pH 3 = pH asam lemah awal saja, reaksi dengan NaOH diabaikan.</li><li><b>B</b> pH 4: perbandingan asam : garam dihitung 10 : 1.</li><li><b>D</b> pH 9: dianggap hidrolisis garam basa (seolah asam dan basa tepat habis).</li><li><b>E</b> pH 11: dianggap NaOH yang bersisa.</li></ul><p class=\"tips\"><b>Tips:</b> jika mol asam sisa = mol garam, maka pH = pK<sub>a</sub>. Di sini pK<sub>a</sub> = 5, jadi langsung ketemu.</p>"
  },
  {
    id: "kim-22", bab: "Kesetimbangan Larutan", level: 2, tipe: "pg",
    soal: "Kelarutan Mg(OH)<sub>2</sub> dalam air adalah 1 × 10<sup>−4</sup> mol/L. Hasil kali kelarutan (K<sub>sp</sub>) Mg(OH)<sub>2</sub> adalah …",
    opsi: ["1 × 10<sup>−8</sup>", "2 × 10<sup>−8</sup>", "1 × 10<sup>−12</sup>", "4 × 10<sup>−12</sup>", "4 × 10<sup>−8</sup>"],
    kunci: 3,
    hint: "Tulis penguraiannya: Mg(OH)<sub>2</sub> ⇌ Mg<sup>2+</sup> + 2OH<sup>−</sup>. Jika kelarutannya s, berapa [Mg<sup>2+</sup>] dan [OH<sup>−</sup>]?",
    pembahasan: "<h4>Konsep</h4><p><b>K<sub>sp</sub></b> = hasil kali konsentrasi ion-ion jenuh, masing-masing dipangkatkan koefisiennya. Jika kelarutan = s, setiap ion konsentrasinya (koefisien × s).</p><h4>Langkah</h4><ol><li>Mg(OH)₂ ⇌ Mg²⁺ + 2OH⁻ → [Mg²⁺] = s, [OH⁻] = 2s.</li><li>K<sub>sp</sub> = s × (2s)² = 4s³.</li><li>4 × (10⁻⁴)³ = <b>4 × 10⁻¹²</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 1 × 10⁻⁸ = s², rumus untuk garam tipe AB (misalnya AgCl).</li><li><b>B</b> 2 × 10⁻⁸ = s × 2s, koefisien OH⁻ tidak dipangkatkan.</li><li><b>C</b> 1 × 10⁻¹² = s³, angka 4 terlupa.</li><li><b>E</b> 4 × 10⁻⁸: angka 4 benar, tetapi pangkat 10-nya salah (s² bukan s³).</li></ul><p class=\"tips\"><b>Tips:</b> rumus cepat: AB → s², AB₂ atau A₂B → 4s³, AB₃ → 27s⁴.</p>"
  },
  {
    id: "kim-23", bab: "Koloid", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pasangan peristiwa sehari-hari dan sifat koloid berikut!",
    pernyataan: [
      "Sorot lampu mobil terlihat jelas saat udara berkabut — efek Tyndall.",
      "Penjernihan air menggunakan tawas — koagulasi.",
      "Proses cuci darah pada penderita gagal ginjal — dialisis.",
      "Penggunaan norit untuk mengatasi sakit perut — elektroforesis."
    ],
    kunci: [true, true, true, false],
    hint: "Ingat: norit (karbon aktif) bekerja dengan cara menyerap racun/zat warna pada permukaannya.",
    pembahasan: "<h4>Konsep</h4><p>Sifat-sifat koloid dan contoh khasnya: <b>Tyndall</b> = penghamburan cahaya; <b>koagulasi</b> = penggumpalan; <b>dialisis</b> = pemurnian lewat membran semipermeabel; <b>adsorpsi</b> = penyerapan zat pada permukaan; <b>elektroforesis</b> = pergerakan koloid bermuatan dalam medan listrik.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Kabut adalah koloid (aerosol cair) yang menghamburkan sinar lampu sehingga berkasnya terlihat.</li><li><b>2</b> <i>Benar.</i> Ion Al³⁺ dari tawas menetralkan muatan partikel lumpur, sehingga menggumpal dan mengendap.</li><li><b>3</b> <i>Benar.</i> Darah dialirkan melalui membran; zat sisa kecil (urea) keluar, protein darah tertahan.</li><li><b>4</b> <i>Salah.</i> Norit (karbon aktif) menyerap racun pada permukaannya → <b>adsorpsi</b>. Contoh elektroforesis adalah penyaring debu pabrik (Cottrell) atau uji DNA.</li></ul><p class=\"tips\"><b>Tips:</b> contoh adsorpsi lain yang sering keluar: pemutihan gula, penjernihan air dengan karbon aktif, dan deodoran.</p>"
  },

  // ===================== KIMIA FISIK =====================
  {
    id: "kim-24", bab: "Energetika dan Dinamika Reaksi", level: 1, tipe: "pg",
    soal: "Ketika padatan NaOH dilarutkan dalam air di dalam gelas kimia, dinding gelas terasa panas. Pernyataan yang tepat tentang peristiwa tersebut adalah …",
    opsi: [
      "Reaksi endoterm, kalor berpindah dari lingkungan ke sistem",
      "Reaksi endoterm, ΔH > 0",
      "Reaksi eksoterm, kalor berpindah dari sistem ke lingkungan, ΔH < 0",
      "Reaksi eksoterm, ΔH > 0",
      "Tidak terjadi perpindahan kalor"
    ],
    kunci: 2,
    hint: "Gelas (lingkungan) terasa panas berarti lingkungan MENERIMA kalor. Dari mana kalor itu berasal?",
    pembahasan: "<h4>Konsep</h4><p>Bedakan <b>sistem</b> (zat yang bereaksi) dan <b>lingkungan</b> (wadah, tangan, udara). <b>Eksoterm</b>: sistem melepas kalor ke lingkungan → lingkungan terasa panas → ΔH &lt; 0. <b>Endoterm</b>: sistem menyerap kalor → lingkungan terasa dingin → ΔH &gt; 0.</p><h4>Langkah</h4><ol><li>Gelas (lingkungan) terasa panas → lingkungan <i>menerima</i> kalor.</li><li>Berarti sistem (NaOH + air) <i>melepas</i> kalor → eksoterm.</li><li>Entalpi sistem turun → ΔH &lt; 0 → <b>C</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> dan <b>B</b> endoterm: gelas seharusnya terasa dingin.</li><li><b>D</b> Eksoterm tetapi ΔH &gt; 0, tandanya kontradiktif.</li><li><b>E</b> Rasa panas sendiri sudah bukti adanya perpindahan kalor.</li></ul><p class=\"tips\"><b>Tips:</b> \"Yang terasa adalah lingkungan.\" Panas = eksoterm, dingin = endoterm. Contoh endoterm: urea atau NH₄NO₃ dilarutkan (kompres dingin instan).</p>"
  },
  {
    id: "kim-25", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "pg",
    stimulus: "<p>Diketahui entalpi pembentukan standar (ΔH<sub>f</sub>°):</p><table><tr><th>Zat</th><th>ΔH<sub>f</sub>° (kJ/mol)</th></tr><tr><td>CH<sub>4</sub>(g)</td><td>−75</td></tr><tr><td>CO<sub>2</sub>(g)</td><td>−394</td></tr><tr><td>H<sub>2</sub>O(l)</td><td>−286</td></tr></table>",
    soal: "Entalpi pembakaran 1 mol gas metana menurut reaksi CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) adalah …",
    opsi: ["−605 kJ/mol", "−755 kJ/mol", "−891 kJ/mol", "−1.041 kJ/mol", "+891 kJ/mol"],
    kunci: 2,
    hint: "ΔH reaksi = Σ ΔH<sub>f</sub> produk − Σ ΔH<sub>f</sub> pereaksi. Kalikan dengan koefisien, dan ΔH<sub>f</sub> unsur bebas (O<sub>2</sub>) = 0.",
    pembahasan: "<h4>Konsep</h4><p>Dari data entalpi pembentukan: <b>ΔH reaksi = ΣΔH<sub>f</sub> produk − ΣΔH<sub>f</sub> pereaksi</b>, masing-masing dikali koefisiennya. ΔH<sub>f</sub> unsur bebas (O₂) = 0.</p><h4>Langkah</h4><ol><li>Produk: −394 + 2(−286) = −394 − 572 = −966.</li><li>Pereaksi: −75 + 2(0) = −75.</li><li>ΔH = −966 − (−75) = −966 + 75 = <b>−891 kJ/mol</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> −605: koefisien 2 pada H₂O terlupa (−394 − 286 + 75).</li><li><b>B</b> −755 = −394 − 286 − 75: koefisien H₂O terlupa <i>dan</i> ΔH<sub>f</sub> CH₄ ikut dijumlahkan.</li><li><b>D</b> −1.041: tanda CH₄ salah (−966 − 75).</li><li><b>E</b> +891: dibalik menjadi pereaksi − produk. Pembakaran selalu eksoterm (negatif).</li></ul><p class=\"tips\"><b>Tips:</b> \"produk dikurangi pereaksi\" dan hati-hati dengan minus ganda: −(−75) = +75.</p>"
  },
  {
    id: "kim-26", bab: "Energetika dan Dinamika Reaksi", level: 1, tipe: "mcma",
    soal: "Perlakuan berikut yang dapat mempercepat laju reaksi adalah … (pilih semua yang benar)",
    opsi: [
      "Menaikkan suhu",
      "Menggunakan serbuk sebagai pengganti kepingan",
      "Menurunkan konsentrasi pereaksi",
      "Menambahkan katalis",
      "Mendinginkan campuran reaksi"
    ],
    kunci: [0, 1, 3],
    hint: "Laju naik jika tumbukan efektif makin sering: partikel lebih banyak/rapat, lebih berenergi, atau energi aktivasi lebih rendah.",
    pembahasan: "<h4>Konsep</h4><p>Teori tumbukan: reaksi makin cepat jika <b>tumbukan efektif</b> makin sering. Faktornya: konsentrasi ↑, luas permukaan ↑, suhu ↑, katalis (menurunkan energi aktivasi).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Suhu naik → partikel bergerak lebih cepat → tumbukan lebih sering dan lebih banyak yang melampaui energi aktivasi.</li><li><b>B</b> ✔ Serbuk punya luas permukaan sentuh lebih besar daripada kepingan.</li><li><b>C</b> ✘ Konsentrasi turun → partikel makin jarang bertumbukan → lebih lambat.</li><li><b>D</b> ✔ Katalis memberi jalur reaksi dengan energi aktivasi lebih rendah.</li><li><b>E</b> ✘ Mendinginkan = menurunkan suhu → lebih lambat.</li></ul><p class=\"tips\"><b>Tips:</b> contoh sehari-hari: makanan disimpan di kulkas (suhu turun) supaya lambat basi; gula halus lebih cepat larut daripada gula batu (luas permukaan).</p>"
  },
  {
    id: "kim-27", bab: "Energetika dan Dinamika Reaksi", level: 3, tipe: "kategori",
    stimulus: "<p>Data percobaan reaksi A + B → C:</p><table><tr><th>Percobaan</th><th>[A] (M)</th><th>[B] (M)</th><th>Laju (M/s)</th></tr><tr><td>1</td><td>0,1</td><td>0,1</td><td>2 × 10<sup>−3</sup></td></tr><tr><td>2</td><td>0,2</td><td>0,1</td><td>8 × 10<sup>−3</sup></td></tr><tr><td>3</td><td>0,1</td><td>0,2</td><td>4 × 10<sup>−3</sup></td></tr></table>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Orde reaksi terhadap A adalah 2.",
      "Orde reaksi terhadap B adalah 1.",
      "Orde reaksi total adalah 2.",
      "Jika [A] dan [B] masing-masing dinaikkan 2 kali, laju reaksi menjadi 8 kali semula."
    ],
    kunci: [true, true, false, true],
    hint: "Untuk orde A, bandingkan dua percobaan dengan [B] yang sama (1 dan 2). Untuk orde B, bandingkan percobaan dengan [A] yang sama (1 dan 3).",
    pembahasan: "<h4>Konsep</h4><p>Orde reaksi dicari dari dua percobaan yang hanya berbeda <b>satu konsentrasi</b>: (perbandingan konsentrasi)<sup>orde</sup> = perbandingan laju. Persamaan laju: v = k[A]<sup>x</sup>[B]<sup>y</sup>, orde total = x + y.</p><h4>Langkah</h4><ol><li>Percobaan 1 → 2 ([B] tetap): [A] ×2, laju ×4 → 2<sup>x</sup> = 4 → x = 2.</li><li>Percobaan 1 → 3 ([A] tetap): [B] ×2, laju ×2 → 2<sup>y</sup> = 2 → y = 1.</li></ol><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> x = 2.</li><li><b>2</b> <i>Benar.</i> y = 1.</li><li><b>3</b> <i>Salah.</i> Orde total = 2 + 1 = <b>3</b>.</li><li><b>4</b> <i>Benar.</i> Laju baru = 2² × 2¹ = 8 kali.</li></ul><p class=\"tips\"><b>Tips:</b> orde reaksi <i>tidak</i> diambil dari koefisien persamaan reaksi (A + B → C koefisiennya 1 dan 1), melainkan harus dari data percobaan.</p>"
  },
  {
    id: "kim-28", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "kategori",
    stimulus: "<p>Pada pembuatan amonia (proses Haber–Bosch) terjadi reaksi kesetimbangan:</p><p>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) &nbsp; ΔH = −92 kJ</p>",
    soal: "Tentukan benar atau salah pernyataan tentang pergeseran kesetimbangan berikut!",
    pernyataan: [
      "Jika tekanan diperbesar, kesetimbangan bergeser ke kanan.",
      "Jika suhu dinaikkan, kesetimbangan bergeser ke kanan.",
      "Jika gas N<sub>2</sub> ditambahkan, jumlah NH<sub>3</sub> bertambah.",
      "Penambahan katalis menggeser kesetimbangan ke kanan."
    ],
    kunci: [true, false, true, false],
    hint: "Asas Le Chatelier: sistem melawan gangguan. Bandingkan jumlah koefisien gas kiri (4) dan kanan (2), dan ingat reaksi ke kanan eksoterm.",
    pembahasan: "<h4>Konsep</h4><p><b>Asas Le Chatelier</b>: jika kesetimbangan diganggu, sistem bergeser untuk <b>mengurangi gangguan</b> itu. Tekanan naik → ke jumlah mol gas lebih kecil; suhu naik → ke arah endoterm; zat ditambah → bergeser menjauhi zat itu.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Kiri 1 + 3 = 4 mol gas, kanan 2 mol. Tekanan naik → bergeser ke kanan (mol lebih sedikit).</li><li><b>2</b> <i>Salah.</i> ΔH = −92 kJ berarti ke kanan eksoterm, ke kiri endoterm. Suhu naik → bergeser ke <b>kiri</b> (menyerap kalor).</li><li><b>3</b> <i>Benar.</i> N₂ ditambah → sistem \"menghabiskan\" N₂ dengan bergeser ke kanan → NH₃ bertambah.</li><li><b>4</b> <i>Salah.</i> Katalis mempercepat reaksi maju dan balik sama besar. Kesetimbangan tercapai lebih cepat, tetapi posisinya tidak bergeser.</li></ul><p class=\"tips\"><b>Tips:</b> di industri amonia suhu tetap dibuat ±450 °C walau suhu tinggi menggeser ke kiri, supaya reaksinya cukup <i>cepat</i>. Itu kompromi antara laju dan hasil.</p>"
  },
  {
    id: "kim-29", bab: "Energetika dan Dinamika Reaksi", level: 3, tipe: "pg",
    soal: "Dalam wadah 1 liter dimasukkan 1 mol H<sub>2</sub> dan 1 mol I<sub>2</sub>. Keduanya bereaksi: H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). Saat setimbang terdapat 1,6 mol HI. Nilai tetapan kesetimbangan K<sub>c</sub> adalah …",
    opsi: ["8", "16", "32", "40", "64"],
    kunci: 4,
    hint: "Buat tabel mula-mula, reaksi, setimbang (MRS). Terbentuk 1,6 mol HI berarti H<sub>2</sub> dan I<sub>2</sub> yang bereaksi masing-masing setengahnya.",
    pembahasan: "<h4>Konsep</h4><p>Gunakan tabel <b>MRS</b> (Mula – Reaksi – Setimbang). Perubahan mol pada baris \"Reaksi\" sebanding dengan koefisien. K<sub>c</sub> = [produk]<sup>koef</sup> / [pereaksi]<sup>koef</sup>, memakai <i>konsentrasi saat setimbang</i>.</p><h4>Langkah</h4><table><tr><th></th><th>H₂</th><th>I₂</th><th>2HI</th></tr><tr><th>M</th><td>1</td><td>1</td><td>0</td></tr><tr><th>R</th><td>−0,8</td><td>−0,8</td><td>+1,6</td></tr><tr><th>S</th><td>0,2</td><td>0,2</td><td>1,6</td></tr></table><p>Volume 1 L, jadi mol = molaritas. K<sub>c</sub> = 1,6² / (0,2 × 0,2) = 2,56 / 0,04 = <b>64</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 8 = 1,6 / 0,2. Pangkat 2 pada HI tidak dipakai dan penyebut hanya satu.</li><li><b>B</b> 16 = 1,6² / (0,4 × 0,4): sisa H₂ dan I₂ salah dihitung 0,4 (pengurangan dianggap 0,6).</li><li><b>C</b> 32 = 64/2: hasil malah dibagi koefisien 2. Koefisien dipakai sebagai pangkat, bukan pembagi.</li><li><b>D</b> 40 = 1,6 / 0,04, lupa mengkuadratkan [HI].</li></ul><p class=\"tips\"><b>Tips:</b> HI bertambah 1,6 → H₂ dan I₂ masing-masing berkurang setengahnya (0,8), sesuai koefisien 1 : 1 : 2.</p>"
  },

  // ===================== KIMIA ORGANIK =====================
  {
    id: "kim-30", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 1, tipe: "pg",
    soal: "Senyawa dengan rumus struktur CH<sub>3</sub>–COO–CH<sub>2</sub>–CH<sub>3</sub> termasuk golongan … dan bernama …",
    opsi: [
      "asam karboksilat, asam butanoat",
      "ester, etil etanoat",
      "eter, etoksi etana",
      "keton, 2-butanon",
      "ester, metil propanoat"
    ],
    kunci: 1,
    hint: "Gugus –COO– di tengah rantai adalah ciri ester. Nama ester: alkil (dari bagian –O–R) + alkanoat (dari bagian yang mengandung C=O).",
    pembahasan: "<h4>Konsep</h4><p>Gugus fungsi: –COOH = asam karboksilat; <b>–COO–</b> diapit dua gugus alkil = <b>ester</b>; –O– = eter; –CO– = keton. Nama ester: <i>[alkil di sisi O] + [asam di sisi C=O, akhiran -oat]</i>.</p><h4>Langkah</h4><ol><li>CH₃–<b>COO</b>–CH₂CH₃ → ester.</li><li>Sisi karbonil: CH₃–CO– (2 C termasuk C karbonil) → <b>etanoat</b>.</li><li>Sisi O: –CH₂CH₃ → <b>etil</b>.</li><li>Nama: <b>etil etanoat</b> (etil asetat, beraroma buah).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Asam butanoat (C₃H₇COOH) adalah isomer fungsinya, rumus molekul sama C₄H₈O₂, tetapi punya –COOH.</li><li><b>C</b> Eter hanya punya –O– tanpa C=O.</li><li><b>D</b> Keton punya –CO– tanpa O tambahan.</li><li><b>E</b> Metil propanoat = CH₃CH₂–COO–CH₃, kebalikan posisinya. Jebakan: sisi alkil dan sisi asam tertukar.</li></ul><p class=\"tips\"><b>Tips:</b> potong ester tepat di antara C=O dan –O–. Bagian yang membawa C=O adalah \"asam\"; bagian yang menempel di O adalah \"alkil\" dan disebut lebih dulu.</p>"
  },
  {
    id: "kim-31", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 2, tipe: "pg",
    soal: "Nama IUPAC senyawa CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub> adalah …",
    opsi: ["2-metilbutana", "3-metilbutana", "pentana", "2-metilpropana", "2-etilpropana"],
    kunci: 0,
    hint: "Cari rantai karbon terpanjang, lalu beri nomor dari ujung yang paling dekat dengan cabang.",
    pembahasan: "<h4>Konsep</h4><p>Tata nama alkana bercabang: (1) cari <b>rantai terpanjang</b> sebagai induk, (2) beri nomor dari ujung yang <b>paling dekat dengan cabang</b>, (3) sebutkan posisi dan nama cabang, lalu nama induk.</p><h4>Langkah</h4><ol><li>Rantai terpanjang: C–C(–CH₃)–C–C = 4 C → <b>butana</b>.</li><li>Penomoran dari kiri: cabang di C-2 (dari kanan di C-3). Pilih yang terkecil → 2.</li><li>Nama: <b>2-metilbutana</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> 3-metilbutana: penomoran dari ujung yang lebih jauh.</li><li><b>C</b> Pentana adalah isomernya (C₅H₁₂ rantai lurus), bukan senyawa yang sama.</li><li><b>D</b> 2-metilpropana hanya punya 4 C total; senyawa ini punya 5 C.</li><li><b>E</b> 2-etilpropana: rantai induk tidak terpanjang. Jika cabang etil dimasukkan ke rantai, induknya menjadi butana.</li></ul><p class=\"tips\"><b>Tips:</b> cabang etil di C-2 hampir selalu tanda bahwa rantai terpanjang belum ditemukan. Cek dengan menghitung jumlah C total: rumus molekul harus sama.</p>"
  },
  {
    id: "kim-32", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 2, tipe: "mcma",
    soal: "Senyawa berikut yang merupakan isomer dari 1-butanol (C<sub>4</sub>H<sub>10</sub>O) adalah … (pilih semua yang benar)",
    opsi: [
      "2-butanol",
      "dietil eter (etoksi etana)",
      "2-metil-2-propanol",
      "butanal",
      "asam butanoat"
    ],
    kunci: [0, 1, 2],
    hint: "Isomer = rumus molekul SAMA, struktur berbeda. Hitung rumus molekul tiap opsi; aldehida dan asam karboksilat punya jumlah H/O berbeda dari alkohol.",
    pembahasan: "<h4>Konsep</h4><p><b>Isomer</b> = rumus molekul <b>sama</b>, struktur berbeda. Jenisnya: isomer posisi (letak gugus berbeda), rangka (rantai bercabang vs lurus), dan fungsi (gugus fungsi berbeda; alkohol ↔ eter, aldehida ↔ keton, asam ↔ ester).</p><h4>Tiap pilihan</h4><p>1-butanol: C₄H₁₀O.</p><ul class=\"pengecoh\"><li><b>A</b> ✔ 2-butanol, C₄H₁₀O → isomer posisi (–OH pindah ke C-2).</li><li><b>B</b> ✔ Dietil eter C₂H₅–O–C₂H₅, C₄H₁₀O → isomer fungsi.</li><li><b>C</b> ✔ 2-metil-2-propanol, C₄H₁₀O → isomer rangka (rantai bercabang).</li><li><b>D</b> ✘ Butanal C₄H₈O: kekurangan 2 H karena ada C=O.</li><li><b>E</b> ✘ Asam butanoat C₄H₈O₂: H dan O berbeda.</li></ul><p class=\"tips\"><b>Tips:</b> alkohol dan eter jenuh selalu C<sub>n</sub>H<sub>2n+2</sub>O. Aldehida/keton C<sub>n</sub>H<sub>2n</sub>O. Asam/ester C<sub>n</sub>H<sub>2n</sub>O₂. Cukup cocokkan rumus umumnya.</p>"
  },
  {
    id: "kim-33", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 3, tipe: "kategori",
    soal: "Tentukan benar atau salah jenis reaksi senyawa karbon berikut!",
    pernyataan: [
      "CH<sub>2</sub>=CH<sub>2</sub> + HBr → CH<sub>3</sub>–CH<sub>2</sub>Br adalah reaksi adisi.",
      "CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl adalah reaksi substitusi.",
      "CH<sub>3</sub>–CH<sub>2</sub>OH → CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O (H<sub>2</sub>SO<sub>4</sub> pekat, 180 °C) adalah reaksi eliminasi.",
      "CH<sub>3</sub>–CH<sub>2</sub>Cl + NaOH → CH<sub>3</sub>–CH<sub>2</sub>OH + NaCl adalah reaksi adisi."
    ],
    kunci: [true, true, true, false],
    hint: "Adisi: ikatan rangkap → tunggal. Eliminasi: ikatan tunggal → rangkap. Substitusi: satu atom/gugus ditukar dengan yang lain, jenis ikatan tetap.",
    pembahasan: "<h4>Konsep</h4><p>Jenis reaksi organik: <b>adisi</b> = ikatan rangkap menjadi tunggal (ada yang ditambahkan); <b>substitusi</b> = satu atom/gugus diganti yang lain; <b>eliminasi</b> = ikatan tunggal menjadi rangkap (ada molekul kecil yang dilepas).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> C=C menjadi C–C; H dan Br ditambahkan → adisi.</li><li><b>2</b> <i>Benar.</i> Satu H pada CH₄ ditukar Cl → substitusi (halogenasi).</li><li><b>3</b> <i>Benar.</i> H₂O dilepas dan terbentuk C=C → eliminasi (dehidrasi alkohol).</li><li><b>4</b> <i>Salah.</i> Cl ditukar dengan OH, dan tidak ada ikatan rangkap yang dibuka → <b>substitusi</b>.</li></ul><p class=\"tips\"><b>Tips:</b> hitung ikatan rangkap sebelum dan sesudah. Berkurang = adisi, bertambah = eliminasi, tetap = substitusi.</p>"
  },
  {
    id: "kim-34", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 3, tipe: "pg",
    soal: "Senyawa 2-propanol dioksidasi menggunakan larutan K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> dalam suasana asam. Hasil oksidasi tersebut adalah …",
    opsi: ["Propanal", "Propanon", "Asam propanoat", "Propena", "Tidak bereaksi"],
    kunci: 1,
    hint: "Tentukan dulu jenis alkoholnya (primer, sekunder, atau tersier) dari letak gugus –OH.",
    pembahasan: "<h4>Konsep</h4><p>Oksidasi alkohol (oksidator K₂Cr₂O₇/H⁺ atau KMnO₄) bergantung pada jenis alkoholnya: <b>primer</b> → aldehida → asam karboksilat; <b>sekunder</b> → <b>keton</b>; <b>tersier</b> → tidak teroksidasi.</p><h4>Langkah</h4><ol><li>2-propanol: CH₃–CH(OH)–CH₃. C yang membawa –OH mengikat 2 C lain → alkohol sekunder.</li><li>Alkohol sekunder dioksidasi → keton: CH₃–CO–CH₃ = <b>propanon</b> (aseton).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Propanal adalah hasil oksidasi alkohol <i>primer</i> (1-propanol).</li><li><b>C</b> Asam propanoat adalah oksidasi lanjut 1-propanol (lewat propanal).</li><li><b>D</b> Propena adalah hasil <i>dehidrasi</i> (eliminasi H₂O), bukan oksidasi.</li><li><b>E</b> Yang tidak bereaksi adalah alkohol tersier.</li></ul><p class=\"tips\"><b>Tips:</b> oksidasi melepas H dari C yang membawa –OH. Primer punya 2 H di C itu (bisa dua kali), sekunder punya 1 H (sekali), tersier tidak punya H (tidak bisa).</p>"
  }
]};
