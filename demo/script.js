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
  