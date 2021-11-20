const d = document;
export default function shortCut() {
  let command = "";
  let count = 0;
  let count2 = 0
  const $gallery = d.querySelector(".black-gallery");

    window.addEventListener("keydown", function keyBoard(e) {
      count++;
      command += e.key.toLowerCase();
      if (!command.includes("shift")) {
        command = "";
      } else {
        command.toLowerCase();
        if (command === "shiftw") {
          $gallery.children[0].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command === "shifte") {
          $gallery.children[1].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command === "shifts") {
          $gallery.children[2].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command === "shiftd") {
          $gallery.children[3].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command === "shiftx") {
          $gallery.children[4].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command === "shiftc") {
          $gallery.children[5].classList.toggle("active-child");
          command = "";
          count = 0;
        } else if (command.includes("shift", 1)) {
          command = "";
          count = 0;
        } else if (count === 2) {
          if (
            command !== "shiftw" ||
            command !== "shifte" ||
            command !== "shifts" ||
            (command !== "shiftd") | (command !== "shiftx") ||
            command !== "shiftc"
          ) {
            count = 0;
            command = "";
            count2++
            if(count2===3){
              this.location.reload()
            }
    
          }
        }
      }
    });

}
