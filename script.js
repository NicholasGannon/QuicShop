shopperTypeButton = document.getElementById('shopperTypeButton');
shopperTypeButton.addEventListener("click", toggleArrow);
arrow = document.getElementById('arrow');

function toggleArrow() {
    arrow.classList.toggle('rotate-180');
}

main = document.getElementById('main');
sidebar = document.getElementById('sidebar');
hamburger = document.getElementById('hamburger');

sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', toggleSidebar);
});

hamburger.addEventListener('click', toggleSidebar);
window.addEventListener('resize', handleResize);

function toggleSidebar() {
    sidebar.classList.toggle('absolute');
    sidebar.classList.toggle('hidden');
    main.classList.toggle('brightness-50');
}

function handleResize() {
    if (window.innerWidth > 1024) {
        if (!sidebar.classList.contains('hidden')) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('absolute');
            main.classList.remove('brightness-50');
        }
    }
}