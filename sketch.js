let stars = [];
const numStars = 150;
const maxStarSize = 5;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  background(5, 5, 20);

  for (let i = 0; i < numStars; i++) {
    createNewStar(random(width), random(height));
  }
}

function draw() {
  background(5, 5, 20, 40);

  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];

    if (star.twinkleDelay <= 0) {
      star.opacity += star.fadeDirection * star.fadeSpeed;

      if (star.opacity <= 0 && star.fadeDirection < 0) {
        stars.splice(i, 1);
        createNewStar(random(width), random(height));
        continue;
      }

      if (star.opacity >= 255) {
        star.opacity = 255;
        star.fadeDirection = -1;
      }
    } else {
      star.twinkleDelay--;
    }

    noStroke();
    fill(star.color[0], star.color[1], star.color[2], star.opacity);
    drawStar(star.x, star.y, star.size, star.opacity);
  }

  if (frameCount % 30 === 0 && random() > 0.5) {
    createNewStar(random(width), random(height));
  }
}

function createNewStar(x, y) {
  let colorOptions = [
    [255, 255, 255],
    [255, 240, 200],
    [200, 220, 255],
    [255, 210, 180]
  ];

  stars.push({
    x: x,
    y: y,
    size: random(1, maxStarSize),
    opacity: 0,
    fadeSpeed: random(3, 8),
    fadeDirection: 1,
    twinkleDelay: random(0, 60),
    lifespan: random(100, 200),
    color: random(colorOptions)
  });
}

function drawStar(x, y, size, opacity) {
  circle(x, y, size);
  push();
  blendMode(ADD);
  for (let i = 1; i <= 3; i++) {
    let glowSize = size + i * 3;
    let alpha = opacity / (i * 2);
    fill(255, 255, 255, alpha);
    circle(x, y, glowSize);
  }
  pop();
}

function mousePressed() {
  for (let i = 0; i < 5; i++) {
    let offsetX = random(-30, 30);
    let offsetY = random(-30, 30);
    createNewStar(mouseX + offsetX, mouseY + offsetY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

    document.addEventListener("DOMContentLoaded", () => {
      const images = document.querySelectorAll(".carousel-image");
      const nextBtn = document.getElementById("nextBtn");
      const prevBtn = document.getElementById("prevBtn");
      let currentIndex = 0;

      function showImage(index) {
        images.forEach((img, i) => {
          img.classList.toggle("active", i === index);
        });
      }

      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });

      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });
    });


  document.addEventListener("DOMContentLoaded", () => {
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
    let activeIndex = 0;

    function showSlide(index) {
      carouselSlides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
        }
      });
    }

    nextButton.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % carouselSlides.length;
      showSlide(activeIndex);
    });

    prevButton.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + carouselSlides.length) % carouselSlides.length;
      showSlide(activeIndex);
    });

    // Optional auto-advance
    setInterval(() => {
      activeIndex = (activeIndex + 1) % carouselSlides.length;
      showSlide(activeIndex);
    }, 5000);
  });



  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    toggleBtn.addEventListener("click", () => {
      sidebarOverlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sidebarOverlay.classList.remove("active");
    });

    // Optional: Close if clicking outside the sidebar
    sidebarOverlay.addEventListener("click", (e) => {
      if (e.target === sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
      }
    });
  });

