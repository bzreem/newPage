import transform from "./helpers/transform.js";
import scrollSpy from "./helpers/scrollSpy.js";
import spanTransition from "./helpers/spanTransition.js";
import blackGallery from "./helpers/blackGallery.js";
import shortCut from "./helpers/shortCut.js";
import scrolled from "./helpers/srolled.js";
import nasaInformation from "./helpers/nasaInformation.js";
import poweredTransition from "./helpers/poweredTransition.js";
import mediaController from "./helpers/mediaController.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  transform();
  scrollSpy();
  spanTransition();
  blackGallery();
  shortCut();
  scrolled()
  nasaInformation()
  poweredTransition()
  mediaController()
});
