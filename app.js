// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');

//     burger.addEventListener("click", () => {
//         nav.classList.toggle('nav-active');
//     })
// }

(() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // add event to navlink
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // animate nav link
    navLinks.forEach((link, index) => {
      link.style.animation = link.style.animation
        ? ""
        : `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`;
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
})();
