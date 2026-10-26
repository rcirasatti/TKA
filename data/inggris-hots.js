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
      pembahasan: "<p>\"which\" = <i>ordinary scooters</i> (jamak). Skuter <b>didorong</b> oleh kaki → pasif present: <b>are + V3</b> → <b>are pushed</b>.</p><p>\"is pushed\" salah karena subjeknya jamak; \"are pushing\" aktif (skuter mendorong sesuatu) → tidak logis.</p>"
    },
    {
      id: "inh-02", bab: GR, level: 1, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (2)?",
      opsi: ["power", "is powered", "are powered", "powering", "were powering"],
      kunci: 2,
      hint: "Ada frasa \"by a rechargeable battery\" yang menunjukkan pelaku. Subjeknya \"electric scooters\" (jamak), dan teks memakai present tense.",
      pembahasan: "<p>Skuter listrik <b>digerakkan oleh</b> baterai → pasif, subjek jamak, present → <b>are powered</b>.</p>"
    },
    {
      id: "inh-03", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (3)?",
      opsi: ["makes", "make", "is making", "has made", "was made"],
      kunci: 1,
      hint: "Cari subjek kalimatnya: \"Their low price AND small size\". Dua hal yang digabung dengan \"and\" dianggap jamak.",
      pembahasan: "<p>Subjek = <i>low price and small size</i> → jamak → kata kerja tanpa -s: <b>make</b>. Pola: make + objek + adjektiva (make them popular).</p><p>Jebakan: memilih \"makes\" karena kata terdekat (\"size\") tunggal.</p>"
    },
    {
      id: "inh-04", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (4)?",
      opsi: ["However", "Moreover", "Because of", "Although", "Instead"],
      kunci: 1,
      hint: "Kalimat sebelumnya menyebut kelebihan skuter (murah, kecil). Kalimat setelahnya menyebut kelebihan LAIN (tanpa asap). Hubungannya menambah atau mempertentangkan?",
      pembahasan: "<p>Kalimat (4) <b>menambahkan</b> kelebihan lain → konjungsi penambahan: <b>Moreover</b> (= selain itu).</p><p>However/Instead = pertentangan. \"Because of\" dan \"Although\" harus diikuti frasa/klausa dan tidak dipakai sendirian di awal kalimat seperti ini.</p>"
    },
    {
      id: "inh-05", bab: GR, level: 2, tipe: "pg", stimulus: TA,
      soal: "Which of the following best completes blank (5)?",
      opsi: ["and", "but also", "either", "neither", "or"],
      kunci: 1,
      hint: "Kata \"not only\" selalu berpasangan dengan kata tertentu (correlative conjunction).",
      pembahasan: "<p>Pasangan tetap: <b>not only … but also …</b> (tidak hanya … tetapi juga …).</p><p>Pasangan lain: either … or, neither … nor, both … and.</p>"
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
      pembahasan: "<p>1. \"I had <b>never</b> worked with wild ones before\" → Salah.</p><p>2. \"We were <b>not allowed</b> to use bright flashlights\" → Salah.</p><p>3. \"moved the eggs to a protected hatchery, where they were safe from predators and illegal collectors\" ✔.</p><p>4. \"I have stopped using single-use plastic bags\" ✔.</p>"
    },
    {
      id: "inh-07", bab: IN, level: 1, tipe: "pg", stimulus: TB,
      soal: "The underlined word \"<u>them</u>\" in paragraph 2 refers to …",
      opsi: ["the volunteers", "the rangers", "the turtles", "the flashlights", "the eggs"],
      kunci: 2,
      hint: "Siapa yang bisa \"kembali ke laut sebelum bertelur\"?",
      pembahasan: "<p>\"the light could confuse <b>the turtles</b> and make <b>them</b> return to the sea before laying their eggs\" → them = <b>the turtles</b>.</p>"
    },
    {
      id: "inh-08", bab: IN, level: 2, tipe: "pg", stimulus: TB,
      soal: "The underlined word \"<u>fragile</u>\" in paragraph 3 is closest in meaning to …",
      opsi: ["strong", "easily harmed", "valuable", "very short", "mysterious"],
      kunci: 1,
      hint: "Penulis baru saja mendengar bahwa hanya 1 dari 1.000 tukik yang bertahan hidup. Kehidupan seperti apa yang digambarkan?",
      pembahasan: "<p>Hanya satu dari seribu tukik yang bertahan sampai dewasa → hidupnya <b>mudah terancam/rapuh</b> → <b>easily harmed</b>.</p>"
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
      pembahasan: "<p>• \"only about one in a thousand of them would survive\" ✔<br>• \"the number of nests had dropped by almost half in the last ten years\" ✔<br>• \"I felt both excited and nervous\" = <i>mixed feelings</i> ✔<br>• Rangers <i>melindungi</i> telur dari pengambil ilegal ✘<br>• Menetas pada \"my <b>fifth</b> night\" ✘</p>"
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
      pembahasan: "<p>Fakta \"1 dari 1.000\" langsung diikuti \"<b>Hearing that, I realised how fragile their lives were</b>\" → fakta itu disebut untuk menjelaskan <b>apa yang membuat penulis sadar</b> betapa rentannya penyu.</p>"
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
      pembahasan: "<p>\"Avoid adding meat, bones, or oily food <b>because they produce bad smells and attract rats</b>.\"</p>"
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
      pembahasan: "<p>Judul \"Making Compost at Home\" dan kalimat-kalimat perintah berurutan → teks <b>procedure</b> yang bertujuan <b>menjelaskan langkah-langkah membuat kompos</b>.</p>"
    },
    {
      id: "inh-13", bab: TU, level: 2, tipe: "pg", stimulus: TC,
      soal: "Match each action with its category." + KAT +
        "<br><br>1) Choosing a shady spot<br>2) Adding a layer of green materials on top of brown materials<br>3) Stirring the pile every week<br>4) Adding brown materials when the pile is too wet<br>5) Making small holes in the container",
      opsi: ["A, B, C, C, A", "A, B, B, C, A", "B, A, C, C, A", "A, C, B, C, B", "A, B, C, B, A"],
      kunci: 0,
      hint: "Persiapan = sebelum mengisi wadah. Proses pelapisan = saat menyusun bahan. Perawatan = yang dilakukan rutin setelah tumpukan jadi.",
      pembahasan: "<p>1) Memilih tempat teduh → <b>A</b> (persiapan)<br>2) Menyusun lapisan hijau di atas cokelat → <b>B</b> (pelapisan)<br>3) Mengaduk setiap minggu → <b>C</b> (perawatan)<br>4) Menambah bahan cokelat jika terlalu basah → <b>C</b> (perawatan)<br>5) Membuat lubang pada wadah → <b>A</b> (persiapan)</p>"
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
      pembahasan: "<p>Mengaduk menambah <b>oksigen</b> yang membantu mikroorganisme mengurai sampah <b>lebih cepat</b>. Tanpa diaduk, oksigen berkurang → penguraian <b>melambat</b>.</p>"
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
      pembahasan: "<p>✔ Diaduk setiap minggu, ✔ lembap seperti spons diperas, ✔ di tempat teduh.</p><p>✘ Tulang harus dihindari. ✘ Wadah justru harus berlubang agar udara masuk.</p>"
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
      pembahasan: "<p>Paragraf 1: \"this change deserves serious consideration\"; paragraf 5: later start \"is about helping them learn when their brains are ready\" → opsi <b>B</b>.</p><p>Opsi C adalah pendapat pihak yang tidak setuju (critics), bukan pendapat penulis.</p>"
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
      pembahasan: "<p>1. Jam masuk sekolah dapat dicek → fakta ✔.<br>2. \"In my view … deserves\" → opini.<br>3. Rekomendasi resmi lembaga dapat diverifikasi → fakta ✔.<br>4. Penilaian/penafsiran penulis → opini.</p>"
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
      pembahasan: "<p>\"These concerns are <b>understandable</b>\" (mengakui) + \"<b>but</b> they could be solved with flexible schedules and better school transport\" (memberi solusi). Teknik ini disebut <b>konsesi–sanggahan</b>.</p>"
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
      pembahasan: "<p>Argumennya ditujukan untuk sekolah Indonesia, tetapi buktinya masih dari AS. Data dari <b>sekolah Indonesia</b> yang berhasil setelah mengundurkan jam masuk adalah bukti yang paling relevan dan kuat.</p><p>Opsi A justru melemahkan, sedangkan opsi C mendukung pihak kontra.</p>"
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
      pembahasan: "<p>• Paragraf 2: \"During puberty, the body clock shifts\" ✔<br>• Paragraf 5 justru menyatakan \"<i>not</i> about making students lazy\" ✘<br>• Paragraf 4: traffic jams dan parents before work ✔<br>• Paragraf 3: attendance improved ✔<br>• Paragraf 1: banyak sekolah masuk 6.30/7.00 ✘</p>"
    }
  ]};
})();
