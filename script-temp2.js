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

  // =========================================================
  // ABOUT — stacked story-card carousel
  // =========================================================

  const aboutStack = document.querySelector('#about-stack');

  if (aboutStack) {
    const aboutCards = [...aboutStack.querySelectorAll('.about-card')];
    const aboutCurrent = document.querySelector('#about-current');

    let activeAboutCard = 0;
    let pointerStartX = null;
    let pointerStartY = null;

    function updateAboutStack() {
      const isMobile = window.matchMedia('(max-width: 760px)').matches;
      const step = isMobile ? 24 : 28;

      aboutCards.forEach((card, index) => {
        const distance = index - activeAboutCard;
        const absDistance = Math.abs(distance);

        card.classList.toggle('is-active', distance === 0);

        // Previous cards move slightly left.
        // Upcoming cards move slightly right.
        const x = distance * step;

        // Active card = full size.
        // Cards further away become slightly smaller.
        const scale = Math.max(
          0.75,
          1 - (absDistance * 0.05)
        );

        // Non-active cards become darker.
        const brightness = distance === 0
          ? 1
          : Math.max(0.55, 0.82 - (absDistance * 0.07));

        const saturation = distance === 0
          ? 1
          : 0.8;

        card.style.setProperty('--card-x', `${x}px`);
        card.style.setProperty('--card-scale', scale);
        card.style.setProperty('--card-brightness', brightness);
        card.style.setProperty('--card-saturation', saturation);
        card.style.setProperty('--card-opacity', '1');

        // Active card always sits on top.
        // Cards become progressively further behind.
        card.style.zIndex = String(100 - absDistance);

        // Keep all cards tappable.
        card.style.pointerEvents = 'auto';

        card.setAttribute(
          'aria-current',
          distance === 0 ? 'true' : 'false'
        );
      });

      if (aboutCurrent) {
        aboutCurrent.textContent = activeAboutCard + 1;
      }
    }

    function nextAboutCard() {
      if (activeAboutCard < aboutCards.length - 1) {
        activeAboutCard += 1;
        updateAboutStack();
      }
    }

    function previousAboutCard() {
      if (activeAboutCard > 0) {
        activeAboutCard -= 1;
        updateAboutStack();
      }
    }

    // Swipe / drag support.
    aboutStack.addEventListener('pointerdown', event => {
      pointerStartX = event.clientX;
      pointerStartY = event.clientY;
    });

    aboutStack.addEventListener('pointerup', event => {
      if (pointerStartX === null || pointerStartY === null) return;

      const differenceX = event.clientX - pointerStartX;
      const differenceY = event.clientY - pointerStartY;

      const swipeThreshold = 40;
      const tapThreshold = 10;

      // SWIPE
      if (
        Math.abs(differenceX) > swipeThreshold &&
        Math.abs(differenceX) > Math.abs(differenceY)
      ) {
        if (differenceX < 0) {
          nextAboutCard();
        } else {
          previousAboutCard();
        }
      }

      // TAP
      else if (
        Math.abs(differenceX) < tapThreshold &&
        Math.abs(differenceY) < tapThreshold
      ) {
        const rect = aboutStack.getBoundingClientRect();
        const tapX = event.clientX - rect.left;

        if (tapX < rect.width / 2) {
          previousAboutCard();
        } else {
          nextAboutCard();
        }
      }

      pointerStartX = null;
      pointerStartY = null;
    });

    aboutStack.addEventListener('pointercancel', () => {
      pointerStartX = null;
      pointerStartY = null;
    });

    window.addEventListener('resize', updateAboutStack);

    updateAboutStack();
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

  const formatParagraphs = text => text
    .trim()
    .split(/\n\s*\n/)
    .map(p => `<p>${p.trim()}</p>`)
    .join('');

  document.querySelector('#director-message-en').innerHTML = formatParagraphs(content.directorMessage.en);
  document.querySelector('#director-message-zh').innerHTML = formatParagraphs(content.directorMessage.zh);

  // Directors' message — Read more / collapse
  const directorMessage = document.querySelector('#director-message');
  const messageReadMore = document.querySelector('#message-read-more');

  if (directorMessage && messageReadMore) {
    messageReadMore.addEventListener('click', () => {
      const expanded = directorMessage.classList.toggle('is-expanded');

      messageReadMore.setAttribute(
        'aria-expanded',
        String(expanded)
      );

      const en = messageReadMore.querySelector('.en');
      const zh = messageReadMore.querySelector('.zh');

      en.textContent = expanded ? 'Show less' : 'Read more';
      zh.textContent = expanded ? '收起' : '阅读全文';
    });
  }

  // Choreographers: photo + name + school only.
  const choreographerGrid = document.querySelector('#choreographer-grid');
  choreographerGrid.innerHTML = content.choreographers.map((person, index) => `
    <article class="profile-card">
      ${mediaMarkup(person.photo, `${person.name} portrait`, 'profile-photo', `Portrait ${index + 1}<br>编舞照片`)}
      <div class="profile-copy">
        <p class="profile-no">${pad(index + 1)}</p>
        <h3>${person.name}</h3>
      </div>
    </article>
  `).join('');

  // Programme: 26 dances, with landscape group photo merged into each card.
  // const programmeGrid = document.querySelector('#programme-grid');
  // programmeGrid.innerHTML = content.dances.map((dance, index) => `
  //   <button class="programme-card" data-dance-index="${index}" type="button" aria-label="Open dance ${dance.number}: ${dance.titleEn}">
  //     <span class="programme-visual">
  //       ${dance.photo
  //         ? `<span class="programme-photo has-image"><img src="${dance.photo}" alt="Group photo for ${dance.titleEn}"></span>`
  //         : `<span class="programme-photo media-placeholder"><span>Group photo<br>舞者合照</span></span>`}
  //       <strong class="programme-number">${pad(dance.number)}</strong>
  //       <span class="programme-open" aria-hidden="true">↗</span>
  //     </span>
  //     <span class="programme-caption">
  //       <span class="programme-title">
  //         <span class="en">${dance.titleEn}</span>
  //         <span class="zh" lang="zh-Hans">${dance.titleZh}</span>
  //       </span>
  //       <span class="programme-school">${schoolName(dance.school)}</span>
  //     </span>
  //   </button>
  // `).join('');

  // Programme: 26 dances, with landscape group photo merged into each card.
  const programmeGrid = document.querySelector('#programme-grid');
  programmeGrid.innerHTML = content.dances.map((dance, index) => {
    const cardHtml = `
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
    `;

    // Insert intermission banner directly after Dance 14
    if (dance.number === 14) {
      const intermissionHtml = `
        <div class="programme-intermission" role="separator" aria-label="Intermission">
          <span class="intermission-line"></span>
          <span class="intermission-text">
            <span class="en">Intermission</span>
            <span class="zh" lang="zh-Hans">中场休息</span>
          </span>
          <span class="intermission-line"></span>
        </div>
      `;
      return cardHtml + intermissionHtml;
    }

    return cardHtml;
  }).join('');

  // Behind-the-scenes staff.
  const creditsGrid = document.querySelector('#credits-grid');
  creditsGrid.innerHTML = content.credits.map((credit, index) => `
    <div class="credit-item">
      <div><small>${credit.role}</small><strong>${credit.name}</strong></div>
    </div>
  `).join('');

  // Footer schools and logo placeholders.
  const footerSchools = document.querySelector('#footer-schools');
  footerSchools.innerHTML = Object.entries(content.schools).map(([key, school]) => `
    <div class="footer-school ${key}">
      ${school.logo
        ? `<div class="school-logo has-image"><img src="${school.logo}" alt="${school.name} logo"></div>`
        : `<div class="school-logo logo-placeholder" aria-label="${school.name} logo placeholder"><span>${key === 'agape' ? 'A' : key === 'pink' ? 'P' : 'V'}</span></div>`}
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
  const modalChoreographer = document.querySelector('#modal-choreographer');
  const modalDescriptionEn = document.querySelector('#modal-description-en');
  const modalDescriptionZh = document.querySelector('#modal-description-zh');
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
    modalNumber.textContent = `${pad(dance.number)}.`;
    modalTitle.textContent = dance.titleEn;
    modalTitleZh.textContent = dance.titleZh;
    modalSchool.textContent = schoolName(dance.school);
    modalChoreographer.textContent = dance.choreographer || '';
    modalDescriptionEn.textContent = dance.descriptionEn || '';
    modalDescriptionZh.textContent = dance.descriptionZh || '';
    setModalPhoto(dance);

    const dancerText = dance.dancers.join(', ');
    modalDancers.textContent = dancerText;

    modalDancers.classList.toggle('is-long', dancerText.length > 200);
    modalDancers.classList.toggle('is-very-long', dancerText.length > 250);

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
