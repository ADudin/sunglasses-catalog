const prevSlideButton = document.querySelector('.slider__arrow--prev');
const nextSlideButton = document.querySelector('.slider__arrow--next');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

prevSlideButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  minusSlide();
})

nextSlideButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  plusSlide();
})

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__list-item');
  const toggles = document.getElementsByClassName('slider__toggle');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.lenght;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slider__list-item--current');
    nextSlideButton.disabled = false;
    prevSlideButton.disabled = false;

    if (n === slides.length) {
      nextSlideButton.disabled = true;
    }

    if (n === 1) {
      prevSlideButton.disabled = true;
    }
  }

  for (let i = 0; i < toggles.length; i++) {
    toggles[i].classList.remove('slider__toggle--current');
  }

  slides[slideIndex - 1].classList.add('slider__list-item--current');
  toggles[slideIndex - 1].classList.add('slider__toggle--current');
}

let i = 1;

setInterval(function() {
  currentSlide(i)
  i++;
  if (i == 5)
  {
    i = 1;
  }
},
5000)
