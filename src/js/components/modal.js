const modalBtns = document.querySelectorAll("[data-path]");
const modals = document.querySelectorAll(".modal");
modalBtns.forEach((el) => {
  el.addEventListener("click", () => {
    let path = el.getAttribute("data-path");
    const modal = document.querySelector(`[data-target="${path}"]`);
    const modalContent = modal.querySelector(".modal__container");
    modalContent.classList.add("open");
    modal.classList.add("open");
    disableScroll();
    if (modal.querySelector(".modal__close")) {
      const btnClose = modal.querySelectorAll(".modal__close");
      btnClose.forEach(el => {
        el.addEventListener("click", function (e) {
          const modalEl = el.closest('.modal');
          const modalElCont = el.closest('.modal__container');
          modalElCont.classList.remove("open");
          modalEl.classList.remove("open");
          enableScroll();
        })

      });
    }
    modals.forEach(el => {
      el.addEventListener("click", function (e) {
        if (e.target === el) {
          el.classList.remove("open");
          enableScroll();
        }
      });
    })
  });
})
function disableScroll() {
  let pagePosition = window.scrollY;
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + "px";
  const lockPaddingValue =
    window.innerWidth -
    document.querySelector(".page__body").offsetWidth +
    "px";
  document.body.style.paddingRight = lockPaddingValue;
  document.body.classList.add("disable-scroll");
}

function enableScroll() {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = "auto";
  document.body.classList.remove("disable-scroll");
  document.body.style.paddingRight = null;
  window.scrollTo({
    top: pagePosition,
    left: 0,
  });
  document.body.removeAttribute("data-position");
}
