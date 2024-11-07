document.addEventListener("DOMContentLoaded", function () {
  // 첫 번째 슬라이드 쇼
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slide-container").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlide(currentSlide);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrow.left").addEventListener("click", prevSlide);
  document.querySelector(".arrow.right").addEventListener("click", nextSlide);

  // 두 번째 슬라이드 쇼
  let currentSlideM = 0;
  const slidesM = document.querySelectorAll(".slideM");
  const totalSlidesM = slidesM.length;

  function showSlideM(index) {
    const slideWidth = slidesM[0].clientWidth;
    document.querySelector(".slide-containerM").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlideM() {
    currentSlideM = (currentSlideM + 1) % totalSlidesM; // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideM(currentSlideM);
  }

  function prevSlideM() {
    currentSlideM = (currentSlideM - 1 + totalSlidesM) % totalSlidesM; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideM(currentSlideM);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrowM.leftM").addEventListener("click", prevSlideM);
  document
    .querySelector(".arrowM.rightM")
    .addEventListener("click", nextSlideM);
});
