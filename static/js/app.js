const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".header-nav-links");

const modalWrapper = document.querySelector(".modal-wrapper");
const openButton = document.querySelector(".modal-open-button");
const closeButton = document.querySelector(".modal-close-button");


/*burger*/
function navLinksToggle () {
    navLinks.classList.toggle("header-nav-links-active");
}
navBurger.addEventListener("click", navLinksToggle);

/*modal*/

function modalToggle () {
    modalWrapper.classList.toggle("modal-active")
}

window.addEventListener('click', (e) => {
    if(e.target == document.querySelector(".modal-wrapper")) {
        modalToggle();
    }
})
openButton.addEventListener("click", modalToggle);
closeButton.addEventListener("click", modalToggle);