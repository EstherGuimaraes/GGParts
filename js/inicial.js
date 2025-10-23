const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

// Função para mudar slide
function showSlide(n) {
  if (n >= items.length) index = 0;
  else if (n < 0) index = items.length - 1;
  else index = n;
  
  slide.style.transform = `translateX(${-index * 100}%)`;
}

// Botões
next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

// Automático
setInterval(() => {
  showSlide(index + 1);
}, 4000);
