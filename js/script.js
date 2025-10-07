'use strict';

const navBar = document.querySelector('[data-navbar]');
const navToggler = document.querySelector('[data-nav-toggler]');

navToggler.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navToggler.classList.toggle('active');
});

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', e => {
    header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
}); 

const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});