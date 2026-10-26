// Paket HOTS Bahasa Inggris — gaya tryout TKA (teks dan soal dibuat baru).
(function () {
  var GR = "Grammar in Context", TU = "Pemahaman Tekstual", IN = "Pemahaman Inferensial", EV = "Evaluasi & Apresiasi";

  var TA = "<p><b>Text A</b></p>" +
    "<p>Electric scooters have become a common sight in many big cities. Unlike ordinary scooters, which …(1)… by foot, electric scooters …(2)… by a rechargeable battery. " +
    "Their low price and small size …(3)… them popular among students and office workers. …(4)…, they produce no exhaust fumes, so they are better for the air in crowded cities.</p>" +
    "<p>However, electric scooters are not only convenient …(5)… risky. Several accidents happen every month because many riders do not wear helmets or ride too fast on busy roads.</p>";

  var TB = "<p><b>Text B</b></p>" +
    "<p>Last holiday, I spent a week as a volunteer at a sea turtle conservation centre in Sukabumi, West Java. I had always loved animals, but I had never worked with wild ones before, " +
    "so I felt both excited and nervous.</p>" +
    "<p>Every night, we patrolled the beach with the rangers to look for female turtles laying eggs. We were not allowed to use bright flashlights because the light could confuse the turtles " +
    "and make <u>them</u> return to the sea before laying their eggs. After the mother turtle left, we carefully moved the eggs to a protected hatchery, where they were safe from predators and illegal collectors.</p>" +
    "<p>On my fifth night, something unforgettable happened. A nest that had been buried for about fifty days finally hatched. Dozens of tiny hatchlings climbed out of the sand and crawled toward the sea. " +
    "The ranger explained that only about one in a thousand of them would survive to adulthood. Hearing that, I realised how <u>fragile</u> their lives were.</p>" +
    "<p>Before I went home, the head of the centre told us that the number of nests had dropped by almost half in the last ten years, mainly because of beach development and plastic waste. " +
    "Since then, I have stopped using single-use plastic bags, and I have started a small campaign at my school to raise awareness about sea turtles.</p>";

  var TC = "<p><b>Text C</b></p>" +
    "<p><b>Making Compost at Home</b></p>" +
    "<p>Composting turns kitchen and garden waste into natural fertiliser. To start, choose a shady spot and prepare a container with small holes on its sides so that air can flow in. " +
    "Collect \"green\" materials such as vegetable peels, fruit scraps, and fresh grass, and \"brown\" materials such as dry leaves, twigs, and shredded paper.</p>" +
    "<p>Put a layer of brown materials at the bottom of the container, then add a layer of green materials. Repeat the layers until the container is almost full. " +
    "Avoid adding meat, bones, or oily food because they produce bad smells and attract rats.</p>" +
    "<p>Every week, stir the pile to add oxygen, which helps the microorganisms break down the waste faster. Keep the pile as damp as a squeezed sponge: if it is too dry, sprinkle some water; " +
    "if it is too wet and smells bad, add more brown materials.</p>" +
    "<p>After about two to three months, the compost is ready when it is dark brown, crumbly, and smells like soil. Sift it to remove large pieces, then use it to enrich the soil in your garden or flower pots.</p>";

  var TD = "<p><b>Text D</b></p>" +
    "<p style='text-align:center'><b>Should Schools Start Later?</b></p>" +
    "<p>(1) Many teenagers in Indonesia start school at 6.30 or 7.00 a.m. Some education experts argue that schools should start later, around 8.00 a.m. In my view, this change deserves serious consideration.</p>" +
    "<p>(2) Scientific research supports this idea. During puberty, the body clock shifts, so teenagers naturally fall asleep later at night. The American Academy of Pediatrics recommends that " +
    "middle and high schools start no earlier than 8.30 a.m. so that students can get the eight to ten hours of sleep they need.</p>" +
    "<p>(3) Students who sleep enough are likely to concentrate better. When one school district in the United States moved its start time later, students' attendance improved and fewer students fell asleep in class.</p>" +
    "<p>(4) Critics say a later start would cause traffic jams and make it harder for parents to drop their children off before work. These concerns are understandable, but they could be solved with flexible " +
    "schedules and better school transport.</p>" +
    "<p>(5) In short, a later school start is not about making students lazy; it is about helping them learn when their brains are ready.</p>";

  var KAT = "<br><small>Categories: <b>A</b> = Preparation, <b>B</b> = Layering process, <b>C</b> = Maintenance</small>";

  window.BANK_SOAL = window.BANK_SOAL || {};
  window.BANK_SOAL["inggris-hots"] = { soal: [

    // ---------- Text A: Cloze ----------
    {
      id: "inh-01", bab: GR, level: 1, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (1)?",
      opsi: ["are pushing", "are pushed", "is pushed", "push", "has pushed"],
      kunci: 1,
      hint: "Subjek \"which\" merujuk ke \"ordinary scooters\" (jamak). Skuter tidak mendorong, tetapi DIDORONG, jadi kalimatnya pasif.",
      pembahasan: "<h4>Konsep</h4><p><b>Kalimat pasif</b> dipakai jika subjek <i>dikenai</i> tindakan, bukan melakukannya. Rumus present pasif: <b>am/is/are + V3</b>. Pilih <i>is</i> atau <i>are</i> berdasarkan subjek tunggal atau jamak.</p><h4>Langkah</h4><ol><li>\"which\" merujuk ke <i>ordinary scooters</i> → <b>jamak</b>.</li><li>Skuter tidak mendorong, tetapi <b>didorong</b> dengan kaki (\"by foot\") → pasif.</li><li>Fakta umum → present. Hasilnya <b>are pushed</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> are pushing = aktif (skuter sedang mendorong sesuatu), tidak logis.</li><li><b>C</b> is pushed: subjeknya jamak, jadi harus <i>are</i>.</li><li><b>D</b> push = aktif.</li><li><b>E</b> has pushed = aktif dan subjek tunggal.</li></ul><p class=\"tips\"><b>Tips:</b> kata <b>by</b> setelah titik rumpang (<i>by foot, by a battery</i>) adalah sinyal kuat bentuk pasif.</p>"
    },
    {
      id: "inh-02", bab: GR, level: 1, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (2)?",
      opsi: ["power", "is powered", "are powered", "powering", "were powering"],
      kunci: 2,
      hint: "Ada frasa \"by a rechargeable battery\" yang menunjukkan pelaku. Subjeknya \"electric scooters\" (jamak), dan teks memakai present tense.",
      pembahasan: "<h4>Konsep</h4><p>Masih pola pasif present: <b>are + V3</b>, karena subjek jamak dikenai tindakan.</p><h4>Langkah</h4><p>Subjek <i>electric scooters</i> (jamak) <b>digerakkan</b> oleh baterai (\"by a rechargeable battery\") → pasif → <b>are powered</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> power = aktif (skuter menggerakkan baterai), maknanya terbalik.</li><li><b>B</b> is powered: subjeknya jamak.</li><li><b>D</b> powering: kalimat tidak punya kata kerja utama.</li><li><b>E</b> were powering = aktif dan lampau; teks membahas fakta saat ini.</li></ul><p class=\"tips\"><b>Tips:</b> rumpang (1) dan (2) paralel (\"Unlike …, which are pushed …, electric scooters are powered …\"). Bentuknya pasti serupa.</p>"
    },
    {
      id: "inh-03", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (3)?",
      opsi: ["makes", "make", "is making", "has made", "was made"],
      kunci: 1,
      hint: "Cari subjek kalimatnya: \"Their low price AND small size\". Dua hal yang digabung dengan \"and\" dianggap jamak.",
      pembahasan: "<h4>Konsep</h4><p><b>Subject–verb agreement</b>: dua subjek yang dihubungkan <b>and</b> menjadi jamak, sehingga kata kerjanya tanpa -s. Pola <b>make + objek + adjektiva</b> = membuat (sesuatu) menjadi (sifat).</p><h4>Langkah</h4><ol><li>Subjek: \"Their low price <b>and</b> small size\" → dua hal → jamak.</li><li>Fakta umum (present), subjek jamak → <b>make</b>.</li><li>\"make them popular\" = membuat skuter itu populer.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> makes: jebakan, karena kata terdekat \"size\" tunggal. Subjeknya tetap gabungan dua hal.</li><li><b>C</b> is making: auxiliary tunggal untuk subjek jamak.</li><li><b>D</b> has made: auxiliary tunggal.</li><li><b>E</b> was made = pasif dan tunggal; tidak cocok dengan objek \"them\".</li></ul><p class=\"tips\"><b>Tips:</b> tutup kata-kata di antara subjek dan rumpang, lalu tanyakan \"siapa yang melakukan?\" Cara ini menghindari jebakan kata terdekat.</p>"
    },
    {
      id: "inh-04", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (4)?",
      opsi: ["However", "Moreover", "Because of", "Although", "Instead"],
      kunci: 1,
      hint: "Kalimat sebelumnya menyebut kelebihan skuter (murah, kecil). Kalimat setelahnya menyebut kelebihan LAIN (tanpa asap). Hubungannya menambah atau mempertentangkan?",
      pembahasan: "<h4>Konsep</h4><p>Kata penghubung antarkalimat (<i>conjunctive adverbs</i>) menunjukkan hubungan makna: <b>penambahan</b> (moreover, furthermore, in addition), <b>pertentangan</b> (however, instead), <b>akibat</b> (therefore). Kata ini diikuti koma dan kalimat lengkap.</p><h4>Langkah</h4><p>Kalimat sebelumnya: harganya murah dan ukurannya kecil (kelebihan). Kalimat (4): tidak menghasilkan asap knalpot (<b>kelebihan lain</b>) → penambahan → <b>Moreover</b> (selain itu).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> However = pertentangan, padahal kedua kalimat sama-sama positif.</li><li><b>C</b> Because of harus diikuti kata benda, bukan koma + kalimat.</li><li><b>D</b> Although menggabungkan dua klausa dalam satu kalimat dan tidak diikuti koma seperti ini.</li><li><b>E</b> Instead = \"sebagai gantinya\", maknanya tidak cocok.</li></ul><p class=\"tips\"><b>Tips:</b> tentukan dulu hubungan dua kalimat (tambah, lawan, sebab, akibat), baru pilih kata penghubungnya. Perhatikan juga tanda baca setelah rumpang.</p>"
    },
    {
      id: "inh-05", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (5)?",
      opsi: ["and", "but also", "either", "neither", "or"],
      kunci: 1,
      hint: "Kata \"not only\" selalu berpasangan dengan kata tertentu (correlative conjunction).",
      pembahasan: "<h4>Konsep</h4><p><b>Correlative conjunction</b> adalah pasangan tetap yang tidak boleh ditukar: <b>not only … but also</b>, either … or, neither … nor, both … and.</p><h4>Langkah</h4><p>\"electric scooters are <b>not only</b> convenient …(5)… risky\" → pasangan <i>not only</i> adalah <b>but also</b> (tidak hanya praktis, tetapi juga berisiko).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> and berpasangan dengan <i>both</i>.</li><li><b>C</b> either berpasangan dengan <i>or</i> dan diletakkan di depan.</li><li><b>D</b> neither berpasangan dengan <i>nor</i>.</li><li><b>E</b> or berpasangan dengan <i>either</i>.</li></ul><p class=\"tips\"><b>Tips:</b> begitu melihat salah satu kata pasangan di kalimat (<i>not only, either, neither, both</i>), jawabannya hampir pasti pasangannya.</p>"
    },

    // ---------- Text B: Recount ----------
    {
      id: "inh-06", bab: TU, level: 2, tipe: "kategori", stimulus: TB,
      soal: "Based on the text, decide whether each statement is TRUE (Benar) or FALSE (Salah).",
      pernyataan: [
        "The writer had worked with wild animals before joining the programme.",
        "The volunteers used bright flashlights to find the turtles.",
        "The eggs were moved to a hatchery to protect them from predators and collectors.",
        "The experience changed the writer's daily habits."
      ],
      kunci: [false, false, true, true],
      hint: "Cari kata \"never\" di paragraf 1 dan \"not allowed\" di paragraf 2.",
      pembahasan: "<h4>Strategi</h4><p>Cocokkan setiap pernyataan dengan kalimat teks. Waspadai bentuk negatif (<i>never, not allowed</i>) yang membalik makna.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Salah.</i> \"but I had <b>never</b> worked with wild ones before\".</li><li><b>2</b> <i>Salah.</i> \"We were <b>not allowed</b> to use bright flashlights\".</li><li><b>3</b> <i>Benar.</i> \"moved the eggs to a protected hatchery, where they were <b>safe from predators and illegal collectors</b>\".</li><li><b>4</b> <i>Benar.</i> \"Since then, I have <b>stopped using single-use plastic bags</b>\". Kebiasaan sehari-harinya berubah.</li></ul><p class=\"tips\"><b>Tips:</b> <i>Since then</i> + present perfect (<i>have stopped, have started</i>) menunjukkan perubahan yang berlanjut sampai sekarang. Itulah bukti perubahan kebiasaan.</p>"
    },
    {
      id: "inh-07", bab: IN, level: 1, tipe: "pg", stimulus: TB,
      soal: "The underlined word \"<u>them</u>\" in paragraph 2 refers to …",
      opsi: ["the volunteers", "the rangers", "the turtles", "the flashlights", "the eggs"],
      kunci: 2,
      hint: "Siapa yang bisa \"kembali ke laut sebelum bertelur\"?",
      pembahasan: "<h4>Strategi</h4><p>Kata ganti (<i>reference</i>) merujuk ke kata benda <b>sebelumnya</b> yang cocok jumlahnya (tunggal/jamak) dan logis maknanya. Coba ganti kata ganti itu dengan setiap opsi.</p><h4>Bukti di teks</h4><p>\"the light could confuse <b>the turtles</b> and make <b>them</b> return to the sea before laying <b>their</b> eggs.\" Yang kembali ke laut dan bertelur adalah penyu → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>/<b>B</b> Relawan atau ranger tidak bertelur.</li><li><b>D</b> Senter tidak kembali ke laut.</li><li><b>E</b> Telur tidak bisa \"kembali ke laut sebelum bertelur\".</li></ul><p class=\"tips\"><b>Tips:</b> baca sampai akhir kalimat. Frasa \"before laying their eggs\" langsung menunjukkan bahwa <i>them</i> adalah penyu betina.</p>"
    },
    {
      id: "inh-08", bab: IN, level: 2, tipe: "pg", stimulus: TB,
      soal: "The underlined word \"<u>fragile</u>\" in paragraph 3 is closest in meaning to …",
      opsi: ["strong", "easily harmed", "valuable", "very short", "mysterious"],
      kunci: 1,
      hint: "Penulis baru saja mendengar bahwa hanya 1 dari 1.000 tukik yang bertahan hidup. Kehidupan seperti apa yang digambarkan?",
      pembahasan: "<h4>Strategi</h4><p>Tebak makna kata sulit dari <b>konteks sebab-akibat</b> di sekitarnya, lalu uji setiap opsi dengan menggantikannya dalam kalimat.</p><h4>Bukti di teks</h4><p>\"only about <b>one in a thousand</b> of them would survive … Hearing that, I realised how <b>fragile</b> their lives were.\" Hampir semua mati → hidupnya mudah terancam atau rapuh → <b>easily harmed</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> strong = antonimnya.</li><li><b>C</b> valuable (berharga) mungkin benar secara umum, tetapi tidak sesuai konteks \"1 dari 1.000 bertahan\".</li><li><b>D</b> very short: hidup tukik yang selamat bisa panjang; fokusnya kerentanan.</li><li><b>E</b> mysterious tidak didukung konteks.</li></ul><p class=\"tips\"><b>Tips:</b> <i>fragile</i> sering tertulis di kardus barang pecah belah (\"FRAGILE\" = mudah pecah). Maknanya sama: mudah rusak.</p>"
    },
    {
      id: "inh-09", bab: IN, level: 3, tipe: "mcma", stimulus: TB,
      soal: "Which THREE statements are supported by the text? (Choose ALL correct answers.)",
      opsi: [
        "Only a very small fraction of hatchlings reach adulthood.",
        "The number of turtle nests has declined over the last decade.",
        "The writer had mixed feelings before starting the programme.",
        "The rangers collect turtle eggs in order to sell them.",
        "The nest hatched on the writer's first night."
      ],
      kunci: [0, 1, 2],
      hint: "Periksa setiap opsi dengan bukti di teks. Hati-hati dengan opsi yang memutarbalikkan informasi (siapa yang menjual telur? malam ke berapa telur menetas?).",
      pembahasan: "<h4>Strategi</h4><p>\"Which THREE\" → pilih tepat tiga yang punya bukti. Perhatikan parafrase: teks dan opsi sering memakai kata berbeda untuk makna yang sama.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"only about one in a thousand of them would survive to adulthood\" (<i>small fraction</i> = bagian kecil).</li><li><b>B</b> ✔ \"the number of nests had dropped by almost half in the last ten years\" (<i>decade</i> = sepuluh tahun).</li><li><b>C</b> ✔ \"I felt both excited and nervous\" (<i>mixed feelings</i> = perasaan campur aduk).</li><li><b>D</b> ✘ Ranger justru melindungi telur dari \"illegal collectors\".</li><li><b>E</b> ✘ Menetas pada \"my <b>fifth</b> night\".</li></ul><p class=\"tips\"><b>Tips:</b> latih kosakata parafrase seperti <i>declined = dropped</i>, <i>decade = ten years</i>, <i>mixed feelings = both … and …</i>.</p>"
    },
    {
      id: "inh-10", bab: EV, level: 3, tipe: "pg", stimulus: TB,
      soal: "Why does the writer mention that \"only about one in a thousand\" hatchlings would survive?",
      opsi: [
        "To show that the conservation centre had failed",
        "To explain what made the writer realise how vulnerable the turtles are",
        "To persuade readers to keep baby turtles as pets",
        "To compare sea turtles with other wild animals",
        "To describe the size of the hatchery"
      ],
      kunci: 1,
      hint: "Perhatikan kalimat tepat setelahnya: \"Hearing that, I realised …\".",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan \"Why does the writer mention …?\" menanyakan <b>fungsi</b> sebuah informasi dalam teks. Lihat kalimat <b>tepat sesudahnya</b> untuk tahu efek yang dimaksud penulis.</p><h4>Bukti di teks</h4><p>Fakta \"1 dari 1.000\" langsung diikuti \"<b>Hearing that, I realised how fragile their lives were.</b>\" → fakta itu menjelaskan apa yang membuat penulis sadar betapa rentannya penyu → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tingkat bertahan hidup yang rendah adalah kondisi alami, bukan kegagalan pusat konservasi.</li><li><b>C</b> Tidak ada ajakan memelihara tukik; itu justru bertentangan dengan konservasi.</li><li><b>D</b> Tidak ada perbandingan dengan hewan lain.</li><li><b>E</b> Ukuran penangkaran tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> informasi angka di teks <i>recount</i> biasanya disebut untuk memicu perasaan atau kesadaran tokoh. Cari reaksi tokoh setelahnya.</p>"
    },

    // ---------- Text C: Procedure ----------
    {
      id: "inh-11", bab: TU, level: 1, tipe: "pg", stimulus: TC,
      soal: "Why should meat, bones, and oily food NOT be added to the compost?",
      opsi: [
        "They make the compost dry too quickly.",
        "They produce bad smells and attract rats.",
        "They stop air from flowing into the container.",
        "They are already used as brown materials.",
        "They make the compost ready too early."
      ],
      kunci: 1,
      hint: "Cari kalimat yang dimulai dengan \"Avoid adding …\".",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan detail dengan kata kunci (<i>meat, bones, oily food</i>) → scanning ke kalimat yang memuat kata itu, lalu cari penanda alasan <b>because</b>.</p><h4>Bukti di teks</h4><p>\"Avoid adding meat, bones, or oily food <b>because they produce bad smells and attract rats</b>.\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Kekeringan dibahas terpisah (tambahkan air).</li><li><b>C</b> Aliran udara diatur oleh lubang wadah.</li><li><b>D</b> Bahan cokelat adalah daun kering, ranting, dan kertas.</li><li><b>E</b> Tidak ada hubungan dengan waktu matang.</li></ul><p class=\"tips\"><b>Tips:</b> soal yang memakai kata NOT dengan huruf kapital biasanya jawabannya ada di kalimat larangan (<i>Avoid…, Do not…</i>).</p>"
    },
    {
      id: "inh-12", bab: IN, level: 2, tipe: "pg", stimulus: TC,
      soal: "What is the main purpose of the text?",
      opsi: [
        "To persuade readers to stop producing kitchen waste",
        "To explain the steps for making compost at home",
        "To describe different types of microorganisms",
        "To report the results of a composting experiment",
        "To compare compost with chemical fertiliser"
      ],
      kunci: 1,
      hint: "Perhatikan judul dan bentuk kalimat-kalimatnya: banyak kalimat perintah (choose, put, stir, sift).",
      pembahasan: "<h4>Strategi</h4><p>Tujuan teks ditentukan oleh <b>jenis teks</b>. Judul berbentuk kegiatan (\"Making Compost at Home\") + kalimat perintah berurutan (<i>choose, put, stir, sift</i>) = teks <b>procedure</b>.</p><h4>Bukti di teks</h4><p>Teks berisi urutan langkah dari persiapan sampai kompos siap dipakai → tujuannya menjelaskan langkah membuat kompos → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Teks tidak membujuk untuk berhenti menghasilkan sampah, tetapi mengolahnya.</li><li><b>C</b> Mikroorganisme hanya disebut sekilas.</li><li><b>D</b> Tidak ada hasil percobaan.</li><li><b>E</b> Pupuk kimia tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> banyak kalimat perintah (imperatif) di awal kalimat hampir selalu berarti teks procedure.</p>"
    },
    {
      id: "inh-13", bab: TU, level: 2, tipe: "pg", stimulus: TC,
      soal: "Match each action with its category." + KAT +
        "<br><br>1) Choosing a shady spot<br>2) Adding a layer of green materials on top of brown materials<br>3) Stirring the pile every week<br>4) Adding brown materials when the pile is too wet<br>5) Making small holes in the container",
      opsi: ["A, B, C, C, A", "A, B, B, C, A", "B, A, C, C, A", "A, C, B, C, B", "A, B, C, B, A"],
      kunci: 0,
      hint: "Persiapan = sebelum mengisi wadah. Proses pelapisan = saat menyusun bahan. Perawatan = yang dilakukan rutin setelah tumpukan jadi.",
      pembahasan: "<h4>Strategi</h4><p>Soal mencocokkan kategori: tentukan kategori setiap aksi <b>satu per satu</b>, lalu cari opsi yang urutannya sama persis. Biasanya cukup menemukan satu aksi yang membedakan opsi.</p><h4>Langkah</h4><ol><li>Memilih tempat teduh → <b>A</b> (persiapan, dilakukan sebelum mulai).</li><li>Lapisan hijau di atas cokelat → <b>B</b> (proses pelapisan).</li><li>Mengaduk setiap minggu → <b>C</b> (perawatan rutin).</li><li>Menambah bahan cokelat jika terlalu basah → <b>C</b> (perawatan, menjaga kelembapan).</li><li>Membuat lubang di wadah → <b>A</b> (persiapan wadah).</li></ol><p>Urutan: A, B, C, C, A → opsi <b>A</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Aksi 3 dimasukkan ke pelapisan, padahal mengaduk adalah perawatan.</li><li><b>C</b> Aksi 1 dan 2 tertukar.</li><li><b>D</b> Aksi 2, 3, 5 salah kategori.</li><li><b>E</b> Aksi 4 dianggap pelapisan. Jebakan: walau menambah bahan, tujuannya memperbaiki kelembapan (perawatan).</li></ul><p class=\"tips\"><b>Tips:</b> lihat <i>tujuan</i> aksi, bukan sekadar bentuk kegiatannya. \"Menambah bahan cokelat\" di sini untuk perawatan, bukan menyusun lapisan.</p>"
    },
    {
      id: "inh-14", bab: IN, level: 3, tipe: "pg", stimulus: TC,
      soal: "What would most likely happen if the compost pile were never stirred?",
      opsi: [
        "The compost would be ready in less than a month.",
        "The waste would break down more slowly because the microorganisms would get less oxygen.",
        "The pile would immediately become dark brown and crumbly.",
        "Rats would no longer be attracted to the pile.",
        "The green materials would turn into brown materials."
      ],
      kunci: 1,
      hint: "Teks menjelaskan tujuan mengaduk: \"to add oxygen, which helps …\". Apa akibatnya jika langkah itu dilewati?",
      pembahasan: "<h4>Strategi</h4><p>Soal \"What would happen if …\" → temukan <b>fungsi</b> langkah itu di teks, lalu balikkan. Jika langkah X menyebabkan Y, tanpa X hasilnya kebalikan Y.</p><h4>Bukti di teks</h4><p>\"stir the pile <b>to add oxygen, which helps the microorganisms break down the waste faster</b>.\" Tanpa diaduk → oksigen kurang → penguraian <b>lebih lambat</b> → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Terbalik: kompos justru matang lebih lama.</li><li><b>C</b> Tidak mungkin langsung jadi; normalnya butuh 2–3 bulan.</li><li><b>D</b> Tikus tertarik oleh daging dan makanan berminyak, bukan karena diaduk.</li><li><b>E</b> Bahan hijau dan cokelat adalah jenis bahan, bukan hasil pengadukan.</li></ul><p class=\"tips\"><b>Tips:</b> jawaban yang benar biasanya memakai kata dari teks yang dibalik (<i>faster → more slowly</i>) dan menyebut alasannya (<i>less oxygen</i>).</p>"
    },
    {
      id: "inh-15", bab: EV, level: 3, tipe: "mcma", stimulus: TC,
      soal: "Which THREE practices are recommended in the text? (Choose ALL correct answers.)",
      opsi: [
        "Stirring the pile every week",
        "Keeping the pile as damp as a squeezed sponge",
        "Adding leftover chicken bones for extra nutrients",
        "Placing the container in a shady spot",
        "Sealing the container tightly so no air can enter"
      ],
      kunci: [0, 1, 3],
      hint: "Dua opsi justru bertentangan dengan teks: satu tentang jenis bahan, satu tentang aliran udara.",
      pembahasan: "<h4>Strategi</h4><p>\"Recommended in the text\" → pilih yang <b>dianjurkan</b> dan buang yang <b>dilarang</b> atau bertentangan dengan teks.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"Every week, stir the pile\".</li><li><b>B</b> ✔ \"Keep the pile as damp as a squeezed sponge\".</li><li><b>C</b> ✘ \"Avoid adding meat, <b>bones</b>…\" → tulang ayam dilarang.</li><li><b>D</b> ✔ \"choose a shady spot\".</li><li><b>E</b> ✘ Wadah justru harus berlubang \"so that air can flow in\".</li></ul><p class=\"tips\"><b>Tips:</b> opsi pengecoh sering terdengar masuk akal (tulang = nutrisi ekstra, wadah rapat = tidak bau), tetapi bertentangan langsung dengan teks. Selalu kembali ke teks.</p>"
    },

    // ---------- Text D: Exposition ----------
    {
      id: "inh-16", bab: IN, level: 2, tipe: "pg", stimulus: TD,
      soal: "What is the writer's main argument?",
      opsi: [
        "Teenagers should go to bed earlier instead of changing school times.",
        "Schools should consider starting later because it helps students get enough sleep and learn better.",
        "A later school start would cause serious traffic problems.",
        "Indonesian schools should follow all American education policies.",
        "Students who arrive late should be punished."
      ],
      kunci: 1,
      hint: "Tesis ada di paragraf 1 (\"In my view …\") dan ditegaskan di paragraf 5 (\"In short …\").",
      pembahasan: "<h4>Strategi</h4><p>Argumen utama penulis = <b>tesis</b>, biasanya di paragraf 1 dengan penanda <i>In my view</i> dan diulang di paragraf terakhir (<i>In short</i>). Jangan tertukar dengan pendapat pihak lain (<i>critics</i>).</p><h4>Bukti di teks</h4><p>P1: \"<b>In my view</b>, this change deserves serious consideration.\" P5: a later start \"is about helping them learn when their brains are ready.\" Alasannya (P2–P3): tidur cukup → belajar lebih baik → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Bertentangan dengan P2: jam biologis remaja memang bergeser, bukan soal disiplin tidur.</li><li><b>C</b> Itu pendapat <i>critics</i> (P4), dan penulis menyanggahnya.</li><li><b>D</b> Penulis hanya mengutip penelitian AS sebagai bukti, bukan menyuruh mengikuti semua kebijakan AS.</li><li><b>E</b> Tidak dibahas.</li></ul><p class=\"tips\"><b>Tips:</b> kalimat yang diawali \"Critics say…\" atau \"Some people believe…\" adalah pendapat pihak lain, bukan penulis.</p>"
    },
    {
      id: "inh-17", bab: EV, level: 3, tipe: "kategori", stimulus: TD,
      soal: "Decide whether each sentence from the text is a FACT (Benar) or an OPINION (Salah).",
      pernyataan: [
        "\"Many teenagers in Indonesia start school at 6.30 or 7.00 a.m.\"",
        "\"In my view, this change deserves serious consideration.\"",
        "\"The American Academy of Pediatrics recommends that middle and high schools start no earlier than 8.30 a.m.\"",
        "\"A later school start is not about making students lazy.\""
      ],
      kunci: [true, false, true, false],
      hint: "Fakta dapat dicek kebenarannya (data, rekomendasi lembaga). Opini berisi penilaian penulis.",
      pembahasan: "<h4>Strategi</h4><p><b>Fakta</b> dapat diverifikasi (data, kebijakan, rekomendasi resmi). <b>Opini</b> berisi penilaian, sering ditandai <i>In my view, should, deserves, best</i>, atau penafsiran penulis.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar (fakta).</i> Jam masuk sekolah bisa dicek.</li><li><b>2</b> <i>Salah (opini).</i> \"In my view\" + \"deserves\" = penilaian pribadi.</li><li><b>3</b> <i>Benar (fakta).</i> Isi rekomendasi resmi lembaga bisa diverifikasi. Walau isinya sebuah saran, <i>fakta bahwa lembaga itu merekomendasikan</i> bisa dicek.</li><li><b>4</b> <i>Salah (opini).</i> Penafsiran penulis tentang makna perubahan jam sekolah.</li></ul><p class=\"tips\"><b>Tips:</b> \"X recommends that …\" adalah fakta (laporan tentang rekomendasi), sedangkan \"We should …\" adalah opini. Bedakan <i>melaporkan</i> saran dan <i>memberi</i> saran.</p>"
    },
    {
      id: "inh-18", bab: EV, level: 3, tipe: "pg", stimulus: TD,
      soal: "How does the writer respond to the critics in paragraph 4?",
      opsi: [
        "By ignoring their concerns completely",
        "By admitting their concerns are valid and then offering possible solutions",
        "By agreeing that schools should not change their start times",
        "By attacking the critics personally",
        "By changing the topic to homework"
      ],
      kunci: 1,
      hint: "Perhatikan struktur kalimat: \"These concerns are understandable, but …\".",
      pembahasan: "<h4>Strategi</h4><p>Teknik argumentasi <b>konsesi–sanggahan</b> (<i>concession–rebuttal</i>): penulis mengakui keberatan lawan dulu, lalu menjawabnya. Penandanya: <i>It is true that… / … understandable, <b>but</b>…</i></p><h4>Bukti di teks</h4><p>\"These concerns are <b>understandable</b>\" (mengakui), \"<b>but</b> they could be solved with flexible schedules and better school transport\" (memberi solusi) → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Penulis tidak mengabaikan; ia justru menyebut dan menanggapi.</li><li><b>C</b> Penulis tetap mendukung perubahan jam masuk.</li><li><b>D</b> Tidak ada serangan pribadi.</li><li><b>E</b> Topik tetap jam masuk sekolah.</li></ul><p class=\"tips\"><b>Tips:</b> konsesi membuat argumen terdengar adil dan lebih meyakinkan. Teknik ini sering ditanyakan di soal evaluasi teks argumentasi.</p>"
    },
    {
      id: "inh-19", bab: EV, level: 3, tipe: "pg", stimulus: TD,
      soal: "Which additional evidence would most strengthen the writer's argument for schools in Indonesia?",
      opsi: [
        "A survey showing that most teenagers like waking up early",
        "Data from Indonesian schools that moved their start time to 8.00 a.m. and saw better attendance and test scores",
        "A report about traffic jams in Jakarta",
        "An interview with a parent who works night shifts",
        "A list of countries with long school holidays"
      ],
      kunci: 1,
      hint: "Bukti saat ini berasal dari Amerika. Bukti apa yang paling langsung menunjukkan bahwa ide ini juga berhasil di Indonesia?",
      pembahasan: "<h4>Strategi</h4><p>Bukti tambahan terkuat harus (1) <b>mendukung</b> tesis, (2) <b>relevan</b> dengan konteks yang dibahas (sekolah di Indonesia), dan (3) menunjukkan <b>hasil nyata</b>.</p><h4>Bukti di teks</h4><p>Semua bukti di teks masih dari AS. Data sekolah Indonesia yang memundurkan jam masuk lalu kehadiran dan nilainya membaik akan menutup celah itu → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Justru melemahkan: remaja suka bangun pagi.</li><li><b>C</b> Mendukung pihak kontra (kemacetan).</li><li><b>D</b> Satu wawancara tidak kuat dan arahnya tidak jelas.</li><li><b>E</b> Libur panjang tidak relevan dengan jam masuk.</li></ul><p class=\"tips\"><b>Tips:</b> perhatikan frasa tambahan di soal (\"for schools <b>in Indonesia</b>\"). Itu petunjuk bahwa bukti yang dicari harus lokal.</p>"
    },
    {
      id: "inh-20", bab: TU, level: 2, tipe: "mcma", stimulus: TD,
      soal: "Which statements are supported by the text? (Choose ALL correct answers.)",
      opsi: [
        "Teenagers' body clocks shift during puberty.",
        "The writer believes a later start would make students lazy.",
        "Critics are worried about traffic and parents' work schedules.",
        "A later start improved attendance in one US school district.",
        "All Indonesian schools already start at 8.00 a.m."
      ],
      kunci: [0, 2, 3],
      hint: "Cocokkan setiap opsi dengan paragraf 2, 3, 4, dan 5.",
      pembahasan: "<h4>Strategi</h4><p>Cek setiap opsi ke paragraf yang relevan. Opsi yang memakai kata dari teks tetapi <b>maknanya dibalik</b> adalah pengecoh utama.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ P2: \"During puberty, the body clock shifts\".</li><li><b>B</b> ✘ P5 menyatakan sebaliknya: \"<b>not</b> about making students lazy\".</li><li><b>C</b> ✔ P4: \"traffic jams\" dan \"harder for parents to drop their children off before work\".</li><li><b>D</b> ✔ P3: \"students' attendance improved\".</li><li><b>E</b> ✘ P1: banyak sekolah masuk pukul 6.30 atau 7.00.</li></ul><p class=\"tips\"><b>Tips:</b> opsi B memakai kata <i>lazy</i> yang memang ada di teks, tetapi teks justru menyangkalnya. Perhatikan kata <i>not</i> di dekatnya.</p>"
    }
  ]};
})();
