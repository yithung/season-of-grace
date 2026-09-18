const choreographers = [
  { name: 'Choreographer One', zh: '编舞老师一', role: 'Classical Ballet · 古典芭蕾' },
  { name: 'Choreographer Two', zh: '编舞老师二', role: 'Contemporary · 当代舞' },
  { name: 'Choreographer Three', zh: '编舞老师三', role: 'Junior Repertoire · 儿童舞目' },
  { name: 'Choreographer Four', zh: '编舞老师四', role: 'Ensemble Works · 群舞' },
  { name: 'Choreographer Five', zh: '编舞老师五', role: 'Classical Ballet · 古典芭蕾' },
  { name: 'Choreographer Six', zh: '编舞老师六', role: 'Character Dance · 性格舞' },
  { name: 'Choreographer Seven', zh: '编舞老师七', role: 'Contemporary · 当代舞' },
  { name: 'Choreographer Eight', zh: '编舞老师八', role: 'Finale · 终曲' }
];

const danceTitles = [
  ['Copycat', '跟风'], ['Petals in the Wind', '风中花瓣'], ['Little Waltz', '小圆舞曲'], ['Garden of Dreams', '梦之花园'], ['Awakening', '初醒'], ['Bloom', '绽放'],
  ['Sunlit Steps', '日光之舞'], ['Sea Glass', '海之琉璃'], ['Radiance', '光芒'], ['Midsummer Joy', '盛夏之喜'], ['Azure', '蔚蓝'], ['Golden Hour', '金色时刻'],
  ['Turning Leaves', '叶落旋舞'], ['Harvest Moon', '秋月'], ['Ember', '余烬'], ['Amber Waltz', '琥珀圆舞曲'], ['Passing Seasons', '流转之季'], ['Russet', '赭红'],
  ['Snowfall', '初雪'], ['Stillness', '静'], ['Crystal Waltz', '水晶圆舞曲'], ['Winter Sky', '冬日之空'], ['Quiet Stars', '寂星'], ['Grace in Motion', '动中之恩']
];

const schools = ['Agapé Music & Ballet School', 'Pink Ballet Studio', 'Victoria Dance Arts'];
const levels = ['Pre-Primary', 'Grade 1–2', 'Grade 3–4', 'Grade 5+', 'Open / Ensemble'];

const dances = [
  {
    number: 1,
    en: 'Copycat',
    zh: '跟风',
    school: 'Victoria Dance Arts',
    level: 'Advanced',
    choreographer: 'Choreographer One'
  },
  {
    number: 2,
    en: 'Petals in the Wind',
    zh: '风中花瓣',
    school: 'Pink Ballet Studio',
    level: 'Grade 1–2',
    choreographer: 'Choreographer Two'
  },
  {
    number: 3,
    en: 'Little Waltz',
    zh: '小圆舞曲',
    school: 'Victoria Dance Arts',
    level: 'Grade 3–4',
    choreographer: 'Choreographer Three'
  },
  {
    number: 4,
    en: 'Garden of Dreams',
    zh: '梦之花园',
    school: 'Pink Ballet Studio',
    level: 'Grade 2–3',
    choreographer: 'Choreographer Four'
  },
  {
    number: 5,
    en: 'Awakening',
    zh: '初醒',
    school: 'Victoria Dance Arts',
    level: 'Grade 5–6',
    choreographer: 'Choreographer Five'
  },
  {
    number: 6,
    en: 'Bloom',
    zh: '绽放',
    school: 'Pink Ballet Studio',
    level: 'Advanced',
    choreographer: 'Choreographer Six'
  },
  {
    number: 7,
    en: 'Sunlit Steps',
    zh: '日光之舞',
    school: 'Victoria Dance Arts',
    level: 'Grade 1–2',
    choreographer: 'Choreographer Seven'
  },
  {
    number: 8,
    en: 'Sea Glass',
    zh: '海之琉璃',
    school: 'Victoria Dance Arts',
    level: 'Grade 4–5',
    choreographer: 'Choreographer Eight'
  },
  {
    number: 9,
    en: 'Radiance',
    zh: '光芒',
    school: 'Pink Ballet Studio',
    level: 'Grade 3–4',
    choreographer: 'Choreographer Nine'
  },
  {
    number: 10,
    en: 'Midsummer Joy',
    zh: '盛夏之喜',
    school: 'Victoria Dance Arts',
    level: 'Grade 2–3',
    choreographer: 'Choreographer Ten'
  },
  {
    number: 11,
    en: 'Azure',
    zh: '蔚蓝',
    school: 'Pink Ballet Studio',
    level: 'Grade 5–6',
    choreographer: 'Choreographer Eleven'
  },
  {
    number: 12,
    en: 'Golden Hour',
    zh: '金色时刻',
    school: 'Pink Ballet Studio',
    level: 'Advanced',
    choreographer: 'Choreographer Twelve'
  },
  {
    number: 13,
    en: 'Turning Leaves',
    zh: '叶落旋舞',
    school: 'Victoria Dance Arts',
    level: 'Grade 3–4',
    choreographer: 'Choreographer Thirteen'
  },
  {
    number: 14,
    en: 'Harvest Moon',
    zh: '秋月',
    school: 'Pink Ballet Studio',
    level: 'Grade 4–5',
    choreographer: 'Choreographer Fourteen'
  },
  {
    number: 15,
    en: 'Ember',
    zh: '余烬',
    school: 'Victoria Dance Arts',
    level: 'Advanced',
    choreographer: 'Choreographer Fifteen'
  },
  {
    number: 16,
    en: 'Amber Waltz',
    zh: '琥珀圆舞曲',
    school: 'Pink Ballet Studio',
    level: 'Grade 1–2',
    choreographer: 'Choreographer Sixteen'
  },
  {
    number: 17,
    en: 'Passing Seasons',
    zh: '流转之季',
    school: 'Victoria Dance Arts',
    level: 'Grade 5–6',
    choreographer: 'Choreographer Seventeen'
  },
  {
    number: 18,
    en: 'Russet',
    zh: '赭红',
    school: 'Pink Ballet Studio',
    level: 'Grade 2–3',
    choreographer: 'Choreographer Eighteen'
  },
  {
    number: 19,
    en: 'Snowfall',
    zh: '初雪',
    school: 'Victoria Dance Arts',
    level: 'Grade 1–2',
    choreographer: 'Choreographer Nineteen'
  },
  {
    number: 20,
    en: 'Stillness',
    zh: '静',
    school: 'Pink Ballet Studio',
    level: 'Grade 4–5',
    choreographer: 'Choreographer Twenty'
  },
  {
    number: 21,
    en: 'Crystal Waltz',
    zh: '水晶圆舞曲',
    school: 'Victoria Dance Arts',
    level: 'Grade 3–4',
    choreographer: 'Choreographer Twenty-One'
  },
  {
    number: 22,
    en: 'Winter Sky',
    zh: '冬日之空',
    school: 'Pink Ballet Studio',
    level: 'Grade 5–6',
    choreographer: 'Choreographer Twenty-Two'
  },
  {
    number: 23,
    en: 'Quiet Stars',
    zh: '寂星',
    school: 'Victoria Dance Arts',
    level: 'Advanced',
    choreographer: 'Choreographer Twenty-Three'
  },
  {
    number: 24,
    en: 'Grace in Motion',
    zh: '动中之恩',
    school: 'Pink Ballet Studio',
    level: 'Grade 2–3',
    choreographer: 'Choreographer Twenty-Four'
  }
];

const credits = [
  ['Artistic Direction · 艺术总监', 'Name Placeholder'],
  ['Production Manager · 制作经理', 'Name Placeholder'],
  ['Stage Manager · 舞台监督', 'Name Placeholder'],
  ['Lighting · 灯光', 'Name Placeholder'],
  ['Sound · 音响', 'Name Placeholder'],
  ['Costume · 服装', 'Name Placeholder'],
  ['Photography · 摄影', 'Name Placeholder'],
  ['Front of House · 前台统筹', 'Name Placeholder'],
  ['Graphic / Web · 平面与网站', 'Name Placeholder'],
  ['Special Thanks · 特别鸣谢', 'Name / Organisation']
];

const choreographerGrid = document.querySelector('#choreographer-grid');
choreographerGrid.innerHTML = choreographers.map((c, i) => `
  <article class="profile-card">
    <div class="profile-photo photo-placeholder"><span>Portrait ${i + 1}<br>照片</span></div>
    <div class="profile-copy">
      <p class="profile-no">${String(i + 1).padStart(2, '0')}</p>
      <h3><span class="en">${c.name}</span><span class="zh" lang="zh-Hans">${c.zh}</span></h3>
      <p class="role">${c.role}</p>
      <p class="en">Short biography placeholder. Add training, teaching experience and creative interests.</p>
      <p class="zh" lang="zh-Hans">简短个人介绍示意文字，可加入学习背景、教学经验与创作方向。</p>
    </div>
  </article>
`).join('');

const programmeGrid = document.querySelector('#programme-grid');
programmeGrid.innerHTML = dances.map(d => `
  <button class="programme-row" data-index="${d.number - 1}" type="button" aria-label="Open details for dance ${d.number}: ${d.en}">
    <span class="programme-number">${String(d.number).padStart(2, '0')}</span>
    <span class="programme-info">
      <span class="programme-title"><span class="en">${d.en}</span><span class="zh" lang="zh-Hans">${d.zh}</span></span>
      <span class="programme-meta">${d.school} · ${d.level}</span>
    </span>
    <span class="programme-arrow" aria-hidden="true">↗</span>
  </button>
`).join('');

const galleryGrid = document.querySelector('#gallery-grid');
galleryGrid.innerHTML = dances.map((d, i) => `
  <button class="gallery-card" data-index="${i}" type="button" aria-label="Open dancer details for dance ${d.number}: ${d.en}">
    <span class="gallery-photo photo-placeholder"><span>Group photo<br>舞者合照</span><b>${String(d.number).padStart(2, '0')}</b></span>
    <span class="gallery-caption">
      <strong><span class="en">${d.en}</span><span class="zh" lang="zh-Hans">${d.zh}</span></strong>
      <small>${d.school}</small>
    </span>
  </button>
`).join('');

// const creditsGrid = document.querySelector('#credits-grid');
// creditsGrid.innerHTML = credits.map(([role, name], i) => `
//   <div class="credit-item"><span>${String(i + 1).padStart(2, '0')}</span><div><small>${role}</small><strong>${name}</strong></div></div>
// `).join('');

const creditsGrid = document.querySelector('#credits-grid');
creditsGrid.innerHTML = credits.map(([role, name]) => `
  <div class="credit-item"><span>${role}</span><strong>${name}</strong></div>
`).join('');

const languageButtons = document.querySelectorAll('[data-mode]');
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.body.dataset.lang = button.dataset.mode;
    languageButtons.forEach(b => b.classList.toggle('active', b === button));
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const setMenuOpen = (open) => {
  mobileMenu.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
};
menuToggle.addEventListener('click', () => setMenuOpen(!mobileMenu.classList.contains('open')));
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

const dialog = document.querySelector('#dance-dialog');
const openDance = (index) => {
  const d = dances[index];
  dialog.querySelector('.dialog-number').textContent = `Dance ${String(d.number).padStart(2, '0')} · 节目 ${String(d.number).padStart(2, '0')}`;
  dialog.querySelector('.dialog-title').textContent = d.en;
  dialog.querySelector('.dialog-subtitle').textContent = d.zh;
  dialog.querySelector('.dialog-meta').innerHTML = `
    <p><small>School · 学校</small><strong>${d.school}</strong></p>
    <p><small>Level · 级别</small><strong>${d.level}</strong></p>
    <p><small>Choreography · 编舞</small><strong>${d.choreographer}</strong></p>`;
  dialog.showModal();
};

document.querySelectorAll('[data-index]').forEach(item => {
  item.addEventListener('click', () => openDance(Number(item.dataset.index)));
});

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenuOpen(false);
});
