const container = document.querySelector(".container");
const popUpDiv = document.querySelector(".pop-up");
const firstPopUp = document.querySelector(".first-pop-up-body");
const secondPopUp = document.querySelector(".second-pop-up-body");
const headBorder = document.querySelector(".pop-up-head");
const footBorder = document.querySelector(".pop-up-foot");
function popUpFunction() {
  popUpDiv.style.top = "50%";
  container.style.backgroundColor = "gray";
}
window.addEventListener("load", (event) => {
  popUpFunction();
});
const NextPopUpButton = document.querySelector(".first-pop-up-body-button");
function nextPopUp() {
  firstPopUp.style.display = "none";
  headBorder.style.borderBottom = "none";
  footBorder.style.borderTop = "none";
  secondPopUp.style.display = "block";
}
