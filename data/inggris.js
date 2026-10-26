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
      pembahasan: "<p>Teks: \"closed … <b>for the annual book inventory</b>\". <i>Inventory</i> = pendataan/pemeriksaan stok. Jadi perpustakaan tutup karena petugas akan memeriksa (mendata) seluruh buku.</p><p>Ujian disebut di teks, tetapi sebagai alasan meminjam buku referensi, bukan alasan tutup.</p>"
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
      pembahasan: "<p>Teks: \"During this period, students can return borrowed books to <b>the drop box in front of the Teachers' Room</b>.\"</p>"
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
      pembahasan: "<p>1. Monday–Wednesday (10–12 November) = 3 hari ✔.</p><p>2. Tanggal 12 November perpustakaan masih tutup → Salah.</p><p>3. \"may borrow them on Friday, 7 November, with a maximum of three books per student\" ✔.</p><p>4. Judulnya \"ATTENTION ALL <b>STUDENTS</b>\" → sasarannya siswa, bukan guru → Salah.</p>"
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
      pembahasan: "<p>Nadia meminta Kevin membawa barang tertentu, menyebut apa yang akan ia siapkan sendiri, serta menentukan waktu dan tempat bertemu. Jadi tujuannya <b>mengatur pertemuan dan membagi tugas</b> proyek.</p><p>Proposal sudah disetujui (\"approved … yesterday\"), dan Dimas hanya cadangan jika Kevin tidak bisa datang.</p>"
    },
    {
      id: "ing-05", bab: TU, level: 2, tipe: "mcma", stimulus: T2,
      soal: "Which items should Kevin bring on Saturday? (Choose ALL correct answers.)",
      opsi: ["Plastic bottles", "Sand", "Charcoal", "Gravel", "A water test kit"],
      kunci: [0, 2],
      hint: "Bedakan apa yang diminta dari Kevin (\"Could you bring …\") dan apa yang akan disiapkan Nadia (\"I will prepare …\").",
      pembahasan: "<p>\"Could you bring <b>the plastic bottles</b> and <b>the charcoal</b>?\" → tugas Kevin.</p><p>\"I will prepare the sand and gravel.\" → tugas Nadia. Alat uji air tidak diminta dari Kevin.</p>"
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
      pembahasan: "<p>Mrs. Lestari \"<b>approved our proposal</b>\" dan \"<b>asked us to add a test</b>\". Orang yang menyetujui dan memberi masukan pada proposal proyek sekolah kemungkinan besar adalah <b>guru pembimbing</b>.</p><p>Opsi D bertentangan dengan teks, sedangkan opsi lain tidak didukung teks.</p>"
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
      pembahasan: "<p>Paragraf 2 membahas kepala, kaki, kulit, lidah, dan kemampuan berlari → <b>ciri fisik dan kemampuan</b> Komodo.</p><p>Tempat hidup = paragraf 1, makanan = paragraf 3, ancaman = paragraf 4.</p>"
    },
    {
      id: "ing-08", bab: IN, level: 2, tipe: "pg", stimulus: T3,
      soal: "The underlined word \"<u>detect</u>\" in paragraph 2 is closest in meaning to …",
      opsi: ["hide", "notice", "produce", "remove", "avoid"],
      kunci: 1,
      hint: "Ganti kata \"detect\" dengan setiap opsi: lidah Komodo membantu mereka ___ bau makanan dari jarak jauh. Mana yang masuk akal?",
      pembahasan: "<p>\"help them <b>detect</b> the smell of food from several kilometres away\" → lidah membantu <i>mengenali/menangkap</i> bau dari jauh.</p><p>Sinonim yang paling tepat: <b>notice</b> (menyadari/mengenali).</p>"
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
      pembahasan: "<p>1. \"found only on a few islands in Indonesia\" ✔.</p><p>2. \"forked tongues … help them detect the smell of food\" ✔.</p><p>3. \"from deer and wild pigs <b>to dead animals</b>\" → juga makan bangkai → Salah.</p><p>4. Perburuan liar terhadap hewan mangsanya membuat makanan Komodo berkurang ✔.</p>"
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
      pembahasan: "<p>\"We left our homestay in Dieng at 1 a.m. <b>so that we could reach the summit before sunrise</b>.\"</p><p>\"So that\" = agar/supaya → menyatakan tujuan.</p>"
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
      pembahasan: "<p>Paragraf 1: jalur licin saat naik → paragraf 2: tiba di puncak dan melihat matahari terbit → paragraf 3: <i>on the way down</i> Raka terkilir → <i>at noon</i> tiba di homestay.</p>"
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
      pembahasan: "<p>\"Raka twisted his ankle … <b>We had to carry his backpack and walk even more slowly</b>.\" → sebab: Raka cedera.</p><p>Hujan terjadi malam sebelumnya, dan foto diambil di puncak, bukan saat turun.</p>"
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
      pembahasan: "<p>• \"when the sun rose … all our tiredness disappeared\" → lelah berubah menjadi takjub ✔<br>• Raka terkilir \"<b>because he was running</b>\" saat turun → ceroboh ✔<br>• Jalur \"steep and slippery\" → bukan kering dan mudah ✘<br>• \"exhausted but happy\", \"most unforgettable trip\" → tidak menyesal ✘<br>• Tidak ada informasi tentang pengalaman mendaki sebelumnya ✘</p>"
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
      pembahasan: "<p>Teks berjudul \"How to Make …\", berisi bahan dan langkah-langkah → teks <b>procedure</b>. Tujuannya menjelaskan cara membuat <i>rain gauge</i> (alat pengukur curah hujan).</p>"
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
      pembahasan: "<p>Langkah 2: \"Put some small stones … <b>so that it does not fall over in the wind</b>.\" → agar botol tidak terguling.</p>"
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
      pembahasan: "<p>1. Langkah 6: letakkan di area terbuka, <b>jauh dari pohon</b> → Rani salah.</p><p>2. Langkah 7: cek pada <b>waktu yang sama setiap hari</b> → Budi benar ✔.</p><p>3. Langkah 7: buang air hanya <b>sampai garis nol</b>, bukan semuanya → Sinta salah.</p><p>4. Langkah 5: bagian atas botol dibalik dan dipakai sebagai corong → Doni benar ✔.</p>"
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
      pembahasan: "<p>\"he saw ripe fruits on the trees across the river, <b>but</b> the river was full of hungry crocodiles\" → Kancil ingin buah di seberang, tetapi sungai penuh buaya.</p><p>Perintah raja hanyalah tipuan Kancil.</p>"
    },
    {
      id: "ing-18", bab: IN, level: 2, tipe: "pg", stimulus: T6,
      soal: "Kancil can best be described as …",
      opsi: ["honest and generous", "clever but deceitful", "brave and kind", "lazy and careless", "foolish and greedy"],
      kunci: 1,
      hint: "Lihat cara Kancil menyelesaikan masalahnya: apakah ia jujur kepada para buaya?",
      pembahasan: "<p>Kancil berhasil menyeberang dengan akal → <b>clever</b>. Namun ia berbohong soal daging dari raja → <b>deceitful</b> (suka menipu).</p><p>\"Foolish and greedy\" lebih cocok untuk para buaya.</p>"
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
      pembahasan: "<p>Pemimpin buaya berbisik: \"Kancil will come back to drink at this river someday. <b>We will be waiting.</b>\" Para buaya marah, sehingga kemungkinan besar mereka akan <b>mencoba menangkap Kancil</b> saat ia kembali minum.</p>"
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
      pembahasan: "<p>1. Hewan berbicara adalah unsur <b>fantasi</b> ✔.</p><p>2. Para buaya langsung antre karena tergiur janji daging ✔.</p><p>3. Akhir cerita menunjukkan buaya akan menunggu untuk membalas → kebohongan <b>bisa berakibat</b> → Salah.</p><p>4. Tidak ada daging; Kancil tidak menepati janjinya → Salah.</p>"
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
      pembahasan: "<p>\"As the waves approach shallow water … they <b>slow down</b>, and the water <b>piles up</b>, <i>so</i> their height increases dramatically.\"</p><p>Opsi C terbalik: di perairan dangkal gelombang justru melambat.</p>"
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
      pembahasan: "<p>Laut dalam: tinggi &lt; 1 m (<b>rendah</b>), kecepatan hingga 800 km/jam (<b>sangat cepat</b>).</p><p>Dekat pantai: <b>melambat</b>, tetapi tinggi bisa &gt; 30 m.</p>"
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
      pembahasan: "<p>• Paragraf 3 menyebut penyebab lain (gunung api, longsor bawah laut, meteorit) → \"always\" salah ✘<br>• \"up to 800 kilometres per hour, about as fast as a jet plane\" ✔<br>• \"the sea suddenly pulls back from the shore\" adalah tanda alami ✔<br>• \"ships hardly notice them\" → kapal tidak hancur ✘<br>• Paragraf 1: pergeseran lempeng mendorong air ke atas ✔</p>"
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
      pembahasan: "<p>Tesis: \"In my opinion, schools should <b>not ban smartphones completely</b>, but they should <b>control how phones are used</b>.\" Ditegaskan lagi di kesimpulan: \"With the right rules, they can help students learn better.\"</p>"
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
      pembahasan: "<p>1. Kebijakan negara dapat dicek → <b>fakta</b> ✔.</p><p>2. \"not the enemy\" adalah penilaian penulis → <b>opini</b>.</p><p>3. Hasil survei berupa angka yang dapat diverifikasi → <b>fakta</b> ✔.</p><p>4. \"the best solution\" adalah penilaian → <b>opini</b>.</p>"
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
      pembahasan: "<p>Opsi B langsung membandingkan <b>penggunaan terkontrol</b> dan <b>larangan total</b>, lalu menunjukkan hasil belajar lebih baik → paling memperkuat argumen.</p><p>A justru melemahkan; C dan D tidak relevan; E mendukung pihak yang setuju larangan.</p>"
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
      pembahasan: "<p>Penulis mendukung aturan yang jelas: HP disimpan saat pelajaran dan hanya dipakai jika guru mengizinkan, karena HP bisa membantu belajar → sesuai opsi <b>B</b>.</p><p>A = larangan total (ditolak penulis); D = bebas tanpa aturan (juga ditolak penulis).</p>"
    },

    // ---------- Text 9: Data & claim ----------
    {
      id: "ing-28", bab: TU, level: 2, tipe: "pg", stimulus: T9,
      soal: "What percentage of the students surveyed bring a reusable water bottle every day?",
      opsi: ["12.4%", "43%", "58%", "62%", "124%"],
      kunci: 3,
      hint: "Persentase = (jumlah siswa dengan kebiasaan itu / total siswa yang disurvei) × 100%.",
      pembahasan: "<p>124 / 200 × 100% = <b>62%</b>.</p>"
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
      pembahasan: "<p>• 124 &gt; 100 → lebih dari setengah ✔<br>• 40 adalah angka terkecil di tabel ✔<br>• 86 &lt; 100 → kurang dari setengah ✔<br>• Hanya 58 dari 200 yang menolak sedotan ✘<br>• Penjualan turun 35%, bukan berhenti total ✘</p>"
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
      pembahasan: "<p>1. Botol plastik yang terjual berkurang → mendukung klaim ✔.</p><p>2. Data hanya tentang penjualan minuman botol satu bulan; sampah plastik lain (bungkus makanan, kantong) tidak diukur → <b>belum cukup</b> membuktikan → Salah.</p><p>3. Mengukur jumlah sampah plastik sebelum dan sesudah kampanye adalah bukti langsung → memperkuat klaim ✔.</p><p>4. Survei dilakukan <b>sebelum</b> kampanye dan tentang kebiasaan di rumah, jadi tidak bisa menunjukkan dampak kampanye → Salah.</p>"
    }
  ]};
})();
