document.addEventListener("DOMContentLoaded", () => {
  const listButtons = document.querySelector(".menu-buttons");

  // ----------------------------------------------------------------
  listButtons.addEventListener("click", showContentBlock);
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
  // const showContentButton = document.querySelector(".show-content");
  // showContentButton.addEventListener("click", openBlockContent);

  // function openBlockContent(evt) {
  //   // вибираю активний блок, який відображається на екрані
  //   const currentContentBlock = document.querySelector(
  //     ".text-block:not(.hiden)"
  //   );
  //   // ----------------------------------------------------------------

  //   currentContentBlock.children[0].classList.toggle("open");
  //   currentContentBlock.classList.toggle("active");
  //   // ----------------------------------------------------------------
  //   currentContentBlock.classList.contains("active")
  //     ? (showContentButton.innerHTML = "Show Less")
  //     : (showContentButton.innerHTML = "Show More");
  // }
  // #################################################################
  // #################################################################
});
