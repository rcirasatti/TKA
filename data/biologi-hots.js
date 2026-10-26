// Paket HOTS Biologi — soal kasus & penalaran bergaya tryout TKA (bukan salinan; konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["biologi-hots"] = { soal: [

  // ===================== KEANEKARAGAMAN, EKOLOGI, BIOTEKNOLOGI =====================
  {
    id: "bih-01", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 2, tipe: "pg",
    soal: "Seorang siswa mengamati tanaman dengan ciri: berbiji tertutup, berakar serabut, tulang daun sejajar, dan berkas pengangkut tersebar pada batang. Tanaman tersebut paling tepat dikelompokkan ke dalam … dan contohnya adalah …",
    opsi: [
      "Gymnospermae, pinus",
      "Angiospermae dikotil, mangga",
      "Angiospermae monokotil, jagung",
      "Pteridophyta, paku sawah",
      "Angiospermae dikotil, kacang tanah"
    ],
    kunci: 2,
    hint: "Biji tertutup = Angiospermae. Lalu bedakan monokotil dan dikotil dari akar, tulang daun, dan susunan berkas pengangkutnya.",
    pembahasan: "<h4>Konsep</h4><p>Dua langkah klasifikasi tumbuhan: (1) biji terbuka (<b>Gymnospermae</b>) atau tertutup (<b>Angiospermae</b>)? (2) Jika Angiospermae, <b>monokotil</b> atau <b>dikotil</b>? Ciri monokotil: akar serabut, tulang daun sejajar/melengkung, berkas pengangkut tersebar, bagian bunga kelipatan 3. Dikotil: akar tunggang, tulang daun menyirip/menjari, berkas pengangkut melingkar teratur, berkambium.</p><h4>Langkah</h4><p>Biji tertutup → Angiospermae. Akar serabut + tulang daun sejajar + berkas tersebar → monokotil → contohnya <b>jagung</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Pinus berbiji <i>terbuka</i> (Gymnospermae).</li><li><b>B</b> dan <b>E</b> Mangga dan kacang tanah adalah dikotil (akar tunggang, daun menyirip).</li><li><b>D</b> Paku tidak berbiji sama sekali; berkembang biak dengan spora.</li></ul><p class=\"tips\"><b>Tips:</b> contoh monokotil yang sering keluar: padi, jagung, kelapa, pisang, rumput. Kalau ragu, lihat tulang daunnya: sejajar berarti monokotil.</p>"
  },
  {
    id: "bih-02", bab: "Ekosistem", level: 2, tipe: "mcma",
    soal: "Pasangan interaksi antarmakhluk hidup dan jenis interaksinya yang tepat adalah … (pilih semua yang benar)",
    opsi: [
      "Lebah dan bunga — mutualisme",
      "Benalu dan pohon mangga — komensalisme",
      "Ikan remora dan ikan hiu — komensalisme",
      "Bakteri <i>Rhizobium</i> dan akar kacang-kacangan — mutualisme",
      "Anggrek dan pohon tempatnya menempel — parasitisme"
    ],
    kunci: [0, 2, 3],
    hint: "Parasitisme: satu pihak dirugikan. Komensalisme: satu untung, satu tidak terpengaruh. Benalu mengambil air dan mineral dari inangnya, sedangkan anggrek hanya menumpang.",
    pembahasan: "<h4>Konsep</h4><p>Jenis simbiosis ditentukan oleh untung-rugi kedua pihak: <b>mutualisme</b> (+/+), <b>komensalisme</b> (+/0, satu untung, satu tidak terpengaruh), <b>parasitisme</b> (+/−, satu untung, satu dirugikan).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Lebah mendapat nektar (+), bunga terbantu penyerbukan (+) → mutualisme.</li><li><b>B</b> ✘ Benalu menyerap air dan mineral dari pohon mangga (−) → <b>parasitisme</b>. Benalu punya klorofil, tetapi tetap mengambil air dan hara inangnya.</li><li><b>C</b> ✔ Remora mendapat sisa makanan dan tumpangan (+), hiu tidak terpengaruh (0) → komensalisme.</li><li><b>D</b> ✔ Rhizobium mendapat makanan dan tempat (+), tanaman mendapat nitrogen (+) → mutualisme.</li><li><b>E</b> ✘ Anggrek hanya menumpang untuk mendapat cahaya. Ia berfotosintesis sendiri dan tidak mengambil makanan pohon (0) → <b>komensalisme</b>.</li></ul><p class=\"tips\"><b>Tips:</b> benalu dan anggrek sama-sama menempel di pohon. Bedanya: benalu punya akar isap (haustorium) ke jaringan pohon, anggrek tidak.</p>"
  },
  {
    id: "bih-03", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang persebaran fauna Indonesia berikut!",
    pernyataan: [
      "Orangutan dan harimau Sumatra termasuk fauna tipe Asiatis.",
      "Burung cendrawasih dan kanguru pohon di Papua termasuk fauna tipe Australis.",
      "Sulawesi dan Nusa Tenggara termasuk wilayah fauna peralihan.",
      "Anoa dan babirusa adalah hewan endemik Kalimantan."
    ],
    kunci: [true, true, true, false],
    hint: "Garis Wallace memisahkan Kalimantan–Bali dari Sulawesi–Lombok. Garis Weber memisahkan wilayah peralihan dari Papua.",
    pembahasan: "<h4>Konsep</h4><p>Fauna Indonesia dibagi oleh <b>garis Wallace</b> dan <b>garis Weber</b>: barat Wallace = <b>Asiatis</b> (Sumatra, Jawa, Kalimantan, Bali); di antara keduanya = <b>peralihan</b> (Sulawesi, Nusa Tenggara, Maluku); timur Weber = <b>Australis</b> (Papua, Kep. Aru).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Orangutan (Sumatra/Kalimantan) dan harimau Sumatra ada di wilayah Asiatis.</li><li><b>2</b> <i>Benar.</i> Cendrawasih dan kanguru pohon ada di Papua → Australis (berkantung, burung berwarna cerah).</li><li><b>3</b> <i>Benar.</i> Sulawesi dan Nusa Tenggara berada di antara garis Wallace dan Weber.</li><li><b>4</b> <i>Salah.</i> Anoa dan babirusa adalah hewan endemik <b>Sulawesi</b> (wilayah peralihan), bukan Kalimantan.</li></ul><p class=\"tips\"><b>Tips:</b> fauna peralihan banyak yang endemik (hanya ada di situ), misalnya anoa, babirusa, tarsius, maleo, dan komodo (NTT).</p>"
  },
  {
    id: "bih-04", bab: "Ekosistem", level: 3, tipe: "pg",
    soal: "Sawah yang tergenang air dalam waktu lama menjadi miskin oksigen. Beberapa minggu kemudian, kadar nitrat tanah turun drastis dan daun padi menguning. Penjelasan paling tepat untuk fenomena tersebut adalah …",
    opsi: [
      "Bakteri nitrifikasi bekerja lebih aktif sehingga nitrat menumpuk.",
      "Kondisi anaerob memacu bakteri denitrifikasi mengubah nitrat menjadi gas N<sub>2</sub> yang lepas ke udara.",
      "Air menghanyutkan semua amonium sehingga tidak terjadi amonifikasi.",
      "<i>Rhizobium</i> pada akar padi berhenti mengikat nitrogen.",
      "Nitrat berubah menjadi protein di dalam tanah tanpa bantuan mikroba."
    ],
    kunci: 1,
    hint: "Daun kuning adalah tanda kekurangan nitrogen. Bakteri apa yang aktif tanpa oksigen dan \"membuang\" nitrat ke udara?",
    pembahasan: "<h4>Konsep</h4><p><b>Denitrifikasi</b> dilakukan bakteri (misalnya <i>Pseudomonas</i>) pada kondisi <b>anaerob</b>. Karena tidak ada O₂, bakteri memakai nitrat sebagai pengganti O₂ dan mengubahnya menjadi gas N₂ yang lepas ke udara. Akibatnya nitrat tanah hilang.</p><h4>Langkah</h4><ol><li>Sawah tergenang lama → tanah kekurangan O₂ (anaerob).</li><li>Bakteri denitrifikasi aktif → nitrat → N₂ (lepas ke udara).</li><li>Nitrat tanah turun → padi kekurangan nitrogen → tidak bisa membuat klorofil → daun menguning (klorosis).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Nitrifikasi butuh O₂, jadi justru terhambat di tanah tergenang. Lagi pula nitrat terbukti turun, bukan menumpuk.</li><li><b>C</b> Air tidak menghanyutkan \"semua\" amonium, dan pernyataan ini tidak menjelaskan turunnya nitrat secara khusus.</li><li><b>D</b> Rhizobium bersimbiosis dengan kacang-kacangan, bukan padi.</li><li><b>E</b> Pembentukan protein (asimilasi) terjadi di dalam tubuh tumbuhan, bukan di tanah tanpa mikroba.</li></ul><p class=\"tips\"><b>Tips:</b> kata kunci \"miskin oksigen\" atau \"tergenang\" + \"nitrat hilang\" hampir selalu mengarah ke denitrifikasi.</p>"
  },
  {
    id: "bih-05", bab: "Bioteknologi", level: 2, tipe: "mcma",
    soal: "Produk atau teknik berikut yang termasuk bioteknologi modern adalah … (pilih semua yang benar)",
    opsi: [
      "Insulin manusia yang diproduksi bakteri <i>E. coli</i> rekombinan",
      "Tanaman jagung Bt yang tahan serangan ulat",
      "Tempe hasil fermentasi kapang <i>Rhizopus</i>",
      "Kloning domba Dolly melalui transplantasi inti sel",
      "Yoghurt hasil fermentasi bakteri asam laktat"
    ],
    kunci: [0, 1, 3],
    hint: "Bioteknologi modern memanipulasi materi genetik atau inti sel (DNA rekombinan, transgenik, kloning). Bioteknologi konvensional memakai mikroorganisme apa adanya.",
    pembahasan: "<h4>Konsep</h4><p><b>Bioteknologi konvensional</b> memakai mikroorganisme apa adanya (fermentasi tradisional). <b>Bioteknologi modern</b> melibatkan rekayasa di tingkat gen atau sel: DNA rekombinan, transgenik, kloning, kultur jaringan, dan fusi sel.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Gen insulin manusia disisipkan ke plasmid <i>E. coli</i> (DNA rekombinan).</li><li><b>B</b> ✔ Gen racun dari <i>Bacillus thuringiensis</i> disisipkan ke jagung (tanaman transgenik).</li><li><b>C</b> ✘ Tempe memakai kapang <i>Rhizopus</i> alami → konvensional.</li><li><b>D</b> ✔ Inti sel kelenjar susu dipindahkan ke sel telur tanpa inti (transplantasi inti / kloning).</li><li><b>E</b> ✘ Yoghurt memakai bakteri asam laktat alami → konvensional.</li></ul><p class=\"tips\"><b>Tips:</b> tanyakan \"apakah gen atau inti selnya diutak-atik?\" Jika ya → modern. Jika hanya mikroba dibiarkan bekerja → konvensional.</p>"
  },

  // ===================== SEL & METABOLISME =====================
  {
    id: "bih-06", bab: "Pembelahan Sel", level: 1, tipe: "pg",
    soal: "Pada preparat ujung akar bawang, seorang siswa menemukan sel yang kromatid saudaranya sedang berpisah dan bergerak menuju kutub yang berlawanan. Tahap pembelahan yang diamati adalah …",
    opsi: ["Profase", "Metafase", "Anafase", "Telofase", "Interfase"],
    kunci: 2,
    hint: "Urutan mitosis: profase → metafase → anafase → telofase. Pada tahap apa kromatid \"ditarik\" benang spindel ke kutub?",
    pembahasan: "<h4>Konsep</h4><p>Ciri tiap fase mitosis (urutan <b>PMAT</b>): <b>Profase</b> = kromatin memadat menjadi kromosom, membran inti hilang; <b>Metafase</b> = kromosom berjajar di bidang ekuator; <b>Anafase</b> = kromatid saudara berpisah ke kutub berlawanan; <b>Telofase</b> = membran inti terbentuk kembali, sitokinesis.</p><h4>Langkah</h4><p>\"Kromatid saudara berpisah dan bergerak ke kutub berlawanan\" adalah ciri khas <b>anafase</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Profase: kromosom baru mulai terlihat, belum berpisah.</li><li><b>B</b> Metafase: kromosom masih berjajar rapi di tengah.</li><li><b>D</b> Telofase: kromosom sudah tiba di kutub dan membran inti terbentuk.</li><li><b>E</b> Interfase: bukan bagian pembelahan; sel sedang tumbuh dan menyalin DNA.</li></ul><p class=\"tips\"><b>Tips:</b> <b>A</b>nafase = <b>A</b>way (menjauh). <b>M</b>etafase = <b>M</b>iddle (di tengah).</p>"
  },
  {
    id: "bih-07", bab: "Pembelahan Sel", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang perbandingan mitosis dan meiosis berikut!",
    pernyataan: [
      "Meiosis menghasilkan 4 sel anak yang haploid (n).",
      "Pindah silang (crossing over) terjadi pada profase I meiosis.",
      "Mitosis menghasilkan sel anak dengan jumlah kromosom setengah dari sel induk.",
      "Meiosis berperan dalam pembentukan gamet sehingga meningkatkan variasi genetik."
    ],
    kunci: [true, true, false, true],
    hint: "Mitosis untuk pertumbuhan dan perbaikan (sel anak identik, 2n). Meiosis untuk pembentukan gamet (jumlah kromosom setengahnya).",
    pembahasan: "<h4>Konsep</h4><p><b>Mitosis</b>: 1 sel 2n → <b>2 sel 2n</b> identik (pertumbuhan, perbaikan jaringan). <b>Meiosis</b>: 1 sel 2n → <b>4 sel n</b> (pembentukan gamet). Meiosis menambah variasi melalui pindah silang dan pemisahan bebas.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Meiosis menghasilkan 4 sel haploid (n).</li><li><b>2</b> <i>Benar.</i> Pindah silang terjadi saat kromosom homolog berpasangan, yaitu pada profase I (subtahap pakiten).</li><li><b>3</b> <i>Salah.</i> Mitosis menghasilkan sel anak dengan jumlah kromosom <b>sama</b> dengan induk (2n). Yang mengurangi menjadi setengah adalah meiosis.</li><li><b>4</b> <i>Benar.</i> Gamet hasil meiosis membawa kombinasi gen baru → variasi genetik.</li></ul><p class=\"tips\"><b>Tips:</b> mitosis = \"fotokopi\" (2 salinan sama), meiosis = \"acak dan bagi\" (4 sel berbeda, setengah kromosom).</p>"
  },
  {
    id: "bih-08", bab: "Sel: Metabolisme", level: 3, tipe: "kategori",
    stimulus: "<p>Dua molekul glukosa direspirasi secara aerob sempurna. Setiap putaran siklus Krebs menghasilkan 3 NADH, 1 FADH<sub>2</sub>, 1 ATP (GTP), dan 2 CO<sub>2</sub>.</p>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Jumlah asetil-KoA yang masuk ke siklus Krebs adalah 4 molekul.",
      "NADH yang dihasilkan dari siklus Krebs saja adalah 12 molekul.",
      "FADH<sub>2</sub> yang dihasilkan adalah 4 molekul.",
      "CO<sub>2</sub> yang dihasilkan dari siklus Krebs saja adalah 12 molekul."
    ],
    kunci: [true, true, true, false],
    hint: "1 glukosa → 2 piruvat → 2 asetil-KoA (dua putaran Krebs). Hati-hati: CO<sub>2</sub> juga dilepas pada dekarboksilasi oksidatif, sebelum siklus Krebs.",
    pembahasan: "<h4>Konsep</h4><p>Alur respirasi: 1 glukosa → (glikolisis) 2 piruvat → (dekarboksilasi oksidatif) 2 asetil-KoA + 2 CO₂ → (Krebs) 2 putaran. Jadi <b>satu glukosa = dua putaran Krebs</b>.</p><h4>Langkah</h4><p>2 glukosa → 4 piruvat → 4 asetil-KoA → <b>4 putaran</b> Krebs. Setiap putaran: 3 NADH, 1 FADH₂, 1 ATP, 2 CO₂.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> 4 asetil-KoA.</li><li><b>2</b> <i>Benar.</i> NADH Krebs = 4 × 3 = 12.</li><li><b>3</b> <i>Benar.</i> FADH₂ = 4 × 1 = 4.</li><li><b>4</b> <i>Salah.</i> CO₂ dari Krebs <b>saja</b> = 4 × 2 = 8. Angka 12 adalah total jika ditambah 4 CO₂ dari dekarboksilasi oksidatif (piruvat → asetil-KoA).</li></ul><p class=\"tips\"><b>Tips:</b> perhatikan kata \"saja\" atau \"total\". 6 atom C glukosa keluar sebagai 6 CO₂: 2 dari dekarboksilasi oksidatif + 4 dari Krebs (per glukosa).</p>"
  },
  {
    id: "bih-09", bab: "Sel: Metabolisme", level: 3, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang fermentasi alkohol oleh ragi (<i>Saccharomyces cerevisiae</i>) berikut!",
    pernyataan: [
      "CO<sub>2</sub> dilepaskan saat asam piruvat diubah menjadi asetaldehida.",
      "Reduksi asetaldehida menjadi etanol berfungsi meregenerasi NAD<sup>+</sup> agar glikolisis terus berjalan.",
      "Hasil bersih fermentasi alkohol adalah 2 ATP per molekul glukosa.",
      "Seluruh tahapan fermentasi alkohol berlangsung di matriks mitokondria."
    ],
    kunci: [true, true, true, false],
    hint: "Fermentasi tidak melibatkan siklus Krebs maupun transpor elektron. Di bagian sel mana glikolisis terjadi?",
    pembahasan: "<h4>Konsep</h4><p>Fermentasi alkohol terjadi di <b>sitoplasma</b>: glikolisis (glukosa → 2 piruvat, +2 ATP, +2 NADH) → piruvat <b>dilepas CO₂</b> menjadi asetaldehida → asetaldehida <b>direduksi</b> NADH menjadi etanol. Tujuan langkah terakhir adalah mengembalikan NAD⁺, bukan membuat ATP.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Piruvat → asetaldehida + CO₂ (dekarboksilasi). Inilah yang membuat adonan roti mengembang.</li><li><b>2</b> <i>Benar.</i> Tanpa O₂, NADH tidak bisa diolah di transpor elektron. Reduksi asetaldehida memulihkan NAD⁺ supaya glikolisis bisa terus berjalan.</li><li><b>3</b> <i>Benar.</i> Satu-satunya sumber ATP adalah glikolisis: 2 ATP bersih.</li><li><b>4</b> <i>Salah.</i> Seluruh tahapan fermentasi berlangsung di <b>sitoplasma</b>. Mitokondria hanya dipakai pada respirasi aerob.</li></ul><p class=\"tips\"><b>Tips:</b> fermentasi = glikolisis + \"langkah daur ulang NAD⁺\". ATP tetap 2, apa pun produk akhirnya (etanol atau asam laktat).</p>"
  },
  {
    id: "bih-10", bab: "Sel: Metabolisme", level: 2, tipe: "mcma",
    soal: "Pernyataan yang benar tentang fotofosforilasi SIKLIK adalah … (pilih semua yang benar)",
    opsi: [
      "Hanya melibatkan fotosistem I",
      "Menghasilkan ATP",
      "Menghasilkan NADPH",
      "Tidak melepaskan O<sub>2</sub>",
      "Terjadi fotolisis air"
    ],
    kunci: [0, 1, 3],
    hint: "Pada aliran siklik, elektron dari fotosistem I kembali lagi ke fotosistem I. Tanpa fotosistem II, apakah air dipecah?",
    pembahasan: "<h4>Konsep</h4><p>Reaksi terang punya dua jalur. <b>Nonsiklik</b>: elektron mengalir H₂O → PS II → PS I → NADP⁺; menghasilkan ATP, NADPH, dan O₂ (dari fotolisis). <b>Siklik</b>: elektron dari PS I <b>berputar kembali</b> ke PS I; hanya menghasilkan ATP.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Siklik hanya melibatkan PS I (P700).</li><li><b>B</b> ✔ Aliran elektron yang berputar memompa H⁺ → ATP terbentuk.</li><li><b>C</b> ✘ Elektron kembali ke PS I dan tidak diteruskan ke NADP⁺, jadi tidak ada NADPH.</li><li><b>D</b> ✔ Tanpa PS II tidak ada fotolisis air, sehingga tidak ada O₂.</li><li><b>E</b> ✘ Fotolisis air hanya terjadi di PS II (jalur nonsiklik).</li></ul><p class=\"tips\"><b>Tips:</b> siklik = \"putaran tertutup\" → tidak ada yang masuk (air) dan tidak ada yang keluar (NADPH, O₂), hanya ATP.</p>"
  },
  {
    id: "bih-11", bab: "Sel: Metabolisme", level: 2, tipe: "pg",
    stimulus: "<p>Tiga tabung berisi <i>Hydrilla</i> yang sama disinari lampu berwarna berbeda dengan intensitas sama selama 10 menit.</p><table><tr><th>Warna cahaya</th><th>Merah</th><th>Hijau</th><th>Biru</th></tr><tr><td>Jumlah gelembung</td><td>25</td><td>5</td><td>22</td></tr></table>",
    soal: "Penjelasan yang paling tepat mengapa cahaya hijau menghasilkan gelembung paling sedikit adalah …",
    opsi: [
      "Cahaya hijau memiliki energi paling besar sehingga merusak klorofil.",
      "Klorofil sedikit menyerap cahaya hijau dan lebih banyak memantulkannya.",
      "Cahaya hijau mempercepat respirasi sehingga O<sub>2</sub> habis dipakai.",
      "Cahaya hijau hanya dapat diserap oleh fotosistem II.",
      "Cahaya hijau menghambat penyerapan CO<sub>2</sub> oleh stomata."
    ],
    kunci: 1,
    hint: "Mengapa daun terlihat berwarna hijau oleh mata kita?",
    pembahasan: "<h4>Konsep</h4><p>Klorofil menyerap kuat cahaya <b>merah</b> dan <b>biru-ungu</b>, tetapi sangat sedikit menyerap cahaya <b>hijau</b>. Cahaya hijau dipantulkan, itulah sebabnya daun tampak hijau. Cahaya yang tidak diserap tidak bisa dipakai untuk fotosintesis.</p><h4>Langkah</h4><p>Hijau sedikit diserap → energi untuk reaksi terang kecil → fotolisis sedikit → O₂ (gelembung) paling sedikit: 5 vs 25 (merah) dan 22 (biru).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Energi foton terbesar dimiliki cahaya biru/ungu, bukan hijau, dan klorofil tidak rusak oleh cahaya tampak biasa.</li><li><b>C</b> Respirasi tidak dipercepat oleh warna cahaya tertentu.</li><li><b>D</b> Kedua fotosistem menyerap merah dan biru, bukan hijau.</li><li><b>E</b> Warna cahaya tidak menghambat penyerapan CO₂ lewat stomata.</li></ul><p class=\"tips\"><b>Tips:</b> warna yang <i>terlihat</i> pada suatu benda adalah warna yang <i>dipantulkan</i>, bukan yang diserap.</p>"
  },

  // ===================== SISTEM ORGAN (KASUS) =====================
  {
    id: "bih-12", bab: "Sistem Reproduksi", level: 2, tipe: "pg",
    soal: "Seorang pria menjalani vasektomi (pemotongan dan pengikatan vas deferens). Setelah pulih, kondisi yang paling tepat adalah …",
    opsi: [
      "Testis berhenti memproduksi hormon testosteron.",
      "Semen tetap dikeluarkan, tetapi tidak mengandung sperma; produksi testosteron tetap normal.",
      "Pria tersebut tidak dapat lagi mengeluarkan semen.",
      "Sperma tetap keluar tetapi tidak memiliki ekor.",
      "Kelenjar prostat berhenti berfungsi."
    ],
    kunci: 1,
    hint: "Vas deferens hanya saluran sperma. Testosteron dialirkan lewat darah, sedangkan cairan semen sebagian besar berasal dari kelenjar yang letaknya setelah vas deferens.",
    pembahasan: "<h4>Konsep</h4><p>Bedakan dua \"produk\" testis: <b>sperma</b> keluar lewat saluran (epididimis → vas deferens → uretra), sedangkan <b>testosteron</b> dari sel Leydig masuk ke <b>darah</b>, tidak lewat saluran. <b>Semen</b> = sperma + cairan dari vesikula seminalis, prostat, dan kelenjar Cowper.</p><h4>Langkah</h4><p>Vas deferens dipotong → sperma tertahan, tetapi cairan kelenjar tetap keluar → semen <b>tanpa sperma</b>. Testosteron tetap beredar lewat darah → hormon normal.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Testosteron disalurkan lewat darah, jadi tidak terpengaruh pemotongan saluran.</li><li><b>C</b> Sebagian besar volume semen berasal dari kelenjar yang letaknya setelah vas deferens.</li><li><b>D</b> Sperma tidak bisa keluar sama sekali; bentuknya tidak berubah.</li><li><b>E</b> Prostat tidak dipotong dan tetap berfungsi.</li></ul><p class=\"tips\"><b>Tips:</b> kelenjar endokrin (hormon) → darah; kelenjar eksokrin → saluran. Memotong saluran tidak memengaruhi hormon.</p>"
  },
  {
    id: "bih-13", bab: "Sistem Reproduksi", level: 3, tipe: "pg",
    soal: "Pil KB kombinasi berisi estrogen dan progesteron sintetis dosis rendah yang diminum setiap hari. Mekanisme utama pil ini mencegah kehamilan adalah …",
    opsi: [
      "Membunuh sperma di dalam saluran reproduksi wanita.",
      "Menekan sekresi FSH dan LH melalui umpan balik negatif sehingga ovulasi tidak terjadi.",
      "Meningkatkan lonjakan LH sehingga ovulasi terjadi lebih cepat.",
      "Menghancurkan dinding rahim setiap hari.",
      "Menyumbat tuba falopi secara permanen."
    ],
    kunci: 1,
    hint: "Kadar estrogen dan progesteron yang tinggi \"memberi sinyal\" ke hipotalamus dan hipofisis. Hormon apa yang memicu pematangan folikel dan ovulasi?",
    pembahasan: "<h4>Konsep</h4><p><b>Umpan balik negatif</b>: kadar estrogen dan progesteron yang tinggi \"memberi tahu\" hipotalamus–hipofisis untuk <b>mengurangi</b> FSH dan LH. Tanpa FSH folikel tidak matang; tanpa lonjakan LH ovulasi tidak terjadi.</p><h4>Langkah</h4><p>Pil memberi estrogen dan progesteron setiap hari → kadarnya selalu tinggi → FSH dan LH ditekan → tidak ada sel telur yang dilepas → tidak ada pembuahan.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Pil KB tidak bersifat spermisida.</li><li><b>C</b> Justru kebalikannya: lonjakan LH dicegah, bukan dipicu.</li><li><b>D</b> Pil tidak menghancurkan dinding rahim setiap hari.</li><li><b>E</b> Penyumbatan tuba permanen adalah tubektomi. Efek pil bisa pulih jika pemakaian dihentikan.</li></ul><p class=\"tips\"><b>Tips:</b> prinsipnya sama dengan masa kehamilan. Saat hamil, progesteron tinggi sehingga tidak terjadi ovulasi baru. Pil \"meniru\" kondisi itu.</p>"
  },
  {
    id: "bih-14", bab: "Sistem Koordinasi", level: 3, tipe: "pg",
    soal: "Penduduk di daerah pegunungan yang jarang mengonsumsi garam beriodium banyak mengalami pembesaran kelenjar tiroid (gondok). Urutan penyebab yang paling tepat adalah …",
    opsi: [
      "Iodium kurang → tiroksin berlebih → TSH turun → tiroid membesar",
      "Iodium kurang → tiroksin rendah → TSH meningkat → tiroid terus dirangsang dan membesar",
      "Iodium kurang → insulin rendah → gula darah naik → tiroid membesar",
      "Iodium berlebih → tiroksin rendah → TSH turun → tiroid membesar",
      "Iodium kurang → ADH meningkat → retensi cairan di leher"
    ],
    kunci: 1,
    hint: "Iodium adalah bahan baku tiroksin. Jika tiroksin rendah, hipofisis akan merespons dengan menambah hormon perangsang tiroid.",
    pembahasan: "<h4>Konsep</h4><p>Pengaturan hormon tiroid: hipofisis melepas <b>TSH</b> → tiroid membuat <b>tiroksin</b> (butuh <b>iodium</b>) → tiroksin cukup → TSH dikurangi (umpan balik negatif). Jika tiroksin tidak pernah cukup, TSH terus tinggi dan terus merangsang tiroid.</p><h4>Langkah</h4><ol><li>Iodium kurang → tiroksin rendah.</li><li>Umpan balik negatif melemah → hipofisis menambah TSH.</li><li>TSH tinggi terus merangsang tiroid → sel tiroid bertambah → membesar (gondok endemik).</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tanpa iodium tiroksin tidak bisa dibuat berlebih, dan TSH yang turun tidak akan membesarkan tiroid.</li><li><b>C</b> Insulin dibuat pankreas dan tidak terkait iodium.</li><li><b>D</b> Penyebabnya kekurangan iodium, bukan kelebihan.</li><li><b>E</b> ADH mengatur air di ginjal; pembengkakan leher bukan retensi cairan.</li></ul><p class=\"tips\"><b>Tips:</b> organ yang terus \"dipaksa\" bekerja oleh hormon perangsang akan membesar (hipertrofi). Itulah logika gondok.</p>"
  },
  {
    id: "bih-15", bab: "Transport dan Pertukaran Zat", level: 2, tipe: "kategori",
    soal: "Seorang pelari kehilangan banyak cairan melalui keringat sehingga mengalami dehidrasi. Tentukan benar atau salah respons tubuh berikut!",
    pernyataan: [
      "Osmolaritas (kepekatan) darah meningkat.",
      "Hipofisis posterior menyekresi lebih banyak ADH.",
      "Reabsorpsi air di tubulus distal dan saluran pengumpul meningkat.",
      "Volume urine meningkat dan urine menjadi lebih encer."
    ],
    kunci: [true, true, true, false],
    hint: "Tubuh berusaha menghemat air. ADH = antidiuretik (anti = melawan, diuresis = pengeluaran urine).",
    pembahasan: "<h4>Konsep</h4><p><b>Homeostasis air</b>: darah pekat → osmoreseptor di hipotalamus terangsang → hipofisis <b>posterior</b> melepas <b>ADH</b> → tubulus distal dan saluran pengumpul menyerap lebih banyak air → urine sedikit dan pekat → darah kembali normal.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Air hilang sementara zat terlarut tetap → darah lebih pekat.</li><li><b>2</b> <i>Benar.</i> ADH disimpan dan dilepas oleh hipofisis posterior.</li><li><b>3</b> <i>Benar.</i> ADH membuat tubulus distal dan saluran pengumpul lebih permeabel terhadap air.</li><li><b>4</b> <i>Salah.</i> Arahnya terbalik: volume urine <b>berkurang</b> dan urine menjadi <b>lebih pekat</b> untuk menghemat air.</li></ul><p class=\"tips\"><b>Tips:</b> ADH = <b>anti</b>-diuretik = <b>anti</b>-kencing. ADH naik → urine turun. Alkohol menghambat ADH, karena itu peminum lebih sering buang air kecil.</p>"
  },
  {
    id: "bih-16", bab: "Sistem Imun", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang respons imun primer dan sekunder berikut!",
    pernyataan: [
      "Pada respons sekunder, antibodi terbentuk lebih cepat dan dalam jumlah lebih banyak.",
      "Sel B memori berperan penting dalam respons sekunder.",
      "Pada respons primer, kadar antibodi langsung tinggi sejak hari pertama infeksi.",
      "Vaksin ulangan (booster) memanfaatkan prinsip respons sekunder."
    ],
    kunci: [true, true, false, true],
    hint: "Respons primer terjadi saat pertama kali bertemu antigen, sedangkan respons sekunder terjadi saat pertemuan berikutnya dengan antigen yang sama.",
    pembahasan: "<h4>Konsep</h4><p><b>Respons primer</b> (paparan pertama): ada fase lag beberapa hari, antibodi naik perlahan dan tidak terlalu tinggi, lalu terbentuk sel memori. <b>Respons sekunder</b> (paparan ulang): sel memori langsung bekerja, sehingga antibodi naik <b>lebih cepat, lebih tinggi, dan bertahan lebih lama</b>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Sel memori membuat respons sekunder cepat dan kuat.</li><li><b>2</b> <i>Benar.</i> Sel B memori segera mengenali antigen dan berubah menjadi sel plasma pembuat antibodi.</li><li><b>3</b> <i>Salah.</i> Respons primer punya <b>fase lag</b>. Antibodi belum tinggi di hari-hari awal karena tubuh baru \"belajar\" mengenali antigen.</li><li><b>4</b> <i>Benar.</i> Booster sengaja memicu respons sekunder supaya kekebalan kuat dan tahan lama.</li></ul><p class=\"tips\"><b>Tips:</b> pada grafik kadar antibodi, puncak kedua (sekunder) selalu muncul lebih cepat dan lebih tinggi daripada puncak pertama.</p>"
  },
  {
    id: "bih-17", bab: "Sistem Imun", level: 3, tipe: "pg",
    soal: "Virus bereproduksi di dalam sel tubuh sehingga antibodi tidak dapat menjangkaunya. Mekanisme utama tubuh untuk mengeliminasi sel yang sudah terinfeksi virus adalah …",
    opsi: [
      "Sel B langsung memakan sel yang terinfeksi.",
      "Sel T sitotoksik mengenali sel terinfeksi dan menghancurkannya dengan melepaskan perforin.",
      "Sel darah merah mengikat virus dan membawanya ke ginjal.",
      "Histamin dari sel mast membunuh virus di dalam sel.",
      "Antibodi masuk ke dalam sel dan menetralkan virus."
    ],
    kunci: 1,
    hint: "Imunitas humoral (antibodi) bekerja di cairan tubuh. Untuk patogen di DALAM sel, tubuh mengandalkan imunitas seluler.",
    pembahasan: "<h4>Konsep</h4><p>Imunitas spesifik terbagi dua. <b>Humoral</b> (sel B → antibodi) melawan antigen <b>di luar sel</b> (dalam cairan tubuh). <b>Seluler</b> (<b>sel T sitotoksik</b>) menghancurkan <b>sel tubuh yang sudah terinfeksi</b>. Sel terinfeksi menampilkan potongan antigen virus di permukaannya (MHC I).</p><h4>Langkah</h4><p>Sel T sitotoksik mengenali antigen pada MHC I → melepas <b>perforin</b> yang melubangi membran → sel terinfeksi mati beserta virus di dalamnya.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Sel B membuat antibodi, bukan memakan sel. Memakan sel adalah tugas fagosit (makrofag).</li><li><b>C</b> Sel darah merah tidak berperan dalam imunitas seperti itu.</li><li><b>D</b> Histamin memicu peradangan dan alergi, tidak membunuh virus di dalam sel.</li><li><b>E</b> Antibodi tidak bisa masuk ke dalam sel. Soal pun sudah menyebutkannya.</li></ul><p class=\"tips\"><b>Tips:</b> musuh di luar sel → antibodi (sel B). Musuh di dalam sel → bunuh selnya (sel T sitotoksik).</p>"
  },
  {
    id: "bih-18", bab: "Transport dan Pertukaran Zat", level: 3, tipe: "mcma",
    soal: "Seorang siswa penderita asma mengalami serangan setelah terpapar debu. Pernyataan yang tepat tentang kondisi tersebut adalah … (pilih semua yang benar)",
    opsi: [
      "Otot polos bronkiolus berkontraksi sehingga saluran napas menyempit.",
      "Aliran udara terhambat, terutama saat ekspirasi, sehingga terdengar bunyi mengi.",
      "Dinding alveolus rusak permanen dan kehilangan elastisitasnya.",
      "Obat bronkodilator membantu dengan melebarkan saluran bronkiolus.",
      "Volume tidal meningkat drastis selama serangan."
    ],
    kunci: [0, 1, 3],
    hint: "Asma adalah penyempitan saluran napas yang bersifat sementara (reversibel). Bedakan dengan emfisema yang merusak alveolus.",
    pembahasan: "<h4>Konsep</h4><p><b>Asma</b> adalah reaksi alergi pada saluran napas: otot polos bronkiolus berkontraksi (<b>bronkospasme</b>), dinding meradang, dan lendir bertambah. Saluran menyempit tetapi <b>dapat pulih</b>. Bandingkan dengan <b>emfisema</b>: kerusakan alveolus yang permanen.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Debu (alergen) memicu kontraksi otot polos bronkiolus.</li><li><b>B</b> ✔ Saat ekspirasi saluran makin menyempit, sehingga udara sulit keluar dan terdengar mengi (<i>wheezing</i>).</li><li><b>C</b> ✘ Kerusakan alveolus permanen adalah emfisema (biasanya akibat merokok), bukan asma.</li><li><b>D</b> ✔ Bronkodilator (misalnya salbutamol) merelaksasi otot polos sehingga bronkiolus melebar.</li><li><b>E</b> ✘ Saluran sempit membuat napas pendek dan dangkal, jadi volume tidal <i>turun</i>.</li></ul><p class=\"tips\"><b>Tips:</b> asma = masalah di <b>saluran</b> (reversibel); emfisema = masalah di <b>alveolus</b> (permanen).</p>"
  },
  {
    id: "bih-19", bab: "Transport dan Pertukaran Zat", level: 3, tipe: "pg",
    soal: "Seorang pasien mengalami kebocoran katup bikuspidalis (mitral). Dampak yang paling mungkin terjadi adalah …",
    opsi: [
      "Darah dari ventrikel kanan bocor ke atrium kanan sehingga paru-paru kekurangan darah.",
      "Saat ventrikel kiri berkontraksi, sebagian darah kembali ke atrium kiri sehingga darah yang dipompa ke seluruh tubuh berkurang.",
      "Darah dari aorta kembali ke ventrikel kanan.",
      "Darah kaya oksigen bercampur dengan darah miskin oksigen di ventrikel kanan.",
      "Darah dari vena kava tidak dapat masuk ke atrium kanan."
    ],
    kunci: 1,
    hint: "Katup bikuspidalis berada di antara atrium kiri dan ventrikel kiri. Fungsinya mencegah darah berbalik arah saat ventrikel berkontraksi.",
    pembahasan: "<h4>Konsep</h4><p>Katup jantung mencegah aliran balik. <b>Bikuspidalis (mitral)</b> berada di antara atrium kiri dan ventrikel kiri; <b>trikuspidalis</b> di antara atrium kanan dan ventrikel kanan. Saat ventrikel kiri berkontraksi, katup mitral harus tertutup rapat supaya semua darah keluar ke aorta.</p><h4>Langkah</h4><p>Mitral bocor → saat ventrikel kiri memompa, sebagian darah berbalik ke atrium kiri → darah ke aorta (seluruh tubuh) berkurang → mudah lelah; darah juga terbendung ke paru-paru → sesak.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Itu kebocoran katup <i>trikuspidalis</i> (sisi kanan).</li><li><b>C</b> Aorta terhubung ke ventrikel <i>kiri</i>, dan dijaga katup semilunar aorta.</li><li><b>D</b> Darah bercampur adalah ciri kelainan sekat (septum), bukan kebocoran katup.</li><li><b>E</b> Hambatan masuk ke atrium kanan tidak terkait katup mitral.</li></ul><p class=\"tips\"><b>Tips:</b> \"<b>Bi</b>kuspidalis di <b>ki</b>ri\" (bi-ki), \"<b>tri</b>kuspidalis di kanan\".</p>"
  },
  {
    id: "bih-20", bab: "Sistem Koordinasi", level: 3, tipe: "pg",
    soal: "Insektisida golongan organofosfat menghambat kerja enzim asetilkolinesterase di sinaps. Akibat yang paling mungkin pada orang yang keracunan adalah …",
    opsi: [
      "Asetilkolin tidak dilepaskan sehingga otot lumpuh layu.",
      "Asetilkolin menumpuk di celah sinaps sehingga otot terus terangsang (kejang).",
      "Impuls tidak dapat merambat di sepanjang akson.",
      "Neuron sensorik berhenti menerima rangsang.",
      "Selubung mielin rusak sehingga impuls melambat."
    ],
    kunci: 1,
    hint: "Asetilkolinesterase berfungsi menguraikan asetilkolin setelah impuls diteruskan. Apa yang terjadi jika \"penghapus\" ini tidak bekerja?",
    pembahasan: "<h4>Konsep</h4><p>Di sinaps neuromuskular, <b>asetilkolin</b> (neurotransmiter) dilepas untuk merangsang otot. Enzim <b>asetilkolinesterase</b> lalu menguraikannya supaya rangsangan <b>berhenti</b>. Jika enzim ini dihambat, sinyal \"kontraksi\" tidak pernah dimatikan.</p><h4>Langkah</h4><p>Organofosfat menghambat enzim → asetilkolin tidak diuraikan → menumpuk di celah sinaps → reseptor otot terus terangsang → kejang dan kedutan, lalu otot kelelahan.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Pelepasan asetilkolin tidak terganggu. Masalahnya ada pada penguraiannya.</li><li><b>C</b> Perambatan impuls di akson tidak bergantung pada enzim ini.</li><li><b>D</b> Reseptor sensorik tidak dipengaruhi.</li><li><b>E</b> Selubung mielin tidak dirusak oleh organofosfat.</li></ul><p class=\"tips\"><b>Tips:</b> menghambat enzim pengurai = \"rem blong\": sinyal terus berjalan. Menghambat pelepasan neurotransmiter (misalnya racun botulinum) = \"gas mati\": otot lumpuh.</p>"
  },
  {
    id: "bih-21", bab: "Memproses, Menganalisis Data dan Informasi", level: 3, tipe: "kategori",
    stimulus: "<p>Siswa menguji pengaruh pH terhadap kerja enzim amilase. Setiap tabung berisi 5 mL amilum 1% dan 1 mL larutan amilase, diinkubasi pada 37 °C selama 10 menit, lalu ditetesi iodin.</p><table><tr><th>pH</th><th>3</th><th>5</th><th>7</th><th>9</th></tr><tr><td>Warna setelah ditetesi iodin</td><td>Biru-hitam</td><td>Biru muda</td><td>Kuning kecokelatan</td><td>Biru muda</td></tr></table>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Variabel bebas percobaan ini adalah pH.",
      "Suhu, waktu inkubasi, dan volume larutan merupakan variabel kontrol.",
      "Warna biru-hitam pada pH 3 menunjukkan amilum masih utuh karena amilase tidak bekerja.",
      "Warna kuning kecokelatan pada pH 7 menunjukkan amilase paling tidak aktif pada pH tersebut."
    ],
    kunci: [true, true, true, false],
    hint: "Iodin + amilum = biru-hitam. Jika amilum sudah dipecah habis oleh enzim, iodin tetap berwarna aslinya (kuning kecokelatan).",
    pembahasan: "<h4>Konsep</h4><p>Uji iodin: <b>biru-hitam</b> = masih ada amilum; <b>kuning kecokelatan</b> (warna iodin sendiri) = amilum sudah habis diuraikan. Makin sedikit warna biru, makin aktif enzim amilase.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> pH sengaja dibuat berbeda-beda → variabel bebas.</li><li><b>2</b> <i>Benar.</i> Suhu 37 °C, waktu 10 menit, dan volume dibuat sama di semua tabung → variabel kontrol.</li><li><b>3</b> <i>Benar.</i> Biru-hitam berarti amilum utuh, karena enzim tidak bekerja pada suasana terlalu asam.</li><li><b>4</b> <i>Salah.</i> Kuning kecokelatan berarti amilum sudah <b>habis</b> diuraikan → amilase <b>paling aktif</b> pada pH 7 (pH optimum).</li></ul><p class=\"tips\"><b>Tips:</b> warna iodin menunjukkan <i>sisa substrat</i>, bukan aktivitas enzim secara langsung. Makin sedikit sisa, makin aktif enzimnya. Logikanya terbalik, jadi hati-hati.</p>"
  }
]};
