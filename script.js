shopperTypeButton = document.getElementById('shopperTypeButton');
shopperTypeButton.addEventListener("click", toggleArrow);
arrow = document.getElementById('arrow');

function toggleArrow() {
    arrow.classList.toggle('rotate-180');
}

main = document.getElementById('main');
sidebar = document.getElementById('sidebar');
hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle('absolute');
    sidebar.classList.toggle('hidden');
    main.classList.toggle('brightness-50');
}