// Bank soal Biologi — urutan mengikuti kerangka asesmen TKA SMA (Pusmendik):
// Keanekaragaman Hayati → Sel → Proses-proses pada Makhluk Hidup, dari Level 1 ke Level 3.
// Soal keterampilan proses (data percobaan) disisipkan di tiap elemen.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL.biologi = { soal: [

  // ===================== KEANEKARAGAMAN HAYATI =====================
  {
    id: "bio-01", bab: "Keanekaragaman Hayati", level: 1, tipe: "pg",
    soal: "Di sebuah taman terdapat bunga mawar berwarna merah, putih, kuning, dan merah muda. Variasi tersebut menunjukkan keanekaragaman tingkat …",
    opsi: ["Gen", "Jenis (spesies)", "Ekosistem", "Populasi", "Komunitas"],
    kunci: 0,
    hint: "Semua bunga itu masih satu spesies yang sama (mawar). Perbedaan dalam satu spesies disebabkan oleh apa?",
    pembahasan: "<p>Mawar merah, putih, dan kuning tetap satu spesies. Perbedaan sifat <b>dalam satu spesies</b> disebabkan oleh perbedaan susunan gen → keanekaragaman tingkat <b>gen</b>.</p><p>Tingkat jenis = perbedaan antarspesies (mis. mawar vs melati). Tingkat ekosistem = perbedaan lingkungan beserta penghuninya (mis. hutan vs pantai).</p>"
  },
  {
    id: "bio-02", bab: "Klasifikasi Makhluk Hidup", level: 1, tipe: "pg",
    soal: "Penulisan nama ilmiah padi yang benar menurut aturan tata nama ganda (binomial nomenklatur) adalah …",
    opsi: ["Oryza Sativa", "oryza sativa", "<i>Oryza sativa</i>", "<i>Oryza Sativa</i>", "<i>oryza</i> Sativa"],
    kunci: 2,
    hint: "Kata pertama (genus) dan kata kedua (penunjuk spesies) punya aturan huruf kapital yang berbeda, dan keduanya dicetak miring atau digarisbawahi.",
    pembahasan: "<p>Aturan binomial nomenklatur (Carolus Linnaeus):</p><p>• Terdiri atas 2 kata: <b>genus</b> + <b>penunjuk spesies</b>.<br>• Kata pertama diawali huruf <b>kapital</b>, kata kedua seluruhnya huruf <b>kecil</b>.<br>• Dicetak <b>miring</b> (atau digarisbawahi terpisah jika ditulis tangan).</p><p>Jadi yang benar: <b><i>Oryza sativa</i></b>.</p>"
  },
  {
    id: "bio-03", bab: "Klasifikasi Makhluk Hidup", level: 2, tipe: "kategori",
    stimulus: "<p>Kucing rumah (<i>Felis catus</i>) dan singa (<i>Panthera leo</i>) termasuk famili Felidae. Anjing (<i>Canis familiaris</i>) termasuk famili Canidae. Ketiganya termasuk ordo Carnivora.</p>",
    soal: "Tentukan benar atau salah pernyataan tentang sistem klasifikasi berikut!",
    pernyataan: [
      "Semakin rendah tingkat takson, semakin banyak persamaan ciri anggotanya.",
      "Semakin rendah tingkat takson, semakin sedikit jumlah anggotanya.",
      "Kucing lebih dekat kekerabatannya dengan anjing dibandingkan dengan singa.",
      "Kucing dan singa berbeda genus tetapi satu famili."
    ],
    kunci: [true, true, false, true],
    hint: "Urutan takson: kingdom – filum – kelas – ordo – famili – genus – spesies. Makin banyak takson yang sama, makin dekat kekerabatannya.",
    pembahasan: "<p>1 & 2. Makin rendah takson (menuju spesies) → persamaan ciri makin <b>banyak</b>, anggota makin <b>sedikit</b>, kekerabatan makin dekat ✔.</p><p>3. Kucing dan singa sama sampai tingkat <b>famili</b> (Felidae), sedangkan kucing dan anjing hanya sama sampai tingkat <b>ordo</b>. Jadi kucing lebih dekat dengan <i>singa</i> → Salah.</p><p>4. Genus kucing <i>Felis</i>, genus singa <i>Panthera</i> → beda genus, satu famili ✔.</p>"
  },
  {
    id: "bio-04", bab: "Klasifikasi Makhluk Hidup", level: 2, tipe: "mcma",
    soal: "Ciri-ciri berikut yang dimiliki oleh anggota kingdom Fungi (jamur) adalah … (pilih semua yang benar)",
    opsi: [
      "Dinding sel tersusun dari kitin",
      "Memiliki klorofil sehingga dapat berfotosintesis",
      "Bersifat heterotrof",
      "Sel bersifat eukariotik",
      "Dinding sel tersusun dari peptidoglikan"
    ],
    kunci: [0, 2, 3],
    hint: "Jamur bukan tumbuhan dan bukan bakteri. Bagaimana jamur memperoleh makanan, dan apakah selnya punya membran inti?",
    pembahasan: "<p>Ciri Fungi:</p><p>• Dinding sel dari <b>kitin</b> ✔<br>• <b>Tidak</b> berklorofil → tidak berfotosintesis<br>• <b>Heterotrof</b> (saprofit, parasit, atau simbiosis) ✔<br>• <b>Eukariotik</b> (memiliki membran inti) ✔<br>• Peptidoglikan adalah penyusun dinding sel <i>bakteri</i>, bukan jamur.</p>"
  },
  {
    id: "bio-05", bab: "Bakteri", level: 1, tipe: "pg",
    soal: "Ciri utama yang membedakan sel bakteri dari sel hewan dan sel tumbuhan adalah …",
    opsi: [
      "Bakteri memiliki membran sel",
      "Bakteri tidak memiliki membran inti (prokariotik)",
      "Bakteri memiliki ribosom",
      "Bakteri memiliki sitoplasma",
      "Bakteri memiliki DNA"
    ],
    kunci: 1,
    hint: "Opsi yang dimiliki SEMUA sel (bakteri, hewan, tumbuhan) tidak bisa menjadi pembeda.",
    pembahasan: "<p>Membran sel, ribosom, sitoplasma, dan DNA dimiliki <i>semua</i> sel, jadi bukan pembeda.</p><p>Bakteri adalah sel <b>prokariotik</b>: materi genetiknya tidak dibungkus membran inti (berada di daerah nukleoid) dan tidak punya organel bermembran seperti mitokondria.</p>"
  },
  {
    id: "bio-06", bab: "Bakteri", level: 2, tipe: "mcma",
    soal: "Bakteri berikut yang menguntungkan bagi manusia adalah … (pilih semua yang benar)",
    opsi: [
      "<i>Lactobacillus bulgaricus</i> — pembuatan yoghurt",
      "<i>Rhizobium</i> sp. — fiksasi nitrogen pada akar kacang-kacangan",
      "<i>Mycobacterium tuberculosis</i> — penyebab TBC",
      "<i>Acetobacter xylinum</i> — pembuatan nata de coco",
      "<i>Salmonella typhi</i> — penyebab tifus"
    ],
    kunci: [0, 1, 3],
    hint: "Cocokkan nama bakteri dengan perannya; bakteri penyebab penyakit tentu merugikan.",
    pembahasan: "<p>Menguntungkan:<br>• <i>Lactobacillus bulgaricus</i> → yoghurt ✔<br>• <i>Rhizobium</i> → menyuburkan tanah dengan mengikat N<sub>2</sub> ✔<br>• <i>Acetobacter xylinum</i> → nata de coco ✔</p><p>Merugikan (patogen): <i>Mycobacterium tuberculosis</i> (TBC) dan <i>Salmonella typhi</i> (tifus).</p>"
  },
  {
    id: "bio-07", bab: "Bakteri", level: 2, tipe: "pg",
    soal: "Suatu bakteri membelah diri secara biner setiap 20 menit. Jika mula-mula terdapat 1 sel bakteri dan kondisi lingkungan ideal, jumlah bakteri setelah 2 jam adalah …",
    opsi: ["6 sel", "12 sel", "32 sel", "64 sel", "128 sel"],
    kunci: 3,
    hint: "Hitung dulu berapa kali pembelahan terjadi dalam 2 jam. Setiap pembelahan, jumlah sel menjadi 2 kali lipat.",
    pembahasan: "<p>2 jam = 120 menit → jumlah pembelahan = 120 / 20 = 6 kali.</p><p>Jumlah sel = 1 × 2<sup>6</sup> = <b>64 sel</b>.</p><p>Jebakan: 6 sel (hanya jumlah pembelahan) atau 12 sel (dikali 2, bukan dipangkatkan).</p>"
  },
  {
    id: "bio-08", bab: "Ekosistem", level: 1, tipe: "pg",
    soal: "Perhatikan rantai makanan berikut: padi → tikus → ular → elang. Organisme yang berperan sebagai konsumen tingkat II adalah …",
    opsi: ["Padi", "Tikus", "Ular", "Elang", "Pengurai"],
    kunci: 2,
    hint: "Produsen ada di awal rantai. Konsumen tingkat I memakan produsen, konsumen tingkat II memakan konsumen tingkat I.",
    pembahasan: "<p>Padi = produsen. Tikus = konsumen I (herbivor). <b>Ular</b> = konsumen II (memakan tikus). Elang = konsumen III.</p>"
  },
  {
    id: "bio-09", bab: "Ekosistem", level: 3, tipe: "kategori",
    stimulus: "<p>Pada suatu padang rumput ditemukan hubungan makan-dimakan berikut:</p><p>• Rumput dimakan oleh belalang dan kelinci.<br>• Belalang dimakan oleh katak dan burung pipit.<br>• Katak dan kelinci dimakan oleh ular.<br>• Ular dan burung pipit dimakan oleh elang.</p>",
    soal: "Berdasarkan jaring-jaring makanan tersebut, tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Rumput berperan sebagai produsen.",
      "Jika populasi katak menurun drastis, populasi belalang cenderung meningkat.",
      "Ular dapat berperan sebagai konsumen tingkat II maupun konsumen tingkat III.",
      "Elang hanya berperan sebagai konsumen tingkat III."
    ],
    kunci: [true, true, true, false],
    hint: "Telusuri setiap jalur dari rumput sampai ke puncak. Satu organisme bisa menempati tingkat trofik berbeda pada jalur yang berbeda.",
    pembahasan: "<p>1. Rumput berfotosintesis → produsen ✔.</p><p>2. Katak adalah pemangsa belalang. Jika katak berkurang, tekanan pemangsaan turun → belalang cenderung bertambah ✔.</p><p>3. Rumput → kelinci → <b>ular</b> (konsumen II); rumput → belalang → katak → <b>ular</b> (konsumen III) ✔.</p><p>4. Rumput → belalang → pipit → elang (konsumen III), tetapi rumput → belalang → katak → ular → elang (konsumen <b>IV</b>). Jadi elang tidak <i>hanya</i> konsumen III → Salah.</p>"
  },
  {
    id: "bio-10", bab: "Ekosistem", level: 2, tipe: "pg",
    soal: "Dalam suatu ekosistem, produsen menyimpan energi sebesar 10.000 kkal. Jika hanya sekitar 10% energi yang berpindah ke setiap tingkat trofik berikutnya, energi yang diterima konsumen tingkat II adalah …",
    opsi: ["10 kkal", "100 kkal", "1.000 kkal", "2.000 kkal", "9.000 kkal"],
    kunci: 1,
    hint: "Produsen → konsumen I → konsumen II: ada dua kali perpindahan energi.",
    pembahasan: "<p>Produsen 10.000 kkal → konsumen I = 10% × 10.000 = 1.000 kkal → konsumen II = 10% × 1.000 = <b>100 kkal</b>.</p><p>Sisa energi di tiap tingkat hilang sebagai panas (respirasi) dan tidak dapat dimanfaatkan tingkat berikutnya.</p>"
  },
  {
    id: "bio-11", bab: "Ekosistem", level: 2, tipe: "pg",
    soal: "Dalam daur nitrogen, bakteri <i>Nitrosomonas</i> mengubah amonia (NH<sub>3</sub>) menjadi nitrit (NO<sub>2</sub><sup>−</sup>), lalu <i>Nitrobacter</i> mengubah nitrit menjadi nitrat (NO<sub>3</sub><sup>−</sup>). Proses tersebut disebut …",
    opsi: ["Fiksasi nitrogen", "Amonifikasi", "Nitrifikasi", "Denitrifikasi", "Asimilasi"],
    kunci: 2,
    hint: "Produk akhirnya adalah nitrat. Nama prosesnya mirip dengan nama produknya.",
    pembahasan: "<p>Amonia → nitrit → nitrat = <b>nitrifikasi</b>.</p><p>• Fiksasi: N<sub>2</sub> udara → senyawa N (mis. oleh <i>Rhizobium</i>).<br>• Amonifikasi: sisa organisme → amonia (oleh pengurai).<br>• Denitrifikasi: nitrat → N<sub>2</sub> kembali ke udara.<br>• Asimilasi: tumbuhan menyerap nitrat untuk membuat protein.</p>"
  },

  // ===================== SEL & METABOLISME =====================
  {
    id: "bio-12", bab: "Sel", level: 1, tipe: "pg",
    soal: "Organel sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) adalah …",
    opsi: ["Ribosom", "Mitokondria", "Badan Golgi", "Lisosom", "Retikulum endoplasma halus"],
    kunci: 1,
    hint: "Organel ini sering dijuluki \"pembangkit tenaga sel\" dan memiliki membran dalam yang berlipat-lipat (krista).",
    pembahasan: "<p><b>Mitokondria</b> adalah tempat siklus Krebs dan transpor elektron yang menghasilkan sebagian besar ATP.</p><p>Ribosom = sintesis protein; badan Golgi = pengemasan dan sekresi; lisosom = pencernaan intrasel; RE halus = sintesis lipid dan detoksifikasi.</p>"
  },
  {
    id: "bio-13", bab: "Sel", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang perbedaan sel hewan dan sel tumbuhan berikut!",
    pernyataan: [
      "Dinding sel hanya ditemukan pada sel tumbuhan.",
      "Kloroplas ditemukan pada sel tumbuhan yang berwarna hijau.",
      "Sentriol umumnya ditemukan pada sel hewan.",
      "Sel hewan memiliki vakuola yang besar dan menetap."
    ],
    kunci: [true, true, true, false],
    hint: "Bayangkan bentuk sel tumbuhan yang kaku dan tetap. Bagian apa yang membuatnya kaku dan menjaga tekanan airnya?",
    pembahasan: "<p>1. Dinding sel (selulosa) hanya pada sel tumbuhan ✔.<br>2. Kloroplas untuk fotosintesis pada sel tumbuhan hijau ✔.<br>3. Sentriol berperan dalam pembelahan sel hewan ✔.<br>4. Vakuola <b>besar</b> adalah ciri sel <i>tumbuhan</i>; sel hewan hanya punya vakuola kecil atau tidak ada → Salah.</p>"
  },
  {
    id: "bio-14", bab: "Sel", level: 3, tipe: "kategori",
    stimulus: "<p>Seorang siswa merendam potongan kentang berukuran sama dalam larutan gula dengan konsentrasi berbeda selama 1 jam, lalu mengukur perubahan massanya.</p><table><tr><th>Konsentrasi gula</th><th>Perubahan massa</th></tr><tr><td>0% (air murni)</td><td>+12%</td></tr><tr><td>10%</td><td>+4%</td></tr><tr><td>20%</td><td>−3%</td></tr><tr><td>30%</td><td>−9%</td></tr></table>",
    soal: "Berdasarkan data tersebut, tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Pada larutan 0%, air masuk ke dalam sel kentang secara osmosis.",
      "Konsentrasi larutan yang isotonis dengan sel kentang berada di antara 10% dan 20%.",
      "Pada larutan 30%, sel kentang kehilangan air.",
      "Variabel bebas pada percobaan ini adalah perubahan massa kentang."
    ],
    kunci: [true, true, true, false],
    hint: "Massa bertambah = air masuk, massa berkurang = air keluar. Isotonis berarti tidak ada perubahan massa. Variabel bebas adalah yang sengaja diubah-ubah oleh peneliti.",
    pembahasan: "<p>1. Air murni hipotonis terhadap sel → air masuk (osmosis) → massa naik ✔.</p><p>2. Perubahan massa berubah dari + (10%) ke − (20%), jadi titik 0% (isotonis) ada di antara keduanya ✔.</p><p>3. Larutan 30% hipertonis → air keluar dari sel → massa turun (sel dapat mengalami plasmolisis) ✔.</p><p>4. Yang sengaja diubah adalah <b>konsentrasi gula</b> (variabel bebas). Perubahan massa adalah hasil yang diukur (<b>variabel terikat</b>) → Salah.</p>"
  },
  {
    id: "bio-15", bab: "Metabolisme Sel", level: 2, tipe: "mcma",
    soal: "Pernyataan berikut yang merupakan sifat enzim adalah … (pilih semua yang benar)",
    opsi: [
      "Tersusun atas protein",
      "Bekerja secara spesifik terhadap substrat tertentu",
      "Ikut habis bereaksi bersama substrat",
      "Kerjanya dipengaruhi suhu dan pH",
      "Dapat bekerja pada semua jenis substrat"
    ],
    kunci: [0, 1, 3],
    hint: "Enzim adalah biokatalisator. Ingat sifat katalis: mempercepat reaksi tetapi tidak ikut berubah. Ingat juga model \"gembok dan kunci\".",
    pembahasan: "<p>• Enzim adalah <b>protein</b> ✔<br>• Bekerja <b>spesifik</b> (model gembok–kunci) ✔ — sehingga tidak bisa bekerja pada semua substrat<br>• Sebagai katalis, enzim <b>tidak ikut habis</b> dan dapat dipakai berulang<br>• Dipengaruhi <b>suhu dan pH</b> karena protein dapat rusak (terdenaturasi) ✔</p>"
  },
  {
    id: "bio-16", bab: "Metabolisme Sel", level: 3, tipe: "pg",
    stimulus: "<p>Potongan hati ayam (mengandung enzim katalase) dimasukkan ke dalam larutan H<sub>2</sub>O<sub>2</sub> pada suhu berbeda. Banyaknya gelembung gas diamati.</p><table><tr><th>Suhu (°C)</th><th>10</th><th>20</th><th>30</th><th>40</th><th>50</th><th>60</th></tr><tr><td>Gelembung</td><td>+</td><td>++</td><td>+++</td><td>++++</td><td>+</td><td>–</td></tr></table>",
    soal: "Penjelasan yang paling tepat mengapa pada suhu 60 °C tidak terbentuk gelembung adalah …",
    opsi: [
      "Substrat H<sub>2</sub>O<sub>2</sub> sudah habis bereaksi",
      "Enzim katalase mengalami denaturasi sehingga sisi aktifnya rusak",
      "Enzim katalase menjadi tidak aktif sementara dan akan aktif kembali jika didinginkan sedikit",
      "Suhu tinggi menghambat pembentukan gas karbon dioksida",
      "Suhu optimum enzim katalase adalah 60 °C"
    ],
    kunci: 1,
    hint: "Enzim adalah protein. Apa yang terjadi pada protein (misalnya putih telur) jika dipanaskan?",
    pembahasan: "<p>Aktivitas katalase naik sampai suhu optimum (±40 °C), lalu turun drastis.</p><p>Pada 60 °C, struktur protein enzim <b>rusak (terdenaturasi)</b> sehingga bentuk sisi aktif berubah dan tidak bisa mengikat substrat. Kerusakan ini permanen.</p><p>Opsi C keliru: enzim yang hanya <i>tidak aktif sementara</i> adalah kondisi pada suhu rendah. Gas yang terbentuk adalah O<sub>2</sub> (2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>), bukan CO<sub>2</sub>.</p>"
  },
  {
    id: "bio-17", bab: "Metabolisme Sel", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang respirasi aerob berikut!",
    pernyataan: [
      "Glikolisis berlangsung di sitoplasma.",
      "Siklus Krebs berlangsung di matriks mitokondria.",
      "Tahap transpor elektron menghasilkan ATP paling banyak.",
      "Oksigen berperan sebagai akseptor elektron pada tahap glikolisis."
    ],
    kunci: [true, true, true, false],
    hint: "Urutan tahap: glikolisis → dekarboksilasi oksidatif → siklus Krebs → transpor elektron. Oksigen baru diperlukan di tahap paling akhir.",
    pembahasan: "<p>1. Glikolisis (glukosa → 2 piruvat) di <b>sitoplasma</b> ✔.<br>2. Siklus Krebs di <b>matriks mitokondria</b> ✔.<br>3. Transpor elektron di membran dalam mitokondria menghasilkan ATP paling banyak (buku SMA umumnya menyebut 34 ATP dari total 38 ATP; glikolisis dan siklus Krebs masing-masing hanya 2 ATP) ✔.<br>4. Oksigen adalah <b>akseptor elektron terakhir</b> pada tahap <i>transpor elektron</i> (membentuk H<sub>2</sub>O), bukan pada glikolisis → Salah.</p>"
  },
  {
    id: "bio-18", bab: "Metabolisme Sel", level: 1, tipe: "pg",
    soal: "Setelah berlari jarak jauh, otot kaki seseorang terasa pegal. Hal ini disebabkan oleh …",
    opsi: [
      "Penumpukan asam laktat hasil fermentasi di sel otot",
      "Penumpukan alkohol hasil fermentasi di sel otot",
      "Kelebihan oksigen di sel otot",
      "Penumpukan glukosa di sel otot",
      "Kelebihan ATP di sel otot"
    ],
    kunci: 0,
    hint: "Saat aktivitas berat, pasokan oksigen ke otot tidak mencukupi sehingga sel otot melakukan respirasi tanpa oksigen.",
    pembahasan: "<p>Kekurangan O<sub>2</sub> membuat sel otot melakukan <b>fermentasi asam laktat</b>: glukosa → asam laktat + 2 ATP.</p><p>Penumpukan <b>asam laktat</b> menyebabkan rasa pegal dan lelah. Fermentasi alkohol terjadi pada ragi (khamir), bukan pada otot manusia.</p>"
  },
  {
    id: "bio-19", bab: "Metabolisme Sel", level: 2, tipe: "pg",
    soal: "Oksigen (O<sub>2</sub>) yang dihasilkan pada proses fotosintesis berasal dari …",
    opsi: [
      "Penguraian karbon dioksida pada siklus Calvin",
      "Penguraian molekul air (fotolisis) pada reaksi terang",
      "Penguraian glukosa pada reaksi gelap",
      "Udara yang masuk melalui stomata",
      "Pemecahan klorofil oleh cahaya"
    ],
    kunci: 1,
    hint: "Reaksi terang memerlukan cahaya dan air. Cahaya memecah salah satu bahan baku fotosintesis.",
    pembahasan: "<p>Pada <b>reaksi terang</b> (di membran tilakoid), energi cahaya memecah air: 2H<sub>2</sub>O → 4H<sup>+</sup> + 4e<sup>−</sup> + <b>O<sub>2</sub></b>. Proses ini disebut <b>fotolisis</b>.</p><p>CO<sub>2</sub> tidak diuraikan menjadi O<sub>2</sub>; CO<sub>2</sub> difiksasi pada siklus Calvin (reaksi gelap) untuk membentuk glukosa.</p>"
  },
  {
    id: "bio-20", bab: "Metabolisme Sel", level: 3, tipe: "mcma",
    stimulus: "<p>Tanaman air <i>Hydrilla</i> dimasukkan ke dalam tabung berisi air, lalu disinari lampu dari jarak berbeda. Gelembung gas yang muncul dihitung selama 5 menit.</p><table><tr><th>Jarak lampu (cm)</th><th>10</th><th>20</th><th>30</th><th>40</th></tr><tr><td>Jumlah gelembung</td><td>30</td><td>18</td><td>9</td><td>4</td></tr></table>",
    soal: "Pernyataan yang benar berdasarkan percobaan tersebut adalah … (pilih semua yang benar)",
    opsi: [
      "Variabel bebasnya adalah jarak lampu",
      "Gelembung gas yang terbentuk adalah oksigen",
      "Laju fotosintesis meningkat jika intensitas cahaya meningkat",
      "Variabel terikatnya adalah jenis tanaman",
      "Gelembung gas yang terbentuk adalah karbon dioksida"
    ],
    kunci: [0, 1, 2],
    hint: "Makin dekat lampu, makin terang cahaya yang diterima tanaman. Jenis tanaman tidak diubah-ubah, jadi termasuk variabel apa?",
    pembahasan: "<p>• Jarak lampu sengaja diubah → <b>variabel bebas</b> ✔<br>• Fotosintesis menghasilkan gas <b>O<sub>2</sub></b> ✔<br>• Makin dekat lampu (cahaya makin kuat), gelembung makin banyak → laju fotosintesis <b>naik</b> ✔<br>• Jenis tanaman dibuat sama → <i>variabel kontrol</i>. Variabel terikatnya adalah jumlah gelembung.<br>• CO<sub>2</sub> justru <i>dipakai</i> dalam fotosintesis, bukan dihasilkan.</p>"
  },

  // ===================== PROSES-PROSES PADA MAKHLUK HIDUP =====================
  {
    id: "bio-21", bab: "Sistem Sirkulasi", level: 1, tipe: "pg",
    soal: "Darah yang kaya oksigen dari paru-paru masuk ke jantung melalui … dan menuju ruang …",
    opsi: [
      "vena kava, atrium kanan",
      "vena pulmonalis, atrium kiri",
      "arteri pulmonalis, ventrikel kanan",
      "aorta, ventrikel kiri",
      "vena pulmonalis, ventrikel kanan"
    ],
    kunci: 1,
    hint: "Pembuluh yang menuju jantung disebut vena. Darah dari paru-paru masuk ke sisi jantung yang nantinya memompa darah ke seluruh tubuh.",
    pembahasan: "<p>Peredaran darah kecil: ventrikel kanan → arteri pulmonalis → paru-paru (mengikat O<sub>2</sub>) → <b>vena pulmonalis</b> → <b>atrium kiri</b>.</p><p>Vena pulmonalis adalah satu-satunya vena yang membawa darah kaya oksigen.</p>"
  },
  {
    id: "bio-22", bab: "Sistem Sirkulasi", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang golongan darah sistem ABO dan transfusi berikut!",
    pernyataan: [
      "Orang bergolongan darah A memiliki aglutinogen A dan aglutinin β (anti-B).",
      "Orang bergolongan darah O dapat menerima darah dari semua golongan darah.",
      "Orang bergolongan darah AB tidak memiliki aglutinin dalam plasmanya.",
      "Orang bergolongan darah B dapat mendonorkan darahnya kepada orang bergolongan darah AB."
    ],
    kunci: [true, false, true, true],
    hint: "Aglutinogen ada di permukaan sel darah merah, aglutinin (antibodi) ada di plasma. Penggumpalan terjadi jika aglutinogen donor bertemu aglutinin resipien yang sesuai.",
    pembahasan: "<p>1. Golongan A: aglutinogen A, aglutinin β ✔.</p><p>2. Golongan O memiliki aglutinin α dan β, sehingga darah A, B, atau AB akan menggumpal. Golongan O hanya bisa menerima dari O. O adalah <b>donor</b> universal, bukan resipien universal → Salah.</p><p>3. Golongan AB tidak punya aglutinin → <b>resipien universal</b> ✔.</p><p>4. Aglutinogen B dari donor tidak bertemu aglutinin apa pun di plasma AB → aman ✔.</p>"
  },
  {
    id: "bio-23", bab: "Sistem Respirasi", level: 2, tipe: "pg",
    soal: "Urutan peristiwa yang benar pada mekanisme inspirasi pernapasan dada adalah …",
    opsi: [
      "Otot antartulang rusuk luar berkontraksi → rongga dada membesar → tekanan udara paru-paru turun → udara masuk",
      "Otot antartulang rusuk luar berelaksasi → rongga dada mengecil → tekanan naik → udara masuk",
      "Otot diafragma berelaksasi → rongga dada membesar → tekanan naik → udara masuk",
      "Otot antartulang rusuk dalam berkontraksi → rongga dada membesar → tekanan turun → udara keluar",
      "Otot antartulang rusuk luar berkontraksi → rongga dada mengecil → tekanan turun → udara masuk"
    ],
    kunci: 0,
    hint: "Udara selalu mengalir dari tekanan tinggi ke tekanan rendah. Agar udara masuk, tekanan di paru-paru harus lebih rendah dari udara luar.",
    pembahasan: "<p>Inspirasi dada: otot <b>antartulang rusuk luar berkontraksi</b> → tulang rusuk terangkat → <b>rongga dada membesar</b> → volume paru-paru bertambah → <b>tekanan turun</b> lebih rendah dari udara luar → <b>udara masuk</b>.</p><p>Opsi lain salah di salah satu mata rantai (misalnya rongga dada mengecil atau tekanan naik, yang justru terjadi saat ekspirasi).</p>"
  },
  {
    id: "bio-24", bab: "Sistem Respirasi", level: 2, tipe: "pg",
    stimulus: "<p>Data volume udara pernapasan seseorang:</p><table><tr><th>Jenis volume</th><th>mL</th></tr><tr><td>Volume tidal</td><td>500</td></tr><tr><td>Volume cadangan inspirasi</td><td>1.500</td></tr><tr><td>Volume cadangan ekspirasi</td><td>1.500</td></tr><tr><td>Volume residu</td><td>1.000</td></tr></table>",
    soal: "Kapasitas vital paru-paru orang tersebut adalah …",
    opsi: ["2.000 mL", "2.500 mL", "3.000 mL", "3.500 mL", "4.500 mL"],
    kunci: 3,
    hint: "Kapasitas vital = jumlah udara maksimal yang bisa dikeluarkan setelah menarik napas sedalam-dalamnya. Udara residu tidak bisa dikeluarkan.",
    pembahasan: "<p>Kapasitas vital = volume tidal + cadangan inspirasi + cadangan ekspirasi = 500 + 1.500 + 1.500 = <b>3.500 mL</b>.</p><p>Jika ditambah volume residu (1.000 mL), hasilnya kapasitas <i>total</i> paru-paru = 4.500 mL.</p>"
  },
  {
    id: "bio-25", bab: "Sistem Ekskresi", level: 1, tipe: "pg",
    soal: "Tahap pembentukan urine yang terjadi di glomerulus dan menghasilkan urine primer adalah …",
    opsi: ["Filtrasi", "Reabsorpsi", "Augmentasi", "Sekresi hormon", "Defekasi"],
    kunci: 0,
    hint: "Glomerulus berfungsi seperti saringan darah.",
    pembahasan: "<p>Tahapan pembentukan urine:</p><p>1. <b>Filtrasi</b> di glomerulus → urine primer (masih mengandung glukosa, asam amino, garam, air).<br>2. Reabsorpsi di tubulus kontortus proksimal → urine sekunder.<br>3. Augmentasi di tubulus kontortus distal → urine sesungguhnya.</p>"
  },
  {
    id: "bio-26", bab: "Sistem Ekskresi", level: 3, tipe: "kategori",
    stimulus: "<p>Hasil uji urine dua orang pasien:</p><table><tr><th>Pasien</th><th>Uji Benedict (glukosa)</th><th>Uji Biuret (protein)</th></tr><tr><td>P</td><td>Merah bata (+)</td><td>Biru (−)</td></tr><tr><td>Q</td><td>Biru (−)</td><td>Ungu (+)</td></tr></table>",
    soal: "Tentukan benar atau salah pernyataan berikut!",
    pernyataan: [
      "Urine pasien P mengandung glukosa, yang dapat disebabkan oleh kekurangan hormon insulin.",
      "Urine pasien Q mengandung protein, yang menandakan adanya gangguan pada proses filtrasi di glomerulus.",
      "Pada orang sehat, urine primer masih mengandung glukosa.",
      "Glukosa pada orang sehat diserap kembali di glomerulus."
    ],
    kunci: [true, true, true, false],
    hint: "Protein berukuran besar sehingga normalnya tidak lolos saringan glomerulus. Glukosa lolos saringan, tetapi seharusnya diserap kembali di bagian lain nefron.",
    pembahasan: "<p>1. Benedict merah bata = ada glukosa. Gula darah tinggi akibat kurang insulin (diabetes melitus) membuat glukosa tidak terserap semua ✔.</p><p>2. Biuret ungu = ada protein. Protein normalnya tidak lolos filtrasi; jika ada di urine, glomerulus mengalami kerusakan (mis. nefritis) ✔.</p><p>3. Urine primer hasil filtrasi memang masih mengandung glukosa ✔.</p><p>4. Penyerapan kembali (reabsorpsi) glukosa terjadi di <b>tubulus kontortus proksimal</b>, bukan di glomerulus → Salah.</p>"
  },
  {
    id: "bio-27", bab: "Sistem Imun", level: 1, tipe: "pg",
    soal: "Kekebalan tubuh yang diperoleh seseorang setelah mendapat vaksin campak termasuk kekebalan …",
    opsi: ["Aktif alami", "Aktif buatan", "Pasif alami", "Pasif buatan", "Bawaan (nonspesifik)"],
    kunci: 1,
    hint: "Tentukan dua hal: apakah tubuh membuat antibodinya sendiri (aktif/pasif), dan apakah antigen masuk secara sengaja melalui tindakan medis (alami/buatan)?",
    pembahasan: "<p>Vaksin berisi antigen yang dilemahkan → tubuh <b>membuat antibodi sendiri</b> (aktif) dan antigen dimasukkan secara <b>sengaja</b> (buatan) → kekebalan <b>aktif buatan</b>.</p><p>Aktif alami: setelah sembuh dari sakit. Pasif alami: antibodi dari ibu (ASI/plasenta). Pasif buatan: suntikan serum antibodi (mis. antibisa ular).</p>"
  },
  {
    id: "bio-28", bab: "Sistem Imun", level: 2, tipe: "pg",
    soal: "Virus HIV menyebabkan penurunan sistem kekebalan tubuh secara drastis (AIDS). Hal ini terjadi karena HIV menyerang …",
    opsi: [
      "Sel darah merah, sehingga pengangkutan oksigen terganggu",
      "Sel limfosit T helper, sehingga aktivasi sel B dan sel T sitotoksik terganggu",
      "Sel keping darah, sehingga darah sulit membeku",
      "Sel limfosit B memori secara langsung",
      "Sel neutrofil, sehingga fagositosis berhenti total"
    ],
    kunci: 1,
    hint: "HIV menyerang sel yang berperan sebagai \"komandan\" sistem imun spesifik, yaitu sel yang mengaktifkan sel B dan sel T lainnya.",
    pembahasan: "<p>HIV menginfeksi sel <b>T helper</b> (CD4). Sel T helper berfungsi mengaktifkan sel B (pembentuk antibodi) dan sel T sitotoksik.</p><p>Jika jumlah T helper turun, respons imun spesifik lumpuh, sehingga penderita mudah terkena infeksi oportunistik.</p>"
  },
  {
    id: "bio-29", bab: "Sistem Koordinasi", level: 1, tipe: "pg",
    soal: "Saat tangan tidak sengaja menyentuh panci panas, tangan langsung tertarik. Urutan jalannya impuls pada gerak refleks tersebut adalah …",
    opsi: [
      "Reseptor → saraf sensorik → otak → saraf motorik → efektor",
      "Reseptor → saraf sensorik → sumsum tulang belakang → saraf motorik → efektor",
      "Reseptor → saraf motorik → sumsum tulang belakang → saraf sensorik → efektor",
      "Efektor → saraf motorik → sumsum tulang belakang → saraf sensorik → reseptor",
      "Reseptor → otak → sumsum tulang belakang → saraf sensorik → efektor"
    ],
    kunci: 1,
    hint: "Gerak refleks terjadi sangat cepat karena impulsnya tidak diolah di otak. Saraf sensorik membawa impuls MENUJU pusat saraf.",
    pembahasan: "<p>Lengkung refleks tangan: <b>reseptor</b> (kulit) → <b>neuron sensorik</b> → <b>sumsum tulang belakang</b> (neuron konektor) → <b>neuron motorik</b> → <b>efektor</b> (otot tangan).</p><p>Gerak sadar melibatkan otak, sedangkan refleks tangan/kaki cukup diolah di sumsum tulang belakang sehingga lebih cepat.</p>"
  },
  {
    id: "bio-30", bab: "Sistem Koordinasi", level: 2, tipe: "mcma",
    soal: "Pasangan hormon dan fungsinya yang tepat adalah … (pilih semua yang benar)",
    opsi: [
      "Insulin — menurunkan kadar gula darah",
      "ADH (antidiuretik) — meningkatkan penyerapan kembali air di ginjal sehingga urine berkurang",
      "Tiroksin — mengatur laju metabolisme tubuh",
      "Glukagon — menurunkan kadar gula darah",
      "Adrenalin — memperlambat denyut jantung"
    ],
    kunci: [0, 1, 2],
    hint: "Insulin dan glukagon bekerja berlawanan. Adrenalin adalah hormon \"siaga\" yang dilepas saat takut atau tegang.",
    pembahasan: "<p>• Insulin: glukosa → glikogen, gula darah <b>turun</b> ✔<br>• ADH: reabsorpsi air naik → urine sedikit dan pekat ✔<br>• Tiroksin: mengatur metabolisme dan pertumbuhan ✔<br>• Glukagon justru <i>menaikkan</i> gula darah (glikogen → glukosa)<br>• Adrenalin justru <i>mempercepat</i> denyut jantung</p>"
  },
  {
    id: "bio-31", bab: "Sistem Reproduksi", level: 1, tipe: "pg",
    soal: "Pada sistem reproduksi pria, sel sperma dibentuk di …",
    opsi: ["Epididimis", "Vas deferens", "Tubulus seminiferus", "Kelenjar prostat", "Vesikula seminalis"],
    kunci: 2,
    hint: "Sperma dibentuk di dalam testis, tepatnya di saluran-saluran kecil yang berkelok-kelok.",
    pembahasan: "<p>Spermatogenesis terjadi di <b>tubulus seminiferus</b> di dalam testis. Di antara tubulus terdapat sel Leydig penghasil testosteron, sedangkan sel Sertoli menyediakan nutrisi bagi sperma.</p><p>Epididimis = tempat pematangan dan penyimpanan sementara sperma; vas deferens = saluran sperma; prostat dan vesikula seminalis = penghasil cairan semen.</p>"
  },
  {
    id: "bio-32", bab: "Sistem Reproduksi", level: 3, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang hormon pada siklus menstruasi berikut!",
    pernyataan: [
      "FSH merangsang pematangan folikel di ovarium.",
      "Lonjakan kadar LH memicu terjadinya ovulasi.",
      "Korpus luteum menghasilkan hormon progesteron.",
      "Menstruasi terjadi karena kadar progesteron meningkat tajam."
    ],
    kunci: [true, true, true, false],
    hint: "Progesteron berfungsi mempertahankan dinding rahim (endometrium) yang tebal. Apa yang terjadi pada dinding rahim jika hormon ini berkurang?",
    pembahasan: "<p>1. FSH (dari hipofisis) merangsang pematangan folikel ✔.<br>2. Lonjakan LH sekitar hari ke-14 memicu <b>ovulasi</b> ✔.<br>3. Folikel bekas ovulasi menjadi korpus luteum yang menghasilkan progesteron ✔.<br>4. Jika tidak terjadi pembuahan, korpus luteum menyusut, kadar progesteron <b>turun</b>, endometrium luruh → menstruasi. Jadi penyebabnya penurunan, bukan peningkatan → Salah.</p>"
  },
  {
    id: "bio-33", bab: "Sistem Reproduksi", level: 2, tipe: "pg",
    soal: "Pada manusia, fertilisasi (pertemuan sperma dan ovum) dan implantasi (penempelan embrio) secara normal terjadi berturut-turut di …",
    opsi: [
      "Ovarium dan tuba falopi",
      "Tuba falopi (oviduk) dan dinding rahim (endometrium)",
      "Rahim dan vagina",
      "Serviks dan rahim",
      "Ovarium dan rahim"
    ],
    kunci: 1,
    hint: "Ovum yang dilepas dari ovarium masuk ke saluran telur. Embrio yang terbentuk kemudian bergerak ke organ tempat janin tumbuh.",
    pembahasan: "<p>Fertilisasi normal terjadi di <b>tuba falopi (oviduk)</b>. Zigot membelah menjadi blastosis sambil bergerak ke rahim, lalu menempel (<b>implantasi</b>) pada <b>endometrium</b> (dinding rahim).</p><p>Kehamilan yang tertanam di luar rahim (misalnya di tuba) disebut kehamilan ektopik dan berbahaya.</p>"
  }
]};
