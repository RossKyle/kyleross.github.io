const NomDéfaut = "défaut";
class Personne {
  _nom;
  get nom() {
    return this._nom;
  }
  set nom(nouveauNom) {
    if (nouveauNom === null)
      nouveauNom = NomDéfaut;

    this._nom = nouveauNom;
  }

  constructor(nomInitial)
  {
    this.nom = nomInitial;
  }
}

window.onload = function() {
  let personne2 = new Personne(null)
  alert(personne2.nom);

  personne2.nom = "Bob";
  alert(personne2.nom);
}
