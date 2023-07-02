document.addEventListener("DOMContentLoaded", function() {
    const houseContainers = document.querySelectorAll(".house-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
  
    houseContainers[currentIndex].classList.add("active");
  
    function showNextImage() {
      houseContainers[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % houseContainers.length;
      houseContainers[currentIndex].classList.add("active");
    }
  
    function showPreviousImage() {
      houseContainers[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + houseContainers.length) % houseContainers.length;
      houseContainers[currentIndex].classList.add("active");
    }
  
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
  });
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
