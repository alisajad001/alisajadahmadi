const burgerWrapper = document.querySelector('.burger-wrapper');
const navbar = document.querySelector('.nav');
const sunIcon = document.querySelector('.fa-sun');
const body = document.body;

let menuOpen = false;

// Opens and closes navabar
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

// Toggles between dark mode and light mode
sunIcon.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    if (body.className.includes('darkMode')) {
        localStorage.setItem('theme', 'dark' )
    } else {
        localStorage.setItem('theme', 'light')
    };
});

// Updates the theme of the page based on user local storage
window.addEventListener('load', () => {
    let localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme === 'dark') {
        body.classList.add('darkMode')
    }
})