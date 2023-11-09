import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: 'input[name="Имя"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: 'required',
        errorMessage: 'Зполните номер телефона',
      }
    ]
  },
];
const rulesModal = [
  {
    ruleSelector: 'input[name="Имя"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: 'required',
        errorMessage: 'Зполните номер телефона',
      }
    ]
  },
];
const rulesMain = [
  {
    ruleSelector: 'input[name="Имя"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотя бы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: 'required',
        errorMessage: 'Зполните номер телефона',
      }
    ]
  },
];
const rulesEmail = [
  {
    ruleSelector: 'input[name="E-mail"]',
    rules: [
      {
        rule: 'email',
        errorMessage: 'Введите корректный E-mail',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
];
const rulesReviews = [
  {
    ruleSelector: 'input[name="Имя"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотябы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[name="Откуда вы"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотябы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[name="Куда летали"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите хотябы 3 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: 'input[type="date"]',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
  {
    ruleSelector: '.reviews-form__textarea',
    rules: [
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Введите хотябы 10 символа',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните поле',
      }
    ]
  },
];
const afterForm = () => {
  console.log('send')
};
validateForms('.callback-form', rulesModal, afterForm);
validateForms('#main-mailing', rulesMain, afterForm);
validateForms('#footer-mailing', rules, afterForm);
validateForms('.form-email', rulesEmail, afterForm);
validateForms('.reviews-form', rulesReviews, afterForm);
