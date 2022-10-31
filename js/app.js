import { validar } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");
const button = document.querySelector("button");

inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

textarea.forEach( input => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

const links = document.querySelectorAll(".menu nav ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}