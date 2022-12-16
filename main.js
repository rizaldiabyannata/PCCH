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
function loading1(){
  document.getElementById("price1").style.display = "none";
  document.getElementById("loader1").style.display ="flex";
}
function changeTxt2() {
  document.getElementById("price2").innerHTML = "BUY NOW";
}
function backNormal2() {
  document.getElementById("price2").innerHTML = "Harga : Rp340,000";
}
function loading2(){
  document.getElementById("price2").style.display = "none";
  document.getElementById("loader2").style.display ="flex";
}
function changeTxt3() {
  document.getElementById("price3").innerHTML = "BUY NOW";
}
function backNormal3() {
  document.getElementById("price3").innerHTML = "Harga : Rp370.000";
}
function loading3(){
  document.getElementById("price3").style.display = "none";
  document.getElementById("loader3").style.display ="flex";
}

function openNav() {
  // Get the checkbox and slider bar elements
  var checkbox = document.getElementById("check");
  var sliderBar = document.getElementById("sliderBar");
  var changeColor1 = document.getElementById("line1");
  var changeColor2 = document.getElementById("line2");
  var changeColor3 = document.getElementById("line3");
  var burger = document.getElementById("containerHamburger");
  // Toggle the checked property of the checkbox
  checkbox.checked = !checkbox.checked;

  // If the checkbox is unchecked, hide the slider bar
  if (!checkbox.checked) {
    sliderBar.style.width = "0px";
    changeColor1.style.backgroundColor="#333";
    changeColor2.style.backgroundColor="#333";
    changeColor3.style.backgroundColor="#333";
    burger.style.marginLeft = "0px";
  } else {
    // Otherwise, show the slider bar
    sliderBar.style.width = "250px";
    changeColor1.style.backgroundColor="white";
    changeColor2.style.backgroundColor="white";
    changeColor3.style.backgroundColor="white";
    burger.style.marginLeft = "20px";
  }
}