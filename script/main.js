const burgerWrapper = document.querySelector('.burger-wrapper');
const navbar = document.querySelector('.nav');
let menuOpen = false;

burgerWrapper.addEventListener('click', () => {
    if (!menuOpen) {
        burgerWrapper.classList.add('active');
        navbar.style.display = 'block';
        menuOpen = true;
    } else {
        burgerWrapper.classList.remove('active');
        navbar.style.display = 'none';
        menuOpen = false;
    }
});