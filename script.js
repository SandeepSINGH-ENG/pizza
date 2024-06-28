const mobileMenu = document.getElementById('menu');
const mobileMenuClose = document.getElementById('close');
const nav = document.getElementById('mynav');

mobileMenu.addEventListener('click', () => {
    nav.classList.add('mobile-active');
});
mobileMenuClose.addEventListener('click', () => {
    nav.classList.remove('mobile-active');
});

function submenu(per) {
    sub = document.getElementById(per)
    sub.classList.toggle('active');
}