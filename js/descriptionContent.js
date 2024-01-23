const general = document.getElementById("general");

const isExist = general.classList.contains("hiden");
if (isExist) {
  general.classList.remove("hiden");
}
// ----------------------------------------------------------------
const activeButton = document.getElementById("");

console.log("End: ", general.classList);

function showText(textId) {
  // Сховати всі тексти перед показом нового
  const allTexts = document.querySelectorAll('div[id^="text"]');
  allTexts.forEach((text) => {
    text.classList.add("hidden");
  });

  // Показати вибраний текст
  const selectedText = document.getElementById(textId);
  selectedText.classList.remove("hidden");
}
// при натисканны на кнопку проходить евент який видаляэ клас із блоку
