const track = document.querySelector('.carousel-list-items');
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');
const carouselContainer = document.querySelector('.carousel-container');

let widthToMove = 0;

function goToNextSlide() {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide;

  if (!currentSlide.nextElementSibling) {
    nextSlide = document.querySelectorAll('.carousel-list-item')[0];
    widthToMove = 0;
  } else {
    nextSlide = currentSlide.nextElementSibling;
    widthToMove += currentSlide.clientWidth;
  }

  track.style.transform = `translateX(-${widthToMove + 30}px)`;
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
}

// Right button
nextButton.addEventListener('click', goToNextSlide);

// Left button (your existing code)
prevButton.addEventListener('click', (e) => {
  let currentSlide = track.querySelector('.current-slide');
  let prevSlide;

  if (!currentSlide.previousElementSibling) {
    const allSlides = document.querySelectorAll('.carousel-list-item');
    prevSlide = allSlides[allSlides.length - 1];
    widthToMove = prevSlide.offsetLeft;
  } else {
    prevSlide = currentSlide.previousElementSibling;
    widthToMove -= currentSlide.clientWidth;
  }

  track.style.transform = `translateX(-${widthToMove + 30}px)`;
  currentSlide.classList.remove('current-slide');
  prevSlide.classList.add('current-slide');
});

// 🔥 AUTO SCROLL
let autoScroll = setInterval(goToNextSlide, 3000);

// Pause on hover (UX)
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

carouselContainer.addEventListener('mouseleave', () => {
  autoScroll = setInterval(goToNextSlide, 3000);
});













reusable function:
function goToNextSlide() {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide;

  if (!currentSlide.nextElementSibling) {
    nextSlide = document.querySelectorAll('.carousel-list-item')[0];
    widthToMove = 0;
  } else {
    nextSlide = currentSlide.nextElementSibling;
    widthToMove += currentSlide.clientWidth;
  }

  track.style.transform = `translateX(-${widthToMove + 30}px)`;
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');
}

replace:
nextButton.addEventListener('click', goToNextSlide);


add:
let autoScroll = setInterval(goToNextSlide, 3000); // every 3 sec
