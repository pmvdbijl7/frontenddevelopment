/* Code to open the nav menu */
var menuBtn = document.querySelector("nav button");
menuBtn.addEventListener("click", openMenu);

function openMenu() {
    var navigation = document.querySelector("nav ul");
    navigation.classList.toggle("show-nav");
}