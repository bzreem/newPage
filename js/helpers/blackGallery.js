export default function blackGallery(){
    const d = document;
    const $article = d.querySelectorAll(".black-gallery");
    const $blackArticleBlack = d.querySelectorAll(".black-gallery article")
    const spy = new IntersectionObserver(
      (e) => {
        e.forEach((el) => {
          if (el.isIntersecting) {
            $article.forEach((ell) => {
               ell.classList.add("active-black");
               $blackArticleBlack.forEach(el=>{
                el.classList.add("active-article-black")
               })
            
            });
          }else{
              $article.forEach((ell) => {
                ell.classList.remove("active-black");
                $blackArticleBlack.forEach(el=>{
                    el.classList.remove("active-article-black")
                   })
                });
          }
        });
      },
      {
        threshold: 0.50,
      }
    );
  
    spy.observe(d.querySelector(".black-gallery"));
}