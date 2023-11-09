const btnLink = document.querySelectorAll('.header-control__link');
if(btnLink){
  btnLink.forEach(el =>{
    el.addEventListener('click', (e)=>{
      const wrapLink = el.querySelector('.header-control__link-wrap');
      const link = wrapLink.querySelectorAll('.header-control__link-tel');
      wrapLink.classList.toggle('active');
    })
  })
}

