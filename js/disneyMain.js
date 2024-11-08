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
    const slideWidthM = slidesM[0].clientWidth;
    document.querySelector(".slide-containerM").style.transform = `translateX(${
      -index * slideWidthM
    }px)`;
  }

  function nextSlideM() {
    currentSlideM = (currentSlideM + 1) % (totalSlidesM - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
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

  // 세 번째 슬라이드 쇼
  let currentSlideS = 0;
  const slidesS = document.querySelectorAll(".slideS");
  const totalSlidesS = slidesM.length;

  function showSlideS(index) {
    const slideWidth = slidesS[0].clientWidth;
    document.querySelector(".slide-containerS").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlideS() {
    currentSlideS = (currentSlideS + 1) % (totalSlidesS - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideS(currentSlideS);
  }

  function prevSlideS() {
    currentSlideS = (currentSlideS - 1 + totalSlidesS) % totalSlidesS; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideS(currentSlideS);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrowS.leftS").addEventListener("click", prevSlideS);
  document
    .querySelector(".arrowS.rightS")
    .addEventListener("click", nextSlideS);

  // 네 번째 슬라이드 쇼
  let currentSlideD = 0;
  const slidesD = document.querySelectorAll(".slideD");
  const totalSlidesD = slidesD.length;

  function showSlideD(index) {
    const slideWidth = slidesD[0].clientWidth;
    document.querySelector(".slide-containerD").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlideD() {
    currentSlideD = (currentSlideD + 1) % (totalSlidesD - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideD(currentSlideD);
  }

  function prevSlideD() {
    currentSlideD = (currentSlideD - 1 + totalSlidesD) % totalSlidesD; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideD(currentSlideD);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrowD.leftD").addEventListener("click", prevSlideD);
  document
    .querySelector(".arrowD.rightD")
    .addEventListener("click", nextSlideD);

  // 다섯 번째 슬라이드 쇼
  let currentSlideP = 0;
  const slidesP = document.querySelectorAll(".slideP");
  const totalSlidesP = slidesP.length;

  function showSlideP(index) {
    const slideWidth = slidesP[0].clientWidth;
    document.querySelector(".slide-containerP").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlideP() {
    currentSlideP = (currentSlideP + 1) % (totalSlidesP - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideP(currentSlideP);
  }

  function prevSlideP() {
    currentSlideP = (currentSlideP - 1 + totalSlidesP) % totalSlidesP; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideP(currentSlideP);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrowP.leftP").addEventListener("click", prevSlideP);
  document
    .querySelector(".arrowP.rightP")
    .addEventListener("click", nextSlideP);

  // 여섯 번째 슬라이드 쇼
  let currentSlideN = 0;
  const slidesN = document.querySelectorAll(".slideN");
  const totalSlidesN = slidesN.length;

  function showSlideN(index) {
    const slideWidth = slidesN[0].clientWidth;
    document.querySelector(".slide-containerN").style.transform = `translateX(${
      -index * slideWidth
    }px)`;
  }

  function nextSlideN() {
    currentSlideN = (currentSlideN + 1) % (totalSlidesN - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideN(currentSlideN);
  }

  function prevSlideN() {
    currentSlideN = (currentSlideN - 1 + totalSlidesN) % totalSlidesN; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideN(currentSlideN);
  }

  // 버튼에 이벤트 핸들러 추가
  document.querySelector(".arrowN.leftN").addEventListener("click", prevSlideN);
  document
    .querySelector(".arrowN.rightN")
    .addEventListener("click", nextSlideN);

  // 일곱 번째 슬라이드 쇼
  let currentSlideSO = 0;
  const slidesSO = document.querySelectorAll(".slideSO");
  const totalSlidesSO = slidesSO.length;

  function showSlideSO(index) {
    const slideWidth = slidesSO[0].clientWidth;
    document.querySelector(
      ".slide-containerSO"
    ).style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function nextSlideSO() {
    currentSlideSO = (currentSlideSO + 1) % (totalSlidesSO - 4); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    showSlideSO(currentSlideSO);
  }

  function prevSlideSO() {
    currentSlideSO = (currentSlideSO - 1 + totalSlidesSO) % totalSlidesSO; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    showSlideSO(currentSlideSO);
  }

  // 버튼에 이벤트 핸들러 추가
  document
    .querySelector(".arrowSO.leftSO")
    .addEventListener("click", prevSlideSO);
  document
    .querySelector(".arrowSO.rightSO")
    .addEventListener("click", nextSlideSO);
});
window.addEventListener("resize", function () {
  window.resizeTo(window.innerWidth, window.innerHeight); // 화면 크기 조정을 고정
});
