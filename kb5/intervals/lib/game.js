import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.weak-map";
import "core-js/modules/es6.object.define-property";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputStates =
/*#__PURE__*/
function () {
  _createClass(InputStates, [{
    key: "states",
    get: function get() {
      return this._states;
    },
    set: function set(newStates) {
      this._states = newStates;
    }
  }]);

  function InputStates() {
    _classCallCheck(this, InputStates);

    _states.set(this, {
      writable: true,
      value: void 0
    });

    this.states = [false, false, false, false];
  }

  return InputStates;
}(); //globals


var _states = new WeakMap();

var canvasWidth = 640;
var canvasHeight = 480;
var inputStates = new InputStates();
var objectsToDraw = [];

window.onload = function () {
  document.getElementById("btn-start").onclick = function () {
    createGame();
    this.classList.add("hidden");
  };
};

function updateGame() {
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
  canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

  for (var _i = 0, _objectsToDraw = objectsToDraw; _i < _objectsToDraw.length; _i++) {
    var o = _objectsToDraw[_i];
    canvasContext.drawImage(o.spriteActuelle, o.position.x, o.position.y);
  }
}

window.onkeydown = checkKeysDown;

function createGame() {
  var canvas = document.createElement("canvas");
  canvas.id = "cnv-game";
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.classList.add("game-canvas");
  document.querySelector("body").appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.font = "100px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  var countdownStartingNumber = [3];
  setTimeout(function () {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight), ctx.fillText("GO!", canvasWidth / 2, canvasHeight / 2);
    setInterval(function () {
      gameLoop(ctx);
    }, 1000);
    createScene();
  }, countdownStartingNumber[0] * 1000);
  countdown(canvas, countdownStartingNumber);
  var interval = setInterval(function () {
    countdown(canvas, countdownStartingNumber);
  }, 1000);
}

function countdown(canvas, number) {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillText(number[0], canvasWidth / 2, canvasHeight / 2);
  number[0]--;
}

function createScene() {
  joueur = new Joueur(new Point2D(canvasWidth / 2, canvasHeight / 2));
  objectsToDraw.push(joueur);
}

function checkKeysDown(e) {
  if (e.keycode === 87) inputStates.states[0] = true;
}

var Point2D =
/*#__PURE__*/
function () {
  _createClass(Point2D, [{
    key: "additionner",
    value: function additionner(autrePoint2D) {
      return new Point2D(this.x + autrePoint2D.x, this.y + autrePoint2D.y);
    }
  }, {
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(nouveauX) {
      this._x = nouveauX;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(nouveauY) {
      this._y = nouveauY;
    }
  }]);

  function Point2D(xInitial, yInitial) {
    _classCallCheck(this, Point2D);

    _defineProperty(this, "_x", void 0);

    _defineProperty(this, "_y", void 0);

    this.x = xInitial;
    this.y = yInitial;
  }

  return Point2D;
}();

var Joueur =
/*#__PURE__*/
function () {
  _createClass(Joueur, [{
    key: "avancer",
    value: function avancer() {
      this.position = this.position.additionner(this.deltasDeplacement[this.directionActuelle]);
    }
  }, {
    key: "changerSprite",
    value: function changerSprite(indice) {
      this.spriteActuelle = this.sprites[indice];
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(newPosition) {
      this._position = newPosition;
    }
  }, {
    key: "directionActuelle",
    get: function get() {
      return this._directionActuelle;
    },
    set: function set(newDirection) {
      this._directionActuelle = newDirection % 4;
    }
  }, {
    key: "spriteActuelle",
    get: function get() {
      return this._spriteActuelle;
    },
    set: function set(newSprite) {
      this._spriteActuelle = newSprite;
    }
  }, {
    key: "deltasDeplacement",
    get: function get() {
      return this._deltasDeplacement;
    },
    set: function set(newDeltas) {
      this._deltasDeplacement = newDeltas;
    }
  }, {
    key: "sprites",
    get: function get() {
      return this._sprites;
    },
    set: function set(newSprites) {
      this._sprites = newSprites;
    }
  }]);

  function Joueur(positionInitiale) {
    _classCallCheck(this, Joueur);

    _defineProperty(this, "_position", void 0);

    _defineProperty(this, "_directionActuelle", void 0);

    _defineProperty(this, "_spriteActuelle", void 0);

    _defineProperty(this, "_deltasDeplacement", void 0);

    _defineProperty(this, "_sprites", void 0);

    this.deltasDeplacement = [new Point2D(0, -1), new Point2D(1, 0), new Point2D(0, 1), new Point2D(-1, 0)];
    this.directionActuelle = 0;
    this.position = positionInitiale;
    this.sprites = loadSprites();
    this.changerSprite(0);
  }

  return Joueur;
}();

function loadSprites() {
  var down = new Image();
  down.src = "sprites/down.png";
  var up = new Image();
  up.src = "sprites/down.png";
  var right = new Image();
  right.src = "sprites/down.png";
  var left = new Image();
  left.src = "sprites/down.png";
  return [down, up, right, left];
}