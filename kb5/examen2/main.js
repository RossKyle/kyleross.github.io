window.onload = function() {

  let testNom = "Joe";
  let testSalaire = 40000;
  let testExp = 5;

  let ep1 = new Employe(testNom, testSalaire, testExp);

  let selectTousLesDiv = $("div");
  for(let div of selectTousLesDiv){
    div.classList.add("evidence");
  }

  let selectInputOption = $("input");
  for(let input of selectInputOption){
    if(input.name === "option" ){
      console.log(input.value);
    }
  }


  $("#btn1").on("click", function () {
    alert("bonjour")
  });

  let url = "https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=49e0ebb398a59b46fbc7e3057f7d9321";

  let obj = $.get(url, function (data) {
    let result = data.main.prototype;
    console.log(result);
    let span = $("span");
    span.text = main.prototype;
  })
};

function Employe(nom, salaire, nbAnneeExp) {
  this.nom = nom;
  this.salaire = salaire;
  this.AnneExp = nbAnneeExp;
}

Employe.prototype.getNom = function () {
  return this.nom;
};
Employe.prototype.setNom = function (nom) {
  this.nom = nom;
};

Employe.prototype.getSalaire = function () {
  return this.salaire;
};
Employe.prototype.setSalaire = function (salaire) {
  if (salaire >= 0){
    this.salaire = salaire;
  }
  else {
    this.salaire = 0;
  }
};

Employe.prototype.getAnneExp = function() {
  return this.AnneExp;
};
Employe.prototype.setAnneExp = function(nbAnne) {
  if(nbAnne >= 0){
    this.AnneExp = nbAnne;
  }
  else {
    this.AnneExp = 0;
  }
};

Employe.prototype.genererChaine = function(){
  return this.nom + " - " + this.salaire + " - " + this.AnneExp;
};

function logEmploye(employe){

  console.log(employe.genererChaine());

  for (let compteur = 0; compteur < 3; compteur ++){
    if(compteur === 0){
      console.log("Nom : " + employe.prototype.getNom());
    }
    else if(compteur === 1){
      console.log("Salaire : " + employe.prototype.getSalaire());
    }
    else if(compteur === 2){
      console.log("Nb Anné Experience : " + employe.prototype.getAnneExp());
    }
  }
}

