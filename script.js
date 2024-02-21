// DOM elements
const loaderEl = document.querySelector(".loader");
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const collapseMenuBtn = document.querySelector(".collapse-menu-btn");
const floatingEmailBtn = document.querySelector(".floating-email");
const themeSwitchBtn = document.querySelector(".theme-switch");
const scrollDownIndicator = document.querySelector(".scroll-down");

console.log("Nothing intresting here sneaky lil bitch!");

// loading screen
setTimeout(() => {
    loaderEl.classList.add("hidden");
    document.body.style.overflowY = "scroll";
}, Math.ceil(Math.random() * 3) * 1000);

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

// onScroll
window.addEventListener("scroll", function (e) {
    e.preventDefault();
    scrollDownIndicator.style.transform = "translateY(200px)";
    scrollDownIndicator.style.opacity = "0";
    console.log("Scrolled!");
});
