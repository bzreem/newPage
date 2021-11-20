export default function scrolled() {
const d = document;
  const $positionFixed = d.querySelector(".position-fixed-img");
  const $h2 = d.querySelector(".position-fixed-img h2");
  const $p = d.querySelector(".container-position-fixed article p")
  const $img = d.querySelector(".container-position-fixed figure img")
  const spy = new IntersectionObserver(
    (e) => {
      e.forEach((el) => {
        if ((el.isIntersecting)) {
          $h2.classList.add("active-h2-translate");
          $p.classList.add("active-p-translate")
          $img.classList.add("active-img-translate")
        } else {
        }
      });
    },
    {
      threshold: 0.40,
    }
  );

  spy.observe(d.querySelector(".position-fixed-img"));
}
