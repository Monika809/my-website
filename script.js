// Hero slider
const slides = document.querySelectorAll('.slider .hero');
const heroIndicators = document.querySelectorAll('.slide-indicators span');

let current = 0;
slides[current].classList.add('show');
heroIndicators[current].classList.add('active');

function goToSlide(index) {
  slides[current].classList.remove('show');
  heroIndicators[current].classList.remove('active');

  current = index;

  slides[current].classList.add('show');
  heroIndicators[current].classList.add('active');
}

heroIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => goToSlide(index));
});

setInterval(() => {
  let next = (current + 1) % slides.length;
  goToSlide(next);
}, 10000);


// Image carousel
const carouselTrack = document.querySelector('.carousel-track');
const images = carouselTrack.children;
let currentIndex = 0;
const itemsPerSlide = 4;
const totalSlides = Math.ceil(images.length / itemsPerSlide);
let goingForward = true;

setInterval(() => {
  if (goingForward) {
    currentIndex++;
    if (currentIndex >= totalSlides - 1) goingForward = false;
  } else {
    currentIndex--;
    if (currentIndex <= 0) goingForward = true;
  }

  const translateX = currentIndex * (images[0].offsetWidth + 40); // 40 = gap
  carouselTrack.style.transform = `translateX(-${translateX}px)`;
}, 5000);


const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.testimonial-dots .dot');

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

setInterval(() => {
  index = (index + 1) % 2; // 2 slides
  updateSlider();
}, 4000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});





  
