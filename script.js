// DOM elements
const mobileMenuEl = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const collapseMenuBtn = document.querySelector(".collapse-menu-btn");
const floatingEmailBtn = document.querySelector(".floating-email");

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

// add blogs dynamically from blogs folder
function loadThoughts() {
    const blogTitles = [
        "If I were a bird",
        "Silent Love, Unspoken",
        "Open Letter to the AI Crawler",
    ];
    for (let i = 1; i <= blogTitles.length; i++) {
        document.querySelector(".thoughts-list").innerHTML += `
                    <li>
                        <h3 class="thought-title">
                            ${blogTitles[i - 1]}
                        </h3>
                        <a href="/thoughts/${i}.html" class="btn-link thought-btn"
                            >Read &rightarrow;</a>
                    </li>`;
    }
}

// home page
if (document.body.classList[0] == "page-home") {
    // loading screen
    const loaderEl = document.querySelector(".loader");
    setTimeout(() => {
        loaderEl.classList.add("hidden");
        document.body.style.overflowY = "scroll";
    }, Math.ceil(Math.random() * 3) * 1000);

    // hide scroll down indicator
    const scrollDownIndicator = document.querySelector(".scroll-down");
    window.addEventListener("scroll", function (e) {
        e.preventDefault();
        scrollDownIndicator.style.transform = "translateY(200px)";
        scrollDownIndicator.style.opacity = "0";
    });

    loadThoughts();
}

// thoughts page
if (document.body.classList[0] == "page-thoughts") {
    loadThoughts();
}

// gallery page
if (document.body.classList[0] == "page-gallery") {
    const imageCount = 8;
    for (let i = 1; i <= imageCount; i++) {
        document.querySelector(
            ".gallery-container"
        ).innerHTML += `<img src="./gallery/${i}.jpg"/>`;
    }
}
