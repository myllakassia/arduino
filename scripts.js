let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");
let circle3 = document.querySelector("#circle3");
let circle4 = document.querySelector("#circle4");
let circle5 = document.querySelector("#circle5");
let circle6 = document.querySelector("#circle6");
let circle7 = document.querySelector("#circle7");
let circle8 = document.querySelector("#circle8");
let circle9 = document.querySelector("#circle9");
let circle10 = document.querySelector("#circle10");
let circle11 = document.querySelector("#circle11");
let circle12 = document.querySelector("#circle12");

// const element = document.querySelector("#circle1");
// element.addEventListener("click", () => {
//   circle1.style.backgroundColor = "#000bbb";
// });

//função dos sensores
const buttonElement1 = document.querySelector("#circle1");
buttonElement1.addEventListener("click", () => {
  buttonElement1.classList.toggle("color-green");
  buttonElement1.classList.toggle("color-blue");
  console.log(buttonElement1); // esse console é so pra mostrar no navegador onde ta clicanco
});

const buttonElement2 = document.querySelector("#circle2");
buttonElement2.addEventListener("click", () => {
  buttonElement2.classList.toggle("color-green");
  buttonElement2.classList.toggle("color-blue");
});

const buttonElement3 = document.querySelector("#circle3");
buttonElement3.addEventListener("click", () => {
  buttonElement3.classList.toggle("color-green");
  buttonElement3.classList.toggle("color-blue");
});

const buttonElement4 = document.querySelector("#circle4");
buttonElement4.addEventListener("click", () => {
  buttonElement4.classList.toggle("color-green");
  buttonElement4.classList.toggle("color-blue");
});

const buttonElement5 = document.querySelector("#circle5");
buttonElement5.addEventListener("click", () => {
  buttonElement5.classList.toggle("color-green");
  buttonElement5.classList.toggle("color-blue");
});

const buttonElement6 = document.querySelector("#circle6");
buttonElement6.addEventListener("click", () => {
  buttonElement6.classList.toggle("color-green");
  buttonElement6.classList.toggle("color-blue");
});

const buttonElement7 = document.querySelector("#circle7");
buttonElement7.addEventListener("click", () => {
  buttonElement7.classList.toggle("color-green");
  buttonElement7.classList.toggle("color-blue");
});

const buttonElement8 = document.querySelector("#circle8");
buttonElement8.addEventListener("click", () => {
  buttonElement8.classList.toggle("color-green");
  buttonElement8.classList.toggle("color-blue");
});

const buttonElement9 = document.querySelector("#circle9");
buttonElement9.addEventListener("click", () => {
  buttonElement9.classList.toggle("color-green");
  buttonElement9.classList.toggle("color-blue");
});

const buttonElement10 = document.querySelector("#circle10");
buttonElement10.addEventListener("click", () => {
  buttonElement10.classList.toggle("color-green");
  buttonElement10.classList.toggle("color-blue");
});

const buttonElement11 = document.querySelector("#circle11");
buttonElement11.addEventListener("click", () => {
  buttonElement11.classList.toggle("color-green");
  buttonElement11.classList.toggle("color-blue");
});

const buttonElement12 = document.querySelector("#circle12");
buttonElement12.addEventListener("click", () => {
  buttonElement12.classList.toggle("color-green");
  buttonElement12.classList.toggle("color-blue");
});

//função referente ao toggle
function mudaTema() {
  document.body.classList.toggle("dark");
}
