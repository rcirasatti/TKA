// Bank soal Biologi — urutan mengikuti kerangka asesmen TKA SMA (Pusmendik):
// Keanekaragaman Hayati → Sel → Proses-proses pada Makhluk Hidup, dari Level 1 ke Level 3.
// Soal keterampilan proses (data percobaan) disisipkan di tiap elemen.
window.BANK_SOAL = window.BANK_SOAL || {};
window.BANK_SOAL.biologi = { soal: [

  // ===================== KEANEKARAGAMAN HAYATI =====================
  {
    id: "bio-01", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 1, tipe: "pg",
    soal: "Di sebuah taman terdapat bunga mawar berwarna merah, putih, kuning, dan merah muda. Variasi tersebut menunjukkan keanekaragaman tingkat …",
    opsi: ["Gen", "Jenis (spesies)", "Ekosistem", "Populasi", "Komunitas"],
    kunci: 0,
    hint: "Semua bunga itu masih satu spesies yang sama (mawar). Perbedaan dalam satu spesies disebabkan oleh apa?",
    pembahasan: "<h4>Konsep</h4><p>Tiga tingkat keanekaragaman hayati: <b>gen</b> = variasi di dalam <i>satu spesies</i> (warna, ukuran, rasa); <b>jenis</b> = perbedaan <i>antarspesies</i> dalam satu genus atau famili; <b>ekosistem</b> = perbedaan lingkungan beserta penghuninya.</p><h4>Langkah</h4><p>Mawar merah, putih, kuning, dan merah muda semuanya tetap mawar (satu spesies). Warnanya berbeda karena susunan gennya berbeda → tingkat <b>gen</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Tingkat jenis membandingkan spesies berbeda, misalnya mawar vs melati.</li><li><b>C</b> Tingkat ekosistem membandingkan lingkungan, misalnya hutan vs pantai.</li><li><b>D</b> Populasi dan <b>E</b> komunitas adalah tingkat organisasi kehidupan, bukan tingkat keanekaragaman hayati.</li></ul><p class=\"tips\"><b>Tips:</b> tanyakan \"Masih satu spesies?\" Kalau ya → gen. Kalau beda spesies → jenis. Kalau yang dibandingkan tempatnya → ekosistem.</p>"
  },
  {
    id: "bio-02", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 1, tipe: "pg",
    soal: "Penulisan nama ilmiah padi yang benar menurut aturan tata nama ganda (binomial nomenklatur) adalah …",
    opsi: ["Oryza Sativa", "oryza sativa", "<i>Oryza sativa</i>", "<i>Oryza Sativa</i>", "<i>oryza</i> Sativa"],
    kunci: 2,
    hint: "Kata pertama (genus) dan kata kedua (penunjuk spesies) punya aturan huruf kapital yang berbeda, dan keduanya dicetak miring atau digarisbawahi.",
    pembahasan: "<h4>Konsep</h4><p>Aturan <b>binomial nomenklatur</b> (Linnaeus): (1) dua kata: nama genus + penunjuk spesies; (2) huruf pertama genus <b>kapital</b>, penunjuk spesies <b>seluruhnya huruf kecil</b>; (3) dicetak <b>miring</b>, atau digarisbawahi terpisah jika ditulis tangan.</p><h4>Langkah</h4><p>Hanya <i>Oryza sativa</i> yang memenuhi ketiga aturan sekaligus.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Oryza Sativa: tidak miring dan \"Sativa\" berhuruf kapital.</li><li><b>B</b> oryza sativa: tidak miring dan genus berhuruf kecil.</li><li><b>D</b> <i>Oryza Sativa</i>: sudah miring, tetapi \"Sativa\" tidak boleh kapital.</li><li><b>E</b> <i>oryza</i> Sativa: kapitalnya terbalik, dan hanya sebagian yang miring.</li></ul><p class=\"tips\"><b>Tips:</b> periksa tiga hal berurutan: miring? → genus kapital? → spesies kecil? Satu pelanggaran saja sudah membuat penulisannya salah.</p>"
  },
  {
    id: "bio-03", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 2, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Urutan takson dari tinggi ke rendah: kingdom → filum → kelas → <b>ordo → famili → genus</b> → spesies. Makin rendah takson: persamaan ciri makin <b>banyak</b>, jumlah anggota makin <b>sedikit</b>, kekerabatan makin <b>dekat</b>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Takson rendah (misalnya genus) hanya berisi organisme yang sangat mirip.</li><li><b>2</b> <i>Benar.</i> Satu ordo berisi banyak famili; satu famili berisi lebih sedikit anggota.</li><li><b>3</b> <i>Salah.</i> Kucing–singa sama sampai famili (Felidae); kucing–anjing hanya sama sampai ordo (Carnivora). Famili lebih rendah dari ordo, jadi kucing lebih dekat dengan <b>singa</b>.</li><li><b>4</b> <i>Benar.</i> Kata pertama nama ilmiah = genus: <i>Felis</i> vs <i>Panthera</i> (beda), tetapi famili sama (Felidae).</li></ul><p class=\"tips\"><b>Tips:</b> untuk membandingkan kekerabatan, cari takson <i>terendah</i> yang masih sama. Makin rendah takson yang sama, makin dekat kerabatnya.</p>"
  },
  {
    id: "bio-04", bab: "Klasifikasi dan Keanekaragaman Makhluk Hidup", level: 2, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Ciri kingdom <b>Fungi</b>: eukariotik, dinding sel dari <b>kitin</b>, <b>tidak berklorofil</b> sehingga <b>heterotrof</b> (saprofit, parasit, atau bersimbiosis), menyimpan cadangan makanan berupa glikogen.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Kitin adalah penyusun dinding sel jamur (sama dengan cangkang serangga).</li><li><b>B</b> ✘ Jamur tidak punya klorofil. Karena itulah jamur dipisahkan dari kingdom tumbuhan.</li><li><b>C</b> ✔ Mendapat makanan dari zat organik lain (heterotrof).</li><li><b>D</b> ✔ Sel jamur punya membran inti (eukariotik).</li><li><b>E</b> ✘ Peptidoglikan adalah penyusun dinding sel <b>bakteri</b>. Dinding sel tumbuhan dari selulosa.</li></ul><p class=\"tips\"><b>Tips:</b> pasangan dinding sel yang wajib hafal: bakteri = peptidoglikan, jamur = kitin, tumbuhan = selulosa.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Sel <b>prokariotik</b> (bakteri) tidak punya <b>membran inti</b>: DNA-nya berada bebas di daerah nukleoid. Sel juga tidak punya organel bermembran. Sel hewan dan tumbuhan adalah <b>eukariotik</b>. Ciri <i>pembeda</i> harus sesuatu yang dimiliki satu kelompok tetapi tidak dimiliki kelompok lain.</p><h4>Langkah</h4><p>Dari semua opsi, hanya \"tidak memiliki membran inti\" yang benar-benar membedakan bakteri dari sel hewan dan tumbuhan.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Membran sel dimiliki <i>semua</i> sel.</li><li><b>C</b> Ribosom juga ada di semua sel, karena semua sel membuat protein.</li><li><b>D</b> Sitoplasma ada di semua sel.</li><li><b>E</b> DNA ada di semua sel; bedanya hanya dibungkus membran atau tidak.</li></ul><p class=\"tips\"><b>Tips:</b> soal \"ciri pembeda\" menjebak dengan pernyataan yang <i>benar</i> tetapi tidak membedakan. Tanyakan: apakah sel hewan juga memilikinya?</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Peran bakteri bagi manusia ada dua: <b>menguntungkan</b> (pangan fermentasi, kesuburan tanah, obat) dan <b>merugikan</b> (penyebab penyakit atau patogen, pembusuk makanan).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ <i>Lactobacillus bulgaricus</i> memfermentasi laktosa susu menjadi asam laktat → yoghurt.</li><li><b>B</b> ✔ <i>Rhizobium</i> bersimbiosis di bintil akar kacang-kacangan dan mengikat N₂ udara → tanah subur.</li><li><b>C</b> ✘ <i>Mycobacterium tuberculosis</i> menyebabkan TBC (patogen).</li><li><b>D</b> ✔ <i>Acetobacter xylinum</i> mengubah gula air kelapa menjadi serat selulosa → nata de coco.</li><li><b>E</b> ✘ <i>Salmonella typhi</i> menyebabkan tifus (patogen).</li></ul><p class=\"tips\"><b>Tips:</b> nama spesies yang mengandung nama penyakit (<i>tuberculosis</i>, <i>typhi</i>, <i>tetani</i>, <i>cholerae</i>) hampir pasti patogen.</p>"
  },
  {
    id: "bio-07", bab: "Bakteri", level: 2, tipe: "pg",
    soal: "Suatu bakteri membelah diri secara biner setiap 20 menit. Jika mula-mula terdapat 1 sel bakteri dan kondisi lingkungan ideal, jumlah bakteri setelah 2 jam adalah …",
    opsi: ["6 sel", "12 sel", "32 sel", "64 sel", "128 sel"],
    kunci: 3,
    hint: "Hitung dulu berapa kali pembelahan terjadi dalam 2 jam. Setiap pembelahan, jumlah sel menjadi 2 kali lipat.",
    pembahasan: "<h4>Konsep</h4><p>Pembelahan biner: 1 sel → 2 sel, sehingga jumlahnya <b>berlipat ganda</b> setiap kali membelah. Jumlah sel = N₀ × 2<sup>n</sup>, dengan n = banyak pembelahan = waktu total / waktu satu pembelahan.</p><h4>Langkah</h4><ol><li>2 jam = 120 menit → n = 120/20 = 6 kali.</li><li>Jumlah = 1 × 2⁶ = <b>64 sel</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 6 sel = jumlah pembelahan, bukan jumlah sel.</li><li><b>B</b> 12 sel = 6 × 2, dikali alih-alih dipangkatkan.</li><li><b>C</b> 32 sel = 2⁵, kurang satu pembelahan.</li><li><b>E</b> 128 sel = 2⁷, kelebihan satu pembelahan.</li></ul><p class=\"tips\"><b>Tips:</b> buat tabel cepat: 0 menit = 1, 20 = 2, 40 = 4, 60 = 8, 80 = 16, 100 = 32, 120 = 64.</p>"
  },
  {
    id: "bio-08", bab: "Ekosistem", level: 1, tipe: "pg",
    soal: "Perhatikan rantai makanan berikut: padi → tikus → ular → elang. Organisme yang berperan sebagai konsumen tingkat II adalah …",
    opsi: ["Padi", "Tikus", "Ular", "Elang", "Pengurai"],
    kunci: 2,
    hint: "Produsen ada di awal rantai. Konsumen tingkat I memakan produsen, konsumen tingkat II memakan konsumen tingkat I.",
    pembahasan: "<h4>Konsep</h4><p>Tingkat trofik dihitung dari produsen: <b>produsen</b> (berfotosintesis) → konsumen I (pemakan produsen, herbivor) → konsumen II (pemakan konsumen I) → dan seterusnya.</p><h4>Langkah</h4><p>Padi (produsen) → tikus (konsumen I) → <b>ular (konsumen II)</b> → elang (konsumen III).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Padi adalah produsen, bukan konsumen.</li><li><b>B</b> Tikus adalah konsumen I. Jebakannya: tikus memang organisme ke-2 di rantai, tetapi tingkat konsumen dihitung mulai dari pemakan produsen.</li><li><b>D</b> Elang adalah konsumen III.</li><li><b>E</b> Pengurai tidak tercantum di rantai ini dan perannya bukan konsumen bertingkat.</li></ul><p class=\"tips\"><b>Tips:</b> konsumen ke-n = organisme di urutan ke-(n + 1) dalam rantai, karena urutan pertama selalu produsen.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Dalam <b>jaring-jaring makanan</b>, satu organisme bisa menempati <b>beberapa tingkat trofik</b>, tergantung jalur mana yang diikuti. Perubahan satu populasi memengaruhi mangsa dan pemangsanya.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Rumput berfotosintesis → produsen.</li><li><b>2</b> <i>Benar.</i> Katak memangsa belalang. Jika katak berkurang, pemangsa belalang berkurang → belalang cenderung bertambah.</li><li><b>3</b> <i>Benar.</i> Rumput → kelinci → ular (konsumen II); rumput → belalang → katak → ular (konsumen III).</li><li><b>4</b> <i>Salah.</i> Rumput → belalang → pipit → elang (konsumen III), tetapi rumput → belalang → katak → ular → elang (konsumen <b>IV</b>). Ada pula rumput → kelinci → ular → elang (konsumen III).</li></ul><p class=\"tips\"><b>Tips:</b> kata \"hanya\" di pernyataan biologi sering menjadi tanda pernyataan salah. Cari satu jalur pengecualian untuk membuktikannya.</p>"
  },
  {
    id: "bio-10", bab: "Ekosistem", level: 2, tipe: "pg",
    soal: "Dalam suatu ekosistem, produsen menyimpan energi sebesar 10.000 kkal. Jika hanya sekitar 10% energi yang berpindah ke setiap tingkat trofik berikutnya, energi yang diterima konsumen tingkat II adalah …",
    opsi: ["10 kkal", "100 kkal", "1.000 kkal", "2.000 kkal", "9.000 kkal"],
    kunci: 1,
    hint: "Produsen → konsumen I → konsumen II: ada dua kali perpindahan energi.",
    pembahasan: "<h4>Konsep</h4><p><b>Hukum 10%</b>: hanya sekitar 10% energi yang berpindah ke tingkat trofik berikutnya. Sisanya (±90%) dipakai untuk respirasi, hilang sebagai panas, atau tidak termakan. Itulah sebabnya piramida energi selalu mengerucut ke atas.</p><h4>Langkah</h4><ol><li>Produsen 10.000 kkal.</li><li>Konsumen I = 10% × 10.000 = 1.000 kkal.</li><li>Konsumen II = 10% × 1.000 = <b>100 kkal</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 10 kkal = konsumen III (satu tingkat terlalu jauh).</li><li><b>C</b> 1.000 kkal = konsumen I.</li><li><b>D</b> 2.000 kkal: memakai 20%.</li><li><b>E</b> 9.000 kkal = energi yang <i>hilang</i> dari produsen ke konsumen I.</li></ul><p class=\"tips\"><b>Tips:</b> setiap naik satu tingkat, hapus satu angka nol: 10.000 → 1.000 → 100 → 10.</p>"
  },
  {
    id: "bio-11", bab: "Ekosistem", level: 2, tipe: "pg",
    soal: "Dalam daur nitrogen, bakteri <i>Nitrosomonas</i> mengubah amonia (NH<sub>3</sub>) menjadi nitrit (NO<sub>2</sub><sup>−</sup>), lalu <i>Nitrobacter</i> mengubah nitrit menjadi nitrat (NO<sub>3</sub><sup>−</sup>). Proses tersebut disebut …",
    opsi: ["Fiksasi nitrogen", "Amonifikasi", "Nitrifikasi", "Denitrifikasi", "Asimilasi"],
    kunci: 2,
    hint: "Produk akhirnya adalah nitrat. Nama prosesnya mirip dengan nama produknya.",
    pembahasan: "<h4>Konsep</h4><p>Tahapan <b>daur nitrogen</b>: fiksasi (N₂ → senyawa N) → amonifikasi (bahan organik → NH₃) → <b>nitrifikasi</b> (NH₃ → NO₂⁻ → NO₃⁻) → asimilasi (NO₃⁻ diserap tumbuhan) → denitrifikasi (NO₃⁻ → N₂ kembali ke udara).</p><h4>Langkah</h4><p>Amonia → nitrit (oleh <i>Nitrosomonas</i>) → nitrat (oleh <i>Nitrobacter</i>) = <b>nitrifikasi</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Fiksasi = mengubah N₂ dari udara, misalnya oleh <i>Rhizobium</i> atau petir.</li><li><b>B</b> Amonifikasi = pengurai mengubah sisa organisme menjadi amonia (tahap sebelum nitrifikasi).</li><li><b>D</b> Denitrifikasi = nitrat → N₂ (arah kebalikannya).</li><li><b>E</b> Asimilasi = tumbuhan memakai nitrat untuk membuat protein.</li></ul><p class=\"tips\"><b>Tips:</b> nitrifikasi menambah oksigen bertahap: NH₃ → NO₂⁻ → NO₃⁻. <i>Nitrosomonas</i> mengerjakan langkah pertama (→ nitrit), <i>Nitrobacter</i> langkah kedua (→ nitrat).</p>"
  },

  // ===================== SEL & METABOLISME =====================
  {
    id: "bio-12", bab: "Sel: Metabolisme", level: 1, tipe: "pg",
    soal: "Organel sel yang berfungsi sebagai tempat respirasi seluler untuk menghasilkan energi (ATP) adalah …",
    opsi: ["Ribosom", "Mitokondria", "Badan Golgi", "Lisosom", "Retikulum endoplasma halus"],
    kunci: 1,
    hint: "Organel ini sering dijuluki \"pembangkit tenaga sel\" dan memiliki membran dalam yang berlipat-lipat (krista).",
    pembahasan: "<h4>Konsep</h4><p><b>Mitokondria</b> disebut \"pembangkit tenaga sel\": tempat siklus Krebs (di matriks) dan transpor elektron (di membran dalam) yang menghasilkan sebagian besar ATP dari respirasi aerob.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Ribosom: sintesis protein.</li><li><b>C</b> Badan Golgi: memodifikasi, mengemas, dan menyekresikan zat.</li><li><b>D</b> Lisosom: pencernaan intrasel dengan enzim hidrolitik.</li><li><b>E</b> RE halus: sintesis lipid dan detoksifikasi.</li></ul><p class=\"tips\"><b>Tips:</b> sel yang butuh banyak energi (otot jantung, sperma) memiliki sangat banyak mitokondria. Fakta ini sering keluar di soal penalaran.</p>"
  },
  {
    id: "bio-13", bab: "Sel: Metabolisme", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang perbedaan sel hewan dan sel tumbuhan berikut!",
    pernyataan: [
      "Dinding sel hanya ditemukan pada sel tumbuhan.",
      "Kloroplas ditemukan pada sel tumbuhan yang berwarna hijau.",
      "Sentriol umumnya ditemukan pada sel hewan.",
      "Sel hewan memiliki vakuola yang besar dan menetap."
    ],
    kunci: [true, true, true, false],
    hint: "Bayangkan bentuk sel tumbuhan yang kaku dan tetap. Bagian apa yang membuatnya kaku dan menjaga tekanan airnya?",
    pembahasan: "<h4>Konsep</h4><p>Organel khas <b>sel tumbuhan</b>: dinding sel (selulosa), kloroplas, vakuola besar dan menetap. Organel khas <b>sel hewan</b>: sentriol (sentrosom), lisosom lebih banyak, vakuola kecil atau tidak ada.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Dinding sel selulosa hanya ada pada sel tumbuhan (dibandingkan dengan sel hewan).</li><li><b>2</b> <i>Benar.</i> Kloroplas ada pada sel tumbuhan yang berfotosintesis, misalnya daun. Sel akar tidak memilikinya.</li><li><b>3</b> <i>Benar.</i> Sentriol membantu pembentukan benang spindel saat pembelahan sel hewan.</li><li><b>4</b> <i>Salah.</i> Vakuola besar dan menetap adalah ciri sel <b>tumbuhan</b>.</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan tiga ciri khas tumbuhan: dinding sel, kloroplas, vakuola besar. Yang khas hewan: sentriol.</p>"
  },
  {
    id: "bio-14", bab: "Sel: Metabolisme", level: 3, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p><b>Osmosis</b> = perpindahan air melalui membran dari larutan <b>hipotonis</b> (zat terlarut sedikit, air banyak) ke larutan <b>hipertonis</b> (zat terlarut banyak). Di titik <b>isotonis</b> tidak ada perpindahan air bersih, sehingga massa tetap.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Air murni hipotonis terhadap sel kentang → air masuk → massa naik (+12%).</li><li><b>2</b> <i>Benar.</i> Massa naik di 10% (+4%) dan turun di 20% (−3%). Titik \"nol\" (isotonis) pasti ada di antara keduanya.</li><li><b>3</b> <i>Benar.</i> Larutan 30% hipertonis → air keluar → massa turun (sel bisa plasmolisis).</li><li><b>4</b> <i>Salah.</i> Variabel <b>bebas</b> = yang sengaja diubah peneliti = konsentrasi gula. Perubahan massa adalah hasil yang diukur = variabel <b>terikat</b>.</li></ul><p class=\"tips\"><b>Tips:</b> variabel bebas = \"apa yang <i>saya ubah</i>?\"; variabel terikat = \"apa yang <i>saya ukur</i>?\"; variabel kontrol = \"apa yang <i>saya samakan</i>?\" (ukuran kentang, waktu).</p>"
  },
  {
    id: "bio-15", bab: "Sel: Metabolisme", level: 2, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p><b>Enzim</b> adalah biokatalisator berupa <b>protein</b>. Sifatnya: bekerja <b>spesifik</b> (satu enzim untuk satu substrat, model gembok-kunci), <b>tidak ikut bereaksi</b> sehingga bisa dipakai berulang, bekerja bolak-balik, dan <b>dipengaruhi suhu serta pH</b> karena protein bisa rusak.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Enzim tersusun atas protein.</li><li><b>B</b> ✔ Sisi aktif enzim hanya cocok dengan substrat tertentu.</li><li><b>C</b> ✘ Enzim adalah katalis, jadi tidak habis dan bisa dipakai lagi.</li><li><b>D</b> ✔ Suhu atau pH ekstrem membuat protein enzim terdenaturasi.</li><li><b>E</b> ✘ Bertentangan dengan sifat spesifik (B). Contoh: amilase hanya memecah amilum, bukan protein.</li></ul><p class=\"tips\"><b>Tips:</b> semua sifat enzim bisa diturunkan dari dua fakta: enzim = <b>protein</b> (jadi peka suhu/pH) dan enzim = <b>katalis</b> (jadi tidak habis).</p>"
  },
  {
    id: "bio-16", bab: "Sel: Metabolisme", level: 3, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Aktivitas enzim naik seiring suhu sampai <b>suhu optimum</b>, lalu turun tajam karena protein enzim <b>terdenaturasi</b>: bentuk sisi aktif rusak <b>permanen</b> dan tidak bisa mengikat substrat. Suhu rendah hanya membuat enzim <i>tidak aktif sementara</i>.</p><h4>Langkah</h4><ol><li>Gelembung terbanyak pada 40 °C → itulah suhu optimum katalase.</li><li>Pada 60 °C tidak ada gelembung sama sekali → enzim rusak → <b>denaturasi</b>.</li></ol><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Setiap suhu memakai larutan H₂O₂ sendiri, dan pada suhu lain masih ada gelembung. Jadi substrat tidak habis.</li><li><b>C</b> \"Aktif kembali jika didinginkan\" adalah sifat enzim pada suhu <i>rendah</i>. Denaturasi tidak bisa pulih.</li><li><b>D</b> Gas yang dihasilkan adalah O₂ (2H₂O₂ → 2H₂O + O₂), bukan CO₂.</li><li><b>E</b> Suhu optimum ada di puncak aktivitas (40 °C), bukan di titik nol.</li></ul><p class=\"tips\"><b>Tips:</b> grafik aktivitas enzim naik perlahan lalu jatuh curam setelah optimum. Sisi kanan yang curam menandakan denaturasi.</p>"
  },
  {
    id: "bio-17", bab: "Sel: Metabolisme", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang respirasi aerob berikut!",
    pernyataan: [
      "Glikolisis berlangsung di sitoplasma.",
      "Siklus Krebs berlangsung di matriks mitokondria.",
      "Tahap transpor elektron menghasilkan ATP paling banyak.",
      "Oksigen berperan sebagai akseptor elektron pada tahap glikolisis."
    ],
    kunci: [true, true, true, false],
    hint: "Urutan tahap: glikolisis → dekarboksilasi oksidatif → siklus Krebs → transpor elektron. Oksigen baru diperlukan di tahap paling akhir.",
    pembahasan: "<h4>Konsep</h4><p>Tiga tahap respirasi aerob: <b>glikolisis</b> (sitoplasma) → <b>siklus Krebs</b> (matriks mitokondria) → <b>transpor elektron</b> (membran dalam mitokondria). Oksigen baru dipakai di tahap terakhir sebagai <b>akseptor elektron terakhir</b> (membentuk H₂O).</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Glukosa → 2 piruvat terjadi di sitoplasma, tanpa perlu O₂.</li><li><b>2</b> <i>Benar.</i> Siklus Krebs terjadi di matriks mitokondria.</li><li><b>3</b> <i>Benar.</i> Transpor elektron menghasilkan ±34 ATP, jauh lebih banyak daripada glikolisis (2) dan Krebs (2).</li><li><b>4</b> <i>Salah.</i> O₂ menerima elektron di ujung <b>transpor elektron</b>. Glikolisis justru bisa berlangsung tanpa O₂ (dasar fermentasi).</li></ul><p class=\"tips\"><b>Tips:</b> hafalkan pasangan \"tahap – tempat – ATP\": glikolisis–sitoplasma–2, Krebs–matriks–2, TE–membran dalam–34.</p>"
  },
  {
    id: "bio-18", bab: "Sel: Metabolisme", level: 1, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Saat olahraga berat, pasokan O₂ ke otot tidak mencukupi. Otot lalu melakukan <b>fermentasi asam laktat</b> (respirasi anaerob): glukosa → asam laktat + 2 ATP. Asam laktat yang menumpuk menimbulkan rasa pegal dan lelah.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Fermentasi alkohol terjadi pada ragi atau khamir (pembuatan tape, roti), bukan pada otot manusia.</li><li><b>C</b> Masalahnya justru <i>kekurangan</i> oksigen.</li><li><b>D</b> Glukosa sedang dipakai cepat, bukan menumpuk.</li><li><b>E</b> ATP sedang kurang (fermentasi hanya menghasilkan 2 ATP), bukan berlebih.</li></ul><p class=\"tips\"><b>Tips:</b> fermentasi asam laktat terjadi di otot manusia dan pada bakteri yoghurt. Fermentasi alkohol terjadi pada ragi dan menghasilkan CO₂ + etanol.</p>"
  },
  {
    id: "bio-19", bab: "Sel: Metabolisme", level: 2, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Fotosintesis punya dua tahap. <b>Reaksi terang</b> (membran tilakoid): cahaya memecah air (<b>fotolisis</b>): 2H₂O → 4H⁺ + 4e⁻ + O₂, lalu O₂ dilepas. <b>Reaksi gelap / siklus Calvin</b> (stroma): CO₂ difiksasi menjadi glukosa.</p><h4>Langkah</h4><p>O₂ fotosintesis berasal dari pemecahan <b>air</b> pada reaksi terang (dibuktikan dengan isotop ¹⁸O yang dilabelkan pada H₂O).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> CO₂ tidak diuraikan menjadi O₂; atom C dan O-nya masuk ke glukosa.</li><li><b>C</b> Glukosa adalah <i>produk</i> reaksi gelap, bukan yang diuraikan.</li><li><b>D</b> Stomata adalah jalan masuk CO₂ dan jalan keluar O₂, bukan sumber O₂.</li><li><b>E</b> Klorofil menyerap cahaya, tetapi tidak dipecah.</li></ul><p class=\"tips\"><b>Tips:</b> reaksi terang \"memecah air dan mengisi baterai\" (ATP, NADPH). Reaksi gelap \"memakai baterai untuk merakit gula dari CO₂\".</p>"
  },
  {
    id: "bio-20", bab: "Sel: Metabolisme", level: 3, tipe: "mcma",
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
    pembahasan: "<h4>Konsep</h4><p>Percobaan Ingenhousz: gelembung gas pada <i>Hydrilla</i> adalah O₂ hasil fotosintesis. Makin dekat lampu → intensitas cahaya makin tinggi → laju fotosintesis makin cepat. Ingat juga jenis variabel percobaan.</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Jarak lampu sengaja diubah → variabel bebas.</li><li><b>B</b> ✔ Fotosintesis melepas O₂.</li><li><b>C</b> ✔ Jarak 10 cm (cahaya terkuat) → 30 gelembung; jarak 40 cm → 4 gelembung.</li><li><b>D</b> ✘ Jenis tanaman dibuat sama → variabel <b>kontrol</b>. Variabel terikatnya adalah jumlah gelembung.</li><li><b>E</b> ✘ CO₂ <i>dipakai</i> dalam fotosintesis, bukan dihasilkan.</li></ul><p class=\"tips\"><b>Tips:</b> hubungan jarak ↔ intensitas cahaya itu terbalik: jarak makin jauh, cahaya makin lemah. Hati-hati membaca arah grafiknya.</p>"
  },

  // ===================== PROSES-PROSES PADA MAKHLUK HIDUP =====================
  {
    id: "bio-21", bab: "Transport dan Pertukaran Zat", level: 1, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p><b>Peredaran darah kecil</b> (jantung ↔ paru-paru): ventrikel kanan → arteri pulmonalis → paru-paru (mengikat O₂) → <b>vena pulmonalis → atrium kiri</b>. Aturan penamaan: <b>arteri</b> = menjauhi jantung, <b>vena</b> = menuju jantung, apa pun kandungan O₂-nya.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Vena kava membawa darah miskin O₂ dari seluruh tubuh ke atrium kanan.</li><li><b>C</b> Arteri pulmonalis membawa darah <i>keluar</i> dari ventrikel kanan ke paru-paru (miskin O₂).</li><li><b>D</b> Aorta membawa darah keluar dari ventrikel kiri ke seluruh tubuh.</li><li><b>E</b> Pembuluhnya benar, tetapi darah masuk ke <i>atrium</i>, bukan langsung ke ventrikel, dan sisinya kiri.</li></ul><p class=\"tips\"><b>Tips:</b> darah selalu <b>masuk ke atrium</b> dan <b>keluar dari ventrikel</b>. Sisi kiri jantung = darah kaya O₂, sisi kanan = miskin O₂.</p>"
  },
  {
    id: "bio-22", bab: "Transport dan Pertukaran Zat", level: 2, tipe: "kategori",
    soal: "Tentukan benar atau salah pernyataan tentang golongan darah sistem ABO dan transfusi berikut!",
    pernyataan: [
      "Orang bergolongan darah A memiliki aglutinogen A dan aglutinin β (anti-B).",
      "Orang bergolongan darah O dapat menerima darah dari semua golongan darah.",
      "Orang bergolongan darah AB tidak memiliki aglutinin dalam plasmanya.",
      "Orang bergolongan darah B dapat mendonorkan darahnya kepada orang bergolongan darah AB."
    ],
    kunci: [true, false, true, true],
    hint: "Aglutinogen ada di permukaan sel darah merah, aglutinin (antibodi) ada di plasma. Penggumpalan terjadi jika aglutinogen donor bertemu aglutinin resipien yang sesuai.",
    pembahasan: "<h4>Konsep</h4><p>Golongan darah ABO: <b>aglutinogen</b> (antigen di permukaan sel darah merah) dan <b>aglutinin</b> (antibodi di plasma) selalu \"berlawanan\". A: antigen A, anti-B. B: antigen B, anti-A. AB: antigen A dan B, tanpa aglutinin. O: tanpa antigen, anti-A dan anti-B. Transfusi aman jika antigen donor <b>tidak bertemu</b> antibodi pasangannya di plasma resipien.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Golongan A memiliki aglutinogen A dan aglutinin β (anti-B).</li><li><b>2</b> <i>Salah.</i> Plasma golongan O mengandung anti-A dan anti-B, jadi darah A, B, atau AB akan menggumpal. O adalah donor universal, bukan resipien universal.</li><li><b>3</b> <i>Benar.</i> AB tidak punya aglutinin → resipien universal.</li><li><b>4</b> <i>Benar.</i> Antigen B dari donor tidak bertemu anti-B di plasma AB (karena tidak ada) → aman.</li></ul><p class=\"tips\"><b>Tips:</b> <b>O</b> = \"Open giver\" (donor untuk semua); <b>AB</b> = \"Accepts Blood\" dari semua.</p>"
  },
  {
    id: "bio-23", bab: "Transport dan Pertukaran Zat", level: 2, tipe: "pg",
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
    pembahasan: "<h4>Konsep</h4><p>Udara bergerak dari tekanan <b>tinggi ke rendah</b>. Saat <b>inspirasi</b>, rongga dada harus membesar supaya tekanan di paru-paru turun di bawah tekanan udara luar, sehingga udara masuk. Pernapasan dada digerakkan oleh <b>otot antartulang rusuk luar</b>.</p><h4>Langkah</h4><p>Otot antartulang rusuk luar berkontraksi → tulang rusuk terangkat → rongga dada <b>membesar</b> → tekanan paru-paru <b>turun</b> → udara <b>masuk</b> = opsi A.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Relaksasi dan rongga mengecil adalah mekanisme ekspirasi; tekanan naik membuat udara keluar, bukan masuk.</li><li><b>C</b> Diafragma <i>berkontraksi</i> (mendatar) saat inspirasi perut, dan tekanan harus turun.</li><li><b>D</b> Rantainya campur aduk: rongga membesar dan tekanan turun seharusnya membuat udara masuk.</li><li><b>E</b> Kontraksi otot rusuk luar membuat rongga <i>membesar</i>, bukan mengecil.</li></ul><p class=\"tips\"><b>Tips:</b> cek logika rantai fisikanya: volume naik ⇔ tekanan turun ⇔ udara masuk. Opsi yang melanggar satu mata rantai pasti salah.</p>"
  },
  {
    id: "bio-24", bab: "Transport dan Pertukaran Zat", level: 2, tipe: "pg",
    stimulus: "<p>Data volume udara pernapasan seseorang:</p><table><tr><th>Jenis volume</th><th>mL</th></tr><tr><td>Volume tidal</td><td>500</td></tr><tr><td>Volume cadangan inspirasi</td><td>1.500</td></tr><tr><td>Volume cadangan ekspirasi</td><td>1.500</td></tr><tr><td>Volume residu</td><td>1.000</td></tr></table>",
    soal: "Kapasitas vital paru-paru orang tersebut adalah …",
    opsi: ["2.000 mL", "2.500 mL", "3.000 mL", "3.500 mL", "4.500 mL"],
    kunci: 3,
    hint: "Kapasitas vital = jumlah udara maksimal yang bisa dikeluarkan setelah menarik napas sedalam-dalamnya. Udara residu tidak bisa dikeluarkan.",
    pembahasan: "<h4>Konsep</h4><p>Volume paru-paru: <b>kapasitas vital</b> = udara maksimal yang bisa dihembuskan setelah inspirasi maksimal = tidal + cadangan inspirasi + cadangan ekspirasi. <b>Kapasitas total</b> = kapasitas vital + volume residu (udara yang tak pernah bisa dikeluarkan).</p><h4>Langkah</h4><p>500 + 1.500 + 1.500 = <b>3.500 mL</b>.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> 2.000 = tidal + satu cadangan (kapasitas inspirasi).</li><li><b>B</b> 2.500 = cadangan ekspirasi + residu (kapasitas residu fungsional).</li><li><b>C</b> 3.000 = dua cadangan saja, tidal terlupa.</li><li><b>E</b> 4.500 = kapasitas <b>total</b> paru-paru (residu ikut dihitung).</li></ul><p class=\"tips\"><b>Tips:</b> volume residu tidak pernah masuk kapasitas vital, karena kapasitas vital adalah udara yang <i>bisa</i> dihembuskan.</p>"
  },
  {
    id: "bio-25", bab: "Transport dan Pertukaran Zat", level: 1, tipe: "pg",
    soal: "Tahap pembentukan urine yang terjadi di glomerulus dan menghasilkan urine primer adalah …",
    opsi: ["Filtrasi", "Reabsorpsi", "Augmentasi", "Sekresi hormon", "Defekasi"],
    kunci: 0,
    hint: "Glomerulus berfungsi seperti saringan darah.",
    pembahasan: "<h4>Konsep</h4><p>Tiga tahap pembentukan urine di nefron: <b>filtrasi</b> (glomerulus → urine primer) → <b>reabsorpsi</b> (tubulus kontortus proksimal → urine sekunder) → <b>augmentasi</b> (tubulus kontortus distal → urine sesungguhnya).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>B</b> Reabsorpsi terjadi di tubulus proksimal dan menghasilkan urine sekunder.</li><li><b>C</b> Augmentasi terjadi di tubulus distal dan menghasilkan urine sesungguhnya.</li><li><b>D</b> Sekresi hormon bukan tahap pembentukan urine.</li><li><b>E</b> Defekasi adalah pengeluaran feses (sistem pencernaan).</li></ul><p class=\"tips\"><b>Tips:</b> urutan F-R-A (Filtrasi, Reabsorpsi, Augmentasi) sejalan dengan urutan tempat: glomerulus → tubulus proksimal → tubulus distal.</p>"
  },
  {
    id: "bio-26", bab: "Transport dan Pertukaran Zat", level: 3, tipe: "kategori",
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
    pembahasan: "<h4>Konsep</h4><p>Uji makanan: <b>Benedict</b> → merah bata jika ada glukosa; <b>Biuret</b> → ungu jika ada protein. Pada orang sehat, protein (molekul besar) tertahan di glomerulus, sedangkan glukosa ikut tersaring tetapi diserap kembali seluruhnya di <b>tubulus proksimal</b>.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> Urine P mengandung glukosa. Kekurangan insulin (diabetes melitus) membuat gula darah sangat tinggi, sehingga tubulus tidak sanggup menyerap kembali semuanya.</li><li><b>2</b> <i>Benar.</i> Urine Q mengandung protein. Protein seharusnya tidak lolos filtrasi, jadi glomerulus rusak (misalnya nefritis).</li><li><b>3</b> <i>Benar.</i> Glukosa berukuran kecil sehingga ikut tersaring ke urine primer.</li><li><b>4</b> <i>Salah.</i> Glomerulus adalah tempat <i>filtrasi</i>. Reabsorpsi glukosa terjadi di <b>tubulus kontortus proksimal</b>.</li></ul><p class=\"tips\"><b>Tips:</b> protein di urine → masalah di <b>glomerulus</b> (filtrasi). Glukosa di urine → biasanya masalah <b>gula darah</b> (insulin), bukan ginjalnya.</p>"
  },
  {
    id: "bio-27", bab: "Sistem Imun", level: 1, tipe: "pg",
    soal: "Kekebalan tubuh yang diperoleh seseorang setelah mendapat vaksin campak termasuk kekebalan …",
    opsi: ["Aktif alami", "Aktif buatan", "Pasif alami", "Pasif buatan", "Bawaan (nonspesifik)"],
    kunci: 1,
    hint: "Tentukan dua hal: apakah tubuh membuat antibodinya sendiri (aktif/pasif), dan apakah antigen masuk secara sengaja melalui tindakan medis (alami/buatan)?",
    pembahasan: "<h4>Konsep</h4><p>Kekebalan dibedakan berdasarkan dua pertanyaan: <b>siapa yang membuat antibodi?</b> (tubuh sendiri = aktif; diberi dari luar = pasif) dan <b>bagaimana didapat?</b> (alami = tanpa disengaja; buatan = sengaja oleh tindakan medis).</p><h4>Langkah</h4><p>Vaksin berisi antigen yang dilemahkan → tubuh membuat antibodi sendiri (<b>aktif</b>) → diberikan sengaja lewat imunisasi (<b>buatan</b>).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Aktif alami = kebal setelah sembuh dari sakit campak.</li><li><b>C</b> Pasif alami = antibodi dari ibu lewat plasenta atau ASI.</li><li><b>D</b> Pasif buatan = suntikan serum berisi antibodi jadi (misalnya antibisa ular, antitetanus).</li><li><b>E</b> Kekebalan bawaan sudah ada sejak lahir dan tidak spesifik terhadap campak.</li></ul><p class=\"tips\"><b>Tips:</b> <b>vaksin</b> = antigen → tubuh bekerja (aktif). <b>Serum</b> = antibodi jadi → tubuh pasif. Serum bekerja cepat tetapi tidak bertahan lama.</p>"
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
    pembahasan: "<h4>Konsep</h4><p><b>Sel T helper</b> (CD4) adalah \"komandan\" sistem imun spesifik: mengaktifkan sel B (pembuat antibodi) dan sel T sitotoksik (pembunuh sel terinfeksi). HIV menginfeksi dan menghancurkan sel T helper.</p><h4>Langkah</h4><p>T helper berkurang → sel B dan T sitotoksik tidak teraktivasi → respons imun spesifik lumpuh → penderita mudah terserang <b>infeksi oportunistik</b> (penyakit yang biasanya tidak berbahaya).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Sel darah merah tidak diserang HIV. Gejala ini lebih mirip anemia atau malaria.</li><li><b>C</b> Keping darah tidak diserang HIV. Gangguan pembekuan lebih terkait demam berdarah atau hemofilia.</li><li><b>D</b> Sel B terganggu secara <i>tidak langsung</i> karena tidak diaktifkan, bukan diserang langsung.</li><li><b>E</b> Neutrofil bukan sasaran utama HIV, dan fagositosis tidak berhenti total.</li></ul><p class=\"tips\"><b>Tips:</b> penderita AIDS umumnya tidak meninggal karena virus HIV itu sendiri, tetapi karena infeksi lain (TBC, pneumonia) akibat sistem imunnya lumpuh.</p>"
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
    pembahasan: "<h4>Konsep</h4><p><b>Gerak refleks</b> adalah gerak cepat tanpa disadari. Impulsnya tidak melewati otak sadar, tetapi diolah di <b>sumsum tulang belakang</b> (untuk refleks tangan/kaki). Jalurnya disebut lengkung refleks: reseptor → saraf sensorik → pusat (sumsum) → saraf motorik → efektor.</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Melalui otak = jalur gerak <i>sadar</i>, lebih lambat.</li><li><b>C</b> Urutan sensorik dan motorik tertukar. Sensorik selalu membawa impuls dari reseptor.</li><li><b>D</b> Arahnya terbalik total, dimulai dari efektor.</li><li><b>E</b> Otak tidak terlibat, dan saraf sensorik tidak menuju efektor.</li></ul><p class=\"tips\"><b>Tips:</b> <b>S</b>ensorik = <b>S</b>inyal masuk (dari reseptor); <b>M</b>otorik = <b>M</b>enggerakkan (ke otot). Refleks kedip mata dan bersin berpusat di otak, sedangkan refleks tangan/kaki di sumsum tulang belakang.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Hormon penting dan fungsinya: <b>insulin</b> menurunkan gula darah; <b>glukagon</b> menaikkan gula darah; <b>ADH</b> menghemat air (urine sedikit); <b>tiroksin</b> mengatur metabolisme; <b>adrenalin</b> menyiapkan tubuh menghadapi bahaya (jantung berdebar, gula darah naik).</p><h4>Tiap pilihan</h4><ul class=\"pengecoh\"><li><b>A</b> ✔ Insulin mengubah glukosa menjadi glikogen → gula darah turun.</li><li><b>B</b> ✔ ADH meningkatkan reabsorpsi air di tubulus → urine sedikit dan pekat.</li><li><b>C</b> ✔ Tiroksin mengatur laju metabolisme dan pertumbuhan.</li><li><b>D</b> ✘ Glukagon <i>menaikkan</i> gula darah (glikogen → glukosa). Ia antagonis insulin.</li><li><b>E</b> ✘ Adrenalin <i>mempercepat</i> denyut jantung (respons \"lawan atau lari\").</li></ul><p class=\"tips\"><b>Tips:</b> insulin dan glukagon bekerja berlawanan. Insulin \"<b>menyimpan</b>\" gula, glukagon \"<b>melepas</b>\" gula.</p>"
  },
  {
    id: "bio-31", bab: "Sistem Reproduksi", level: 1, tipe: "pg",
    soal: "Pada sistem reproduksi pria, sel sperma dibentuk di …",
    opsi: ["Epididimis", "Vas deferens", "Tubulus seminiferus", "Kelenjar prostat", "Vesikula seminalis"],
    kunci: 2,
    hint: "Sperma dibentuk di dalam testis, tepatnya di saluran-saluran kecil yang berkelok-kelok.",
    pembahasan: "<h4>Konsep</h4><p><b>Spermatogenesis</b> (pembentukan sperma) terjadi di <b>tubulus seminiferus</b> di dalam testis. Di sekitarnya ada sel Sertoli (memberi nutrisi sperma) dan sel Leydig (menghasilkan testosteron).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Epididimis adalah tempat <i>pematangan</i> dan penyimpanan sementara sperma.</li><li><b>B</b> Vas deferens adalah saluran pengangkut sperma.</li><li><b>D</b> Prostat menghasilkan cairan basa yang melindungi sperma.</li><li><b>E</b> Vesikula seminalis menghasilkan cairan kaya fruktosa (sumber energi sperma).</li></ul><p class=\"tips\"><b>Tips:</b> urutan perjalanan sperma: tubulus seminiferus → epididimis → vas deferens → uretra. Pembentukan selalu di awal jalur.</p>"
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
    pembahasan: "<h4>Konsep</h4><p>Siklus menstruasi diatur hormon: <b>FSH</b> → folikel matang (menghasilkan estrogen) → lonjakan <b>LH</b> → ovulasi → folikel bekas menjadi <b>korpus luteum</b> → menghasilkan <b>progesteron</b> yang mempertahankan dinding rahim. Tanpa pembuahan, korpus luteum menyusut → progesteron turun → dinding rahim luruh.</p><h4>Tiap pernyataan</h4><ul class=\"pengecoh\"><li><b>1</b> <i>Benar.</i> FSH (<i>Follicle Stimulating Hormone</i>) merangsang pematangan folikel.</li><li><b>2</b> <i>Benar.</i> Lonjakan LH sekitar hari ke-14 memicu pelepasan sel telur.</li><li><b>3</b> <i>Benar.</i> Korpus luteum menghasilkan progesteron (dan sedikit estrogen).</li><li><b>4</b> <i>Salah.</i> Menstruasi dipicu oleh <b>penurunan</b> progesteron. Progesteron justru mempertahankan endometrium.</li></ul><p class=\"tips\"><b>Tips:</b> anggap progesteron sebagai \"penyangga\" dinding rahim. Kalau penyangganya hilang, dinding rahim runtuh dan terjadi menstruasi.</p>"
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
    pembahasan: "<h4>Konsep</h4><p><b>Fertilisasi</b> (pertemuan sperma dan ovum) terjadi di <b>tuba falopi</b> (oviduk), bagian ampula. Zigot membelah sambil bergerak ke rahim selama ±5–7 hari, lalu menempel pada <b>endometrium</b> (implantasi).</p><h4>Kenapa bukan yang lain</h4><ul class=\"pengecoh\"><li><b>A</b> Ovarium adalah tempat pembentukan dan pelepasan ovum, bukan pembuahan.</li><li><b>C</b> Vagina adalah jalan lahir dan tempat masuknya sperma, bukan tempat implantasi.</li><li><b>D</b> Serviks (leher rahim) adalah jalan yang dilalui sperma.</li><li><b>E</b> Ovarium bukan tempat fertilisasi.</li></ul><p class=\"tips\"><b>Tips:</b> jika embrio tertanam di luar rahim (misalnya di tuba), disebut kehamilan <b>ektopik</b>. Ini berbahaya karena tuba bisa pecah.</p>"
  }
]};
