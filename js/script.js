const openPopupBtn = document.querySelector(".open-popup");
const closePopupBtn = document.querySelector(".close-popup");

openPopupBtn.addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

closePopupBtn.addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
