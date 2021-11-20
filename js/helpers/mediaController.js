export default function mediaController(){
    const d = document;
    const $span1 = document.querySelector(".first-span")
    const $span2 = document.querySelector(".second-span")
    const $article = document.querySelector(".information-title")
    const $figureVideo = document.querySelector(".figure-video")

    const spy = new IntersectionObserver(
        (e) => {
          e.forEach((el) => {
            if ((el.isIntersecting)) {
                $span1.classList.add("first-active-span")
                setTimeout(()=>{
                    $span2.classList.add("second-active-span")
                },500)

                setTimeout(()=>{
                    $article.classList.add("active-title-video")
                    $figureVideo.classList.add("active-figure-video")
                },1000)
            } else {
            }
          });
        },
        {
          threshold: 0.40,
        }
      );
    
      spy.observe(d.querySelector(".section-video"));
}