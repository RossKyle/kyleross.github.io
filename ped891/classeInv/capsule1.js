let q;
let questionIndex = 0;
let btns;
let btnSkip;
let btnStart;
let btnRewind;
let btnForward;
let codeText;
let btnPause;
let qh;
let video;
let timer;
let firstplay = true;
let times = [(3*60+43), (4*60+20), (4*60+32), (5 * 60 + 7), 10000000]
let reps;

window.onload = function() {
  video = document.getElementsByTagName("video")[0];
  q = document.getElementById("question")
  btnStart = document.getElementById("btnStart");
  btnPause = document.getElementById("btnPause");
  btnRewind = document.getElementById("btnRewind");
  btnForward = document.getElementById("btnForward");
  btnSkip = document.getElementById("btnSkip");

  let question = document.getElementById("question");
  qh = document.getElementById("q");
  codeText = document.getElementById("codetext")

  let t = document.getElementById("time");

  btnStart.onclick = function() {
    if (firstplay) {
      btnStart.textContent = "Reprendre";
      firstplay = false;
    }
    video.play();
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnRewind.disabled = false;
    btnForward.disabled = false;
    t.textContent = msToTime(video.currentTime * 1000)
  }

  btnPause.disabled = true;
  btnPause.onclick = function() {
    video.pause();
    btnPause.disabled = true;
    btnStart.disabled = false;
    t.textContent = msToTime(video.currentTime * 1000)
  }

  btnRewind.disabled = true;
  btnRewind.onclick = function() {
    video.currentTime = video.currentTime - 10;
    btnForward.disabled = false;
    btnStart.disabled = false;
    t.textContent = msToTime(video.currentTime * 1000)
  }

  btnForward.disabled = true;
  btnForward.onclick = function() {
    if (video.currentTime + 10 < times[questionIndex]) {
      video.currentTime = video.currentTime + 10;
      if (video.currentTime >= video.duration) {
        btnForward.disabled = true;
        btnPause.click();
      }
      t.textContent = msToTime(video.currentTime * 1000)
    }
  }

  questionIndex = 0;
  setInterval(function() {
    t.textContent = msToTime(video.currentTime * 1000);
    if (video.currentTime + 10 > times[questionIndex]) {
      btnForward.disabled = true;
    }
  }, 500);

  btnSkip.disabled = true;
  btnSkip.onclick = function() {
    questionComplete();
  }



  btns = [btnStart, btnPause, btnRewind, btnForward];

  let questions = [question1, question2, question3, question4];
  timer = setInterval(function() {
      questions[questionIndex].call();
  }, 500);

  let rep1 = "class Rectangle\n" +
    "{\n" +
    "    public int largeur;\n" +
    "    public int hauteur;\n" +
    "}";
  let rep2  = 'class Rectangle\n{\n    public int largeur;\n    public int hauteur;\n\n    public int CalculerAire()\n    {\n        return largeur * hauteur;\n    }\n}';
  let rep3  = 'class Rectangle\n{\n    public int largeur;\n    public int hauteur;\n\n    public int CalculerAire()\n    {\n        return largeur * hauteur;\n    }\n\n    public int CalculerPérimètre()\n    {\n        return 2 * (largeur + hauteur);\n    }\n}';
  let rep4  = 'class Rectangle\n{\n    public int largeur;\n    public int hauteur;\n\n    public int CalculerAire()\n    {\n        return largeur * hauteur;\n    }\n\n    public int CalculerPérimètre()\n    {\n        return 2 * (largeur + hauteur);\n    }\n\n    public Rectangle()\n    {\n        largeur = 3;\n        hauteur = 4;\n    }\n}';
  reps = [rep1, rep2, rep3, rep4];
}

function msToTime(s) {

  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;

  return pad(mins) + ':' + pad(secs);
}

function turnOffBtns() {
  for (let b of btns)
    b.disabled = true;
  btnSkip.disabled = false;
}

function questionComplete() {
  codeText.value = reps[questionIndex];
  btnPause.disabled = false;
  btnRewind.disabled = false;
  btnSkip.disabled = true;
  btnForward.disabled = false;
  questionIndex++;
  video.play();
  qh.textContent = "Question";
  q.textContent = "";
  codeText.disabled = true;
}

function question1() {
  if (Math.floor(video.currentTime) != times[questionIndex])
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Réécrivez la déclaration de la classe Rectangle et ses attributs dans l'espace désigné." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Les indentations sont de 4 espaces." +
    "<br>Attention aux espaces superflus !"

  qh.textContent = "Question 1";
  codeText.placeholder = "Écrivez le code pour la question 1 ici.";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(reps[questionIndex])) {
      questionComplete();
    }
  }
}

function question2() {
 if (Math.floor(video.currentTime) != times[questionIndex])
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Réécrivez la méthode <code>public int CalculerAire()</code> dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après les attributs avant d'écrire la déclaration de la méthode.";

  qh.textContent = "Question 2";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(reps[questionIndex])) {
      questionComplete();
    }
  }
}

function question3() {
  if (Math.floor(video.currentTime) != times[questionIndex])
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Ajoutez la méthode <code>public int CalculerPérimètre()</code> dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après la méthode <code>CalculerAire()</code> avant d'écrire la déclaration de la méthode." +
    "<br>Aussi, utilisez l'expression suivante pour le calcul : <code>2 * (largeur + hauteur)</code>.";

  qh.textContent = "Question 3";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(reps[questionIndex])) {
      questionComplete();
    }
  }
}

function question4() {
  if (Math.floor(video.currentTime) != times[questionIndex])
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Réécrivez le constructeur dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après la méthode <code>CalculerPérimètre()</code> avant d'écrire la déclaration du constructeur.";

  qh.textContent = "Question 4";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(reps[questionIndex])) {
      questionComplete();
    }
  }
}
