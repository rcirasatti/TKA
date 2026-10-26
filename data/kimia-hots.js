// Paket HOTS Kimia — soal penalaran bergaya tryout TKA (bukan salinan; angka dan konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["kimia-hots"] = { soal: [

  // ===================== STRUKTUR ATOM & STOIKIOMETRI =====================
  {
    id: "kmh-01", bab: "Sistem dan Sifat Periodik Unsur", level: 2, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Empat bilangan kuantum: <b>n</b> = kulit, <b>l</b> = subkulit (0 = s, 1 = p, 2 = d), <b>m</b> = orbital, <b>s</b> = arah spin. Aturan Hund: orbital diisi satu-satu dulu dengan s = +½, baru dipasangkan dengan s = −½.</p><h4>Langkah</h4><ol><li>n = 3, l = 1 → subkulit <b>3p</b>.</li><li>Urutan pengisian 3p: e-1 (m = −1, +½), e-2 (0, +½), e-3 (+1, +½), e-4 (−1, −½), <b>e-5 (0, −½)</b>.</li><li>Jadi elektron terakhir adalah elektron ke-5 → 3p⁵. Konfigurasi: 1s² 2s² 2p⁶ 3s² 3p⁵ (Z = 17, Cl).</li></ol><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Berakhir di 3p⁵.</li><li><b>2</b> <i>Benar.</i> Valensi 3s² 3p⁵ = 7 → VIIA; kulit terbesar n = 3 → periode 3.</li><li><b>3</b> <i>Salah.</i> Total elektron = 2 + 2 + 6 + 2 + 5 = <b>17</b>. Nilai 16 muncul jika elektron terakhir dikira yang ke-4 (3p⁴).</li><li><b>4</b> <i>Benar.</i> Kurang 1 elektron menuju oktet → mudah menangkap 1 elektron → X⁻.</li></ul><p class=\"tips\"><b>Tips:</b> s = −½ berarti orbital sudah setengah penuh lalu mulai dipasangkan. Untuk subkulit p, elektron dengan s = −½ pasti elektron ke-4, 5, atau 6.</p>"
  },
  {
    id: "kmh-02", bab: "Struktur Atom", level: 2, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Aturan nilai bilangan kuantum: <b>l</b> = 0 sampai (n − 1); <b>m</b> = −l sampai +l; <b>s</b> = +½ atau −½ (tidak ada nilai lain).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ tidak diizinkan: n = 2 → l maksimal 1. Subkulit \"2d\" tidak ada.</li><li><b>B</b> ✔ tidak diizinkan: l = 1 → m hanya −1, 0, +1. m = −2 di luar rentang.</li><li><b>C</b> ✘ diizinkan: 4s (l = 0, m = 0).</li><li><b>D</b> ✘ diizinkan: 3d (l = 2, m boleh −2 … +2).</li><li><b>E</b> ✔ tidak diizinkan: s = 0 tidak ada.</li></ul><p class=\"tips\"><b>Tips:</b> soal bertanya yang <b>TIDAK</b> diizinkan. Cek tiap set dengan urutan n → l → m → s, dan berhenti begitu satu aturan dilanggar.</p>"
  },
  {
    id: "kmh-03", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 3, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Pereaksi pembatas = nilai (mol ÷ koefisien) terkecil. Semua produk dan jumlah pereaksi yang bereaksi dihitung dari pembatas.</p><h4>Langkah</h4><ol><li>M<sub>r</sub> Fe₂O₃ = 2(56) + 3(16) = 160 → n = 32/160 = 0,2 mol → 0,2/1 = 0,2.</li><li>CO: 0,45/3 = 0,15 → lebih kecil → CO pembatas.</li></ol><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ CO punya nilai terkecil.</li><li><b>B</b> ✔ Fe = 2/3 × 0,45 = 0,3 mol × 56 = 16,8 g.</li><li><b>C</b> ✔ Fe₂O₃ bereaksi = 1/3 × 0,45 = 0,15 mol → sisa 0,05 mol × 160 = 8 g.</li><li><b>D</b> ✘ CO₂ = 3/3 × 0,45 = 0,45 mol × 22,4 = <b>10,08 L</b>. Angka 6,72 L berasal dari 0,3 mol (mol Fe).</li><li><b>E</b> ✘ Fe₂O₃ berlebih (masih bersisa 8 g).</li></ul><p class=\"tips\"><b>Tips:</b> jangan menentukan pembatas dari mol mentah (0,2 &lt; 0,45 tidak berarti Fe₂O₃ pembatas). Selalu bagi dengan koefisiennya dulu.</p>"
  },
  {
    id: "kmh-04", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 3, tipe: "pg",
    soal: "Sebanyak 10 liter campuran gas metana (CH<sub>4</sub>) dan propana (C<sub>3</sub>H<sub>8</sub>) dibakar sempurna dan memerlukan 32 liter gas oksigen. Semua gas diukur pada suhu dan tekanan yang sama. Perbandingan volume metana terhadap propana dalam campuran adalah …",
    opsi: ["1 : 2", "2 : 3", "3 : 2", "2 : 1", "3 : 1"],
    kunci: 2,
    hint: "Tulis reaksinya: CH<sub>4</sub> + 2O<sub>2</sub> → … dan C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → … Pada P dan T sama, perbandingan volume = perbandingan koefisien.",
    pembahasan: "<h4>Konsep</h4><p><b>Hukum Gay-Lussac/Avogadro</b>: pada suhu dan tekanan sama, perbandingan volume gas = perbandingan koefisien. Jadi volume bisa diperlakukan seperti mol.</p><h4>Langkah</h4><ol><li>CH₄ + 2O₂ → CO₂ + 2H₂O (1 L CH₄ butuh 2 L O₂).</li><li>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (1 L C₃H₈ butuh 5 L O₂).</li><li>Misalkan CH₄ = a, C₃H₈ = b: a + b = 10 dan 2a + 5b = 32.</li><li>Kurangi 2 × persamaan pertama: 3b = 12 → b = 4, a = 6.</li><li>CH₄ : C₃H₈ = 6 : 4 = <b>3 : 2</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> 2 : 3: jawaban benar tetapi urutannya terbalik (propana : metana).</li><li><b>A</b> 1 : 2, <b>D</b> 2 : 1, <b>E</b> 3 : 1: cek O₂. Misalnya 2 : 1 → 6,67 dan 3,33 L → O₂ = 13,3 + 16,7 = 30 L ≠ 32.</li></ul><p class=\"tips\"><b>Tips:</b> kebutuhan O₂ untuk C<sub>x</sub>H<sub>y</sub> = x + y/4 per liter: CH₄ = 2, C₃H₈ = 5. Hafalkan rumus ini untuk semua soal pembakaran.</p>"
  },

  // ===================== TERMOKIMIA & LAJU =====================
  {
    id: "kmh-05", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "pg",
    soal: "Sebanyak 0,01 mol suatu senyawa organik dibakar sempurna dalam kalorimeter bom yang berisi 1 liter air. Suhu air naik 2,5 °C. Kapasitas kalor kalorimeter 400 J/°C dan kalor jenis air 4,2 J/g°C (massa jenis air 1 g/mL). Entalpi pembakaran senyawa tersebut adalah …",
    opsi: ["−11,5 kJ/mol", "−115 kJ/mol", "−1.050 kJ/mol", "−1.150 kJ/mol", "+1.150 kJ/mol"],
    kunci: 3,
    hint: "Kalor diserap oleh air (m·c·ΔT) DAN oleh kalorimeter (C·ΔT). Jumlahkan, lalu bagi dengan mol. Pembakaran melepas kalor, jadi tandanya negatif.",
    pembahasan: "<h4>Konsep</h4><p>Pada kalorimeter bom, kalor reaksi diserap oleh <b>air dan alat kalorimeternya</b>: q = m·c·ΔT (air) + C·ΔT (kalorimeter). Reaksi melepas kalor, jadi ΔH negatif. ΔH per mol = −q / mol.</p><h4>Langkah</h4><ol><li>q air = 1.000 g × 4,2 × 2,5 = 10.500 J.</li><li>q kalorimeter = 400 × 2,5 = 1.000 J.</li><li>q total = 11.500 J = 11,5 kJ.</li><li>ΔH = −11,5 / 0,01 = <b>−1.150 kJ/mol</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> −11,5 kJ/mol: lupa membagi dengan mol (itu kalor untuk 0,01 mol).</li><li><b>B</b> −115: dibagi 0,1 alih-alih 0,01.</li><li><b>C</b> −1.050: kalor kalorimeter (1.000 J) tidak dihitung.</li><li><b>E</b> +1.150: tanda salah. Suhu naik berarti reaksi melepas kalor (eksoterm, ΔH &lt; 0).</li></ul><p class=\"tips\"><b>Tips:</b> jika soal memberi \"kapasitas kalor kalorimeter\", berarti alatnya ikut menyerap kalor dan wajib dijumlahkan.</p>"
  },
  {
    id: "kmh-06", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "pg",
    stimulus: "<p>Data energi ikatan rata-rata (kJ/mol): C=C = 614; C–C = 348; C–H = 413; H–H = 436.</p>",
    soal: "Perubahan entalpi reaksi C<sub>2</sub>H<sub>4</sub>(g) + H<sub>2</sub>(g) → C<sub>2</sub>H<sub>6</sub>(g) adalah …",
    opsi: ["+124 kJ", "−124 kJ", "−348 kJ", "+262 kJ", "−1.174 kJ"],
    kunci: 1,
    hint: "ΔH = Σ energi ikatan yang DIPUTUS − Σ energi ikatan yang DIBENTUK. Cukup hitung ikatan yang berubah: C=C dan H–H putus; C–C dan 2 C–H baru terbentuk.",
    pembahasan: "<h4>Konsep</h4><p>Dengan energi ikatan: <b>ΔH = Σ energi ikatan yang diputus − Σ energi ikatan yang dibentuk</b>. Memutus ikatan butuh energi (+), membentuk ikatan melepas energi (−). Cukup hitung ikatan yang <i>berubah</i>.</p><h4>Langkah</h4><ol><li>Diputus: C=C (614) + H–H (436) = 1.050 kJ.</li><li>Dibentuk: C–C (348) + 2 C–H (2 × 413 = 826) = 1.174 kJ.</li><li>ΔH = 1.050 − 1.174 = <b>−124 kJ</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> +124: dibalik (dibentuk − diputus). Ini kebalikan rumus ΔH<sub>f</sub>.</li><li><b>C</b> −348: hanya ikatan C–C baru yang dihitung.</li><li><b>D</b> +262: tanda positif pasti salah. Energi pembentukan (1.174) lebih besar dari energi pemutusan (1.050), jadi reaksinya eksoterm.</li><li><b>E</b> −1.174: hanya energi pembentukan, energi pemutusan terlupa.</li></ul><p class=\"tips\"><b>Tips:</b> ingat urutannya: energi ikatan = <b>kiri − kanan</b> (pereaksi − produk), sedangkan ΔH<sub>f</sub> = <b>kanan − kiri</b>. Keduanya terbalik.</p>"
  },
  {
    id: "kmh-07", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Laju perubahan setiap zat <b>sebanding dengan koefisiennya</b>: v<sub>N₂</sub> : v<sub>H₂</sub> : v<sub>NH₃</sub> = 1 : 3 : 2. Pereaksi berkurang, produk bertambah.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> v N₂ = ½ × 0,4 = 0,2 M/s.</li><li><b>2</b> <i>Benar.</i> v H₂ = 3/2 × 0,4 = 0,6 M/s.</li><li><b>3</b> <i>Salah.</i> 0,4 ≠ 0,2. Koefisien NH₃ (2) dan N₂ (1) berbeda, jadi lajunya berbeda.</li><li><b>4</b> <i>Benar.</i> Δ[H₂] = 0,6 × 5 = 3 M.</li></ul><p class=\"tips\"><b>Tips:</b> bagi laju yang diketahui dengan koefisiennya (0,4/2 = 0,2 \"per satuan koefisien\"), lalu kalikan dengan koefisien zat yang dicari.</p>"
  },

  // ===================== KESETIMBANGAN =====================
  {
    id: "kmh-08", bab: "Energetika dan Dinamika Reaksi", level: 3, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Derajat disosiasi α = mol terurai / mol mula-mula. Hubungan K<sub>p</sub> dan K<sub>c</sub>: <b>K<sub>p</sub> = K<sub>c</sub>(RT)<sup>Δn</sup></b>, dengan Δn = koefisien gas kanan − kiri.</p><h4>Langkah</h4><table><tr><th></th><th>N₂O₄</th><th>2NO₂</th></tr><tr><th>M</th><td>1</td><td>0</td></tr><tr><th>R</th><td>−0,5</td><td>+1,0</td></tr><tr><th>S</th><td>0,5</td><td>1,0</td></tr></table><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ K<sub>c</sub> = [NO₂]²/[N₂O₄] = 1,0²/0,5 = 2.</li><li><b>B</b> ✔ Δn = 2 − 1 = +1.</li><li><b>C</b> ✔ K<sub>p</sub> = 2 × (RT)¹ = 2RT.</li><li><b>D</b> ✘ Mol total = 1,5 → fraksi NO₂ = 1,0/1,5 = <b>2/3</b>. Nilai 1/3 adalah fraksi N₂O₄.</li><li><b>E</b> ✘ Mol total naik dari 1 menjadi 1,5, karena 1 molekul terurai menjadi 2.</li></ul><p class=\"tips\"><b>Tips:</b> reaksi penguraian dengan Δn &gt; 0 selalu menambah mol gas total. Jadi E bisa langsung digugurkan tanpa menghitung.</p>"
  },
  {
    id: "kmh-09", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Le Chatelier untuk suhu: suhu naik → kesetimbangan bergeser ke arah <b>endoterm</b> (menyerap kalor tambahan). Perubahan suhu adalah satu-satunya gangguan yang <b>mengubah nilai K</b>.</p><h4>Langkah</h4><ol><li>ΔH = −57 kJ → ke kanan eksoterm, ke kiri endoterm.</li><li>Air panas (suhu naik) → bergeser ke <b>kiri</b> → NO₂ bertambah → warna <b>makin cokelat</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Arah pergeseran terbalik. Itu yang terjadi jika tabung dimasukkan ke air es.</li><li><b>C</b> Suhu tetap menggeser kesetimbangan walau tekanan tidak diubah.</li><li><b>D</b> Untuk reaksi eksoterm, K <b>mengecil</b> saat suhu naik (produk berkurang).</li><li><b>E</b> Kesetimbangan tidak pernah berubah 100% ke satu sisi, dan arahnya pun salah.</li></ul><p class=\"tips\"><b>Tips:</b> anggap kalor sebagai \"zat\". Reaksi eksoterm: pereaksi → produk + kalor. Menambah kalor (memanaskan) mendorong ke kiri.</p>"
  },

  // ===================== LARUTAN, ASAM-BASA, TITRASI =====================
  {
    id: "kmh-10", bab: "Asam-Basa", level: 2, tipe: "pg",
    soal: "Derajat ionisasi (α) larutan asam format HCOOH 0,1 M dengan K<sub>a</sub> = 1 × 10<sup>−4</sup> adalah … (√10 = 3,16)",
    opsi: ["0,1%", "1%", "3,16%", "10%", "31,6%"],
    kunci: 2,
    hint: "Untuk asam lemah: α = √(K<sub>a</sub> / M).",
    pembahasan: "<h4>Konsep</h4><p>Untuk asam lemah: <b>α = √(K<sub>a</sub>/M)</b>, yaitu fraksi molekul yang terionisasi. Kalikan 100% untuk persen.</p><h4>Langkah</h4><ol><li>α = √(10⁻⁴ / 10⁻¹) = √10⁻³.</li><li>√10⁻³ = √(10 × 10⁻⁴) = 3,16 × 10⁻² = <b>3,16%</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 0,1% = 10⁻³, lupa diakar.</li><li><b>B</b> 1% = √10⁻⁴, membagi dengan 1 (konsentrasi diabaikan).</li><li><b>D</b> 10% = √10⁻², pangkat salah.</li><li><b>E</b> 31,6%: koma bergeser satu tempat (3,16 × 10⁻¹).</li></ul><p class=\"tips\"><b>Tips:</b> untuk mengakar pangkat ganjil, ubah dulu menjadi pangkat genap: 10⁻³ = 10 × 10⁻⁴, lalu √10 × 10⁻². Itu sebabnya soal memberi √10 = 3,16.</p>"
  },
  {
    id: "kmh-11", bab: "Kesetimbangan Larutan", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang hidrolisis larutan garam 0,1 M berikut!",
    pernyataan: [
      "Larutan CH<sub>3</sub>COOK mengubah lakmus merah menjadi biru.",
      "Larutan NH<sub>4</sub>Cl terhidrolisis sebagian dan bersifat asam.",
      "Larutan KNO<sub>3</sub> mengubah lakmus biru menjadi merah.",
      "Larutan NH<sub>4</sub>CN (K<sub>a</sub> HCN &lt; K<sub>b</sub> NH<sub>3</sub>) terhidrolisis total dan bersifat basa."
    ],
    kunci: [true, true, false, true],
    hint: "Tentukan asam dan basa pembentuk setiap garam. Kuat + kuat = tidak terhidrolisis. Lemah + lemah = hidrolisis total, sifatnya ditentukan oleh K yang lebih besar.",
    pembahasan: "<h4>Konsep</h4><p>Hidrolisis garam: kuat + kuat → tidak terhidrolisis (netral); salah satu lemah → hidrolisis <b>sebagian</b>, sifat mengikuti yang kuat; lemah + lemah → hidrolisis <b>total</b>, sifat ditentukan oleh perbandingan K<sub>a</sub> dan K<sub>b</sub>. Lakmus: merah → biru di basa, biru → merah di asam.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> CH₃COOK = asam lemah + basa kuat (KOH) → basa → lakmus merah jadi biru.</li><li><b>2</b> <i>Benar.</i> NH₄Cl = basa lemah + asam kuat → hidrolisis sebagian (hanya NH₄⁺), bersifat asam.</li><li><b>3</b> <i>Salah.</i> KNO₃ = basa kuat + asam kuat → netral. Lakmus biru tetap biru.</li><li><b>4</b> <i>Benar.</i> NH₄CN = lemah + lemah → hidrolisis total; K<sub>b</sub> &gt; K<sub>a</sub> → basa ikut \"menang\" → bersifat basa.</li></ul><p class=\"tips\"><b>Tips:</b> pada garam lemah-lemah, pilih yang konstantanya lebih besar. K<sub>a</sub> &gt; K<sub>b</sub> → asam; K<sub>b</sub> &gt; K<sub>a</sub> → basa; sama → netral.</p>"
  },
  {
    id: "kmh-12", bab: "Kesetimbangan Larutan", level: 3, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Basa lemah berlebih + asam kuat → <b>penyangga basa</b> (basa lemah + garamnya). Rumus: <b>[OH⁻] = K<sub>b</sub> × (mol basa sisa / mol garam)</b>, lalu pH = 14 − pOH.</p><h4>Langkah</h4><ol><li>NH₃ = 100 × 0,2 = 20 mmol; HCl = 100 × 0,1 = 10 mmol.</li><li>NH₃ + HCl → NH₄Cl: HCl habis; NH₃ sisa 10 mmol; NH₄Cl 10 mmol.</li><li>[OH⁻] = 10⁻⁵ × 10/10 = 10⁻⁵ → pOH = 5 → pH = 9.</li></ol><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Ada basa lemah sisa + garamnya → penyangga basa.</li><li><b>B</b> ✔ pH = 14 − 5 = 9.</li><li><b>C</b> ✔ NH₄Cl = 10 mmol (sebanyak HCl yang habis).</li><li><b>D</b> ✘ HCl adalah pereaksi yang habis; yang bersisa NH₃.</li><li><b>E</b> ✘ 5 adalah pOH. Penyangga basa pasti pH &gt; 7.</li></ul><p class=\"tips\"><b>Tips:</b> untuk penyangga basa, jangan lupa langkah terakhir pH = 14 − pOH. Jebakan \"pH = pOH\" hampir selalu ada di opsi.</p>"
  },
  {
    id: "kmh-13", bab: "Asam-Basa", level: 3, tipe: "pg",
    stimulus: "<p>Sebanyak 10 mL larutan HCl pekat diencerkan hingga 100 mL. Kemudian 25 mL larutan encer tersebut dititrasi dengan NaOH 0,1 M menggunakan indikator fenolftalein.</p><table><tr><th>Titrasi</th><th>1</th><th>2</th><th>3</th></tr><tr><td>Volume NaOH (mL)</td><td>19,8</td><td>20,2</td><td>20,0</td></tr></table>",
    soal: "Konsentrasi HCl sebelum diencerkan adalah …",
    opsi: ["0,08 M", "0,2 M", "0,32 M", "0,8 M", "8 M"],
    kunci: 3,
    hint: "Ambil rata-rata volume NaOH. Pada titik ekuivalen: mol HCl = mol NaOH. Ingat bahwa yang dititrasi adalah larutan encer, jadi kalikan dengan faktor pengenceran.",
    pembahasan: "<h4>Konsep</h4><p>Titrasi asam-basa: pada titik ekuivalen, <b>mol H⁺ = mol OH⁻</b> (M<sub>a</sub>V<sub>a</sub>a = M<sub>b</sub>V<sub>b</sub>b). Data titrasi berulang dirata-rata. Pengenceran: M₁V₁ = M₂V₂.</p><h4>Langkah</h4><ol><li>Rata-rata V NaOH = (19,8 + 20,2 + 20,0)/3 = 20,0 mL → mol NaOH = 20,0 × 0,1 = 2 mmol.</li><li>HCl encer: 2 mmol / 25 mL = 0,08 M.</li><li>Pengenceran 10 mL → 100 mL (10×). HCl pekat = 0,08 × 10 = <b>0,8 M</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 0,08 M: konsentrasi setelah diencerkan, lupa dikali faktor pengenceran.</li><li><b>B</b> 0,2 M: mol (2 mmol) dibagi 10 mL.</li><li><b>C</b> 0,32 M: dikali 4 (100/25) alih-alih 10.</li><li><b>E</b> 8 M: dikali 100 (pengenceran dihitung dua kali).</li></ul><p class=\"tips\"><b>Tips:</b> baca soal titrasi dari belakang: yang ditanya larutan <i>sebelum</i> atau <i>sesudah</i> diencerkan? Faktor pengenceran = V akhir / V awal.</p>"
  },
  {
    id: "kmh-14", bab: "Kesetimbangan Larutan", level: 3, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Untuk memprediksi endapan, bandingkan <b>Q<sub>sp</sub></b> (hasil kali konsentrasi ion saat dicampur) dengan K<sub>sp</sub>: Q &gt; K<sub>sp</sub> → mengendap; Q = K<sub>sp</sub> → tepat jenuh; Q &lt; K<sub>sp</sub> → larut. Saat dua larutan dicampur, volumenya bertambah, jadi <b>konsentrasi tiap ion turun</b>.</p><h4>Langkah</h4><ol><li>Volume total 200 mL (dua kali lipat) → [Ag⁺] = [Cl⁻] = 0,002/2 = 0,001 M.</li><li>Q<sub>sp</sub> = 10⁻³ × 10⁻³ = 10⁻⁶.</li><li>10⁻⁶ &gt; 1,8 × 10⁻¹⁰ → <b>mengendap</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> 4 × 10⁻⁶: memakai 0,002 M tanpa memperhitungkan pengenceran. Kesimpulannya sama, tetapi nilai Q-nya salah.</li><li><b>C</b> dan <b>D</b>: Q jauh lebih besar dari K<sub>sp</sub>, bukan lebih kecil atau sama.</li><li><b>E</b> Na⁺ adalah ion penonton dan tidak menghambat pengendapan AgCl.</li></ul><p class=\"tips\"><b>Tips:</b> volume sama yang dicampur → konsentrasi tiap zat menjadi setengahnya. Langkah ini paling sering dilupakan.</p>"
  },

  // ===================== SIFAT KOLIGATIF =====================
  {
    id: "kmh-15", bab: "Larutan", level: 2, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p><b>Penurunan titik beku</b>: ΔT<sub>f</sub> = m × K<sub>f</sub> (× i untuk elektrolit). Molalitas m = mol zat / <b>kg pelarut</b>. Titik beku larutan = 0 − ΔT<sub>f</sub>. Etilen glikol nonelektrolit (i = 1).</p><h4>Langkah</h4><ol><li>n = 124/62 = 2 mol; pelarut 500 g = 0,5 kg → m = 4 molal.</li><li>ΔT<sub>f</sub> = 4 × 1,86 = 7,44 °C → titik beku = −7,44 °C.</li><li>Udara −10 °C lebih dingin dari −7,44 °C → larutan tetap membeku → <b>tidak mampu</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> −14,88 °C: dikali 2 (seolah elektrolit i = 2). Etilen glikol tidak terionisasi.</li><li><b>B</b> Titik beku tidak tepat −10 °C.</li><li><b>D</b> −3,72 °C: memakai 1 kg air (pelarut dianggap 1.000 g).</li><li><b>E</b> Zat terlarut justru <i>menurunkan</i> titik beku.</li></ul><p class=\"tips\"><b>Tips:</b> agar tidak membeku, titik beku larutan harus <i>lebih rendah</i> dari suhu udara. −7,44 lebih tinggi dari −10, jadi tidak aman.</p>"
  },
  {
    id: "kmh-16", bab: "Larutan", level: 2, tipe: "pg",
    soal: "Sebanyak 5,85 gram NaCl (M<sub>r</sub> = 58,5) dilarutkan dalam 500 gram air. Jika K<sub>b</sub> air = 0,52 °C/m dan NaCl terionisasi sempurna, titik didih larutan adalah …",
    opsi: ["100,052 °C", "100,104 °C", "100,208 °C", "100,416 °C", "101,040 °C"],
    kunci: 2,
    hint: "NaCl elektrolit kuat: NaCl → Na<sup>+</sup> + Cl<sup>−</sup>, jadi i = 2. ΔT<sub>b</sub> = m × K<sub>b</sub> × i.",
    pembahasan: "<h4>Konsep</h4><p><b>Kenaikan titik didih</b>: ΔT<sub>b</sub> = m × K<sub>b</sub> × i. Untuk elektrolit kuat, faktor van't Hoff <b>i</b> = jumlah ion (NaCl → Na⁺ + Cl⁻, i = 2). Titik didih larutan = 100 + ΔT<sub>b</sub>.</p><h4>Langkah</h4><ol><li>n = 5,85/58,5 = 0,1 mol; m = 0,1/0,5 = 0,2 molal.</li><li>ΔT<sub>b</sub> = 0,2 × 0,52 × 2 = 0,208 °C.</li><li>Titik didih = <b>100,208 °C</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 100,052: memakai 1 kg air dan tanpa i.</li><li><b>B</b> 100,104: lupa faktor i = 2.</li><li><b>D</b> 100,416: i dianggap 4 atau molalitas digandakan.</li><li><b>E</b> 101,040: koma bergeser (m = 2 molal).</li></ul><p class=\"tips\"><b>Tips:</b> kata \"terionisasi sempurna\" adalah sinyal untuk memakai i. Hitung ion dari rumus: NaCl = 2, CaCl₂ = 3, Al₂(SO₄)₃ = 5.</p>"
  },
  {
    id: "kmh-17", bab: "Larutan", level: 2, tipe: "pg",
    soal: "Tekanan osmotik larutan CaCl<sub>2</sub> 0,1 M pada suhu 27 °C (R = 0,082 L·atm/mol·K, terionisasi sempurna) adalah …",
    opsi: ["0,74 atm", "2,46 atm", "4,92 atm", "7,38 atm", "9,84 atm"],
    kunci: 3,
    hint: "π = M × R × T × i. Ubah suhu ke kelvin, dan tentukan i dari jumlah ion CaCl<sub>2</sub>.",
    pembahasan: "<h4>Konsep</h4><p><b>Tekanan osmotik</b>: π = M × R × T × i, dengan T dalam <b>kelvin</b> (°C + 273) dan i = jumlah ion untuk elektrolit kuat.</p><h4>Langkah</h4><ol><li>CaCl₂ → Ca²⁺ + 2Cl⁻ → i = 3.</li><li>T = 27 + 273 = 300 K.</li><li>π = 0,1 × 0,082 × 300 × 3 = <b>7,38 atm</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 0,74 atm: sepersepuluh jawaban benar, seolah konsentrasinya 0,01 M (koma bergeser).</li><li><b>B</b> 2,46 atm: i = 1 (dianggap nonelektrolit).</li><li><b>C</b> 4,92 atm: i = 2, ion Cl⁻ hanya dihitung satu.</li><li><b>E</b> 9,84 atm: i = 4.</li></ul><p class=\"tips\"><b>Tips:</b> 0,082 × 300 = 24,6. Angka ini sering muncul, jadi hafalkan untuk mempercepat hitungan.</p>"
  },

  // ===================== REDOKS & ELEKTROKIMIA =====================
  {
    id: "kmh-18", bab: "Stoikiometri dan Persamaan Reaksi Kimia", level: 2, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p><b>Oksidasi</b> = biloks naik (melepas elektron); <b>reduksi</b> = biloks turun (menerima elektron). <b>Oksidator</b> adalah zat yang mengalami reduksi; <b>reduktor</b> adalah zat yang mengalami oksidasi.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Mn dalam MnO₄⁻: x + 4(−2) = −1 → x = +7. Menjadi Mn²⁺ (+2). Turun 5.</li><li><b>2</b> <i>Benar.</i> Biloks Mn turun → MnO₄⁻ tereduksi → bertindak sebagai oksidator.</li><li><b>3</b> <i>Benar.</i> Koefisien MnO₄⁻ : Fe²⁺ = 1 : 5. Mn menerima 5 e⁻, tiap Fe²⁺ melepas 1 e⁻.</li><li><b>4</b> <i>Salah.</i> Fe²⁺ → Fe³⁺: biloks naik → <b>oksidasi</b>. Fe²⁺ adalah reduktor.</li></ul><p class=\"tips\"><b>Tips:</b> jembatan keledai: \"<b>oksidator tereduksi, reduktor teroksidasi</b>\". Namanya selalu berkebalikan dengan proses yang dialaminya.</p>"
  },
  {
    id: "kmh-19", bab: "Energetika dan Dinamika Reaksi", level: 2, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Sel volta: logam dengan E° lebih <b>kecil</b> menjadi <b>anode</b> (oksidasi, kutub −); E° lebih besar menjadi <b>katode</b> (reduksi, kutub +). E°<sub>sel</sub> = E°<sub>katode</sub> − E°<sub>anode</sub>. Elektron mengalir lewat kawat dari anode ke katode.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Zn (−0,76) &lt; Cu (+0,34) → Zn anode: Zn → Zn²⁺ + 2e⁻.</li><li><b>B</b> ✔ E°<sub>sel</sub> = 0,34 − (−0,76) = +1,10 V.</li><li><b>C</b> ✘ Elektron mengalir dari Zn ke Cu (anode → katode), bukan sebaliknya.</li><li><b>D</b> ✔ Di katode: Cu²⁺ + 2e⁻ → Cu (mengendap) → massa elektrode Cu bertambah.</li><li><b>E</b> ✘ Zn terus larut menjadi Zn²⁺, jadi [Zn²⁺] <b>bertambah</b>. Yang berkurang adalah [Cu²⁺].</li></ul><p class=\"tips\"><b>Tips:</b> \"<b>KaRAOk</b>\": Katode Reduksi, Anode Oksidasi. Di anode logamnya larut (massa turun); di katode logam mengendap (massa naik).</p>"
  },
  {
    id: "kmh-20", bab: "Energetika dan Dinamika Reaksi", level: 3, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Elektrolisis larutan dengan elektrode inert: <b>katode</b> mereduksi kation (Cu²⁺ mudah direduksi; kation IA/IIA, Al³⁺, Mn²⁺ diganti air → H₂); <b>anode</b> mengoksidasi anion (SO₄²⁻ sulit dioksidasi, jadi air yang teroksidasi → O₂ + H⁺). <b>Hukum Faraday</b>: mol e⁻ = (I × t)/96.500.</p><h4>Langkah</h4><p>Mol e⁻ = (5 × 1.930)/96.500 = 0,1 mol.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Cu²⁺ + 2e⁻ → Cu: Cu = 0,1/2 = 0,05 mol × 63,5 = 3,175 g.</li><li><b>2</b> <i>Benar.</i> 2H₂O → O₂ + 4H⁺ + 4e⁻: O₂ = 0,1/4 = 0,025 mol × 22,4 = 0,56 L.</li><li><b>3</b> <i>Benar.</i> Reaksi anode menghasilkan H⁺ → larutan di sekitarnya asam.</li><li><b>4</b> <i>Salah.</i> Cu terletak di sebelah kanan H dalam deret Volta, jadi Cu²⁺ mudah direduksi menjadi Cu. Gas H₂ hanya terbentuk jika kationnya sulit direduksi (IA, IIA, Al³⁺, Mn²⁺).</li></ul><p class=\"tips\"><b>Tips:</b> mol e⁻ yang sama mengalir di katode dan anode. Dari 0,1 mol e⁻: Cu = 0,1/2, O₂ = 0,1/4 (bagi dengan jumlah elektron di setiap setengah reaksi).</p>"
  },

  // ===================== KIMIA ORGANIK =====================
  {
    id: "kmh-21", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 3, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Dari hasil pembakaran: jumlah C = mol CO₂, jumlah H = 2 × mol H₂O. Jenis atom C: <b>primer</b> mengikat 1 C lain, sekunder 2, tersier 3, <b>kuarterner</b> 4. Titik didih alkana isomer: makin bercabang → luas kontak makin kecil → gaya London makin lemah → titik didih makin <b>rendah</b>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> C = 5, H = 2 × 6 = 12 → C₅H₁₂ (cocok dengan C<sub>n</sub>H<sub>2n+2</sub>).</li><li><b>2</b> <i>Benar.</i> 1 C kuarterner dikelilingi 4 C primer (CH₃) → C(CH₃)₄.</li><li><b>3</b> <i>Benar.</i> Rantai terpanjang 3 C (propana) dengan dua metil di C-2 → 2,2-dimetilpropana (neopentana).</li><li><b>4</b> <i>Salah.</i> Bentuknya hampir bulat sehingga bidang kontak antarmolekul kecil → titik didih lebih <b>rendah</b> dari n-pentana (±9,5 °C vs ±36 °C).</li></ul><p class=\"tips\"><b>Tips:</b> urutan titik didih isomer C₅H₁₂: n-pentana &gt; 2-metilbutana &gt; 2,2-dimetilpropana. Makin \"bulat\" molekulnya, makin rendah titik didihnya.</p>"
  },
  {
    id: "kmh-22", bab: "Struktur dan Kereaktifan Senyawa Karbon", level: 3, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Alkena (punya C=C) mengalami <b>adisi</b>. Aturan <b>Markovnikov</b>: pada adisi HX, H masuk ke C rangkap yang <b>sudah punya H lebih banyak</b>. Alkil halida + KOH dalam <b>alkohol</b> → eliminasi (membentuk alkena); KOH dalam <b>air</b> → substitusi (membentuk alkohol).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ CH₂=CH–CH₃: C-1 punya 2 H, C-2 punya 1 H → H ke C-1, Br ke C-2 → 2-bromopropana.</li><li><b>B</b> ✔ Br₂ teradisi pada C=C → warna cokelat-merah hilang. Ini uji khas ikatan rangkap.</li><li><b>C</b> ✘ Propana jenuh (tanpa C=C); dengan Br₂ hanya bereaksi substitusi lambat dan perlu cahaya.</li><li><b>D</b> ✔ KOH beralkohol melepas HBr → terbentuk C=C → propena (eliminasi).</li><li><b>E</b> ✘ H₂ ditambahkan pada C=C → adisi (hidrogenasi), bukan substitusi.</li></ul><p class=\"tips\"><b>Tips:</b> Markovnikov = \"yang kaya makin kaya\": C yang H-nya sudah banyak mendapat H lagi.</p>"
  }
]};
