function changeImageOne(){
  var img = document.getElementById("front-image");
  var imgTwo = document.getElementById("back-image");
  img.style.display = "none";
  imgTwo.style.display = "flex";
}

function changeImageTwo(){
  var img = document.getElementById("back-image");
  var imgTwo = document.getElementById("front-image");
  img.style.display = "none";
  imgTwo.style.display = "flex";
}

// const frontImage = document.getElementById("front-image");
// const backImage = document.getElementById("back-image");
// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");

// let currentImage = "front";

// function prevImage() {
//   // check if the elements exist before accessing their style properties
//   if (frontImage && backImage && prevButton) {
//     if (currentImage === "front") {
//       frontImage.style.display = "none";
//       backImage.style.display = "flex";
//       currentImage = "back";
//     } else {
//       frontImage.style.display = "flex";
//       backImage.style.display = "none";
//       currentImage = "front";
//     }
//   }
//   // print a message to the console to indicate that the function was called
//   console.log('prevImage function called');
// }

// function nextImage() {
//   // check if the elements exist before accessing their style properties
//   if (frontImage && backImage && nextButton) {
//     if (currentImage === "front") {
//       frontImage.style.display = "none";
//       backImage.style.display = "flex";
//       currentImage = "back";
//     } else {
//       frontImage.style.display = "flex";
//       backImage.style.display = "none";
//       currentImage = "front";
//     }
//   }
//   // print a message to the console to indicate that the function was called
//   console.log('nextImage function called');
// }


// // check if the elements exist before calling addEventListener() on them
// if (frontImage) {
//   frontImage.addEventListener("touchstart", nextImage);
// }
// if (backImage) {
//   backImage.addEventListener("touchstart", nextImage);
// }
// if (prevButton) {
//   prevButton.addEventListener("click", prevImage);
// }
// if (nextButton) {
//   nextButton.addEventListener("click", nextImage);
// }

// frontImage.addEventListener("touchstart", nextImage);
// backImage.addEventListener("touchstart", nextImage);
// prevButton.addEventListener("click", prevImage);
// nextButton.addEventListener("click", nextImage);

// const frontImage = document.getElementById("front-image");
// const backImage = document.getElementById("back-image");
// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");

// let currentImage = "front";

// function prevImage() {
//   // check if the elements exist before accessing their style properties
//   if (frontImage && backImage && prevButton) {
//     if (currentImage === "front") {
//       frontImage.style.display = "none";
//       backImage.style.display = "flex";
//       currentImage = "back";
//     } else {
//       frontImage.style.display = "flex";
//       backImage.style.display = "none";
//       currentImage = "front";
//     }
//   }
// }

// function nextImage() {
//   // check if the elements exist before accessing their style properties
//   if (frontImage && backImage && nextButton) {
//     if (currentImage === "front") {
//       frontImage.style.display = "none";
//       backImage.style.display = "flex";
//       currentImage = "back";
//     } else {
//       frontImage.style.display = "flex";
//       backImage.style.display = "none";
//       currentImage = "front";
//     }
//   }
// }

// // add event listeners to the elements if they exist
// if (frontImage) {
//   frontImage.addEventListener("touchstart", nextImage);
// }
// if (backImage) {
//   backImage.addEventListener("touchstart", nextImage);
// }
// if (prevButton) {
//   prevButton.addEventListener("click", prevImage);
// }
// if (nextButton) {
//   nextButton.addEventListener("click", nextImage);
// }
