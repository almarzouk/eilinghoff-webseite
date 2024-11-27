// Select the nav menu and hamburger elements
const navMenu = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");

// Hamburger Menu Functionality
hamburger.addEventListener("click", function (event) {
  event.stopPropagation(); // Stop the click event from bubbling up to the document
  navMenu.classList.toggle("active"); // Toggle the active class to slide in/out
});

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  // Check if the click is outside both the nav menu and the hamburger
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    navMenu.classList.remove("active"); // Remove the active class
  }
});

// Get all navigation links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("Link clicked");
    navMenu.classList.remove("active"); // Remove the active class when any link is clicked
  });
});
// Select the header element
const header = document.querySelector(".header");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled"); // Add the 'scrolled' class when scroll is greater than 50px
  } else {
    header.classList.remove("scrolled"); // Remove the 'scrolled' class when back to top
  }
});
