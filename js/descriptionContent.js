const listButtons = document.querySelector(".menu-buttons");

listButtons.addEventListener("click", buttonClick);

function buttonClick(evt) {
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
  const targetBlock = evt.target.classList[1];

  //find block with id same like key
  // remove class hiden
  document.getElementById(targetBlock).classList.remove("hiden");
}
