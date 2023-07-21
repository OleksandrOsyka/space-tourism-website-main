let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i, slides1, slides2, dots;
  slides1 = document.getElementsByClassName("technology__image");
  slides2 = document.getElementsByClassName("technology__information ");
  dots = document.getElementsByClassName("indicator");
  if (n > slides1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides1.length;
  }
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" indicator_active", "");
  }
  slides1[slideIndex - 1].style.display = "block";
  slides2[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " indicator_active";
}
