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
      logo: "" // Example: "assets/logo-agape.png"
    },
    pink: {
      name: "Pink Ballet Studio",
      logo: "" // Example: "assets/logo-pink.png"
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
    en: "Welcome to Season of Grace. Tonight brings together three schools, many young dancers and one shared love for dance. We are grateful to every teacher, family member and backstage team member who has supported the dancers through their rehearsals. May this stage be a place where they perform with courage, joy and grace — and carry these memories with them long after the curtain falls.",
    zh: "欢迎来到《Season of Grace》。今晚，三所舞蹈学校、众多年轻舞者，因对舞蹈共同的热爱而相聚。感谢每一位老师、家长与幕后团队，在一次次排练中陪伴并支持舞者。愿这个舞台让孩子们带着勇气、喜悦与从容起舞，也愿今晚的美好回忆，在谢幕后依然长久留存。"
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
    { number: 1,  titleEn: "Counterbalance",       titleZh: "抗衡",   school: "agape",    photo: "assets/dance/counterbalance.png", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 2,  titleEn: "Dance Title Two",       titleZh: "舞蹈名称二",   school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 3,  titleEn: "Dance Title Three",     titleZh: "舞蹈名称三",   school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4", "Dancer Name 5"] },
    { number: 4,  titleEn: "Dance Title Four",      titleZh: "舞蹈名称四",   school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 5,  titleEn: "Dance Title Five",      titleZh: "舞蹈名称五",   school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 6,  titleEn: "Dance Title Six",       titleZh: "舞蹈名称六",   school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 7,  titleEn: "Dance Title Seven",     titleZh: "舞蹈名称七",   school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 8,  titleEn: "Dance Title Eight",     titleZh: "舞蹈名称八",   school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 9,  titleEn: "Dance Title Nine",      titleZh: "舞蹈名称九",   school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 10, titleEn: "Dance Title Ten",       titleZh: "舞蹈名称十",   school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 11, titleEn: "Dance Title Eleven",    titleZh: "舞蹈名称十一", school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 12, titleEn: "Dance Title Twelve",    titleZh: "舞蹈名称十二", school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 13, titleEn: "Dance Title Thirteen",  titleZh: "舞蹈名称十三", school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 14, titleEn: "Dance Title Fourteen",  titleZh: "舞蹈名称十四", school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 15, titleEn: "Dance Title Fifteen",   titleZh: "舞蹈名称十五", school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 16, titleEn: "Dance Title Sixteen",   titleZh: "舞蹈名称十六", school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 17, titleEn: "Dance Title Seventeen", titleZh: "舞蹈名称十七", school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 18, titleEn: "Dance Title Eighteen",  titleZh: "舞蹈名称十八", school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 19, titleEn: "Dance Title Nineteen",  titleZh: "舞蹈名称十九", school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 20, titleEn: "Dance Title Twenty",    titleZh: "舞蹈名称二十", school: "pink",     photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 21, titleEn: "Dance Title Twenty-One",titleZh: "舞蹈名称二十一", school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 22, titleEn: "Dance Title Twenty-Two",titleZh: "舞蹈名称二十二", school: "agape",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 23, titleEn: "Dance Title Twenty-Three",titleZh: "舞蹈名称二十三", school: "pink",   photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 24, titleEn: "Dance Title Twenty-Four", titleZh: "舞蹈名称二十四", school: "victoria", photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3"] },
    { number: 25, titleEn: "Dance Title Twenty-Five", titleZh: "舞蹈名称二十五", school: "agape",   photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4"] },
    { number: 26, titleEn: "Dance Title Twenty-Six",  titleZh: "舞蹈名称二十六", school: "pink",    photo: "", dancers: ["Dancer Name 1", "Dancer Name 2", "Dancer Name 3", "Dancer Name 4", "Dancer Name 5"] }
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
