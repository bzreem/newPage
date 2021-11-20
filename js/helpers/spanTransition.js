export default function spanTransition(){
    const d = document;
    const $footer = d.querySelector(".footer-information")
    const $p = d.querySelector(".container-footer-information article p")
    d.addEventListener("click", e=>{
        if(e.target.matches(".container-footer-information article span")){
            if(!$footer.classList.contains("span-active")){
                $footer.classList.add("span-active")
                $p.classList.add("p-active")
            }else{
                $footer.classList.remove("span-active")
                $p.classList.remove("p-active")
            }
        }
    })
}