// Paket HOTS Bahasa Indonesia — gaya tryout TKA (teks dan soal dibuat baru).
(function () {
  var TU = "Pemahaman Tekstual", IN = "Pemahaman Inferensial", EV = "Evaluasi dan Apresiasi";

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
      pembahasan: "<h4>Strategi</h4><p>Proposal yang baik mengaitkan <b>usulan</b> dengan <b>data atau alasan</b> yang benar-benar mendukungnya. Untuk setiap pasangan, cek dua hal: (1) apakah usulan itu memang ada di teks? (2) apakah datanya berhubungan langsung dengan usulan?</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Masalah di kalimat 1–3 (25 kg sampah tidak dipilah, padahal bernilai jual) adalah alasan langsung usulan bank sampah di kalimat 4.</li><li><b>2</b> <i>Benar.</i> Pencatatan setoran di buku tabungan (kalimat 6) berkaitan langsung dengan saldo tabungan hasil penjualan (kalimat 7).</li><li><b>3</b> <i>Salah.</i> Mesin pencacah plastik <b>tidak pernah diusulkan</b> di teks. Data \"siswa terbiasa memilah\" juga tidak mendukung pembelian mesin.</li></ul><p class=\"tips\"><b>Tips:</b> pengecoh di soal pasangan sering berupa usulan yang terdengar masuk akal tetapi tidak ada di teks. Selalu cek keberadaannya dulu.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Bandingkan gagasan antarparagraf: ringkas isi setiap paragraf menjadi satu frasa, lalu cocokkan dengan opsi. Kedua bagian opsi (paragraf 1 <i>dan</i> paragraf 2) harus tepat.</p><h4>Bukti di teks</h4><ul><li>P1: data sampah, masalah tidak dipilah, usulan bank sampah → <b>latar belakang + usulan</b>.</li><li>P2: jadwal Jumat, cara menyetor dan mencatat, saldo, pihak yang terlibat → <b>mekanisme pelaksanaan + sasaran</b>.</li><li>P3: harapan atau manfaat.</li></ul><p>Opsi yang sesuai: <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Terbalik, dan manfaat justru ada di P3.</li><li><b>C</b> Cara menjual dan jenis sampah bukan inti kedua paragraf.</li><li><b>D</b> Harapan ada di P3, dan anggaran tidak dibahas sama sekali.</li><li><b>E</b> Peran guru dan petugas hanya disebut sekilas di kalimat 8.</li></ul><p class=\"tips\"><b>Tips:</b> struktur umum proposal: latar belakang → tujuan/usulan → mekanisme pelaksanaan → manfaat/harapan.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Argumen <b>logis</b> jika kesimpulannya mengikuti dari alasan tanpa melebih-lebihkan. Waspadai kata mutlak (<i>dipastikan, tidak akan … lagi, dilarang</i>) yang tidak didukung teks.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Logis.</i> Masalah (sampah bernilai dibuang) → solusi yang sesuai (bank sampah memanfaatkannya).</li><li><b>2</b> <i>Tidak logis.</i> Teks hanya <i>berharap</i> volume sampah <b>berkurang</b>. \"Dipastikan tidak menghasilkan sampah lagi\" adalah kesimpulan berlebihan.</li><li><b>3</b> <i>Logis.</i> Insentif (saldo tabungan) wajar mendorong perilaku memilah.</li><li><b>4</b> <i>Tidak logis.</i> Jadwal buka bank sampah tidak ada hubungannya dengan larangan membuang sampah di hari lain.</li></ul><p class=\"tips\"><b>Tips:</b> dua jenis kesalahan logika yang sering diuji: <b>generalisasi berlebihan</b> (pernyataan 2) dan <b>kesimpulan tidak nyambung</b> dengan alasannya (pernyataan 4).</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Hubungan antarkalimat ditandai konjungsi: <b>padahal</b> = pertentangan antara kenyataan dan seharusnya; <i>oleh karena itu</i> = akibat; <i>selain itu</i> = penambahan; <i>misalnya</i> = contoh.</p><h4>Bukti di teks</h4><p>(2) kenyataan: sampah dibuang tanpa dipilah. (3) \"<b>Padahal</b>, botol plastik dan kertas masih bernilai jual…\" → bertentangan dengan kenyataan di (2) → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> (3) tidak memberi contoh, tetapi menyanggah.</li><li><b>C</b> (7) adalah kelanjutan proses (6), bukan sebabnya. Sampah ditimbang dulu, baru hasilnya menjadi saldo.</li><li><b>D</b> (8) tentang pihak yang terlibat, bukan akibat dari saldo tabungan.</li><li><b>E</b> (10) diawali \"Selain itu\" dan menambah harapan baru, bukan mengulang.</li></ul><p class=\"tips\"><b>Tips:</b> cari konjungsi di awal kalimat yang disebut di opsi. \"Padahal\" hampir selalu berarti pertentangan.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Kalimat penutup yang baik <b>merangkum</b> gagasan utama atau harapan teks dan <b>tidak bertentangan</b> dengan isi sebelumnya.</p><h4>Bukti di teks</h4><p>Paragraf 3 berisi dua harapan: (9) sampah berkurang dan (10) siswa terbiasa memilah serta paham nilai ekonomi sampah. Opsi <b>B</b> merangkum keduanya dengan penanda simpulan \"Dengan demikian\".</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Mewajibkan membawa sampah dari rumah tidak pernah dibahas.</li><li><b>C</b> Membakar sampah bertentangan dengan semangat memilah dan menjual.</li><li><b>D</b> Menutup kantin bukan solusi yang diusulkan.</li><li><b>E</b> Petugas kebersihan justru dilibatkan (kalimat 8).</li></ul><p class=\"tips\"><b>Tips:</b> opsi penutup yang memperkenalkan ide baru atau ekstrem hampir pasti salah. Penutup merangkum, bukan menambah.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Konflik dalam drama = <b>perbedaan pandangan atau keinginan</b> antartokoh. Perhatikan tokoh mana yang ditanya, karena drama ini punya tiga tokoh dengan pandangan berbeda.</p><h4>Bukti di teks</h4><p>Raka: \"Aku mau <b>begadang</b> sampai jam tiga pagi…\" Salsa: \"Lebih baik <b>tidur cukup</b> dan belajarnya <b>dicicil</b>.\" Perbedaannya ada pada cara belajar → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Seminar hanya sumber kutipan Salsa.</li><li><b>C</b> Mata pelajaran tidak diperdebatkan.</li><li><b>D</b> Keberuntungan adalah pandangan <b>Bimo</b>, bukan inti konflik Raka–Salsa.</li><li><b>E</b> Tempat belajar tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> garis bawahi nama tokoh di soal. Pengecoh sering diambil dari dialog tokoh lain.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Tokoh yang menimbulkan <b>antipati</b> adalah tokoh yang sikapnya bertentangan dengan nilai yang ingin disampaikan cerita. Di sini nilainya adalah pentingnya persiapan.</p><h4>Bukti di teks</h4><p>Bimo: \"Aku malah <b>tidak belajar sama sekali</b>. Toh, hasilnya nanti juga tergantung <b>keberuntungan</b>.\" Ini sikap paling ekstrem yang meremehkan persiapan → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>/<b>E</b> Raka memang berlebihan, tetapi ia masih berusaha keras, bukan meremehkan persiapan.</li><li><b>B</b>/<b>D</b> Salsa memberi jalan tengah yang bijak dengan dasar pendapat ahli, sehingga ia justru tokoh yang disimpati.</li></ul><p class=\"tips\"><b>Tips:</b> soal menyebut kriterianya sendiri: \"meremehkan pentingnya persiapan\". Cocokkan kriteria itu dengan sikap tiap tokoh.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Amanat drama biasanya disampaikan lewat tokoh yang <b>bijak</b> (di sini Salsa), sedangkan sikap tokoh lain yang dikritik menjadi contoh yang tidak patut ditiru.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"jadwal belajar bersama … dua jam setiap sore\".</li><li><b>B</b> ✔ \"kurang tidur justru membuat daya ingat menurun\", ditambah \"istirahat cukup\".</li><li><b>C</b> ✘ Sikap Raka yang dikritik Salsa.</li><li><b>D</b> ✔ \"latihan soal setiap hari\".</li><li><b>E</b> ✘ Sikap Bimo yang disanggah: \"keberuntungan juga butuh persiapan\".</li></ul><p class=\"tips\"><b>Tips:</b> ketiga jawaban benar diambil langsung dari satu kalimat usulan Salsa. Kalimat usulan tokoh bijak sering menjadi sumber jawaban soal amanat.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Watak dari dialog: perhatikan kata penanda sikap. \"<b>Boleh juga</b>\" = menerima; \"<b>Tapi … tetap</b>\" = mempertahankan sebagian pendapat. Gabungkan dengan perilaku tokoh sejak awal.</p><h4>Bukti di teks</h4><p>Sejak awal Raka ingin belajar keras (bersemangat). \"(terdiam sejenak) …<b>Boleh juga</b>\" → mau menerima saran. \"<b>Tapi aku tetap</b> mau mengerjakan latihan soal yang paling susah dulu\" → mempertahankan sebagian pendapat → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Ia tidak menolak sepenuhnya; \"Boleh juga\" berarti menerima.</li><li><b>B</b> Ia justru ingin belajar keras.</li><li><b>D</b> Ia berani mengemukakan pendapatnya.</li><li><b>E</b> Tidak ada sikap meremehkan teman.</li></ul><p class=\"tips\"><b>Tips:</b> kata \"sama sekali\" di opsi A adalah sinyal klaim berlebihan. Cukup satu bukti penerimaan untuk menggugurkannya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p><b>Kritik sosial</b> dalam puisi = sindiran terhadap keadaan masyarakat. <b>Ironi</b> = pertentangan antara yang dikatakan atau diharapkan dan kenyataan. Tafsiran harus didukung larik puisi.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"Dulu di sini padi menguning … kini beton tumbuh menjulang\" → sawah berganti bangunan (alih fungsi lahan).</li><li><b>B</b> ✔ \"Tapi nasi di piring kita, tetap datang dari sawah\" → pangan tetap bergantung pada sawah.</li><li><b>C</b> ✘ Nadanya sedih (\"cerita usang\"), bukan memuji pembangunan.</li><li><b>D</b> ✘ \"Ayah menjual <b>petak terakhir</b>\" → ayah justru pernah punya sawah.</li><li><b>E</b> ✔ Alasan \"zaman sudah berubah\" dibantah kenyataan bahwa nasi tetap dari sawah. Inilah ironinya.</li></ul><p class=\"tips\"><b>Tips:</b> kata \"Tapi\" di bait terakhir puisi sering menjadi titik balik tempat kritik atau ironi disampaikan.</p>"
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
      pembahasan: "<h4>Konsep</h4><p><b>Personifikasi</b> = benda mati diberi sifat makhluk hidup. \"Beton\" (benda mati, lambang bangunan) dikatakan \"<b>tumbuh</b>\" seperti tanaman.</p><h4>Langkah</h4><p>\"Beton\" = gedung atau bangunan. \"Tumbuh menjulang\" = terus bertambah dan makin tinggi. Kontras dengan larik sebelumnya (\"padi menguning\"): di tempat yang sama, bangunan menggantikan sawah → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> \"Tumbuh\" di sini kiasan; yang tumbuh beton, bukan tanaman.</li><li><b>C</b> Tidak ada padi jenis baru; sawahnya justru hilang.</li><li><b>D</b> Harga tidak dibahas.</li><li><b>E</b> Burung pipit ada di masa \"dulu\", bukan di gedung.</li></ul><p class=\"tips\"><b>Tips:</b> penyair sengaja memakai kata \"tumbuh\" (biasanya untuk padi) untuk beton. Ini menyindir bahwa yang \"ditanam\" sekarang adalah bangunan.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Slogan kampanye yang sesuai harus <b>sejalan dengan pesan atau amanat</b> puisi. Pesannya: hilangnya sawah mengancam pangan, jadi sawah perlu dijaga.</p><h4>Bukti di teks</h4><p>Puisi mengkritik sawah yang berubah menjadi beton dan mengingatkan \"nasi … tetap datang dari sawah\". Slogan yang sejalan: \"Lindungi lahan pertanian, lindungi masa depan pangan kita\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Mendukung pembangunan gedung, berlawanan dengan pesan puisi.</li><li><b>C</b> Mengajak menjual sawah, berlawanan.</li><li><b>D</b> Burung pipit tidak dipandang sebagai hama di puisi.</li><li><b>E</b> Bertentangan dengan larik terakhir.</li></ul><p class=\"tips\"><b>Tips:</b> rumuskan amanat puisi dalam satu kalimat ajakan dulu, lalu cari slogan yang paling mirip dengannya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Kalimat pembuka (kalimat topik) harus <b>memperkenalkan topik</b> yang dijelaskan kalimat-kalimat berikutnya dan <b>tidak bertentangan</b> dengan isinya.</p><h4>Bukti di teks</h4><p>Kalimat (2)–(3) membahas burung yang terbang ribuan kilometer saat musim gugur lalu kembali ke tempat yang sama, yaitu <b>migrasi</b>. Pembuka yang memperkenalkan topik itu: \"Migrasi burung merupakan salah satu fenomena alam yang paling menakjubkan\" → <b>B</b>. Kata \"Uniknya\" di (3) juga cocok dengan kata \"menakjubkan\".</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bertentangan: burung memakai Matahari dan bintang (penglihatan baik).</li><li><b>C</b> Bertentangan: burung justru bermigrasi.</li><li><b>D</b> Membandingkan musim dingin tidak menjadi topik paragraf.</li><li><b>E</b> Burung pipit dan kecepatan terbang tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> kalimat rumpang di awal paragraf = kalimat topik. Pilih yang paling umum dan mencakup isi kalimat-kalimat setelahnya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Pahami makna kata dari konteks, lalu cari kalimat lain yang <b>maknanya sama</b>, walau kata yang dipakai berbeda.</p><h4>Bukti di teks</h4><p>\"burung memanfaatkan beberapa petunjuk untuk <b>bernavigasi</b>\" → bernavigasi = <b>menentukan arah atau jalur perjalanan</b>. Opsi A: nelayan \"menentukan arah perahunya\" dengan kompas → maknanya selaras.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Mendarat adalah akhir perjalanan, bukan menentukan arah.</li><li><b>C</b> Bersandar berarti berhenti di pelabuhan.</li><li><b>D</b> Menunjukkan peta kepada orang lain, bukan menentukan arah perjalanan sendiri. Jebakannya: peta berhubungan dengan navigasi, tetapi maknanya tidak sama.</li><li><b>E</b> Membuat sarang tidak ada hubungannya.</li></ul><p class=\"tips\"><b>Tips:</b> jangan terjebak kata yang hanya <i>berasosiasi</i> (peta, pilot, kapal). Cari kalimat yang melakukan <i>tindakan</i> yang sama.</p>"
    },
    {
      id: "idh-15", bab: IN, level: 2, tipe: "pg", stimulus: TD,
      soal: "Kata penghubung yang tepat untuk mengisi bagian (…) pada kalimat (7) adalah …",
      opsi: ["Bahkan ketika", "Karena", "Sehingga", "Setelah", "Agar"],
      kunci: 0,
      hint: "Kalimat (7) menunjukkan bahwa burung tetap mampu menentukan arah walaupun dalam kondisi sulit (tidak ada Matahari atau bintang).",
      pembahasan: "<h4>Strategi</h4><p>Konjungsi dipilih berdasarkan hubungan makna dengan kalimat sebelumnya. Di sini kalimat (7) menyebut kondisi yang <b>lebih sulit</b> (langit tertutup awan) tetapi burung <b>tetap</b> bisa. Itu hubungan <b>penegasan</b>.</p><h4>Bukti di teks</h4><p>(5): burung memakai Matahari dan bintang. (6): ada juga indra medan magnet. (7): \"…langit tertutup awan tebal, burung <b>tetap</b> dapat menentukan arah\". Kata \"tetap\" cocok dengan <b>Bahkan ketika</b> (penegasan + waktu) → <b>A</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> \"Karena langit berawan, burung tetap bisa…\" tidak logis. Awan bukan penyebab burung bisa menentukan arah.</li><li><b>C</b> \"Sehingga\" butuh sebab di depannya dan tidak bisa membuka kalimat seperti ini.</li><li><b>D</b> \"Setelah\" mengubah makna: tidak ada urutan waktu.</li><li><b>E</b> \"Agar\" (tujuan) tidak logis: langit berawan bukan tujuan.</li></ul><p class=\"tips\"><b>Tips:</b> masukkan setiap opsi ke kalimat lalu baca utuh. Kata \"tetap\" di kalimat adalah petunjuk untuk konjungsi penegasan atau konsesif.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Bidang ilmu sebuah teks dikenali dari <b>istilah khusus</b> (kosakata teknis) yang dipakainya.</p><h4>Bukti di teks</h4><p><b>Protein</b> = istilah biologi; <b>medan magnet</b> = istilah fisika; navigasi hewan dijelaskan berdasarkan temuan ilmuwan → <b>ilmu pengetahuan alam</b> → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tidak ada istilah ekonomi seperti harga, pasar, atau modal.</li><li><b>C</b> Tidak membahas masa lalu atau budaya.</li><li><b>D</b> Tidak ada istilah hukum.</li><li><b>E</b> Teks informatif ilmiah, bukan karya seni.</li></ul><p class=\"tips\"><b>Tips:</b> cukup kenali dua atau tiga istilah kunci, lalu tanyakan \"istilah ini biasanya dipelajari di pelajaran apa?\"</p>"
    },

    // ---------- Teks E: Kalimat acak & kebahasaan ----------
    {
      id: "idh-17", bab: TU, level: 2, tipe: "pg", stimulus: TE,
      soal: "Jika kelima kalimat tersebut disusun menjadi paragraf yang padu, urutan yang tepat adalah …",
      opsi: ["2 – 3 – 1 – 4 – 5", "2 – 1 – 3 – 4 – 5", "3 – 2 – 1 – 4 – 5", "2 – 4 – 3 – 1 – 5", "1 – 2 – 3 – 4 – 5"],
      kunci: 0,
      hint: "Cari kalimat topik dan kata rujukan: \"Kegemaran itu\" merujuk ke kalimat mana? \"Di warung itu\" merujuk ke kalimat mana? \"Tidak hanya di warung\" muncul setelah warung dibahas.",
      pembahasan: "<h4>Strategi</h4><p>Menyusun paragraf padu: cari <b>kalimat topik</b> (paling umum, tanpa kata rujukan), lalu ikuti <b>kata rujukan</b> (<i>itu, tersebut</i>) dan <b>konjungsi</b> (<i>tidak hanya, oleh karena itu</i>) untuk menyambung kalimat.</p><h4>Langkah</h4><ol><li>(2) kalimat topik: \"Minuman teh sangat digemari…\" (umum, tanpa rujukan).</li><li>(3) \"<b>Kegemaran itu</b>…\" merujuk ke \"digemari\" di (2).</li><li>(1) \"Di <b>warung itu</b>…\" merujuk ke \"warung makan\" di (3).</li><li>(4) \"<b>Tidak hanya di warung</b>…\" memperluas dari warung ke daerah.</li><li>(5) \"<b>Oleh karena itu</b>…\" menjadi simpulan.</li></ol><p>Urutan: 2 – 3 – 1 – 4 – 5 → <b>A</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> (1) \"warung itu\" muncul sebelum warung disebut di (3).</li><li><b>C</b> (3) \"Kegemaran itu\" muncul sebelum kegemaran disebut.</li><li><b>D</b> (4) \"Tidak hanya di warung\" muncul sebelum ada pembahasan warung.</li><li><b>E</b> Diawali (1), yang memakai kata rujukan \"itu\" tanpa acuan.</li></ul><p class=\"tips\"><b>Tips:</b> kalimat yang mengandung \"itu\" atau \"tersebut\" <b>tidak bisa</b> menjadi kalimat pertama, karena acuannya belum ada.</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Makna <b>kias</b> = makna yang bukan arti sebenarnya, biasanya memindahkan makna konkret ke hal abstrak. Uji dengan pertanyaan: apakah kata itu dipakai untuk hal yang bisa dilakukan atau disentuh secara fisik?</p><h4>Langkah</h4><p>\"Melekat\" arti aslinya menempel secara fisik (misalnya lem melekat di kertas). Dalam \"<b>melekat dalam keseharian bangsa</b>\", tidak ada yang menempel secara fisik. Maknanya menjadi bagian tak terpisahkan dari kebiasaan → <b>kias</b> → <b>E</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> disajikan: teh benar-benar dihidangkan (makna sebenarnya).</li><li><b>B</b> digemari: benar-benar disukai.</li><li><b>C</b> menyediakan: warung benar-benar menyediakan teh.</li><li><b>D</b> mengolah: daerah benar-benar mengolah teh.</li></ul><p class=\"tips\"><b>Tips:</b> kata yang aslinya fisik (melekat, tumbuh, membara, mencair) lalu dipakai untuk hal abstrak (kebiasaan, semangat, suasana) hampir pasti bermakna kias.</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Unsur kalimat: <b>S</b> (pelaku), <b>P</b> (tindakan atau keadaan), <b>O</b> (yang dikenai tindakan; hanya ada jika P berupa kata kerja transitif, biasanya berawalan me-), <b>K</b> (tempat, waktu, cara). Objek terletak langsung setelah P dan bisa menjadi subjek jika kalimat dipasifkan.</p><h4>Langkah</h4><p>Ibu (S) / menyajikan (P) / teh manis (O) / di meja makan (K). Opsi A: Adik (S) / membaca (P) / buku cerita (O) / di perpustakaan (K) → sama.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Teh poci (S) / berasal (P) / dari Tegal (K) → S–P–K. \"Berasal\" tidak punya objek.</li><li><b>C</b> Warung itu (S) / ramai (P, kata sifat) / pada malam hari (K) → S–P–K.</li><li><b>D</b> Ayah (S) / seorang petani teh (P, kata benda) → S–P.</li><li><b>E</b> Para pedagang (S) / sudah berangkat (P) / ke pasar (K) → S–P–K. \"Ke pasar\" adalah keterangan tempat, bukan objek.</li></ul><p class=\"tips\"><b>Tips:</b> uji objek dengan membuat kalimat pasif. \"Buku cerita dibaca oleh Adik\" bisa, jadi \"buku cerita\" adalah objek. \"Pasar diberangkati…\" tidak bisa, jadi \"ke pasar\" bukan objek.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Kalimat yang <b>isinya sama</b> = parafrase: kata boleh berbeda, tetapi informasinya tidak boleh ditambah, dikurangi, atau diubah.</p><h4>Bukti di teks</h4><p>(5): teh adalah minuman yang <b>melekat dalam keseharian bangsa Indonesia</b>. Opsi B: teh adalah minuman yang <b>lekat dengan kehidupan sehari-hari masyarakat Indonesia</b>. Maknanya sama (melekat = lekat, keseharian = kehidupan sehari-hari, bangsa = masyarakat).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Membatasi: teh \"hanya\" di dua daerah.</li><li><b>C</b> Mengubah: membandingkan dengan kopi.</li><li><b>D</b> Menambah kewajiban yang tidak ada di teks.</li><li><b>E</b> Menambah informasi asal-usul yang tidak ada di teks.</li></ul><p class=\"tips\"><b>Tips:</b> waspadai kata pembatas (<i>hanya</i>), pembanding (<i>lebih … daripada</i>), dan pengharusan (<i>wajib</i>). Kata-kata ini mengubah isi kalimat asli.</p>"
    }
  ]};
})();
