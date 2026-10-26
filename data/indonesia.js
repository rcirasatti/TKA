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
      pembahasan: "<h4>Strategi</h4><p><b>Gagasan utama</b> = ide yang <i>mencakup seluruh</i> isi paragraf. Kalimat-kalimat lain hanya menjelaskannya. Pada paragraf campuran, gagasan utama sering merangkum awal dan akhir paragraf.</p><h4>Bukti di teks</h4><p>Alur paragraf: (1–2) sampah makanan sangat banyak → (3–4) dampak buruknya → (5–6) ajakan menguranginya. Opsi yang merangkum ketiganya: <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Laporan UNEP hanya data pendukung kalimat (2).</li><li><b>C</b> Kompos hanya contoh solusi di kalimat (6).</li><li><b>D</b> Gas metana hanya penjelas dampak di kalimat (4).</li><li><b>E</b> Teks berbunyi \"secukupnya\", bukan \"memasak sendiri\". Maknanya bergeser.</li></ul><p class=\"tips\"><b>Tips:</b> uji setiap opsi dengan pertanyaan \"Apakah semua kalimat di paragraf membahas ini?\" Jika hanya satu atau dua kalimat, itu gagasan penjelas.</p>"
    },
    {
      id: "ind-02", bab: TU, level: 1, tipe: "mcma", stimulus: T1,
      soal: "Kata berikut yang merupakan kata serapan dari bahasa asing adalah … (pilih semua yang benar)",
      opsi: ["ekonomi", "metana", "kompos", "makanan", "membusuk"],
      kunci: [0, 1, 2],
      hint: "Kata serapan berasal dari bahasa lain dan disesuaikan ejaannya. Coba ingat padanannya dalam bahasa Inggris.",
      pembahasan: "<h4>Konsep</h4><p><b>Kata serapan</b> = kata yang diambil dari bahasa lain lalu disesuaikan ejaannya. Kata bentukan dari kata dasar asli + imbuhan (makan + -an, me- + busuk) tetap kata asli Indonesia.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ ekonomi ← <i>economy</i> (Inggris) / <i>economie</i> (Belanda).</li><li><b>B</b> ✔ metana ← <i>methane</i>.</li><li><b>C</b> ✔ kompos ← <i>compost</i>.</li><li><b>D</b> ✘ makanan = makan + -an (kata asli).</li><li><b>E</b> ✘ membusuk = me- + busuk (kata asli).</li></ul><p class=\"tips\"><b>Tips:</b> istilah ilmiah dan teknis (ekonomi, metana, kompos, global) hampir selalu kata serapan. Coba cari padanan Inggrisnya.</p>"
    },
    {
      id: "ind-03", bab: IN, level: 2, tipe: "pg", stimulus: T1,
      soal: "Hubungan makna kalimat (5) dengan kalimat-kalimat sebelumnya adalah …",
      opsi: ["Pertentangan", "Penambahan", "Sebab-akibat", "Perbandingan", "Urutan waktu"],
      kunci: 2,
      hint: "Perhatikan konjungsi di awal kalimat (5): \"Oleh karena itu\".",
      pembahasan: "<h4>Konsep</h4><p>Hubungan antarkalimat dikenali dari <b>konjungsi</b>-nya: <i>oleh karena itu, maka, akibatnya</i> = sebab-akibat; <i>namun, tetapi</i> = pertentangan; <i>selain itu</i> = penambahan; <i>kemudian, lalu</i> = urutan waktu.</p><h4>Bukti di teks</h4><p>Kalimat (3)–(4) menjelaskan dampak buruk sampah makanan (sebab). Kalimat (5) diawali \"<b>Oleh karena itu</b>\" dan berisi tindakan sebagai akibatnya → <b>sebab-akibat</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tidak ada kata <i>namun</i> atau <i>tetapi</i>, dan isinya tidak bertentangan.</li><li><b>B</b> Penambahan memakai <i>selain itu, juga</i>. Kalimat (6) (dengan \"pun\") yang lebih dekat ke penambahan.</li><li><b>D</b> Tidak ada dua hal yang dibandingkan.</li><li><b>E</b> Tidak ada urutan kejadian.</li></ul><p class=\"tips\"><b>Tips:</b> cari konjungsi di awal kalimat yang ditanya. Biasanya itu sudah menjawab soal.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan \"<b>menurut</b> petugas BPBD\" → cari kutipan atau atribusi kepada narasumber itu. Jawaban harus dari teks, bukan dari pengetahuan umum.</p><h4>Bukti di teks</h4><p>\"Menurut petugas BPBD, banjir terjadi karena <b>air laut sedang pasang maksimum bersamaan dengan fase bulan purnama</b>.\" → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>, <b>B</b>, <b>D</b>, <b>E</b>: semuanya bisa menyebabkan banjir di dunia nyata (penurunan tanah memang masalah di Jakarta utara), tetapi <b>tidak disebut</b> di teks.</li></ul><p class=\"tips\"><b>Tips:</b> pengecoh soal teks berita sering berupa fakta umum yang benar tetapi tidak ada di teks. Pegang prinsip: jawab hanya dari teks.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Kerangka berita = isi pokok setiap paragraf secara berurutan. Ringkas setiap paragraf menjadi 2–3 kata, lalu cocokkan dengan opsi.</p><h4>Bukti di teks</h4><ol><li>P1: peristiwa (kapan, di mana, ketinggian air) + <b>penyebab</b> (pasang dan purnama).</li><li>P2: <b>dampak</b> (120 KK) + <b>penanganan</b> (pompa, perahu karet, imbauan).</li><li>P3: <b>perkiraan</b> tiga hari ke depan.</li></ol><p>Urutan ini sama dengan <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Diawali penyebab dan perkiraan muncul di tengah. Tidak sesuai.</li><li><b>C</b> Diawali dampak. Berita ini diawali peristiwa.</li><li><b>D</b> Diawali imbauan, padahal imbauan ada di P2.</li><li><b>E</b> Perkiraan ada di akhir, bukan urutan kedua.</li></ul><p class=\"tips\"><b>Tips:</b> berita umumnya berpola piramida terbalik: informasi terpenting (peristiwa) di awal, rincian dan perkiraan di akhir.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Menilai kelengkapan berita: cek unsur <b>5W + 1H</b> (apa, siapa, kapan, di mana, mengapa, bagaimana), lalu bandingkan setiap klaim dengan teks.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Tempat: Kelurahan Muara Baru, Penjaringan. Waktu: Rabu (14/10) pagi.</li><li><b>2</b> <i>Salah.</i> 120 KK <b>terdampak</b>, tetapi \"<b>belum ada warga yang mengungsi</b>\". Terdampak ≠ mengungsi.</li><li><b>3</b> <i>Benar.</i> \"Warga kami <b>imbau</b> menyimpan barang berharga…\"</li><li><b>4</b> <i>Salah.</i> Yang disebut hanya penanganan darurat (pompa, perahu karet). Upaya jangka panjang (tanggul, tata kota) tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> kata \"secara lengkap\" di pernyataan 4 adalah klaim berat. Cukup tunjukkan satu hal yang tidak dibahas untuk menyalahkannya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Membaca tabel: lihat <b>tren tiap kolom</b> (naik terus, turun terus, atau naik-turun) sebelum menilai opsi. Kata seperti <i>terus, selalu, semua</i> harus berlaku di setiap bulan.</p><h4>Bukti di teks</h4><p>Anak-anak: 120 → 150 → 210 → 260 (terus naik). Remaja: 45 → 40 → 38 → 35 (terus turun). Dewasa: 30 → 35 → 32 → 40 (naik-turun). Opsi yang sesuai: <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Remaja justru turun terus.</li><li><b>C</b> Juni: remaja 45 &gt; dewasa 30. Kata \"selalu\" gugur.</li><li><b>D</b> Remaja tetap turun setelah Agustus (38 → 35).</li><li><b>E</b> Total September (335) justru terbanyak; total Juni (195) paling sedikit.</li></ul><p class=\"tips\"><b>Tips:</b> untuk opsi dengan kata \"selalu\" atau \"terus\", cari satu bulan yang melanggar. Cukup satu untuk mencoretnya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Hitung dan bandingkan data, lalu waspadai klaim sebab-akibat yang terlalu yakin (<i>pasti, satu-satunya</i>). Data tabel menunjukkan <b>apa</b> yang terjadi, tetapi belum tentu <b>mengapa</b>.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ 120 + 45 + 30 = 195.</li><li><b>B</b> ✘ Dewasa turun dari 35 (Juli) ke 32 (Agustus).</li><li><b>C</b> ✔ Kenaikan anak-anak: +30, <b>+60</b>, +50. Terbesar Juli → Agustus.</li><li><b>D</b> ✘ Kenaikan sudah terjadi sejak Juli (sebelum mendongeng dimulai), dan faktor lain tidak bisa disingkirkan. \"Pasti satu-satunya\" tidak didukung data.</li><li><b>E</b> ✔ Remaja September = 35, terkecil.</li></ul><p class=\"tips\"><b>Tips:</b> kenaikan pada saat yang sama dengan suatu kegiatan menunjukkan <i>keterkaitan</i>, bukan bukti <i>penyebab tunggal</i>.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Untuk menguji simpulan, lihat apa yang <b>sebenarnya diklaim</b>. Klaimnya tentang \"<b>minat baca</b>\", sedangkan datanya tentang \"<b>jumlah kunjungan</b>\". Data tambahan harus menutup celah di antara keduanya.</p><h4>Bukti di teks</h4><p>Anak-anak bisa saja datang hanya untuk mendengarkan dongeng, tanpa membaca. Bukti langsung minat baca adalah <b>jumlah buku yang dipinjam atau dibaca</b> sebelum dan sesudah kegiatan → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Data dewasa tahun lalu tidak berhubungan dengan minat baca anak.</li><li><b>C</b> Nama pendongeng tidak membuktikan apa pun tentang minat baca.</li><li><b>D</b> Jumlah rak tidak berkaitan.</li><li><b>E</b> Jam buka tidak berkaitan.</li></ul><p class=\"tips\"><b>Tips:</b> soal \"data yang paling diperlukan\" mencari data yang <i>langsung</i> mengukur hal yang diklaim, plus perbandingan sebelum dan sesudah.</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Huruf kapital (EYD): dipakai untuk <b>nama hari, bulan, hari raya</b>, dan nama diri (orang, tempat, lembaga resmi). Kata umum seperti <i>hari, siswa, kelas, panti asuhan, bakti sosial</i> tetap huruf kecil, kecuali menjadi bagian nama resmi.</p><h4>Langkah</h4><p>\"senin\" → <b>Senin</b> (nama hari). Kata \"hari\" tetap kecil. Kata lain sudah benar → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> \"Hari\" tidak perlu kapital.</li><li><b>C</b> \"senin\" masih kecil; \"Siswa\" dan \"Panti Asuhan\" tidak perlu kapital.</li><li><b>D</b> \"Kelas\" dan \"Bakti Sosial\" tidak perlu kapital, dan koma setelah keterangan waktu hilang.</li><li><b>E</b> Kapitalnya terbalik: \"Hari\" kapital, \"senin\" kecil.</li></ul><p class=\"tips\"><b>Tips:</b> yang dikapitalkan adalah <i>nama</i>-nya (Senin, Mei, Idulfitri), bukan kata jenisnya (hari, bulan).</p>"
    },
    {
      id: "ind-11", bab: EV, level: 2, tipe: "mcma", stimulus: T4,
      soal: "Kalimat yang tidak efektif karena pemborosan kata (pleonasme) adalah … (pilih semua yang benar)",
      opsi: ["Kalimat (1)", "Kalimat (2)", "Kalimat (3)", "Kalimat (4)", "Kalimat (5)"],
      kunci: [1, 3],
      hint: "Cari kata yang maknanya diulang dua kali, misalnya penanda jamak yang digunakan bersamaan dengan bentuk ulang.",
      pembahasan: "<h4>Konsep</h4><p><b>Pleonasme</b> = memakai kata yang maknanya sudah terwakili kata lain, sehingga boros. Contoh umum: <i>para + kata ulang</i>, <i>berbagai + macam-macam</i>, <i>sangat … sekali</i>, <i>naik ke atas</i>, <i>agar supaya</i>.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✘ Kalimat (1) salah huruf kapital, bukan pleonasme.</li><li><b>B</b> ✔ \"berbagai <b>macam-macam</b>\": berbagai = bermacam-macam. Cukup \"berbagai bantuan\".</li><li><b>C</b> ✘ Kalimat (3) sudah efektif.</li><li><b>D</b> ✔ \"Para <b>siswa-siswa</b>\": <i>para</i> sudah menyatakan jamak. Cukup \"Para siswa\".</li><li><b>E</b> ✘ Kalimat (5) sudah efektif.</li></ul><p class=\"tips\"><b>Tips:</b> penanda jamak (<i>para, banyak, berbagai, semua</i>) tidak boleh diikuti kata ulang.</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Perbaikan pleonasme: <b>buang salah satu</b> penanda makna yang dobel. Untuk \"para siswa-siswa\", buang pengulangannya → \"para siswa\".</p><h4>Langkah</h4><p>\"Para\" sudah menyatakan jamak → <b>Para siswa tampak antusias saat bermain bersama anak-anak panti</b>. \"Anak-anak\" boleh, karena tidak didahului penanda jamak.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> \"siswa-siswi\" juga kata ulang, jadi masih pleonasme dengan \"para\".</li><li><b>C</b> Susunan kata kacau (\"Siswa-siswa para\"), dan \"anak-anak\" diubah tanpa alasan.</li><li><b>D</b> \"Para-para\" bukan bentuk yang benar.</li><li><b>E</b> Pleonasme lama tetap ada, malah ditambah pleonasme baru \"sangat … sekali\".</li></ul><p class=\"tips\"><b>Tips:</b> pilih perbaikan yang <i>paling sedikit mengubah</i> kalimat asli tetapi menghilangkan kesalahan.</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Kata baku mengikuti KBBI. Pasangan yang sering diuji: <b>analisis</b> (bukan analisa), <b>praktik</b> (bukan praktek), <b>apotek</b> (bukan apotik), <b>risiko</b> (bukan resiko).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> analisis ← <i>analysis</i>. Akhiran <i>-sis</i> dipertahankan.</li><li><b>2</b> <i>Salah.</i> Yang baku <b>praktik</b> (← <i>practice</i>).</li><li><b>3</b> <i>Benar.</i> apotek ← <i>apotheek</i> (Belanda). \"Apotik\" tidak baku.</li><li><b>4</b> <i>Salah.</i> Yang baku <b>risiko</b> (← <i>risico</i>).</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan polanya: praktik, teknik, politik (berakhiran <i>-ik</i>); apotek (berakhiran <i>-ek</i>); analisis, sintesis, hipotesis (berakhiran <i>-sis</i>). Ini daftar yang paling sering keluar.</p>"
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
      pembahasan: "<h4>Strategi</h4><p><b>Latar waktu</b> dicari dari penanda eksplisit (malam, pagi) atau implisit (lampu jalan menyala, warung tutup). <b>Suasana</b> dicari dari pilihan detail yang membangun perasaan (hujan, lampu berkedip, ponsel retak).</p><h4>Bukti di teks</h4><p>Waktu: \"Hujan belum juga reda\", \"Lampu jalan … berkedip-kedip\", \"Malam itu\" → <b>malam hari saat hujan</b>. Suasana: hujan, lampu redup, ponsel retak, uang tidak cukup → <b>muram atau sendu</b> → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>, <b>B</b>, <b>D</b>: waktunya salah, dan suasana ceria atau meriah tidak cocok.</li><li><b>E</b> Waktunya benar, tetapi tidak ada unsur yang menakutkan (hantu, ancaman). Suasananya sedih, bukan seram.</li></ul><p class=\"tips\"><b>Tips:</b> bedakan suasana <i>muram/sendu</i> (sedih, berat) dan <i>mencekam/menakutkan</i> (ada ancaman). Hujan malam bisa keduanya, jadi lihat isi ceritanya.</p>"
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
      pembahasan: "<h4>Strategi</h4><p><b>Konflik</b> = masalah atau pertentangan yang dihadapi tokoh utama. Rumuskan dengan pola: tokoh <i>ingin/butuh</i> sesuatu, tetapi ada <i>halangan</i>.</p><h4>Bukti di teks</h4><p>Dimas butuh \"<b>dua ratus ribu</b>\" untuk pendaftaran. Uang di kaleng \"<b>tidak sampai separuh</b>\" dan masih ada \"<b>utang beras</b>\". Konflik: Bu Ratmi <b>kesulitan membiayai</b> pendaftaran kuliah → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tidak ada pertengkaran; Dimas berbicara \"pelan\".</li><li><b>C</b> Warung ditutup karena malam, bukan masalah utama.</li><li><b>D</b> Utang beras hanya menambah beban, tidak ada perselisihan.</li><li><b>E</b> Dimas justru ingin kuliah.</li></ul><p class=\"tips\"><b>Tips:</b> konflik bisa bersifat batin atau ekonomi, tidak harus pertengkaran. Jangan terkecoh opsi yang menambahkan unsur \"bertengkar\".</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Memprediksi kelanjutan cerita → gabungkan <b>janji atau niat tokoh</b> dengan <b>tindakan terakhirnya</b>. Penulis sengaja menaruh petunjuk di akhir kutipan.</p><h4>Bukti di teks</h4><p>Bu Ratmi berjanji: \"Soal uang, biar Ibu yang pikirkan.\" Lalu diam-diam mengeluarkan <b>cincin emas</b> peninggalan suami dan \"<b>lama ia menggenggam</b>\" (tanda berat hati). Kelanjutan yang logis: cincin dijual atau digadaikan untuk biaya Dimas → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bertentangan dengan pesannya \"Kamu belajar saja yang rajin\".</li><li><b>C</b> Warung adalah sumber penghasilan; tidak ada petunjuk akan ditutup selamanya.</li><li><b>D</b> Ibunya sudah berjanji akan mencarikan uang.</li><li><b>E</b> Fokus cerita adalah biaya kuliah, bukan utang beras.</li></ul><p class=\"tips\"><b>Tips:</b> benda yang tiba-tiba ditonjolkan di akhir kutipan (cincin, surat, kunci) hampir selalu menjadi kunci kelanjutan cerita.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Menilai watak tokoh: dasarkan pada <b>tindakan, ucapan, dan cara bicara</b> tokoh, bukan dugaan. Kalimat deskriptif tanpa kata perasaan pun bisa menyiratkan perasaan.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Ia siap melepas cincin kenangan almarhum suami demi kuliah anaknya → rela berkorban.</li><li><b>2</b> <i>Benar.</i> Ia \"tersenyum\" dan berkata \"biar Ibu yang pikirkan\", padahal uangnya kurang → menutupi kesulitan.</li><li><b>3</b> <i>Salah.</i> Dimas berkata \"<b>pelan</b>\". Ia menyampaikan informasi, tidak memaksa dengan kasar.</li><li><b>4</b> <i>Benar.</i> Menggenggam lama tanpa kata menunjukkan kebimbangan dan kesedihan.</li></ul><p class=\"tips\"><b>Tips:</b> teknik \"show, don't tell\". Penulis tidak menulis \"Bu Ratmi sedih\", tetapi menunjukkannya lewat tindakan (diam, menggenggam lama).</p>"
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
      pembahasan: "<h4>Konsep</h4><p>Puisi sering memadukan makna <b>harfiah</b> (sebenarnya) dan <b>kias</b> (simbolis). \"Menanak\" secara harfiah berarti memasak nasi. Disandingkan dengan \"doa\", maknanya menjadi kias: mengolah atau memanjatkan doa dengan tekun.</p><h4>Langkah</h4><p>\"menanak nasi\" = memasak untuk keluarga (harfiah); \"menanak doa\" = tekun mendoakan anak-anak (kias). Keduanya dilakukan bersamaan → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bernyanyi tidak disebut.</li><li><b>C</b> Larik menyebut keduanya (nasi <i>dan</i> doa), bukan hanya doa.</li><li><b>D</b> Tidak ada kegiatan berjualan.</li><li><b>E</b> Jumlah nasi tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> jika satu kata kerja dipakai untuk benda konkret dan benda abstrak sekaligus, yang abstrak bermakna kias. Pola ini disebut zeugma.</p>"
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
      pembahasan: "<h4>Konsep</h4><p><b>Majas perumpamaan (simile)</b> membandingkan dua hal secara eksplisit dengan kata <i>seperti, bagai, laksana, bak</i>. Cari kesamaan sifat antara keduanya.</p><h4>Langkah</h4><p>\"Punggungmu kian melengkung\" disamakan dengan \"padi yang tunduk di ujung\" (padi tua yang merunduk). Kesamaannya: membungkuk karena tua atau matang → ibu yang <b>semakin tua dan bungkuk</b> setelah lama bekerja keras → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Padi hanya pembanding, ibu tidak sedang di sawah.</li><li><b>C</b> \"Kian melengkung\" menunjukkan proses bertahun-tahun, bukan sakit sesaat.</li><li><b>D</b> Bait yang sama justru menyebut \"senyummu tetap pagi\".</li><li><b>E</b> Tidak ada unsur menari.</li></ul><p class=\"tips\"><b>Tips:</b> padi yang merunduk juga simbol kerendahan hati (\"ilmu padi\"). Larik ini bisa bermakna ganda: tua dan rendah hati.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Menilai puisi: suasana dari pilihan kata dan isi, makna bait dari larik-lariknya, tema dari keseluruhan puisi, dan rima dari bunyi akhir larik.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Ibu bekerja sebelum subuh (haru), anak yang jauh di kota mendoakannya (rindu).</li><li><b>2</b> <i>Salah.</i> \"setiap subuh aku terjaga, menyebut namamu dalam doa\" → aku lirik justru <b>selalu mengingat</b> ibu.</li><li><b>3</b> <i>Benar.</i> Seluruh puisi menggambarkan kerja keras, doa, dan kasih ibu.</li><li><b>4</b> <i>Salah.</i> Ada rima akhir: sunyi–api, doa–hampa, melengkung–ujung, pagi–pergi, kota–dada, terjaga–doa.</li></ul><p class=\"tips\"><b>Tips:</b> untuk cek rima, baca keras-keras suku kata terakhir tiap larik. \"Sama sekali tidak\" cukup dibantah dengan satu pasang rima.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Pada teks drama, perasaan tokoh terlihat dari <b>dialog</b> dan <b>petunjuk lakuan</b> (teks dalam kurung). Penyebab perasaan biasanya diucapkan tokoh itu sendiri.</p><h4>Bukti di teks</h4><p>Petunjuk: \"Bayu masuk dengan wajah kesal.\" Dialog: \"kenapa namaku dimasukkan ke <b>seksi kebersihan</b>? Aku kan maunya di <b>seksi dokumentasi</b>!\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Latihan futsal justru alasan Bayu tidak datang rapat; tidak ada larangan.</li><li><b>C</b> Rapat diadakan, Bayu yang tidak datang.</li><li><b>D</b> Acara tetap berjalan.</li><li><b>E</b> Guru pembina tidak muncul.</li></ul><p class=\"tips\"><b>Tips:</b> dialog pertama tokoh yang sedang kesal biasanya langsung menyebut penyebab kekesalannya.</p>"
    },
    {
      id: "ind-22", bab: IN, level: 2, tipe: "pg", stimulus: T7,
      soal: "Watak tokoh Rina berdasarkan kutipan drama tersebut adalah …",
      opsi: ["Sabar dan bijaksana", "Pemarah dan egois", "Pemalu dan penakut", "Sombong dan keras kepala", "Ceroboh dan pelupa"],
      kunci: 0,
      hint: "Perhatikan petunjuk lakuan (teks miring dalam kurung) dan cara Rina menanggapi kemarahan Bayu.",
      pembahasan: "<h4>Strategi</h4><p>Watak tokoh drama disimpulkan dari <b>cara bicara</b> (petunjuk lakuan seperti \"tenang\"), <b>isi ucapan</b>, dan <b>tindakan</b>. Untuk opsi dua sifat, keduanya harus terbukti.</p><h4>Bukti di teks</h4><p>\"(tenang)\" saat Bayu marah → <b>sabar</b>. Menjelaskan alasan, menunjukkan pentingnya seksi kebersihan, dan memberi jalan keluar (\"kamu boleh datang dan mengusulkan pindah seksi\") → <b>bijaksana</b> → <b>A</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Rina tidak marah, dan ia memberi Bayu kesempatan (tidak egois).</li><li><b>C</b> Rina berani menjelaskan dengan tegas.</li><li><b>D</b> Rina terbuka terhadap usulan pindah seksi.</li><li><b>E</b> Rina tertata (menyusun daftar, menyiapkan jadwal rapat).</li></ul><p class=\"tips\"><b>Tips:</b> petunjuk lakuan dalam kurung adalah \"bukti gratis\" untuk soal watak. Jangan dilewati.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Prediksi kelanjutan drama → lihat <b>tindakan dan ucapan terakhir</b> tokoh serta tawaran yang sudah diberikan tokoh lain.</p><h4>Bukti di teks</h4><p>Rina menawarkan: \"kamu boleh datang dan mengusulkan pindah seksi\". Bayu \"<b>mengambil kertas itu</b>\" (jadwal rapat) dan berkata \"<b>Besok aku datang</b>.\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bayu justru setuju datang, tidak keluar.</li><li><b>C</b> Rina menyerahkan keputusan ke rapat, bukan memindahkan sepihak.</li><li><b>D</b> Konflik sudah mereda (\"Ya sudah\").</li><li><b>E</b> Tidak ada petunjuk seksi kebersihan kosong atau acara ditunda.</li></ul><p class=\"tips\"><b>Tips:</b> kelanjutan yang benar biasanya meneruskan kesepakatan terakhir tokoh, bukan membalik suasana.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Pada teks argumentasi, <b>pendapat utama</b> (tesis) ditandai <i>menurut saya, saya berpendapat</i> dan biasanya ditegaskan lagi di kalimat simpulan (<i>oleh karena itu</i>).</p><h4>Bukti di teks</h4><p>(2): \"<b>Menurut saya</b>, kebijakan ini sangat bermanfaat dan harus dilanjutkan.\" (6): \"<b>Oleh karena itu</b>, semua sekolah di Indonesia sebaiknya menerapkan kebijakan ini.\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Kebijakannya justru tentang buku <i>nonpelajaran</i>.</li><li><b>C</b> Itu hanya contoh pendukung di kalimat (4), bukan pendapat utama.</li><li><b>D</b> Penulis justru menganggap 15 menit tidak memberatkan.</li><li><b>E</b> Bertentangan dengan tesis.</li></ul><p class=\"tips\"><b>Tips:</b> gabungkan kalimat \"menurut saya\" dan kalimat \"oleh karena itu\". Opsi yang merangkum keduanya adalah pendapat utama.</p>"
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
      pembahasan: "<h4>Strategi</h4><p><b>Fakta</b> bisa dicek; <b>opini</b> berisi penilaian. <b>Bukti yang kuat</b> harus representatif (banyak sampel) dan benar-benar berhubungan dengan klaim. Satu contoh pribadi = generalisasi lemah.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Kebijakan di banyak sekolah adalah peristiwa yang bisa dicek → fakta.</li><li><b>2</b> <i>Benar.</i> \"Menurut saya … sangat bermanfaat\" → opini.</li><li><b>3</b> <i>Salah.</i> Satu orang (sepupu) tidak mewakili semua siswa, dan juara kelas bisa karena banyak faktor (les, bakat). Bukti ini lemah dan tidak cukup.</li><li><b>4</b> <i>Benar.</i> Diawali \"Oleh karena itu\" dan menarik simpulan dari argumen sebelumnya.</li></ul><p class=\"tips\"><b>Tips:</b> bukti berupa pengalaman satu orang (saudara, teman, diri sendiri) hampir selalu dinilai lemah di soal evaluasi argumen.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Bukti pengganti harus (1) <b>langsung</b> mendukung klaim kalimat (3) (membaca → berpikir kritis), dan (2) lebih <b>kuat</b> daripada contoh satu orang: sampel besar dan terukur.</p><h4>Bukti di teks</h4><p>Opsi <b>B</b>: penelitian terhadap ribuan siswa yang mengukur kenaikan skor literasi dan penalaran setelah program membaca rutin. Sampelnya besar, terukur, dan relevan dengan klaim.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Pengalaman pribadi penulis masih bukti satu orang, dan tidak menyebut hasil apa pun.</li><li><b>C</b> Harga novel tidak berhubungan dengan kemampuan berpikir kritis.</li><li><b>D</b> Justru dapat melemahkan pelaksanaan kebijakan.</li><li><b>E</b> Olahraga tidak relevan, malah menambah faktor lain.</li></ul><p class=\"tips\"><b>Tips:</b> urutan kekuatan bukti: penelitian dengan sampel besar &gt; data statistik &gt; pendapat ahli &gt; contoh satu orang.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Pilih sikap yang <b>menerapkan isi teks</b>: membaca buku <i>nonpelajaran</i>, <i>setiap hari</i>, <i>sebentar tetapi rutin</i>. Ketiga unsur itu harus terpenuhi.</p><h4>Bukti di teks</h4><p>Sinta menyisihkan waktu membaca buku nonpelajaran <b>setiap hari</b> meski jadwalnya padat. Ini sesuai dengan \"membaca 15 menit setiap hari tidak memberatkan\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Hanya saat ujian, tidak rutin.</li><li><b>C</b> Waktu membaca dipakai bermain gim.</li><li><b>D</b> Bertentangan: menolak membaca.</li><li><b>E</b> Buku pelajaran dan tanpa istirahat, bukan inti teks (singkat, nonpelajaran).</li></ul><p class=\"tips\"><b>Tips:</b> cocokkan kata kunci teks (nonpelajaran, setiap hari, singkat) dengan setiap opsi. Opsi yang memenuhi paling banyak kata kunci adalah jawabannya.</p>"
    },

    // ---------- Teks 9: Hikayat ----------
    {
      id: "ind-28", bab: TU, level: 1, tipe: "mcma", stimulus: T9,
      soal: "Kata berikut yang merupakan kata serapan dari bahasa asing (Arab atau Persia) adalah … (pilih semua yang benar)",
      opsi: ["adil", "hukum", "Syah", "sawah", "petani"],
      kunci: [0, 1, 2],
      hint: "Hikayat banyak menyerap kata dari bahasa Arab dan Persia karena berkembang bersama masuknya Islam ke Nusantara.",
      pembahasan: "<h4>Konsep</h4><p>Hikayat (sastra Melayu klasik) banyak menyerap kata dari bahasa <b>Arab</b> dan <b>Persia</b>, terutama kata tentang agama, hukum, dan pemerintahan.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ adil ← Arab <i>'adl</i>.</li><li><b>B</b> ✔ hukum ← Arab <i>hukm</i>.</li><li><b>C</b> ✔ Syah ← Persia <i>shah</i> (raja).</li><li><b>D</b> ✘ sawah adalah kata asli Melayu/Indonesia.</li><li><b>E</b> ✘ petani = pe- + tani (kata asli).</li></ul><p class=\"tips\"><b>Tips:</b> kata serapan Arab yang sering keluar: adil, hukum, rakyat, kitab, wakil, musyawarah, hikayat. Kata serapan Persia: syah, bandar, kenduri, nakhoda.</p>"
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
      pembahasan: "<h4>Strategi</h4><p><b>Nilai moral</b> = pelajaran baik dari tindakan tokoh, terutama dari cara konflik diselesaikan dan akibatnya.</p><h4>Bukti di teks</h4><p>Raja memeriksa perkara, mengembalikan sawah petani, dan <b>menghukum hulubalang</b> walau ia pejabat. Akibatnya \"tiadalah lagi orang besar yang berani berbuat aniaya kepada rakyat kecil\" → pemimpin harus adil dan berani menindak siapa pun → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bertentangan: rakyat kecil justru dibela.</li><li><b>C</b> Bertentangan: melapor justru membawa keadilan.</li><li><b>D</b> Bertentangan: hulubalang dihukum.</li><li><b>E</b> Murkanya raja ditujukan pada kesalahan, bukan sifat yang harus selalu ada.</li></ul><p class=\"tips\"><b>Tips:</b> nilai moral selalu positif dan bisa diterapkan umum. Opsi yang membenarkan tindakan buruk tokoh pasti salah.</p>"
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
      pembahasan: "<h4>Strategi</h4><p>Mencari relevansi dengan masa kini: abstraksikan <b>pola inti</b> cerita dulu, lalu cari peristiwa modern yang polanya sama. Jangan terkecoh kemiripan permukaan (kata \"petani\", \"sawah\", \"raja\").</p><h4>Bukti di teks</h4><p>Pola inti: hak rakyat kecil dirampas pejabat → rakyat melapor → penguasa menegakkan keadilan tanpa memandang jabatan. Opsi <b>B</b> punya pola yang persis sama.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Hanya mirip \"petani\"; tidak ada perampasan atau keadilan.</li><li><b>C</b> Hanya mirip \"sawah\".</li><li><b>D</b> Hanya mirip \"raja\".</li><li><b>E</b> Hanya terkait beras; tidak ada kesamaan pola.</li></ul><p class=\"tips\"><b>Tips:</b> ringkas cerita menjadi satu kalimat tanpa nama tokoh atau benda khusus. Kalimat itulah yang dicocokkan dengan opsi.</p>"
    }
  ]};
})();
