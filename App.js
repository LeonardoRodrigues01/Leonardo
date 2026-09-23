'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    
    document.body.classList.toggle('Dark-theme');

    const classname = document.body.className;

    if (classname.includes('Dark-theme')) {
        this.textContent = 'Light ☀️';
    } else {
        this.textContent = 'Dark 🌙';
    }

    console.log('Current class name: ' + classname);
});