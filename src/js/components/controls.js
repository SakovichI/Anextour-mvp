const btnControl = document.querySelectorAll('[data-btn]');

btnControl.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    const path = btn.getAttribute('data-btn');
    const menu = document.querySelector(`[data-menu="${path}"]`);
    menu.classList.toggle('active');
    if(path === 'sort'){
      const sortItem = menu.querySelectorAll('.sort__item');
      const sortValue = document.querySelector('.sort__text--value');
      sortItem.forEach(item =>{
        item.addEventListener('click', ()=>{
          menu.classList.remove('active');
          sortValue.innerHTML = item.innerHTML;
        })
      })
    }
  })
})
