
//définir des constantes pour les dimensions du canevas
const CanvasWidth = 640;
const CanvasHeight = 480;

//Une fois que le DOM est prêt
window.onload = function() {

  let canvas = createGameCanvas(CanvasWidth, CanvasHeight);
  document.querySelector("body").appendChild(canvas);

  initializeGraphicalContext(canvas);
  let ctx = canvas.getContext("2d");
  ctx.strokeRect(0,0, 100, 100);
  ctx.fillRect(100,100,100,100);
  ctx.strokeText("Welcome",250, 50);


  //setInterval → 1er param est une fonction
  //            → 2e param est le temps en millisecondes entre chaque rappel de la fonction
  let interval = setInterval(function() { console.log("yo")}, 1000);

  //setTimeout → après un lapse de temps, exécute la fonction. Ne pas répéter.
  //clearInterval → arrête l'effet d'un objet créé par setInterval
  let timeout = setTimeout(function() { clearInterval(interval) }, 5000);

  //les tableaux sont de type référence (comme en C#)
  //les number sont de type valeur (comme les int/float/bool/etc. en C#)
  //Si nous voulons envoyer un number est référence, nous pouvons
  //le mettre dans un tableau

  //le mot clé ref n'existe pas en JS
  let x = [5];
  test(x);
  console.log(x[0]);
}

//
function test(n)
{
  n[0]--;
}

function initializeGraphicalContext(canvas)
{
  let ctx = canvas.getContext("2d");
  ctx.font = "100px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#FF0000"
  ctx.strokeStyle = "#0000FF";
}

function createGameCanvas(width, height) {
  //créer un canevas
  let canvas = document.createElement("canvas");
  //Donner un style au canevas
  canvas.classList.add("game-canvas");
  //Donner les dimensions au canevas
  canvas.width = width;
  canvas.height = height;

  return canvas;
}