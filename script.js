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

// p5 canvas
let s1, s2;
let gravity = 9.0;
let mass = 2.0;
let canvasBg = [250, 250, 248];
let cursorFill = [100, 120];

function setup() {
    createCanvas(windowWidth, windowHeight);
    canvas.classList.add("canvas");
    fill(cursorFill[0], cursorFill[1]);
    // Inputs: x, y, mass, gravity
    s1 = new Spring2D(0.2, width / 2, mass, gravity);
    s2 = new Spring2D(0.2, width / 2, mass, gravity);
}

function draw() {
    background(canvasBg[0], canvasBg[1], canvasBg[2]);
    s1.update(mouseX + 5, mouseY + 1);
    s1.display(mouseX + 5, mouseY + 1);
    s2.update(s1.x, s1.y);
    s2.display(s1.x, s1.y);
}

// fnction to resize canvas with window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function Spring2D(xpos, ypos, m, g) {
    this.x = xpos; // The x- and y-coordinates
    this.y = ypos;
    this.vx = 0; // The x- and y-axis velocities
    this.vy = 0;
    this.mass = m;
    this.gravity = g;
    this.radius = 30;
    this.stiffness = 0.2;
    this.damping = 0.7;

    this.update = function (targetX, targetY) {
        let forceX = (targetX - this.x) * this.stiffness;
        let ax = forceX / this.mass;
        this.vx = this.damping * (this.vx + ax);
        this.x += this.vx;
        let forceY = (targetY - this.y) * this.stiffness;
        forceY += this.gravity;
        let ay = forceY / this.mass;
        this.vy = this.damping * (this.vy + ay);
        this.y += this.vy;
    };

    this.display = function (nx, ny) {
        noStroke();
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        stroke(50);
        line(this.x, this.y, nx, ny);
        line(this.x, this.y, nx, ny);
    };
}

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
