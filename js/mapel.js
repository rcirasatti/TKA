// Daftar mata pelajaran. Ubah `siap: true` saat bank soal mapel tersebut sudah ada di folder data/.
window.DAFTAR_MAPEL = [
  { id: "kimia",      nama: "Kimia",            ico: "⚗️", siap: true,  ket: "Struktur atom, stoikiometri, asam-basa, termokimia, laju, kesetimbangan, organik" },
  { id: "kimia-hots", nama: "Kimia · Paket HOTS", ico: "🔥", siap: true, ket: "Gaya tryout: bilangan kuantum, kalorimeter, Kp, titrasi, Qsp, koligatif, redoks, sel volta, elektrolisis" },
  { id: "biologi",    nama: "Biologi",          ico: "🧬", siap: true, ket: "Keanekaragaman hayati, sel & metabolisme, sistem organ, keterampilan proses" },
  { id: "biologi-hots", nama: "Biologi · Paket HOTS", ico: "🔥", siap: true, ket: "Gaya tryout: kasus klinis, hitungan Krebs, fermentasi, fotofosforilasi, bioteknologi, analisis percobaan" },
  { id: "matematika",nama: "Matematika",       ico: "📐", siap: true, ket: "Bilangan, aljabar, geometri, trigonometri, data & peluang" },
  { id: "matematika-hots", nama: "Matematika · Paket HOTS", ico: "🔥", siap: true, ket: "Soal cerita & penalaran gaya tryout: Venn, kecukupan data, posisi duduk, SPL cerita, belanja minimum, program linear" },
  { id: "inggris",    nama: "Bahasa Inggris",   ico: "🇬🇧", siap: true, ket: "Reading: textual, inferential, evaluation & appreciation" },
  { id: "inggris-hots", nama: "Bahasa Inggris · Paket HOTS", ico: "🔥", siap: true, ket: "Gaya tryout: grammar cloze, Which THREE, reference, matching categories, fact–opinion, strengthening arguments" },
  { id: "indonesia", nama: "Bahasa Indonesia", ico: "📖", siap: true, ket: "Pemahaman tekstual, inferensial, evaluasi & apresiasi" },
  { id: "indonesia-hots", nama: "Bahasa Indonesia · Paket HOTS", ico: "🔥", siap: true, ket: "Gaya tryout: proposal, argumen logis, drama, puisi kritik sosial, kalimat hilang, urutan kalimat, pola kalimat" }
];

// Elemen → sub-elemen persis seperti kerangka asesmen TKA SMA di pusmendik.kemendikdasmen.go.id/tka.
// `bab` setiap soal harus sama dengan salah satu sub-elemen; selain itu dianggap di luar kisi-kisi TKA.
window.KERANGKA_TKA = {
  matematika: [
    ["Bilangan", ["Bilangan Real"]],
    ["Aljabar", ["Persamaan dan Pertidaksamaan Linear", "Fungsi", "Barisan dan Deret"]],
    ["Geometri dan Pengukuran", ["Objek Geometri", "Transformasi Geometri", "Pengukuran"]],
    ["Trigonometri", ["Perbandingan Trigonometri"]],
    ["Data dan Peluang", ["Data", "Peluang"]]
  ],
  kimia: [
    ["Kimia Dasar", ["Struktur Atom", "Teori Model Atom", "Sistem dan Sifat Periodik Unsur", "Ikatan Kimia",
      "Geometri Molekul", "Interaksi Antarmolekul", "Hukum Dasar Kimia", "Stoikiometri dan Persamaan Reaksi Kimia"]],
    ["Kimia Analitik", ["Larutan", "Kesetimbangan Larutan", "Asam-Basa", "pH", "Koloid"]],
    ["Kimia Fisik", ["Energetika dan Dinamika Reaksi"]],
    ["Kimia Organik", ["Struktur dan Kereaktifan Senyawa Karbon"]]
  ],
  biologi: [
    ["Keanekaragaman Hayati", ["Klasifikasi dan Keanekaragaman Makhluk Hidup", "Bakteri", "Ekosistem"]],
    ["Sel: Metabolisme", ["Sel: Metabolisme"]],
    ["Proses-proses pada Makhluk Hidup", ["Transport dan Pertukaran Zat", "Sistem Imun", "Sistem Koordinasi", "Sistem Reproduksi"]],
    ["Keterampilan Proses", ["Mempertanyakan dan Memprediksi", "Merencanakan dan Melakukan Penyelidikan",
      "Memproses, Menganalisis Data dan Informasi"]]
  ],
  inggris: [
    ["Kompetensi membaca", ["Pemahaman Tekstual", "Pemahaman Inferensial", "Evaluasi dan Apresiasi"]]
  ],
  indonesia: [
    ["Kompetensi membaca", ["Pemahaman Tekstual", "Pemahaman Inferensial", "Evaluasi dan Apresiasi"]]
  ]
};
