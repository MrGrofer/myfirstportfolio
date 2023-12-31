// Add active class to the clicked navigation link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        navLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });
  
        this.classList.add("active");
      });
    });
  });
  