const hamburgerIcon = document.querySelector(".hamburger-icon");
const xIcon = document.querySelector(".x-icon");
const dropDown = document.querySelector(".nav-list");
const firstNavLink = document.querySelector("#nav-first-link");
const secondNavLink = document.querySelector("#nav-second-link");
const thirdNavLink = document.querySelector("#nav-third-link");
const fourthNavLink = document.querySelector("#nav-fourth-link");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
});

xIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
});

firstNavLink.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
})

secondNavLink.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
})

thirdNavLink.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
})

fourthNavLink.addEventListener("click", () => {
    hamburgerIcon.classList.toggle('active');
    xIcon.classList.toggle('active');
    dropDown.classList.toggle('active');
})