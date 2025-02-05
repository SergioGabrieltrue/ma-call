const btnMenu = document.getElementById("ham-button")
const btnMenuIcon = btnMenu.firstElementChild
const menu = document.getElementById("main_nav")


btnMenu.classList.add("hamburger-button-js-enabled")

function closeMenu(){
    btnMenu.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
    menu.classList.add("menu-closed")
    changeIcon()
}

function openMenu(){
    menu.setAttribute("aria-hidden", "false")
    btnMenu.setAttribute("aria-expanded", "true")
    menu.classList.remove("menu-closed")
}

function changeIcon(){
    btnMenuIcon.classList.toggle("fa-bars")

    setTimeout(() => {
        btnMenuIcon.classList.toggle("fa-xmark")
    },1)
}

closeMenu()

function toggleMenu(){
    let expanded = this.getAttribute("aria-expanded") === "true"? true : false

    document.removeEventListener("click", closeMenu)

    if(expanded){
        menu.classList.add("menu-closed")
        changeIcon()
    }
    else{
        menu.classList.remove("menu-closed")
        setTimeout(() => document.addEventListener("click", closeMenu), 1)
        changeIcon()
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)

}


btnMenu.addEventListener("click", toggleMenu)

const mediaQuery = window.matchMedia("(min-width:48.5rem)")

function handleMediaQueryChange(e){
    if(e.matches){
        openMenu()
    }
    else{
        closeMenu()
    }

}

mediaQuery.addEventListener("change",  handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)