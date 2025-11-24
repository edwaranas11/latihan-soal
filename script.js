// --- DATABASE SOAL UKMPPG PPLG (LENGKAP 65 SOAL PG) ---
const questions = [
    // --- I. KELOMPOK PEDAGOGI & MODEL PEMBELAJARAN (Soal 1-15) ---
    {
        question: "1. Model pembelajaran yang paling sesuai untuk proyek pengembangan perangkat lunak berskala besar yang menekankan kolaborasi tim, manajemen waktu, dan produk akhir yang fungsional adalah...",
        options: ["A. Problem-Based Learning (PBL)", "B. Inquiry-Based Learning", "C. Discovery Learning", "D. Project-Based Learning (PjBL)"],
        answer: "D. Project-Based Learning (PjBL)",
        explanation: "PjBL fokus pada pembuatan produk akhir yang kompleks dalam waktu tertentu, sangat cocok untuk proyek PPLG yang melibatkan banyak tahapan dan kolaborasi tim."
    },
    {
        question: "2. Ketika menerapkan PBL, tahap di mana guru membantu siswa mengidentifikasi informasi yang relevan dan sumber daya yang diperlukan untuk memecahkan masalah (*bug* pada perangkat lunak) berada pada sintaks...",
        options: ["A. Orientasi siswa pada masalah.", "B. Mengorganisasi siswa untuk belajar.", "C. Membimbing penyelidikan.", "D. Mengembangkan dan menyajikan hasil karya."],
        answer: "B. Mengorganisasi siswa untuk belajar.",
        explanation: "Sintaks kedua PBL adalah mengorganisasi siswa untuk memastikan mereka tahu peran dan sumber daya yang diperlukan untuk penyelidikan."
    },
    {
        question: "3. Guru meminta siswa menganalisis dan mengevaluasi 5 *game engine* berbeda (Unity, Unreal, Godot, dll.) berdasarkan kebutuhan proyek mereka. Kegiatan ini paling tepat mengukur level kognitif taksonomi Bloom pada tingkat...",
        options: ["A. Mengingat (C1)", "B. Memahami (C2)", "C. Menerapkan (C3)", "D. Menganalisis (C4) dan Mengevaluasi (C5)"],
        answer: "D. Menganalisis (C4) dan Mengevaluasi (C5)",
        explanation: "Membandingkan (analisis) dan menilai kelayakan (evaluasi) adalah tingkatan kognitif yang tinggi (HOTS)."
    },
    {
        question: "4. Dalam Kurikulum Merdeka, guru memberikan kebebasan kepada kelompok siswa untuk memilih bahasa pemrograman (Python, Java, atau C#) yang akan digunakan dalam proyek pengembangan *game* berbasis teks. Prinsip pembelajaran yang diterapkan guru adalah...",
        options: ["A. Scaffolding", "B. Diferensiasi Proses", "C. Assesment as Learning", "D. Pembelajaran Terpusat pada Guru"],
        answer: "B. Diferensiasi Proses",
        explanation: "Diferensiasi proses memberikan pilihan kepada siswa tentang bagaimana mereka menyelesaikan tugas/membuat produk."
    },
    {
        question: "5. Ketika siswa PPLG kesulitan memahami konsep *inheritance* dalam OOP, guru menggunakan analogi silsilah keluarga atau cetak biru mobil untuk menjelaskan *parent* dan *child class*. Pendekatan ini disebut...",
        options: ["A. Inductive Reasoning", "B. Deductive Reasoning", "C. Analogi Konseptual", "D. Case-Based Learning"],
        answer: "C. Analogi Konseptual",
        explanation: "Analogi konseptual menggunakan konsep yang sudah dikenal siswa (silsilah keluarga) untuk menjelaskan konsep teknis yang abstrak (OOP Inheritance)."
    },
    {
        question: "6. Penilaian yang bertujuan untuk mengukur kemampuan siswa dalam merefleksikan proses *coding* mereka, mengidentifikasi kesalahan sendiri, dan menentukan langkah perbaikan adalah...",
        options: ["A. Penilaian Sumatif", "B. Penilaian Antar Teman", "C. Penilaian Diri (Self-Assessment)", "D. Penilaian Kinerja"],
        answer: "C. Penilaian Diri (Self-Assessment)",
        explanation: "Penilaian diri meningkatkan metakognisi dan refleksi, penting dalam proses *debugging* dan perbaikan perangkat lunak."
    },
    {
        question: "7. Seorang siswa PPLG menunjukkan prestasi luar biasa dalam *debugging* dan *logic programming*, tetapi kesulitan berkolaborasi. Intervensi yang paling tepat dilakukan guru adalah...",
        options: ["A. Memberikan tugas individu yang lebih kompleks.", "B. Menugaskan siswa tersebut sebagai *lead programmer* yang harus memimpin *code review* (*peer teaching*).", "C. Mengurangi beban tugas *coding* dan meminta dia fokus presentasi.", "D. Mengeluarkan siswa dari kelompok dan bekerja sendiri."],
        answer: "B. Menugaskan siswa tersebut sebagai *lead programmer* yang harus memimpin *code review* (*peer teaching*).",
        explanation: "Ini memaksa siswa menggunakan keahliannya sambil mengembangkan *soft skill* kolaborasi dan komunikasi."
    },
    {
        question: "8. *Driving Question* (Pertanyaan Pendorong) dalam PjBL harus memiliki karakteristik sebagai berikut, **kecuali**...",
        options: ["A. Terbuka dan multidimensi.", "B. Menantang dan mendorong penyelidikan.", "C. Relevan dengan dunia nyata.", "D. Dapat dijawab dengan satu kalimat benar."],
        answer: "D. Dapat dijawab dengan satu kalimat benar.",
        explanation: "Pertanyaan pendorong harus terbuka dan mendorong eksplorasi (bukan pertanyaan tertutup)."
    },
    {
        question: "9. Guru memberikan skenario: 'Siswa harus merancang *UI/UX* untuk aplikasi *e-commerce* yang harus ramah bagi pengguna lansia.' Pertanyaan ini paling menguji level kognitif...",
        options: ["A. Mengingat (C1)", "B. Memahami (C2)", "C. Menerapkan (C3)", "D. Mencipta (C6)"],
        answer: "D. Mencipta (C6)",
        explanation: "Merancang (merumuskan solusi baru berdasarkan batasan tertentu) adalah tingkat tertinggi dalam taksonomi Bloom (C6)."
    },
    {
        question: "10. Prinsip utama dalam merancang soal berbasis HOTS untuk PPLG adalah...",
        options: ["A. Menanyakan definisi istilah teknis yang sulit.", "B. Menyajikan skenario baru yang memerlukan analisis dan sintesis solusi *coding* atau desain.", "C. Meminta siswa menghafal urutan sintaks pemrograman.", "D. Menyalin soal dari buku panduan *software* (Blender/Unity)."],
        answer: "B. Menyajikan skenario baru yang memerlukan analisis dan sintesis solusi *coding* atau desain.",
        explanation: "HOTS memerlukan penerapan pengetahuan ke situasi baru, bukan sekadar mengingat atau menghafal."
    },
    {
        question: "11. Tujuan utama guru melakukan **Refleksi** di akhir pembelajaran (*exit ticket* atau jurnal belajar) adalah untuk...",
        options: ["A. Memberikan nilai sumatif akhir.", "B. Mendapatkan umpan balik tentang efektivitas metode dan materi ajar.", "C. Menguji daya ingat siswa.", "D. Menghukum siswa yang tidak fokus."],
        answer: "B. Mendapatkan umpan balik tentang efektivitas metode dan materi ajar.",
        explanation: "Refleksi membantu guru mengevaluasi proses pembelajaran dan menyesuaikan metode di pertemuan berikutnya."
    },
    {
        question: "12. Metode yang paling efektif untuk mengajarkan *troubleshooting* dan *debugging* adalah...",
        options: ["A. Ceramah tentang teori *error handling*.", "B. Memberikan daftar lengkap *error message* dan solusinya.", "C. Memberikan *bug* yang disengaja dalam kode dan meminta siswa menemukannya secara mandiri atau berpasangan (*Pair Debugging*).", "D. Menyuruh siswa menghafal dokumentasi *API*."],
        answer: "C. Memberikan *bug* yang disengaja dalam kode dan meminta siswa menemukannya secara mandiri atau berpasangan (*Pair Debugging*).",
        explanation: "Pendekatan berbasis masalah ini melatih keterampilan analisis dan sistematis siswa dalam *debugging* nyata."
    },
    {
        question: "13. Pemanfaatan *role-playing* dalam pembelajaran PPLG dapat dilakukan dengan menugaskan siswa memerankan peran sebagai...",
        options: ["A. Product Owner, Programmer, dan Quality Assurance (QA).", "B. Guru, Kepala Sekolah, dan Wali Kelas.", "C. Pembaca, Pendengar, dan Penulis.", "D. Database, Server, dan Client."],
        answer: "A. Product Owner, Programmer, dan Quality Assurance (QA).",
        explanation: "Peran-peran ini mensimulasikan tim pengembangan perangkat lunak dalam metodologi *Agile*."
    },
    {
        question: "14. Guru PPLG merancang penilaian proyek di mana **bobot penilaian pada proses kolaborasi tim** lebih tinggi daripada penilaian pada hasil akhir produk. Keputusan ini didasarkan pada pentingnya kompetensi...",
        options: ["A. Computational Thinking", "B. Conceptual Knowledge", "C. Soft Skills (Collaboration)", "D. Hard Skills (Coding)"],
        answer: "C. Soft Skills (Collaboration)",
        explanation: "Kolaborasi dan kerja tim adalah *soft skills* yang sangat penting dalam industri PPLG."
    },
    {
        question: "15. *Scaffolding* dalam pembelajaran *coding* dapat diwujudkan dengan...",
        options: ["A. Memberikan tugas langsung yang sangat kompleks.", "B. Menggunakan bahasa pemrograman yang paling sulit.", "C. Memulai dengan *template* kode yang sudah berisi kerangka dasar, kemudian secara bertahap mengurangi *template* tersebut.", "D. Memberi batas waktu yang sangat ketat."],
        answer: "C. Memulai dengan *template* kode yang sudah berisi kerangka dasar, kemudian secara bertahap mengurangi *template* tersebut.",
        explanation: "*Scaffolding* adalah pemberian bantuan yang dikurangi secara bertahap seiring kemampuan siswa meningkat."
    },

    // --- II. KELOMPOK TIK & TPACK (Soal 16-30) ---
    {
        question: "16. Penggunaan *platform* daring seperti **Git/GitHub** dalam PjBL pengembangan perangkat lunak paling utama mendukung dimensi **TPACK**...",
        options: ["A. Content Knowledge (CK)", "B. Pedagogical Knowledge (PK)", "C. Technological Pedagogical Knowledge (TPK)", "D. Technological Content Knowledge (TCK)"],
        answer: "C. Technological Pedagogical Knowledge (TPK)",
        explanation: "TPK adalah integrasi teknologi (Git) untuk mendukung strategi pengajaran (kolaborasi, version control)."
    },
    {
        question: "17. Guru PPLG menggunakan **simulasi *game engine*** untuk mendemonstrasikan fisika tabrakan (*Collision Physics*) secara visual. Alat simulasi ini mendukung prinsip *Computational Thinking* (CT) yaitu...",
        options: ["A. Dekomposisi", "B. Abstraksi", "C. Visualisasi dan Simulasi", "D. Pengenalan Pola"],
        answer: "C. Visualisasi dan Simulasi",
        explanation: "Simulasi memungkinkan pemahaman kompleks melalui representasi visual dan interaktif."
    },
    {
        question: "18. Dalam pengajaran *Data Science* sederhana, guru meminta siswa menggunakan **Python Pandas** untuk membersihkan (*cleaning*) data mentah sebelum dianalisis. Keterampilan yang dikembangkan siswa terkait dengan literasi data adalah...",
        options: ["A. Data Visualization", "B. Data Interpretation", "C. Data Manipulation/Preprocessing", "D. Data Storage"],
        answer: "C. Data Manipulation/Preprocessing",
        explanation: "Membersihkan dan memformat data mentah adalah tahap krusial dalam manipulasi data sebelum dianalisis."
    },
    {
        question: "19. Ketika seorang guru menggunakan *virtual reality* (VR) untuk mensimulasikan lingkungan 3D yang akan dibuat siswa, guru tersebut memanfaatkan TIK untuk...",
        options: ["A. Simplification", "B. Evaluation", "C. Immersion and Engagement", "D. Memorization"],
        answer: "C. Immersion and Engagement",
        explanation: "Teknologi VR meningkatkan keterlibatan dan memberikan pengalaman yang mendalam (*immersion*)."
    },
    {
        question: "20. Salah satu tantangan utama dalam mengintegrasikan TIK (misalnya *cloud services* atau *software* berbayar) secara mendalam di sekolah kejuruan adalah...",
        options: ["A. Rendahnya minat siswa.", "B. Keterbatasan infrastruktur, lisensi perangkat lunak, dan *bandwidth* internet.", "C. Kurangnya materi di buku teks.", "D. Guru terlalu mahir dalam TIK."],
        answer: "B. Keterbatasan infrastruktur, lisensi perangkat lunak, dan *bandwidth* internet.",
        explanation: "Keterbatasan sumber daya dan infrastruktur adalah hambatan paling umum dalam integrasi TIK yang canggih di sekolah."
    },
    {
        question: "21. Kemampuan guru PPLG untuk memilih *software* (misalnya: Figma untuk *UI/UX*, VS Code untuk *coding*, Blender untuk 3D) yang paling tepat untuk setiap fase proyek PjBL mencerminkan kompetensi...",
        options: ["A. Content Knowledge (CK)", "B. Pedagogical Knowledge (PK)", "C. Technological Content Knowledge (TCK)", "D. Technological Pedagogical Knowledge (TPK)"],
        answer: "C. Technological Content Knowledge (TCK)",
        explanation: "TCK adalah pengetahuan tentang bagaimana teknologi (software) dapat digunakan untuk merepresentasikan dan mengajarkan konten (materi PPLG)."
    },
    {
        question: "22. Dalam konteks *Computational Thinking* (CT), proses mengidentifikasi kesamaan dan tren pada beberapa kasus kode yang berbeda untuk menciptakan solusi yang lebih umum disebut...",
        options: ["A. Dekomposisi", "B. Abstraksi", "C. Pengenalan Pola", "D. Algoritma"],
        answer: "C. Pengenalan Pola",
        explanation: "Pengenalan pola memungkinkan kita menggunakan solusi yang sudah ada untuk masalah yang serupa, salah satu pilar CT."
    },
    {
        question: "23. Penggunaan *Learning Management System* (LMS) seperti Google Classroom atau Moodle dalam pembelajaran PPLG paling efektif untuk mendukung kegiatan...",
        options: ["A. Distribusi materi, pengumpulan tugas, dan komunikasi terstruktur.", "B. Menggantikan peran guru sepenuhnya.", "C. Mengurangi porsi praktik *coding*.", "D. Hanya untuk penilaian sumatif."],
        answer: "A. Distribusi materi, pengumpulan tugas, dan komunikasi terstruktur.",
        explanation: "LMS adalah alat manajemen yang menyederhanakan administrasi dan alur kerja pembelajaran."
    },
    {
        question: "24. Ketika guru meminta siswa membuat dokumentasi *API* (*Application Programming Interface*) secara terperinci untuk *project web service* mereka, guru sedang melatih aspek...",
        options: ["A. Kemampuan Teknis (Hard Skill) dan Komunikasi Teknis.", "B. Keterampilan *networking* tingkat tinggi.", "C. Software testing.", "D. Database administration."],
        answer: "A. Kemampuan Teknis (Hard Skill) dan Komunikasi Teknis.",
        explanation: "Dokumentasi adalah keterampilan teknis dan komunikasi yang wajib dikuasai developer."
    },
    {
        question: "25. *Digital Citizenship* dalam pembelajaran PPLG diwujudkan ketika siswa...",
        options: ["A. Selalu menggunakan *software* yang mahal dan berlisensi.", "B. Memahami dan menghormati hak cipta (*copyright*) aset digital (gambar, musik, model 3D) yang digunakan dalam proyek mereka.", "C. Mampu membuat *code* paling panjang.", "D. Selalu menggunakan media sosial untuk promosi."],
        answer: "B. Memahami dan menghormati hak cipta (*copyright*) aset digital (gambar, musik, model 3D) yang digunakan dalam proyek mereka.",
        explanation: "*Digital Citizenship* mencakup etika penggunaan sumber daya digital, termasuk kepatuhan terhadap hak cipta."
    },
    {
        question: "26. Dalam *Computational Thinking* (CT), proses memecah masalah kompleks menjadi bagian-bagian kecil yang lebih mudah dikelola disebut...",
        options: ["A. Dekomposisi", "B. Pengenalan Pola", "C. Abstraksi", "D. Algoritma"],
        answer: "A. Dekomposisi",
        explanation: "Dekomposisi adalah pilar CT untuk memecah masalah besar menjadi modul atau sub-masalah yang lebih kecil."
    },
    {
        question: "27. Salah satu manfaat utama penggunaan *live code editor* dan *compiler online* dalam pembelajaran *coding* adalah...",
        options: ["A. Menggantikan peran buku teks.", "B. Memberikan *feedback* instan (*real-time*) tentang *syntax error* kepada siswa.", "C. Mengurangi jumlah tugas proyek.", "D. Meningkatkan keamanan jaringan."],
        answer: "B. Memberikan *feedback* instan (*real-time*) tentang *syntax error* kepada siswa.",
        explanation: "*Feedback* instan mempercepat siklus belajar-perbaikan (*debugging*) siswa."
    },
    {
        question: "28. Aspek **TPACK** yang paling dominan saat guru memilih video tutorial *YouTube* yang paling jelas untuk menjelaskan langkah-langkah *coding* tertentu adalah...",
        options: ["A. Technological Knowledge (TK)", "B. Content Knowledge (CK)", "C. Pedagogical Knowledge (PK)", "D. Technological Content Knowledge (TCK)"],
        answer: "D. Technological Content Knowledge (TCK)",
        explanation: "Guru memilih teknologi (video) yang paling cocok untuk menyampaikan konten spesifik (*coding*)."
    },
    {
        question: "29. Untuk memastikan bahwa *feedback* dari guru mudah dipahami siswa dalam *coding project*, guru sebaiknya menggunakan...",
        options: ["A. Istilah teknis yang sangat tinggi.", "B. Komentar *inline* langsung di baris kode yang bermasalah.", "C. Pesan suara panjang tanpa teks.", "D. Bahasa *formal* yang kaku."],
        answer: "B. Komentar *inline* langsung di baris kode yang bermasalah.",
        explanation: "Feedback yang kontekstual dan langsung di lokasi kesalahan jauh lebih efektif daripada komentar umum."
    },
    {
        question: "30. Dalam konteks *Agile Development* (yang sering diajarkan di PPLG), penggunaan *Trello* atau *Jira* untuk melacak tugas dan kemajuan proyek mendukung keterampilan...",
        options: ["A. Debugging", "B. User Interface Design", "C. Manajemen Proyek dan Kolaborasi", "D. Database Design"],
        answer: "C. Manajemen Proyek dan Kolaborasi",
        explanation: "Alat-alat tersebut adalah *tool* manajemen proyek yang vital dalam metodologi *Agile*."
    },

    // --- III. KELOMPOK PROFESIONAL PPLG (Soal 31-60) ---
    // A. Pemrograman & Logika (Soal 31-38)
    {
        question: "31. Konsep dalam OOP yang memungkinkan objek yang berbeda merespons panggilan *method* yang sama dengan implementasi yang berbeda adalah...",
        options: ["A. Encapsulation", "B. Inheritance", "C. Polymorphism", "D. Abstraction"],
        answer: "C. Polymorphism",
        explanation: "Polymorphism (banyak bentuk) memungkinkan fungsi yang sama bertindak berbeda pada tipe data yang berbeda."
    },
    {
        question: "32. Dalam pengembangan *web*, teknologi yang bertanggung jawab untuk mendefinisikan struktur dan konten halaman adalah...",
        options: ["A. HTML (HyperText Markup Language)", "B. CSS (Cascading Style Sheets)", "C. JavaScript", "D. PHP"],
        answer: "A. HTML (HyperText Markup Language)",
        explanation: "HTML menyediakan kerangka struktural dan konten (teks, gambar) pada halaman web."
    },
    {
        question: "33. Struktur kontrol dalam pemrograman yang paling efisien digunakan untuk menjalankan blok kode berulang kali, di mana jumlah perulangan sudah diketahui sejak awal adalah...",
        options: ["A. while loop", "B. do-while loop", "C. for loop", "D. if-else statement"],
        answer: "C. for loop",
        explanation: "For loop ideal digunakan untuk jumlah iterasi yang telah ditentukan."
    },
    {
        question: "34. Dalam *web development*, peran utama dari bahasa pemrograman **JavaScript** adalah...",
        options: ["A. Mengelola basis data *server*.", "B. Menambahkan interaktivitas dan perilaku dinamis pada sisi *client*.", "C. Membuat struktur halaman *web*.", "D. Mengatur *style* dan tata letak."],
        answer: "B. Menambahkan interaktivitas dan perilaku dinamis pada sisi *client*.",
        explanation: "JavaScript mengatur perilaku dan interaksi di sisi *browser* (klien)."
    },
    {
        question: "35. Salah satu *best practice* dalam *coding* adalah membagi kode menjadi bagian-bagian yang lebih kecil, mandiri, dan dapat digunakan kembali. Praktik ini dikenal sebagai...",
        options: ["A. Hard Coding", "B. Code Obfuscation", "C. Modularity", "D. Refactoring"],
        answer: "C. Modularity",
        explanation: "Modularity meningkatkan keterbacaan, pemeliharaan, dan penggunaan ulang kode."
    },
    {
        question: "36. *SQL Injection* adalah salah satu ancaman keamanan *web* yang memanfaatkan...",
        options: ["A. Kelemahan pada *CSS*.", "B. Input pengguna yang tidak divalidasi dan digunakan langsung dalam kueri basis data.", "C. Kelebihan *bandwidth server*.", "D. Bug pada *web browser*."],
        answer: "B. Input pengguna yang tidak divalidasi dan digunakan langsung dalam kueri basis data.",
        explanation: "SQL Injection terjadi ketika *input* jahat dieksekusi sebagai perintah SQL di server."
    },
    {
        question: "37. Dalam *version control system* (Git), perintah yang digunakan untuk mengambil perubahan terbaru dari *repository* pusat ke lokal *branch* saat ini adalah...",
        options: ["A. git commit", "B. git push", "C. git pull", "D. git branch"],
        answer: "C. git pull",
        explanation: "`git pull` adalah gabungan dari `git fetch` (mengambil) dan `git merge` (menggabungkan) dari *remote repository*."
    },
    {
        question: "38. *Clean Code* menekankan pentingnya nama variabel dan fungsi yang *ekspresif*. Praktik ini bertujuan untuk meningkatkan...",
        options: ["A. Kecepatan eksekusi kode.", "B. Penggunaan memori.", "C. Keterbacaan (Readability) dan Maintainability", "D. Keamanan basis data."],
        answer: "C. Keterbacaan (Readability) dan Maintainability",
        explanation: "Kode yang bersih dan mudah dibaca lebih mudah dipelihara dan di-*debug*."
    },
    // B. Basis Data (Soal 39-42)
    {
        question: "39. Kunci utama (*Primary Key*) dalam tabel basis data berfungsi untuk...",
        options: ["A. Menghubungkan ke tabel lain.", "B. Mengidentifikasi setiap baris (*record*) secara unik.", "C. Menyimpan data gambar.", "D. Mempercepat *query* seluruh tabel."],
        answer: "B. Mengidentifikasi setiap baris (*record*) secara unik.",
        explanation: "Primary Key menjamin keunikan data pada setiap baris tabel."
    },
    {
        question: "40. Relasi **Many-to-Many** antara dua tabel (misalnya, Siswa dan Mata Pelajaran) dalam basis data relasional diimplementasikan dengan menambahkan...",
        options: ["A. View", "B. Trigger", "C. Tabel Penghubung (*Junction Table*)", "D. Primary Key ganda"],
        answer: "C. Tabel Penghubung (*Junction Table*)",
        explanation: "Relasi Many-to-Many dipecah menjadi dua relasi One-to-Many melalui tabel perantara (*junction table*)."
    },
    {
        question: "41. Perintah SQL yang digunakan untuk mengambil data dari satu atau lebih tabel adalah...",
        options: ["A. INSERT", "B. UPDATE", "C. DELETE", "D. SELECT"],
        answer: "D. SELECT",
        explanation: "SELECT digunakan untuk mengambil (membaca) data dari basis data."
    },
    {
        question: "42. *Database Normalization* (Normalisasi Basis Data) bertujuan untuk...",
        options: ["A. Mempercepat *query* di semua kondisi.", "B. Mengurangi jumlah tabel.", "C. Mengurangi redundansi data dan meningkatkan integritas data.", "D. Mengubah tipe basis data dari SQL ke NoSQL."],
        answer: "C. Mengurangi redundansi data dan meningkatkan integritas data.",
        explanation: "Tujuan utama normalisasi adalah menghilangkan pengulangan data dan memastikan data konsisten (integritas)."
    },
    // C. Pengembangan Gim & Multimedia (Soal 43-52)
    {
        question: "43. Komponen inti dalam *game engine* (misalnya Unity/Unreal) yang bertanggung jawab untuk mendeteksi interaksi fisik antara objek (tabrakan, gravitasi, gesekan) adalah...",
        options: ["A. Rendering Engine", "B. Audio Engine", "C. AI System", "D. Physics Engine"],
        answer: "D. Physics Engine",
        explanation: "Physics Engine adalah subsistem yang mengelola semua perhitungan fisik dalam lingkungan *game*."
    },
    {
        question: "44. **Normal Mapping** dalam *game development* digunakan untuk...",
        options: ["A. Mengatur *frame rate* agar stabil.", "B. Mensimulasikan detail permukaan (*surface detail*) pada model *low-poly* tanpa menambah geometri.", "C. Menghitung jalur optimal AI.", "D. Mengaitkan model 3D dengan *armature*."],
        answer: "B. Mensimulasikan detail permukaan (*surface detail*) pada model *low-poly* tanpa menambah geometri.",
        explanation: "Normal mapping membuat model terlihat detail tanpa membutuhkan banyak poligon (hemat kinerja)."
    },
    {
        question: "45. Dalam *game design*, **Game Loop** adalah...",
        options: ["A. Kesalahan *coding* yang menyebabkan *game* *crash*.", "B. Siklus pemrosesan berkelanjutan (Input, Update, Render) yang menjalankan *game* saat dimainkan.", "C. Perulangan *loading screen*.", "D. Proses *debug* otomatis."],
        answer: "B. Siklus pemrosesan berkelanjutan (Input, Update, Render) yang menjalankan *game* saat dimainkan.",
        explanation: "Game Loop adalah jantung dari setiap *game*, yang terus berjalan dan memperbarui status *game*."
    },
    {
        question: "46. Desain yang memastikan bahwa tidak ada satu strategi pun yang sepenuhnya dominan, dan pemain harus beradaptasi dengan perubahan taktis lawan, dikenal sebagai prinsip...",
        options: ["A. High Engagement", "B. Fun Factor", "C. Monotonicity", "D. Game Balancing"],
        answer: "D. Game Balancing",
        explanation: "Game Balancing adalah kunci untuk membuat *game* adil dan menarik, mencegah strategi tunggal mendominasi."
    },
    {
        question: "47. Proses di mana model 3D dipecah menjadi permukaan 2D agar dapat diterapkan tekstur disebut...",
        options: ["A. Rigging", "B. Baking", "C. UV Unwrapping", "D. Retopology"],
        answer: "C. UV Unwrapping",
        explanation: "UV Unwrapping memproyeksikan koordinat 3D ke ruang 2D (UV map) tempat tekstur 2D diletakkan."
    },
    {
        question: "48. Fungsi utama dari **Raycasting** dalam *game* 3D adalah...",
        options: ["A. Menerapkan *shading* visual.", "B. Menghitung jalur *pathfinding*.", "C. Mendeteksi objek mana yang ditunjuk atau dilihat oleh kamera/karakter.", "D. Mengatur volume audio."],
        answer: "C. Mendeteksi objek mana yang ditunjuk atau dilihat oleh kamera/karakter.",
        explanation: "Raycasting (melempar sinar) digunakan untuk interaksi presisi, seperti penembakan atau deteksi pandangan."
    },
    {
        question: "49. **Alpha Channel** pada tekstur *game* berfungsi untuk...",
        options: ["A. Mengatur warna merah.", "B. Mengontrol transparansi atau opasitas bagian dari tekstur.", "C. Menerapkan *normal map*.", "D. Menyimpan data fisik."],
        answer: "B. Mengontrol transparansi atau opasitas bagian dari tekstur.",
        explanation: "Alpha Channel adalah saluran keempat (selain RGB) yang menyimpan data transparansi."
    },
    {
        question: "50. Ketika seorang *developer* PPLG membuat objek (*Enemy*, *Power-Up*, dll.) yang dapat digunakan berkali-kali di berbagai *scene* dalam *game engine*, mereka menggunakan konsep...",
        options: ["A. Scriptable Object", "B. Singleton", "C. Prefab (atau Blueprint di Unreal)", "D. Scene Manager"],
        answer: "C. Prefab (atau Blueprint di Unreal)",
        explanation: "Prefab adalah *template* objek yang dapat digunakan berulang kali dan diwariskan dalam *game engine*."
    },
    {
        question: "51. Fungsi utama dari **Time-Based Media** (Audio/Video Editing) adalah...",
        options: ["A. Data Encryption.", "B. Menciptakan narasi dan emosi yang berjalan seiring waktu.", "C. Debugging *script*.", "D. Network Traffic Control."],
        answer: "B. Menciptakan narasi dan emosi yang berjalan seiring waktu.",
        explanation: "Media berbasis waktu (video, audio) adalah tentang bagaimana elemen berubah seiring waktu untuk menyampaikan pesan atau cerita."
    },
    {
        question: "52. Teknik *Level of Detail* (LOD) dalam *game rendering* bertujuan untuk...",
        options: ["A. Meningkatkan kualitas grafis di semua jarak.", "B. Mengganti model 3D dengan versi yang lebih sederhana ketika jaraknya jauh dari kamera.", "C. Hanya merender objek di dalam *frustum* kamera.", "D. Menerapkan *shadow mapping*."],
        answer: "B. Mengganti model 3D dengan versi yang lebih sederhana ketika jaraknya jauh dari kamera.",
        explanation: "LOD mengurangi beban rendering dengan menyederhanakan objek yang jauh dari pandangan pemain (optimasi kinerja)."
    },
    // D. Networking & Cybersecurity (Soal 53-60)
    {
        question: "53. Protokol yang paling umum digunakan untuk transfer halaman *web* dari *server* ke *client* adalah...",
        options: ["A. FTP", "B. SMTP", "C. POP3", "D. HTTP/HTTPS"],
        answer: "D. HTTP/HTTPS",
        explanation: "Hypertext Transfer Protocol (Secure) adalah dasar komunikasi *web* untuk mentransfer dokumen HTML."
    },
    {
        question: "54. Dalam *web security*, **Cross-Site Scripting (XSS)** terjadi ketika penyerang...",
        options: ["A. Mencuri data dari basis data.", "B. Menyuntikkan *script* berbahaya (*client-side*) ke halaman *web* yang dilihat pengguna lain.", "C. Mengakses *server* melalui *FTP*.", "D. Membanjiri *server* dengan *traffic* palsu (DDoS)."],
        answer: "B. Menyuntikkan *script* berbahaya (*client-side*) ke halaman *web* yang dilihat pengguna lain.",
        explanation: "XSS memungkinkan penyerang menjalankan *script* di *browser* pengguna lain, seringkali untuk mencuri *cookie* atau sesi."
    },
    {
        question: "55. Perbedaan utama antara IPv4 dan IPv6 adalah...",
        options: ["A. IPv4 lebih cepat.", "B. IPv6 menggunakan alamat 128-bit, menawarkan jumlah alamat yang jauh lebih besar.", "C. IPv4 lebih aman.", "D. IPv6 hanya digunakan di *server*."],
        answer: "B. IPv6 menggunakan alamat 128-bit, menawarkan jumlah alamat yang jauh lebih besar.",
        explanation: "IPv6 beralamat 128-bit (vs 32-bit pada IPv4) untuk mengatasi keterbatasan jumlah alamat."
    },
    {
        question: "56. *Firewall* pada jaringan komputer berfungsi sebagai...",
        options: ["A. Pemadam kebakaran otomatis.", "B. Penyaring *traffic* jaringan untuk memblokir akses yang tidak sah.", "C. Penyedia alamat IP dinamis.", "D. Alat untuk mempercepat koneksi."],
        answer: "B. Penyaring *traffic* jaringan untuk memblokir akses yang tidak sah.",
        explanation: "Firewall bertindak sebagai gerbang keamanan yang mengontrol *traffic* masuk dan keluar berdasarkan aturan tertentu."
    },
    {
        question: "57. Layanan yang bertanggung jawab untuk menerjemahkan nama *domain* *web* (misalnya: www.google.com) menjadi alamat IP adalah...",
        options: ["A. DHCP", "B. FTP", "C. HTTP", "D. DNS (Domain Name System)"],
        answer: "D. DNS (Domain Name System)",
        explanation: "DNS adalah buku telepon internet yang menerjemahkan nama yang mudah diingat menjadi alamat IP numerik."
    },
    {
        question: "58. Teknik *Cybersecurity* yang paling efektif untuk melindungi *password* pengguna yang tersimpan di basis data dari kebocoran adalah...",
        options: ["A. Menyimpan *password* sebagai teks biasa.", "B. Mengenkripsi *password* menggunakan AES.", "C. Menggunakan *hashing* satu arah (*one-way hashing*) dengan *salt*.", "D. Meminta pengguna mengganti *password* setiap hari."],
        answer: "C. Menggunakan *hashing* satu arah (*one-way hashing*) dengan *salt*.",
        explanation: "Hashing dengan *salt* adalah standar industri untuk menyimpan *password* karena tidak dapat dibalikkan menjadi *password* asli (*one-way*)."
    },
    {
        question: "59. Dalam arsitektur *Client-Server*, peran utama *Client* adalah...",
        options: ["A. Menyediakan *database*.", "B. Melakukan semua proses *business logic*.", "C. Meminta sumber daya (*request*) dan menampilkan informasi kepada pengguna.", "D. Mengelola keamanan jaringan."],
        answer: "C. Meminta sumber daya (*request*) dan menampilkan informasi kepada pengguna.",
        explanation: "Klien (browser, aplikasi) bertugas meminta data dari *server* dan menampilkan antarmuka."
    },
    {
        question: "60. Konsep **Latency** dalam *networking* dan *game* *online* mengacu pada...",
        options: ["A. Kecepatan *download* data.", "B. Waktu tunda (*delay*) yang dibutuhkan paket data untuk bergerak dari sumber ke tujuan.", "C. Volume data yang ditransfer.", "D. Jumlah *error* dalam transmisi."],
        answer: "B. Waktu tunda (*delay*) yang dibutuhkan paket data untuk bergerak dari sumber ke tujuan.",
        explanation: "Latency adalah waktu tunda, sering diukur dalam milidetik (ms), yang mempengaruhi responsivitas *game* *online*."
    },

    // --- IV. KELOMPOK SOSIAL, KEPRIBADIAN, DAN ETIKA (Soal 61-65) ---
    {
        question: "61. Guru PPLG menerapkan pengembangan diri melalui kebiasaan refleksi. Contoh penerapan ini adalah...",
        options: ["A. Mengikuti seminar *coding* terbaru setiap bulan.", "B. Menulis jurnal tentang keberhasilan dan kegagalan metode mengajar yang diterapkan pada proyek terakhir.", "C. Selalu memberikan nilai tertinggi pada siswa berprestasi.", "D. Menghafal kode etik guru."],
        answer: "B. Menulis jurnal tentang keberhasilan dan kegagalan metode mengajar yang diterapkan pada proyek terakhir.",
        explanation: "Refleksi diri yang sistematis (seperti jurnal) adalah cara paling efektif untuk pengembangan profesional berkelanjutan."
    },
    {
        question: "62. Kompetensi Sosial adalah kemampuan guru untuk berkolaborasi untuk peningkatan pembelajaran. Contoh terbaik penerapan ini adalah...",
        options: ["A. Guru meminta siswa berkolaborasi dalam proyek *coding*.", "B. Guru PPLG berkolaborasi dengan guru Bahasa Indonesia untuk mengembangkan modul *Game Design Document* yang efektif.", "C. Guru mengajar sendirian tanpa bantuan.", "D. Guru menolak berbagi *software* dengan guru lain."],
        answer: "B. Guru PPLG berkolaborasi dengan guru Bahasa Indonesia untuk mengembangkan modul *Game Design Document* yang efektif.",
        explanation: "Kolaborasi antar guru mata pelajaran (*inter-disciplinary*) adalah indikator kuat kompetensi sosial untuk peningkatan pembelajaran."
    },
    {
        question: "63. Guru PPLG mendapati rekannya sering datang terlambat dan tidak menyiapkan RPP dengan baik. Tindakan guru yang mencerminkan kompetensi Kepribadian dan Sosial sesuai kode etik adalah...",
        options: ["A. Mengingatkan rekan secara pribadi, empatik, dan menawarkan bantuan untuk manajemen waktu dan perencanaan.", "B. Langsung melaporkan ke Kepala Sekolah.", "C. Mendiamkan karena itu bukan urusannya.", "D. Menghina rekan di depan siswa."],
        answer: "A. Mengingatkan rekan secara pribadi, empatik, dan menawarkan bantuan untuk manajemen waktu dan perencanaan.",
        explanation: "Tindakan ini menunjukkan kepedulian profesional (sosial) dan integritas diri (kepribadian) tanpa melanggar etika."
    },
    {
        question: "64. Dalam konteks *Digital Citizenship* dan etika profesional PPLG, keputusan etis seorang guru ketika menemukan siswa menggunakan aset *game* berhak cipta (*copyrighted*) dalam proyek sekolah adalah...",
        options: ["A. Mengizinkan karena hanya untuk tujuan sekolah.", "B. Meminta siswa mengganti aset tersebut dengan aset *open source* atau buatan sendiri, sambil menjelaskan dampak hukum *copyright*.", "C. Mengabaikan karena *game* itu tidak akan dirilis.", "D. Memberikan nilai 0."],
        answer: "B. Meminta siswa mengganti aset tersebut dengan aset *open source* atau buatan sendiri, sambil menjelaskan dampak hukum *copyright*.",
        explanation: "Guru harus mengajarkan etika penggunaan properti intelektual dan menyediakan alternatif yang sah."
    },
    {
        question: "65. Menurut indikator Filosofi Pendidikan, guru mampu merancang strategi pembelajaran yang melibatkan orang tua dan masyarakat. Contoh aplikasinya adalah...",
        options: ["A. Membuat soal ujian yang sulit.", "B. Mengadakan *Showcase* Proyek PPLG yang melibatkan orang tua sebagai *tester* (*playtester*) dan *feedback giver*.", "C. Mengajarkan sejarah teknologi informasi.", "D. Hanya menggunakan *platform* internal sekolah."],
        answer: "B. Mengadakan *Showcase* Proyek PPLG yang melibatkan orang tua sebagai *tester* (*playtester*) dan *feedback giver*.",
        explanation: "Melibatkan masyarakat/orang tua dalam proses evaluasi produk adalah praktik nyata dari strategi pembelajaran berbasis komunitas."
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0; // Skor dihitung saat user memilih jawaban
let answeredStatus = new Array(questions.length).fill(false); // Status apakah soal sudah dijawab

// Get DOM Elements
const quizContainer = document.getElementById('quiz-container');
const essayContainer = document.getElementById('essay-container');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultsDiv = document.getElementById('results');
const scoreText = document.getElementById('score-text');
const retryButton = document.getElementById('retry-button');
const reviewContainer = document.getElementById('review-container');

// Tambahkan elemen untuk feedback instan
const feedbackDiv = document.createElement('div');
feedbackDiv.id = 'feedback-instant';
quizContainer.appendChild(feedbackDiv);


// --- LOGIKA UTAMA: MENAMPILKAN SOAL & FEEDBACK INSTAN ---

function loadQuestion(index) {
    if (index < 0 || index > questions.length) return;

    currentQuestionIndex = index;
    
    // Reset feedback div
    feedbackDiv.innerHTML = '';
    feedbackDiv.classList.add('hidden');

    // Tampilkan PG atau Esai
    if (index < questions.length) {
        // Mode PG
        quizContainer.classList.remove('hidden');
        essayContainer.classList.add('hidden');
        
        const q = questions[index];
        questionCounter.textContent = `Soal ${index + 1} dari ${questions.length} (Pilihan Ganda)`;
        questionText.textContent = q.question;
        optionsContainer.innerHTML = '';
        
        q.options.forEach((option, i) => {
            const id = `q${index}-opt${i}`;
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `
                <input type="radio" name="q${index}" id="${id}" value="${option}" ${userAnswers[index] === option ? 'checked' : ''}>
                ${option}
            `;
            
            const radioInput = label.querySelector('input');
            
            // Listener untuk menyimpan jawaban dan memberikan feedback instan
            radioInput.addEventListener('change', (e) => {
                handleAnswer(index, e.target.value);
                // Matikan semua radio button setelah dijawab
                document.querySelectorAll(`#options-container input[type="radio"]`).forEach(input => {
                    input.disabled = true;
                });
            });

            // Jika soal sudah dijawab, tampilkan feedback-nya kembali
            if (answeredStatus[index]) {
                radioInput.disabled = true;
                if (userAnswers[index] === option) {
                    label.style.backgroundColor = (userAnswers[index] === q.answer) ? '#d4edda' : '#f8d7da'; // Hijau/Merah untuk jawaban user
                } else if (option === q.answer) {
                    label.style.backgroundColor = '#d4edda'; // Hijau untuk jawaban benar
                }
                displayInstantFeedback(q, userAnswers[index]);
            }

            optionsContainer.appendChild(label);
        });

    } else {
        // Mode Esai (setelah soal PG terakhir)
        quizContainer.classList.add('hidden');
        essayContainer.classList.remove('hidden');
        questionCounter.textContent = `Soal Subjektif (Esai)`;
    }

    // Update Tombol Navigasi
    prevButton.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === questions.length) {
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    } else {
        nextButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}


function handleAnswer(index, selectedAnswer) {
    const q = questions[index];
    
    // 1. Simpan Jawaban & Status
    userAnswers[index] = selectedAnswer;
    
    // Hanya hitung skor sekali per soal
    if (!answeredStatus[index]) {
        if (selectedAnswer === q.answer) {
            score++;
        }
        answeredStatus[index] = true;
    }

    // 2. Beri Feedback Instan di tampilan
    displayInstantFeedback(q, selectedAnswer);
    
    // 3. Highlight Jawaban di Opsi
    const options = document.querySelectorAll(`#options-container input[type="radio"]`);
    options.forEach(input => {
        const label = input.closest('label');
        if (input.value === q.answer) {
            label.style.backgroundColor = '#d4edda'; // Hijau untuk yang benar
            label.style.border = '2px solid #28a745';
        } else if (input.value === selectedAnswer) {
            if (selectedAnswer !== q.answer) {
                label.style.backgroundColor = '#f8d7da'; // Merah untuk jawaban salah user
                label.style.border = '2px solid #dc3545';
            }
        }
    });
}

function displayInstantFeedback(q, selectedAnswer) {
    const isCorrect = selectedAnswer === q.answer;
    
    feedbackDiv.classList.remove('hidden');
    feedbackDiv.style.padding = '15px';
    feedbackDiv.style.borderRadius = '8px';
    feedbackDiv.style.marginTop = '20px';
    feedbackDiv.style.borderLeft = '5px solid';
    
    if (isCorrect) {
        feedbackDiv.style.backgroundColor = '#e2f0e6';
        feedbackDiv.style.borderColor = '#28a745';
        feedbackDiv.innerHTML = `
            <p style="color:#155724; font-weight:bold;">✅ Jawaban Anda BENAR!</p>
            <p style="font-size:0.95em;">Penjelasan: ${q.explanation}</p>
        `;
    } else {
        feedbackDiv.style.backgroundColor = '#fddbdb';
        feedbackDiv.style.borderColor = '#dc3545';
        feedbackDiv.innerHTML = `
            <p style="color:#721c24; font-weight:bold;">❌ Jawaban Anda SALAH.</p>
            <p>Jawaban yang Benar: <strong style="color:#28a745;">${q.answer}</strong></p>
            <p style="font-size:0.95em;">Penjelasan: ${q.explanation}</p>
        `;
    }
}


// Fungsi untuk menghitung skor total (di akhir)
function calculateScore() {
    return score;
}

function showResults() {
    const finalScore = calculateScore();
    const percentage = (finalScore / questions.length) * 100;

    quizContainer.classList.add('hidden');
    essayContainer.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    document.querySelector('.controls').classList.add('hidden');

    scoreText.textContent = `Skor Pilihan Ganda Anda: ${finalScore} dari ${questions.length} (${percentage.toFixed(2)}%)`;
    
    // Di mode ini, review container tetap kosong karena review sudah per soal.
    reviewContainer.innerHTML = '<h3>Review Jawaban Pilihan Ganda:</h3><p>Review detail telah diberikan per soal secara instan saat Anda menjawab.</p>';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    answeredStatus.fill(false);
    score = 0;
    document.getElementById('essay-answer').value = '';
    
    resultsDiv.classList.add('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    
    loadQuestion(0);
}


// --- EVENT LISTENERS ---

prevButton.addEventListener('click', () => {
    loadQuestion(currentQuestionIndex - 1);
});

nextButton.addEventListener('click', () => {
    loadQuestion(currentQuestionIndex + 1);
});

submitButton.addEventListener('click', showResults);

retryButton.addEventListener('click', resetQuiz);

// Inisialisasi Kuis
loadQuestion(0);