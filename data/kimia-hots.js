// Paket HOTS Kimia — soal penalaran bergaya tryout TKA (bukan salinan; angka dan konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["kimia-hots"] = { soal: [

  // ===================== STRUKTUR ATOM & STOIKIOMETRI =====================
  {
    id: "kmh-01", bab: "Struktur Atom & SPU", level: 2, tipe: "kategori",
    stimulus: "<p>Elektron terakhir suatu atom X pada keadaan dasar memiliki bilangan kuantum: <b>n = 3, l = 1, m = 0, s = −½</b>.</p><p>(Gunakan aturan: elektron pertama yang mengisi suatu orbital memiliki s = +½, dan pengisian orbital p dimulai dari m = −1, 0, lalu +1.)</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Konfigurasi elektron atom X berakhir pada 3p<sup>5</sup>.",
      "Unsur X terletak pada golongan VIIA periode 3.",
      "Nomor atom unsur X adalah 16.",
      "Unsur X cenderung membentuk ion X<sup>−</sup>."
    ],
    kunci: [true, true, false, true],
    hint: "n = 3 dan l = 1 berarti subkulit 3p. Isi tiga kotak orbital (m = −1, 0, +1) dengan panah ke atas dulu, lalu panah ke bawah. Elektron dengan m = 0 dan s = −½ adalah elektron ke berapa?",
    pembahasan: "<p>Subkulit 3p: elektron ke-1, 2, 3 mengisi m = −1, 0, +1 dengan s = +½. Elektron ke-4 di m = −1 (s = −½), elektron ke-5 di <b>m = 0 (s = −½)</b> → 3p<sup>5</sup> ✔.</p><p>Konfigurasi: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> → elektron valensi 7, kulit 3 → golongan VIIA periode 3 ✔.</p><p>Nomor atom = 17 (unsur Cl), bukan 16 → Salah.</p><p>Kurang 1 elektron menuju oktet → mudah menerima elektron membentuk X<sup>−</sup> ✔.</p>"
  },
  {
    id: "kmh-02", bab: "Struktur Atom & SPU", level: 2, tipe: "mcma",
    soal: "Set bilangan kuantum berikut yang TIDAK DIIZINKAN untuk sebuah elektron adalah … (pilih semua yang benar)",
    opsi: [
      "n = 2, l = 2, m = 0, s = +½",
      "n = 3, l = 1, m = −2, s = −½",
      "n = 4, l = 0, m = 0, s = +½",
      "n = 3, l = 2, m = −2, s = −½",
      "n = 1, l = 0, m = 0, s = 0"
    ],
    kunci: [0, 1, 4],
    hint: "Aturan: l = 0 sampai (n − 1); m = −l sampai +l; s hanya +½ atau −½.",
    pembahasan: "<p>• n = 2 → l maksimal 1, jadi l = 2 tidak boleh ✘ (tidak diizinkan)<br>• l = 1 → m hanya −1, 0, +1; m = −2 tidak boleh ✘<br>• n = 4, l = 0, m = 0 → 4s, diizinkan<br>• n = 3, l = 2, m = −2 → 3d, diizinkan<br>• s = 0 tidak ada; s hanya ±½ ✘</p>"
  },
  {
    id: "kmh-03", bab: "Stoikiometri", level: 3, tipe: "mcma",
    stimulus: "<p>Pada tanur tiup, bijih besi direduksi oleh gas karbon monoksida:</p><p>Fe<sub>2</sub>O<sub>3</sub>(s) + 3CO(g) → 2Fe(s) + 3CO<sub>2</sub>(g)</p><p>Sebanyak 32 gram Fe<sub>2</sub>O<sub>3</sub> direaksikan dengan 0,45 mol CO. (A<sub>r</sub> Fe = 56, O = 16)</p>",
    soal: "Pernyataan yang benar adalah … (pilih semua yang benar)",
    opsi: [
      "CO merupakan pereaksi pembatas.",
      "Massa besi yang dihasilkan adalah 16,8 gram.",
      "Fe<sub>2</sub>O<sub>3</sub> tersisa sebanyak 8 gram.",
      "Volume CO<sub>2</sub> yang dihasilkan pada STP adalah 6,72 liter.",
      "Fe<sub>2</sub>O<sub>3</sub> merupakan pereaksi pembatas."
    ],
    kunci: [0, 1, 2],
    hint: "M<sub>r</sub> Fe<sub>2</sub>O<sub>3</sub> = 160. Bandingkan mol/koefisien: Fe<sub>2</sub>O<sub>3</sub> (÷1) dan CO (÷3).",
    pembahasan: "<p>n Fe<sub>2</sub>O<sub>3</sub> = 32/160 = 0,2 mol → 0,2/1 = 0,2. n CO = 0,45 → 0,45/3 = 0,15. Nilai terkecil → <b>CO pembatas</b> ✔.</p><p>Fe = 2/3 × 0,45 = 0,3 mol × 56 = <b>16,8 g</b> ✔.</p><p>Fe<sub>2</sub>O<sub>3</sub> bereaksi = 1/3 × 0,45 = 0,15 mol → sisa 0,05 mol × 160 = <b>8 g</b> ✔.</p><p>CO<sub>2</sub> = 0,45 mol × 22,4 = <b>10,08 L</b>, bukan 6,72 L ✘.</p>"
  },
  {
    id: "kmh-04", bab: "Stoikiometri", level: 3, tipe: "pg",
    soal: "Sebanyak 10 liter campuran gas metana (CH<sub>4</sub>) dan propana (C<sub>3</sub>H<sub>8</sub>) dibakar sempurna dan memerlukan 32 liter gas oksigen. Semua gas diukur pada suhu dan tekanan yang sama. Perbandingan volume metana terhadap propana dalam campuran adalah …",
    opsi: ["1 : 2", "2 : 3", "3 : 2", "2 : 1", "3 : 1"],
    kunci: 2,
    hint: "Tulis reaksinya: CH<sub>4</sub> + 2O<sub>2</sub> → … dan C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → … Pada P dan T sama, perbandingan volume = perbandingan koefisien.",
    pembahasan: "<p>Misalkan CH<sub>4</sub> = a L dan C<sub>3</sub>H<sub>8</sub> = b L.</p><p>a + b = 10<br>2a + 5b = 32</p><p>Kurangi 2 × persamaan pertama: 3b = 12 → b = 4, a = 6.</p><p>CH<sub>4</sub> : C<sub>3</sub>H<sub>8</sub> = 6 : 4 = <b>3 : 2</b>.</p>"
  },

  // ===================== TERMOKIMIA & LAJU =====================
  {
    id: "kmh-05", bab: "Termokimia", level: 2, tipe: "pg",
    soal: "Sebanyak 0,01 mol suatu senyawa organik dibakar sempurna dalam kalorimeter bom yang berisi 1 liter air. Suhu air naik 2,5 °C. Kapasitas kalor kalorimeter 400 J/°C dan kalor jenis air 4,2 J/g°C (massa jenis air 1 g/mL). Entalpi pembakaran senyawa tersebut adalah …",
    opsi: ["−11,5 kJ/mol", "−115 kJ/mol", "−1.050 kJ/mol", "−1.150 kJ/mol", "+1.150 kJ/mol"],
    kunci: 3,
    hint: "Kalor diserap oleh air (m·c·ΔT) DAN oleh kalorimeter (C·ΔT). Jumlahkan, lalu bagi dengan mol. Pembakaran melepas kalor, jadi tandanya negatif.",
    pembahasan: "<p>q air = 1.000 × 4,2 × 2,5 = 10.500 J.<br>q kalorimeter = 400 × 2,5 = 1.000 J.<br>q total = 11.500 J = 11,5 kJ.</p><p>ΔH = −11,5 / 0,01 = <b>−1.150 kJ/mol</b>.</p><p>Jebakan: lupa kalor kalorimeter → −1.050; lupa membagi dengan mol → −11,5.</p>"
  },
  {
    id: "kmh-06", bab: "Termokimia", level: 2, tipe: "pg",
    stimulus: "<p>Data energi ikatan rata-rata (kJ/mol): C=C = 614; C–C = 348; C–H = 413; H–H = 436.</p>",
    soal: "Perubahan entalpi reaksi C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>6</sub>(g) adalah …",
    opsi: ["+124 kJ", "−124 kJ", "−348 kJ", "+262 kJ", "−1.174 kJ"],
    kunci: 1,
    hint: "ΔH = Σ energi ikatan yang DIPUTUS − Σ energi ikatan yang DIBENTUK. Cukup hitung ikatan yang berubah: C=C dan H–H putus; C–C dan 2 C–H baru terbentuk.",
    pembahasan: "<p>Diputus: C=C (614) + H–H (436) = 1.050 kJ.<br>Dibentuk: C–C (348) + 2 × C–H (826) = 1.174 kJ.</p><p>ΔH = 1.050 − 1.174 = <b>−124 kJ</b> (eksoterm).</p><p>Jebakan: tanda terbalik (dibentuk − diputus) menghasilkan +124 kJ.</p>"
  },
  {
    id: "kmh-07", bab: "Laju Reaksi", level: 2, tipe: "kategori",
    stimulus: "<p>Pada reaksi N<sub>2</sub>(g) + 3H<sub>2</sub>(g) → 2NH<sub>3</sub>(g), laju pembentukan NH<sub>3</sub> adalah 0,4 M/s.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Laju berkurangnya N<sub>2</sub> adalah 0,2 M/s.",
      "Laju berkurangnya H<sub>2</sub> adalah 0,6 M/s.",
      "Laju pembentukan NH<sub>3</sub> sama dengan laju berkurangnya N<sub>2</sub>.",
      "Dalam 5 detik, konsentrasi H<sub>2</sub> berkurang 3 M."
    ],
    kunci: [true, true, false, true],
    hint: "Perbandingan laju = perbandingan koefisien. N<sub>2</sub> : H<sub>2</sub> : NH<sub>3</sub> = 1 : 3 : 2.",
    pembahasan: "<p>v N<sub>2</sub> = ½ × 0,4 = 0,2 M/s ✔.<br>v H<sub>2</sub> = 3/2 × 0,4 = 0,6 M/s ✔.<br>v NH<sub>3</sub> (0,4) ≠ v N<sub>2</sub> (0,2) → Salah.<br>Dalam 5 s: 0,6 × 5 = 3 M ✔.</p>"
  },

  // ===================== KESETIMBANGAN =====================
  {
    id: "kmh-08", bab: "Kesetimbangan Kimia", level: 3, tipe: "mcma",
    stimulus: "<p>Sebanyak 1 mol N<sub>2</sub>O<sub>4</sub> dimasukkan ke wadah 1 liter dan terurai: N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g). Saat setimbang, 50% N<sub>2</sub>O<sub>4</sub> telah terurai pada suhu T.</p>",
    soal: "Pernyataan yang benar adalah … (pilih semua yang benar)",
    opsi: [
      "Nilai K<sub>c</sub> = 2",
      "Selisih koefisien gas (Δn) = +1",
      "K<sub>p</sub> = 2RT",
      "Fraksi mol NO<sub>2</sub> saat setimbang = 1/3",
      "Jumlah mol gas total saat setimbang lebih kecil daripada mula-mula"
    ],
    kunci: [0, 1, 2],
    hint: "Buat tabel MRS. 50% dari 1 mol = 0,5 mol bereaksi, sehingga NO<sub>2</sub> terbentuk 2 × 0,5. Hubungan: K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup>.",
    pembahasan: "<p>Setimbang: N<sub>2</sub>O<sub>4</sub> = 0,5 mol; NO<sub>2</sub> = 1,0 mol (V = 1 L).</p><p>K<sub>c</sub> = 1,0<sup>2</sup>/0,5 = <b>2</b> ✔. Δn = 2 − 1 = <b>+1</b> ✔ → K<sub>p</sub> = 2(RT)<sup>1</sup> = <b>2RT</b> ✔.</p><p>Mol total = 1,5 → fraksi NO<sub>2</sub> = 1/1,5 = <b>2/3</b>, bukan 1/3 ✘. Mol total naik dari 1 menjadi 1,5, bukan turun ✘.</p>"
  },
  {
    id: "kmh-09", bab: "Kesetimbangan Kimia", level: 2, tipe: "pg",
    soal: "Perhatikan kesetimbangan 2NO<sub>2</sub>(g) (cokelat) ⇌ N<sub>2</sub>O<sub>4</sub>(g) (tak berwarna), ΔH = −57 kJ. Jika tabung berisi campuran setimbang ini dimasukkan ke air panas, yang terjadi adalah …",
    opsi: [
      "Kesetimbangan bergeser ke kanan, warna makin pudar.",
      "Kesetimbangan bergeser ke kiri, warna makin cokelat.",
      "Kesetimbangan tidak bergeser karena tekanan tetap.",
      "Nilai K<sub>c</sub> bertambah besar.",
      "Seluruh NO<sub>2</sub> berubah menjadi N<sub>2</sub>O<sub>4</sub>."
    ],
    kunci: 1,
    hint: "ΔH negatif berarti reaksi ke KANAN eksoterm. Saat suhu dinaikkan, sistem bergeser ke arah reaksi endoterm.",
    pembahasan: "<p>Reaksi ke kanan eksoterm, sehingga ke kiri endoterm. Suhu naik → bergeser ke arah endoterm (<b>kiri</b>) → NO<sub>2</sub> bertambah → warna <b>makin cokelat</b>.</p><p>Untuk reaksi eksoterm, K<sub>c</sub> justru <i>mengecil</i> saat suhu naik.</p>"
  },

  // ===================== LARUTAN, ASAM-BASA, TITRASI =====================
  {
    id: "kmh-10", bab: "Asam-Basa", level: 2, tipe: "pg",
    soal: "Derajat ionisasi (α) larutan asam format HCOOH 0,1 M dengan K<sub>a</sub> = 1 × 10<sup>−4</sup> adalah … (√10 = 3,16)",
    opsi: ["0,1%", "1%", "3,16%", "10%", "31,6%"],
    kunci: 2,
    hint: "Untuk asam lemah: α = √(K<sub>a</sub> / M).",
    pembahasan: "<p>α = √(10<sup>−4</sup> / 10<sup>−1</sup>) = √10<sup>−3</sup> = √(10 × 10<sup>−4</sup>) = 3,16 × 10<sup>−2</sup> = <b>3,16%</b>.</p><p>Artinya hanya sekitar 3 dari 100 molekul HCOOH yang terionisasi.</p>"
  },
  {
    id: "kmh-11", bab: "Asam-Basa", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang hidrolisis larutan garam 0,1 M berikut!",
    pernyataan: [
      "Larutan CH<sub>3</sub>COOK mengubah lakmus merah menjadi biru.",
      "Larutan NH<sub>4</sub>Cl terhidrolisis sebagian dan bersifat asam.",
      "Larutan KNO<sub>3</sub> mengubah lakmus biru menjadi merah.",
      "Larutan NH<sub>4</sub>CN (K<sub>a</sub> HCN &lt; K<sub>b</sub> NH<sub>3</sub>) terhidrolisis total dan bersifat basa."
    ],
    kunci: [true, true, false, true],
    hint: "Tentukan asam dan basa pembentuk setiap garam. Kuat + kuat = tidak terhidrolisis. Lemah + lemah = hidrolisis total, sifatnya ditentukan oleh K yang lebih besar.",
    pembahasan: "<p>1. CH<sub>3</sub>COOK: asam lemah + basa kuat → basa → lakmus merah jadi biru ✔.</p><p>2. NH<sub>4</sub>Cl: basa lemah + asam kuat → hidrolisis sebagian, asam ✔.</p><p>3. KNO<sub>3</sub>: kuat + kuat → netral, lakmus tidak berubah → Salah.</p><p>4. NH<sub>4</sub>CN: lemah + lemah → hidrolisis total. K<sub>b</sub> &gt; K<sub>a</sub> → basa ✔.</p>"
  },
  {
    id: "kmh-12", bab: "Asam-Basa", level: 3, tipe: "mcma",
    soal: "Sebanyak 100 mL NH<sub>3</sub> 0,2 M dicampur dengan 100 mL HCl 0,1 M (K<sub>b</sub> NH<sub>3</sub> = 1 × 10<sup>−5</sup>). Pernyataan yang benar tentang campuran tersebut adalah … (pilih semua yang benar)",
    opsi: [
      "Campuran merupakan larutan penyangga basa.",
      "pH campuran = 9.",
      "NH<sub>4</sub>Cl yang terbentuk sebanyak 10 mmol.",
      "HCl masih tersisa 10 mmol.",
      "pH campuran = 5."
    ],
    kunci: [0, 1, 2],
    hint: "Hitung mmol: NH<sub>3</sub> 20, HCl 10. Setelah bereaksi, jika basa lemah bersisa bersama garamnya → penyangga basa: [OH<sup>−</sup>] = K<sub>b</sub> × (mol basa / mol garam).",
    pembahasan: "<p>NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl. NH<sub>3</sub> 20 mmol, HCl 10 mmol (habis).<br>Sisa NH<sub>3</sub> 10 mmol, NH<sub>4</sub>Cl 10 mmol ✔ → <b>penyangga basa</b> ✔.</p><p>[OH<sup>−</sup>] = 10<sup>−5</sup> × 10/10 = 10<sup>−5</sup> → pOH = 5 → <b>pH = 9</b> ✔.</p><p>HCl habis ✘. pH 5 adalah pOH-nya, bukan pH ✘.</p>"
  },
  {
    id: "kmh-13", bab: "Titrasi", level: 3, tipe: "pg",
    stimulus: "<p>Sebanyak 10 mL larutan HCl pekat diencerkan hingga 100 mL. Kemudian 25 mL larutan encer tersebut dititrasi dengan NaOH 0,1 M menggunakan indikator fenolftalein.</p><table><tr><th>Titrasi</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Volume NaOH (mL)</td><td>19,8</td><td>20,2</td><td>20,0</td></tr></table>",
    soal: "Konsentrasi HCl sebelum diencerkan adalah …",
    opsi: ["0,08 M", "0,2 M", "0,32 M", "0,8 M", "8 M"],
    kunci: 3,
    hint: "Ambil rata-rata volume NaOH. Pada titik ekuivalen: mol HCl = mol NaOH. Ingat bahwa yang dititrasi adalah larutan encer, jadi kalikan dengan faktor pengenceran.",
    pembahasan: "<p>Rata-rata NaOH = (19,8 + 20,2 + 20,0)/3 = 20,0 mL → 20,0 × 0,1 = 2 mmol.</p><p>HCl encer: 2 mmol / 25 mL = 0,08 M.</p><p>Faktor pengenceran 100/10 = 10 → HCl awal = 0,08 × 10 = <b>0,8 M</b>.</p><p>Jebakan: berhenti di 0,08 M (lupa pengenceran).</p>"
  },
  {
    id: "kmh-14", bab: "Kelarutan & Ksp", level: 3, tipe: "pg",
    soal: "Sebanyak 100 mL AgNO<sub>3</sub> 0,002 M dicampur dengan 100 mL NaCl 0,002 M. Jika K<sub>sp</sub> AgCl = 1,8 × 10<sup>−10</sup>, pernyataan yang tepat adalah …",
    opsi: [
      "Terbentuk endapan karena Q<sub>sp</sub> = 1 × 10<sup>−6</sup> &gt; K<sub>sp</sub>",
      "Terbentuk endapan karena Q<sub>sp</sub> = 4 × 10<sup>−6</sup> &gt; K<sub>sp</sub>",
      "Tidak terbentuk endapan karena Q<sub>sp</sub> &lt; K<sub>sp</sub>",
      "Larutan tepat jenuh karena Q<sub>sp</sub> = K<sub>sp</sub>",
      "Tidak terbentuk endapan karena ion Na<sup>+</sup> menghambat pengendapan"
    ],
    kunci: 0,
    hint: "Setelah dicampur, volume menjadi 200 mL sehingga konsentrasi setiap ion menjadi setengahnya. Q<sub>sp</sub> = [Ag<sup>+</sup>][Cl<sup>−</sup>].",
    pembahasan: "<p>Setelah dicampur (V = 200 mL): [Ag<sup>+</sup>] = 0,001 M, [Cl<sup>−</sup>] = 0,001 M.</p><p>Q<sub>sp</sub> = 10<sup>−3</sup> × 10<sup>−3</sup> = <b>10<sup>−6</sup></b> &gt; 1,8 × 10<sup>−10</sup> → <b>terbentuk endapan</b> AgCl.</p><p>Jebakan: memakai 0,002 M tanpa memperhitungkan pengenceran → 4 × 10<sup>−6</sup>.</p>"
  },

  // ===================== SIFAT KOLIGATIF =====================
  {
    id: "kmh-15", bab: "Sifat Koligatif", level: 2, tipe: "pg",
    soal: "Radiator mobil diisi larutan 124 gram etilen glikol (M<sub>r</sub> = 62) dalam 500 gram air (K<sub>f</sub> air = 1,86 °C/m). Apakah larutan ini mampu mencegah radiator membeku pada suhu udara −10 °C?",
    opsi: [
      "Ya, karena titik beku larutan −14,88 °C.",
      "Ya, karena titik beku larutan tepat −10 °C.",
      "Tidak, karena titik beku larutan hanya −7,44 °C.",
      "Tidak, karena titik beku larutan hanya −3,72 °C.",
      "Ya, karena etilen glikol menaikkan titik beku air."
    ],
    kunci: 2,
    hint: "Molalitas = mol zat terlarut / kg pelarut. Etilen glikol adalah nonelektrolit (i = 1). ΔT<sub>f</sub> = m × K<sub>f</sub>.",
    pembahasan: "<p>n = 124/62 = 2 mol; m = 2/0,5 kg = 4 molal.</p><p>ΔT<sub>f</sub> = 4 × 1,86 = 7,44 °C → titik beku = <b>−7,44 °C</b>.</p><p>Pada −10 °C larutan sudah membeku → <b>tidak mampu</b> mencegah. Jebakan: memakai 1 kg air → −3,72 °C.</p>"
  },
  {
    id: "kmh-16", bab: "Sifat Koligatif", level: 2, tipe: "pg",
    soal: "Sebanyak 5,85 gram NaCl (M<sub>r</sub> = 58,5) dilarutkan dalam 500 gram air. Jika K<sub>b</sub> air = 0,52 °C/m dan NaCl terionisasi sempurna, titik didih larutan adalah …",
    opsi: ["100,052 °C", "100,104 °C", "100,208 °C", "100,416 °C", "101,040 °C"],
    kunci: 2,
    hint: "NaCl elektrolit kuat: NaCl → Na<sup>+</sup> + Cl<sup>−</sup>, jadi i = 2. ΔT<sub>b</sub> = m × K<sub>b</sub> × i.",
    pembahasan: "<p>n = 5,85/58,5 = 0,1 mol; m = 0,1/0,5 = 0,2 molal.</p><p>ΔT<sub>b</sub> = 0,2 × 0,52 × 2 = 0,208 °C → titik didih = <b>100,208 °C</b>.</p><p>Jebakan: lupa faktor van't Hoff (i = 2) → 100,104 °C.</p>"
  },
  {
    id: "kmh-17", bab: "Sifat Koligatif", level: 2, tipe: "pg",
    soal: "Tekanan osmotik larutan CaCl<sub>2</sub> 0,1 M pada suhu 27 °C (R = 0,082 L·atm/mol·K, terionisasi sempurna) adalah …",
    opsi: ["0,74 atm", "2,46 atm", "4,92 atm", "7,38 atm", "9,84 atm"],
    kunci: 3,
    hint: "π = M × R × T × i. Ubah suhu ke kelvin, dan tentukan i dari jumlah ion CaCl<sub>2</sub>.",
    pembahasan: "<p>CaCl<sub>2</sub> → Ca<sup>2+</sup> + 2Cl<sup>−</sup> → i = 3. T = 300 K.</p><p>π = 0,1 × 0,082 × 300 × 3 = <b>7,38 atm</b>.</p><p>Jebakan: i = 1 → 2,46 atm; i = 2 → 4,92 atm.</p>"
  },

  // ===================== REDOKS & ELEKTROKIMIA =====================
  {
    id: "kmh-18", bab: "Redoks & Elektrokimia", level: 2, tipe: "kategori",
    stimulus: "<p>Reaksi redoks dalam suasana asam (sudah setara):</p><p>MnO<sub>4</sub><sup>−</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Bilangan oksidasi Mn turun dari +7 menjadi +2.",
      "MnO<sub>4</sub><sup>−</sup> bertindak sebagai oksidator.",
      "1 mol MnO<sub>4</sub><sup>−</sup> dapat mengoksidasi 5 mol Fe<sup>2+</sup>.",
      "Ion Fe<sup>2+</sup> mengalami reduksi."
    ],
    kunci: [true, true, true, false],
    hint: "Biloks O = −2. Zat yang biloksnya turun mengalami reduksi dan disebut oksidator.",
    pembahasan: "<p>1. Mn dalam MnO<sub>4</sub><sup>−</sup>: x + 4(−2) = −1 → x = +7 → menjadi +2 ✔.</p><p>2. Biloks Mn turun → MnO<sub>4</sub><sup>−</sup> tereduksi → <b>oksidator</b> ✔.</p><p>3. Sesuai koefisien, 1 : 5 ✔ (Mn menerima 5 elektron; tiap Fe melepas 1 elektron).</p><p>4. Fe<sup>2+</sup> → Fe<sup>3+</sup>: biloks naik → <b>oksidasi</b>, bukan reduksi → Salah.</p>"
  },
  {
    id: "kmh-19", bab: "Redoks & Elektrokimia", level: 2, tipe: "mcma",
    stimulus: "<p>Sel volta disusun dari elektrode Zn dalam larutan Zn<sup>2+</sup> 1 M dan elektrode Cu dalam larutan Cu<sup>2+</sup> 1 M.</p><p>E° Zn<sup>2+</sup>/Zn = −0,76 V; E° Cu<sup>2+</sup>/Cu = +0,34 V.</p>",
    soal: "Pernyataan yang benar adalah … (pilih semua yang benar)",
    opsi: [
      "Zn bertindak sebagai anode dan mengalami oksidasi.",
      "Potensial sel standar E°<sub>sel</sub> = +1,10 V.",
      "Elektron mengalir dari elektrode Cu ke elektrode Zn melalui kawat.",
      "Massa elektrode Cu bertambah seiring berjalannya reaksi.",
      "Konsentrasi ion Zn<sup>2+</sup> berkurang seiring berjalannya reaksi."
    ],
    kunci: [0, 1, 3],
    hint: "E° lebih kecil → anode (oksidasi). E°<sub>sel</sub> = E°katode − E°anode. Elektron selalu mengalir dari anode ke katode.",
    pembahasan: "<p>• Zn (E° lebih kecil) → anode: Zn → Zn<sup>2+</sup> + 2e<sup>−</sup> ✔<br>• E°<sub>sel</sub> = 0,34 − (−0,76) = +1,10 V ✔<br>• Elektron mengalir dari Zn (anode) ke Cu (katode), bukan sebaliknya ✘<br>• Di katode: Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu mengendap → massa Cu bertambah ✔<br>• Zn terus teroksidasi → [Zn<sup>2+</sup>] <i>bertambah</i> ✘</p>"
  },
  {
    id: "kmh-20", bab: "Redoks & Elektrokimia", level: 3, tipe: "kategori",
    stimulus: "<p>Larutan CuSO<sub>4</sub> dielektrolisis menggunakan elektrode karbon (inert) dengan arus 5 A selama 1.930 detik. (A<sub>r</sub> Cu = 63,5; 1 F = 96.500 C)</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Di katode terbentuk endapan tembaga sebanyak 3,175 gram.",
      "Di anode dihasilkan gas O<sub>2</sub> sebanyak 0,56 liter (STP).",
      "Larutan di sekitar anode menjadi bersifat asam.",
      "Di katode terbentuk gas hidrogen karena ion Cu<sup>2+</sup> tidak dapat direduksi."
    ],
    kunci: [true, true, true, false],
    hint: "Mol elektron = (I × t)/96.500. Di katode, Cu<sup>2+</sup> lebih mudah direduksi daripada air. Di anode inert, ion SO<sub>4</sub><sup>2−</sup> tidak teroksidasi, sehingga air yang teroksidasi.",
    pembahasan: "<p>Mol e<sup>−</sup> = (5 × 1.930)/96.500 = 0,1 mol.</p><p>Katode: Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu → 0,05 mol × 63,5 = <b>3,175 g</b> ✔. (Logam di bawah H dalam deret volta, seperti Cu, mudah direduksi → pernyataan 4 Salah. Gas H<sub>2</sub> terbentuk pada larutan ion golongan IA/IIA, Al<sup>3+</sup>, atau Mn<sup>2+</sup>.)</p><p>Anode: 2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup> → O<sub>2</sub> = 0,1/4 = 0,025 mol × 22,4 = <b>0,56 L</b> ✔. Terbentuk H<sup>+</sup> → <b>asam</b> ✔.</p>"
  },

  // ===================== KIMIA ORGANIK =====================
  {
    id: "kmh-21", bab: "Senyawa Karbon", level: 3, tipe: "kategori",
    stimulus: "<p>Pembakaran sempurna 1 mol suatu alkana menghasilkan 5 mol CO<sub>2</sub> dan 6 mol H<sub>2</sub>O. Alkana tersebut memiliki 4 atom C primer dan 1 atom C kuarterner.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Rumus molekul alkana tersebut adalah C<sub>5</sub>H<sub>12</sub>.",
      "Strukturnya adalah C(CH<sub>3</sub>)<sub>4</sub>.",
      "Nama IUPAC senyawa tersebut adalah 2,2-dimetilpropana.",
      "Titik didihnya lebih tinggi daripada n-pentana."
    ],
    kunci: [true, true, true, false],
    hint: "Jumlah C = mol CO<sub>2</sub>; jumlah H = 2 × mol H<sub>2</sub>O. Atom C kuarterner mengikat 4 atom C lain. Makin bercabang (makin bulat) molekulnya, makin lemah gaya London-nya.",
    pembahasan: "<p>C = 5, H = 2 × 6 = 12 → <b>C<sub>5</sub>H<sub>12</sub></b> ✔.</p><p>1 C kuarterner yang mengikat 4 gugus CH<sub>3</sub> (C primer) → C(CH<sub>3</sub>)<sub>4</sub> ✔ = <b>2,2-dimetilpropana</b> (neopentana) ✔.</p><p>Molekul bercabang banyak → luas permukaan kontak kecil → gaya London lemah → titik didih <b>lebih rendah</b> daripada n-pentana → Salah.</p>"
  },
  {
    id: "kmh-22", bab: "Senyawa Karbon", level: 3, tipe: "mcma",
    soal: "Pernyataan berikut yang benar tentang reaksi senyawa propena (CH<sub>2</sub>=CH–CH<sub>3</sub>) adalah … (pilih semua yang benar)",
    opsi: [
      "Adisi HBr pada propena menghasilkan produk utama 2-bromopropana.",
      "Propena dapat menghilangkan warna cokelat-merah larutan bromin.",
      "Propana juga cepat menghilangkan warna larutan bromin dalam gelap.",
      "2-bromopropana yang direaksikan dengan KOH dalam alkohol menghasilkan propena (reaksi eliminasi).",
      "Reaksi propena dengan H<sub>2</sub> menjadi propana termasuk reaksi substitusi."
    ],
    kunci: [0, 1, 3],
    hint: "Aturan Markovnikov: H masuk ke atom C rangkap yang mengikat H lebih banyak. Uji bromin membedakan ikatan rangkap (alkena) dari ikatan tunggal (alkana).",
    pembahasan: "<p>• Markovnikov: H ke C-1 (punya 2 H), Br ke C-2 → <b>2-bromopropana</b> ✔<br>• Ikatan rangkap mengadisi Br<sub>2</sub> → warna hilang ✔<br>• Propana (alkana) tidak bereaksi cepat dengan Br<sub>2</sub> tanpa cahaya ✘<br>• KOH dalam alkohol melepas HBr → terbentuk C=C → <b>eliminasi</b> ✔<br>• Penambahan H<sub>2</sub> pada ikatan rangkap = <b>adisi</b> (hidrogenasi), bukan substitusi ✘</p>"
  }
]};
