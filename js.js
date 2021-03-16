const burger = document.querySelector('.burger');
const closeburger = document.querySelector('.closeburger');
const navul = document.querySelector('.navul');


burger.addEventListener('click', () => {
navul.classList.toggle('show');
burger.style.display ="none";
closeburger.style.display="block";
});

closeburger.addEventListener('click', () => {
navul.classList.remove('show');
closeburger.style.display="none"
burger.style.display="block";
});


//mobile dropdown options
function dropdown() {
  document.getElementById("mydropdown").classList.toggle("show2");
  document.getElementById('mydropdown2').classList.remove('show2');
  document.getElementById('mydropdown3').classList.remove('show2');
}

function dropup(){
  document.getElementById("mydropdown").classList.toggle("show2");
  document.getElementById('mydropdown2').classList.remove('show2');
  document.getElementById('mydropdown3').classList.remove('show2');
}

function dropdown2() {
  document.getElementById("mydropdown2").classList.toggle("show2");
  document.getElementById('mydropdown').classList.remove('show2');
  document.getElementById('mydropdown3').classList.remove('show2');
}

function dropup2(){
  document.getElementById("mydropdown2").classList.toggle("show2");
  document.getElementById('mydropdown').classList.remove('show2');
  document.getElementById('mydropdown3').classList.remove('show2');
}

function dropdown3() {
  document.getElementById("mydropdown3").classList.toggle("show2");
  document.getElementById('mydropdown2').classList.remove('show2');
  document.getElementById('mydropdown').classList.remove('show2');
}

//End of mobile dropdown version


//Start with the desktop dropdown
function dropdownA() {
  document.getElementById("mydropdownA").classList.toggle("show3");
  document.getElementById('mydropdownB').classList.remove('show3');
  document.getElementById('mydropdownC').classList.remove('show3');
}

function dropdownB() {
  document.getElementById("mydropdownB").classList.toggle("show3");
  document.getElementById('mydropdownA').classList.remove('show3');
  document.getElementById('mydropdownC').classList.remove('show3');
}

function dropdownC() {
  document.getElementById("mydropdownC").classList.toggle("show3");
  document.getElementById('mydropdownB').classList.remove('show3');
  document.getElementById('mydropdownA').classList.remove('show3');
}

