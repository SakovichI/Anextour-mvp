const accordionTitle = document.querySelectorAll('.accordion__title');
const btnElse = document.querySelectorAll('.section-filter__title-else')

if (accordionTitle) {
  accordionTitle.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', (e) => {
      const accordion = accordionTitle.closest('.accordion')
      const title = accordion.querySelector('.accordion__title')
      const content = accordion.querySelector('.accordion__content');
      const icon = accordion.querySelector('.accordion__icon');
      content.classList.toggle('open-main')
      content.style.height=content.scrollHeight +'px';
      if (!content.classList.contains('open-main')) {
        accordion.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        icon.classList.remove('accordion__icon--active');
        content.style.height = 0
      } else {
        accordion.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        icon.classList.add('accordion__icon--active');
        content.style.height=content.scrollHeight +'px';
      }

    });

  })
}
if (btnElse) {
  btnElse.forEach(el => {
    el.addEventListener('click', () => {
      const content = el.closest('.accordion__content')
      const contentElse = content.querySelector('.section-filter__content--else')
      const iconElse = el.querySelector('.accordion__icon')
      contentElse.classList.toggle('open-main')
      if (contentElse.classList.contains('open-main')) {
        iconElse.classList.add('accordion__icon--active');
        contentElse.style.height='100%';
      } else {
        iconElse.classList.remove('accordion__icon--active');
        contentElse.style.height = 0
      }

    })
  });

}
