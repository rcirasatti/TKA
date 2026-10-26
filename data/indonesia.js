// Bank soal Bahasa Indonesia — soal grup berbasis teks, mengikuti kerangka asesmen TKA SMA (Pusmendik).
// "bab" = kompetensi: Pemahaman Tekstual → Pemahaman Inferensial → Evaluasi & Apresiasi.
// Teks diurutkan dari teks informatif pendek ke teks sastra dan argumentasi.
(function () {
  var TU = "Pemahaman Tekstual", IN = "Pemahaman Inferensial", EV = "Evaluasi & Apresiasi";

  var T1 = "<p><b>Teks 1</b></p>" +
    "<p>(1) Indonesia termasuk negara penghasil sampah makanan terbesar di dunia. (2) Laporan Program Lingkungan PBB (UNEP) tahun 2021 memperkirakan " +
    "setiap orang Indonesia membuang sekitar 77 kilogram makanan per tahun. (3) Sampah makanan tidak hanya merugikan secara ekonomi, tetapi juga " +
    "mencemari lingkungan. (4) Ketika membusuk di tempat pembuangan akhir, sisa makanan menghasilkan gas metana yang mempercepat pemanasan global. " +
    "(5) Oleh karena itu, setiap keluarga perlu membiasakan diri membeli dan memasak makanan secukupnya. (6) Sisa sayur dan buah pun dapat diolah " +
    "menjadi kompos untuk menyuburkan tanaman.</p>";

  var T2 = "<p><b>Teks 2</b></p>" +
    "<p><b>Banjir Rob Rendam Permukiman Pesisir</b></p>" +
    "<p>JAKARTA — Banjir rob kembali merendam permukiman di pesisir utara Jakarta pada Rabu (14/10) pagi. Air laut setinggi 30 hingga 50 sentimeter " +
    "masuk ke rumah warga di Kelurahan Muara Baru, Penjaringan. Menurut petugas Badan Penanggulangan Bencana Daerah (BPBD), banjir terjadi karena " +
    "air laut sedang pasang maksimum bersamaan dengan fase bulan purnama.</p>" +
    "<p>Sebanyak 120 kepala keluarga terdampak, tetapi belum ada warga yang mengungsi. Petugas gabungan menyiagakan pompa air dan perahu karet. " +
    "\"Warga kami imbau menyimpan barang berharga di tempat yang tinggi dan terus memantau informasi cuaca,\" kata seorang petugas BPBD.</p>" +
    "<p>Banjir rob diperkirakan masih akan terjadi hingga tiga hari ke depan.</p>";

  var T3 = "<p><b>Teks 3</b></p>" +
    "<p>Perpustakaan Desa Sukamaju mencatat jumlah pengunjung selama empat bulan terakhir sebagai berikut.</p>" +
    "<table><tr><th>Bulan</th><th>Anak-anak</th><th>Remaja</th><th>Dewasa</th></tr>" +
    "<tr><td>Juni</td><td>120</td><td>45</td><td>30</td></tr>" +
    "<tr><td>Juli</td><td>150</td><td>40</td><td>35</td></tr>" +
    "<tr><td>Agustus</td><td>210</td><td>38</td><td>32</td></tr>" +
    "<tr><td>September</td><td>260</td><td>35</td><td>40</td></tr></table>" +
    "<p>Mulai bulan Agustus, perpustakaan mengadakan kegiatan mendongeng setiap Sabtu sore. Kepala perpustakaan kemudian menyimpulkan, " +
    "<i>\"Kegiatan mendongeng berhasil meningkatkan minat baca anak-anak di desa kami.\"</i></p>";

  var T4 = "<p><b>Teks 4</b></p>" +
    "<p>(1) Pada hari senin, siswa kelas XII mengikuti kegiatan bakti sosial di panti asuhan. (2) Mereka membawa berbagai macam-macam bantuan, " +
    "seperti buku, pakaian, dan sembako. (3) Kegiatan itu bertujuan menumbuhkan rasa kepedulian siswa terhadap sesama. (4) Para siswa-siswa " +
    "tampak antusias saat bermain bersama anak-anak panti. (5) Kepala sekolah berharap kegiatan seperti ini dapat dilaksanakan secara rutin.</p>";

  var T5 = "<p><b>Teks 5</b></p>" +
    "<p>Hujan belum juga reda ketika Bu Ratmi menutup warung kecilnya. Lampu jalan di ujung gang berkedip-kedip, dan bau tanah basah memenuhi udara. " +
    "Di bangku kayu dekat pintu, Dimas, anaknya yang duduk di kelas XII, masih menatap layar ponsel yang retak.</p>" +
    "<p>\"Bu, pendaftaran kuliah ditutup minggu depan,\" katanya pelan. \"Uang pendaftarannya dua ratus ribu.\"</p>" +
    "<p>Bu Ratmi terdiam. Ia melirik kaleng biskuit tempat ia menyimpan uang hasil berjualan. Isinya tidak sampai separuh dari jumlah itu. " +
    "Besok ia juga harus membayar utang beras ke toko langganannya.</p>" +
    "<p>\"Kamu belajar saja yang rajin,\" ujarnya akhirnya sambil tersenyum. \"Soal uang, biar Ibu yang pikirkan.\"</p>" +
    "<p>Malam itu, setelah Dimas tertidur, Bu Ratmi membuka lemari dan mengeluarkan sebuah kotak kecil berisi cincin emas peninggalan almarhum suaminya. " +
    "Lama ia menggenggam cincin itu tanpa berkata apa-apa.</p>";

  var T6 = "<p><b>Teks 6</b></p>" +
    "<p><b>Ibu di Ujung Subuh</b></p>" +
    "<p>Sebelum azan membelah sunyi,<br>tanganmu sudah akrab dengan api,<br>menanak nasi, menanak doa,<br>agar perut kami tak pernah hampa.</p>" +
    "<p>Punggungmu kian melengkung,<br>seperti padi yang tunduk di ujung;<br>tetapi senyummu tetap pagi,<br>tak pernah lelah, tak pernah pergi.</p>" +
    "<p>Kini aku jauh di kota,<br>mengejar mimpi yang kau titipkan di dada;<br>setiap subuh aku terjaga,<br>menyebut namamu dalam doa.</p>";

  var T7 = "<p><b>Teks 7</b></p>" +
    "<p><i>(Di ruang OSIS. Rina, ketua panitia pentas seni, sedang menyusun daftar seksi. Bayu masuk dengan wajah kesal.)</i></p>" +
    "<p><b>Bayu</b>: Rin, kenapa namaku dimasukkan ke seksi kebersihan? Aku kan maunya di seksi dokumentasi!<br>" +
    "<b>Rina</b>: <i>(tenang)</i> Bay, seksi dokumentasi sudah penuh. Lagi pula, kamu kemarin tidak datang rapat.<br>" +
    "<b>Bayu</b>: Aku ada latihan futsal! Masa karena satu rapat aku langsung dibuang ke kebersihan?<br>" +
    "<b>Rina</b>: Bukan dibuang. Seksi kebersihan justru penting. Kalau tempatnya kotor, acaranya bisa gagal. <i>(menyodorkan kertas)</i> " +
    "Ini jadwal rapat besok. Kalau kamu mau, kamu boleh datang dan mengusulkan pindah seksi.<br>" +
    "<b>Bayu</b>: <i>(terdiam sejenak, lalu mengambil kertas itu)</i> …Ya sudah. Besok aku datang.</p>";

  var T8 = "<p><b>Teks 8</b></p>" +
    "<p>(1) Belakangan ini, banyak sekolah mewajibkan siswa membaca buku nonpelajaran selama 15 menit sebelum jam pelajaran dimulai. " +
    "(2) Menurut saya, kebijakan ini sangat bermanfaat dan harus dilanjutkan. (3) Kebiasaan membaca dapat meningkatkan kemampuan berpikir kritis. " +
    "(4) Hal ini terlihat dari sepupu saya yang rajin membaca novel dan selalu mendapat juara kelas. (5) Selain itu, membaca 15 menit setiap hari " +
    "tidak memberatkan siswa karena waktunya singkat. (6) Oleh karena itu, semua sekolah di Indonesia sebaiknya menerapkan kebijakan ini.</p>";

  var T9 = "<p><b>Teks 9</b></p>" +
    "<p>Sebermula maka tersebutlah perkataan seorang raja di negeri Antah Berantah yang amat adil lagi bijaksana. Adapun baginda itu sangat kasih " +
    "akan rakyatnya. Pada suatu hari, datanglah seorang petani miskin menghadap baginda seraya berdatang sembah, \"Ampun, Tuanku Syah Alam, " +
    "sawah patik telah dirampas oleh seorang hulubalang.\"</p>" +
    "<p>Maka baginda pun murka, lalu menitahkan hulubalang itu dihadapkan ke balairung. Setelah diperiksa, nyatalah hulubalang itu bersalah. " +
    "Maka sawah itu pun dikembalikan kepada petani, dan hulubalang itu dihukum menurut adat negeri. Sejak itu, tiadalah lagi orang besar " +
    "yang berani berbuat aniaya kepada rakyat kecil.</p>";

  window.BANK_SOAL = window.BANK_SOAL || {};
  window.BANK_SOAL.indonesia = { soal: [

    // ---------- Teks 1: Eksposisi ----------
    {
      id: "ind-01", bab: IN, level: 1, tipe: "pg", stimulus: T1,
      soal: "Gagasan utama paragraf tersebut adalah …",
      opsi: [
        "Laporan UNEP tahun 2021 tentang sampah makanan",
        "Sampah makanan di Indonesia sangat banyak dan berdampak buruk sehingga perlu dikurangi",
        "Cara membuat kompos dari sisa sayur dan buah",
        "Gas metana mempercepat pemanasan global",
        "Setiap keluarga harus memasak makanan sendiri"
      ],
      kunci: 1,
      hint: "Gagasan utama mencakup seluruh isi paragraf, bukan hanya satu detail. Kalimat (2), (4), dan (6) adalah penjelas.",
      pembahasan: "<p>Paragraf membahas: banyaknya sampah makanan (1–2) → dampaknya (3–4) → ajakan menguranginya (5–6). Gagasan yang mencakup semuanya: <b>sampah makanan sangat banyak, berdampak buruk, dan perlu dikurangi</b>.</p><p>Opsi A, C, dan D hanya gagasan penjelas.</p>"
    },
    {
      id: "ind-02", bab: TU, level: 1, tipe: "mcma", stimulus: T1,
      soal: "Kata berikut yang merupakan kata serapan dari bahasa asing adalah … (pilih semua yang benar)",
      opsi: ["ekonomi", "metana", "kompos", "makanan", "membusuk"],
      kunci: [0, 1, 2],
      hint: "Kata serapan berasal dari bahasa lain dan disesuaikan ejaannya. Coba ingat padanannya dalam bahasa Inggris.",
      pembahasan: "<p>• <b>ekonomi</b> ← <i>economy</i> ✔<br>• <b>metana</b> ← <i>methane</i> ✔<br>• <b>kompos</b> ← <i>compost</i> ✔<br>• makanan (makan + -an) dan membusuk (me- + busuk) adalah kata asli bahasa Indonesia.</p>"
    },
    {
      id: "ind-03", bab: IN, level: 2, tipe: "pg", stimulus: T1,
      soal: "Hubungan makna kalimat (5) dengan kalimat-kalimat sebelumnya adalah …",
      opsi: ["Pertentangan", "Penambahan", "Sebab-akibat", "Perbandingan", "Urutan waktu"],
      kunci: 2,
      hint: "Perhatikan konjungsi di awal kalimat (5): \"Oleh karena itu\".",
      pembahasan: "<p>Kalimat (3)–(4) menjelaskan dampak buruk sampah makanan (sebab). Kalimat (5) yang diawali \"<b>Oleh karena itu</b>\" berisi tindakan yang perlu dilakukan sebagai akibatnya → hubungan <b>sebab-akibat</b>.</p>"
    },

    // ---------- Teks 2: Berita ----------
    {
      id: "ind-04", bab: TU, level: 1, tipe: "pg", stimulus: T2,
      soal: "Menurut petugas BPBD, penyebab banjir rob tersebut adalah …",
      opsi: [
        "Hujan deras sepanjang malam",
        "Tanggul laut yang jebol",
        "Air laut pasang maksimum bersamaan dengan fase bulan purnama",
        "Saluran air yang tersumbat sampah",
        "Penurunan permukaan tanah"
      ],
      kunci: 2,
      hint: "Cari kalimat yang memuat kata \"karena\" di paragraf pertama.",
      pembahasan: "<p>\"banjir terjadi <b>karena</b> air laut sedang pasang maksimum bersamaan dengan fase bulan purnama.\"</p><p>Opsi lain mungkin menjadi penyebab banjir di dunia nyata, tetapi tidak disebutkan dalam teks.</p>"
    },
    {
      id: "ind-05", bab: TU, level: 2, tipe: "pg", stimulus: T2,
      soal: "Kerangka isi berita tersebut yang tepat adalah …",
      opsi: [
        "Penyebab → peristiwa → perkiraan → dampak → penanganan",
        "Peristiwa dan penyebab → dampak dan penanganan → perkiraan ke depan",
        "Dampak → penyebab → peristiwa → penanganan",
        "Imbauan → peristiwa → dampak → penyebab",
        "Peristiwa → perkiraan ke depan → penyebab → dampak"
      ],
      kunci: 1,
      hint: "Ringkas isi setiap paragraf menjadi satu atau dua kata, lalu urutkan.",
      pembahasan: "<p>Paragraf 1: <b>peristiwa</b> (kapan, di mana, setinggi apa) dan <b>penyebabnya</b>.<br>Paragraf 2: <b>dampak</b> (120 KK) dan <b>penanganan</b> (pompa, perahu, imbauan).<br>Paragraf 3: <b>perkiraan</b> tiga hari ke depan.</p>"
    },
    {
      id: "ind-06", bab: EV, level: 3, tipe: "kategori", stimulus: T2,
      soal: "Tentukan benar atau salah penilaian terhadap informasi dalam berita tersebut!",
      pernyataan: [
        "Berita sudah menjelaskan tempat dan waktu kejadian.",
        "Berita menyebutkan bahwa 120 kepala keluarga telah mengungsi.",
        "Kutipan petugas BPBD berisi imbauan kepada warga.",
        "Berita sudah menjelaskan secara lengkap upaya jangka panjang pemerintah untuk mencegah banjir rob."
      ],
      kunci: [true, false, true, false],
      hint: "Bedakan kata \"terdampak\" dan \"mengungsi\". Untuk nomor 4, apakah ada informasi tentang tanggul, relokasi, atau program jangka panjang lain?",
      pembahasan: "<p>1. Tempat (Muara Baru, Penjaringan) dan waktu (Rabu, 14/10, pagi) tercantum ✔.</p><p>2. 120 KK <b>terdampak</b>, dan \"belum ada warga yang mengungsi\" → Salah.</p><p>3. \"Warga kami <b>imbau</b> …\" ✔.</p><p>4. Penanganan yang disebut hanya penanganan darurat (pompa dan perahu karet); upaya jangka panjang tidak dibahas → informasi <b>belum lengkap</b> → Salah.</p>"
    },

    // ---------- Teks 3: Laporan data ----------
    {
      id: "ind-07", bab: IN, level: 2, tipe: "pg", stimulus: T3,
      soal: "Simpulan yang paling tepat berdasarkan tabel tersebut adalah …",
      opsi: [
        "Jumlah pengunjung semua kelompok usia terus meningkat.",
        "Pengunjung anak-anak terus meningkat, sedangkan pengunjung remaja terus menurun.",
        "Pengunjung dewasa selalu lebih banyak daripada pengunjung remaja.",
        "Pengunjung remaja meningkat setelah ada kegiatan mendongeng.",
        "Jumlah pengunjung paling sedikit terjadi pada bulan September."
      ],
      kunci: 1,
      hint: "Amati tren setiap kolom dari Juni ke September, satu per satu.",
      pembahasan: "<p>Anak-anak: 120 → 150 → 210 → 260 (<b>terus naik</b>). Remaja: 45 → 40 → 38 → 35 (<b>terus turun</b>). Dewasa naik-turun (30 → 35 → 32 → 40).</p><p>Opsi C salah karena remaja (45) lebih banyak daripada dewasa (30) pada bulan Juni.</p>"
    },
    {
      id: "ind-08", bab: EV, level: 3, tipe: "mcma", stimulus: T3,
      soal: "Pernyataan yang sesuai dengan data dalam teks adalah … (pilih semua yang benar)",
      opsi: [
        "Total pengunjung pada bulan Juni adalah 195 orang.",
        "Pengunjung dewasa selalu meningkat setiap bulan.",
        "Kenaikan pengunjung anak-anak paling besar terjadi dari Juli ke Agustus.",
        "Kegiatan mendongeng pasti menjadi satu-satunya penyebab naiknya pengunjung anak-anak.",
        "Pengunjung remaja pada bulan September adalah yang paling sedikit selama empat bulan itu."
      ],
      kunci: [0, 2, 4],
      hint: "Hitung selisih tiap bulan untuk kolom anak-anak. Waspadai kata mutlak seperti \"selalu\", \"pasti\", dan \"satu-satunya\".",
      pembahasan: "<p>• Juni: 120 + 45 + 30 = 195 ✔<br>• Dewasa turun dari 35 ke 32 pada Agustus ✘<br>• Kenaikan anak-anak: +30, <b>+60</b>, +50 → terbesar Juli–Agustus ✔<br>• Data tidak cukup untuk menyatakan \"pasti satu-satunya penyebab\"; kenaikan sudah terjadi sejak Juli, sebelum ada kegiatan mendongeng ✘<br>• Remaja September = 35, terkecil ✔</p>"
    },
    {
      id: "ind-09", bab: EV, level: 3, tipe: "pg", stimulus: T3,
      soal: "Data tambahan yang paling diperlukan untuk membuktikan simpulan kepala perpustakaan adalah …",
      opsi: [
        "Jumlah pengunjung dewasa pada tahun lalu",
        "Jumlah buku yang dipinjam atau dibaca anak-anak sebelum dan sesudah kegiatan mendongeng",
        "Daftar nama pendongeng setiap Sabtu",
        "Jumlah rak buku di perpustakaan",
        "Jam buka perpustakaan setiap hari"
      ],
      kunci: 1,
      hint: "Simpulannya tentang \"minat baca\", bukan sekadar \"jumlah kunjungan\". Anak bisa datang hanya untuk mendengar dongeng tanpa membaca.",
      pembahasan: "<p>Kenaikan jumlah kunjungan belum tentu berarti minat baca meningkat; anak-anak mungkin datang hanya untuk mendengarkan dongeng.</p><p>Bukti yang langsung berhubungan dengan minat baca adalah <b>jumlah buku yang dipinjam atau dibaca anak-anak sebelum dan sesudah kegiatan</b>. Opsi lain tidak relevan dengan simpulan tersebut.</p>"
    },

    // ---------- Teks 4: Kebahasaan ----------
    {
      id: "ind-10", bab: EV, level: 1, tipe: "pg", stimulus: T4,
      soal: "Perbaikan penulisan kalimat (1) yang tepat adalah …",
      opsi: [
        "Pada Hari Senin, siswa kelas XII mengikuti kegiatan bakti sosial di panti asuhan.",
        "Pada hari Senin, siswa kelas XII mengikuti kegiatan bakti sosial di panti asuhan.",
        "Pada hari senin, Siswa kelas XII mengikuti kegiatan bakti sosial di Panti Asuhan.",
        "Pada hari Senin siswa Kelas XII mengikuti kegiatan Bakti Sosial di panti asuhan.",
        "Pada Hari senin, siswa kelas XII mengikuti kegiatan bakti sosial di panti asuhan."
      ],
      kunci: 1,
      hint: "Menurut EYD, nama hari, bulan, dan hari raya diawali huruf kapital, tetapi kata \"hari\" sebelumnya tidak.",
      pembahasan: "<p>Nama hari ditulis dengan huruf kapital: <b>Senin</b>. Kata \"hari\" tetap huruf kecil. \"Siswa\", \"kelas\", \"bakti sosial\", dan \"panti asuhan\" bukan nama diri sehingga ditulis huruf kecil.</p>"
    },
    {
      id: "ind-11", bab: EV, level: 2, tipe: "mcma", stimulus: T4,
      soal: "Kalimat yang tidak efektif karena pemborosan kata (pleonasme) adalah … (pilih semua yang benar)",
      opsi: ["Kalimat (1)", "Kalimat (2)", "Kalimat (3)", "Kalimat (4)", "Kalimat (5)"],
      kunci: [1, 3],
      hint: "Cari kata yang maknanya diulang dua kali, misalnya penanda jamak yang digunakan bersamaan dengan bentuk ulang.",
      pembahasan: "<p>• Kalimat (2): \"<b>berbagai macam-macam</b>\" → \"berbagai\" dan \"macam-macam\" sama-sama bermakna banyak jenis. Cukup \"berbagai bantuan\" atau \"bermacam-macam bantuan\" ✔<br>• Kalimat (4): \"<b>Para siswa-siswa</b>\" → \"para\" sudah menandakan jamak. Cukup \"Para siswa\" ✔<br>• Kalimat (1) salah ejaan (huruf kapital), bukan pemborosan kata. Kalimat (3) dan (5) sudah efektif.</p>"
    },
    {
      id: "ind-12", bab: EV, level: 2, tipe: "pg", stimulus: T4,
      soal: "Perbaikan kalimat (4) yang tepat adalah …",
      opsi: [
        "Para siswa-siswi tampak antusias saat bermain bersama anak-anak panti.",
        "Para siswa tampak antusias saat bermain bersama anak-anak panti.",
        "Siswa-siswa para tampak antusias saat bermain bersama anak panti.",
        "Para-para siswa tampak antusias saat bermain bersama anak-anak panti.",
        "Para siswa-siswa tampak sangat antusias sekali saat bermain bersama anak-anak panti."
      ],
      kunci: 1,
      hint: "Gunakan hanya satu penanda jamak: \"para\" ATAU bentuk ulang, tidak keduanya.",
      pembahasan: "<p>\"Para\" sudah menyatakan jamak, sehingga kata \"siswa\" tidak perlu diulang → <b>Para siswa tampak antusias …</b></p><p>Opsi A tetap pleonasme (para + bentuk ulang), dan opsi E menambah pleonasme baru (\"sangat … sekali\").</p>"
    },
    {
      id: "ind-13", bab: EV, level: 2, tipe: "kategori",
      soal: "Tentukan benar atau salah pernyataan tentang kata baku berikut sesuai KBBI!",
      pernyataan: [
        "Kata <b>analisis</b> merupakan kata baku.",
        "Kata <b>praktek</b> merupakan kata baku.",
        "Kata <b>apotek</b> merupakan kata baku.",
        "Kata <b>resiko</b> merupakan kata baku."
      ],
      kunci: [true, false, true, false],
      hint: "Beberapa kata yang sering salah: praktek/praktik, resiko/risiko, apotik/apotek, analisa/analisis.",
      pembahasan: "<p>1. <b>analisis</b> baku (bukan \"analisa\") ✔.<br>2. Yang baku <b>praktik</b>, bukan \"praktek\" → Salah.<br>3. <b>apotek</b> baku (bukan \"apotik\") ✔.<br>4. Yang baku <b>risiko</b>, bukan \"resiko\" → Salah.</p>"
    },

    // ---------- Teks 5: Cerpen ----------
    {
      id: "ind-14", bab: TU, level: 1, tipe: "pg", stimulus: T5,
      soal: "Latar waktu dan suasana pada awal cerita tersebut adalah …",
      opsi: [
        "Pagi hari, suasana ceria",
        "Siang hari, suasana tegang",
        "Malam hari saat hujan, suasana muram",
        "Sore hari, suasana meriah",
        "Malam hari, suasana menakutkan"
      ],
      kunci: 2,
      hint: "Cari kosakata penanda latar: \"hujan belum juga reda\", \"menutup warung\", \"lampu jalan berkedip-kedip\", \"setelah Dimas tertidur\".",
      pembahasan: "<p>Penanda waktu: warung ditutup, lampu jalan menyala, \"Malam itu\" → <b>malam hari</b> saat hujan.</p><p>Penanda suasana: hujan tak reda, lampu berkedip, ponsel retak, kebingungan soal uang → <b>muram/sendu</b>. Tidak ada unsur yang menakutkan.</p>"
    },
    {
      id: "ind-15", bab: IN, level: 2, tipe: "pg", stimulus: T5,
      soal: "Konflik utama dalam kutipan cerpen tersebut adalah …",
      opsi: [
        "Dimas bertengkar dengan ibunya karena ponselnya rusak.",
        "Bu Ratmi kesulitan membiayai pendaftaran kuliah Dimas.",
        "Warung Bu Ratmi tutup karena hujan deras.",
        "Bu Ratmi berselisih dengan pemilik toko beras.",
        "Dimas tidak ingin melanjutkan kuliah."
      ],
      kunci: 1,
      hint: "Apa masalah yang membuat Bu Ratmi \"terdiam\" dan kemudian membuka lemari pada malam hari?",
      pembahasan: "<p>Dimas butuh dua ratus ribu untuk pendaftaran kuliah, sedangkan uang di kaleng \"tidak sampai separuh\" dan masih ada utang beras → konflik: <b>kesulitan biaya pendaftaran kuliah</b>.</p><p>Tidak ada pertengkaran dalam cerita; Dimas justru berbicara pelan.</p>"
    },
    {
      id: "ind-16", bab: IN, level: 3, tipe: "pg", stimulus: T5,
      soal: "Kelanjutan cerita yang paling mungkin adalah …",
      opsi: [
        "Bu Ratmi meminta Dimas berhenti sekolah.",
        "Bu Ratmi menjual atau menggadaikan cincin peninggalan suaminya untuk biaya pendaftaran Dimas.",
        "Bu Ratmi menutup warungnya untuk selamanya.",
        "Dimas membatalkan pendaftaran kuliah.",
        "Bu Ratmi memberikan cincin itu kepada pemilik toko beras."
      ],
      kunci: 1,
      hint: "Hubungkan janji Bu Ratmi (\"Soal uang, biar Ibu yang pikirkan\") dengan benda yang ia keluarkan dari lemari pada malam hari.",
      pembahasan: "<p>Bu Ratmi berjanji akan memikirkan soal uang, lalu diam-diam mengeluarkan <b>cincin emas</b> dan menggenggamnya lama (tanda berat hati). Kelanjutan yang paling logis: ia akan <b>menjual atau menggadaikan cincin</b> itu untuk biaya kuliah Dimas.</p>"
    },
    {
      id: "ind-17", bab: EV, level: 3, tipe: "kategori", stimulus: T5,
      soal: "Tentukan benar atau salah penilaian berikut terhadap kutipan cerpen tersebut!",
      pernyataan: [
        "Bu Ratmi digambarkan sebagai ibu yang rela berkorban demi pendidikan anaknya.",
        "Bu Ratmi menyembunyikan kesulitannya agar Dimas tidak khawatir.",
        "Dimas digambarkan sebagai anak yang memaksa ibunya dengan kasar.",
        "Kalimat \"Lama ia menggenggam cincin itu tanpa berkata apa-apa\" menggambarkan perasaan berat Bu Ratmi."
      ],
      kunci: [true, true, false, true],
      hint: "Perhatikan cara Dimas berbicara (\"katanya pelan\") dan reaksi Bu Ratmi di depan anaknya (\"sambil tersenyum\").",
      pembahasan: "<p>1. Rela melepas cincin peninggalan suaminya → <b>rela berkorban</b> ✔.</p><p>2. Ia tersenyum dan berkata \"biar Ibu yang pikirkan\", padahal uangnya tidak cukup → menyembunyikan kesulitan ✔.</p><p>3. Dimas berbicara \"<b>pelan</b>\", tidak memaksa → Salah.</p><p>4. Menggenggam lama tanpa kata menunjukkan kebimbangan dan kesedihan karena cincin itu kenangan suaminya ✔.</p>"
    },

    // ---------- Teks 6: Puisi ----------
    {
      id: "ind-18", bab: IN, level: 2, tipe: "pg", stimulus: T6,
      soal: "Makna larik \"menanak nasi, menanak doa\" adalah …",
      opsi: [
        "Ibu memasak nasi sambil bernyanyi.",
        "Ibu memasak untuk keluarga sambil mendoakan anak-anaknya.",
        "Ibu hanya berdoa dan tidak sempat memasak.",
        "Ibu menjual nasi untuk membeli kebutuhan ibadah.",
        "Ibu memasak nasi dalam jumlah yang sangat banyak."
      ],
      kunci: 1,
      hint: "\"Menanak doa\" tidak bisa dimaknai secara harfiah. Kata \"menanak\" dipakai ulang untuk menunjukkan dua hal yang dilakukan bersamaan.",
      pembahasan: "<p>\"Menanak nasi\" bermakna harfiah (memasak). \"Menanak doa\" bermakna kias: ibu dengan tekun <b>mendoakan</b> anak-anaknya. Jadi, ibu memasak untuk keluarga sekaligus mendoakan mereka.</p>"
    },
    {
      id: "ind-19", bab: IN, level: 2, tipe: "pg", stimulus: T6,
      soal: "Larik \"Punggungmu kian melengkung, / seperti padi yang tunduk di ujung\" menggambarkan …",
      opsi: [
        "Ibu yang sedang menanam padi di sawah",
        "Ibu yang semakin tua dan bungkuk setelah lama bekerja keras",
        "Ibu yang sedang sakit punggung",
        "Ibu yang marah kepada anaknya",
        "Ibu yang pandai menari"
      ],
      kunci: 1,
      hint: "Ini majas perumpamaan (ditandai kata \"seperti\"). Padi yang tunduk adalah padi yang sudah tua dan berisi.",
      pembahasan: "<p>Kata <b>seperti</b> menandai majas perumpamaan (simile). Punggung yang \"kian melengkung\" disamakan dengan padi tua yang merunduk → ibu yang <b>semakin tua dan bungkuk</b> karena bertahun-tahun bekerja keras.</p><p>Padi yang merunduk juga sering dimaknai sebagai simbol kerendahan hati.</p>"
    },
    {
      id: "ind-20", bab: EV, level: 3, tipe: "kategori", stimulus: T6,
      soal: "Tentukan benar atau salah penilaian berikut terhadap puisi tersebut!",
      pernyataan: [
        "Suasana yang paling menonjol dalam puisi adalah haru dan rindu.",
        "Bait ketiga menunjukkan bahwa aku lirik telah melupakan ibunya.",
        "Puisi tersebut menggambarkan kasih sayang dan pengorbanan seorang ibu.",
        "Puisi tersebut sama sekali tidak menggunakan rima."
      ],
      kunci: [true, false, true, false],
      hint: "Untuk nomor 4, perhatikan bunyi akhir setiap larik: sunyi–api, doa–hampa, melengkung–ujung, pagi–pergi.",
      pembahasan: "<p>1. Ibu yang bekerja sebelum subuh dan anak yang jauh dan mendoakannya → <b>haru dan rindu</b> ✔.</p><p>2. \"setiap subuh aku terjaga, menyebut namamu dalam doa\" → aku lirik justru selalu mengingat ibu → Salah.</p><p>3. Seluruh puisi menggambarkan kerja keras dan kasih sayang ibu ✔.</p><p>4. Ada rima akhir, misalnya <i>sunyi–api</i>, <i>melengkung–ujung</i>, <i>pagi–pergi</i>, <i>kota–dada</i> → Salah.</p>"
    },

    // ---------- Teks 7: Drama ----------
    {
      id: "ind-21", bab: IN, level: 1, tipe: "pg", stimulus: T7,
      soal: "Penyebab Bayu merasa kesal dalam kutipan drama tersebut adalah …",
      opsi: [
        "Ia tidak diizinkan latihan futsal.",
        "Ia ditempatkan di seksi kebersihan, bukan seksi dokumentasi seperti keinginannya.",
        "Rina tidak mengundangnya ke rapat.",
        "Acara pentas seni dibatalkan.",
        "Ia dimarahi oleh guru pembina OSIS."
      ],
      kunci: 1,
      hint: "Baca dialog pertama Bayu.",
      pembahasan: "<p>\"Rin, kenapa namaku dimasukkan ke <b>seksi kebersihan</b>? Aku kan maunya di <b>seksi dokumentasi</b>!\" → Bayu kesal karena penempatannya tidak sesuai keinginan.</p>"
    },
    {
      id: "ind-22", bab: IN, level: 2, tipe: "pg", stimulus: T7,
      soal: "Watak tokoh Rina berdasarkan kutipan drama tersebut adalah …",
      opsi: ["Sabar dan bijaksana", "Pemarah dan egois", "Pemalu dan penakut", "Sombong dan keras kepala", "Ceroboh dan pelupa"],
      kunci: 0,
      hint: "Perhatikan petunjuk lakuan (teks miring dalam kurung) dan cara Rina menanggapi kemarahan Bayu.",
      pembahasan: "<p>Rina menjawab dengan <i>(tenang)</i> meskipun Bayu marah → <b>sabar</b>. Ia menjelaskan alasan, menunjukkan pentingnya seksi kebersihan, dan memberi jalan keluar (boleh mengusulkan pindah di rapat) → <b>bijaksana</b>.</p>"
    },
    {
      id: "ind-23", bab: IN, level: 3, tipe: "pg", stimulus: T7,
      soal: "Peristiwa yang paling mungkin terjadi setelah kutipan drama tersebut adalah …",
      opsi: [
        "Bayu keluar dari kepanitiaan pentas seni.",
        "Bayu datang ke rapat besok dan menyampaikan usulnya untuk pindah seksi.",
        "Rina memindahkan Bayu ke seksi dokumentasi tanpa rapat.",
        "Bayu dan Rina bertengkar hebat di ruang OSIS.",
        "Pentas seni ditunda karena seksi kebersihan kosong."
      ],
      kunci: 1,
      hint: "Lihat dialog dan lakuan terakhir Bayu: apa yang ia ambil dan apa yang ia katakan?",
      pembahasan: "<p>Bayu \"mengambil kertas itu\" (jadwal rapat) dan berkata \"Besok aku datang\". Rina juga sudah menawarkan bahwa ia boleh <b>mengusulkan pindah seksi di rapat</b>. Jadi, opsi B paling sesuai.</p>"
    },

    // ---------- Teks 8: Opini / argumentasi ----------
    {
      id: "ind-24", bab: IN, level: 2, tipe: "pg", stimulus: T8,
      soal: "Pendapat utama penulis dalam teks tersebut adalah …",
      opsi: [
        "Siswa sebaiknya hanya membaca buku pelajaran.",
        "Kegiatan membaca 15 menit sebelum pelajaran bermanfaat dan sebaiknya diterapkan di semua sekolah.",
        "Membaca novel membuat siswa menjadi juara kelas.",
        "Waktu 15 menit terlalu singkat untuk membaca.",
        "Sekolah tidak perlu mengatur kebiasaan membaca siswa."
      ],
      kunci: 1,
      hint: "Cari kalimat yang diawali \"Menurut saya\", lalu bandingkan dengan simpulan di kalimat terakhir.",
      pembahasan: "<p>Kalimat (2): \"Menurut saya, kebijakan ini sangat bermanfaat dan harus dilanjutkan.\" Kalimat (6): \"semua sekolah di Indonesia sebaiknya menerapkan kebijakan ini.\" → opsi <b>B</b>.</p><p>Opsi C hanya contoh pendukung, bukan pendapat utama.</p>"
    },
    {
      id: "ind-25", bab: EV, level: 3, tipe: "kategori", stimulus: T8,
      soal: "Tentukan benar atau salah penilaian berikut terhadap teks tersebut!",
      pernyataan: [
        "Kalimat (1) berisi fakta.",
        "Kalimat (2) berisi opini penulis.",
        "Kalimat (4) merupakan bukti yang kuat dan cukup untuk mendukung kalimat (3).",
        "Kalimat (6) merupakan simpulan dari argumen penulis."
      ],
      kunci: [true, true, false, true],
      hint: "Untuk nomor 3, pikirkan: apakah pengalaman SATU orang (sepupu penulis) cukup untuk membuktikan sesuatu yang berlaku umum?",
      pembahasan: "<p>1. Kebijakan di banyak sekolah adalah peristiwa yang dapat dicek → <b>fakta</b> ✔.</p><p>2. \"Menurut saya … sangat bermanfaat\" → <b>opini</b> ✔.</p><p>3. Contoh satu orang (sepupu) adalah <b>generalisasi yang lemah</b>. Juara kelas juga bisa disebabkan banyak faktor lain → bukti tidak kuat dan tidak cukup → Salah.</p><p>4. Kalimat (6) diawali \"Oleh karena itu\" dan menyimpulkan argumen ✔.</p>"
    },
    {
      id: "ind-26", bab: EV, level: 3, tipe: "pg", stimulus: T8,
      soal: "Data yang paling tepat untuk menggantikan kalimat (4) agar argumen penulis lebih kuat adalah …",
      opsi: [
        "Penulis juga gemar membaca komik setiap malam.",
        "Hasil penelitian terhadap ribuan siswa yang menunjukkan kenaikan skor literasi dan penalaran setelah mengikuti program membaca rutin.",
        "Harga buku novel di toko buku semakin murah.",
        "Banyak siswa lebih suka bermain gim daripada membaca.",
        "Sepupu penulis juga rajin berolahraga."
      ],
      kunci: 1,
      hint: "Bukti yang kuat biasanya berupa data dari sumber tepercaya dengan jumlah sampel besar dan berhubungan langsung dengan klaim.",
      pembahasan: "<p>Klaim kalimat (3): membaca meningkatkan kemampuan berpikir kritis. Bukti terkuat: <b>penelitian dengan sampel besar</b> yang langsung mengukur kenaikan kemampuan penalaran setelah program membaca.</p><p>Opsi A dan E tidak relevan, C tidak berhubungan dengan klaim, dan D justru dapat melemahkan pelaksanaan kebijakan.</p>"
    },
    {
      id: "ind-27", bab: EV, level: 2, tipe: "pg", stimulus: T8,
      soal: "Sikap siswa berikut yang paling sesuai dengan isi teks tersebut adalah …",
      opsi: [
        "Rafi membaca buku hanya ketika akan ujian.",
        "Sinta menyisihkan waktu membaca buku nonpelajaran setiap hari meskipun jadwalnya padat.",
        "Doni menggunakan waktu 15 menit sebelum pelajaran untuk bermain gim.",
        "Maya menolak membaca karena merasa waktunya terbuang.",
        "Andi membaca buku pelajaran secara terus-menerus tanpa istirahat."
      ],
      kunci: 1,
      hint: "Teks mendorong kebiasaan membaca buku nonpelajaran secara rutin dalam waktu singkat.",
      pembahasan: "<p>Isi teks: membaca buku nonpelajaran setiap hari, cukup sebentar tetapi rutin. Sikap yang relevan: <b>Sinta</b> yang tetap menyisihkan waktu membaca setiap hari.</p>"
    },

    // ---------- Teks 9: Hikayat ----------
    {
      id: "ind-28", bab: TU, level: 1, tipe: "mcma", stimulus: T9,
      soal: "Kata berikut yang merupakan kata serapan dari bahasa asing (Arab atau Persia) adalah … (pilih semua yang benar)",
      opsi: ["adil", "hukum", "Syah", "sawah", "petani"],
      kunci: [0, 1, 2],
      hint: "Hikayat banyak menyerap kata dari bahasa Arab dan Persia karena berkembang bersama masuknya Islam ke Nusantara.",
      pembahasan: "<p>• <b>adil</b> ← Arab <i>'adl</i> ✔<br>• <b>hukum</b> ← Arab <i>hukm</i> ✔<br>• <b>Syah</b> ← Persia <i>shah</i> (raja) ✔<br>• sawah dan petani (tani + pe-) adalah kata asli Melayu/Indonesia.</p>"
    },
    {
      id: "ind-29", bab: IN, level: 2, tipe: "pg", stimulus: T9,
      soal: "Nilai moral yang terkandung dalam kutipan hikayat tersebut adalah …",
      opsi: [
        "Rakyat kecil harus selalu mengalah kepada pejabat.",
        "Pemimpin harus adil dan berani menghukum siapa pun yang berbuat aniaya kepada rakyat.",
        "Petani sebaiknya tidak melapor kepada raja.",
        "Hulubalang boleh mengambil sawah rakyat.",
        "Raja harus selalu murka kepada bawahannya."
      ],
      kunci: 1,
      hint: "Perhatikan tindakan raja setelah mendengar laporan petani, dan akibatnya bagi orang-orang besar di negeri itu.",
      pembahasan: "<p>Raja memeriksa perkara, mengembalikan sawah petani, dan menghukum hulubalang yang bersalah meskipun ia pejabat → nilai moral: <b>pemimpin harus adil dan melindungi rakyat kecil</b>.</p>"
    },
    {
      id: "ind-30", bab: EV, level: 3, tipe: "pg", stimulus: T9,
      soal: "Peristiwa masa kini yang paling relevan dengan isi hikayat tersebut adalah …",
      opsi: [
        "Seorang petani memenangkan lomba panen padi tingkat provinsi.",
        "Warga yang lahannya diserobot oknum pejabat melapor, lalu aparat memproses kasusnya secara adil tanpa memandang jabatan pelaku.",
        "Pemerintah membangun waduk baru untuk mengairi sawah.",
        "Seorang raja dari negeri tetangga berkunjung ke Indonesia.",
        "Harga beras naik menjelang hari raya."
      ],
      kunci: 1,
      hint: "Cari inti peristiwa hikayat: rakyat kecil dirugikan oleh pejabat → melapor → diadili secara adil. Peristiwa masa kini mana yang polanya sama?",
      pembahasan: "<p>Inti hikayat: hak rakyat kecil dirampas pejabat, lalu penguasa menegakkan keadilan tanpa pandang bulu. Peristiwa masa kini dengan pola yang sama adalah opsi <b>B</b>.</p><p>Opsi lain hanya mirip pada unsur permukaan (petani, sawah, raja), bukan pada isi peristiwanya.</p>"
    }
  ]};
})();
