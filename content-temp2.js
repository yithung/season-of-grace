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
      name: "Tan Hooi Theng",
      school: "agape",
      photo: "assets/director/agape.png" // Example: "assets/director-agape.jpg"
    },
    {
      name: "Celine Ko",
      school: "pink",
      photo: "assets/director/pink.png"
    },
    {
      name: "Wong Fook Choon",
      school: "victoria",
      photo: "assets/director/victoria.png"
    }
  ],

  directorMessage: {
    en: `Season of Grace is a celebration of growth, learning, and becoming.

    This year, three academies come together through a shared love for dance and education, bringing different teaching philosophies, cultures, and dance forms onto one stage. Every piece has its own voice and colour, just as every child has their own rhythm of growth.
    
    Some are taking their very first steps. Some are discovering confidence. Others are ready to step onto a bigger stage. Along the way, they gain more than dance skills — they learn perseverance, expression, confidence, and the courage to face new challenges.
    
    There is no single way to grow, and no single way to bloom.
    
    May every step, every smile, and every round of applause become a treasured part of their journey.`,
    zh: `Season of Grace，寓意着成长、学习与绽放的季节。

    这一次，三间学院因对舞蹈与教育的热爱相聚，将不同的教学理念、文化与舞蹈形式带到同一个舞台。每一个作品，都有属于自己的语言与色彩；每一个孩子，也有属于自己的成长节奏。

    有人正在踏出第一步，有人在建立自信，也有人正勇敢走向更大的舞台。一路上，他们收获的不只是舞蹈技巧，更有坚持、表达、自信，以及面对挑战的勇气。

    成长没有唯一的方式，绽放也不只有一种模样。

    愿每一个舞步与掌声，都成为他们成长旅程中珍贵的一刻。`  
  },

  choreographers: [
    { name: "Amy Tang", photo: "assets/choreo/amy.png" },
    { name: "Celine Ko", photo: "assets/choreo/celine.png" },
    { name: "James Kan", photo: "assets/choreo/james.png" },
    { name: "Justine Lu", photo: "assets/choreo/justine.png" },
    { name: "Lim Chia Shian", photo: "assets/choreo/lim.png" },
    { name: "Mio Lee", photo: "assets/choreo/mio.png" },
    { name: "Natalie Hon", photo: "assets/choreo/natalie.png" },
    { name: "Shin Rou", photo: "assets/choreo/shin-rou.png" },
    { name: "Tan Lan Jong", photo: "assets/choreo/tan.png" }, 
    { name: "Ten Hui Qi", photo: "assets/choreo/ten.png" }, 
    { name: "Wong Fook Choon", photo: "assets/choreo/wong.png" }
  ],

  /*
    PROGRAMME
    - Change the school for any dance by editing school: "agape" / "pink" / "victoria".
    - Put each landscape group photo in `photo`.
    - Add as many dancer names as needed inside `dancers`.
  */
  dances: [
    {
      number: 1,
      titleEn: "When I was Young",
      titleZh: "小时光",
      school: "victoria",
      photo: "assets/dance/when-i-was-young.png",
      choreographer: "Tan Lan Jong",
      descriptionEn: "Echoes of childhood",
      descriptionZh: "忆童年",
      dancers: ["Alynna Ang Sze Kay", "Chiew Tze Xuan", "Heng Xin Hui", "Hiew Yi Hui", "Lai Zi Xuan", "Lee Jing Eun", "Lim Ean Xin", "Lim Jing Yi", "Sia Yun Faye"]
    },

    {
      number: 2,
      titleEn: "Pirates",
      titleZh: "小海盗",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Abigail Hoe Yan Mei", "Angelyn Toh Zhi Xin", "Choe Joy Ern", "Erin Hiew Shuet Peng", "Fong Sze Kei", "Loo Yi Ler", "Ng Ka Hey", "Pang Yu Sin", "Seline Wong Mei Yan", "Wang Shiwen", "Yang Zoey"]
    },

    {
      number: 3,
      titleEn: "Island of Joy",
      titleZh: "欢乐小岛",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Erin Hiew Shuet Peng", "Fong Sze Kei", "Libby Tan Ying Er", "Pang Yu Sin", "Seline Wong Mei Yan", "Soo Yu Qin"]
    },

    {
      number: 4,
      titleEn: "Cheeky Chicks",
      titleZh: "小鸡小鸡咯咯咯",
      school: "victoria",
      photo: "assets/dance/chicks.png",
      choreographer: "Amy Tang & Lim Chia Shian",
      descriptionEn: "A taste of farm life",
      descriptionZh: "农家乐",
      dancers: ["Emma Peh Tze Xuan", "Natalie Lim Xin En", "Nur Amanda Husna Low Binti Muhammad Daniel Low", "Phoebe Lim Hui Yi", "Rainie Hew Yu Tian", "Sofea Medina Binti Feroz Hezrin", "Tan Jo Phiel", "Verra Tan Yiing Yenn"]
    },

    {
      number: 5,
      titleEn: "Mushroom Waltz",
      titleZh: "蘑菇华尔兹",
      school: "pink",
      photo: "",
      choreographer: "Shin Rou",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Bella Cheong Xin Yue", "Chan Zi Qing", "Emilia Gan Yun Xi", "Hannah Lee Xin Yue", "Jamie Lim Zi Xin", "Janelle Choo Zi Ning", "Nga Vee Thong", "Yap You Jie"]
    },

    {
      number: 6,
      titleEn: "Spring",
      titleZh: "春风轻舞",
      school: "victoria",
      photo: "assets/dance/spring.png",
      choreographer: "Amy Tang & Ten Hui Qi",
      descriptionEn: "Gentle breeze, shifting leaves, we dance among the bloom",
      descriptionZh: "春风轻拂，舞迎盛开",
      dancers: ["Bella Chen Xi", "Chiew Tze Xuan", "Jovie Lau Sze Yu", "Lee Hui Yee", "Puterii Nuur Adawiyyah Binti Saddam Hussin", "Puterii Nuur Lattisha Binti Saddam Hussin", "Sarah Chew Ler Thong", "Sia Yun Faye", "Sophia Lim Xin Rou", "Tiara M Sayyid", "Vehana A/P Sivaprakash"]
    },

    {
      number: 7,
      titleEn: "Happy Feet",
      titleZh: "快乐舞步",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Erin Hiew Shuet Peng", "Lee Zheqi", "Nur Adresia Binti Alif Firdaus", "Seline Wong Mei Yan"]
    },

    {
      number: 8,
      titleEn: "Enchanted Grace",
      titleZh: "幻境之雅",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Abby Wong Yu Yan", "Abby Yap Sook Jan", "Daphne Lew En Rui", "Esther Fum Ern Ya", "Hailey Lee Yu Han", "Harper Chong Hooi Xuan", "Low Ke Xin", "Toh Dylis", "Ysanne Ang Yu Xuan", "Zicien Lim"]
    },

    {
      number: 9,
      titleEn: "Halloween",
      titleZh: "万圣之夜",
      school: "agape",
      photo: "assets/dance/halloween.png",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Abigail Hoe Yan Mei", "Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Elyse Phang Yu Ly", "Lai Xin Ru", "Lee Jia Rong", "Loo Yi Ler", "Nur Adresia Binti Alif Firdaus", "Wang Shiwen", "Yang Zoey"]
    },

    {
      number: 10,
      titleEn: "Ukrainian Festivity",
      titleZh: "乌克兰庆典",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Aeryn Wong Hao Thung", "Charisse Chin Qian Yee", "Hailey Chang Yu Tung", "Lai Yi Wen", "Low Ke Xin", "Olivia Chong Chyi Lam", "Tan Yun Han", "Zianne Lim"]
    },

    {
      number: 11,
      titleEn: "Bamboo Shadows",
      titleZh: "竹影",
      school: "victoria",
      photo: "assets/dance/bamboo.png",
      choreographer: "Lim Chia Shian",
      descriptionEn: `The bamboo dances with the wind;
      we journey with our hearts.`,
      descriptionZh: "竹随风舞，人随心行",
      dancers: ["Chan Wey Xin", "Fatima Zahra Binti Abdullah", "Gan Khai Xuan", "Gan Khai Ying", "Lai En Xin", "Lee Zi Lin", "Wong Ying Yue"]
    },

    {
      number: 12,
      titleEn: "Whispers of the Woods",
      titleZh: "森语",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Aeryn Wong Hao Thung", "Audrey Wong Exyn", "Charisse Chin Qian Yee", "Hailey Chang Yu Tung", "Lai Yi Wen", "Siew Kai Huey", "Tan Yun Han", "Zoe Voo Kay Iyn"]
    },

    {
      number: 13,
      titleEn: "The Forest Show",
      titleZh: "森 · 宴",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Belle Fun Le Xin", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Lee Jia Rong", "Lee Ka Yin", "Lynn Fong Jing Er", "Nurul Awatif Binti Muhamad Sazali", "Sek Kah Yi", "Vanessa Chew Yun Ning"]
    },

    {
      number: 14,
      titleEn: "Ikan Kekek",
      titleZh: "畅游",
      school: "victoria",
      photo: "",
      choreographer: "Wong Fook Choon",
      descriptionEn: `Man: "How free the fish must be."
      Fish: "How would you know?"
      Man: "And how would you know what I know?"`,
      descriptionZh: `人说：鱼真自由。
      鱼说：你非我，怎知？
      人说：你非我，怎知我不知？`,
      dancers: ["Chan Wey Ern", "Eunice Yong Hui Teng", "Giovanna Choong", "Jamie Lau Sze Yen", "Koo Xinyu", "Lim Yee Xin", "Lim Yee Xuan", "Quek Qin En", "Rachel Koh Tze Ying", "Shavika A/P Ganeish", "Wong Jing Tong"]
    },

    {
      number: 15,
      titleEn: "Copycat",
      titleZh: "跟风",
      school: "victoria",
      photo: "assets/dance/copycat.png",
      choreographer: "Wong Fook Choon",
      descriptionEn: "随波逐流, 便失去了思考的自由。",
      descriptionZh: "To follow the crowd is to surrender the freedom to think.",
      dancers: ["Amy Tang", "Chia Ying Qi", "Gan Yi Thung", "Law Sue Ann", "Lee Xinler", "Phang Xi Huey", "Shasmiitaa A/P Pathmanathan", "Tan Le Tien", "Teh Shelley", "Wan Hui Loo", "Yau Li Yin"]
    },

    {
      number: 16,
      titleEn: "Feur de Printemps",
      titleZh: "春绽",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Kwek Ann Ya", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"]
    },

    {
      number: 17,
      titleEn: "Never Enough",
      titleZh: "寻序",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Chanel Ooi Xuan Rou", "Cheong Xin Yu", "Eabigail Von Chen", "Eva Yong Wan Yee", "Fong Xin Ying", "Hannah Yong Wan Jin", "Lim Wei Xin", "Loi Xin Shi", "Loke Yen Li", "Ng Jing Qian", "Ng Zhi Han", "Poon Ee Ann", "Soo Eevyn", "Suah Yu Shuen", "Tan Kay Yee"]
    },

    {
      number: 18,
      titleEn: "Loop",
      titleZh: "循环",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Ashley Wong Hao Yan", "Chin Yun Fei", "Foo Zhi Ying", "Lim Eunice", "Wong Szi Ern"]
    },

    {
      number: 19,
      titleEn: "Counterbalance",
      titleZh: "抗衡",
      school: "agape",
      photo: "assets/dance/counterbalance.png",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Eva Yong Wan Yee", "Hannah Yong Wan Jin"]
    },

    {
      number: 20,
      titleEn: "The Little Wonder",
      titleZh: "童趣",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Belle Fun Le Xin", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheong Xin Yu", "Chew Hao Xuan", "Lai Xin Yee", "Lai Yu Tong", "Lynn Fong Jing Er", "Vanessa Chew Yun Ning"]
    },

    {
      number: 21,
      titleEn: "Bullying",
      titleZh: "霸凌",
      school: "victoria",
      photo: "assets/dance/bully.png",
      choreographer: "Wong Fook Choon",
      descriptionEn: "犯了错，谁的过？",
      descriptionZh: "Blame goes where nobody knows.",
      dancers: ["Chan Wey Ern", "Eunice Yong Hui Teng", "Giovanna Choong", "Jamie Lau Sze Yen", "Koo Xinyu", "Law Sue Ann", "Lim Yee Xin", "Lim Yee Xuan", "Rachel Koh Tze Ying", "Shavika A/P Ganeish", "Wong Jing Tong"]
    },

    {
      number: 22,
      titleEn: "War & Peace",
      titleZh: "战争与和平",
      school: "agape",
      photo: "",
      choreographer: "Wong Fook Choon",
      descriptionEn: "宁为太平犬，莫作战乱人。",
      descriptionZh: "A beggar who sleeps on the floor will always be richer than a man at war.",
      dancers: ["Belle Fun Le Xin", "Alicia Chin Ying Yi", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheen May Rou", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Loke Yen Li", "Lynn Fong Jing Er", "Ng Zhi Han", "Tan Kay Yee"]
    },

    {
      number: 23,
      titleEn: "Unfold with Grace",
      titleZh: "日出而作",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Lai Xin Yee", "Lim Wei Xin", "Loi Xin Shi", "Pon Zhi Ling", "Poon Ee Ann", "Shanice Cheng Sin Yu", "Soo Eevyn", "Suah Yu Shuen", "Woo Jia Xuan", "Yeh Qian Fay"]
    },

    {
      number: 24,
      titleEn: "Speaking of Truth",
      titleZh: "需要勇气去面对",
      school: "pink",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Foo Zhi Ying", "Kwek Ann Ya", "Lim Eunice", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"]
    },

    {
      number: 25,
      titleEn: "Whisper Across",
      titleZh: "时光低语",
      school: "agape",
      photo: "",
      choreographer: "",
      descriptionEn: "",
      descriptionZh: "",
      dancers: ["Agnes Ng Yue Xin", "Anya Joy Isaacs", "Chong Chen Mii", "Choo Qiao Er", "Elise Tan Qian Tung", "Elyse Phang Yu Ly", "Jocelyn Lim Kai Xin", "Lai Xin Ru", "Lee Jia Yi", "Sophie Tee Wei Jyn", "Tan Ling Huey", "Thulaasi Nithyanandan", "Wong Sze Yhu", "Wong Yh Gwyn"]
    },

    {
      number: 26,
      titleEn: "Longing",
      titleZh: "盼",
      school: "agape",
      photo: "",
      choreographer: "Wong Fook Choon",
      descriptionEn: "",
      descriptionZh: "离乡背井，骨肉分离。",
      dancers: ["Alicia Chin Ying Yi", "Belle Fun Le Xin", "Cheen May Rou", "Heng Xiang Ting", "Loke Yen Li", "Ng Zhi Han", "Poon Ee Ann", "Tan Kay Yee"]
    }
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
