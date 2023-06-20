const sunIcon = document.querySelector('.fa-sun');
const skillIcons = document.querySelectorAll('.fa-brands');
const body = document.body;


// Toggles between dark mode and light mode
sunIcon.addEventListener('click', () => {
    body.classList.toggle('darkMode');

    if (body.className.includes('darkMode')) {
        localStorage.setItem('theme', 'dark');
        sunIcon.className = 'fa-solid fa-moon';
    } else {
        localStorage.setItem('theme', 'light');
        sunIcon.className = 'fa-solid fa-sun';
    };
});

// Updates the theme of the page based on user local storage
window.addEventListener('load', () => {
    let localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme === 'dark') {
        body.classList.add('darkMode')
    }
})

// Hover effect on Icons
skillIcons.forEach((skillIcon) => {
    skillIcon.addEventListener('mouseover', () => {
        skillIcon.style.transform = 'scale(1.2)';
    });
    
    skillIcon.addEventListener('mouseout', () => {
        skillIcon.style.transform = 'scale(1)';
    })
});