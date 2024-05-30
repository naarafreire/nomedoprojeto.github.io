const menuItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

document.addEventListener("DOMContentLoaded", function () {
  addScrollAnimation();

  window.addEventListener("scroll", updateMenuHighlight);

  // Initial check
  updateMenuHighlight();
  StartTextAnimation(0);
});

const addScrollAnimation = () => {
  document.addEventListener("scroll", function () {
    const fadeInImages = document.querySelectorAll("img");
    const fadeInSection = document.querySelector(".card-wrapper");
    const triggerHeight = window.innerHeight * 0.8;

    [...fadeInImages, fadeInSection].forEach((el) => {
      const imagePosition = el.getBoundingClientRect().top;

      if (imagePosition < triggerHeight) {
        el.style.opacity = "1";
      }
    });
  });
};

function updateMenuHighlight() {
  let currentIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentIndex = index;
    }
  });

  menuItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    document.querySelector(".word1").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  }
  else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation(i) {
  var dataText = ["UI/UX Designer", "3D Artist", "Multimedia Designer"];

  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 2000);
  }
  else if (i < dataText[i].length) {
    typeWriter(dataText[i], 0, function () {
      StartTextAnimation(i + 1);
    });
  }
}
