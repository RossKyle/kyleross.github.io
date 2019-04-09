class InputStates {
  #states;
  get states() {
    return this._states;
  }
  set states(newStates) {
    this._states = newStates;
  }
  constructor() {
    this.states = [false, false, false, false];
  }
}
//globals
let canvasWidth = 640;
let canvasHeight = 480;
let inputStates = new InputStates();
const objectsToDraw = [];

window.onload = function() {
  document.getElementById("btn-start").onclick = function() {
    createGame();
    this.classList.add("hidden");
  }
};

function updateGame()
{
  if (inputStates.up) {
    joueur.directionActuelle = 0;
  }
  joueur.avancer();
}

function gameLoop(canvasContext) {
  updateGame();
  renderGame(canvasContext);
}

function renderGame(canvasContext) {
  canvasContext.clearRect(0,0, canvasWidth, canvasHeight);
  for (let o of objectsToDraw) {
    canvasContext.drawImage(o.spriteActuelle, o.position.x, o.position.y);
  }
}

window.onkeydown = checkKeysDown;

function createGame() {
  let canvas = document.createElement("canvas");
  canvas.id = "cnv-game";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.classList.add("game-canvas");
  document.querySelector("body").appendChild(canvas);

  let ctx = canvas.getContext("2d");
  ctx.font = "100px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  let countdownStartingNumber = [3];
  setTimeout(function() {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight), ctx.fillText("GO!", canvasWidth/2, canvasHeight/2);
    setInterval(function() {gameLoop(ctx)}, 1000);
    createScene();
  }, countdownStartingNumber[0] * 1000);
  countdown(canvas, countdownStartingNumber);
  let interval = setInterval(function() { countdown(canvas, countdownStartingNumber) }, 1000);

}

function countdown(canvas, number) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillText(number[0], canvasWidth / 2, canvasHeight / 2);
  number[0]--;
}

function createScene() {
  joueur = new Joueur(new Point2D(canvasWidth / 2, canvasHeight / 2));
  objectsToDraw.push(joueur);
}

function checkKeysDown(e) {
 if (e.keycode === 87)
   inputStates.states[0] = true;
}

class Point2D {
  _x;
  _y;
  get x() {
    return this._x;
  }
  set x(nouveauX) {
    this._x = nouveauX;
  }
  get y() {
    return this._y;
  }
  set y(nouveauY) {
    this._y = nouveauY;
  }
  additionner(autrePoint2D) {
    return new Point2D(this.x + autrePoint2D.x, this.y + autrePoint2D.y);
  }
  constructor(xInitial, yInitial) {
    this.x = xInitial;
    this.y = yInitial;
  }
}


class Joueur {
  _position;
  _directionActuelle;
  _spriteActuelle;

  _deltasDeplacement;
  _sprites;
  get position() {
    return this._position;
  }
  set position(newPosition) {
    this._position = newPosition;
  }
  get directionActuelle() {
    return this._directionActuelle;
  }
  set directionActuelle(newDirection) {
    this._directionActuelle = newDirection % 4;
  }
  get spriteActuelle() {
    return this._spriteActuelle;
  }
  set spriteActuelle(newSprite) {
    this._spriteActuelle = newSprite;
  }
  get deltasDeplacement() {
    return this._deltasDeplacement;
  }
  set deltasDeplacement(newDeltas) {
    this._deltasDeplacement = newDeltas;
  }
  get sprites() {
    return this._sprites;
  }
  set sprites(newSprites) {
    this._sprites = newSprites;
  }

  avancer() {
    this.position = this.position.additionner(this.deltasDeplacement[this.directionActuelle]);
  }
  changerSprite(indice) {
    this.spriteActuelle = this.sprites[indice];
  }
  constructor(positionInitiale) {
    this.deltasDeplacement = [new Point2D(0,-1), new Point2D(1,0), new Point2D(0, 1), new Point2D(-1,0)];
    this.directionActuelle = 0;
    this.position = positionInitiale;
    this.sprites = loadSprites();
    this.changerSprite(0);
  }
}

function loadSprites() {
  let down = new Image();
  down.src = "sprites/down.png";
  let up = new Image();
  up.src = "sprites/down.png";
  let right = new Image();
  right.src = "sprites/down.png";
  let left = new Image();
  left.src = "sprites/down.png";
  return [down, up, right, left];
}
