const refs = {
  openPopupBtn: document.querySelector(".open-popup"),
  closePopupBtn: document.querySelector(".close-popup"),
  modalBlock: document.querySelector(".background"),
};

const toggleModalVision = () => {
  refs.modalBlock.classList.toggle("is-visible");
};

refs.openPopupBtn.addEventListener("click", toggleModalVision);
refs.closePopupBtn.addEventListener("click", toggleModalVision);
