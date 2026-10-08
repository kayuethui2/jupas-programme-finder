// ========== Language Data ==========
const i18n = {
  en: {
    logo: "CityU EE Guide",
    nav_home: "Home",
    nav_curriculum: "Curriculum",
    nav_career: "Career",
    nav_internships: "Internships",
    nav_compare: "Compare",
    nav_about: "About",
    home_title: "CityU Electronic & Electrical Engineering",
    home_subtitle: "Quick guide for current students and JUPAS candidates",
    card_title: "BEng Electronic and Electrical Engineering",
    label_career: "Career Outcomes",
    card_career: "High employment in electronics, telecom, power systems, semiconductors & AI-related roles. Accredited by HKIE.",
    label_difficulty: "Course Difficulty",
    card_difficulty: "Medium–High (strong foundation in maths, physics, circuits and programming required)",
    label_internship: "Internship Opportunities",
    card_internship: "Professional Internship Program (EE4085/86/87) — 4 to 12 months with industry partners",
    btn_official: "Official Curriculum",
    btn_courses: "View Course List",
    home_note: "This guide is mainly designed for <strong>CityU EE students</strong>. JUPAS candidates can also use it to quickly understand the programme.",
    curriculum_title: "Curriculum Structure",
    curriculum_desc: "BEng Electronic and Electrical Engineering – Core Courses & Electives",
    core_title: "Core Courses (69 Credit Units)",
    elective_title: "Elective Courses (at least 5 courses = 15 Credit Units)",
    notes_title: "Notes:",
    note1: "# EE2066 is counted as “College-specified GE Course” for 4-year degree students, but counted as “Major Requirement” for Advanced Standing I/II students.",
    note2: "★ Students having completed EE4085 Internship: Engineering Practice (3CUs) can use it to fulfill EE2066 and EE4090.",
    note3: "Students having completed FS4007 Start-up Technology Entrepreneur Programme I (3CUs) can use it to fulfill EE4090.",
    note4: "Students having completed EE4086 Internship: Advanced Topics (3CUs) can use it to fulfill one elective.",
    note5: "△ Students having completed EE4087 Internship: Industrial Project (6CUs) can use it to fulfill EE4080 Project.",
    career_title: "Career Outcomes",
    career_desc: "What kind of jobs can graduates get after studying CityU Electronic & Electrical Engineering?",
    career_left_title: "CityU Electronic & Electrical Engineering",
    common_paths: "Common career paths:",
    job1: "Electronics / Hardware Engineer",
    job2: "Telecommunications Engineer",
    job3: "Power & Energy Systems Engineer",
    job4: "Semiconductor / IC Design Engineer",
    job5: "AI & Signal Processing related roles",
    job6: "Technical roles in finance & banking",
    career_note: "Graduates work in both technical industries and the financial sector. The programme is accredited by the Hong Kong Institution of Engineers (HKIE).",
    graduate_title: "Example Graduate Roles",
    role1: "Software Engineer", comp1: "Tech / FinTech companies",
    role2: "Hardware Engineer", comp2: "Electronics & semiconductor firms",
    role3: "Telecommunications Engineer", comp3: "Mobile network & telecom operators",
    role4: "Power Systems Engineer", comp4: "Power companies & energy sector",
    role5: "IC / Semiconductor Engineer", comp5: "Chip design & manufacturing",
    role6: "AI / Signal Processing Engineer", comp6: "AI, robotics & data companies",
    pie_title: "Approximate Employment Sectors",
    pie1: "Electronics & Tech (35%)",
    pie2: "Telecom & Communications (25%)",
    pie3: "Power & Energy (15%)",
    pie4: "Finance & Banking (15%)",
    pie5: "Others / Further Study (10%)",
    intern_title: "Internship Opportunities",
    intern_desc: "Real internship programmes offered by CityU Electrical Engineering",
    intern_left_title: "CityU EE Professional Internship Program",
    intern_intro: "The Department offers structured internship courses:",
    ee4085: "Internship: Engineering Practice (4 months)",
    ee4086: "Internship: Advanced Topics",
    ee4087: "Internship: Industrial Project (up to 12 months)",
    intern_note: "These internships can replace some required courses.",
    partner_title: "Example Partner Companies",
    compare_title: "Compare Programmes",
    compare_desc: "Select two programmes to compare side by side",
    select1: "Select first programme",
    select2: "Select second programme",
    btn_compare: "Compare",
    about_title: "About This Guide",
    about_p1: "This guide is mainly designed for <strong>CityU EE students</strong> to quickly understand their programme structure, career paths and internship opportunities.",
    about_p2: "JUPAS candidates can also use it as a simple reference.",
    footer: "CityU EE Programme Guide · For students and JUPAS candidates"
  },
  zh: {
    logo: "城大電機工程指南",
    nav_home: "主頁",
    nav_curriculum: "課程結構",
    nav_career: "就業前景",
    nav_internships: "實習機會",
    nav_compare: "比較課程",
    nav_about: "關於",
    home_title: "城大電子及電機工程學",
    home_subtitle: "為現有學生及JUPAS申請人而設的快速指南",
    card_title: "工學士（電子及電機工程學）",
    label_career: "就業前景",
    card_career: "在電子、電訊、電力系統、半導體及人工智能相關職位有高就業率。獲香港工程師學會（HKIE）認可。",
    label_difficulty: "課程難度",
    card_difficulty: "中至高（需要良好的數學、物理、電路及程式基礎）",
    label_internship: "實習機會",
    card_internship: "專業實習計劃（EE4085/86/87）— 為期4至12個月，與業界合作",
    btn_official: "官方課程",
    btn_courses: "查看課程列表",
    home_note: "本指南主要為<strong>城大電機工程學生</strong>而設，JUPAS申請人亦可使用以快速了解課程。",
    curriculum_title: "課程結構",
    curriculum_desc: "工學士（電子及電機工程學）– 核心課程及選修課程",
    core_title: "核心課程（69學分）",
    elective_title: "選修課程（至少5科 = 15學分）",
    notes_title: "備註：",
    note1: "# EE2066 對四年制學生計為「學院指定通識課程」，對高年級入學學生則計為「主修要求」。",
    note2: "★ 完成 EE4085 實習：工程實踐（3學分）可用作滿足 EE2066 及 EE4090。",
    note3: "完成 FS4007 初創科技企業家計劃 I（3學分）可用作滿足 EE4090。",
    note4: "完成 EE4086 實習：電機工程進階專題（3學分）可用作滿足一科選修。",
    note5: "△ 完成 EE4087 實習：工業項目（6學分）可用作滿足 EE4080 專題。",
    career_title: "就業前景",
    career_desc: "城大電子及電機工程畢業生可以從事什麼工作？",
    career_left_title: "城大電子及電機工程學",
    common_paths: "常見就業方向：",
    job1: "電子／硬件工程師",
    job2: "電訊工程師",
    job3: "電力及能源系統工程師",
    job4: "半導體／IC設計工程師",
    job5: "人工智能及信號處理相關職位",
    job6: "金融及銀行技術職位",
    career_note: "畢業生可在技術行業及金融界工作。課程獲香港工程師學會（HKIE）認可。",
    graduate_title: "畢業生職位例子",
    role1: "軟件工程師", comp1: "科技／金融科技公司",
    role2: "硬件工程師", comp2: "電子及半導體公司",
    role3: "電訊工程師", comp3: "流動網絡及電訊營運商",
    role4: "電力系統工程師", comp4: "電力公司及能源界",
    role5: "IC／半導體工程師", comp5: "芯片設計及製造",
    role6: "人工智能／信號處理工程師", comp6: "人工智能、機械人及數據公司",
    pie_title: "大約就業界別分佈",
    pie1: "電子及科技（35%）",
    pie2: "電訊及通訊（25%）",
    pie3: "電力及能源（15%）",
    pie4: "金融及銀行（15%）",
    pie5: "其他／繼續升學（10%）",
    intern_title: "實習機會",
    intern_desc: "城大電機工程提供的真實實習計劃",
    intern_left_title: "城大電機專業實習計劃",
    intern_intro: "學系提供以下結構化實習課程：",
    ee4085: "實習：工程實踐（4個月）",
    ee4086: "實習：進階專題",
    ee4087: "實習：工業項目（最長12個月）",
    intern_note: "這些實習可用作取代部分必修課程。",
    partner_title: "合作公司例子",
    compare_title: "比較課程",
    compare_desc: "選擇兩個課程進行並排比較",
    select1: "選擇第一個課程",
    select2: "選擇第二個課程",
    btn_compare: "比較",
    about_title: "關於本指南",
    about_p1: "本指南主要為<strong>城大電機工程學生</strong>而設，幫助快速了解課程結構、就業前景及實習機會。",
    about_p2: "JUPAS申請人亦可作為簡單參考。",
    footer: "城大電機工程指南 · 為學生及JUPAS申請人而設"
  }
};

// ========== Course Data with Descriptions ==========
const coreCourses = [
  { code: "EE1001", title: "Foundations of Digital Techniques", titleZh: "數碼技術基礎", desc: "Introduces number systems, Boolean algebra, logic gates and basic digital circuits.", descZh: "介紹數字系統、布爾代數、邏輯閘及基本數碼電路。", credit: 3 },
  { code: "EE1002", title: "Principles of Electrical Engineering", titleZh: "電機工程原理", desc: "Covers fundamental electrical concepts: voltage, current, resistance, power and basic circuit laws.", descZh: "涵蓋基本電學概念：電壓、電流、電阻、功率及基本電路定律。", credit: 3 },
  { code: "EE1004", title: "Foundations of Information Systems and Data Analysis", titleZh: "資訊系統及數據分析基礎", desc: "Introduces basic data handling, information systems and simple data analysis techniques.", descZh: "介紹基本數據處理、資訊系統及簡單數據分析技術。", credit: 3 },
  { code: "GE1354", title: "Introduction to Electronic Design", titleZh: "電子設計導論", desc: "Hands-on introduction to electronic design principles and simple circuit building.", descZh: "透過實踐介紹電子設計原理及簡單電路製作。", credit: 3 },
  { code: "EE2000", title: "Logic Circuit Design", titleZh: "邏輯電路設計", desc: "Design of combinational and sequential logic circuits using modern digital techniques.", descZh: "使用現代數碼技術設計組合及時序邏輯電路。", credit: 3 },
  { code: "EE2004", title: "Microcomputer Systems", titleZh: "微電腦系統", desc: "Fundamentals of microcomputer architecture, assembly language and interfacing.", descZh: "微電腦架構、組合語言及介面的基礎知識。", credit: 3 },
  { code: "EE2005", title: "Electronic Devices and Circuits", titleZh: "電子器件及電路", desc: "Study of diodes, transistors and basic analogue electronic circuits.", descZh: "研習二極體、電晶體及基本模擬電子電路。", credit: 3 },
  { code: "EE2066", title: "Engineers in Society", titleZh: "工程師與社會", desc: "Explores the role of engineers in society, ethics, sustainability and professional practice.", descZh: "探討工程師在社會中的角色、倫理、可持續發展及專業實踐。", credit: 3 },
  { code: "EE2104", title: "Introduction to Electromagnetics", titleZh: "電磁學導論", desc: "Basic concepts of electric and magnetic fields and their applications in engineering.", descZh: "電場及磁場的基本概念及其在工程上的應用。", credit: 3 },
  { code: "EE2108", title: "Computational Engineering Analysis", titleZh: "計算工程分析", desc: "Uses computational tools to analyse engineering problems and data.", descZh: "使用計算工具分析工程問題及數據。", credit: 3 },
  { code: "EE3008", title: "Principles of Communications", titleZh: "通訊原理", desc: "Fundamentals of analogue and digital communication systems.", descZh: "模擬及數碼通訊系統的基本原理。", credit: 3 },
  { code: "EE3070", title: "Design Project", titleZh: "設計專題", desc: "Team-based design project solving real engineering problems.", descZh: "以小組形式進行設計專題，解決實際工程問題。", credit: 3 },
  { code: "EE3109", title: "Applied Electromagnetics", titleZh: "應用電磁學", desc: "Advanced applications of electromagnetic theory in engineering systems.", descZh: "電磁理論在工程系統中的進階應用。", credit: 3 },
  { code: "EE3114", title: "Systems & Control", titleZh: "系統與控制", desc: "Modelling and control of dynamic systems, feedback and stability.", descZh: "動態系統的建模與控制、反饋及穩定性。", credit: 3 },
  { code: "EE3115", title: "Applied Optoelectronic Devices", titleZh: "應用光電子器件", desc: "Principles and applications of optoelectronic devices (LEDs, lasers, photodetectors).", descZh: "光電子器件（LED、激光、光探測器）的原理及應用。", credit: 3 },
  { code: "EE3121", title: "Differential Equations for Electrical Engineering", titleZh: "電機工程微分方程", desc: "Mathematical methods for solving differential equations in EE problems.", descZh: "解決電機工程問題中微分方程的數學方法。", credit: 3 },
  { code: "EE3122", title: "Analogue Circuit Fundamentals", titleZh: "模擬電路基礎", desc: "Design and analysis of analogue circuits including amplifiers and filters.", descZh: "模擬電路（包括放大器及濾波器）的設計與分析。", credit: 3 },
  { code: "EE3123", title: "Introduction to Electric Power Systems", titleZh: "電力系統導論", desc: "Basics of power generation, transmission, distribution and power system components.", descZh: "發電、輸電、配電及電力系統元件的基礎知識。", credit: 3 },
  { code: "EE3124", title: "Introduction to Electric Machines and Drives", titleZh: "電機及驅動導論", desc: "Principles of electric machines (motors & generators) and drive systems.", descZh: "電機（馬達及發電機）及驅動系統的原理。", credit: 3 },
  { code: "EE3210", title: "Signals and Systems", titleZh: "信號與系統", desc: "Analysis of continuous and discrete-time signals and linear systems.", descZh: "連續及離散時間信號與線性系統的分析。", credit: 3 },
  { code: "EE4080", title: "Project", titleZh: "專題研究", desc: "Final Year Project – independent research or design work under supervision.", descZh: "畢業專題 – 在指導下進行獨立研究或設計工作。", credit: 6 },
  { code: "EE4090", title: "Engineering Training", titleZh: "工程訓練", desc: "Practical engineering training (can be fulfilled by internship).", descZh: "實務工程訓練（可由實習取代）。", credit: 0 },
  { code: "CS2311", title: "Computer Programming", titleZh: "電腦程式設計", desc: "Programming fundamentals for engineering applications.", descZh: "工程應用的程式設計基礎。", credit: 3 },
  { code: "MA2001", title: "Multi-variable Calculus and Linear Algebra", titleZh: "多變量微積分及線性代數", desc: "Advanced mathematics needed for engineering analysis.", descZh: "工程分析所需的高等數學。", credit: 3 }
];

const electiveCourses = [
  { code: "EE2331", title: "Data Structures and Algorithms", titleZh: "數據結構與算法", desc: "Common data structures and algorithms used in engineering software.", descZh: "工程軟件常用的數據結構與算法。", credit: 3 },
  { code: "EE2800", title: "Semiconductor Physics for Engineers", titleZh: "工程師半導體物理", desc: "Physics of semiconductor materials and devices.", descZh: "半導體材料及器件的物理學。", credit: 3 },
  { code: "EE3009", title: "Data Communications and Networking", titleZh: "數據通訊與網絡", desc: "Principles of computer networks and data communication protocols.", descZh: "電腦網絡及數據通訊協議的原理。", credit: 3 },
  { code: "EE3206", title: "Object-Oriented Programming and Applications", titleZh: "物件導向程式設計及應用", desc: "Object-oriented programming concepts and practical applications.", descZh: "物件導向程式設計概念及實際應用。", credit: 3 },
  { code: "EE3220", title: "System-on-Chip Design", titleZh: "系統單晶片設計", desc: "Design of complex digital systems on a single chip (SoC).", descZh: "在單一晶片上設計複雜數碼系統（SoC）。", credit: 3 },
  { code: "EE4015 / EE5410", title: "Digital Signal Processing", titleZh: "數碼信號處理", desc: "Techniques for processing digital signals (filtering, FFT, etc.).", descZh: "處理數碼信號的技術（濾波、FFT等）。", credit: 3 },
  { code: "EE4016 / EE5438", title: "Applications of AI with Deep Learning", titleZh: "深度學習人工智能應用", desc: "Practical applications of deep learning in engineering problems.", descZh: "深度學習在工程問題上的實際應用。", credit: 3 },
  { code: "EE4017", title: "Internet Finance", titleZh: "互聯網金融", desc: "Technology and systems behind fintech and internet finance.", descZh: "金融科技及互聯網金融背後的技術與系統。", credit: 3 },
  { code: "EE4035", title: "Optical Fibre Communications", titleZh: "光纖通訊", desc: "Principles of optical fibre communication systems.", descZh: "光纖通訊系統的原理。", credit: 3 },
  { code: "EE4036", title: "Wireless Communications", titleZh: "無線通訊", desc: "Modern wireless communication technologies and systems.", descZh: "現代無線通訊技術及系統。", credit: 3 },
  { code: "EE4045", title: "Computer Controlled Systems", titleZh: "電腦控制系統", desc: "Design of computer-based control systems.", descZh: "基於電腦的控制系統設計。", credit: 3 },
  { code: "EE4101", title: "Sustainable Energy Systems", titleZh: "可持續能源系統", desc: "Renewable energy systems and sustainable power technologies.", descZh: "可再生能源系統及可持續電力技術。", credit: 3 },
  { code: "EE4105", title: "Principles of Lasers", titleZh: "激光原理", desc: "Working principles and applications of lasers.", descZh: "激光的工作原理及應用。", credit: 3 },
  { code: "EE4107", title: "5G Circuit Design", titleZh: "5G電路設計", desc: "Circuit design techniques for 5G wireless systems.", descZh: "5G無線系統的電路設計技術。", credit: 3 },
  { code: "EE4108", title: "Antennas for Wireless Communications and Sensing", titleZh: "無線通訊及感測天線", desc: "Antenna design for wireless communication and sensing applications.", descZh: "無線通訊及感測應用的天線設計。", credit: 3 },
  { code: "EE4115", title: "Audio-Visual Engineering", titleZh: "影音工程", desc: "Engineering principles of audio and video systems.", descZh: "音頻及視頻系統的工程原理。", credit: 3 },
  { code: "EE4142", title: "Introduction to Integrated Photonics", titleZh: "集成光子學導論", desc: "Basics of photonic integrated circuits.", descZh: "光子集成電路的基礎知識。", credit: 3 },
  { code: "EE4146", title: "Data Engineering and Machine Learning", titleZh: "數據工程及機器學習", desc: "Data processing pipelines and machine learning applications.", descZh: "數據處理流程及機器學習應用。", credit: 3 },
  { code: "EE4147", title: "Grid-Connected Power Converters", titleZh: "併網電力轉換器", desc: "Power electronic converters used in grid-connected systems.", descZh: "用於併網系統的電力電子轉換器。", credit: 3 },
  { code: "EE4148", title: "Advanced Power System", titleZh: "進階電力系統", desc: "Advanced topics in electric power systems analysis and operation.", descZh: "電力系統分析及運作的進階主題。", credit: 3 },
  { code: "EE4149", title: "Power Electronics", titleZh: "電力電子學", desc: "Design and control of power electronic converters.", descZh: "電力電子轉換器的設計與控制。", credit: 3 },
  { code: "EE4221", title: "Cloud Computing Systems", titleZh: "雲端運算系統", desc: "Architecture and technologies of cloud computing systems.", descZh: "雲端運算系統的架構及技術。", credit: 3 },
  { code: "EE4316", title: "Mobile Data Networks", titleZh: "流動數據網絡", desc: "Technologies and protocols used in mobile data networks.", descZh: "流動數據網絡使用的技術及協議。", credit: 3 }
];

// ========== Render Courses ==========
function renderCourses(lang) {
  const coreContainer = document.getElementById("coreCourses");
  const electiveContainer = document.getElementById("electiveCourses");

  if (!coreContainer || !electiveContainer) return;

  coreContainer.innerHTML = coreCourses.map(c => `
    <div class="course-item">
      <div class="course-top">
        <span class="course-code">${c.code}</span>
        <span class="course-title">${lang === 'zh' ? c.titleZh : c.title}</span>
        <span class="course-credit">${c.credit} ${lang === 'zh' ? '學分' : 'credits'}</span>
      </div>
      <div class="course-desc">${lang === 'zh' ? c.descZh : c.desc}</div>
    </div>
  `).join("");

  electiveContainer.innerHTML = electiveCourses.map(c => `
    <div class="course-item">
      <div class="course-top">
        <span class="course-code">${c.code}</span>
        <span class="course-title">${lang === 'zh' ? c.titleZh : c.title}</span>
        <span class="course-credit">${c.credit} ${lang === 'zh' ? '學分' : 'credits'}</span>
      </div>
      <div class="course-desc">${lang === 'zh' ? c.descZh : c.desc}</div>
    </div>
  `).join("");
}

// ========== Language Switch ==========
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? '繁體' : 'EN';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  renderCourses(lang);
}

// ========== Navigation ==========
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");

    const page = this.getAttribute("data-page");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    const targetPage = document.getElementById("page-" + page);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  });
});

// ========== Language Button ==========
const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
  });
}

// ========== Init ==========
renderCourses('en');