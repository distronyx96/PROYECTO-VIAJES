const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slide = document.querySelectorAll('.slide');

var contador= 0;

function nextSlide(){
    slide[contador].classList.remove("active");
    contador= (contador + 1) % slide.length;
    slide[contador].classList.add("active");
}

function prevSlide(){
    slide[contador].classList.remove("active");
    contador = (contador -1 + slide.length) % slide.length;
    slide[contador].classList.add("active");
}

nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", prevSlide);


   