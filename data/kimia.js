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
    pembahasan: "<p>Proton = nomor atom = <b>13</b>.</p><p>Neutron = nomor massa − nomor atom = 27 − 13 = <b>14</b>.</p><p>Atom netral punya 13 elektron. Ion Al<sup>3+</sup> melepas 3 elektron, jadi elektronnya 13 − 3 = <b>10</b>.</p>"
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
    pembahasan: "<p>Sebagian besar sinar alfa tembus → atom sebagian besar <b>ruang kosong</b>. Sebagian kecil terpantul → ada <b>inti</b> yang sangat kecil, bermassa besar, dan bermuatan <b>positif</b> (sinar alfa juga positif sehingga ditolak).</p><p>Opsi A = Thomson, B = Bohr, D = Dalton, E = mekanika kuantum.</p>"
  },
  {
    id: "kim-03", bab: "Sistem Periodik Unsur", level: 1, tipe: "pg",
    soal: "Unsur X memiliki nomor atom 17. Dalam sistem periodik, unsur X terletak pada …",
    opsi: ["Periode 3, golongan VIIA", "Periode 3, golongan VA", "Periode 2, golongan VIIA", "Periode 7, golongan IIIA", "Periode 4, golongan VIIA"],
    kunci: 0,
    hint: "Tulis konfigurasi elektron per kulit (2, 8, …). Jumlah kulit = periode, elektron valensi = golongan A.",
    pembahasan: "<p>Konfigurasi <sub>17</sub>X: 2 8 7.</p><p>Jumlah kulit = 3 → <b>periode 3</b>. Elektron valensi = 7 → <b>golongan VIIA</b> (halogen, unsur Cl).</p>"
  },
  {
    id: "kim-04", bab: "Sistem Periodik Unsur", level: 2, tipe: "kategori",
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
    pembahasan: "<p>Dari kiri ke kanan dalam satu periode, muatan inti bertambah sementara jumlah kulit tetap → elektron ditarik lebih kuat.</p><p>1. Jari-jari makin kecil → <b>Benar</b>.<br>2. Elektron makin sulit dilepas → energi ionisasi makin besar → <b>Benar</b>.<br>3. Kemampuan menarik elektron terbesar ada di Cl → <b>Benar</b>.<br>4. Sifat logam (mudah melepas elektron) justru makin <i>lemah</i> ke kanan → <b>Salah</b>.</p>"
  },
  {
    id: "kim-05", bab: "Ikatan Kimia", level: 1, tipe: "pg",
    soal: "Pasangan senyawa berikut yang keduanya berikatan ion adalah …",
    opsi: ["HCl dan NaCl", "NaCl dan MgO", "CO<sub>2</sub> dan KBr", "H<sub>2</sub>O dan CaCl<sub>2</sub>", "NH<sub>3</sub> dan MgO"],
    kunci: 1,
    hint: "Ikatan ion umumnya terbentuk antara unsur logam dan unsur nonlogam.",
    pembahasan: "<p>Ikatan ion = logam + nonlogam (serah-terima elektron).</p><p>NaCl (Na logam, Cl nonlogam) dan MgO (Mg logam, O nonlogam) → keduanya <b>ion</b>.</p><p>HCl, CO<sub>2</sub>, H<sub>2</sub>O, NH<sub>3</sub> tersusun dari nonlogam-nonlogam → ikatan kovalen.</p>"
  },
  {
    id: "kim-06", bab: "Ikatan Kimia", level: 2, tipe: "mcma",
    soal: "Spesi berikut yang mengandung ikatan kovalen koordinasi adalah … (pilih semua yang benar)",
    opsi: ["NH<sub>4</sub><sup>+</sup>", "CH<sub>4</sub>", "H<sub>3</sub>O<sup>+</sup>", "H<sub>2</sub>O", "H<sub>3</sub>N–BF<sub>3</sub>"],
    kunci: [0, 2, 4],
    hint: "Ikatan kovalen koordinasi terbentuk saat pasangan elektron ikatan berasal dari SATU atom saja (biasanya dari pasangan elektron bebas).",
    pembahasan: "<p>Ikatan kovalen koordinasi: pasangan elektron disumbangkan oleh satu atom yang punya pasangan elektron bebas (PEB).</p><p>• NH<sub>4</sub><sup>+</sup>: PEB pada N dipakai untuk mengikat H<sup>+</sup> → <b>ada</b>.<br>• H<sub>3</sub>O<sup>+</sup>: PEB pada O mengikat H<sup>+</sup> → <b>ada</b>.<br>• H<sub>3</sub>N–BF<sub>3</sub>: PEB N disumbangkan ke B yang kekurangan elektron → <b>ada</b>.<br>• CH<sub>4</sub> dan H<sub>2</sub>O: semua ikatan kovalen biasa (tiap atom menyumbang 1 elektron).</p>"
  },
  {
    id: "kim-07", bab: "Geometri Molekul", level: 2, tipe: "pg",
    soal: "Diketahui nomor atom N = 7 dan H = 1. Bentuk molekul NH<sub>3</sub> adalah …",
    opsi: ["Linear", "Segitiga datar", "Tetrahedral", "Segitiga piramida", "Bentuk V"],
    kunci: 3,
    hint: "Hitung pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB) di atom pusat N, lalu tentukan tipe AX<sub>n</sub>E<sub>m</sub>.",
    pembahasan: "<p>N punya 5 elektron valensi. 3 elektron dipakai berikatan dengan 3 atom H → PEI = 3. Sisa 2 elektron = 1 PEB.</p><p>Tipe molekul AX<sub>3</sub>E → bentuk <b>segitiga piramida</b> (trigonal piramida), sudut ±107°.</p>"
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
    pembahasan: "<p>Xe: 8 elektron valensi, 4 dipakai mengikat 4 F → PEI = 4, sisa 4 elektron = <b>2 PEB</b> → tipe <b>AX<sub>4</sub>E<sub>2</sub></b>.</p><p>Total 6 domain elektron (oktahedral). Dua PEB menempati posisi berseberangan sehingga 4 atom F berada pada satu bidang → <b>segi empat datar</b>.</p><p>Bentuknya simetris sehingga momen dipol saling meniadakan → <b>nonpolar</b>. Pernyataan 4 <b>Salah</b>.</p>"
  },
  {
    id: "kim-09", bab: "Interaksi Antarmolekul", level: 2, tipe: "mcma",
    soal: "Senyawa berikut yang antarmolekulnya dapat membentuk ikatan hidrogen adalah … (pilih semua yang benar)",
    opsi: ["HF", "CH<sub>4</sub>", "NH<sub>3</sub>", "HCl", "CH<sub>3</sub>OH"],
    kunci: [0, 2, 4],
    hint: "Ikatan hidrogen terjadi jika atom H terikat langsung pada atom yang sangat elektronegatif: F, O, atau N.",
    pembahasan: "<p>Syarat ikatan hidrogen: H terikat langsung pada <b>F, O, atau N</b>.</p><p>• HF (H–F) ✔<br>• NH<sub>3</sub> (H–N) ✔<br>• CH<sub>3</sub>OH (punya H–O) ✔<br>• CH<sub>4</sub>: H terikat C → hanya gaya London.<br>• HCl: Cl kurang elektronegatif dan atomnya besar → gaya dipol-dipol, bukan ikatan hidrogen.</p>"
  },
  {
    id: "kim-10", bab: "Hukum Dasar Kimia", level: 1, tipe: "pg",
    soal: "Sebanyak 12 gram logam magnesium dibakar dengan oksigen menghasilkan 20 gram magnesium oksida (MgO). Massa oksigen yang bereaksi adalah …",
    opsi: ["4 gram", "8 gram", "12 gram", "20 gram", "32 gram"],
    kunci: 1,
    hint: "Gunakan hukum kekekalan massa (Lavoisier): massa zat sebelum reaksi = massa zat sesudah reaksi.",
    pembahasan: "<p>Hukum Lavoisier: massa Mg + massa O<sub>2</sub> = massa MgO.</p><p>12 + massa O<sub>2</sub> = 20 → massa O<sub>2</sub> = <b>8 gram</b>.</p>"
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
    pembahasan: "<p>Karbon : oksigen = 3 : 8. Untuk 9 g C dibutuhkan O = 9 × 8/3 = 24 g.</p><p>Oksigen tersedia 32 g → yang bereaksi 24 g, <b>sisa 8 g oksigen</b>.</p><p>Massa CO<sub>2</sub> = 9 + 24 = <b>33 gram</b>.</p>"
  },
  {
    id: "kim-12", bab: "Stoikiometri", level: 1, tipe: "pg",
    soal: "Volume 4,4 gram gas CO<sub>2</sub> (M<sub>r</sub> = 44) pada keadaan standar (STP, 0 °C dan 1 atm) adalah …",
    opsi: ["1,12 L", "2,24 L", "4,48 L", "22,4 L", "44,8 L"],
    kunci: 1,
    hint: "Ubah massa ke mol (n = massa/M<sub>r</sub>), lalu kalikan dengan volume molar STP = 22,4 L/mol.",
    pembahasan: "<p>n = 4,4 / 44 = 0,1 mol.</p><p>V (STP) = n × 22,4 = 0,1 × 22,4 = <b>2,24 L</b>.</p>"
  },
  {
    id: "kim-13", bab: "Stoikiometri", level: 2, tipe: "pg",
    soal: "Perhatikan persamaan reaksi pembakaran propana berikut.<br><i>a</i> C<sub>3</sub>H<sub>8</sub> + <i>b</i> O<sub>2</sub> → <i>c</i> CO<sub>2</sub> + <i>d</i> H<sub>2</sub>O<br>Setelah disetarakan dengan <i>a</i> = 1, nilai <i>b</i> adalah …",
    opsi: ["3", "4", "5", "7", "10"],
    kunci: 2,
    hint: "Setarakan C dulu, lalu H, terakhir O (hitung total atom O di ruas kanan).",
    pembahasan: "<p>C: 3 di kiri → <i>c</i> = 3. H: 8 di kiri → <i>d</i> = 4 (karena H<sub>2</sub>O punya 2 H).</p><p>O di kanan = 3×2 + 4×1 = 10 atom → <i>b</i> = 10/2 = <b>5</b>.</p><p>C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</p>"
  },
  {
    id: "kim-14", bab: "Stoikiometri", level: 3, tipe: "kategori",
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
    pembahasan: "<p>n Al = 5,4/27 = 0,2 mol; n HCl = 0,3 mol.</p><p>Al: 0,2/2 = 0,1; HCl: 0,3/6 = 0,05 → <b>HCl pembatas</b> (1 Benar).</p><p>Al bereaksi = 2/6 × 0,3 = 0,1 mol → sisa 0,2 − 0,1 = <b>0,1 mol</b> (2 Benar).</p><p>H<sub>2</sub> = 3/6 × 0,3 = 0,15 mol → V = 0,15 × 22,4 = <b>3,36 L</b> (3 Benar).</p><p>AlCl<sub>3</sub> = 2/6 × 0,3 = <b>0,1 mol</b>, bukan 0,15 mol (4 Salah).</p>"
  },

  // ===================== KIMIA ANALITIK =====================
  {
    id: "kim-15", bab: "Larutan", level: 1, tipe: "pg",
    soal: "Sebanyak 4 gram NaOH (M<sub>r</sub> = 40) dilarutkan dalam air hingga volume larutan 500 mL. Konsentrasi (molaritas) larutan NaOH tersebut adalah …",
    opsi: ["0,05 M", "0,1 M", "0,2 M", "0,4 M", "2 M"],
    kunci: 2,
    hint: "M = mol / volume dalam liter. Jangan lupa ubah 500 mL ke liter.",
    pembahasan: "<p>n NaOH = 4/40 = 0,1 mol. V = 500 mL = 0,5 L.</p><p>M = 0,1 / 0,5 = <b>0,2 M</b>.</p>"
  },
  {
    id: "kim-16", bab: "Larutan", level: 1, tipe: "mcma",
    soal: "Larutan berikut yang termasuk elektrolit kuat adalah … (pilih semua yang benar)",
    opsi: ["HCl", "NaCl", "CH<sub>3</sub>COOH", "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glukosa)", "KOH"],
    kunci: [0, 1, 4],
    hint: "Elektrolit kuat = terionisasi sempurna: asam kuat, basa kuat, dan sebagian besar garam.",
    pembahasan: "<p>• HCl = asam kuat ✔<br>• NaCl = garam, terionisasi sempurna ✔<br>• KOH = basa kuat ✔<br>• CH<sub>3</sub>COOH = asam lemah → elektrolit <i>lemah</i>.<br>• Glukosa tidak terionisasi → <i>nonelektrolit</i>.</p>"
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
    pembahasan: "<p>H<sub>2</sub>O melepas H<sup>+</sup> menjadi OH<sup>−</sup> → H<sub>2</sub>O <b>asam</b>, OH<sup>−</sup> basa konjugasinya.</p><p>NH<sub>3</sub> menerima H<sup>+</sup> menjadi NH<sub>4</sub><sup>+</sup> → NH<sub>3</sub> <b>basa</b>, NH<sub>4</sub><sup>+</sup> asam konjugasinya.</p><p>Jadi pernyataan 4 <b>Salah</b>: NH<sub>3</sub> menerima proton, bukan memberi.</p>"
  },
  {
    id: "kim-18", bab: "pH", level: 1, tipe: "pg",
    soal: "pH larutan HCl 0,01 M adalah …",
    opsi: ["1", "2", "3", "12", "13"],
    kunci: 1,
    hint: "HCl asam kuat bervalensi 1, jadi [H<sup>+</sup>] = konsentrasi HCl. pH = −log [H<sup>+</sup>].",
    pembahasan: "<p>[H<sup>+</sup>] = 1 × 0,01 = 10<sup>−2</sup> M.</p><p>pH = −log 10<sup>−2</sup> = <b>2</b>.</p>"
  },
  {
    id: "kim-19", bab: "pH", level: 2, tipe: "pg",
    soal: "pH larutan CH<sub>3</sub>COOH 0,1 M (K<sub>a</sub> = 1 × 10<sup>−5</sup>) adalah …",
    opsi: ["1", "2", "3", "5", "6"],
    kunci: 2,
    hint: "Untuk asam lemah: [H<sup>+</sup>] = √(K<sub>a</sub> × M).",
    pembahasan: "<p>[H<sup>+</sup>] = √(10<sup>−5</sup> × 10<sup>−1</sup>) = √10<sup>−6</sup> = 10<sup>−3</sup> M.</p><p>pH = <b>3</b>. (Bandingkan: HCl 0,1 M pH-nya 1 — asam lemah menghasilkan H<sup>+</sup> jauh lebih sedikit.)</p>"
  },
  {
    id: "kim-20", bab: "Kesetimbangan Larutan", level: 2, tipe: "pg",
    soal: "Larutan garam berikut yang bersifat basa (pH > 7) adalah …",
    opsi: ["NaCl", "NH<sub>4</sub>Cl", "CH<sub>3</sub>COONa", "KNO<sub>3</sub>", "(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>"],
    kunci: 2,
    hint: "Tentukan asam dan basa pembentuk tiap garam. Sifat larutan garam mengikuti komponen yang KUAT.",
    pembahasan: "<p>• NaCl, KNO<sub>3</sub>: asam kuat + basa kuat → netral.<br>• NH<sub>4</sub>Cl, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>: asam kuat + basa lemah → asam.<br>• <b>CH<sub>3</sub>COONa</b>: asam lemah (CH<sub>3</sub>COOH) + basa kuat (NaOH) → ion CH<sub>3</sub>COO<sup>−</sup> terhidrolisis menghasilkan OH<sup>−</sup> → <b>basa</b>.</p>"
  },
  {
    id: "kim-21", bab: "Kesetimbangan Larutan", level: 3, tipe: "pg",
    soal: "Sebanyak 100 mL CH<sub>3</sub>COOH 0,2 M dicampur dengan 100 mL NaOH 0,1 M. Jika K<sub>a</sub> CH<sub>3</sub>COOH = 1 × 10<sup>−5</sup>, pH campuran adalah …",
    opsi: ["3", "4", "5", "9", "11"],
    kunci: 2,
    hint: "Hitung mmol masing-masing, reaksikan. Jika asam lemah bersisa bersama garamnya, campuran itu larutan penyangga: [H<sup>+</sup>] = K<sub>a</sub> × (mol asam / mol garam).",
    pembahasan: "<p>CH<sub>3</sub>COOH = 100 × 0,2 = 20 mmol; NaOH = 100 × 0,1 = 10 mmol.</p><p>CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O<br>Sisa: asam 10 mmol, garam 10 mmol, NaOH habis → <b>penyangga asam</b>.</p><p>[H<sup>+</sup>] = 10<sup>−5</sup> × 10/10 = 10<sup>−5</sup> → pH = <b>5</b>.</p>"
  },
  {
    id: "kim-22", bab: "Kesetimbangan Larutan", level: 2, tipe: "pg",
    soal: "Kelarutan Mg(OH)<sub>2</sub> dalam air adalah 1 × 10<sup>−4</sup> mol/L. Hasil kali kelarutan (K<sub>sp</sub>) Mg(OH)<sub>2</sub> adalah …",
    opsi: ["1 × 10<sup>−8</sup>", "2 × 10<sup>−8</sup>", "1 × 10<sup>−12</sup>", "4 × 10<sup>−12</sup>", "4 × 10<sup>−8</sup>"],
    kunci: 3,
    hint: "Tulis penguraiannya: Mg(OH)<sub>2</sub> ⇌ Mg<sup>2+</sup> + 2OH<sup>−</sup>. Jika kelarutannya s, berapa [Mg<sup>2+</sup>] dan [OH<sup>−</sup>]?",
    pembahasan: "<p>Mg(OH)<sub>2</sub> ⇌ Mg<sup>2+</sup> + 2OH<sup>−</sup> → [Mg<sup>2+</sup>] = s, [OH<sup>−</sup>] = 2s.</p><p>K<sub>sp</sub> = s × (2s)<sup>2</sup> = 4s<sup>3</sup> = 4 × (10<sup>−4</sup>)<sup>3</sup> = <b>4 × 10<sup>−12</sup></b>.</p>"
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
    pembahasan: "<p>1. Kabut = koloid yang menghamburkan cahaya → <b>efek Tyndall</b> ✔.<br>2. Tawas (Al<sup>3+</sup>) menetralkan muatan partikel koloid sehingga menggumpal → <b>koagulasi</b> ✔.<br>3. Cuci darah memisahkan zat sisa melalui membran semipermeabel → <b>dialisis</b> ✔.<br>4. Norit menyerap racun di permukaannya → <b>adsorpsi</b>, bukan elektroforesis → <b>Salah</b>.</p>"
  },

  // ===================== KIMIA FISIK =====================
  {
    id: "kim-24", bab: "Termokimia", level: 1, tipe: "pg",
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
    pembahasan: "<p>Sistem = NaOH + air; lingkungan = gelas dan tangan. Lingkungan menjadi panas karena menerima kalor dari sistem.</p><p>Sistem melepas kalor → <b>eksoterm</b>, entalpi sistem berkurang → <b>ΔH &lt; 0</b>.</p>"
  },
  {
    id: "kim-25", bab: "Termokimia", level: 2, tipe: "pg",
    stimulus: "<p>Diketahui entalpi pembentukan standar (ΔH<sub>f</sub>°):</p><table><tr><th>Zat</th><th>ΔH<sub>f</sub>° (kJ/mol)</th></tr><tr><td>CH<sub>4</sub>(g)</td><td>−75</td></tr><tr><td>CO<sub>2</sub>(g)</td><td>−394</td></tr><tr><td>H<sub>2</sub>O(l)</td><td>−286</td></tr></table>",
    soal: "Entalpi pembakaran 1 mol gas metana menurut reaksi CH<sub>4</sub>(g) + 2O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2H<sub>2</sub>O(l) adalah …",
    opsi: ["−605 kJ/mol", "−755 kJ/mol", "−891 kJ/mol", "−1.041 kJ/mol", "+891 kJ/mol"],
    kunci: 2,
    hint: "ΔH reaksi = Σ ΔH<sub>f</sub> produk − Σ ΔH<sub>f</sub> pereaksi. Kalikan dengan koefisien, dan ΔH<sub>f</sub> unsur bebas (O<sub>2</sub>) = 0.",
    pembahasan: "<p>ΔH = [ΔH<sub>f</sub> CO<sub>2</sub> + 2 × ΔH<sub>f</sub> H<sub>2</sub>O] − [ΔH<sub>f</sub> CH<sub>4</sub> + 2 × 0]</p><p>= [−394 + 2(−286)] − [−75] = −966 + 75 = <b>−891 kJ/mol</b>.</p><p>Jebakan: lupa koefisien 2 pada H<sub>2</sub>O → −605; salah tanda CH<sub>4</sub> → −1.041.</p>"
  },
  {
    id: "kim-26", bab: "Laju Reaksi", level: 1, tipe: "mcma",
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
    pembahasan: "<p>• Suhu naik → energi kinetik partikel naik, tumbukan efektif bertambah ✔<br>• Serbuk → luas permukaan sentuh lebih besar ✔<br>• Katalis → menurunkan energi aktivasi ✔<br>• Menurunkan konsentrasi dan mendinginkan justru <i>memperlambat</i> reaksi.</p>"
  },
  {
    id: "kim-27", bab: "Laju Reaksi", level: 3, tipe: "kategori",
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
    pembahasan: "<p>Percobaan 1 → 2: [A] ×2, laju ×4 → 2<sup>x</sup> = 4 → <b>x = 2</b> ✔.</p><p>Percobaan 1 → 3: [B] ×2, laju ×2 → 2<sup>y</sup> = 2 → <b>y = 1</b> ✔.</p><p>v = k[A]<sup>2</sup>[B], orde total = 2 + 1 = <b>3</b> → pernyataan 3 Salah.</p><p>[A] dan [B] ×2 → laju = 2<sup>2</sup> × 2<sup>1</sup> = <b>8 kali</b> ✔.</p>"
  },
  {
    id: "kim-28", bab: "Kesetimbangan Kimia", level: 2, tipe: "kategori",
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
    pembahasan: "<p>1. Tekanan naik → bergeser ke jumlah mol gas lebih kecil (kanan, 2 mol) ✔.</p><p>2. Reaksi ke kanan eksoterm. Suhu naik → bergeser ke arah endoterm (<b>kiri</b>) → Salah.</p><p>3. Menambah pereaksi → bergeser ke kanan → NH<sub>3</sub> bertambah ✔.</p><p>4. Katalis hanya mempercepat tercapainya kesetimbangan, <b>tidak menggeser</b> → Salah.</p>"
  },
  {
    id: "kim-29", bab: "Kesetimbangan Kimia", level: 3, tipe: "pg",
    soal: "Dalam wadah 1 liter dimasukkan 1 mol H<sub>2</sub> dan 1 mol I<sub>2</sub>. Keduanya bereaksi: H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). Saat setimbang terdapat 1,6 mol HI. Nilai tetapan kesetimbangan K<sub>c</sub> adalah …",
    opsi: ["8", "16", "32", "40", "64"],
    kunci: 4,
    hint: "Buat tabel mula-mula, reaksi, setimbang (MRS). Terbentuk 1,6 mol HI berarti H<sub>2</sub> dan I<sub>2</sub> yang bereaksi masing-masing setengahnya.",
    pembahasan: "<p>Mula: H<sub>2</sub> 1, I<sub>2</sub> 1, HI 0.<br>Reaksi: −0,8, −0,8, +1,6.<br>Setimbang: H<sub>2</sub> 0,2, I<sub>2</sub> 0,2, HI 1,6 (volume 1 L, jadi mol = M).</p><p>K<sub>c</sub> = [HI]<sup>2</sup> / ([H<sub>2</sub>][I<sub>2</sub>]) = 1,6<sup>2</sup> / (0,2 × 0,2) = 2,56 / 0,04 = <b>64</b>.</p>"
  },

  // ===================== KIMIA ORGANIK =====================
  {
    id: "kim-30", bab: "Senyawa Karbon", level: 1, tipe: "pg",
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
    pembahasan: "<p>Gugus –COO– yang diapit dua gugus alkil = <b>ester</b>.</p><p>Bagian CH<sub>3</sub>–CO– (2 C, termasuk C karbonil) → <i>etanoat</i>. Bagian –O–CH<sub>2</sub>CH<sub>3</sub> → <i>etil</i>. Nama: <b>etil etanoat</b> (etil asetat, aroma buah).</p><p>Metil propanoat adalah CH<sub>3</sub>CH<sub>2</sub>COOCH<sub>3</sub> — isomernya, bukan senyawa ini.</p>"
  },
  {
    id: "kim-31", bab: "Senyawa Karbon", level: 2, tipe: "pg",
    soal: "Nama IUPAC senyawa CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub> adalah …",
    opsi: ["2-metilbutana", "3-metilbutana", "pentana", "2-metilpropana", "2-etilpropana"],
    kunci: 0,
    hint: "Cari rantai karbon terpanjang, lalu beri nomor dari ujung yang paling dekat dengan cabang.",
    pembahasan: "<p>Rantai terpanjang: 4 C → <i>butana</i>. Cabang metil (–CH<sub>3</sub>).</p><p>Penomoran dari ujung kiri membuat cabang di C-2 (dari kanan di C-3). Pilih nomor terkecil → <b>2-metilbutana</b>.</p><p>\"3-metilbutana\" salah karena penomorannya tidak dari ujung terdekat.</p>"
  },
  {
    id: "kim-32", bab: "Senyawa Karbon", level: 2, tipe: "mcma",
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
    pembahasan: "<p>• 2-butanol: C<sub>4</sub>H<sub>10</sub>O → isomer posisi ✔<br>• Dietil eter C<sub>2</sub>H<sub>5</sub>–O–C<sub>2</sub>H<sub>5</sub>: C<sub>4</sub>H<sub>10</sub>O → isomer fungsi (alkohol berisomer fungsi dengan eter) ✔<br>• 2-metil-2-propanol: C<sub>4</sub>H<sub>10</sub>O → isomer rangka ✔<br>• Butanal: C<sub>4</sub>H<sub>8</sub>O ✘<br>• Asam butanoat: C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> ✘</p>"
  },
  {
    id: "kim-33", bab: "Senyawa Karbon", level: 3, tipe: "kategori",
    soal: "Tentukan benar atau salah jenis reaksi senyawa karbon berikut!",
    pernyataan: [
      "CH<sub>2</sub>=CH<sub>2</sub> + HBr → CH<sub>3</sub>–CH<sub>2</sub>Br adalah reaksi adisi.",
      "CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl adalah reaksi substitusi.",
      "CH<sub>3</sub>–CH<sub>2</sub>OH → CH<sub>2</sub>=CH<sub>2</sub> + H<sub>2</sub>O (H<sub>2</sub>SO<sub>4</sub> pekat, 180 °C) adalah reaksi eliminasi.",
      "CH<sub>3</sub>–CH<sub>2</sub>Cl + NaOH → CH<sub>3</sub>–CH<sub>2</sub>OH + NaCl adalah reaksi adisi."
    ],
    kunci: [true, true, true, false],
    hint: "Adisi: ikatan rangkap → tunggal. Eliminasi: ikatan tunggal → rangkap. Substitusi: satu atom/gugus ditukar dengan yang lain, jenis ikatan tetap.",
    pembahasan: "<p>1. Ikatan rangkap C=C menjadi tunggal → <b>adisi</b> ✔.</p><p>2. Satu H diganti Cl → <b>substitusi</b> ✔.</p><p>3. Terlepas H<sub>2</sub>O dan terbentuk ikatan rangkap → <b>eliminasi</b> (dehidrasi) ✔.</p><p>4. Cl diganti OH, tidak ada ikatan rangkap yang hilang → <b>substitusi</b>, bukan adisi → Salah.</p>"
  },
  {
    id: "kim-34", bab: "Senyawa Karbon", level: 3, tipe: "pg",
    soal: "Senyawa 2-propanol dioksidasi menggunakan larutan K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> dalam suasana asam. Hasil oksidasi tersebut adalah …",
    opsi: ["Propanal", "Propanon", "Asam propanoat", "Propena", "Tidak bereaksi"],
    kunci: 1,
    hint: "Tentukan dulu jenis alkoholnya (primer, sekunder, atau tersier) dari letak gugus –OH.",
    pembahasan: "<p>2-propanol (CH<sub>3</sub>–CHOH–CH<sub>3</sub>): gugus –OH pada C yang mengikat 2 C lain → <b>alkohol sekunder</b>.</p><p>Oksidasi alkohol:<br>• primer → aldehida → asam karboksilat<br>• sekunder → <b>keton</b><br>• tersier → tidak teroksidasi</p><p>Jadi hasilnya <b>propanon</b> (aseton), CH<sub>3</sub>–CO–CH<sub>3</sub>.</p>"
  }
]};
