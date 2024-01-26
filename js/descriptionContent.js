const listButtons = document.querySelector(".menu-buttons");
const showContentButton = document.querySelector(".show-content");

// ----------------------------------------------------------------
listButtons.addEventListener("click", showContentBlock);
showContentButton.addEventListener("click", openBlockContent);
// ----------------------------------------------------------------

function showContentBlock(evt) {
  //
  const targetButton = evt.target;
  const currentActive = document.querySelector(".description-active");

  if (!targetButton.classList.contains("description-button")) {
    return;
  }
  // togle activity
  if (targetButton !== currentActive) {
    currentActive.classList.remove("description-active");
    targetButton.classList.add("description-active");
  }
  // take all blocks and add hiden class
  const allBlocks = document.querySelectorAll(".text-block");
  allBlocks.forEach((block) => block.classList.add("hiden"));
  // take second class like key for block
  const targetBlock = targetButton.classList[1];

  //find block with id same like key
  // remove class hiden
  const visibleBlock = document.getElementById(targetBlock);
  visibleBlock.classList.remove("hiden");
}

// #################################################################
// #################################################################

function openBlockContent(evt) {
  // take button show more
  // take current container without hiden class
  const currentContentBlock = document.querySelector(".text-block:not(.hiden)");
  console.log(currentContentBlock);
  // ----------------------------------------------------------------
  // console.log(currentContentBlock.children[0]);
  // const targetElement = currentContentBlock.children[0];
  // targetElement.classList.toggle("open");
  // console.log(targetElement.style.height);
  // if (targetElement.style.height) {
  //   //   // targetElement.style.height = targetElement.scrollHeight + "px";
  //   showContentButton.innerHTML = "Show Less";
  //   targetElement.style.height = targetElement.scrollHeight + "px";
  // } else {
  //   showContentButton.innerHTML = "Show More";
  //   targetElement.style.height = "60px";
  //   // targetElement.style.height = targetElement.scrollHeight + "px";
  // }
}

// #################################################################
// #################################################################

var openButton = document.getElementsByClassName("show-content");
var i;

openButton.addEventListener("click", () => {});

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
