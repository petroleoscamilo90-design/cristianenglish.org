const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

const slideDuration = 5000;


function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });


    indicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });


    slides[index].classList.add("active");
    indicators[index].classList.add("active");

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


let slideshow = setInterval(
    nextSlide,
    slideDuration
);


indicators.forEach((indicator, index) => {

    indicator.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);


        clearInterval(slideshow);

        slideshow = setInterval(
            nextSlide,
            slideDuration
        );

    });

});