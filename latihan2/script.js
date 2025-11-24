// --- DATABASE SOAL (65 SOAL LATIHAN) ---
const quizQuestions = [
    // I. Model Pembelajaran Inovatif (PBL & PjBL) - 20 Soal
    {
        q: "Dalam tahap Orientasi Peserta Didik pada Masalah di PBL, tindakan guru yang paling tepat untuk memicu critical thinking peserta didik dalam kasus game design adalah...",
        options: [
            "Meminta peserta didik membaca bab buku tentang DDG.",
            "Memberikan daftar lengkap bug yang harus diperbaiki.",
            "Menyajikan gameplay yang memiliki flow rusak dan meminta mereka mengidentifikasi kerusakannya.",
            "Membagikan kelompok dan langsung memberi tugas."
        ],
        a: "Menyajikan gameplay yang memiliki flow rusak dan meminta mereka mengidentifikasi kerusakannya."
    },
    {
        q: "Jika guru ingin peserta didik secara mendalam memahami arsitektur data game engine, tahap PBL yang paling krusial adalah...",
        options: [
            "Tahap 1: Orientasi masalah.",
            "Tahap 2: Mengorganisasikan untuk belajar.",
            "Tahap 3: Membimbing penyelidikan individu/kelompok.",
            "Tahap 4: Mengembangkan dan menyajikan hasil."
        ],
        a: "Tahap 3: Membimbing penyelidikan individu/kelompok."
    },
    {
        q: "Seorang guru meminta setiap kelompok mempresentasikan wireframe antarmuka (UI) dan menerima feedback dari kelompok lain. Kegiatan ini paling tepat dilakukan pada tahap sintaks PBL...",
        options: [
            "Tahap Orientasi Masalah.",
            "Tahap Mengorganisasikan untuk Belajar.",
            "Tahap Membimbing Penyelidikan.",
            "Tahap Mengembangkan dan Menyajikan Hasil."
        ],
        a: "Tahap Mengembangkan dan Menyajikan Hasil."
    },
    {
        q: "Peserta didik telah menemukan solusi untuk masalah balancing karakter pada game genre RPG. Langkah selanjutnya dalam PBL yang harus dilakukan guru adalah...",
        options: [
            "Memberikan masalah baru.",
            "Meminta mereka membuat flowchart implementasi solusi.",
            "Menginstruksikan mereka untuk menganalisis dan mengevaluasi solusi yang telah mereka temukan.",
            "Memberikan nilai akhir."
        ],
        a: "Menginstruksikan mereka untuk menganalisis dan mengevaluasi solusi yang telah mereka temukan."
    },
    {
        q: "Tantangan: Peserta didik cenderung pasif saat melakukan penyelidikan mandiri dalam PBL. Solusi Pedagogis yang paling efektif dilakukan guru adalah...",
        options: [
            "Memberikan semua jawaban di awal.",
            "Mengganti model pembelajaran menjadi ceramah.",
            "Memberikan scaffolding berupa daftar pertanyaan panduan (guiding questions) yang mengarah ke solusi.",
            "Mengeluarkan peserta didik yang pasif."
        ],
        a: "Memberikan scaffolding berupa daftar pertanyaan panduan (guiding questions) yang mengarah ke solusi."
    },
    {
        q: "Kompetensi yang diukur ketika guru meminta peserta didik untuk membuat mapping antara kebutuhan user dan game mechanics yang akan dibuat adalah...",
        options: [
            "Keterampilan menghafal.",
            "Keterampilan menulis kode.",
            "Keterampilan merumuskan hipotesis dan menguji relevansi.",
            "Keterampilan membuat model 3D."
        ],
        a: "Keterampilan merumuskan hipotesis dan menguji relevansi."
    },
    {
        q: "Guru menyajikan kasus tentang lag atau penurunan frame rate pada game di perangkat low-end. Peserta didik diminta mencari faktor penyebab. Ini termasuk tahap PBL...",
        options: [
            "Mengorganisasikan peserta didik untuk belajar.",
            "Orientasi peserta didik pada masalah.",
            "Mengembangkan dan menyajikan hasil karya.",
            "Menganalisis dan mengevaluasi proses pemecahan masalah."
        ],
        a: "Orientasi peserta didik pada masalah."
    },
    {
        q: "Setelah presentasi solusi lag pada game (hardware/software), guru harus memfasilitasi...",
        options: [
            "Tes tertulis.",
            "Ceramah guru.",
            "Diskusi interaktif untuk membandingkan dan mengonfirmasi temuan antar kelompok.",
            "Pemberian tugas rumah."
        ],
        a: "Diskusi interaktif untuk membandingkan dan mengonfirmasi temuan antar kelompok."
    },
    {
        q: "Kompetensi Dasar (KD) adalah membuat prototype animasi 3D pendek. Tahap pertama PjBL yang harus dilakukan guru adalah...",
        options: [
            "Menyusun jadwal proyek.",
            "Menentukan pertanyaan mendasar (start with the essential question).",
            "Mendesain asesmen.",
            "Menguji hasil."
        ],
        a: "Menentukan pertanyaan mendasar (start with the essential question)."
    },
    {
        q: "Pertanyaan Mendasar yang tepat untuk proyek Game Edukasi adalah...",
        options: [
            "Apa itu game edukasi?",
            "Berapa lama waktu yang dibutuhkan untuk membuat game edukasi?",
            "Bagaimana kita merancang sebuah game yang tidak hanya menghibur, tetapi juga efektif mengajarkan konsep fisika?",
            "Siapa target audiens game edukasi?"
        ],
        a: "Bagaimana kita merancang sebuah game yang tidak hanya menghibur, tetapi juga efektif mengajarkan konsep fisika?"
    },
    {
        q: "Saat proses Memonitor Peserta Didik dan Kemajuan Proyek dalam PjBL, alat bantu yang paling efektif digunakan guru untuk melacak progress aset dan script secara kolaboratif adalah...",
        options: [
            "Buku absen harian.",
            "Checklist tugas sederhana.",
            "Trello/Asana atau Gantt Chart proyek.",
            "Tes tulis mendadak."
        ],
        a: "Trello/Asana atau Gantt Chart proyek."
    },
    {
        q: "Tantangan: Proyek game yang dibuat peserta didik mengalami scope creep (melebar dari rencana awal). Langkah intervensi PjBL yang paling tepat oleh guru adalah...",
        options: [
            "Membatalkan proyek.",
            "Mengizinkan scope creep tanpa batas.",
            "Melakukan adjustment pada jadwal dan kriteria proyek awal (milestone) bersama kelompok.",
            "Mengurangi anggota kelompok."
        ],
        a: "Melakukan adjustment pada jadwal dan kriteria proyek awal (milestone) bersama kelompok."
    },
    {
        q: "Manakah yang merupakan ciri utama penilaian autentik dalam PjBL Game Development?",
        options: [
            "Nilai didapat dari ulangan harian.",
            "Nilai hanya diambil dari presentasi.",
            "Penilaian mencakup product (prototipe game) dan process (log book, kerja tim).",
            "Penilaian hanya fokus pada seberapa banyak baris kode yang ditulis."
        ],
        a: "Penilaian mencakup product (prototipe game) dan process (log book, kerja tim)."
    },
    {
        q: "Strategi pembelajaran yang melibatkan peserta didik berpasangan dua orang untuk menganalisis kelebihan dan kekurangan game engine tertentu sebelum diskusi kelas adalah sintaks dari model...",
        options: [
            "Group Investigation.",
            "Project Based Learning.",
            "Problem Based Learning.",
            "Think-Pair-Share."
        ],
        a: "Think-Pair-Share."
    },
    {
        q: "Guru meminta peserta didik untuk membuat studi kasus mendalam mengenai kegagalan Cyberpunk 2077 saat rilis. Kegiatan ini cocok untuk tahap awal model...",
        options: [
            "Discovery Learning.",
            "Project-Based Learning.",
            "Problem-Based Learning (PBL).",
            "Inquiry Learning."
        ],
        a: "Problem-Based Learning (PBL)."
    },
    {
        q: "Tahapan 'Mencari data dan informasi untuk hipotesis' paling cocok dengan sintaks...",
        options: [
            "PBL (Membimbing Penyelidikan).",
            "PjBL (Menyusun Jadwal).",
            "Discovery Learning (Pengumpulan Data).",
            "A dan C benar."
        ],
        a: "A dan C benar."
    },
    {
        q: "Untuk KD yang menuntut kemampuan kerja sama tim (seperti integrasi aset oleh modeler dan programmer), model yang paling ditekankan pada kolaborasi jangka panjang adalah...",
        options: [
            "Direct Instruction.",
            "Discovery Learning.",
            "Problem-Based Learning.",
            "Project-Based Learning."
        ],
        a: "Project-Based Learning."
    },
    {
        q: "Dalam Rencana Pelaksanaan Pembelajaran (RPP) yang berbasis PjBL, alokasi waktu terbanyak harus diberikan untuk tahap...",
        options: [
            "Pembukaan (Apersepsi).",
            "Penyampaian materi teori.",
            "Pelaksanaan proyek dan monitoring.",
            "Evaluasi tes tertulis."
        ],
        a: "Pelaksanaan proyek dan monitoring."
    },
    {
        q: "Model pembelajaran yang efektif untuk mengajarkan Debugging (mencari dan memperbaiki kesalahan kode) adalah...",
        options: [
            "Direct Instruction (Ceramah).",
            "Cooperative Learning (Kerja sama tim).",
            "Problem-Based Learning (PBL).",
            "Expository."
        ],
        a: "Problem-Based Learning (PBL)."
    },
    {
        q: "Guru ingin peserta didik menemukan sendiri prinsip-prinsip desain level yang baik tanpa diberi tahu di awal. Model yang paling tepat adalah...",
        options: [
            "Direct Instruction.",
            "Cooperative Learning.",
            "Discovery Learning.",
            "Problem-Based Learning."
        ],
        a: "Discovery Learning."
    },

    // II. Dokumen Desain Game (DDG) - 10 Soal
    {
        q: "Bagian DDG yang menjelaskan target frame rate, spesifikasi RAM minimum, dan kompatibilitas platform adalah...",
        options: [
            "Core Gameplay.",
            "Art Style and Assets.",
            "Technical Specification.",
            "Monetization."
        ],
        a: "Technical Specification."
    },
    {
        q: "Dalam hierarki elemen DDG, Visi Game harus ditetapkan sebelum menentukan...",
        options: [
            "Art Direction.",
            "Monetization.",
            "Core Gameplay Loop.",
            "Semua di atas."
        ],
        a: "Semua di atas."
    },
    {
        q: "Manakah elemen yang merupakan bagian dari Core Gameplay Loop?",
        options: [
            "Story dan Character.",
            "Art dan Audio.",
            "Controls, Mechanics, dan Goals.",
            "Level Design dan Monetization."
        ],
        a: "Controls, Mechanics, dan Goals."
    },
    {
        q: "Tujuan utama penulisan DDG adalah...",
        options: [
            "Dokumen yang digunakan sebagai kontrak dengan publisher.",
            "Blueprint atau panduan komunikasi tunggal bagi seluruh tim pengembangan.",
            "Bahan presentasi untuk investor.",
            "Laporan akhir proyek."
        ],
        a: "Blueprint atau panduan komunikasi tunggal bagi seluruh tim pengembangan."
    },
    {
        q: "Bagian Story pada DDG harus mencakup...",
        options: [
            "Spesifikasi resolusi gambar.",
            "Latar belakang (Lore), karakter utama, dan alur cerita kunci.",
            "Mekanisme loot box.",
            "Daftar semua bug."
        ],
        a: "Latar belakang (Lore), karakter utama, dan alur cerita kunci."
    },
    {
        q: "Jika game tersebut adalah Free-to-Play (F2P), bagian DDG yang paling ditekankan adalah...",
        options: [
            "Level Design.",
            "User Interface.",
            "Monetization.",
            "Art Style."
        ],
        a: "Monetization."
    },
    {
        q: "Sebelum membuat aset 3D (Art), desainer harus menyelesaikan bagian DDG mengenai...",
        options: [
            "Visi dan Art Direction.",
            "Technical Specifications.",
            "Bug Tracking.",
            "Testing Plan."
        ],
        a: "Visi dan Art Direction."
    },
    {
        q: "Dokumen yang harus diselesaikan sebelum DDG dibuat secara penuh adalah...",
        options: [
            "Marketing Plan.",
            "Game Concept Document (GCD) atau Pitch Document.",
            "User Manual.",
            "Quality Assurance (QA) Report."
        ],
        a: "Game Concept Document (GCD) atau Pitch Document."
    },
    {
        q: "Dalam urutan prioritas pengerjaan game, Prototyping paling fokus pada elemen DDG...",
        options: [
            "Art dan Audio.",
            "Core Mechanics dan Controls.",
            "Monetization dan Legal.",
            "Story dan Lore."
        ],
        a: "Core Mechanics dan Controls."
    },
    {
        q: "Elemen DDG yang bertugas memastikan navigasi dan informasi disajikan secara intuitif kepada pemain adalah...",
        options: [
            "Level Design.",
            "Game Flow.",
            "User Interface (UI) dan User Experience (UX).",
            "Technical Specification."
        ],
        a: "User Interface (UI) dan User Experience (UX)."
    },

    // III. Pemodelan, Rigging, Texturing, Shading 3D - 25 Soal
    {
        q: "Untuk membuat model karakter 3D yang dapat bergerak lentur di bagian sendi, spesifikasi rigging yang benar adalah...",
        options: [
            "Menghilangkan semua edge loop di sendi.",
            "Menggunakan Bone Weight Painting yang terdistribusi gradien di sekitar sendi.",
            "Menggunakan hanya satu bone untuk seluruh lengan.",
            "Menerapkan modifier Decimate."
        ],
        a: "Menggunakan Bone Weight Painting yang terdistribusi gradien di sekitar sendi."
    },
    {
        q: "Tujuan utama penerapan Inverse Kinematics (IK) pada rigging kaki karakter adalah...",
        options: [
            "Membuat gerakan kaki lebih lambat.",
            "Memungkinkan animasi hanya dengan memindahkan controller di pergelangan kaki.",
            "Menghilangkan semua bone.",
            "Membuat kaki terlihat lebih tebal."
        ],
        a: "Memungkinkan animasi hanya dengan memindahkan controller di pergelangan kaki."
    },
    {
        q: "Teknik Normal Mapping pada texturing 3D berfungsi untuk...",
        options: [
            "Mengubah warna dasar objek.",
            "Menambahkan detail pencahayaan dan bayangan palsu (ilusi kedalaman) tanpa menambah polygon geometry.",
            "Menghapus semua tekstur.",
            "Membuat objek transparan."
        ],
        a: "Menambahkan detail pencahayaan dan bayangan palsu (ilusi kedalaman) tanpa menambah polygon geometry."
    },
    {
        q: "Dalam alur kerja PBR (Physically Based Rendering), map yang mengatur seberapa banyak cahaya yang dipantulkan dari permukaan objek, terutama pada logam, adalah...",
        options: [
            "Diffuse Map.",
            "Albedo Map.",
            "Roughness Map.",
            "Metallic Map."
        ],
        a: "Metallic Map."
    },
    {
        q: "Jika hasil rendering menunjukkan objek logam terlihat seperti plastik mengkilap, map yang paling mungkin perlu diperbaiki adalah...",
        options: [
            "Albedo (terlalu gelap).",
            "Normal (terlalu kuat).",
            "Roughness (terlalu tinggi/putih).",
            "Metallic (terlalu rendah/hitam)."
        ],
        a: "Metallic (terlalu rendah/hitam)."
    },
    {
        q: "Manakah yang merupakan prinsip utama dalam clean topology pemodelan 3D karakter?",
        options: [
            "Semua face harus berbentuk n-gon.",
            "Aliran edge loop mengikuti garis otot dan deformasi.",
            "Jumlah polygon harus selalu di atas 50.000.",
            "Tidak boleh ada quad (4-sided polygon)."
        ],
        a: "Aliran edge loop mengikuti garis otot dan deformasi."
    },
    {
        q: "UV Unwrapping adalah proses penting sebelum texturing. Tujuannya adalah...",
        options: [
            "Memotong model 3D menjadi potongan-potongan kecil.",
            "Proyeksi koordinat 3D objek ke permukaan 2D agar tekstur dapat diterapkan tanpa distorsi.",
            "Mengatur warna dasar model.",
            "Menambahkan modifier Subsurf."
        ],
        a: "Proyeksi koordinat 3D objek ke permukaan 2D agar tekstur dapat diterapkan tanpa distorsi."
    },
    {
        q: "Untuk membuat model batu yang terlihat memiliki banyak detail kerikil tajam tanpa meningkatkan jumlah polygon, Anda harus menggunakan map...",
        options: [
            "Color Map.",
            "Emission Map.",
            "Normal Map.",
            "Ambient Occlusion Map."
        ],
        a: "Normal Map."
    },
    {
        q: "Jika Anda ingin membuat material kaca transparan, parameter shader yang harus disesuaikan adalah...",
        options: [
            "Roughness dan Metallic.",
            "Specular dan Emission.",
            "Transmission dan IOR (Index of Refraction).",
            "Normal dan Diffuse."
        ],
        a: "Transmission dan IOR (Index of Refraction)."
    },
    {
        q: "Fungsi utama dari Modifier Subdivision Surface pada mesh adalah...",
        options: [
            "Mengurangi jumlah polygon.",
            "Memberikan tampilan halus dengan menambahkan geometry secara iteratif.",
            "Membuat objek menjadi kaku.",
            "Menghapus tekstur."
        ],
        a: "Memberikan tampilan halus dengan menambahkan geometry secara iteratif."
    },
    {
        q: "Dalam rigging, constraint Copy Rotation sering digunakan untuk...",
        options: [
            "Membatasi pergerakan bone.",
            "Membuat satu bone mengikuti rotasi bone lain.",
            "Membuat objek melompat.",
            "Mengubah warna bone."
        ],
        a: "Membuat satu bone mengikuti rotasi bone lain."
    },
    {
        q: "Untuk game dengan low-poly art style, teknik texturing yang paling umum digunakan untuk memberikan warna dan detail adalah...",
        options: [
            "PBR Workflow.",
            "Hand-Painted Texturing.",
            "Procedural Texturing kompleks.",
            "Photogrammetry."
        ],
        a: "Hand-Painted Texturing."
    },
    {
        q: "Teknik membuat ekspresi wajah (senyum, marah, sedih) pada karakter 3D tanpa menggerakkan bone tambahan di wajah adalah...",
        options: [
            "Forward Kinematics (FK).",
            "Shape Keys atau Blend Shapes.",
            "Physics Simulation.",
            "Constraint Damped Track."
        ],
        a: "Shape Keys atau Blend Shapes."
    },
    {
        q: "Pada proses Baking tekstur, map yang umumnya di-bake dari high-poly mesh ke low-poly mesh untuk mentransfer detail adalah...",
        options: [
            "Color Map.",
            "Normal Map.",
            "Roughness Map.",
            "Metallic Map."
        ],
        a: "Normal Map."
    },
    {
        q: "Manakah yang bukan merupakan komponen dari Shader Node Tree yang umum digunakan dalam game engine?",
        options: [
            "Diffuse/Albedo.",
            "Metallic.",
            "Roughness.",
            "IK Solver."
        ],
        a: "IK Solver."
    },
    {
        q: "Topologi mengacu pada...",
        options: [
            "Warna dan tekstur objek.",
            "Susunan dan konektivitas vertices, edges, dan faces pada mesh.",
            "Jumlah bone yang digunakan dalam rigging.",
            "Teknik pencahayaan yang digunakan."
        ],
        a: "Susunan dan konektivitas vertices, edges, dan faces pada mesh."
    },
    {
        q: "Apa yang harus dilakukan pada UV Map saat ditemukan adanya Stretch (Distorsi) pada tekstur di model 3D?",
        options: [
            "Menambahkan modifier Subdivision.",
            "Menghapus seluruh tekstur.",
            "Menambahkan Seam (jahitan) pada area tersebut dan melakukan Unwrap ulang.",
            "Mengubah warna tekstur."
        ],
        a: "Menambahkan Seam (jahitan) pada area tersebut dan melakukan Unwrap ulang."
    },
    {
        q: "Untuk membuat material tanah basah dan becek, Anda harus mengatur parameter shader...",
        options: [
            "Roughness rendah dan Metallic tinggi.",
            "Roughness tinggi dan Metallic rendah.",
            "Roughness rendah dan Metallic rendah (material non-logam).",
            "Roughness tinggi dan Metallic tinggi."
        ],
        a: "Roughness rendah dan Metallic rendah (material non-logam)."
    },
    {
        q: "Bones Layer dalam rigging berfungsi untuk...",
        options: [
            "Membatasi sudut rotasi bone.",
            "Menyembunyikan dan mengorganisasi kelompok bone (misalnya IK vs FK).",
            "Mengubah warna bone.",
            "Menentukan posisi mesh."
        ],
        a: "Menyembunyikan dan mengorganisasi kelompok bone (misalnya IK vs FK)."
    },
    {
        q: "Ketika membuat animasi berjalan, langkah yang paling awal harus dilakukan setelah rigging selesai adalah...",
        options: [
            "Membuat keyframe di pose kontak (kaki menapak).",
            "Menambahkan Normal Map.",
            "Mengatur pencahayaan.",
            "Mengubah art style."
        ],
        a: "Membuat keyframe di pose kontak (kaki menapak)."
    },
    {
        q: "Dalam konteks Game Engine, material adalah...",
        options: [
            "Tekstur gambar 2D yang menempel pada model.",
            "Kumpulan node dan parameter yang mendefinisikan bagaimana permukaan objek berinteraksi dengan cahaya.",
            "File mesh 3D itu sendiri.",
            "Script yang mengatur pergerakan objek."
        ],
        a: "Kumpulan node dan parameter yang mendefinisikan bagaimana permukaan objek berinteraksi dengan cahaya."
    },
    {
        q: "Teknik Retopology dalam pemodelan 3D bertujuan untuk...",
        options: [
            "Menambah resolusi tekstur.",
            "Membuat low-poly mesh bersih dari high-poly sculpt untuk penggunaan dalam game engine.",
            "Menghapus semua edge loop.",
            "Mengubah warna vertex."
        ],
        a: "Membuat low-poly mesh bersih dari high-poly sculpt untuk penggunaan dalam game engine."
    },
    {
        q: "Jika Anda ingin membuat animasi tali atau rambut yang bergerak mengikuti simulasi fisika, rigging yang diperlukan adalah...",
        options: [
            "Rigging dengan FK (Forward Kinematics) kaku.",
            "Rigging dengan Bone Chain yang dikombinasikan dengan Physics Simulation (misalnya Cloth atau Soft Body).",
            "Hanya IK.",
            "Hanya Shape Keys."
        ],
        a: "Rigging dengan Bone Chain yang dikombinasikan dengan Physics Simulation (misalnya Cloth atau Soft Body)."
    },
    {
        q: "Manakah kriteria minimal dalam proyek Lighting/Pencahayaan PjBL?",
        options: [
            "Model 3D minimal 100.000 poly.",
            "Minimal satu sumber cahaya (misalnya Sun/Directional Light).",
            "Menggunakan game engine paling mahal.",
            "Semua model harus di-sculpt."
        ],
        a: "Minimal satu sumber cahaya (misalnya Sun/Directional Light)."
    },
    {
        q: "Untuk proyek Voxel Art (seni berbasis kubus), shader yang paling sesuai adalah...",
        options: [
            "PBR yang kompleks.",
            "Unlit atau Flat Shading sederhana.",
            "Subsurface Scattering.",
            "Ray Tracing penuh."
        ],
        a: "Unlit atau Flat Shading sederhana."
    },

    // IV. Konsep Game dan Pengembangan - 10 Soal
    {
        q: "Bagian Game Flow (Alur Game) menjelaskan...",
        options: [
            "Urutan pembuatan aset 3D.",
            "Urutan perpindahan pemain dari satu layar/menu ke layar/menu lainnya, termasuk game loop.",
            "Cara karakter berlari.",
            "Jumlah frame rate."
        ],
        a: "Urutan perpindahan pemain dari satu layar/menu ke layar/menu lainnya, termasuk game loop."
    },
    {
        q: "Core Loop (Loop Inti) dari game jenis RPG biasanya mencakup...",
        options: [
            "Membangun → Menjual → Tidur.",
            "Mencari Quest → Bertarung → Mendapat Loot → Naik Level.",
            "Menonton cutscene → Menunggu loading → Keluar.",
            "Menyalakan → Mematikan konsol."
        ],
        a: "Mencari Quest → Bertarung → Mendapat Loot → Naik Level."
    },
    {
        q: "Manakah yang termasuk kriteria penilaian Good Game Design?",
        options: [
            "Grafik harus photorealistic.",
            "Memiliki Game Mechanics yang jelas dan challenging namun fair.",
            "Ukuran file sangat besar.",
            "Memiliki 100 jenis shader berbeda."
        ],
        a: "Memiliki Game Mechanics yang jelas dan challenging namun fair."
    },
    {
        q: "Monetization yang paling umum digunakan pada game konsol AAA adalah...",
        options: [
            "Iklan interstitial.",
            "Free-to-Play dengan loot box.",
            "Full Premium Purchase (Beli sekali main).",
            "Langganan bulanan wajib."
        ],
        a: "Full Premium Purchase (Beli sekali main)."
    },
    {
        q: "Desain Level yang baik harus mampu...",
        options: [
            "Menggunakan semua aset yang tersedia.",
            "Menghabiskan waktu secepat mungkin.",
            "Memandu pemain secara intuitif (implicit guiding) dan memberikan challenge yang sesuai.",
            "Hanya terdiri dari garis lurus."
        ],
        a: "Memandu pemain secara intuitif (implicit guiding) dan memberikan challenge yang sesuai."
    },
    {
        q: "UX (User Experience) dalam game merujuk pada...",
        options: [
            "Desain tombol dan ikon.",
            "Perasaan dan pengalaman keseluruhan pemain saat berinteraksi dengan game.",
            "Kecepatan koneksi internet.",
            "Jumlah polygon di layar."
        ],
        a: "Perasaan dan pengalaman keseluruhan pemain saat berinteraksi dengan game."
    },
    {
        q: "Jika game memiliki masalah Game Balancing yang serius, hal ini berhubungan erat dengan perbaikan pada elemen DDG...",
        options: [
            "Monetization.",
            "Core Mechanics dan Stats.",
            "Art Direction.",
            "Audio Design."
        ],
        a: "Core Mechanics dan Stats."
    },
    {
        q: "Pengujian Alpha Test pada game development fokus pada...",
        options: [
            "Menguji game oleh tim internal untuk menemukan major bug dan core mechanics yang rusak.",
            "Menguji game oleh publik luas.",
            "Menguji marketing plan.",
            "Menguji harga jual."
        ],
        a: "Menguji game oleh tim internal untuk menemukan major bug dan core mechanics yang rusak."
    },
    {
        q: "Jika Anda ingin game dapat diakses oleh tunanetra (disabilitas), Anda perlu memperhatikan aspek...",
        options: [
            "Level Design yang sangat kompleks.",
            "Accessibility (misalnya Screen Reader dan Audio Cues).",
            "Monetization yang ketat.",
            "High-poly modeling."
        ],
        a: "Accessibility (misalnya Screen Reader dan Audio Cues)."
    },
    {
        q: "Prototyping dalam game development adalah proses untuk...",
        options: [
            "Membuat semua aset final.",
            "Menguji dan memvalidasi ide core gameplay dan mekanik dengan cepat dan murah.",
            "Menulis Story lengkap.",
            "Mencari investor."
        ],
        a: "Menguji dan memvalidasi ide core gameplay dan mekanik dengan cepat dan murah."
    }
];

// --- FUNGSI LOGIKA QUIZ ---
const questionsList = document.getElementById('questions-list');
const resultsDiv = document.getElementById('results');
const scoreSpan = document.getElementById('score');
const feedbackDiv = document.getElementById('feedback');

// Fungsi untuk menampilkan soal
function renderQuestions() {
    questionsList.innerHTML = '';
    quizQuestions.forEach((questionData, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        const qText = document.createElement('p');
        qText.className = 'question-text';
        qText.innerHTML = `**Soal ${index + 1}:** ${questionData.q}`;
        questionCard.appendChild(qText);
        
        questionData.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${index}`;
            radio.value = option;
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(String.fromCharCode(65 + optionIndex) + ". " + option));
            questionCard.appendChild(label);
        });
        
        questionsList.appendChild(questionCard);
    });
}

// Fungsi untuk menghitung dan menampilkan hasil
function submitQuiz() {
    let score = 0;
    
    // Reset styling
    const allLabels = document.querySelectorAll('.option-label');
    allLabels.forEach(label => {
        label.classList.remove('correct-answer', 'wrong-answer');
    });

    quizQuestions.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        const questionCard = document.querySelector(`.question-card:nth-child(${index + 1})`);
        
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = questionData.a;
            
            // Highlight user's choice
            const userLabel = selectedOption.closest('label');
            
            if (userAnswer === correctAnswer) {
                score++;
                userLabel.classList.add('correct-answer');
            } else {
                userLabel.classList.add('wrong-answer');
                // Find and highlight the correct answer (optional: wait for showAnswers)
            }
        }
    });

    scoreSpan.textContent = score;
    resultsDiv.classList.remove('results-hidden');
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi opsional untuk menampilkan kunci jawaban
function showAnswers() {
    quizQuestions.forEach((questionData, index) => {
        const options = document.querySelectorAll(`input[name="question-${index}"]`);
        
        options.forEach(radio => {
            const label = radio.closest('label');
            
            if (radio.value === questionData.a) {
                // Highlight the correct answer in green
                label.classList.add('correct-answer');
            } else if (radio.checked && radio.value !== questionData.a) {
                // Keep wrong answer highlighted (red)
            } else {
                // Ensure unselected wrong options are reset/normal
                label.classList.remove('correct-answer', 'wrong-answer');
            }
            
            // Disable options after checking
            radio.disabled = true;
        });
    });
    
    document.getElementById('submit-btn').style.display = 'none';
    alert("Kunci Jawaban telah ditampilkan di setiap soal.");
}


// Inisialisasi: Tampilkan soal saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderQuestions);