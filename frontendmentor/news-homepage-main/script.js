const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', (e) => {
    mobileMenu.classList.add('hidden')
})