// Bank soal Bahasa Inggris — soal grup berbasis teks, mengikuti kerangka asesmen TKA SMA (Pusmendik).
// "bab" = kompetensi: Pemahaman Tekstual → Pemahaman Inferensial → Evaluasi & Apresiasi.
// Teks diurutkan dari yang pendek/sederhana ke yang panjang/kompleks.
(function () {
  var TU = "Pemahaman Tekstual", IN = "Pemahaman Inferensial", EV = "Evaluasi & Apresiasi";

  var T1 = "<p><b>Text 1</b></p>" +
    "<p style='text-align:center'><b>ATTENTION ALL STUDENTS</b></p>" +
    "<p>The school library will be closed from Monday, 10 November to Wednesday, 12 November for the annual book inventory. " +
    "During this period, students can return borrowed books to the drop box in front of the Teachers' Room.</p>" +
    "<p>The library will reopen on Thursday, 13 November at 07.00 a.m. Students who need reference books for the upcoming exam " +
    "may borrow them on Friday, 7 November, with a maximum of three books per student.</p>" +
    "<p style='text-align:right'><i>Head of the Library</i></p>";

  var T2 = "<p><b>Text 2</b></p>" +
    "<p><b>From:</b> Nadia<br><b>To:</b> Kevin<br><b>Subject:</b> Science Fair Team</p>" +
    "<p>Hi Kevin,</p>" +
    "<p>Thanks for agreeing to join my team for the Science Fair! As we discussed, our project is a simple water filter made from sand, gravel, and charcoal. " +
    "Mrs. Lestari approved our proposal yesterday, but she asked us to add a test showing how clean the water is before and after filtering.</p>" +
    "<p>Could you bring the plastic bottles and the charcoal on Saturday? I will prepare the sand and gravel. Let's meet at my house at 9 a.m. " +
    "If you can't come, please let me know by Friday so I can ask Dimas to help instead.</p>" +
    "<p>See you!<br>Nadia</p>";

  var T3 = "<p><b>Text 3</b></p>" +
    "<p>(1) The Komodo dragon (<i>Varanus komodoensis</i>) is the largest living lizard in the world. It is found only on a few islands in Indonesia, " +
    "including Komodo, Rinca, and Flores. An adult Komodo can grow up to three metres long and weigh more than 70 kilograms.</p>" +
    "<p>(2) Komodo dragons have long, flat heads, strong legs, and thick, rough skin. Their forked tongues, which they flick in and out constantly, " +
    "help them <u>detect</u> the smell of food from several kilometres away. Although they look slow, they can run up to 20 kilometres per hour for short distances.</p>" +
    "<p>(3) These reptiles are carnivores. They eat almost anything, from deer and wild pigs to dead animals. Scientists have found that their lower jaws " +
    "have venom glands. A single bite can cause a prey animal's blood pressure to drop, making it weak.</p>" +
    "<p>(4) Today, Komodo dragons are listed as an endangered species. Their survival is threatened by habitat loss, rising sea levels, " +
    "and illegal hunting of the animals they eat.</p>";

  var T4 = "<p><b>Text 4</b></p>" +
    "<p>Last July, my cousins and I climbed Mount Prau in Central Java. We left our homestay in Dieng at 1 a.m. so that we could reach the summit before sunrise. " +
    "The trail was steep and slippery because it had rained the night before, so we walked slowly and held on to tree roots.</p>" +
    "<p>After about three hours, we finally arrived at the top. It was freezing — the temperature was almost 5°C — and my fingers felt numb. " +
    "However, when the sun rose behind Mount Sindoro, all our tiredness disappeared. The sky turned orange and pink, and a sea of clouds stretched below us.</p>" +
    "<p>We stayed at the summit for an hour, taking photos and drinking hot tea from our flasks. On the way down, my younger cousin Raka twisted his ankle " +
    "because he was running. We had to carry his backpack and walk even more slowly. We reached the homestay at noon, exhausted but happy. " +
    "It was the most unforgettable trip I have ever had.</p>";

  var T5 = "<p><b>Text 5</b></p>" +
    "<p><b>How to Make a Simple Rain Gauge</b></p>" +
    "<p><b>Materials:</b> a clear 1.5-litre plastic bottle, scissors, a ruler, a permanent marker, tape, and some small stones.</p>" +
    "<p><b>Steps:</b><br>" +
    "1. Cut off the top third of the bottle using the scissors.<br>" +
    "2. Put some small stones at the bottom of the bottle so that it does not fall over in the wind.<br>" +
    "3. Pour water into the bottle until it just covers the stones. Mark this water level as \"zero\".<br>" +
    "4. Tape the ruler to the side of the bottle, with its zero mark at the \"zero\" line.<br>" +
    "5. Turn the top part of the bottle upside down and place it into the bottle like a funnel. Tape the edges together.<br>" +
    "6. Place the rain gauge in an open area, away from trees and buildings.<br>" +
    "7. Check the water level at the same time every day and record it. After recording, pour out the water down to the zero line.</p>";

  var T6 = "<p><b>Text 6</b></p>" +
    "<p>Once upon a time, a mouse deer named Kancil lived in a forest near a wide river. One day, he saw ripe fruits on the trees across the river, " +
    "but the river was full of hungry crocodiles.</p>" +
    "<p>Kancil thought hard. Then he walked to the riverbank and shouted, \"Crocodiles! The King has ordered me to count all of you. " +
    "He wants to give each of you a piece of meat!\" The crocodiles were excited. Their leader asked, \"How will you count us?\" " +
    "\"Line up from this side of the river to the other side,\" said Kancil.</p>" +
    "<p>The crocodiles quickly lined up. Kancil jumped onto the back of the first crocodile and counted, \"One… two… three…\" " +
    "He kept jumping until he reached the other side. Then he laughed, \"Thank you for the bridge, my friends! There is no meat. I just wanted to cross the river.\"</p>" +
    "<p>The crocodiles were furious, but Kancil had already run into the forest to eat the fruits. However, the leader of the crocodiles whispered to the others, " +
    "\"Kancil will come back to drink at this river someday. We will be waiting.\"</p>";

  var T7 = "<p><b>Text 7</b></p>" +
    "<p>(1) A tsunami is a series of huge ocean waves caused by a sudden movement of the sea floor. Most tsunamis happen when an underwater earthquake " +
    "occurs along a subduction zone, where one tectonic plate slides beneath another. When the plates suddenly shift, the sea floor rises or drops, " +
    "pushing a large amount of water upward. This water then spreads out in all directions as waves.</p>" +
    "<p>(2) In the deep ocean, tsunami waves may be less than one metre high, so ships hardly notice them. However, they travel extremely fast — " +
    "up to 800 kilometres per hour, about as fast as a jet plane. As the waves approach shallow water near the coast, they slow down, " +
    "and the water piles up, so their height increases dramatically, sometimes to more than 30 metres.</p>" +
    "<p>(3) One natural warning sign of a tsunami is when the sea suddenly pulls back from the shore, exposing the sea floor. People should not go " +
    "to the beach to look; instead, they should move to higher ground immediately. Besides earthquakes, tsunamis can also be triggered by volcanic " +
    "eruptions, underwater landslides, and, very rarely, meteorite impacts.</p>";

  var T8 = "<p><b>Text 8</b></p>" +
    "<p style='text-align:center'><b>Should Smartphones Be Banned in Schools?</b></p>" +
    "<p>(1) Several countries, including the Netherlands and France, have restricted the use of smartphones in classrooms. Supporters of the ban " +
    "believe it helps students focus. In my opinion, schools should not ban smartphones completely, but they should control how phones are used.</p>" +
    "<p>(2) First, smartphones can be powerful learning tools. Students can use them to search for information, watch science videos, and use " +
    "dictionary apps. A survey by our school's student council found that 68% of students use their phones for schoolwork at least three times a week.</p>" +
    "<p>(3) Second, phones are important for safety. Parents often need to contact their children, especially when plans change after school.</p>" +
    "<p>(4) However, it is true that phones can be distracting. Social media and games can easily take students' attention away from lessons. " +
    "Therefore, the best solution is a clear rule: phones are kept in a box during lessons and can only be used when the teacher allows it.</p>" +
    "<p>(5) In conclusion, smartphones are not the enemy. With the right rules, they can help students learn better instead of distracting them.</p>";

  var T9 = "<p><b>Text 9</b></p>" +
    "<p>The table below shows the results of a survey on plastic use among <b>200 students</b> at SMA Harapan, conducted in early September.</p>" +
    "<table><tr><th>Habit</th><th>Number of students</th></tr>" +
    "<tr><td style='text-align:left'>Bring a reusable water bottle every day</td><td>124</td></tr>" +
    "<tr><td style='text-align:left'>Bring a reusable bag when shopping</td><td>86</td></tr>" +
    "<tr><td style='text-align:left'>Refuse plastic straws</td><td>58</td></tr>" +
    "<tr><td style='text-align:left'>Separate plastic waste at home</td><td>40</td></tr></table>" +
    "<p>After the survey, the student council started a \"Bring Your Own Bottle\" campaign and installed two free drinking-water stations in the school canteen. " +
    "In the first month of the campaign, the canteen reported selling 35% fewer bottled drinks than in the month before.</p>" +
    "<p>The student council then announced: <i>\"Our campaign has successfully reduced plastic waste at school.\"</i></p>";

  window.BANK_SOAL = window.BANK_SOAL || {};
  window.BANK_SOAL.inggris = { soal: [

    // ---------- Text 1: Notice ----------
    {
      id: "ing-01", bab: TU, level: 1, tipe: "pg", stimulus: T1,
      soal: "Why will the library be closed?",
      opsi: [
        "Because the students are having an exam",
        "Because the library staff will check all the books",
        "Because the library is being renovated",
        "Because the teachers are using the library",
        "Because it is a national holiday"
      ],
      kunci: 1,
      hint: "Cari kata \"for\" setelah tanggal penutupan. Apa arti \"annual book inventory\"?",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan <b>\"Why …?\"</b> meminta alasan. Cari kata penanda sebab/tujuan di teks, seperti <i>because, for, so that, due to</i>. Di sini penandanya <b>\"for\"</b> (untuk/karena).</p><h4>Bukti di teks</h4><p>\"The school library will be closed … <b>for the annual book inventory</b>.\" <i>Inventory</i> = pendataan atau pemeriksaan seluruh stok. Jadi petugas akan memeriksa semua buku → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Ujian memang disebut, tetapi sebagai alasan meminjam buku referensi, bukan alasan tutup.</li><li><b>C</b> Tidak ada kata <i>renovated/repair</i>.</li><li><b>D</b> Teachers' Room hanya disebut sebagai lokasi drop box.</li><li><b>E</b> Tidak ada hari libur yang disebut.</li></ul><p class=\"tips\"><b>Tips:</b> pengecoh sering memakai kata yang <i>memang ada</i> di teks (exam, teachers) tetapi dipasangkan dengan informasi yang salah. Cocokkan maknanya, jangan hanya kata yang sama.</p>"
    },
    {
      id: "ing-02", bab: TU, level: 1, tipe: "pg", stimulus: T1,
      soal: "Where can students return their borrowed books while the library is closed?",
      opsi: [
        "At the library counter",
        "At the head of the library's office",
        "In the drop box in front of the Teachers' Room",
        "In their classrooms",
        "They cannot return books until 13 November"
      ],
      kunci: 2,
      hint: "Cari kalimat yang dimulai dengan \"During this period …\".",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan <b>\"Where …?\"</b> dengan detail spesifik → <i>scanning</i>: cari kata kunci soal (<i>return, borrowed books</i>) di teks, lalu baca kalimat itu dengan teliti.</p><h4>Bukti di teks</h4><p>\"During this period, students can <b>return borrowed books to the drop box in front of the Teachers' Room</b>.\" → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Perpustakaan (termasuk konternya) sedang tutup.</li><li><b>B</b> \"Head of the Library\" hanya nama pengirim pengumuman.</li><li><b>D</b> Ruang kelas tidak disebut.</li><li><b>E</b> Buku justru <i>bisa</i> dikembalikan lewat drop box selama perpustakaan tutup.</li></ul><p class=\"tips\"><b>Tips:</b> <i>during this period</i> = selama masa itu, yaitu masa perpustakaan tutup. Frasa penunjuk waktu seperti ini menghubungkan informasi antarkalimat.</p>"
    },
    {
      id: "ing-03", bab: IN, level: 2, tipe: "kategori", stimulus: T1,
      soal: "Based on the notice, decide whether each statement is true (Benar) or false (Salah).",
      pernyataan: [
        "The library is closed for three days.",
        "Students can borrow books on 12 November.",
        "A student may borrow up to three reference books on 7 November.",
        "The notice is mainly intended for teachers."
      ],
      kunci: [true, false, true, false],
      hint: "Hitung hari dari Monday sampai Wednesday. Perhatikan juga judul pengumuman untuk mengetahui sasaran pembacanya.",
      pembahasan: "<h4>Strategi</h4><p>Untuk Benar/Salah, cek <b>setiap</b> pernyataan ke teks. Perhatikan tanggal, angka, dan kata seperti <i>only, all, mainly</i>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Monday 10 – Wednesday 12 November = 3 hari.</li><li><b>2</b> <i>Salah.</i> 12 November masih masa tutup; buka lagi 13 November.</li><li><b>3</b> <i>Benar.</i> \"may borrow them on Friday, 7 November, <b>with a maximum of three books</b> per student\" (maksimal tiga buku).</li><li><b>4</b> <i>Salah.</i> Judulnya \"ATTENTION <b>ALL STUDENTS</b>\" → ditujukan untuk siswa.</li></ul><p class=\"tips\"><b>Tips:</b> judul pengumuman (<i>Attention …</i>, <i>To: …</i>) langsung memberi tahu sasaran pembacanya.</p>"
    },

    // ---------- Text 2: Email ----------
    {
      id: "ing-04", bab: IN, level: 1, tipe: "pg", stimulus: T2,
      soal: "What is the main purpose of Nadia's email?",
      opsi: [
        "To invite Kevin to her birthday party",
        "To ask Mrs. Lestari to approve the proposal",
        "To arrange a meeting and divide tasks for their science project",
        "To explain how a water filter works",
        "To ask Dimas to join the team"
      ],
      kunci: 2,
      hint: "Perhatikan permintaan utama Nadia di paragraf kedua: apa yang diminta dan kapan mereka bertemu?",
      pembahasan: "<h4>Strategi</h4><p><b>\"Main purpose\"</b> = tujuan utama keseluruhan teks, bukan satu detail. Lihat apa yang <i>diminta</i> penulis dari pembaca. Pada e-mail, biasanya ada di bagian permintaan (<i>Could you…? Let's…</i>).</p><h4>Bukti di teks</h4><p>\"<b>Could you bring</b> the plastic bottles and the charcoal…? <b>I will prepare</b> the sand and gravel. <b>Let's meet</b> at my house at 9 a.m.\" → membagi tugas dan mengatur pertemuan → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tidak ada pesta ulang tahun.</li><li><b>B</b> Proposal sudah disetujui (\"approved … yesterday\").</li><li><b>D</b> Cara kerja filter tidak dijelaskan; bahannya hanya disebut sekilas.</li><li><b>E</b> E-mail ditujukan ke Kevin; Dimas hanya cadangan.</li></ul><p class=\"tips\"><b>Tips:</b> opsi tujuan yang benar biasanya merangkum <i>beberapa</i> bagian teks sekaligus. Opsi yang hanya cocok dengan satu kalimat biasanya hanya detail.</p>"
    },
    {
      id: "ing-05", bab: TU, level: 2, tipe: "mcma", stimulus: T2,
      soal: "Which items should Kevin bring on Saturday? (Choose ALL correct answers.)",
      opsi: ["Plastic bottles", "Sand", "Charcoal", "Gravel", "A water test kit"],
      kunci: [0, 2],
      hint: "Bedakan apa yang diminta dari Kevin (\"Could you bring …\") dan apa yang akan disiapkan Nadia (\"I will prepare …\").",
      pembahasan: "<h4>Strategi</h4><p>Pilih semua yang benar → bedakan dengan cermat <b>siapa melakukan apa</b>. Perhatikan subjek kalimat: <i>you</i> (Kevin) vs <i>I</i> (Nadia).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"<b>Could you</b> bring the plastic bottles…\" (tugas Kevin).</li><li><b>B</b> ✘ \"<b>I</b> will prepare the sand…\" (tugas Nadia).</li><li><b>C</b> ✔ \"…and the charcoal\" (masih dalam permintaan untuk Kevin).</li><li><b>D</b> ✘ Gravel disiapkan Nadia.</li><li><b>E</b> ✘ Alat uji air tidak diminta dari Kevin. Bu Lestari hanya meminta tim menambahkan pengujian.</li></ul><p class=\"tips\"><b>Tips:</b> dalam surat atau e-mail, <i>you</i> = penerima dan <i>I</i> = penulis. Jebakan klasiknya adalah menukar keduanya.</p>"
    },
    {
      id: "ing-06", bab: IN, level: 2, tipe: "pg", stimulus: T2,
      soal: "What can be inferred about Mrs. Lestari?",
      opsi: [
        "She is Nadia's mother.",
        "She is probably the teacher who supervises the Science Fair project.",
        "She will join the team on Saturday.",
        "She rejected the water filter project.",
        "She will provide the charcoal."
      ],
      kunci: 1,
      hint: "Siapa yang biasanya berwenang menyetujui proposal dan meminta tambahan pada proyek siswa?",
      pembahasan: "<h4>Strategi</h4><p><b>Inferensi</b> = kesimpulan yang <i>didukung</i> petunjuk teks walau tidak ditulis langsung. Pilih yang paling masuk akal dari bukti, bukan sekadar mungkin.</p><h4>Bukti di teks</h4><p>Mrs. Lestari \"<b>approved our proposal</b>\" dan \"<b>asked us to add a test</b>\". Orang yang menyetujui dan memberi masukan pada proyek lomba sains sekolah kemungkinan besar adalah <b>guru pembimbing</b> → <b>B</b>. Kata <i>probably</i> di opsi menandakan ini kesimpulan.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tidak ada petunjuk hubungan keluarga.</li><li><b>C</b> Pertemuan Sabtu hanya untuk Nadia dan Kevin (atau Dimas).</li><li><b>D</b> Bertentangan dengan teks: proposal justru disetujui.</li><li><b>E</b> Charcoal dibawa Kevin.</li></ul><p class=\"tips\"><b>Tips:</b> inferensi yang baik tidak bertentangan dengan teks <i>dan</i> punya bukti pendukung. Coret dulu opsi yang bertentangan, lalu yang tidak punya bukti.</p>"
    },

    // ---------- Text 3: Descriptive ----------
    {
      id: "ing-07", bab: IN, level: 1, tipe: "pg", stimulus: T3,
      soal: "What is paragraph 2 mainly about?",
      opsi: [
        "Where Komodo dragons live",
        "What Komodo dragons eat",
        "The physical features and abilities of Komodo dragons",
        "Why Komodo dragons are endangered",
        "How Komodo dragons hunt deer"
      ],
      kunci: 2,
      hint: "Baca kalimat pertama paragraf 2, lalu lihat apa saja yang dijelaskan sesudahnya (kepala, kaki, kulit, lidah, kecepatan lari).",
      pembahasan: "<h4>Strategi</h4><p><b>Main idea</b> paragraf = topik yang dibahas oleh <i>semua</i> kalimat di paragraf itu. Kalimat pertama sering menjadi kalimat topik.</p><h4>Bukti di teks</h4><p>Paragraf 2 membahas <i>flat heads, strong legs, rough skin, forked tongues</i> (ciri fisik) dan <i>can run up to 20 km/h</i> (kemampuan) → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Tempat hidup = paragraf 1.</li><li><b>B</b> Makanan = paragraf 3.</li><li><b>D</b> Ancaman kepunahan = paragraf 4.</li><li><b>E</b> Cara berburu tidak dibahas khusus; rusa hanya disebut sebagai makanan di paragraf 3.</li></ul><p class=\"tips\"><b>Tips:</b> pada teks deskripsi hewan, biasanya tiap paragraf satu aspek: klasifikasi/habitat → fisik → makanan/perilaku → status.</p>"
    },
    {
      id: "ing-08", bab: IN, level: 2, tipe: "pg", stimulus: T3,
      soal: "The underlined word \"<u>detect</u>\" in paragraph 2 is closest in meaning to …",
      opsi: ["hide", "notice", "produce", "remove", "avoid"],
      kunci: 1,
      hint: "Ganti kata \"detect\" dengan setiap opsi: lidah Komodo membantu mereka ___ bau makanan dari jarak jauh. Mana yang masuk akal?",
      pembahasan: "<h4>Strategi</h4><p>Soal sinonim: pahami kata dari <b>konteks kalimatnya</b>, lalu uji setiap opsi dengan menggantikan kata itu dalam kalimat.</p><h4>Bukti di teks</h4><p>\"Their forked tongues … help them <b>detect</b> the smell of food from several kilometres away.\" Lidah membantu <i>menangkap/mengenali</i> bau dari jauh → <i>notice</i> (menyadari, mengenali) → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> hide = menyembunyikan (tidak logis: menyembunyikan bau makanan).</li><li><b>C</b> produce = menghasilkan (lidah tidak menghasilkan bau).</li><li><b>D</b> remove = menghilangkan.</li><li><b>E</b> avoid = menghindari (berlawanan dengan mencari makanan).</li></ul><p class=\"tips\"><b>Tips:</b> kata serapan membantu: <i>detect</i> mirip \"deteksi\" (mendeteksi = mengetahui adanya sesuatu).</p>"
    },
    {
      id: "ing-09", bab: TU, level: 2, tipe: "kategori", stimulus: T3,
      soal: "Based on the text, decide whether each statement is true (Benar) or false (Salah).",
      pernyataan: [
        "Komodo dragons live naturally on several islands in Indonesia.",
        "Komodo dragons use their tongues to smell food.",
        "Komodo dragons only eat animals that are still alive.",
        "One threat to Komodo dragons is the decreasing number of animals they eat."
      ],
      kunci: [true, true, false, true],
      hint: "Cek paragraf 3 tentang jenis makanannya, dan paragraf 4 tentang \"illegal hunting of the animals they eat\".",
      pembahasan: "<h4>Strategi</h4><p>Pernyataan dengan kata mutlak (<i>only, always, never</i>) perlu dicek ekstra hati-hati. Cukup satu contoh yang bertentangan untuk membuatnya salah.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> \"found only on a few islands in Indonesia, including Komodo, Rinca, and Flores\".</li><li><b>2</b> <i>Benar.</i> \"forked tongues … help them detect the smell of food\".</li><li><b>3</b> <i>Salah.</i> \"from deer and wild pigs <b>to dead animals</b>\" → Komodo juga makan bangkai, jadi tidak <i>only</i> hewan hidup.</li><li><b>4</b> <i>Benar.</i> \"illegal hunting of <b>the animals they eat</b>\" → mangsa Komodo diburu sehingga jumlahnya berkurang.</li></ul><p class=\"tips\"><b>Tips:</b> pernyataan 4 adalah parafrase. Teks berkata \"perburuan hewan mangsanya\", pernyataan berkata \"jumlah mangsa berkurang\". Maknanya sama walau kata-katanya berbeda.</p>"
    },

    // ---------- Text 4: Recount ----------
    {
      id: "ing-10", bab: TU, level: 1, tipe: "pg", stimulus: T4,
      soal: "Why did the writer and the cousins leave the homestay at 1 a.m.?",
      opsi: [
        "Because the trail was slippery",
        "Because they wanted to reach the summit before sunrise",
        "Because they wanted to avoid the rain",
        "Because Raka twisted his ankle",
        "Because the homestay closed at night"
      ],
      kunci: 1,
      hint: "Cari frasa \"so that …\" di kalimat kedua — frasa ini menyatakan tujuan.",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan \"why\" pada teks <i>recount</i>: cari penanda tujuan atau sebab seperti <b>so that</b> (agar), <i>because, in order to</i>.</p><h4>Bukti di teks</h4><p>\"We left our homestay in Dieng at 1 a.m. <b>so that</b> we could reach the summit <b>before sunrise</b>.\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Jalur licin adalah keadaan saat mendaki, bukan alasan berangkat pukul 1.</li><li><b>C</b> Hujan sudah terjadi \"the night before\", jadi tidak dihindari.</li><li><b>D</b> Raka terkilir saat turun, setelah berangkat.</li><li><b>E</b> Tidak disebut di teks.</li></ul><p class=\"tips\"><b>Tips:</b> <i>so that</i> = tujuan (agar); <i>so</i> saja = akibat (jadi/sehingga). Keduanya sering keluar di soal sebab-akibat.</p>"
    },
    {
      id: "ing-11", bab: IN, level: 2, tipe: "pg", stimulus: T4,
      soal: "Which of the following shows the correct order of events?",
      opsi: [
        "Watching the sunrise → walking on a slippery trail → Raka twisting his ankle → reaching the homestay",
        "Walking on a slippery trail → watching the sunrise → Raka twisting his ankle → reaching the homestay",
        "Walking on a slippery trail → Raka twisting his ankle → watching the sunrise → reaching the homestay",
        "Raka twisting his ankle → walking on a slippery trail → watching the sunrise → reaching the homestay",
        "Walking on a slippery trail → reaching the homestay → watching the sunrise → Raka twisting his ankle"
      ],
      kunci: 1,
      hint: "Teks recount biasanya urut waktu. Perhatikan penanda waktu: \"After about three hours\", \"when the sun rose\", \"On the way down\", \"at noon\".",
      pembahasan: "<h4>Strategi</h4><p>Urutan peristiwa pada teks <i>recount</i> mengikuti alur paragraf. Gunakan penanda waktu: <i>after about three hours, when the sun rose, on the way down, at noon</i>.</p><h4>Bukti di teks</h4><ol><li>P1: jalur licin saat mendaki (\"The trail was steep and slippery\").</li><li>P2: tiba di puncak, matahari terbit (\"when the sun rose\").</li><li>P3: \"<b>On the way down</b>, Raka twisted his ankle\".</li><li>P3: \"We reached the homestay <b>at noon</b>\". Urutan ini sama dengan <b>B</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Matahari terbit tidak terjadi sebelum mendaki jalur licin.</li><li><b>C</b> Raka terkilir saat <i>turun</i>, jadi setelah matahari terbit.</li><li><b>D</b> Raka terkilir bukan peristiwa pertama.</li><li><b>E</b> Tiba di homestay adalah peristiwa terakhir.</li></ul><p class=\"tips\"><b>Tips:</b> cari dulu peristiwa yang pasti pertama atau pasti terakhir. Biasanya itu sudah cukup untuk mencoret sebagian besar opsi.</p>"
    },
    {
      id: "ing-12", bab: IN, level: 2, tipe: "pg", stimulus: T4,
      soal: "Why did the group walk \"even more slowly\" on the way down?",
      opsi: [
        "Because it was raining heavily",
        "Because they were taking photos",
        "Because Raka was injured and they had to carry his backpack",
        "Because the temperature was very cold",
        "Because they had lost their way"
      ],
      kunci: 2,
      hint: "Lihat kalimat tepat sebelum frasa \"walk even more slowly\".",
      pembahasan: "<h4>Strategi</h4><p>Pertanyaan yang mengutip frasa dari teks (\"even more slowly\") → temukan frasa itu, lalu baca kalimat <b>sebelumnya</b> untuk mencari sebabnya.</p><h4>Bukti di teks</h4><p>\"Raka <b>twisted his ankle</b> because he was running. We had to <b>carry his backpack</b> and walk even more slowly.\" → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Hujan terjadi malam sebelumnya, bukan saat turun.</li><li><b>B</b> Foto diambil di puncak.</li><li><b>D</b> Suhu dingin dibahas saat di puncak, bukan alasan berjalan lambat.</li><li><b>E</b> Tidak ada cerita tersesat.</li></ul><p class=\"tips\"><b>Tips:</b> <i>twist an ankle</i> = keseleo atau terkilir pergelangan kaki. Kosakata cedera ringan seperti ini sering muncul.</p>"
    },
    {
      id: "ing-13", bab: IN, level: 3, tipe: "mcma", stimulus: T4,
      soal: "What can be inferred from the text? (Choose ALL correct answers.)",
      opsi: [
        "The writer's feeling changed from tired to amazed when the sun rose.",
        "Raka was careless when going down the mountain.",
        "The trail to the summit was dry and easy.",
        "The writer regretted joining the trip.",
        "The writer had climbed many mountains before."
      ],
      kunci: [0, 1],
      hint: "Pilih yang didukung bukti di teks. Hati-hati dengan opsi yang mungkin saja benar di dunia nyata tetapi tidak disebutkan atau tersirat di teks.",
      pembahasan: "<h4>Strategi</h4><p>Inferensi pada recount: perhatikan <b>perubahan perasaan</b> tokoh dan <b>alasan</b> di balik tindakannya. Opsi yang tidak ada buktinya dianggap tidak didukung, walau mungkin benar di dunia nyata.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ \"my fingers felt numb. However, when the sun rose … <b>all our tiredness disappeared</b>\" → lelah berubah menjadi takjub.</li><li><b>B</b> ✔ Raka terkilir \"<b>because he was running</b>\" saat turun gunung → ceroboh.</li><li><b>C</b> ✘ Jalurnya \"<b>steep and slippery</b>\" (curam dan licin).</li><li><b>D</b> ✘ \"exhausted <b>but happy</b>\", \"the most unforgettable trip\" → tidak menyesal.</li><li><b>E</b> ✘ Tidak ada informasi tentang pengalaman mendaki sebelumnya.</li></ul><p class=\"tips\"><b>Tips:</b> kata <i>however</i> menandakan perubahan arah. Di sini dari menderita (dingin, mati rasa) menjadi bahagia (matahari terbit).</p>"
    },

    // ---------- Text 5: Procedure ----------
    {
      id: "ing-14", bab: IN, level: 1, tipe: "pg", stimulus: T5,
      soal: "What is the purpose of the text?",
      opsi: [
        "To describe the weather in a certain area",
        "To explain how to make a tool for measuring rainfall",
        "To tell a story about a rainy day",
        "To persuade readers to recycle plastic bottles",
        "To report the amount of rain last month"
      ],
      kunci: 1,
      hint: "Perhatikan judul dan struktur teks: ada \"Materials\" dan \"Steps\". Jenis teks apa ini?",
      pembahasan: "<h4>Strategi</h4><p>Tujuan teks dikenali dari <b>jenis teksnya</b>. Judul \"How to Make…\" + daftar <i>Materials</i> + <i>Steps</i> bernomor = teks <b>procedure</b>, yang tujuannya menjelaskan cara membuat atau melakukan sesuatu.</p><h4>Bukti di teks</h4><p>\"How to Make a Simple <b>Rain Gauge</b>\". <i>Rain gauge</i> = alat pengukur curah hujan → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Mendeskripsikan cuaca = teks deskripsi atau laporan.</li><li><b>C</b> Bercerita tentang hari hujan = narrative atau recount.</li><li><b>D</b> Membujuk = exposition; teks tidak mengajak mendaur ulang.</li><li><b>E</b> Melaporkan data hujan bulan lalu = report.</li></ul><p class=\"tips\"><b>Tips:</b> procedure → <i>to explain how to…</i>; recount → <i>to retell past events</i>; narrative → <i>to entertain</i>; report → <i>to describe things in general</i>; exposition → <i>to persuade</i>.</p>"
    },
    {
      id: "ing-15", bab: TU, level: 2, tipe: "pg", stimulus: T5,
      soal: "Why should small stones be put at the bottom of the bottle?",
      opsi: [
        "To make the water cleaner",
        "To mark the zero line",
        "To keep the bottle from falling over",
        "To make the funnel stronger",
        "To measure the rain more accurately"
      ],
      kunci: 2,
      hint: "Baca langkah 2 sampai habis, terutama frasa setelah \"so that\".",
      pembahasan: "<h4>Strategi</h4><p>Detail yang dikaitkan dengan langkah tertentu → temukan langkah yang menyebut kata kunci (<i>small stones</i>), lalu cari penanda tujuannya (<i>so that</i>).</p><h4>Bukti di teks</h4><p>Langkah 2: \"Put some small stones at the bottom of the bottle <b>so that it does not fall over in the wind</b>.\" <i>Fall over</i> = terguling atau jatuh → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Batu tidak dipakai untuk menyaring air.</li><li><b>B</b> Garis nol ditandai pada langkah 3 dengan air, bukan oleh batu.</li><li><b>D</b> Corong diperkuat dengan selotip (langkah 5).</li><li><b>E</b> Akurasi pengukuran tidak disebut sebagai fungsi batu.</li></ul><p class=\"tips\"><b>Tips:</b> batu juga disebut di langkah 3 (\"until it just covers the stones\"). Bedakan fungsi batu (pemberat) dari fungsi air di langkah 3 (penentu garis nol).</p>"
    },
    {
      id: "ing-16", bab: EV, level: 3, tipe: "kategori", stimulus: T5,
      soal: "Four students made rain gauges. Decide whether each student followed the instructions correctly (Benar) or not (Salah).",
      pernyataan: [
        "Rani placed her rain gauge under a big mango tree so that it would be safe.",
        "Budi checked and recorded the water level every morning at 7 a.m.",
        "After recording, Sinta poured out all the water, including the water covering the stones.",
        "Doni used the cut top part of the bottle as a funnel."
      ],
      kunci: [false, true, false, true],
      hint: "Cocokkan setiap tindakan dengan langkah 5, 6, dan 7.",
      pembahasan: "<h4>Strategi</h4><p>Soal penerapan: bandingkan tindakan setiap siswa dengan <b>langkah yang relevan</b>. Cari langkah yang membahas lokasi, waktu, membuang air, dan corong.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Salah.</i> Langkah 6: \"in an open area, <b>away from trees</b> and buildings\". Di bawah pohon, air hujan terhalang daun.</li><li><b>2</b> <i>Benar.</i> Langkah 7: \"at <b>the same time every day</b>\". Jam 7 pagi setiap hari memenuhinya.</li><li><b>3</b> <i>Salah.</i> Langkah 7: \"pour out the water <b>down to the zero line</b>\". Air yang menutupi batu harus disisakan.</li><li><b>4</b> <i>Benar.</i> Langkah 5: bagian atas botol yang dipotong dibalik dan dipakai seperti corong.</li></ul><p class=\"tips\"><b>Tips:</b> soal seperti ini menguji apakah kamu paham <i>alasan</i> tiap langkah. Pohon menghalangi hujan; garis nol adalah titik awal ukur.</p>"
    },

    // ---------- Text 6: Narrative ----------
    {
      id: "ing-17", bab: TU, level: 1, tipe: "pg", stimulus: T6,
      soal: "What was Kancil's problem in the story?",
      opsi: [
        "He was being chased by the King.",
        "He wanted to eat the fruits across the river, but the river was full of crocodiles.",
        "He could not find any water to drink.",
        "He had to count all the animals in the forest.",
        "He was afraid of the dark forest."
      ],
      kunci: 1,
      hint: "Masalah (komplikasi) dalam cerita biasanya muncul di paragraf pertama, ditandai kata \"but\".",
      pembahasan: "<h4>Strategi</h4><p>Dalam struktur narrative, <b>complication</b> (masalah) biasanya muncul tepat setelah orientation. Cari kata penanda kontras seperti <i>but, however, unfortunately</i>.</p><h4>Bukti di teks</h4><p>\"he saw ripe fruits on the trees across the river, <b>but</b> the river was full of hungry crocodiles.\" → ingin buah di seberang, tetapi terhalang buaya → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Perintah raja hanyalah tipuan Kancil; tidak ada raja yang mengejarnya.</li><li><b>C</b> Minum baru disebut di akhir sebagai rencana buaya.</li><li><b>D</b> Menghitung adalah tipuan Kancil, bukan tugas yang sebenarnya.</li><li><b>E</b> Tidak ada rasa takut terhadap hutan.</li></ul><p class=\"tips\"><b>Tips:</b> masalah tokoh = keinginan + halangan. Rumuskan dengan pola \"ingin …, tetapi …\".</p>"
    },
    {
      id: "ing-18", bab: IN, level: 2, tipe: "pg", stimulus: T6,
      soal: "Kancil can best be described as …",
      opsi: ["honest and generous", "clever but deceitful", "brave and kind", "lazy and careless", "foolish and greedy"],
      kunci: 1,
      hint: "Lihat cara Kancil menyelesaikan masalahnya: apakah ia jujur kepada para buaya?",
      pembahasan: "<h4>Strategi</h4><p>Watak tokoh disimpulkan dari <b>tindakan dan ucapannya</b>. Kalau opsi memuat dua sifat, <b>keduanya</b> harus terbukti.</p><h4>Bukti di teks</h4><p>Kancil berhasil menyeberang dengan akal → <b>clever</b> (cerdik). Ia berbohong soal daging dari raja (\"There is no meat\") → <b>deceitful</b> (suka menipu) → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> honest (jujur) bertentangan dengan kebohongannya.</li><li><b>C</b> brave mungkin, tetapi kind tidak; ia menipu dan menertawakan buaya.</li><li><b>D</b> lazy dan careless tidak sesuai; ia berpikir keras (\"thought hard\").</li><li><b>E</b> foolish and greedy lebih cocok untuk para buaya.</li></ul><p class=\"tips\"><b>Tips:</b> kata <i>but</i> di opsi B menunjukkan sifat yang bercampur (positif dan negatif). Itu sering paling akurat untuk tokoh <i>trickster</i> seperti Kancil.</p>"
    },
    {
      id: "ing-19", bab: IN, level: 3, tipe: "pg", stimulus: T6,
      soal: "What will most likely happen next in the story?",
      opsi: [
        "The King will give the crocodiles meat.",
        "Kancil will become friends with the crocodiles.",
        "The crocodiles will try to catch Kancil when he comes back to drink at the river.",
        "The crocodiles will leave the river forever.",
        "Kancil will count the crocodiles again."
      ],
      kunci: 2,
      hint: "Baca ucapan pemimpin buaya di akhir cerita: \"We will be waiting.\"",
      pembahasan: "<h4>Strategi</h4><p>Prediksi kejadian berikutnya → baca <b>bagian paling akhir</b> teks. Penulis biasanya menanam petunjuk (<i>foreshadowing</i>) di sana.</p><h4>Bukti di teks</h4><p>\"The crocodiles were <b>furious</b> … the leader whispered, 'Kancil will come back to drink at this river someday. <b>We will be waiting</b>.'\" → buaya akan mencoba menangkap Kancil saat ia kembali → <b>C</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Raja dan daging hanyalah karangan Kancil.</li><li><b>B</b> Buaya marah; tidak ada tanda akan berteman.</li><li><b>D</b> Mereka justru menunggu di sungai.</li><li><b>E</b> Kancil sudah mendapat yang ia mau; tidak ada alasan mengulang.</li></ul><p class=\"tips\"><b>Tips:</b> jawaban prediksi harus <i>berlanjut logis</i> dari perasaan dan rencana tokoh di akhir teks, bukan sekadar mungkin terjadi.</p>"
    },
    {
      id: "ing-20", bab: EV, level: 3, tipe: "kategori", stimulus: T6,
      soal: "Decide whether each statement about the story is true (Benar) or false (Salah).",
      pernyataan: [
        "The story contains events that cannot happen in real life, such as animals talking.",
        "The crocodiles were easily fooled because they were greedy for meat.",
        "The story shows that lying never has any consequences.",
        "Kancil kept his promise to the crocodiles."
      ],
      kunci: [true, true, false, false],
      hint: "Untuk nomor 3, perhatikan akhir cerita: apakah kebohongan Kancil benar-benar tanpa akibat?",
      pembahasan: "<h4>Strategi</h4><p>Evaluasi cerita: bedakan unsur <b>fantasi</b>, <b>sebab-akibat</b> tindakan tokoh, dan <b>pesan moral</b>. Cek apakah setiap klaim cocok dengan isi dan akhir cerita.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Hewan berbicara adalah unsur fantasi khas fabel.</li><li><b>2</b> <i>Benar.</i> Buaya langsung antre karena tergiur \"a piece of meat\".</li><li><b>3</b> <i>Salah.</i> Akhir cerita menunjukkan buaya akan membalas (\"We will be waiting\"). Kebohongan tetap punya akibat.</li><li><b>4</b> <i>Salah.</i> \"There is no meat.\" Kancil tidak menepati janjinya.</li></ul><p class=\"tips\"><b>Tips:</b> kata <i>never</i> di pernyataan 3 adalah sinyal kuat. Cukup satu bukti adanya akibat untuk membuatnya salah.</p>"
    },

    // ---------- Text 7: Explanation ----------
    {
      id: "ing-21", bab: IN, level: 2, tipe: "pg", stimulus: T7,
      soal: "According to paragraph 2, why do tsunami waves become very high near the coast?",
      opsi: [
        "Because the wind becomes stronger near the coast",
        "Because the waves slow down in shallow water and the water piles up",
        "Because the waves move faster in shallow water",
        "Because ships push the water toward the coast",
        "Because the sea pulls back from the shore"
      ],
      kunci: 1,
      hint: "Cari hubungan sebab-akibat di kalimat terakhir paragraf 2 (penanda: \"so\").",
      pembahasan: "<h4>Strategi</h4><p>Soal sebab-akibat pada teks eksplanasi → cari penanda akibat <b>so</b>, <i>therefore, as a result</i>, lalu ambil sebab di depannya.</p><h4>Bukti di teks</h4><p>\"As the waves approach shallow water near the coast, they <b>slow down</b>, and the water <b>piles up</b>, <b>so</b> their height increases dramatically.\" → <b>B</b>. (<i>Pile up</i> = menumpuk.)</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Angin tidak disebut.</li><li><b>C</b> Terbalik: di perairan dangkal gelombang justru <i>melambat</i>.</li><li><b>D</b> Kapal tidak mendorong air.</li><li><b>E</b> Laut surut adalah tanda peringatan (paragraf 3), bukan penyebab gelombang tinggi.</li></ul><p class=\"tips\"><b>Tips:</b> opsi yang membalik fakta (cepat ↔ lambat, naik ↔ turun) adalah pengecoh favorit di teks sains. Baca kata kerjanya dengan teliti.</p>"
    },
    {
      id: "ing-22", bab: IN, level: 2, tipe: "pg", stimulus: T7,
      soal: "How are tsunami waves in the deep ocean different from those near the coast?",
      opsi: [
        "In the deep ocean they are higher and slower.",
        "In the deep ocean they are lower but much faster.",
        "In the deep ocean they are higher and faster.",
        "In the deep ocean they are lower and slower.",
        "There is no difference between them."
      ],
      kunci: 1,
      hint: "Bandingkan dua hal: tinggi gelombang dan kecepatannya, di laut dalam vs di dekat pantai.",
      pembahasan: "<h4>Strategi</h4><p>Soal perbandingan → buat tabel kecil: <b>tinggi</b> dan <b>kecepatan</b> di laut dalam vs dekat pantai.</p><h4>Bukti di teks</h4><table><tr><th></th><th>Laut dalam</th><th>Dekat pantai</th></tr><tr><th>Tinggi</th><td>&lt; 1 m (rendah)</td><td>bisa &gt; 30 m</td></tr><tr><th>Kecepatan</th><td>hingga 800 km/jam</td><td>melambat</td></tr></table><p>Di laut dalam: lebih rendah tetapi jauh lebih cepat → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b>, <b>C</b>, <b>D</b>: salah satu atau kedua sifatnya terbalik.</li><li><b>E</b> Teks jelas menunjukkan perbedaan besar.</li></ul><p class=\"tips\"><b>Tips:</b> kata <i>but</i> di opsi B menandakan kontras (rendah <i>tetapi</i> cepat). Itu cocok dengan kata <i>However</i> di teks.</p>"
    },
    {
      id: "ing-23", bab: TU, level: 3, tipe: "mcma", stimulus: T7,
      soal: "Which statements are supported by the text? (Choose ALL correct answers.)",
      opsi: [
        "Tsunamis are always caused by earthquakes.",
        "In the deep ocean, a tsunami can travel about as fast as a jet plane.",
        "A sudden retreat of sea water from the shore can be a sign of a tsunami.",
        "Ships in the deep ocean are usually destroyed by tsunami waves.",
        "A sudden shift of tectonic plates can push a large amount of water upward."
      ],
      kunci: [1, 2, 4],
      hint: "Hati-hati dengan kata mutlak seperti \"always\". Cek juga paragraf 3 tentang penyebab lain tsunami.",
      pembahasan: "<h4>Strategi</h4><p>\"Supported by the text\" → setiap opsi harus punya bukti langsung. Waspadai kata mutlak (<i>always</i>) dan klaim berlebihan (<i>destroyed</i>).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✘ Paragraf 3: \"<b>Besides earthquakes</b>, tsunamis can also be triggered by volcanic eruptions, underwater landslides…\" → tidak <i>always</i> gempa.</li><li><b>B</b> ✔ \"up to 800 kilometres per hour, <b>about as fast as a jet plane</b>\".</li><li><b>C</b> ✔ \"One natural warning sign … is when the sea suddenly <b>pulls back</b> from the shore\".</li><li><b>D</b> ✘ \"ships <b>hardly notice</b> them\" → kapal hampir tidak merasakannya, apalagi hancur.</li><li><b>E</b> ✔ Paragraf 1: \"When the plates suddenly shift, the sea floor rises or drops, <b>pushing a large amount of water upward</b>.\"</li></ul><p class=\"tips\"><b>Tips:</b> <i>hardly</i> berarti \"hampir tidak\", bukan \"dengan keras\". Ini salah paham yang sangat sering terjadi.</p>"
    },

    // ---------- Text 8: Exposition ----------
    {
      id: "ing-24", bab: IN, level: 2, tipe: "pg", stimulus: T8,
      soal: "What is the writer's main point?",
      opsi: [
        "Smartphones should be completely banned in schools.",
        "Schools should control how smartphones are used instead of banning them completely.",
        "Students use smartphones only for social media and games.",
        "Parents should not contact their children during school hours.",
        "The Netherlands and France have the best school rules."
      ],
      kunci: 1,
      hint: "Pada teks eksposisi, pendapat utama (tesis) biasanya ada di paragraf pertama dan ditegaskan kembali di paragraf terakhir. Cari \"In my opinion\".",
      pembahasan: "<h4>Strategi</h4><p>Pada teks argumentasi (<i>exposition</i>), <b>main point</b> = tesis penulis. Biasanya muncul di paragraf pertama dengan penanda <i>In my opinion / I believe</i>, lalu diulang di kesimpulan.</p><h4>Bukti di teks</h4><p>\"<b>In my opinion</b>, schools should not ban smartphones completely, but they should control how phones are used.\" Diulang di P5: \"With the right rules, they can help students learn better.\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Itu pendapat pendukung larangan, yang justru ditolak penulis.</li><li><b>C</b> Bertentangan dengan data: HP juga dipakai untuk tugas sekolah (68%).</li><li><b>D</b> Penulis justru menganggap kontak orang tua penting (P3).</li><li><b>E</b> Belanda dan Prancis hanya disebut sebagai latar.</li></ul><p class=\"tips\"><b>Tips:</b> pada teks argumentasi, informasi di awal paragraf 1 sering hanya latar atau pendapat pihak lain. Tesis penulis muncul setelah kata <i>In my opinion</i>.</p>"
    },
    {
      id: "ing-25", bab: EV, level: 3, tipe: "kategori", stimulus: T8,
      soal: "Decide whether each sentence from the text is a FACT (Benar) or NOT a fact / an opinion (Salah).",
      pernyataan: [
        "\"Several countries, including the Netherlands and France, have restricted the use of smartphones in classrooms.\"",
        "\"Smartphones are not the enemy.\"",
        "\"A survey by our school's student council found that 68% of students use their phones for schoolwork at least three times a week.\"",
        "\"The best solution is a clear rule: phones are kept in a box during lessons.\""
      ],
      kunci: [true, false, true, false],
      hint: "Fakta dapat dibuktikan atau dicek kebenarannya (data, kejadian). Opini berisi penilaian pribadi, sering memakai kata seperti \"best\", \"should\", atau \"in my opinion\".",
      pembahasan: "<h4>Strategi</h4><p><b>Fakta</b> = dapat dibuktikan atau diverifikasi (data, angka, peristiwa). <b>Opini</b> = penilaian atau sikap, sering memakai kata evaluatif seperti <i>best, should, enemy, good, important</i>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar (fakta).</i> Kebijakan Belanda dan Prancis bisa dicek kebenarannya.</li><li><b>2</b> <i>Salah (opini).</i> \"not the enemy\" adalah penilaian penulis.</li><li><b>3</b> <i>Benar (fakta).</i> Hasil survei dengan angka 68% bisa diverifikasi.</li><li><b>4</b> <i>Salah (opini).</i> \"<b>the best</b> solution\" adalah penilaian; orang lain bisa punya solusi berbeda.</li></ul><p class=\"tips\"><b>Tips:</b> uji dengan pertanyaan \"Bisakah ini dibuktikan benar atau salah?\" Kalau jawabannya \"tergantung pendapat\", itu opini.</p>"
    },
    {
      id: "ing-26", bab: EV, level: 3, tipe: "pg", stimulus: T8,
      soal: "Which of the following pieces of information would most strengthen the writer's argument?",
      opsi: [
        "Most students prefer playing games to reading books.",
        "A study showing that students who use phones only under teacher guidance get better test scores than students in schools with a total ban.",
        "Smartphones are becoming more expensive every year.",
        "Many teachers also use smartphones at home.",
        "France banned smartphones in schools in 2018."
      ],
      kunci: 1,
      hint: "Argumen penulis: HP sebaiknya diatur, bukan dilarang total. Data mana yang paling langsung membuktikan bahwa pengaturan lebih baik daripada larangan total?",
      pembahasan: "<h4>Strategi</h4><p>Bukti yang <b>memperkuat argumen</b> harus mendukung <i>tesis spesifik</i> penulis (kontrol, bukan larangan total), idealnya dengan bukti kuat seperti studi atau data perbandingan.</p><h4>Bukti di teks</h4><p>Tesis: HP sebaiknya diatur, bukan dilarang total. Opsi B membandingkan langsung \"HP dengan panduan guru\" vs \"larangan total\" dan hasilnya nilai lebih baik → paling memperkuat.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Justru melemahkan: siswa lebih suka main game.</li><li><b>C</b> Harga HP tidak relevan dengan aturan di sekolah.</li><li><b>D</b> Pemakaian HP oleh guru di rumah tidak relevan.</li><li><b>E</b> Mendukung pihak yang setuju larangan, bukan penulis.</li></ul><p class=\"tips\"><b>Tips:</b> bukti terkuat biasanya berupa <b>perbandingan</b> dua kondisi yang menunjukkan hasil lebih baik untuk posisi penulis.</p>"
    },
    {
      id: "ing-27", bab: EV, level: 2, tipe: "pg", stimulus: T8,
      soal: "Which response best shows agreement with the writer's opinion?",
      opsi: [
        "\"I think phones should be taken away from students for the whole school day.\"",
        "\"I agree. Phones should be allowed only when teachers permit, because they can support learning.\"",
        "\"Phones are only useful for calling parents, not for learning.\"",
        "\"Students should be free to use phones whenever they want.\"",
        "\"Schools should follow whatever other countries do.\""
      ],
      kunci: 1,
      hint: "Penulis berada di \"tengah\": tidak setuju larangan total, tetapi juga tidak setuju bebas sepenuhnya.",
      pembahasan: "<h4>Strategi</h4><p>Cari respons yang cocok dengan <b>posisi tengah</b> penulis: tidak dilarang total dan tidak dibebaskan, tetapi <b>diatur</b>. Alasannya juga harus sejalan (HP membantu belajar).</p><h4>Bukti di teks</h4><p>P4: \"phones are kept in a box during lessons and <b>can only be used when the teacher allows it</b>.\" P2: HP adalah \"powerful learning tools\" → <b>B</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Larangan sepanjang hari = larangan total, ditolak penulis.</li><li><b>C</b> Bertentangan dengan P2: HP juga berguna untuk belajar.</li><li><b>D</b> Bebas tanpa aturan, juga ditolak penulis (\"phones can be distracting\").</li><li><b>E</b> Penulis tidak berpendapat harus meniru negara lain.</li></ul><p class=\"tips\"><b>Tips:</b> jika penulis mengambil posisi tengah, opsi ekstrem di kedua sisi (A dan D) pasti salah.</p>"
    },

    // ---------- Text 9: Data & claim ----------
    {
      id: "ing-28", bab: TU, level: 2, tipe: "pg", stimulus: T9,
      soal: "What percentage of the students surveyed bring a reusable water bottle every day?",
      opsi: ["12.4%", "43%", "58%", "62%", "124%"],
      kunci: 3,
      hint: "Persentase = (jumlah siswa dengan kebiasaan itu / total siswa yang disurvei) × 100%.",
      pembahasan: "<h4>Strategi</h4><p>Membaca tabel: ambil angka yang relevan, lalu ubah ke persen dengan <b>(bagian ÷ total) × 100%</b>. Total responden disebut di kalimat pembuka: <i>200 students</i>.</p><h4>Langkah</h4><ol><li>Bawa botol minum setiap hari: 124 siswa.</li><li>124/200 × 100% = <b>62%</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 12.4%: dibagi 1.000, bukan 200.</li><li><b>B</b> 43% = 86/200, itu persentase pembawa tas belanja.</li><li><b>C</b> 58%: angka 58 siswa (tolak sedotan) dibaca sebagai persen.</li><li><b>E</b> 124%: angka siswa langsung dianggap persen. Persen dari bagian tidak mungkin melebihi 100%.</li></ul><p class=\"tips\"><b>Tips:</b> karena total 200, persen = angka ÷ 2. Cepat: 124 ÷ 2 = 62.</p>"
    },
    {
      id: "ing-29", bab: TU, level: 3, tipe: "mcma", stimulus: T9,
      soal: "Which conclusions are supported by the survey data? (Choose ALL correct answers.)",
      opsi: [
        "More than half of the students bring a reusable water bottle every day.",
        "Separating plastic waste at home is the least common habit in the survey.",
        "Fewer than half of the students bring a reusable bag when shopping.",
        "All students at SMA Harapan refuse plastic straws.",
        "The campaign made every student stop buying bottled drinks."
      ],
      kunci: [0, 1, 2],
      hint: "Total siswa = 200, jadi setengahnya = 100. Bandingkan setiap angka dengan 100, dan waspadai kata \"all\" serta \"every\".",
      pembahasan: "<h4>Strategi</h4><p>Kesimpulan dari data: bandingkan setiap angka dengan <b>setengah total (100)</b> dan dengan angka lain. Coret kesimpulan yang memakai kata mutlak (<i>all, every</i>) tanpa bukti.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ 124 &gt; 100 → lebih dari setengah.</li><li><b>B</b> ✔ 40 adalah angka terkecil di tabel → kebiasaan paling jarang.</li><li><b>C</b> ✔ 86 &lt; 100 → kurang dari setengah.</li><li><b>D</b> ✘ Hanya 58 dari 200 yang menolak sedotan.</li><li><b>E</b> ✘ Penjualan turun 35%, tidak berhenti 100%. Lagi pula ini data kantin, bukan per siswa.</li></ul><p class=\"tips\"><b>Tips:</b> <i>more than half</i> → bandingkan dengan 100; <i>least common</i> → angka terkecil; <i>all/every</i> → harus 200 dari 200.</p>"
    },
    {
      id: "ing-30", bab: EV, level: 3, tipe: "kategori", stimulus: T9,
      soal: "Evaluate the student council's claim: \"Our campaign has successfully reduced plastic waste at school.\" Decide whether each statement is true (Benar) or false (Salah).",
      pernyataan: [
        "The decrease in bottled-drink sales supports the claim.",
        "The information given is enough to prove that the total amount of plastic waste at school has decreased.",
        "To make the claim stronger, the council should measure the amount of plastic waste at school before and after the campaign.",
        "The survey results show that the campaign made more students separate plastic waste at home."
      ],
      kunci: [true, false, true, false],
      hint: "Bedakan bukti yang MENDUKUNG klaim dan bukti yang CUKUP untuk MEMBUKTIKAN klaim. Perhatikan juga kapan survei dilakukan, sebelum atau sesudah kampanye.",
      pembahasan: "<h4>Strategi</h4><p>Mengevaluasi klaim: tanyakan \"Apakah bukti yang ada <b>benar-benar mengukur</b> apa yang diklaim?\" Klaimnya tentang <i>sampah plastik di sekolah</i>, sedangkan buktinya hanya <i>penjualan minuman botol di kantin</i>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Botol plastik yang terjual berkurang 35%, sehingga mendukung klaim (walau belum membuktikan sepenuhnya).</li><li><b>2</b> <i>Salah.</i> Sampah plastik lain (bungkus makanan, kantong, sedotan) tidak diukur, dan datanya hanya satu bulan. Belum cukup <i>membuktikan</i> total sampah turun.</li><li><b>3</b> <i>Benar.</i> Mengukur jumlah sampah plastik sebelum dan sesudah kampanye adalah bukti langsung untuk klaim itu.</li><li><b>4</b> <i>Salah.</i> Survei dilakukan <b>sebelum</b> kampanye dan tentang kebiasaan di rumah, jadi tidak bisa menunjukkan dampak kampanye.</li></ul><p class=\"tips\"><b>Tips:</b> bedakan \"mendukung\" (<i>supports</i>) dan \"membuktikan\" (<i>proves</i>). Satu data bisa mendukung tanpa cukup untuk membuktikan.</p>"
    }
  ]};
})();
