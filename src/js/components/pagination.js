const pagination = document.querySelector('[data-pagination]');
const maxLength = 8;
if(pagination){
  const path = pagination.getAttribute('data-pagination');
  const list = document.querySelector(`[data-list="${path}"]`);
  const item= list.querySelectorAll(`[data-item="${path}"]`)
  const btnPrev = pagination.querySelector('.pagination__btn--prev');
  const btnNext = pagination.querySelector('.pagination__btn--next');
  const pageCount = pagination.querySelector('.pagination__input');
  const pageCountAll = pagination.querySelector('.pagination__amount');


  btnPrev.addEventListener('click', ()=>{
    if(pageCount.value <= 1){
      pageCount.value = 1
    }else {
      if(pageCount.value <= 2){
        btnPrev.classList.remove('active')
      }
      --pageCount.value
      btnNext.classList.remove('disable');
    }
  })
  btnNext.addEventListener('click', ()=>{
    if(pageCount.value >= parseInt(pageCountAll.innerText.slice(2))){
      pageCount.value = parseInt(pageCountAll.innerText.slice(2))
    }else {
      btnPrev.classList.add('active')
      if(pageCount.value >= (parseInt(pageCountAll.innerText.slice(2))-1)){
        btnNext.classList.add('disable');
      }
      ++pageCount.value
    }

  })

}
