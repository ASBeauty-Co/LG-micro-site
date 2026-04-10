var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2.5,
});

// Smooth scrolling for anchor links + hidden anchor id in the url
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});