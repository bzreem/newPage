export default function scrollSpy() {
  const d = document;
  const $article = d.querySelectorAll(".cards article");
  const spy = new IntersectionObserver(
    (e) => {
      e.forEach((el) => {
        if (el.isIntersecting) {
          $article.forEach((ell) => {
            ell.classList.add("article-opacity-active");
          });
        }else{
            $article.forEach((ell) => {
                ell.classList.remove("article-opacity-active");
              });
        }
      });
    },
    {
      threshold: 0.20,
    }
  );

  spy.observe(d.querySelector(".cards"));
}
