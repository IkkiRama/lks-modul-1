let up = document.querySelector("#scroll-top")


const toTop = ()=> window.scrollTo({top:0,behavior:'smooth'})



window.addEventListener("scroll", () => {
    let scrollTop = document.querySelector("#scroll-top")
    let posisi = window.scrollY > 200;
    scrollTop.classList.toggle("show", posisi)
})