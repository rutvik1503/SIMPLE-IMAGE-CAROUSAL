const images = [
  "Assets/BG01.jpg",
  "Assets/BG02.jpg",
  "Assets/BG03.jpg",
  "Assets/BG04.jpg",
  "Assets/BG05.jpg",
];

const mainImg = document.getElementById("images");

let index = 0;

// Function to change image and restart animation
function changeImage() {
  mainImg.style.backgroundImage = `url('${images[index]}')`;

  // Restart animation
  mainImg.style.animation = "none";
  mainImg.offsetHeight; // Trigger reflow
  mainImg.style.animation = "opacity 3s ease forwards";
}

changeImage();

let imageCarousal = setInterval(() => {
  index++;
  if (index === images.length) {
    index = 0;
  }
  changeImage();
}, 3000);
