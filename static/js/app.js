const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".header-nav-links");
/*burger*/
function navLinksToggle () {
    navLinks.classList.toggle("header-nav-links-active");
}
navBurger.addEventListener("click", navLinksToggle);

