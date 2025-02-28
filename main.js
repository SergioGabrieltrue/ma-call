const btnMenu = document.getElementById("ham-button")
const btnMenuIcon = btnMenu.firstElementChild
const menu = document.getElementById("main_nav")
const modalCards = Array.from(document.getElementsByClassName("modal-card"))


btnMenu.classList.add("hamburger-button-js-enabled")

function closeMenu() {
    btnMenu.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
    menu.classList.add("menu-closed")
    changeIcon()
}

function openMenu() {
    menu.setAttribute("aria-hidden", "false")
    btnMenu.setAttribute("aria-expanded", "true")
    menu.classList.remove("menu-closed")
}

function changeIcon() {
    btnMenuIcon.classList.toggle("fa-bars")

    setTimeout(() => {
        btnMenuIcon.classList.toggle("fa-xmark")
    }, 1)
}

closeMenu()

function toggleMenu() {
    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false

    document.removeEventListener("click", closeMenu)

    if (expanded) {
        menu.classList.add("menu-closed")
        changeIcon()
    }
    else {
        menu.classList.remove("menu-closed")
        setTimeout(() => document.addEventListener("click", closeMenu), 1)
        changeIcon()
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)

}


btnMenu.addEventListener("click", toggleMenu)

const mediaQuery = window.matchMedia("(min-width:48.5rem)")

function handleMediaQueryChange(e) {
    if (e.matches) {
        openMenu()
    }
    else {
        closeMenu()
    }

}

mediaQuery.addEventListener("change", handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)

function textAppear(card) {
    let modalText = card.getElementsByClassName("modal-text")[0]
    return modalText
}

modalCards.forEach(card => {

    let modalText = textAppear(card)
    let modalTitle = modalText.firstElementChild
    let modalParagraph = modalText.lastElementChild
    let timeOutId = null
    
    card.addEventListener("mouseenter", function(e) {
        card.classList.add("hover-effect");

        if (modalText) {                  
            modalTitle.classList.add("move-text")        

            timeOutId = setTimeout(() => {
                modalParagraph.classList.add("move-text")
                modalText.style.backgroundColor = "rgba(139, 0, 0, 0.7)"
            }, 400)
           
        }
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("hover-effect");
        if(modalText){
            clearTimeout(timeOutId)
            modalText.querySelectorAll(".move-text").forEach(el => el.classList.remove("move-text"));
            modalText.style.backgroundColor = "transparent"     
        }
    });
});



