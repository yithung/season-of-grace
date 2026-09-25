(() => {
  'use strict';

  const content = window.SITE_CONTENT;
  if (!content) return;

  const schoolName = key => content.schools[key]?.name || key;
  const pad = number => String(number).padStart(2, '0');

  function mediaMarkup(photo, alt, className, placeholderText) {
    if (photo) {
      return `<div class="${className} has-image"><img src="${photo}" alt="${alt}"></div>`;
    }
    return `<div class="${className} media-placeholder" role="img" aria-label="${alt}"><span>${placeholderText}</span></div>`;
  }

  // Directors: three portraits + ONE shared message.
  const directorGrid = document.querySelector('#director-grid');
  directorGrid.innerHTML = content.directors.map((director, index) => `
    <article class="director-person">
      ${mediaMarkup(director.photo, `${director.name} portrait`, 'director-photo', `Director photo ${index + 1}<br>院长照片`)}
      <div class="director-person-copy">
        <h3>${director.name}</h3>
        <p>${schoolName(director.school)}</p>
      </div>
    </article>
  `).join('');

  document.querySelector('#director-message-en').textContent = content.directorMessage.en;
  document.querySelector('#director-message-zh').textContent = content.directorMessage.zh;

  // Choreographers: photo + name + school only.
  const choreographerGrid = document.querySelector('#choreographer-grid');
  choreographerGrid.innerHTML = content.choreographers.map((person, index) => `
    <article class="profile-card">
      ${mediaMarkup(person.photo, `${person.name} portrait`, 'profile-photo', `Portrait ${index + 1}<br>编舞照片`)}
      <div class="profile-copy">
        <p class="profile-no">${pad(index + 1)}</p>
        <h3>${person.name}</h3>
        <p class="profile-school">${schoolName(person.school)}</p>
      </div>
    </article>
  `).join('');

  // Programme: 26 dances, with landscape group photo merged into each card.
  const programmeGrid = document.querySelector('#programme-grid');
  programmeGrid.innerHTML = content.dances.map((dance, index) => `
    <button class="programme-card" data-dance-index="${index}" type="button" aria-label="Open dance ${dance.number}: ${dance.titleEn}">
      <span class="programme-visual">
        ${dance.photo
          ? `<span class="programme-photo has-image"><img src="${dance.photo}" alt="Group photo for ${dance.titleEn}"></span>`
          : `<span class="programme-photo media-placeholder"><span>Group photo<br>舞者合照</span></span>`}
        <strong class="programme-number">${pad(dance.number)}</strong>
        <span class="programme-open" aria-hidden="true">↗</span>
      </span>
      <span class="programme-caption">
        <span class="programme-title">
          <span class="en">${dance.titleEn}</span>
          <span class="zh" lang="zh-Hans">${dance.titleZh}</span>
        </span>
        <span class="programme-school">${schoolName(dance.school)}</span>
      </span>
    </button>
  `).join('');

  // Behind-the-scenes staff.
  const creditsGrid = document.querySelector('#credits-grid');
  creditsGrid.innerHTML = content.credits.map((credit, index) => `
    <div class="credit-item">
      <span>${pad(index + 1)}</span>
      <div><small>${credit.role}</small><strong>${credit.name}</strong></div>
    </div>
  `).join('');

  // Footer schools and logo placeholders.
  const footerSchools = document.querySelector('#footer-schools');
  footerSchools.innerHTML = Object.entries(content.schools).map(([key, school]) => `
    <div class="footer-school">
      ${school.logo
        ? `<div class="school-logo has-image"><img src="${school.logo}" alt="${school.name} logo"></div>`
        : `<div class="school-logo logo-placeholder" aria-label="${school.name} logo placeholder"><span>${key === 'agape' ? 'A' : key === 'pink' ? 'P' : 'V'}</span></div>`}
      <strong>${school.name}</strong>
    </div>
  `).join('');

  // Language switch.
  const languageButtons = document.querySelectorAll('[data-mode]');
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.body.dataset.lang = button.dataset.mode;
      languageButtons.forEach(item => item.classList.toggle('active', item === button));
    });
  });

  // Safari-friendly custom bottom sheet modal (no <dialog> dependency).
  const modal = document.querySelector('#dance-modal');
  const modalSheet = modal.querySelector('.modal-sheet');
  const modalNumber = document.querySelector('#modal-number');
  const modalTitle = document.querySelector('#modal-title');
  const modalTitleZh = document.querySelector('#modal-title-zh');
  const modalSchool = document.querySelector('#modal-school');
  const modalPhoto = document.querySelector('#modal-photo');
  const modalDancers = document.querySelector('#modal-dancers');
  let previousFocus = null;

  function setModalPhoto(dance) {
    modalPhoto.className = 'modal-photo';
    modalPhoto.innerHTML = '';

    if (dance.photo) {
      modalPhoto.classList.add('has-image');
      const image = document.createElement('img');
      image.src = dance.photo;
      image.alt = `Group photo for ${dance.titleEn}`;
      modalPhoto.appendChild(image);
    } else {
      modalPhoto.classList.add('media-placeholder');
      modalPhoto.innerHTML = '<span>Group photo<br>舞者合照</span>';
    }
  }

  function openDance(index) {
    const dance = content.dances[index];
    if (!dance) return;

    previousFocus = document.activeElement;
    modalNumber.textContent = `/ ${pad(dance.number)} /`;
    modalTitle.textContent = dance.titleEn;
    modalTitleZh.textContent = dance.titleZh;
    modalSchool.textContent = schoolName(dance.school);
    setModalPhoto(dance);

    modalDancers.textContent = dance.dancers.join(', ');

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => modal.querySelector('.modal-close').focus());
  }

  function closeDance() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  document.querySelectorAll('[data-dance-index]').forEach(card => {
    card.addEventListener('click', () => openDance(Number(card.dataset.danceIndex)));
  });

  modal.querySelector('.modal-close').addEventListener('click', closeDance);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeDance);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeDance();
  });

  // Prevent clicks inside the sheet from reaching the backdrop on older Safari builds.
  modalSheet.addEventListener('click', event => event.stopPropagation());

  // Highlight the mobile dock item for the section currently on screen.
  const dockLinks = document.querySelectorAll('.mobile-dock a');
  const dockSections = document.querySelectorAll(
    '#directors, #choreographers, #programme, #team'
  );

  const dockObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      dockLinks.forEach(link => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    });
  }, {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0
  });

  dockSections.forEach(section => dockObserver.observe(section));
})();
