// Navbar toggle for small screens
let navbarToggle = document.querySelector(".navbar-toggle");
let navbarMenu = document.querySelector(".navbar-menu");
navbarToggle.addEventListener("click", function() {
  navbarMenu.classList.toggle("is-active");
});
