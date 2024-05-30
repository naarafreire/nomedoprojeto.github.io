const menuItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('.section');

document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimation()

    window.addEventListener('scroll', updateMenuHighlight);

    // Initial check
    updateMenuHighlight();
});

const addScrollAnimation = () => {
    document.addEventListener('scroll', function() {
        const fadeInImages = document.querySelectorAll('img');
        const fadeInSection = document.querySelector('.card-wrapper');
        const triggerHeight = window.innerHeight * 0.8;
      
      [...fadeInImages, fadeInSection].forEach((el)=>{
            const imagePosition = el.getBoundingClientRect().top;

            if (imagePosition < triggerHeight) {
              el.style.opacity = '1';
            }
        })
      });
}

function updateMenuHighlight() { 
  let currentIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentIndex = index;
    }
  });

  menuItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}