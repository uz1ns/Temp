document.querySelector(".bar_icon").addEventListener("click", ()=>{
    toggleMenuBtn();
});

function toggleMenuBtn(){
    let nav_menu = document.getElementsByClassName("nav__menu")[0];

    if(nav_menu.classList.contains("active") == false) {
        nav_menu.classList.add("active");
    } else {
        nav_menu.classList.remove("active");
    }

}