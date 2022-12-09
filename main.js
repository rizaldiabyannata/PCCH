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