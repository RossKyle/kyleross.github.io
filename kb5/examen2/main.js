window.onload = function () {
  let Employe = new Employer("Bob","20","40000");
  logEmploye(Employe);
  $("div").addClass("evidence");
  $(":radio[name = 'option']").each(function () {
    console.log($(this).val());
  });

  $(":button[id='btn1']").on({
    click : function(){
      alert('Bonjour!');
    }
  })
  $.get("https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=49e0ebb398a59b46fbc7e3057f7d9321", function (objet) {
    $("#conteneurDonnee").text(objet.main.pressure);
  });
};
function Employer(nomIni,nbrAnneIni,salaireIni){


  this.nom = Employer.setNom(nomIni);
  this.nom = Employer.getNom();

  this.nbrAnne = Employer.setExperience(nbrAnneIni);
  this.nbrAnne = Employer.getExperience();
  this.salaire =  Employer.setSalaire(salaireIni);
  this.salaire =  Employer.getSalaire();
}

function logEmploye(employe){

  console.log(employe.genererChaine())

}

Employer.prototype.genererChaine = function(){
  return `${this.nom} - ${this.nbrAnne} - ${this.salaire}`;
};

Employer.getNom = function() {
  return this.nom ;

};

Employer.setNom= function(nouveauNom){
  this.nom = nouveauNom;
};

Employer.getSalaire = function() {
  return this.salaire ;

};

Employer.setSalaire = function(nouveauSal){
  if (nouveauSal < 0) {
    nouveauSal ="0";
  }
  this.salaire = nouveauSal;
};

Employer.getExperience = function() {
  return this.nbrAnne ;

};

Employer.setExperience = function(nouveauAnnee){
  if (nouveauAnnee < 0) {
    nouveauAnnee ="0";
  }
  this.nbrAnne = nouveauAnnee;
};


