shopperTypeButton = document.getElementById('shopperTypeButton');
shopperTypeButton.addEventListener("click", toggleArrow);
arrow = document.getElementById('arrow');
shopperTypeLinks = document.getElementById('shopper-type-links');

function toggleArrow() {
    arrow.classList.toggle('rotate-180');
    shopperTypeLinks.classList.toggle('flex');
    shopperTypeLinks.classList.toggle('hidden');
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

function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
 
    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  }