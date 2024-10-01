shopperTypeButton = document.getElementById('shopperTypeButton');
shopperTypeButton.addEventListener("click", toggleArrow);
arrow = document.getElementById('arrow');

function toggleArrow() {
    arrow.classList.toggle('rotate-180');
}