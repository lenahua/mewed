const bar = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu")

bar.addEventListener("click", ()=>{
    console.log("ok");
    menu.classList.toggle("showMenu")
})