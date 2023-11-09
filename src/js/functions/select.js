// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
  const countriesItems = document.querySelectorAll('.content-countries__column');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      let startArr=[];
      [...countriesItems].forEach((column, i) => {
        let item = [...column.children]
        column.innerHTML='';
        item.forEach((el, i) => {
          startArr.push(el);
    })
        startArr.forEach((el, i)=>{
          if (dropDownInput.value.toLowerCase() === el.children[0].innerText.toLowerCase()) {
            let searchElem = startArr.splice(i, 1);
            startArr.splice(0, 0, searchElem[0]);
          }
          for (let el of startArr) {
            [...countriesItems][0].appendChild(el)
          }
        })


  })
});
})
;

// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
  if (e.target !== dropDownBtn) {
    dropDownBtn.classList.remove('dropdown__button--active');
    dropDownList.classList.remove('dropdown__list--visible');
  }
});

// Нажатие на Tab или Escape. Закрыть дропдаун
document.addEventListener('keydown', function (e) {
  if (e.key === 'Tab' || e.key === 'Escape') {
    dropDownBtn.classList.remove('dropdown__button--active');
    dropDownList.classList.remove('dropdown__list--visible');
  }
});
})
;
