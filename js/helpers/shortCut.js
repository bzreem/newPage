const d = document;
export default function shortCut() {
  let command = "";
  let count = 0;
  let count2 = 0;
  const $galleryOne = d.querySelector(".black-gallery-first-child");
  const $infoOne = d.querySelector(".info-first-img");

  const $galleryTwo = d.querySelector(".black-gallery-second-child");
  const $infoTwo = d.querySelector(".info-second-img");

  const $galleryThree = d.querySelector(".black-gallery-third-child");
  const $infoThree = d.querySelector(".info-third-img");

  const $galleryFour = d.querySelector(".black-gallery-fourth-child");
  const $infoFour = d.querySelector(".info-fourth-img");


  const $galleryFive = d.querySelector(".black-gallery-fifth-child");
  const $infoFive = d.querySelector(".info-fifth-img")

  const $gallerySix = d.querySelector(".black-gallery-sixth-child");
  const $infoFSix = d.querySelector(".info-sixth-img")
  // window.addEventListener("keydown", function keyBoard(e) {
  //   count++;
  //   command += e.key.toLowerCase();
  //   if (!command.includes("shift")) {
  //     command = "";
  //   } else {
  //     command.toLowerCase();
  //     if (command === "shiftw") {
  //       $gallery.children[0].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command === "shifte") {
  //       $gallery.children[1].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command === "shifts") {
  //       $gallery.children[2].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command === "shiftd") {
  //       $gallery.children[3].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command === "shiftx") {
  //       $gallery.children[4].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command === "shiftc") {
  //       $gallery.children[5].classList.toggle("active-child");
  //       command = "";
  //       count = 0;
  //     } else if (command.includes("shift", 1)) {
  //       command = "";
  //       count = 0;
  //     } else if (count === 2) {
  //       if (
  //         command !== "shiftw" ||
  //         command !== "shifte" ||
  //         command !== "shifts" ||
  //         (command !== "shiftd") | (command !== "shiftx") ||
  //         command !== "shiftc"
  //       ) {
  //         count = 0;
  //         command = "";
  //         count2++
  //         if(count2===3){
  //           this.location.reload()
  //         }

  //       }
  //     }
  //   }
  // });

  document.addEventListener("click", (e) => {
    if (e.target === $galleryOne || e.target === $infoOne || e.target.matches(".info-first-img article h3") || e.target.matches(".info-first-img article p")) {
      document
        .querySelector(".black-gallery-first-child")
        .classList.toggle("active-rotate");
      $infoOne.classList.toggle("active-img-information");
    } else if (e.target === $galleryTwo || e.target === $infoTwo || e.target.matches(".info-second-img article h3") || e.target.matches(".info-second-img article p")) {
      $galleryTwo.classList.toggle("active-rotate");
      $infoTwo.classList.toggle("active-img-information");
    } else if (e.target === $galleryThree || e.target === $infoThree || e.target.matches(".info-third-img article h3") || e.target.matches(".info-third-img article p")) {
      $galleryThree.classList.toggle("active-rotate");
      $infoThree.classList.toggle("active-img-information");
    }else if (e.target === $galleryFour || e.target === $infoFour || e.target.matches(".info-fourth-img article h3") || e.target.matches(".info-fourth-img article p")) {
      $galleryFour.classList.toggle("active-rotate");
      $infoFour.classList.toggle("active-img-information");
    }else if (e.target === $galleryFive || e.target === $infoFive || e.target.matches(".info-fifth-img article h3") || e.target.matches(".info-fifth-img article p")) {
      $galleryFive.classList.toggle("active-rotate");
      $infoFive.classList.toggle("active-img-information");
    }else if (e.target === $gallerySix || e.target === $infoFSix || e.target.matches(".info-sixth-img article h3") || e.target.matches(".info-sixth-img article p")) {
      $gallerySix.classList.toggle("active-rotate");
      $infoFSix.classList.toggle("active-img-information");
    }
    else{
      console.log(e.target)
    }
  });
}
