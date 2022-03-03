// animação header-intro

const intro = document.getElementById("intro");

function digitando(intro) {
  const textoIntro = intro.textContent.split("");
  intro.textContent = "";
  textoIntro.forEach((letra, i) => {
    setTimeout(() => (intro.textContent += letra), 75 * i);
  });
}

digitando(intro);

// animação sections (geral)

const target = document.querySelectorAll("[data-anime]");
const animationClass = "isvisible";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (elemento) {
    if (windowTop > elemento.offsetTop) {
      elemento.classList.add(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}
