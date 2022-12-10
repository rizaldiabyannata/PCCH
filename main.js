function changeImageOne() {
  var img = document.getElementById("front-image");
  var imgTwo = document.getElementById("back-image");
  img.style.display = "none";
  imgTwo.style.display = "flex";
}

function changeImageTwo() {
  var img = document.getElementById("back-image");
  var imgTwo = document.getElementById("front-image");
  img.style.display = "none";
  imgTwo.style.display = "flex";
}

function changeTxt1() {
  document.getElementById("price1").innerHTML = "BUY NOW";
}
function backNormal1() {
  document.getElementById("price1").innerHTML = "Harga : Rp315,000";
}
function changeTxt2() {
  document.getElementById("price2").innerHTML = "BUY NOW";
}
function backNormal2() {
  document.getElementById("price2").innerHTML = "Harga : Rp340,000";
}
function changeTxt3() {
  document.getElementById("price3").innerHTML = "BUY NOW";
}
function backNormal3() {
  document.getElementById("price3").innerHTML = "Harga : Rp370.000";
}