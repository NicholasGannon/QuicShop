shopperTypeButton = document.getElementById('shopperTypeButton');
shopperTypeButton.addEventListener("click", toggleArrow);
arrow = documnet.getElementById('arrow');

function toggleArrow() {
    arrow.classList.toggle('rotate-180');
}