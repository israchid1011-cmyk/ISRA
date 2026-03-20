// Mobile menu
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
nav.classList.toggle('active');
});

// Scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
cards.forEach(card => {
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
card.classList.add('visible');
}
});
});