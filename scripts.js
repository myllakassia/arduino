// const circles = [
//   circle1,
//   circle2,
//   circle3,
//   circle4,
//   circle5,
//   circle6,
//   circle7,
//   circle8,
//   circle9,
//   circle10,
//   circle11,
//   circle12,
// ];

//let circle1 = document.querySelector("#circle1");
//let circle2 = document.querySelector("#circle2");
// let circle3 = document.querySelector("#circle3");
// let circle4 = document.querySelector("#circle4");
// let circle5 = document.querySelector("#circle5");
// let circle6 = document.querySelector("#circle6");
// let circle7 = document.querySelector("#circle7");
// let circle8 = document.querySelector("#circle8");
// let circle9 = document.querySelector("#circle9");
// let circle10 = document.querySelector("#circle10");
// let circle11 = document.querySelector("#circle11");
// let circle12 = document.querySelector("#circle12");

// var area = document.querySelector("#area");
// area.innerHTML = "#000bbb";

//função referente ao toggle
function mudaTema() {
  document.body.classList.toggle("dark");
}

//funcionalidade para mudar a cor quando clicar
// function setClickColor() {
//   const circles = ["circle1", "circle2", "circle3", "circle"];
// }

const element = document.querySelector("#circle1");
element.addEventListener("click", () => {
  circle1.style.backgroundColor = "#000bbb";
});
