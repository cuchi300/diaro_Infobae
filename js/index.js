document.addEventListener("DOMContentLoaded", function () {
  activarFuncion();
});

function activarFuncion() {
  menuDesplegable();
  documentScroll();
}

function menuDesplegable() {
  const boton = document.querySelector(".btn-nav");
  const nav = document.querySelector(".nav-side");
  boton.addEventListener("click", function () {
    nav.classList.toggle("abrir");
  });
}

function documentScroll() {
  window.addEventListener("scroll", function () {
    const navSide = document.querySelector(".nav-side");
    const navTop = document.querySelector(".nav-top");
    const item = document.querySelectorAll(".item-top");

    if (scrollY > 50) {
      navSide.classList.remove("abrir");
    }

    const menu = document.querySelector(".menu");
  });
}
