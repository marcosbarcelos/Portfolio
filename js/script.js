const target = document.querySelectorAll("[data-anime]");

function animations() {
  typing();

  if (target.length) {
    window.addEventListener("scroll", function () {
      animeScroll();
    });
  }

  function typing() {
    const introtitle = document.getElementById("intro");
    //entrega um array com o elemento separado por letra
    const textArray = introtitle.textContent.split("");

    introtitle.textContent = "";
    textArray.forEach((letter, i) => {
      setTimeout(() => (introtitle.textContent += letter), 75 * i);
    });
  }

  function animeScroll() {
    const animationClass = "isvisible";
    //fórmula que obtém a altura atual da janela
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

    //obtém os elementos que contém o data-anime e a sua distância da janela
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      }
    });
  }
}

animations();
