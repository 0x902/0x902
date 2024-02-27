// DOM elements
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const collapseMenuBtn = document.querySelector(".collapse-menu-btn");
const floatingEmailBtn = document.querySelector(".floating-email");

console.log("Why you looking at the console?? 🤨");

feather.replace({ class: "social-icon", "stroke-width": 1.15 });

// Change the cursor to the global custom cursor
document.body.style.cursor = 'url("assets/cursor.png"), auto';

// mobile menu functionality
mobileMenuBtn.addEventListener("click", function () {
    mobileMenuEl.style.transform = "translateX(20%)";
    document.body.style.overflow = "hidden";
});

collapseMenuBtn.addEventListener("click", function () {
    mobileMenuEl.style.transform = "translateX(120%)";
    document.body.style.overflowY = "scroll";
});

floatingEmailBtn.addEventListener("click", function () {
    window.open("mailto:ui.yazir@gmail.com");
});
