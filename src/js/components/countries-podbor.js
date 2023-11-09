
window.addEventListener('load', () => {
  const countriesLink = document.querySelectorAll('[data-countries]');
  if (countriesLink) {
    setTimeout(() => {
      const countriesContent = document.querySelector('.TVCountrySelect')
      const countriesMain = countriesContent.querySelector('.TVMainSelect')
      const btnSearch = document.querySelector('.TVSearchButton');
      countriesLink.forEach(el => {
        el.addEventListener('click', (e) => {
          let path = el.innerText;
          countriesMain.click();
          const tooltip = document.querySelectorAll('.TVCheckBox')
          tooltip.forEach(el => {
            if (el.innerText === 'Только чартерные рейсы') {
              if (el.classList.contains('TVChecked')) {
                el.click()
              }
            }
            if (el.innerText === 'Только чартер') {
              if (el.classList.contains('TVChecked')) {
                el.click()
              }
            }
          })
            setTimeout(()=>{
              const countriesBtn = document.querySelectorAll('.TVComplexListItemContent');
              countriesBtn.forEach(el => {
                if (el.innerText === path) {
                  el.click();
                }
            })
          }, 200)
            setTimeout(()=>{
              btnSearch.click()
            }, 500)
        })
      })
    }, 1000)

  }
})

window.addEventListener('load', () => {
  const countriesLink = document.querySelectorAll('.content-countries__link');
  if (countriesLink) {
    setTimeout(() => {
      const countriesContent = document.querySelector('.TVCountrySelect')
      const countriesMain = countriesContent.querySelector('.TVMainSelect')
      const btnSearch = document.querySelector('.TVSearchButton');
      const arrCountries = [];
      // const tooltip = document.querySelectorAll('.TVCheckBox')
      // tooltip.forEach(el => {
      //   if (el.innerText === 'Только чартерные рейсы') {
      //     if (el.classList.contains('TVChecked')) {
      //       el.click()
      //     }
      //   }
      //   if (el.innerText === 'Только чартер') {
      //     if (el.classList.contains('TVChecked')) {
      //       el.click()
      //     }
      //   }
      // })
      // countriesMain.click();
      async function getArrayCountries(){
        const countriesBtn = document.querySelectorAll('.TVComplexListItemContent');
        await countriesBtn.forEach((el, i)  => {
          arrCountries.push(el.innerText);
          if(i === countriesBtn.length-1){
            el.click();
          }
        })
        await countriesLink.forEach(ourCountry => {
          let path = ourCountry.querySelector('.content-countries__name').innerText;
          if(!arrCountries.includes(path)){
            ourCountry.classList.add('disable')
          }
        })
      }
      //getArrayCountries();


      countriesLink.forEach(el => {
        el.addEventListener('click', (e) => {
          // let path = el.querySelector('.content-countries__name').innerText;
          // countriesMain.click();
          // const tooltip = document.querySelectorAll('.TVCheckBox')
          // tooltip.forEach(el => {
          //   if (el.innerText === 'Только чартерные рейсы') {
          //     if (el.classList.contains('TVChecked')) {
          //       el.click()
          //     }
          //   }
          //   if (el.innerText === 'Только чартер') {
          //     if (el.classList.contains('TVChecked')) {
          //       el.click()
          //     }
          //   }
          // })
          // setTimeout(()=>{
          //   const countriesBtn = document.querySelectorAll('.TVComplexListItemContent');
          //   countriesBtn.forEach(el => {
          //     if (el.innerText === path) {
          //       el.click();
          //     }
          //   })
          // }, 200)
          setTimeout(()=>{
            btnSearch.click()
          }, 500)
        })
      })
    }, 1000)

  }
})
