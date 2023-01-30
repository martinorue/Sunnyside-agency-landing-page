const toggleButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-open');
    toggleButton.setAttribute('aria-expanded', mobileMenu.classList.contains('is-open'));
});