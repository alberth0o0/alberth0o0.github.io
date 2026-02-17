//sends coordinates of mouse click to console
const canvas = document.getElementById("canvas");

canvas.addEventListener("click", function (event) {
  console.log("X:", event.offsetX, "Y:", event.offsetY);
});