const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('block');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);
