import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);
    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный номер телефона',
        });
      }
    }



  }

  const validation = new JustValidate(selector, {
    errorLabelStyle: {
      color: '#EC1C24',
    },
    validateBeforeSubmitting: true,
  });

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          const modal = document.querySelector('.success-modal');
          const modalContainer = document.querySelector('.success-modal__container');
          const modalContent = document.querySelector('.success-modal__content');
          if(ev.target.getAttribute('data-form') !== null){
            modalContent.innerHTML = '';
            const content = `
<svg class="success-modal__icon" fill="none" height="39" viewBox="0 0 39 39" width="39"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.541 35.1735C13.4103 35.1735 13.2818 35.1393 13.1684 35.0743C13.0549 35.0094 12.9604 34.9159 12.8942 34.8031C10.0908 30.0271 2.62045 19.8623 2.5453 19.7602C2.43856 19.6151 2.3876 19.4364 2.40173 19.2569C2.41586 19.0773 2.49413 18.9088 2.62225 18.7822L4.91859 16.5131C5.04335 16.3898 5.20737 16.3142 5.38213 16.2993C5.55689 16.2844 5.73134 16.3312 5.87514 16.4317L13.3847 21.6754C18.3773 15.2617 23.0169 10.8354 26.0664 8.22732C29.4845 5.3036 31.6577 3.98983 31.7486 3.93508C31.8651 3.8651 31.9986 3.82813 32.1345 3.82813H35.8494C36.0015 3.8281 36.1499 3.87429 36.2751 3.96058C36.4003 4.04686 36.4964 4.16916 36.5505 4.31126C36.6046 4.45337 36.6142 4.60856 36.5781 4.75626C36.542 4.90396 36.4618 5.03719 36.3482 5.1383C30.8409 10.0433 25.1151 17.8368 21.2816 23.5107C17.1144 29.6783 14.2215 34.7442 14.1928 34.7947C14.1277 34.909 14.0336 35.0041 13.9201 35.0706C13.8066 35.1371 13.6776 35.1725 13.546 35.1734L13.541 35.1735Z"
          fill="#463998"/>
      </svg>
      <div class="success-modal__title">
        отзыв успешно<br>
        <span class="success-modal__title success-modal__title--italic">отправлен</span>
      </div>`
            modalContent.insertAdjacentHTML('beforeend', content)
          }else{
            modalContent.innerHTML = '';
            const content = `
<svg class="success-modal__icon" fill="none" height="39" viewBox="0 0 39 39" width="39"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.541 35.1735C13.4103 35.1735 13.2818 35.1393 13.1684 35.0743C13.0549 35.0094 12.9604 34.9159 12.8942 34.8031C10.0908 30.0271 2.62045 19.8623 2.5453 19.7602C2.43856 19.6151 2.3876 19.4364 2.40173 19.2569C2.41586 19.0773 2.49413 18.9088 2.62225 18.7822L4.91859 16.5131C5.04335 16.3898 5.20737 16.3142 5.38213 16.2993C5.55689 16.2844 5.73134 16.3312 5.87514 16.4317L13.3847 21.6754C18.3773 15.2617 23.0169 10.8354 26.0664 8.22732C29.4845 5.3036 31.6577 3.98983 31.7486 3.93508C31.8651 3.8651 31.9986 3.82813 32.1345 3.82813H35.8494C36.0015 3.8281 36.1499 3.87429 36.2751 3.96058C36.4003 4.04686 36.4964 4.16916 36.5505 4.31126C36.6046 4.45337 36.6142 4.60856 36.5781 4.75626C36.542 4.90396 36.4618 5.03719 36.3482 5.1383C30.8409 10.0433 25.1151 17.8368 21.2816 23.5107C17.1144 29.6783 14.2215 34.7442 14.1928 34.7947C14.1277 34.909 14.0336 35.0041 13.9201 35.0706C13.8066 35.1371 13.6776 35.1725 13.546 35.1734L13.541 35.1735Z"
          fill="#463998"/>
      </svg>
      <div class="success-modal__title">
        заявка успешно<br>
        <span class="success-modal__title success-modal__title--italic">отправлена</span>
      </div>`
            modalContent.insertAdjacentHTML('beforeend', content)
          }
          modal.classList.add('open');
          modalContainer.classList.add('open');
          setTimeout(()=>{
            modal.classList.remove('open');
            modalContainer.classList.remove('open');
          }, 1500)
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    ev.target.reset();
  })

};
