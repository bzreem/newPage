export default function poweredTransition(){
    const d = document;
    const $PjavaScript = d.querySelector(".align-javascript p")
    const $PHtml = d.querySelector(".html-styles-bg p")
    const $PCss = d.querySelector(".css-styles-bg p")


    const spy = new IntersectionObserver(
        (e) => {
          e.forEach((el) => {
            if ((el.isIntersecting)) {
                $PHtml.classList.add("active-html")
                $PCss.classList.add("active-css")
                $PjavaScript.classList.add("active-js")
            } else {
            }
          });
        },
        {
          threshold: 0.40,
        }
      );
    
      spy.observe(d.querySelector(".section-powered"));
}