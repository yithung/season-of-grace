/*
  ================================================================
  SEASON OF GRACE — EDIT CONTENT HERE
  ================================================================
  This is the main file to edit when real content arrives.

  SCHOOL KEYS used below:
    "agape"    = Agapé Music & Ballet School
    "pink"     = Pink Ballet Studio
    "victoria" = Victoria Dance Arts

  PHOTO PATH EXAMPLE:
    photo: "assets/dance-01.jpg"

  Leave photo as "" to keep the watercolor placeholder.
*/

window.SITE_CONTENT = {
  schools: {
    agape: {
      name: "Agapé Music & Ballet School",
      logo: "assets/logo/agape.png" // Example: "assets/logo-agape.png"
    },
    pink: {
      name: "Pink Ballet Studio",
      logo: "assets/logo/pink.png" // Example: "assets/logo-pink.png"
    },
    victoria: {
      name: "Victoria Dance Arts",
      logo: "assets/logo/victoria.png" // Example: "assets/logo-victoria.png"
    }
  },

  directors: [
    {
      name: "Ms Tan Hooi Theng",
      school: "agape",
      photo: "assets/director/agape.jpeg" // Example: "assets/director-agape.jpg"
    },
    {
      name: "Director Name",
      school: "pink",
      photo: ""
    },
    {
      name: "Director Name",
      school: "victoria",
      photo: ""
    }
  ],

  directorMessage: {
    en: `Dear Ladies and Gentlemen,
It is our great pleasure to welcome you to our Season of Grace Concert.
Today is a celebration of our students’ talent, dedication, and passion for the performing arts. We are incredibly proud to see our students come together to share their hard work, creativity, and love for dance on stage.
Season of Grace is made even more meaningful through the wonderful collaboration between Agapé Music & Ballet Studio, Victoria Dance Arts, and Pink Ballet Studio. It is a joy to bring our students, teachers, and dance communities together for this special occasion, united by our shared passion for nurturing young dancers and inspiring them through the arts.
Our heartfelt thanks go to all our teachers, choreographers, staff, parents, and students for your dedication, encouragement, and support. Every performance you see today represents countless hours of practice, teamwork and perseverance..
To all our students, step onto the stage with confidence, joy, and grace. Cherish every moment, support one another, and above all, let your passion shine.
Thank you to everyone who has joined us for this special celebration. May this Season of Grace fill the stage with beautiful performances, create wonderful memories, and leave us all with a truly meaningful occasion to remember.
`,
    zh: `尊敬的女士们、先生们：
我们非常荣幸地欢迎各位莅临 《Season of Grace》舞蹈汇演。
今天，我们共同庆祝学生们在表演艺术中展现出的才华、努力与热忱。看到来自三所学校的学生齐聚舞台，分享他们一路以来的付出、创意以及对舞蹈的热爱，我们深感欣慰与骄傲。
《Season of Grace》 因 Agapé Music & Ballet Studio、Victoria Dance Arts 与 Pink Ballet Studio 三校之间的美好合作而更具意义。能够在这个特别的日子里，让我们的学生、老师与舞蹈社群相聚一堂，以共同的理念培育年轻舞者，并通过艺术启发他们成长，是一件令人喜悦的事。
我们衷心感谢所有老师、编舞老师、工作人员、家长与学生一路以来的付出、鼓励与支持。今天舞台上的每一支舞蹈，都凝聚了无数个小时的练习、团队合作、坚持，以及对舞蹈艺术的热爱。
亲爱的同学们，愿你们带着自信、喜悦与优雅踏上舞台。珍惜每一个当下，彼此支持，更重要的是，让你们对舞蹈的热爱在舞台上尽情绽放。
感谢每一位今天与我们共度这场特别庆典的来宾。愿 《Season of Grace》 为大家带来精彩动人的演出、美好的回忆，以及一段意义非凡、值得珍藏的时光。
`
  },

  choreographers: [
    { name: "James Kan", school: "agape", photo: "assets/choreo/james-kan.png" },
    { name: "Justine", school: "agape", photo: "assets/choreo/justine.png" },
    { name: "Mio Lee", school: "agape", photo: "assets/choreo/mio-lee.png" },
    { name: "Natalie Hon", school: "agape", photo: "assets/choreo/natalie-hon.png" },
    { name: "Celine Ko", school: "agape", photo: "assets/choreo/celine-ko.png" },
    { name: "Shin Rou", school: "agape", photo: "assets/choreo/shin-rou.png" },
    { name: "Choreographer Seven", school: "agape", photo: "" },
    { name: "Choreographer Eight", school: "pink", photo: "" }
  ],

  /*
    PROGRAMME
    - Change the school for any dance by editing school: "agape" / "pink" / "victoria".
    - Put each landscape group photo in `photo`.
    - Add as many dancer names as needed inside `dancers`.
  */
  dances: [
    { number: 1,  titleEn: "When I was Young",       titleZh: "小时光",   school: "victoria",    photo: "", dancers: ["Alynna Ang Sze Kay", "Chiew Tze Xuan", "Heng Xin Hui", "Hiew Yi Hui", "Lai Zi Xuan", "Lee Jing Eun", "Lim Ean Xin", "Lim Jing Yi", "Sia Yun Faye"] },
    { number: 2,  titleEn: "Pirates",       titleZh: "小海盗",   school: "agape",     photo: "", dancers: ["Abigail Hoe Yan Mei", "Angelyn Toh Zhi Xin", "Choe Joy Ern", "Erin Hiew Shuet Peng", "Fong Sze Kei", "Loo Yi Ler", "Ng Ka Hey", "Pang Yu Sin", "Seline Wong Mei Yan", "Wang Shiwen", "Yang Zoey"] },
    { number: 3,  titleEn: "Island of Joy",     titleZh: "欢乐小岛",   school: "agape", photo: "", dancers: ["Erin Hiew Shuet Peng", "Fong Sze Kei", "Libby Tan Ying Er", "Pang Yu Sin", "Seline Wong Mei Yan", "Soo Yu Qin"] },
    { number: 4,  titleEn: "Cheeky Chicks",      titleZh: "小鸡小鸡咯咯咯",   school: "victoria",    photo: "", dancers: ["Emma Peh Tze Xuan", "Natalie Lim Xin En", "Nur Amanda Husna Low Binti Muhammad Daniel Low", "Phoebe Lim Hui Yi", "Rainie Hew Yu Tian", "Sofea Medina Binti Feroz Hezrin", "Tan Jo Phiel", "Verra Tan Yiing Yenn"] },
    { number: 5,  titleEn: "Mushroom Waltz",      titleZh: "蘑菇华尔兹",   school: "pink",     photo: "", dancers: ["Bella Cheong Xin Yue", "Chan Zi Qing", "Emilia Gan Yun Xi", "Hannah Lee Xin Yue", "Jamie Lim Zi Xin", "Janelle Choo Zi Ning", "Nga Vee Thong", "Yap You Jie"] },
    { number: 6,  titleEn: "Spring",       titleZh: "春风轻舞",   school: "victoria", photo: "", dancers: ["Bella Chen Xi", "Chiew Tze Xuan", "Jovie Lau Sze Yu", "Lee Hui Yee", "Puterii Nuur Adawiyyah Binti Saddam Hussin", "Puterii Nuur Lattisha Binti Saddam Hussin", "Sarah Chew Ler Thong", "Sia Yun Faye", "Sophia Lim Xin Rou", "Tiara M Sayyid", "Vehana A/P Sivaprakash"] },
    { number: 7,  titleEn: "Happy Feet",     titleZh: "快乐舞步",   school: "agape",    photo: "", dancers: ["Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Erin Hiew Shuet Peng", "Lee Zheqi", "Nur Adresia Binti Alif Firdaus", "Seline Wong Mei Yan"] },
    { number: 8,  titleEn: "Enchanted Grace",     titleZh: "幻境之雅",   school: "pink",     photo: "", dancers: ["Abby Wong Yu Yan", "Abby Yap Sook Jan", "Daphne Lew En Rui", "Esther Fum Ern Ya", "Hailey Lee Yu Han", "Harper Chong Hooi Xuan", "Low Ke Xin", "Toh Dylis", "Ysanne Ang Yu Xuan", "Zicien Lim"] },
    { number: 9,  titleEn: "Halloween",      titleZh: "万圣之夜",   school: "agape", photo: "", dancers: ["Abigail Hoe Yan Mei", "Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Elyse Phang Yu Ly", "Lai Xin Ru", "Lee Jia Rong", "Loo Yi Ler", "Nur Adresia Binti Alif Firdaus", "Wang Shiwen", "Yang Zoey"] },
    { number: 10, titleEn: "Ukrainian Festivity",       titleZh: "乌克兰庆典",   school: "pink",    photo: "", dancers: ["Aeryn Wong Hao Thung", "Charisse Chin Qian Yee", "Hailey Chang Yu Tung", "Lai Yi Wen", "Low Ke Xin", "Olivia Chong Chyi Lam", "Tan Yun Han", "Zianne Lim"] },
    { number: 11, titleEn: "Bamboo Shadows",    titleZh: "竹影", school: "victoria",     photo: "", dancers: ["Chan Wey Xin", "Fatima Zahra Binti Abdullah", "Gan Khai Xuan", "Gan Khai Ying", "Lai En Xin", "Lee Zi Lin", "Wong Ying Yue"] },
    { number: 12, titleEn: "Whispers of the Woods",    titleZh: "森语", school: "pink", photo: "", dancers: ["Aeryn Wong Hao Thung", "Audrey Wong Exyn", "Charisse Chin Qian Yee", "Hailey Chang Yu Tung", "Lai Yi Wen", "Siew Kai Huey", "Tan Yun Han", "Zoe Voo Kay Iyn"] },
    { number: 13, titleEn: "The Forest Show",  titleZh: "森 · 宴", school: "agape",    photo: "", dancers: ["Belle Fun Le Xin", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Lee Jia Rong", "Lee Ka Yin", "Lynn Fong Jing Er", "Nurul Awatif Binti Muhamad Sazali", "Sek Kah Yi", "Vanessa Chew Yun Ning"] },
    { number: 14, titleEn: "Ikan Kekek",  titleZh: "畅游", school: "victoria",     photo: "", dancers: ["Chan Wey Ern", "Eunice Yong Hui Teng", "Giovanna Choong", "Jamie Lau Sze Yen", "Koo Xinyu", "Lim Yee Xin", "Lim Yee Xuan", "Quek Qin En", "Rachel Koh Tze Ying", "Shavika A/P Ganeish", "Wong Jing Tong"] },
    { number: 15, titleEn: "Copycat",   titleZh: "跟风", school: "victoria", photo: "", dancers: ["Amy Tang", "Chia Ying Qi", "Gan Yi Thung", "Law Sue Ann", "Lee Xinler", "Phang Xi Huey", "Shasmiitaa A/P Pathmanathan", "Tan Le Tien", "Teh Shelley", "Wan Hui Loo", "Yau Li Yin"] },
    { number: 16, titleEn: "Fleur de Printemps",   titleZh: "春绽", school: "pink",    photo: "", dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Kwek Ann Ya", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"] },
    { number: 17, titleEn: "Never Enough", titleZh: "寻序", school: "agape",     photo: "", dancers: ["Chanel Ooi Xuan Rou", "Cheong Xin Yu", "Eabigail Von Chen", "Eva Yong Wan Yee", "Fong Xin Ying", "Hannah Yong Wan Jin", "Lim Wei Xin", "Loi Xin Shi", "Loke Yen Li", "Ng Jing Qian", "Ng Zhi Han", "Poon Ee Ann", "Soo Eevyn", "Suah Yu Shuen", "Tan Kay Yee"] },
    { number: 18, titleEn: "Loop",  titleZh: "循环", school: "pink", photo: "", dancers: ["Ashley Wong Hao Yan", "Chin Yun Fei", "Foo Zhi Ying", "Lim Eunice", "Wong Szi Ern"] },
    { number: 19, titleEn: "Counterbalance",  titleZh: "抗衡", school: "agape",    photo: "assets/dance/counterbalance.png", dancers: ["Eva Yong Wan Yee", "Hannah Yong Wan Jin"] },
    { number: 20, titleEn: "The Little Wonder",    titleZh: "童趣", school: "agape",     photo: "", dancers: ["Belle Fun Le Xin", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheong Xin Yu", "Chew Hao Xuan", "Lai Xin Yee", "Lai Yu Tong", "Lynn Fong Jing Er", "Vanessa Chew Yun Ning"] },
    { number: 21, titleEn: "Bullying",titleZh: "霸凌", school: "victoria", photo: "", dancers: ["Chan Wey Ern", "Eunice Yong Hui Teng", "Giovanna Choong", "Jamie Lau Sze Yen", "Koo Xinyu", "Law Sue Ann", "Lim Yee Xin", "Lim Yee Xuan", "Rachel Koh Tze Ying", "Shavika A/P Ganeish", "Wong Jing Tong"] },
    { number: 22, titleEn: "War & Peace",titleZh: "战争与和平", school: "agape",    photo: "", dancers: ["Belle Fun Le Xin", "Alicia Chin Ying Yi", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheen May Rou", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Loke Yen Li", "Lynn Fong Jing Er", "Ng Zhi Han", "Tan Kay Yee"] },
    { number: 23, titleEn: "Unfold with Grace",titleZh: "日初而做", school: "pink",   photo: "", dancers: ["Lai Xin Yee", "Lim Wei Xin", "Loi Xin Shi", "Pon Zhi Ling", "Poon Ee Ann", "Shanice Cheng Sin Yu", "Soo Eevyn", "Suah Yu Shuen", "Woo Jia Xuan", "Yeh Qian Fay"] },
    { number: 24, titleEn: "Speaking of Truth", titleZh: "需要勇气去面对", school: "pink", photo: "", dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Foo Zhi Ying", "Kwek Ann Ya", "Lim Eunice", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"] },
    { number: 25, titleEn: "Whisper Across", titleZh: "时光低语", school: "agape",   photo: "", dancers: ["Agnes Ng Yue Xin", "Anya Joy Isaacs", "Chong Chen Mii", "Choo Qiao Er", "Elise Tan Qian Tung", "Elyse Phang Yu Ly", "Jocelyn Lim Kai Xin", "Lai Xin Ru", "Lee Jia Yi", "Sophie Tee Wei Jyn", "Tan Ling Huey", "Thulaasi Nithyanandan", "Wong Sze Yhu", "Wong Yh Gwyn"] },
    { number: 26, titleEn: "Longing",  titleZh: "盼", school: "agape",    photo: "", dancers: ["Alicia Chin Ying Yi", "Belle Fun Le Xin", "Cheen May Rou", "Heng Xiang Ting", "Loke Yen Li", "Ng Zhi Han", "Poon Ee Ann", "Tan Kay Yee"] }
  ],

  // Behind-the-scenes staff — retained from the earlier version.
  credits: [
    { role: "Artistic Direction · 艺术总监", name: "Name Placeholder" },
    { role: "Production Manager · 制作经理", name: "Name Placeholder" },
    { role: "Stage Manager · 舞台总监", name: "Name Placeholder" },
    { role: "Assistant Stage Manager · 舞台副总监", name: "Name Placeholder" },
    { role: "Lighting · 灯光", name: "Name Placeholder" },
    { role: "Sound · 音响", name: "Name Placeholder" },
    { role: "Photography · 摄影", name: "Name Placeholder" },
    { role: "Graphic · 平面设计", name: "Name Placeholder" },
    { role: "Website · 网站", name: "Gan Yi Thung & Cherry Phang" },
    { role: "Special Thanks · 特别鸣谢", name: "Name / Organisation" }
  ]
};
