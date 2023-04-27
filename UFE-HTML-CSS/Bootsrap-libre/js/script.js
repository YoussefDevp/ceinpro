const slides = document.querySelectorAll(".slideshow-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentSlide = 0;

// Show the current slide
function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Show the previous slide when the "prev" button is clicked
prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

// Show the next slide when the "next" button is clicked
nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

// Show the first slide when the page is loaded
showSlide(0);
