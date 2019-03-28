//globals
let canvasWidth = 640;
let canvasHeight = 480;

window.onload = function() {
  document.getElementById("btn-start").onclick = function() {
    createGame();
    this.classList.add("hidden");
  }
}

function createGame() {
  let canvas = document.createElement("canvas");
  canvas.id = "cnv-game";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.classList.add("game-canvas")
  document.querySelector("body").appendChild(canvas);

  let ctx = canvas.getContext("2d");
  ctx.font = "100px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  let countdownStartingNumber = [3];
  setTimeout(function() { clearInterval(interval); ctx.clearRect(0, 0, canvasWidth, canvasHeight), ctx.fillText("GO!", canvasWidth/2, canvasHeight/2) }, countdownStartingNumber[0] * 1000);
  countdown(canvas, countdownStartingNumber);
  let interval = setInterval(function() { countdown(canvas, countdownStartingNumber) }, 1000);

}

function countdown(canvas, number) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillText(number[0], canvasWidth / 2, canvasHeight / 2);
  number[0]--;
}
