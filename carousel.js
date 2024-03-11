let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

let Index = 0;
showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  Index++;
  if (Index > slides.length) {Index = 1} 
  slides[Index-1].style.display = "block"; 
  setTimeout(showSlidesAuto, 4000); // Change image every 2 seconds
}

function currentSlide(n) {
    showSlidesAuto(Index = n);
  }