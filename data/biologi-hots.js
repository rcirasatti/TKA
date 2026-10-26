// Paket HOTS Biologi — soal kasus & penalaran bergaya tryout TKA (bukan salinan; konteks dibuat baru).
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL["biologi-hots"] = { soal: [

  // ===================== KEANEKARAGAMAN, EKOLOGI, BIOTEKNOLOGI =====================
  {
    id: "bih-01", bab: "Keanekaragaman & Ekologi", level: 2, tipe: "pg",
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
    pembahasan: "<p>Biji tertutup → <b>Angiospermae</b>. Akar serabut, tulang daun sejajar, dan berkas pengangkut tersebar adalah ciri <b>monokotil</b> → contoh: <b>jagung</b>.</p><p>Dikotil berakar tunggang, tulang daun menyirip/menjari, dan berkas pengangkutnya teratur melingkar.</p>"
  },
  {
    id: "bih-02", bab: "Keanekaragaman & Ekologi", level: 2, tipe: "mcma",
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
    pembahasan: "<p>• Lebah dapat nektar, bunga terbantu penyerbukan → mutualisme ✔<br>• Benalu menyerap air dan mineral inang → <i>parasitisme</i> ✘<br>• Remora mendapat sisa makanan, hiu tidak terpengaruh → komensalisme ✔<br>• <i>Rhizobium</i> mendapat makanan, tanaman mendapat nitrogen → mutualisme ✔<br>• Anggrek hanya menumpang (berfotosintesis sendiri) → <i>komensalisme</i> ✘</p>"
  },
  {
    id: "bih-03", bab: "Keanekaragaman & Ekologi", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang persebaran fauna Indonesia berikut!",
    pernyataan: [
      "Orangutan dan harimau Sumatra termasuk fauna tipe Asiatis.",
      "Burung cendrawasih dan kanguru pohon di Papua termasuk fauna tipe Australis.",
      "Sulawesi dan Nusa Tenggara termasuk wilayah fauna peralihan.",
      "Anoa dan babirusa adalah hewan endemik Kalimantan."
    ],
    kunci: [true, true, true, false],
    hint: "Garis Wallace memisahkan Kalimantan–Bali dari Sulawesi–Lombok. Garis Weber memisahkan wilayah peralihan dari Papua.",
    pembahasan: "<p>1. Sumatra, Jawa, Kalimantan, Bali = Asiatis ✔.</p><p>2. Papua dan Kepulauan Aru = Australis ✔.</p><p>3. Wilayah antara garis Wallace dan Weber (Sulawesi, Nusa Tenggara, Maluku) = peralihan ✔.</p><p>4. Anoa dan babirusa adalah endemik <b>Sulawesi</b> → Salah.</p>"
  },
  {
    id: "bih-04", bab: "Keanekaragaman & Ekologi", level: 3, tipe: "pg",
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
    pembahasan: "<p>Tanah tergenang menjadi <b>anaerob</b>. Bakteri denitrifikasi (mis. <i>Pseudomonas</i>) memakai nitrat sebagai pengganti O<sub>2</sub> dan mengubahnya menjadi <b>N<sub>2</sub></b> yang lepas ke udara → nitrat berkurang → padi kekurangan N → daun menguning (klorosis).</p><p>Nitrifikasi justru butuh oksigen. <i>Rhizobium</i> bersimbiosis dengan kacang-kacangan, bukan padi.</p>"
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
    pembahasan: "<p>Modern:<br>• Insulin dari <i>E. coli</i> yang disisipi gen insulin manusia (DNA rekombinan) ✔<br>• Jagung Bt disisipi gen dari <i>Bacillus thuringiensis</i> (transgenik) ✔<br>• Domba Dolly melalui transplantasi inti (kloning) ✔</p><p>Konvensional: tempe dan yoghurt memakai mikroorganisme alami tanpa rekayasa genetik.</p>"
  },

  // ===================== SEL & METABOLISME =====================
  {
    id: "bih-06", bab: "Sel & Pembelahan", level: 1, tipe: "pg",
    soal: "Pada preparat ujung akar bawang, seorang siswa menemukan sel yang kromatid saudaranya sedang berpisah dan bergerak menuju kutub yang berlawanan. Tahap pembelahan yang diamati adalah …",
    opsi: ["Profase", "Metafase", "Anafase", "Telofase", "Interfase"],
    kunci: 2,
    hint: "Urutan mitosis: profase → metafase → anafase → telofase. Pada tahap apa kromatid \"ditarik\" benang spindel ke kutub?",
    pembahasan: "<p><b>Anafase</b>: sentromer membelah, kromatid saudara berpisah dan ditarik benang spindel ke kutub berlawanan.</p><p>Metafase = kromosom berjajar di bidang ekuator; telofase = membran inti terbentuk kembali dan kromosom menjadi kromatin; profase = kromatin memadat dan membran inti menghilang.</p>"
  },
  {
    id: "bih-07", bab: "Sel & Pembelahan", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang perbandingan mitosis dan meiosis berikut!",
    pernyataan: [
      "Meiosis menghasilkan 4 sel anak yang haploid (n).",
      "Pindah silang (crossing over) terjadi pada profase I meiosis.",
      "Mitosis menghasilkan sel anak dengan jumlah kromosom setengah dari sel induk.",
      "Meiosis berperan dalam pembentukan gamet sehingga meningkatkan variasi genetik."
    ],
    kunci: [true, true, false, true],
    hint: "Mitosis untuk pertumbuhan dan perbaikan (sel anak identik, 2n). Meiosis untuk pembentukan gamet (jumlah kromosom setengahnya).",
    pembahasan: "<p>1. Meiosis: 1 sel 2n → 4 sel n ✔.</p><p>2. Crossing over terjadi saat profase I (tahap pakiten) ✔.</p><p>3. Mitosis menghasilkan 2 sel anak dengan jumlah kromosom <b>sama</b> dengan induk (2n) → Salah.</p><p>4. Meiosis membentuk gamet, dan crossing over serta pemisahan bebas menambah variasi ✔.</p>"
  },
  {
    id: "bih-08", bab: "Metabolisme", level: 3, tipe: "kategori",
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
    pembahasan: "<p>2 glukosa → 4 piruvat → <b>4 asetil-KoA</b> = 4 putaran Krebs ✔.</p><p>NADH Krebs = 4 × 3 = 12 ✔. FADH<sub>2</sub> = 4 × 1 = 4 ✔.</p><p>CO<sub>2</sub> dari Krebs saja = 4 × 2 = <b>8</b>. Angka 12 adalah total CO<sub>2</sub> jika ditambah 4 CO<sub>2</sub> dari dekarboksilasi oksidatif → Salah.</p>"
  },
  {
    id: "bih-09", bab: "Metabolisme", level: 3, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang fermentasi alkohol oleh ragi (<i>Saccharomyces cerevisiae</i>) berikut!",
    pernyataan: [
      "CO<sub>2</sub> dilepaskan saat asam piruvat diubah menjadi asetaldehida.",
      "Reduksi asetaldehida menjadi etanol berfungsi meregenerasi NAD<sup>+</sup> agar glikolisis terus berjalan.",
      "Hasil bersih fermentasi alkohol adalah 2 ATP per molekul glukosa.",
      "Seluruh tahapan fermentasi alkohol berlangsung di matriks mitokondria."
    ],
    kunci: [true, true, true, false],
    hint: "Fermentasi tidak melibatkan siklus Krebs maupun transpor elektron. Di bagian sel mana glikolisis terjadi?",
    pembahasan: "<p>1. Piruvat → asetaldehida + <b>CO<sub>2</sub></b> (dekarboksilasi) ✔.</p><p>2. Asetaldehida + NADH → etanol + NAD<sup>+</sup>; tujuannya menyediakan kembali NAD<sup>+</sup> untuk glikolisis, bukan membuat ATP tambahan ✔.</p><p>3. ATP hanya berasal dari glikolisis = 2 ATP bersih ✔.</p><p>4. Fermentasi berlangsung di <b>sitoplasma</b> → Salah.</p>"
  },
  {
    id: "bih-10", bab: "Metabolisme", level: 2, tipe: "mcma",
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
    pembahasan: "<p>Siklik: elektron berputar dari PS I kembali ke PS I → hanya menghasilkan <b>ATP</b> ✔. Tidak ada NADPH ✘, tidak ada fotolisis air (yang terjadi di PS II) ✘, sehingga <b>tidak ada O<sub>2</sub></b> ✔.</p><p>Nonsiklik melibatkan PS II dan PS I serta menghasilkan ATP, NADPH, dan O<sub>2</sub>.</p>"
  },
  {
    id: "bih-11", bab: "Metabolisme", level: 2, tipe: "pg",
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
    pembahasan: "<p>Klorofil menyerap kuat cahaya <b>merah dan biru</b>, tetapi sedikit menyerap cahaya hijau dan <b>memantulkannya</b> (itulah sebabnya daun tampak hijau). Energi cahaya yang terserap sedikit → laju fotosintesis rendah → O<sub>2</sub> (gelembung) sedikit.</p>"
  },

  // ===================== SISTEM ORGAN (KASUS) =====================
  {
    id: "bih-12", bab: "Reproduksi & Hormon", level: 2, tipe: "pg",
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
    pembahasan: "<p>Vas deferens terputus → sperma tidak bisa keluar. Cairan semen (dari vesikula seminalis dan prostat) tetap ada → <b>semen tanpa sperma</b>.</p><p>Sel Leydig di testis tetap menghasilkan testosteron yang disalurkan lewat <b>darah</b>, sehingga ciri kelamin sekunder tidak berubah.</p>"
  },
  {
    id: "bih-13", bab: "Reproduksi & Hormon", level: 3, tipe: "pg",
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
    pembahasan: "<p>Estrogen dan progesteron tinggi memberi <b>umpan balik negatif</b> ke hipotalamus–hipofisis → sekresi <b>FSH</b> (pematangan folikel) dan <b>LH</b> (pemicu ovulasi) ditekan → <b>tidak terjadi ovulasi</b>.</p><p>Pil tidak membunuh sperma dan tidak menyumbat tuba secara permanen (efeknya reversibel).</p>"
  },
  {
    id: "bih-14", bab: "Reproduksi & Hormon", level: 3, tipe: "pg",
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
    pembahasan: "<p>Iodium kurang → tiroksin tidak cukup dibuat → umpan balik negatif melemah → hipofisis menyekresi <b>TSH lebih banyak</b> → kelenjar tiroid terus dirangsang → sel-selnya bertambah banyak → <b>membesar</b> (gondok).</p>"
  },
  {
    id: "bih-15", bab: "Ekskresi & Homeostasis", level: 2, tipe: "kategori",
    soal: "Seorang pelari kehilangan banyak cairan melalui keringat sehingga mengalami dehidrasi. Tentukan benar atau salah respons tubuh berikut!",
    pernyataan: [
      "Osmolaritas (kepekatan) darah meningkat.",
      "Hipofisis posterior menyekresi lebih banyak ADH.",
      "Reabsorpsi air di tubulus distal dan saluran pengumpul meningkat.",
      "Volume urine meningkat dan urine menjadi lebih encer."
    ],
    kunci: [true, true, true, false],
    hint: "Tubuh berusaha menghemat air. ADH = antidiuretik (anti = melawan, diuresis = pengeluaran urine).",
    pembahasan: "<p>Kehilangan air → darah lebih pekat ✔ → osmoreseptor di hipotalamus terangsang → hipofisis posterior melepas <b>ADH</b> lebih banyak ✔ → reabsorpsi air meningkat ✔ → urine <b>sedikit dan pekat</b>. Pernyataan 4 terbalik → Salah.</p>"
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
    pembahasan: "<p>1. Respons sekunder lebih cepat, lebih kuat, lebih lama ✔.</p><p>2. Sel B memori langsung mengenali antigen dan cepat berubah menjadi sel plasma ✔.</p><p>3. Respons primer memiliki <b>fase lag</b> beberapa hari sebelum antibodi meningkat → Salah.</p><p>4. Booster memicu respons sekunder agar kadar antibodi dan sel memori tinggi ✔.</p>"
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
    pembahasan: "<p>Sel terinfeksi menampilkan potongan antigen virus di permukaannya (MHC I). <b>Sel T sitotoksik</b> mengenalinya lalu melepaskan <b>perforin</b> yang melubangi membran sel → sel terinfeksi mati beserta virus di dalamnya.</p><p>Antibodi tidak dapat masuk ke dalam sel; antibodi menetralkan virus yang masih berada di luar sel.</p>"
  },
  {
    id: "bih-18", bab: "Respirasi & Sirkulasi", level: 3, tipe: "mcma",
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
    pembahasan: "<p>• Alergen memicu bronkiolus menyempit (bronkospasme), lendir bertambah ✔<br>• Udara sulit keluar → mengi (wheezing) ✔<br>• Kerusakan alveolus permanen adalah ciri <i>emfisema</i>, bukan asma ✘<br>• Bronkodilator merelaksasi otot polos bronkiolus ✔<br>• Saluran sempit justru membuat volume tidal <i>turun</i>, napas cepat dan dangkal ✘</p>"
  },
  {
    id: "bih-19", bab: "Respirasi & Sirkulasi", level: 3, tipe: "pg",
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
    pembahasan: "<p>Katup bikuspidalis menutup saat ventrikel kiri berkontraksi agar darah hanya mengalir ke aorta. Jika bocor, sebagian darah <b>berbalik ke atrium kiri</b> → volume darah ke aorta (seluruh tubuh) berkurang → pasien mudah lelah dan sesak.</p><p>Katup antara atrium kanan dan ventrikel kanan adalah trikuspidalis.</p>"
  },
  {
    id: "bih-20", bab: "Koordinasi", level: 3, tipe: "pg",
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
    pembahasan: "<p>Normalnya asetilkolin diuraikan oleh asetilkolinesterase agar rangsangan berhenti. Jika enzim dihambat, asetilkolin <b>menumpuk</b> di celah sinaps → reseptor terus terangsang → otot <b>berkontraksi terus-menerus</b> (kejang, kedutan), lalu kelelahan.</p>"
  },
  {
    id: "bih-21", bab: "Keterampilan Proses", level: 3, tipe: "kategori",
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
    pembahasan: "<p>1. pH sengaja dibuat berbeda → variabel bebas ✔.</p><p>2. Suhu 37 °C, waktu 10 menit, dan volume dibuat sama → variabel kontrol ✔.</p><p>3. Biru-hitam = amilum masih ada → amilase tidak bekerja pada pH 3 ✔.</p><p>4. Kuning kecokelatan = amilum <b>sudah habis</b> diuraikan → amilase justru <b>paling aktif</b> (pH optimum ±7) → Salah.</p>"
  }
]};
