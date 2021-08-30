const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener('click', function()    {
const headerMenu = document.querySelector(".header-menu");

    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        headerMenu.classList.add("menu-fade-out");
        headerMenu.classList.remove("menu-fade-in");
    } else { // open hamburger
        btnHamburger.classList.add('open');
        headerMenu.classList.add("menu-fade-in");
        headerMenu.classList.remove("menu-fade-out");
    }
});