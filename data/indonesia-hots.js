// Paket HOTS Bahasa Indonesia — gaya tryout TKA (teks dan soal dibuat baru).
(function () {
  var TU = "Pemahaman Tekstual", IN = "Pemahaman Inferensial", EV = "Evaluasi & Apresiasi";

  var TA = "<p><b>Teks A</b></p>" +
    "<p style='text-align:center'><b>Proposal Kegiatan Bank Sampah \"Sekolahku Bersih, Bumiku Lestari\"</b></p>" +
    "<p><sup>1</sup>Setiap hari, kantin dan kelas di SMA Nusantara menghasilkan sekitar 25 kilogram sampah, sebagian besar berupa botol plastik dan kertas. " +
    "<sup>2</sup>Sampah tersebut selama ini langsung dibuang ke tempat pembuangan sementara tanpa dipilah. <sup>3</sup>Padahal, botol plastik dan kertas masih bernilai jual " +
    "jika dikumpulkan dan dipilah dengan benar. <sup>4</sup>Oleh karena itu, OSIS mengusulkan pendirian bank sampah sekolah.</p>" +
    "<p><sup>5</sup>Bank sampah akan dibuka setiap Jumat setelah jam pelajaran. <sup>6</sup>Siswa dapat menyetorkan sampah yang sudah dipilah, kemudian sampah ditimbang dan dicatat " +
    "dalam buku tabungan. <sup>7</sup>Hasil penjualan sampah kepada pengepul akan dikembalikan kepada siswa dalam bentuk saldo tabungan. <sup>8</sup>Kegiatan ini melibatkan seluruh siswa, " +
    "guru, dan petugas kebersihan sekolah.</p>" +
    "<p><sup>9</sup>Melalui kegiatan ini, volume sampah yang dibuang ke tempat pembuangan diharapkan berkurang. <sup>10</sup>Selain itu, siswa diharapkan terbiasa memilah sampah " +
    "dan memahami bahwa sampah dapat bernilai ekonomi.</p>";

  var TB = "<p><b>Teks B</b></p>" +
    "<p><b>Raka</b>: <i>(meletakkan buku dengan kesal)</i> Aku mau begadang sampai jam tiga pagi setiap malam minggu ini. TKA tinggal seminggu, semua materi harus masuk!<br>" +
    "<b>Salsa</b>: <i>(mengernyitkan dahi)</i> Jangan, Rak. Kata dokter di seminar kemarin, kurang tidur justru membuat daya ingat menurun. Lebih baik tidur cukup dan belajarnya dicicil.<br>" +
    "<b>Bimo</b>: <i>(tertawa)</i> Ah, kalian berlebihan. Aku malah tidak belajar sama sekali. Toh, hasilnya nanti juga tergantung keberuntungan.<br>" +
    "<b>Salsa</b>: <i>(menatap Bimo)</i> Bim, keberuntungan juga butuh persiapan. Bagaimana kalau kita membuat jadwal belajar bersama? Dua jam setiap sore, istirahat cukup, lalu latihan soal setiap hari.<br>" +
    "<b>Raka</b>: <i>(terdiam sejenak)</i> …Boleh juga. Tapi aku tetap mau mengerjakan latihan soal yang paling susah dulu.</p>";

  var TC = "<p><b>Teks C</b></p>" +
    "<p><b>Sawah yang Dijual</b></p>" +
    "<p>Dulu di sini padi menguning,<br>burung pipit bernyanyi riang;<br>kini beton tumbuh menjulang,<br>sawah tinggal cerita usang.</p>" +
    "<p>Ayah menjual petak terakhir,<br>katanya, \"Zaman sudah berubah.\"<br>Tapi nasi di piring kita,<br>tetap datang dari sawah.</p>";

  var TD = "<p><b>Teks D</b></p>" +
    "<p><sup>1</sup>(…). <sup>2</sup>Setiap musim gugur, jutaan burung di belahan bumi utara terbang ribuan kilometer ke selatan untuk menghindari musim dingin. " +
    "<sup>3</sup>Uniknya, banyak di antara mereka mampu kembali ke tempat yang sama setiap tahun.</p>" +
    "<p><sup>4</sup>Para ilmuwan menemukan bahwa burung memanfaatkan beberapa petunjuk untuk <u>bernavigasi</u>. <sup>5</sup>Pada siang hari, burung menggunakan posisi Matahari, " +
    "sedangkan pada malam hari mereka mengamati pola bintang. <sup>6</sup>Selain itu, burung diduga memiliki protein khusus di mata yang peka terhadap medan magnet Bumi. " +
    "<sup>7</sup>(…) langit tertutup awan tebal, burung tetap dapat menentukan arah dengan bantuan medan magnet tersebut.</p>" +
    "<p><sup>8</sup>Temuan ini menunjukkan bahwa kemampuan navigasi burung merupakan hasil kerja sama berbagai indra yang sangat kompleks.</p>";

  var TE = "<p><b>Teks E</b></p>" +
    "<p>1) Di warung itu, teh disajikan panas atau dingin dengan tambahan es.<br>" +
    "2) Minuman teh sangat digemari masyarakat Indonesia.<br>" +
    "3) Kegemaran itu terlihat dari hampir setiap warung makan yang menyediakan teh manis.<br>" +
    "4) Tidak hanya di warung, berbagai daerah juga mengolah teh dengan cita rasa khas, seperti teh talua di Sumatra Barat dan teh poci di Tegal.<br>" +
    "5) Oleh karena itu, teh dapat dikatakan sebagai minuman yang melekat dalam keseharian bangsa Indonesia.</p>";

  window.BANK_SOAL = window.BANK_SOAL || {};
  window.BANK_SOAL["indonesia-hots"] = { soal: [

    // ---------- Teks A: Proposal ----------
    {
      id: "idh-01", bab: EV, level: 2, tipe: "kategori", stimulus: TA,
      soal: "Tentukan apakah setiap pasangan usulan program dan data pendukung berikut SESUAI (Benar) atau TIDAK SESUAI (Salah) berdasarkan teks proposal!",
      pernyataan: [
        "Usulan: mendirikan bank sampah sekolah. — Data: setiap hari 25 kg sampah dibuang tanpa dipilah, padahal botol plastik dan kertas masih bernilai jual.",
        "Usulan: menimbang dan mencatat setoran sampah dalam buku tabungan. — Data: hasil penjualan sampah dikembalikan kepada siswa dalam bentuk saldo tabungan.",
        "Usulan: membeli mesin pencacah plastik sebagai kegiatan utama. — Data: siswa diharapkan terbiasa memilah sampah."
      ],
      kunci: [true, true, false],
      hint: "Periksa dua hal: apakah usulan itu memang ada di teks, dan apakah datanya benar-benar mendukung usulan tersebut.",
      pembahasan: "<p>1. Masalah sampah yang tidak dipilah (kalimat 1–3) mendasari usulan bank sampah (kalimat 4) → <b>sesuai</b>.</p><p>2. Pencatatan di buku tabungan (kalimat 6) berkaitan langsung dengan saldo tabungan (kalimat 7) → <b>sesuai</b>.</p><p>3. Mesin pencacah plastik <b>tidak pernah diusulkan</b> dalam teks, dan datanya tidak mendukung pembelian mesin → <b>tidak sesuai</b>.</p>"
    },
    {
      id: "idh-02", bab: IN, level: 2, tipe: "pg", stimulus: TA,
      soal: "Perbedaan gagasan antara paragraf pertama dan paragraf kedua dalam proposal tersebut adalah …",
      opsi: [
        "Paragraf pertama menguraikan manfaat bank sampah, sedangkan paragraf kedua menjelaskan latar belakang masalah.",
        "Paragraf pertama menjelaskan latar belakang masalah sampah dan usulan kegiatan, sedangkan paragraf kedua menguraikan mekanisme pelaksanaan dan sasaran kegiatan.",
        "Paragraf pertama membahas cara menjual sampah, sedangkan paragraf kedua membahas jenis-jenis sampah.",
        "Paragraf pertama berisi harapan, sedangkan paragraf kedua berisi anggaran biaya.",
        "Paragraf pertama membahas peran guru, sedangkan paragraf kedua membahas peran petugas kebersihan."
      ],
      kunci: 1,
      hint: "Ringkas isi setiap paragraf: paragraf 1 berisi masalah apa? Paragraf 2 berisi rincian apa saja (waktu, cara, peserta)?",
      pembahasan: "<p>Paragraf 1: data sampah, masalah tidak dipilah, dan usulan bank sampah → <b>latar belakang dan usulan</b>.</p><p>Paragraf 2: jadwal (Jumat), cara menyetor dan mencatat, saldo, serta pihak yang terlibat → <b>mekanisme pelaksanaan dan sasaran</b>.</p><p>Harapan/manfaat ada di paragraf 3.</p>"
    },
    {
      id: "idh-03", bab: EV, level: 3, tipe: "kategori", stimulus: TA,
      soal: "Tentukan apakah setiap argumen berikut LOGIS (Benar) atau TIDAK LOGIS (Salah) berdasarkan teks!",
      pernyataan: [
        "Karena sampah yang bernilai jual dibuang tanpa dipilah, bank sampah dapat menjadi solusi untuk memanfaatkannya.",
        "Dengan adanya bank sampah, SMA Nusantara dipastikan tidak akan menghasilkan sampah lagi.",
        "Pemberian saldo tabungan dapat mendorong siswa lebih rajin memilah sampah.",
        "Karena bank sampah hanya buka pada hari Jumat, siswa dilarang membuang sampah pada hari lain."
      ],
      kunci: [true, false, true, false],
      hint: "Waspadai kesimpulan yang berlebihan (\"dipastikan tidak akan … lagi\") dan sebab-akibat yang tidak nyambung.",
      pembahasan: "<p>1. Masalah → solusi yang sesuai → <b>logis</b>.</p><p>2. Teks hanya berharap volume sampah <i>berkurang</i>; \"dipastikan tidak menghasilkan sampah lagi\" berlebihan → <b>tidak logis</b>.</p><p>3. Insentif berupa saldo wajar mendorong perilaku memilah → <b>logis</b>.</p><p>4. Jadwal buka bank sampah tidak berarti larangan membuang sampah pada hari lain → <b>tidak logis</b>.</p>"
    },
    {
      id: "idh-04", bab: IN, level: 3, tipe: "pg", stimulus: TA,
      soal: "Hubungan logis antarkalimat yang PALING tepat berdasarkan teks proposal tersebut adalah …",
      opsi: [
        "Kalimat (3) merupakan contoh dari kalimat (2).",
        "Kalimat (3) menyatakan pertentangan dengan kenyataan pada kalimat (2).",
        "Kalimat (7) merupakan sebab dari kalimat (6).",
        "Kalimat (8) merupakan akibat dari kalimat (7).",
        "Kalimat (10) merupakan pengulangan isi kalimat (9)."
      ],
      kunci: 1,
      hint: "Perhatikan kata penghubung di awal kalimat (3): \"Padahal\".",
      pembahasan: "<p>Kalimat (2): sampah dibuang tanpa dipilah (kenyataan). Kalimat (3) diawali \"<b>Padahal</b>\": sampah itu masih bernilai jual → hubungan <b>pertentangan</b>.</p><p>Kalimat (7) adalah kelanjutan proses dari kalimat (6), bukan sebabnya. Kalimat (10) menambahkan harapan baru (\"Selain itu\"), bukan mengulang.</p>"
    },
    {
      id: "idh-05", bab: IN, level: 2, tipe: "pg", stimulus: TA,
      soal: "Kalimat yang PALING tepat ditambahkan sebagai penutup proposal tersebut adalah …",
      opsi: [
        "Oleh karena itu, semua siswa wajib membawa sampah dari rumah setiap hari.",
        "Dengan demikian, bank sampah sekolah tidak hanya mengurangi sampah, tetapi juga menumbuhkan kebiasaan peduli lingkungan dan kesadaran akan nilai ekonomi sampah.",
        "Jadi, sampah plastik harus dibakar agar tidak menumpuk di sekolah.",
        "Dengan demikian, kantin sekolah sebaiknya ditutup agar tidak ada sampah.",
        "Oleh sebab itu, petugas kebersihan tidak lagi diperlukan di sekolah."
      ],
      kunci: 1,
      hint: "Kalimat penutup yang baik merangkum tujuan atau manfaat dan tetap konsisten dengan isi proposal.",
      pembahasan: "<p>Opsi B merangkum dua harapan pada paragraf 3: sampah <b>berkurang</b> dan siswa <b>terbiasa memilah serta memahami nilai ekonomi sampah</b>.</p><p>Opsi lain bertentangan dengan isi teks (membakar sampah, menutup kantin, meniadakan petugas kebersihan yang justru dilibatkan).</p>"
    },

    // ---------- Teks B: Drama ----------
    {
      id: "idh-06", bab: IN, level: 1, tipe: "pg", stimulus: TB,
      soal: "Konflik utama antara Raka dan Salsa disebabkan oleh perbedaan pandangan tentang …",
      opsi: [
        "Pentingnya mengikuti seminar kesehatan",
        "Cara belajar menjelang TKA: begadang atau tidur cukup dan belajar secara dicicil",
        "Pilihan mata pelajaran pada TKA",
        "Peran keberuntungan dalam ujian",
        "Tempat belajar bersama yang paling nyaman"
      ],
      kunci: 1,
      hint: "Bandingkan rencana Raka di dialog pertama dengan tanggapan Salsa.",
      pembahasan: "<p>Raka ingin <b>begadang</b> setiap malam, sedangkan Salsa menyarankan <b>tidur cukup dan mencicil belajar</b>. Itulah inti perbedaan pandangan keduanya.</p><p>Soal keberuntungan adalah pandangan Bimo, bukan konflik Raka–Salsa.</p>"
    },
    {
      id: "idh-07", bab: EV, level: 2, tipe: "pg", stimulus: TB,
      soal: "Tokoh yang pandangannya paling mungkin menimbulkan antipati (tidak simpati) penonton karena meremehkan pentingnya persiapan adalah …",
      opsi: [
        "Raka, karena ingin belajar terlalu keras.",
        "Salsa, karena terlalu banyak memberi nasihat.",
        "Bimo, karena tidak belajar sama sekali dan menggantungkan hasil pada keberuntungan.",
        "Salsa, karena mengutip pendapat dokter.",
        "Raka, karena ingin mengerjakan soal yang paling susah."
      ],
      kunci: 2,
      hint: "Cari tokoh dengan sikap paling ekstrem ke arah \"tidak peduli persiapan\".",
      pembahasan: "<p>Bimo: \"Aku malah tidak belajar sama sekali … tergantung keberuntungan.\" → sikap paling ekstrem yang <b>meremehkan persiapan</b>.</p><p>Raka memang berlebihan, tetapi ia masih berusaha. Salsa menawarkan jalan tengah yang bijak.</p>"
    },
    {
      id: "idh-08", bab: EV, level: 2, tipe: "mcma", stimulus: TB,
      soal: "Berdasarkan isi drama, sikap yang PALING TEPAT dimiliki siswa menjelang ujian adalah … (pilih semua yang benar)",
      opsi: [
        "Mencicil belajar dengan jadwal yang teratur",
        "Tidur cukup agar daya ingat tetap optimal",
        "Begadang setiap malam agar semua materi masuk",
        "Berlatih mengerjakan soal secara rutin",
        "Menyerahkan hasil ujian sepenuhnya pada keberuntungan"
      ],
      kunci: [0, 1, 3],
      hint: "Pilih sikap yang sesuai dengan solusi yang ditawarkan Salsa di akhir drama.",
      pembahasan: "<p>Usulan Salsa: jadwal belajar (dua jam setiap sore) ✔, istirahat cukup ✔, latihan soal setiap hari ✔.</p><p>Begadang (Raka) dan mengandalkan keberuntungan (Bimo) adalah sikap yang dikritik dalam drama ✘.</p>"
    },
    {
      id: "idh-09", bab: IN, level: 3, tipe: "pg", stimulus: TB,
      soal: "Berdasarkan dialog terakhirnya, watak Raka dapat digambarkan sebagai …",
      opsi: [
        "Keras kepala dan sama sekali menolak saran temannya",
        "Mudah menyerah dan tidak mau belajar",
        "Bersemangat dan mau menerima saran, tetapi tetap mempertahankan sebagian pendapatnya",
        "Pemalu dan tidak berani berpendapat",
        "Sombong dan meremehkan teman-temannya"
      ],
      kunci: 2,
      hint: "Perhatikan petunjuk lakuan \"(terdiam sejenak)\", lalu ucapan \"Boleh juga. Tapi …\".",
      pembahasan: "<p>\"Boleh juga\" → Raka <b>menerima saran</b> Salsa. \"Tapi aku tetap mau mengerjakan latihan soal yang paling susah dulu\" → ia <b>tetap mempertahankan sebagian pendapatnya</b>. Sejak awal ia juga <b>bersemangat</b> belajar.</p>"
    },

    // ---------- Teks C: Puisi ----------
    {
      id: "idh-10", bab: EV, level: 3, tipe: "mcma", stimulus: TC,
      soal: "Penafsiran yang PALING TEPAT terhadap kritik sosial dalam puisi tersebut adalah … (pilih semua yang benar)",
      opsi: [
        "Penyair mengkritik alih fungsi sawah menjadi bangunan.",
        "Penyair mengingatkan bahwa kebutuhan pangan tetap bergantung pada sawah.",
        "Penyair memuji pembangunan gedung yang berlangsung cepat.",
        "Ayah dalam puisi tidak pernah memiliki sawah.",
        "Puisi mengandung ironi antara alasan \"zaman sudah berubah\" dan kenyataan bahwa nasi tetap berasal dari sawah."
      ],
      kunci: [0, 1, 4],
      hint: "Bandingkan bait pertama (dulu vs kini) dan dua larik terakhir yang diawali kata \"Tapi\".",
      pembahasan: "<p>• Sawah berganti \"beton\" → kritik alih fungsi lahan ✔<br>• \"nasi di piring kita, tetap datang dari sawah\" → pangan tetap butuh sawah ✔<br>• Nada puisi sedih (\"cerita usang\"), bukan memuji ✘<br>• \"Ayah menjual petak terakhir\" → ayah dulu punya sawah ✘<br>• Alasan \"zaman sudah berubah\" dibantah oleh kenyataan bahwa nasi tetap dari sawah → <b>ironi</b> ✔</p>"
    },
    {
      id: "idh-11", bab: IN, level: 2, tipe: "pg", stimulus: TC,
      soal: "Makna larik \"kini beton tumbuh menjulang\" adalah …",
      opsi: [
        "Tanaman di sawah tumbuh semakin tinggi.",
        "Bangunan-bangunan tinggi semakin banyak berdiri menggantikan sawah.",
        "Petani menanam padi jenis baru yang tinggi.",
        "Harga beton semakin mahal.",
        "Burung pipit membuat sarang di atas gedung."
      ],
      kunci: 1,
      hint: "Beton tidak benar-benar \"tumbuh\". Kata \"tumbuh\" di sini dipakai secara kiasan (personifikasi).",
      pembahasan: "<p>\"Beton\" melambangkan bangunan. \"Tumbuh menjulang\" (personifikasi) menggambarkan gedung-gedung tinggi yang terus bertambah, menggantikan padi yang dulu \"menguning\" di tempat yang sama.</p>"
    },
    {
      id: "idh-12", bab: EV, level: 2, tipe: "pg", stimulus: TC,
      soal: "Jika puisi tersebut dijadikan bahan kampanye, slogan yang PALING sesuai dengan pesannya adalah …",
      opsi: [
        "Bangun gedung setinggi-tingginya demi kemajuan kota!",
        "Lindungi lahan pertanian, lindungi masa depan pangan kita.",
        "Jual sawahmu sebelum harganya turun!",
        "Burung pipit adalah hama yang harus dibasmi.",
        "Zaman berubah, kita tidak perlu lagi makan nasi."
      ],
      kunci: 1,
      hint: "Pesan puisi: sawah makin hilang, padahal pangan kita tetap bergantung padanya.",
      pembahasan: "<p>Puisi mengkritik hilangnya sawah dan mengingatkan bahwa pangan bergantung padanya. Slogan yang sejalan: <b>melindungi lahan pertanian demi pangan</b>.</p>"
    },

    // ---------- Teks D: Eksplanasi ----------
    {
      id: "idh-13", bab: IN, level: 2, tipe: "pg", stimulus: TD,
      soal: "Kalimat yang PALING tepat untuk mengisi bagian (…) pada kalimat (1) adalah …",
      opsi: [
        "Burung adalah hewan yang tidak memiliki indra penglihatan yang baik.",
        "Migrasi burung merupakan salah satu fenomena alam yang paling menakjubkan.",
        "Semua burung di dunia hidup menetap di satu tempat sepanjang tahun.",
        "Musim dingin di belahan bumi selatan lebih panjang daripada di utara.",
        "Burung pipit adalah jenis burung yang paling cepat terbang."
      ],
      kunci: 1,
      hint: "Kalimat pertama biasanya memperkenalkan topik yang kemudian dijelaskan oleh kalimat (2) dan (3).",
      pembahasan: "<p>Kalimat (2)–(3) membahas burung yang terbang jauh dan kembali ke tempat yang sama, yaitu <b>migrasi</b>. Kalimat pembuka yang paling tepat memperkenalkan topik itu: \"Migrasi burung merupakan salah satu fenomena alam yang paling menakjubkan.\"</p><p>Opsi A dan C bertentangan dengan isi teks.</p>"
    },
    {
      id: "idh-14", bab: TU, level: 2, tipe: "pg", stimulus: TD,
      soal: "Kalimat yang menggunakan kata dengan makna selaras dengan kata <u>bernavigasi</u> pada kalimat (4) adalah …",
      opsi: [
        "Nelayan menggunakan kompas untuk menentukan arah perahunya di tengah laut.",
        "Pilot mengumumkan bahwa pesawat akan segera mendarat.",
        "Kapal itu bersandar di pelabuhan selama tiga hari.",
        "Petugas menunjukkan peta kota kepada wisatawan.",
        "Burung itu membuat sarang di dahan pohon."
      ],
      kunci: 0,
      hint: "Dalam teks, bernavigasi berarti mencari dan menentukan arah perjalanan. Kalimat mana yang memuat kegiatan serupa?",
      pembahasan: "<p>Bernavigasi = <b>menentukan arah/jalur perjalanan</b>. Opsi A (\"menentukan arah perahunya\") memiliki makna yang paling selaras.</p><p>Opsi D hanya menunjukkan peta kepada orang lain, bukan menentukan arah perjalanan sendiri.</p>"
    },
    {
      id: "idh-15", bab: IN, level: 2, tipe: "pg", stimulus: TD,
      soal: "Kata penghubung yang tepat untuk mengisi bagian (…) pada kalimat (7) adalah …",
      opsi: ["Bahkan ketika", "Karena", "Sehingga", "Setelah", "Agar"],
      kunci: 0,
      hint: "Kalimat (7) menunjukkan bahwa burung tetap mampu menentukan arah walaupun dalam kondisi sulit (tidak ada Matahari atau bintang).",
      pembahasan: "<p>Kalimat (5) menyebut petunjuk Matahari dan bintang. Kalimat (7) menekankan kondisi yang lebih sulit (langit berawan), tetapi burung <i>tetap</i> bisa menentukan arah → <b>Bahkan ketika</b> (penegasan + waktu).</p><p>\"Karena\" dan \"Agar\" membuat hubungan sebab/tujuan yang tidak logis.</p>"
    },
    {
      id: "idh-16", bab: TU, level: 1, tipe: "pg", stimulus: TD,
      soal: "Penggunaan istilah seperti <i>navigasi</i>, <i>protein</i>, dan <i>medan magnet</i> menunjukkan bahwa teks tersebut berkaitan dengan bidang …",
      opsi: [
        "Ekonomi dan perdagangan",
        "Ilmu pengetahuan alam (biologi dan fisika)",
        "Sejarah dan kebudayaan",
        "Hukum dan pemerintahan",
        "Seni dan sastra"
      ],
      kunci: 1,
      hint: "Kata \"protein\" sering muncul dalam pelajaran apa? Bagaimana dengan \"medan magnet\"?",
      pembahasan: "<p><i>Protein</i> adalah istilah biologi, sedangkan <i>medan magnet</i> adalah istilah fisika. Teks juga menjelaskan fenomena alam berdasarkan temuan ilmuwan → bidang <b>ilmu pengetahuan alam</b>.</p>"
    },

    // ---------- Teks E: Kalimat acak & kebahasaan ----------
    {
      id: "idh-17", bab: TU, level: 2, tipe: "pg", stimulus: TE,
      soal: "Jika kelima kalimat tersebut disusun menjadi paragraf yang padu, urutan yang tepat adalah …",
      opsi: ["2 – 3 – 1 – 4 – 5", "2 – 1 – 3 – 4 – 5", "3 – 2 – 1 – 4 – 5", "2 – 4 – 3 – 1 – 5", "1 – 2 – 3 – 4 – 5"],
      kunci: 0,
      hint: "Cari kalimat topik dan kata rujukan: \"Kegemaran itu\" merujuk ke kalimat mana? \"Di warung itu\" merujuk ke kalimat mana? \"Tidak hanya di warung\" muncul setelah warung dibahas.",
      pembahasan: "<p>(2) kalimat topik: teh digemari →<br>(3) \"<b>Kegemaran itu</b>\" merujuk ke (2) →<br>(1) \"<b>Di warung itu</b>\" merujuk ke warung di (3) →<br>(4) \"<b>Tidak hanya di warung</b>\" memperluas ke daerah lain →<br>(5) \"<b>Oleh karena itu</b>\" sebagai simpulan.</p><p>Urutan: <b>2 – 3 – 1 – 4 – 5</b>.</p>"
    },
    {
      id: "idh-18", bab: EV, level: 2, tipe: "pg", stimulus: TE,
      soal: "Kata berimbuhan yang bermakna kiasan dalam teks tersebut adalah …",
      opsi: [
        "<i>disajikan</i> pada kalimat (1)",
        "<i>digemari</i> pada kalimat (2)",
        "<i>menyediakan</i> pada kalimat (3)",
        "<i>mengolah</i> pada kalimat (4)",
        "<i>melekat</i> pada kalimat (5)"
      ],
      kunci: 4,
      hint: "Makna asli \"melekat\" adalah menempel secara fisik (seperti lem). Apakah teh benar-benar menempel pada \"keseharian\"?",
      pembahasan: "<p>\"Melekat\" bermakna asli <i>menempel secara fisik</i>. Dalam \"melekat dalam keseharian bangsa\", maknanya <b>kiasan</b>: sudah menjadi bagian yang tidak terpisahkan dari kebiasaan sehari-hari.</p><p>Kata lain dipakai dengan makna sebenarnya.</p>"
    },
    {
      id: "idh-19", bab: EV, level: 2, tipe: "pg",
      soal: "Kalimat yang memiliki pola sama (S–P–O–K) dengan kalimat <i>\"Ibu menyajikan teh manis di meja makan.\"</i> adalah …",
      opsi: [
        "Adik membaca buku cerita di perpustakaan.",
        "Teh poci berasal dari Tegal.",
        "Warung itu ramai pada malam hari.",
        "Ayah seorang petani teh.",
        "Para pedagang sudah berangkat ke pasar."
      ],
      kunci: 0,
      hint: "Objek (O) hanya muncul setelah predikat berupa kata kerja transitif (biasanya berawalan me- dan bisa dipasifkan).",
      pembahasan: "<p>Ibu (S) / menyajikan (P) / teh manis (O) / di meja makan (K).</p><p>A: Adik (S) / membaca (P) / buku cerita (O) / di perpustakaan (K) → <b>S–P–O–K</b> ✔.</p><p>B: S–P–K. C: S–P–K. D: S–P (predikat nomina). E: S–P–K (\"berangkat\" tidak memiliki objek).</p>"
    },
    {
      id: "idh-20", bab: IN, level: 2, tipe: "pg", stimulus: TE,
      soal: "Kalimat yang isinya SAMA dengan kalimat (5) adalah …",
      opsi: [
        "Jadi, teh hanya diminum oleh masyarakat di Sumatra Barat dan Tegal.",
        "Jadi, teh merupakan minuman yang lekat dengan kehidupan sehari-hari masyarakat Indonesia.",
        "Dengan demikian, masyarakat Indonesia lebih menyukai kopi daripada teh.",
        "Oleh sebab itu, semua warung wajib menjual teh poci.",
        "Jadi, teh berasal dari luar negeri dan baru dikenal di Indonesia."
      ],
      kunci: 1,
      hint: "Cari parafrasa: kata-katanya boleh berbeda, tetapi maknanya harus sama tanpa menambah atau mengurangi informasi.",
      pembahasan: "<p>Kalimat (5): teh adalah minuman yang <b>melekat dalam keseharian</b> bangsa Indonesia. Opsi B (\"lekat dengan kehidupan sehari-hari masyarakat Indonesia\") memiliki makna yang sama.</p><p>Opsi lain menambah, membatasi, atau mengubah informasi.</p>"
    }
  ]};
})();
