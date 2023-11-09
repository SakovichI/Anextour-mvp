const btnsTooltip=document.querySelectorAll('.tooltip-map__btn');
if(btnsTooltip){
  btnsTooltip.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
      const path = btn.getAttribute('aria-describedby');
      const tooltipContent = document.querySelector(`#${path}`)
      console.log(path)
      tooltipContent.classList.toggle('visually-hidden')
    })
  })
}
