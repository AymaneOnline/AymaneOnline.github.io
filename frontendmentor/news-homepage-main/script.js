const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.remove('hidden');
    overlay.classList.add('show-overlay');
});

closeMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.add('hidden')
    overlay.classList.remove('show-overlay');
})