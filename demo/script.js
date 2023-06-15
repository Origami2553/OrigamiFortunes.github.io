// Add class to elements when they enter the viewport
function fadeElementsIn() {
    const elements = document.querySelectorAll('.fade-in');
  
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight * 0.8) {
        element.classList.add('active');
      }
    });
  }
  
  // Listen for scroll events and fade in elements
  window.addEventListener('scroll', fadeElementsIn);
  window.addEventListener('load', fadeElementsIn);

  // Slideshow functionality
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentImageIndex = 0;
let nextImageIndex = 1;

// Show the next image in the slideshow
function showNextImage() {
  images[currentImageIndex].style.opacity = 0;
  images[nextImageIndex].style.opacity = 1;

  currentImageIndex = nextImageIndex;
  nextImageIndex = (nextImageIndex + 1) % images.length;

  setTimeout(showNextImage, 3000); // Change image every 3 seconds (adjust as desired)
}

// Start the slideshow
showNextImage();

  