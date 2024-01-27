document.addEventListener("DOMContentLoaded", () => {
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
    // вибираю активний блок, який відображається на екрані
    const currentContentBlock = document.querySelector(
      ".text-block:not(.hiden)"
    );
    // ----------------------------------------------------------------
    // беру поточне значення висоти блоку
    const styles = window.getComputedStyle(currentContentBlock);
    const height = styles.getPropertyValue("height");

    if (height === "70px") {
      // якщо висота 70 при клікі на кнопку
      //додаю клас open до блоку контента content
      // змінюю контент кнопки на "Show Less"
      // ----------------------------------------
      currentContentBlock.children[0].classList.add("open");
      showContentButton.innerHTML = "Show Less";
      // ----------------------------------------------------------------
      // ----------------------------------------------------------------
      if (currentContentBlock.children[0].classList.contains("open")) {
        console.log(currentContentBlock.children[0].classList);
        currentContentBlock.classList.add("active");
      }
      currentContentBlock.style.height = "auto";
    } else {
      // якщо висотабільша за 70 при клікі на кнопку
      //видаляю клас "open" до блоку контента "content"
      // змінюю контент кнопки на "Show More"
      // -----------------------------------------
      currentContentBlock.children[0].classList.remove("open");
      showContentButton.innerHTML = "Show More";
      // ----------------------------------------------------------------
      // ----------------------------------------------------------------
      currentContentBlock.classList.remove("active");
      currentContentBlock.style.height = "70px";
    }
  }

  // #################################################################
  // #################################################################

  //   var openButton = document.getElementsByClassName("show-content");
  //   var i;

  //   openButton.addEventListener("click", () => {});

  //   for (i = 0; i < acc.length; i++) {
  //     acc[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //         panel.style.maxHeight = null;
  //       } else {
  //         panel.style.maxHeight = panel.scrollHeight + "px";
  //       }
  //     });
  //   }
});
