
class Personne {
  _nom;
  get nom() {
    return this._nom;
  }
  set nom(nouveauNom) {
    if (nouveauNom === null)
      nouveauNom = "défaut";
      
    this._nom = nouveauNom;
  }
  
  constructor(nomInitial) {
    this.nom = nomInitial;
  }
}

let p1 = new Personne(null);
alert(p1.nom);


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
  set y(nouveauX) {
    this._y = nouveauX;
  }
  constructor(xInitial, yInitial) {
    this.x = xInitial;
    this.y = yInitial;
  }

  get representationChaine() {
    return `(${this.x}, ${this.y})`;
  }

  calculerDistance(autrePoint) {
    return Math.sqrt(Math.pow(autrePoint.x - this.x, 2) + Math.pow(autrePoint.y - this.y, 2));
  }
}

let point = new Point2D(8, -9);
alert(point.representationChaine);

class Joueur {
  _position;

  constructor(positionInitiale) {
    this._position = positionInitiale;
  }
}

let j = new Joueur(new Point2D(6,7));
alert(j._position.representationChaine);

let pos = new Point2D(0, 0)
let pos2 = new Point2D(5, 3);
alert(pos2.calculerDistance(pos));
