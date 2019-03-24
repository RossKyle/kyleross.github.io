window.onload = function () {
  //insérer l'heure d'accés
  document.getElementById("conteneur-heure").textContent = new Date().toLocaleTimeString();

  document.getElementById("champ-nom").placeholder = "Entrez votre nom";

  initialiserBoutonTheme();
  initialiserBoutonCalculer()

  document.getElementById("btn-ajouter-durée").onclick = function () {
    let nouveauChamp = document.createElement("input");
    nouveauChamp.type = "text";
    nouveauChamp.classList.add("champ-heure");
    nouveauChamp.classList.add("theme");
    document.getElementById("conteneur-entrainement1").appendChild(nouveauChamp);
  }
}

function initialiserBoutonTheme() {
  let btnTheme = document.getElementById("btn-changer-theme");
  let elementsTheme = document.querySelectorAll(".theme");
  let contenuTexte = [btnTheme.textContent, "Thème initial"];
  let indiceContenuTexte = 0;

  btnTheme.onclick = function () {
    document.querySelector("body").classList.toggle("sombre");

    btnTheme.textContent = contenuTexte[++indiceContenuTexte % 2];
  }
}

function initialiserBoutonCalculer() {
  document.getElementById("btn-calculer-total").onclick = function() {
    let champsHeures = document.querySelectorAll(".champ-heure");
    let valeursHeures = [];
    for (let champ of champsHeures)
      valeursHeures.push(+champ.value);

    document.getElementById("conteneur-total-heures").textContent = calculerSomme(valeursHeures);
  }
}


function calculerSomme(nombres) {
  if (!Array.isArray(nombres)) {
    alert("Il faut envoyé un tableau");
    return;
  }

  let somme = 0;
  for (let n of nombres) {
    if (isNaN(n)) {
      alert("Il faut que tous les éléments du tableau soient des nombres");
      return;
    }
    somme += n;
  }
  return somme;
}

