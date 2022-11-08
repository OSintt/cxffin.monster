ScrollReveal().reveal(".container", { duration: 2000 });
const popup = () => {
  const popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  console.log(popup);
};

const sound = new Howl({
  src: ["/assets/transilvania.mp3"],
  autoplay: false,
  volume: 0.2,
  loop: true,
});

let isPlaying = false;

const play = document.querySelector("#play");

play.addEventListener("click", () => {
  const musicBars = document.querySelector("#music-bars");
  musicBars.classList.toggle("show");
  if (!isPlaying) {
    playMusic();
  } else {
    stopMusic();
  }
});
const playMusic = () => {
  sound.play();
  isPlaying = true;
};
const stopMusic = () => {
  sound.pause();
  isPlaying = false;
};

let slideIndex = 1;

const showSlides = (n) => {
  let i;
  let slides = document.querySelectorAll(".profile-card-wrapper");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};
const currentSlide = (n) => showSlides((slideIndex = n));
const plusSlides = (n) => showSlides((slideIndex += n));
showSlides(slideIndex);
