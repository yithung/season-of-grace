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
      name: "Tan<br>Hooi Theng",
      school: "agape",
      photo: "assets/director/agape.png" // Example: "assets/director-agape.jpg"
    },
    {
      name: "Celine Ko",
      school: "pink",
      photo: "assets/director/pink.png"
    },
    {
      name: "Wong<br>Fook Choon",
      school: "victoria",
      photo: "assets/director/victoria.png"
    }
  ],

  directorMessage: {
    en: `Dear Ladies and Gentlemen, 

    It is our great pleasure to welcome you to our Season of Grace Concert.

Today, we celebrate our students’ talent, dedication, and passion for the performing arts. We are proud to see them come together to share their hard work, creativity, and love for dance on stage.

This special occasion is made even more meaningful through the collaboration of Agapé Music & Ballet School, Pink Ballet Studio, and Victoria Dance Arts, bringing together our students, teachers, and dance communities through our shared love of the arts.

Our heartfelt thanks to all our teachers, choreographers, staff, parents, and students for your dedication, encouragement, and support. Every performance today is the result of countless hours of practice, teamwork, and perseverance.

To our students, step onto the stage with confidence, joy, and grace. Cherish every moment, support one another, and let your passion shine.

Thank you for joining us in this special celebration. May Season of Grace create beautiful performances, wonderful memories, and a meaningful occasion for us all to remember.

Enjoy the show!
    `,
    zh: `尊敬的女士们、先生们：

我们非常荣幸地欢迎各位莅临 Season of Grace 舞蹈汇演。

今天，我们共同庆祝学生们在表演艺术中展现出的才华、努力与热忱。我们很高兴看到三所学校的学生齐聚舞台，分享他们的付出、创意，以及对舞蹈的热爱。

Season of Grace 因 Agapé Music & Ballet School、Pink Ballet Studio 与 Victoria Dance Arts 三校之间的美好合作而更具意义。在这个特别的日子里，让我们的学生、老师与舞蹈社群相聚一堂，以共同的热爱培育年轻舞者，并通过艺术启发他们成长，是一件令人喜悦的事。

我们衷心感谢所有老师、编舞老师、工作人员、家长与学生的付出、鼓励与支持。今天每一支舞蹈的背后，都凝聚了无数小时的练习、团队合作与坚持。

亲爱的同学们，愿你们带着自信、喜悦与优雅踏上舞台，珍惜每一个瞬间，彼此支持，让你们对舞蹈的热爱尽情绽放。

感谢各位今天与我们共度这场特别的庆典。愿 Season of Grace 为大家带来精彩的演出、美好的回忆，以及一段值得珍藏的时光。

祝大家观赏愉快！
`  
  },

  choreographers: [
    { name: "Amy<br>Tang", photo: "assets/choreo/amy.png" },
    { name: "Celine<br>Ko", photo: "assets/choreo/celine.png" },
    { name: "James<br>Kan", photo: "assets/choreo/james.png" },
    { name: "Justine<br>Lu", photo: "assets/choreo/justine.png" },
    { name: "Lim<br>Chia Shian", photo: "assets/choreo/lim.png" },
    { name: "Mio<br>Lee", photo: "assets/choreo/mio.png" },
    { name: "Natalie<br>Hon", photo: "assets/choreo/natalie.png" },
    { name: "Yip<br>Shin Rou", photo: "assets/choreo/shin-rou.png" },
    { name: "Tan<br>Lan Jong", photo: "assets/choreo/tan.png" }, 
    { name: "Ten<br>Hui Qi", photo: "assets/choreo/ten.png" }, 
    { name: "Wong<br>Fook Choon", photo: "assets/choreo/wong.png" }
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
      photo: "assets/dance/pirates.png",
      choreographer: "Mio Lee",
      descriptionEn: "A group of little pirates sails across the sea in search of treasure. After an exciting adventure, they find it and celebrate together.",
      descriptionZh: "一群小海盗扬帆出海寻找宝藏。经过一番探索，他们找到宝藏并开心庆祝。",
      dancers: ["Abigail Hoe Yan Mei", "Angelyn Toh Zhi Xin", "Choe Joy Ern", "Erin Hiew Shuet Peng", "Fong Sze Kei", "Loo Yi Ler", "Ng Ka Hey", "Pang Yu Sin", "Seline Wong Mei Yan", "Wang Shiwen", "Yang Zoey"]
    },

    {
      number: 3,
      titleEn: "Island of Joy",
      titleZh: "欢乐小岛",
      school: "agape",
      photo: "assets/dance/island-of-joy.png",
      choreographer: "Mio Lee",
      descriptionEn: "The little pirates arrive on a mysterious island in search of treasure, where they meet the islanders, make new friends, and dance together with joy!",
      descriptionZh: "小海盗寻宝来到神秘小岛，与岛民相遇，成为朋友，一起欢快起舞！",
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
      photo: "assets/dance/mushroom.png",
      choreographer: "Yip Shin Rou",
      descriptionEn: "A little waltz of wonder.",
      descriptionZh: "蘑菇苏醒，翩然起舞。",
      dancers: ["Bella Cheong Xin Yue", "Chan Zi Qing", "Emilia Gan Yun Xi", "Hannah Lee Xin Yue", "Jamie Lim Zi Xin", "Janelle Choo Zi Ning", "Nga Vee Thong", "Yap You Jie"]
    },

    {
      number: 6,
      titleEn: "Spring",
      titleZh: "春风轻舞",
      school: "victoria",
      photo: "assets/dance/spring.png",
      choreographer: "Amy Tang & Ten Hui Qi",
      descriptionEn: "Gentle breeze, shifting leaves, we dance among the bloom.",
      descriptionZh: "春风轻拂，舞迎盛开。",
      dancers: ["Bella Chen Xi", "Chiew Tze Xuan", "Jovie Lau Sze Yu", "Lee Hui Yee", "Puterii Nuur Adawiyyah Binti Saddam Hussin", "Puterii Nuur Lattisha Binti Saddam Hussin", "Sarah Chew Ler Thong", "Sia Yun Faye", "Sophia Lim Xin Rou", "Tiara M Sayyid", "Vehana A/P Sivaprakash"]
    },

    {
      number: 7,
      titleEn: "Happy Feet",
      titleZh: "快乐舞步",
      school: "agape",
      photo: "assets/dance/happy-feet.png",
      choreographer: "Natalie Hon",
      descriptionEn: "Light on their feet, bright in their hearts.",
      descriptionZh: "舞动青春，绽放阳光。",
      dancers: ["Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Erin Hiew Shuet Peng", "Lee Zheqi", "Nur Adresia Binti Alif Firdaus", "Seline Wong Mei Yan"]
    },

    {
      number: 8,
      titleEn: "Enchanted Grace",
      titleZh: "幻境之雅",
      school: "pink",
      photo: "assets/dance/enchanted.png",
      choreographer: "Yip Shin Rou",
      descriptionEn: "Magic awakens through dance.",
      descriptionZh: "以童真逐梦，以舞唤醒魔法。",
      dancers: ["Abby Wong Yu Yan", "Abby Yap Sook Jan", "Daphne Lew En Rui", "Esther Fum Ern Ya", "Hailey Lee Yu Han", "Harper Chong Hooi Xuan", "Low Ke Xin", "Toh Dylis", "Ysanne Ang Yu Xuan", "Zicien Lim"]
    },

    {
      number: 9,
      titleEn: "Halloween",
      titleZh: "万圣之夜",
      school: "agape",
      photo: "assets/dance/halloween.png",
      choreographer: "Mio Lee",
      descriptionEn: "On a magical Halloween night, little pumpkins and scarecrows wander through the moonlit forest, playing hide-and-seek before meeting in a joyful dance.",
      descriptionZh: "神奇的万圣节夜晚，小南瓜和稻草人在森林里捉迷藏，最后相遇并一起欢快起舞。",
      dancers: ["Agnes Ng Yue Xin", "Anya Joy Isaacs", "Chong Chen Mii", "Choo Qiao Er", "Elise Tan Qian Tung", "Elyse Phang Yu Ly", "Jocelyn Lim Kai Xin", "Lai Xin Ru", "Lee Jia Yi", "Sophie Tee Wei Jyn", "Tan Ling Huey", "Thulaasi Nithyanandan", "Wong Sze Yhu", "Wong Yh Gwyn"]
    },

    {
      number: 10,
      titleEn: "Ukrainian Festivity",
      titleZh: "乌克兰庆典",
      school: "pink",
      photo: "assets/dance/ukranian.png",
      choreographer: "Ten Hui Qi",
      descriptionEn: `Youth in bloom; Joy in motion.`,
      descriptionZh: "青春相聚，欢舞成庆。",
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
      descriptionZh: "竹随风舞，人随心行。",
      dancers: ["Chan Wey Xin", "Fatima Zahra Binti Abdullah", "Gan Khai Xuan", "Gan Khai Ying", "Lai En Xin", "Lee Zi Lin", "Wong Ying Yue"]
    },

    {
      number: 12,
      titleEn: "Whispers of the Woods",
      titleZh: "森语",
      school: "pink",
      photo: "assets/dance/whispers-woods.png",
      choreographer: "Mio Lee",
      descriptionEn: "Where the breeze whispers, the soul dances.",
      descriptionZh: "风过林梢，舞诉心语。",
      dancers: ["Aeryn Wong Hao Thung", "Audrey Wong Exyn", "Charisse Chin Qian Yee", "Hailey Chang Yu Tung", "Lai Yi Wen", "Siew Kai Huey", "Tan Yun Han", "Zoe Voo Kay Iyn"]
    },

    {
      number: 13,
      titleEn: "The Forest Show",
      titleZh: "森 · 宴",
      school: "agape",
      photo: "assets/dance/forest-show.png",
      choreographer: "Tan Lan Jong",
      descriptionEn: "A joyful gathering, embraced by nature.",
      descriptionZh: "在大自然的怀抱里，赴一场轻松愉悦的欢聚。",
      dancers: ["Belle Fun Le Xin", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Lee Jia Rong", "Lee Ka Yin", "Lynn Fong Jing Er", "Nurul Awatif Binti Muhamad Sazali", "Sek Kah Yi", "Vanessa Chew Yun Ning"]
    },

    {
      number: 14,
      titleEn: "Ikan Kekek",
      titleZh: "畅游",
      school: "victoria",
      photo: "assets/dance/ikan-kekek.png",
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
      photo: "assets/dance/feur.png",
      choreographer: "Justine Lu",
      descriptionEn: "Blooming into spring.",
      descriptionZh: "春风拂过，花开成舞。",
      dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Kwek Ann Ya", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"]
    },

    {
      number: 17,
      titleEn: "Never Enough",
      titleZh: "寻序",
      school: "agape",
      photo: "assets/dance/never-enough.png",
      choreographer: "Mio Lee",
      descriptionEn: `Lost in the rhythm of the crowd, they learn that growth begins when they find their own beat.`,
      descriptionZh: `随人群起舞而迷失，最终才懂得，
      成长是找回属于自己的步伐。`,
      dancers: ["Chanel Ooi Xuan Rou", "Cheong Xin Yu", "Eabigail Von Chen", "Eva Yong Wan Yee", "Fong Xin Ying", "Hannah Yong Wan Jin", "Lim Wei Xin", "Loi Xin Shi", "Loke Yen Li", "Ng Jing Qian", "Ng Zhi Han", "Poon Ee Ann", "Soo Eevyn", "Suah Yu Shuen", "Tan Kay Yee"]
    },

    {
      number: 18,
      titleEn: "Loop",
      titleZh: "循环",
      school: "pink",
      photo: "assets/dance/loop.png",
      choreographer: "James Kan",
      descriptionEn: "Rat race",
      descriptionZh: `昨日重演，步履未曾远行，
      蓦然回首，仍在原地。`,
      dancers: ["Ashley Wong Hao Yan", "Chin Yun Fei", "Foo Zhi Ying", "Lim Eunice", "Wong Szi Ern"]
    },

    {
      number: 19,
      titleEn: "Counterbalance",
      titleZh: "抗衡",
      school: "agape",
      photo: "assets/dance/counterbalance.png",
      choreographer: "James Kan",
      descriptionEn: "A constant struggle of pulling and resisting, attack and retreat, persistence and compromise. The body becomes a battlefield, emotions the currency. In this endless game of give and take, who truly wins?",
      descriptionZh: `进与退，拉扯与妥协，彼此交织。
      身体是战场，情感是筹码。
      一场没有终点的博弈, 
      究竟谁，才是真正的赢家？`,
      dancers: ["Eva Yong Wan Yee", "Hannah Yong Wan Jin"]
    },

    {
      number: 20,
      titleEn: "The Little Wonder",
      titleZh: "童趣",
      school: "agape",
      photo: "assets/dance/little-wonder.png",
      choreographer: "James Kan",
      descriptionEn: "The unrestrained joy of being young.",
      descriptionZh: "青春年少的无拘无束与喜悦。",
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
      photo: "assets/dance/war-peace.png",
      choreographer: `Wong Fook Choon, with creative input by the students / 与学生参与创意构思`,
      descriptionEn: "宁为太平犬，莫作战乱人。",
      descriptionZh: "A beggar who sleeps on the floor will always be richer than a man at war.",
      dancers: ["Belle Fun Le Xin", "Alicia Chin Ying Yi", "Chanel Ooi Xuan Rou", "Charmaine Ooi Xuan Min", "Cheen May Rou", "Cheong Xin Yu", "Chew Hao Xuan", "Heng Xiang Ting", "Isabella Tee Yee Rou", "Janelle Phang Zhi Qing", "Lai Yu Tong", "Loke Yen Li", "Lynn Fong Jing Er", "Ng Zhi Han", "Tan Kay Yee"]
    },

    {
      number: 23,
      titleEn: "Unfold with Grace",
      titleZh: "日出而作",
      school: "agape",
      photo: "assets/dance/unfold-with-grace.png",
      choreographer: "Celine Ko",
      descriptionEn: "Awaken with the dawn, and step into the rhythm of life.",
      descriptionZh: "随晨光而醒，随日光而行。",
      dancers: ["Lai Xin Yee", "Lim Wei Xin", "Loi Xin Shi", "Pon Zhi Ling", "Poon Ee Ann", "Shanice Cheng Sin Yu", "Soo Eevyn", "Suah Yu Shuen", "Woo Jia Xuan", "Yeh Qian Fay"]
    },

    {
      number: 24,
      titleEn: "Speaking of Truth",
      titleZh: "需要勇气去面对",
      school: "pink",
      photo: "assets/dance/truth.png",
      choreographer: "James Kan",
      descriptionEn: `When silence speaks and order conceals,
      how does truth find its voice?`,
      descriptionZh: `于沉默中发声，于秩序中寻真。
      真相，如何被听见？`,
      dancers: ["Ashley Wong Hao Yan", "Bernice Tan Voon Qian", "Charmaine Chin Zhi Xi", "Chin Yun Fei", "Foo Zhi Ying", "Kwek Ann Ya", "Lim Eunice", "Low Jing Xuan", "Ong Ee Xuan", "Wong Szi Ern"]
    },

    {
      number: 25,
      titleEn: "Whisper Across",
      titleZh: "时光低语",
      school: "agape",
      photo: "assets/dance/whisper-across.png",
      choreographer: "Celine Ko",
      descriptionEn: "Where words fall silent, connection speaks through movement.",
      descriptionZh: "言语未尽，舞步已道尽心意。",
      dancers: ["Abigail Hoe Yan Mei", "Angie Goh Ern Qi", "Chin Thong Leng", "Clarisse Tan Qian Yu", "Elle Fun Le Yue", "Elyse Phang Yu Ly", "Lai Xin Ru", "Lee Jia Rong", "Loo Yi Ler", "Nur Adresia Binti Alif Firdaus", "Wang Shiwen", "Yang Zoey"]
    },

    {
      number: 26,
      titleEn: "Longing",
      titleZh: "盼",
      school: "agape",
      photo: "assets/dance/longing.png",
      choreographer: "Wong Fook Choon",
      descriptionEn: "Forced from home, separated from those we hold dear.",
      descriptionZh: "离乡背井，骨肉分离。",
      dancers: ["Alicia Chin Ying Yi", "Belle Fun Le Xin", "Cheen May Rou", "Heng Xiang Ting", "Loke Yen Li", "Ng Zhi Han", "Poon Ee Ann", "Tan Kay Yee"]
    }
  ],

  // Behind-the-scenes staff 
  // credits: [
  //   { role: "Production · 制作", name: "Agapé Music & Ballet School<br>Pink Ballet Studio<br>Victoria Dance Arts" },
  //   { role: "Stage Manager · 舞台总监", name: "Kenzo de Tuan" },
  //   { role: "Emcee · 司仪", name: "Yip Shin Rou" },
  //   { role: "Front of House Crew · 前台工作人员", name: "Tan Hooi Hsien" },
  //   { role: "Food & Beverage · 餐饮", name: "Tan Hooi Theng" },
  //   { role: "Backstage Crew · 后台工作人员", name: "Sunny Chan" },
  //   { role: "Visual Designer · 视觉设计", name: "Cassie Wong" },
  //   { role: "Graphic Designer · 平面设计", name: "Lim Chia Hui<br>Wong Yu Gene" },
  //   { role: "Music Editor · 音乐编辑", name: "CCK Sound Design" },
  //   { role: "Sound Operator · 音响操作", name: "Hang Wen Chin" },
  //   { role: "Lighting Designer · 灯光设计", name: "Tag Nicxon Production" },
  //   { role: "Photographers · 摄影", name: "Chang Hin Wai Sang<br>James Quah" },
  //   { role: "Videographers · 录像", name: "NTC Video Production" },
  //   { role: "Website · 网站", name: "Gan Yi Thung<br>Cherry Phang" },
  //   { role: "Special Thanks · 特别鸣谢", name: "Ashley Wong, Chai Yu Xuan, Chen Fun Yen, Chin Yun Fei, Chung Jian Lun, Gan Xi Li, Isaac Hoe, Jacqueline Lim, Lau Sei Wai, Michael Thong, Ng Hui Xin, Nga Vee Jane, Poon Se Yin, Qwilynn Cheong, Sharon Wong, Susan Wua, Tan Hooi Ping, Tan Yi Sun, Willis Voon, Wong Yu Gene, Yip Shin Ee" }
  // ]
  credits: [
    { role: "Production · 制作", name: "Agapé Music & Ballet School, Pink Ballet Studio, Victoria Dance Arts" },
    { role: "Artistic Director · 艺术总监", name: "Wong Fook Choon" },
    { role: "Stage Manager · 舞台总监", name: "Kenzo de Tuan" },
    { role: "Emcee · 司仪", name: "Yip Shin Rou" },
    { role: "Stage Supervisor · 舞台监督", name: "Tan Lan Jong, Celine Ko" },
    { role: "Stage Crew · 舞台工作人员", name: "Chen Fun Yen, Poon Se Yin, Willis Voon, Voon Sue Hann" },
    { role: "Lighting Designer · 灯光设计", name: "Nicxon Tan" },
    { role: "Visual Designer · 视觉设计", name: "Cassie Wong" },
    { role: "Graphic Designer · 平面设计", name: "Lim Chia Hui, Wong Yu Gene" },
    { role: "Music Editor · 音乐编辑", name: "Chiew Chee Koon" },
    { role: "Sound Operator · 音响操作", name: "Hang Wen Chin" },
    { role: "Backstage Crew · 后台工作人员", name: "Sunny Chan, Justine Lu, Natalie Hon, Mio Lee, Lim Chia Shian, Ten Hui Qi, Jacqueline Lim, Wong Szi Ern, Chin Yun Fei, Yip Shin Ee, Ashley Wong" },
    { role: "Call Stewards · 催场人员", name: "Tan Hooi Ping, Gan Xi Li" },
    { role: "Food & Beverage · 餐饮", name: "Tan Hooi Theng, Chung Jian Lun, Sharon Wong" },
    { role: "Front of House Supervisor · 前台主管", name: "Tan Hooi Hsien" },
    { role: "Front of House · 前台工作人员", name: "Tan Yi Sun, Ng Hui Xin, Chai Yu Xuan, Wong Yu Gene, Qwilynn Cheong, Lau Sei Wai, Michael Thong" },
    { role: "Videographers · 录像", name: "Losel Chuah, Jia Wah Lee, Yu Tian Chuah" },
    { role: "Photographers · 摄影", name: "Chang Hin Wai Sang, James Quah" },
    { role: "Website · 网站", name: "Gan Yi Thung, Cherry Phang" },
    { role: "Special Thanks · 特别鸣谢", name: "NTC Video Production, Tag Nicxon Production, Isaac Hoe, Susan Wua, Nga Vee Jane" }
  ]
};
