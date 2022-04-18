const navToggle = document.querySelector(".hamburguer-menu");
const navMenu = document.querySelector(".nav");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("change");

  if (navMenu.classList.contains("change")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

body.addEventListener("click", () => {
  navMenu.classList.remove("change");
});