export default function transform() {
  const d = document;
  const $h1 = d.querySelector(".cover h1");
  const $p = d.querySelector(".cover article p");

  $h1.classList.add("h1-active");
  $p.classList.add("p-active");
}
