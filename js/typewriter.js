const title = "Olá, sou o Cristhian Silveira Mazon";
const subtitle = "Estudante de ADS — bem-vindo ao meu portfólio digital";

const titleElement = document.getElementById("typewriter-title");
const subtitleElement = document.getElementById("typewriter-subtitle");
const fotoContainer = document.querySelector(".foto-container");

let i = 0;
let j = 0;

function typeTitle() {
  if (!titleElement) return;

  titleElement.classList.add("typing");
  if (i < title.length) {
    titleElement.textContent += title.charAt(i);
    i++;
    setTimeout(typeTitle, 60);
  } else {
    titleElement.classList.remove("typing");
    setTimeout(() => {
      typeSubtitle();
    }, 400);
  }
}

function typeSubtitle() {
  if (!subtitleElement || !fotoContainer) return;

  subtitleElement.classList.add("typing");
  if (j < subtitle.length) {
    subtitleElement.textContent += subtitle.charAt(j);
    j++;
    setTimeout(typeSubtitle, 35);
  } else {
    subtitleElement.classList.remove("typing");
    fotoContainer.classList.add("show");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (titleElement && subtitleElement && fotoContainer) {
    typeTitle();
  }
});
