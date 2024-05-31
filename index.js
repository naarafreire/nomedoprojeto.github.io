// Obter itens do menu e seções usados na função updateMenuHighlight abaixo, saliento que esta parte foi desenvolvida com grande ajuda do meu parceiro
const menuItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

// Executar funções uma vez que o DOM tenha sido carregado
document.addEventListener("DOMContentLoaded", function () {
  // Executar animação de rolagem
  addScrollAnimation();
  // Executar animação que exibe textos automaticamente como uma máquina de escrever
  startTextAnimation(0);

  // Executar animação ao rolar para atualizar o item do menu destacado
  window.addEventListener("scroll", updateMenuHighlight);

  // Executar animação para atualizar o item do menu destacado ao carregar a página
  updateMenuHighlight();
});

// Animação que exibe as imagens somente quando rolamos até a posição delas
const addScrollAnimation = () => {
  // Lidar com evento de rolagem
  document.addEventListener("scroll", function () {
    // Obter todos os elementos que precisam aparecer
    const fadeInImages = document.querySelectorAll("img");
    const fadeInSection = document.querySelector(".card-wrapper");
    // Definir a altura em que o aparecimento deve acontecer
    const triggerHeight = window.innerHeight * 0.8;

    // Percorrer todos os elementos que precisam aparecer
    [...fadeInImages, fadeInSection].forEach((el) => {
      // Obter a posição superior das imagens
      const imagePosition = el.getBoundingClientRect().top;

      // Quando a posição superior atingir a altura em que o aparecimento deve acontecer, define a opacidade da imagem para 1
      if (imagePosition < triggerHeight) {
        el.style.opacity = "1";
      }
    });
  });
};

function updateMenuHighlight() {
  let currentIndex = -1;

  // Percorrer cada seção da página
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Definir índice atual da seção com base na posição de rolagem
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentIndex = index;
    }
  });

  // Percorrer cada item do menu
  menuItems.forEach((item, index) => {
    // Se o item do menu for o marcado como o atual, defini-lo como ativo (= destacá-lo no CSS)
    if (index === currentIndex) {
      item.classList.add("active");
    // Remover a classe ativa de todos os itens do menu não ativos
    } else {
      item.classList.remove("active");
    }
  });
}

// Função recursiva para exibir letras de uma string como uma máquina de escrever
function typeWriter(text, i, fnCallback) {
  // Criar um novo elemento span e injetá-lo no DOM a cada 100 milissegundos enquanto houver letras para exibir
  if (i < text.length) {
    document.querySelector(".animated-text").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  }
  else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 700);
  }
}

function startTextAnimation(i) {
  // Definir um array de textos que exibiremos no estilo máquina de escrever
  var dataText = ["UI/UX Designer", "3D Artist", "Multimedia Designer"];

  // Se a variável i estiver indefinida, reiniciar a animação
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      startTextAnimation(0);
    }, 2000);
  }
  // Se o valor da variável i for menor que a quantidade de textos, executar a função typeWriter para exibir o texto atual
  else if (i < dataText[i].length) {
    typeWriter(dataText[i], 0, function () {
      startTextAnimation(i + 1);
    });
  }
}
