const refs = {
    navContainer: document.querySelector('.nav-container'),
    menuBtn: document.querySelector('.menu-btn'),
}

refs.menuBtn.addEventListener('click', openMenu);

function openMenu () {
    refs.navContainer.classList.toggle('active');
    refs.menuBtn.classList.toggle('active');
}
