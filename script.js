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

// load thoughts only on homepage and thoughts page
if (
    document.body.classList[0] == "home" ||
    document.body.classList[0] == "blog"
) {
    loadThoughts();
}
