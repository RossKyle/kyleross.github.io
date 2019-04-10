//globals
let canvasWidth = 640;
let canvasHeight = 480;

window.onload = function() {
  document.getElementById("btn-start").onclick = function() {
    createGame();
    this.classList.add("hidden");
  }
};

function createGame() {
  let canvas = createCanvas();
  let ctx = canvas.getContext("2d");
  initializeCanvasContext(ctx);

  let countdownStartingNumber = [3];
  countdown(ctx, countdownStartingNumber);
  let interval = setInterval(function() { countdown(ctx, countdownStartingNumber) }, 1000);

  setTimeout(function() {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillText("GO!", canvasWidth/2, canvasHeight/2);
  }, countdownStartingNumber[0] * 1000 + 1000);
}

function countdown(ctx, nextNumber) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillText(nextNumber[0], canvasWidth / 2, canvasHeight / 2);

  nextNumber[0]--;
}

function createCanvas() {
  let canvas = document.createElement("canvas");
  canvas.id = "cnv-game";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.classList.add("game-canvas");
  document.querySelector("body").appendChild(canvas);

  return canvas;
}

function initializeCanvasContext(ctx) {
  ctx.font = "100px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
}
