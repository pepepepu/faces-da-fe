document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector("#nextBtn");
  const prevButton = document.querySelector("#prevBtn");

  // Tamanho do slide base
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Posicionar os slides um ao lado do outro
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
  };
  slides.forEach(setSlidePosition);

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
  };

  // Next Button
  nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;

    // Loop infinito simples: se não houver próximo, volta pro primeiro
    if (!nextSlide) {
      nextSlide = slides[0];
    }

    moveToSlide(track, currentSlide, nextSlide);
  });

  // Prev Button
  prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    let prevSlide = currentSlide.previousElementSibling;

    // Loop infinito reverso
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }

    moveToSlide(track, currentSlide, prevSlide);
  });
});
