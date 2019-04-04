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

  get representationChaine() {
    return `(${this.x},${this.y})`;
  }

  calculerDistance(autrePoint) {
    return Math.sqrt(Math.pow(autrePoint.x - this.x, 2)
      + Math.pow(autrePoint.y - this.y, 2))
  }

  constructor(xInitial, yInitial) {
    this.x = xInitial;
    this.y = yInitial;
  }
}

class Joueur {
  _position;
  get position() {
    return this._position;
  }
  set position(nouvellePosition) {
    if (nouvellePosition.x < 0 && nouvellePosition.y < 0)
      nouvellePosition = new Point2D(0, 0);

    this._position = nouvellePosition;
  }

  constructor(positionInitiale) {
    this.position = positionInitiale;
  }
}

window.onload = function () {
  let p0 = new Point2D(9, 9);
  let j1 = new Joueur(p0);
  alert(j1.position.representationChaine);

  let p1 = new Point2D(5, 9);
  let p2 = new Point2D(10, -9);
  alert(p1.calculerDistance(p2));
  alert(p2.calculerDistance(p1));

}