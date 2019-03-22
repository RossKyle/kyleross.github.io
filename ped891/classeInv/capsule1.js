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
let times = [(3*60+42)]

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
    t.textContent = msToTime(video.currentTime * 1000)
  }

  btnForward.disabled = true;
  btnForward.onclick = function() {
    if (video.currentTime + 10 < times[questionIndex]) {
      video.currentTime = video.currentTime + 10;
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

  let questions = [question1, question2];
  timer = setInterval(function() {
      questions[questionIndex].call();
  }, 500);
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
  btnPause.disabled = false;
  btnRewind.disabled = false;
  btnSkip.disabled = true;
  btnForward.disabled = false;
  questionIndex++;
  video.play();
  q.textContent = "";
}

function question1() {
  if (Math.floor(video.currentTime) != times[0])
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Réécrivez la déclaration de la classe Rectangle et ses attributs dans l'espace désigné." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Les indentations sont de 4 espaces."

  qh.textContent = "Question 1";
  codeText.placeholder = "Écrivez le code pour la question 1 ici.";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(
      "class Rectangle\n" +
      "{\n" +
      "    public int largeur;\n" +
      "    public int hauteur;\n" +
      "}")) {
      questionComplete();
    }
  }
}

function question2() {
  if (Math.floor(video.currentTime) != 20)
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Ajoutez la méthode <code>public int CalculerAire()</code> dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après les attributs avant d'écrire la déclaration de la méthode.";

  qh.textContent = "Question 2";
  codeText.value = "";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(
      "class Rectangle\n" +
      "{\n" +
      "    public int hauteur;\n" +
      "    public int largeur;\n\n" +
      "    public int CalculerAire()\n" +
      "    {\n" +
      "        return largeur + hauteur;\n" +
      "    }\n" +
      "}")) {
      questionComplete();
    }
  }
}

function question3() {
  if (Math.floor(video.currentTime) != 20)
    return;
  video.pause();
  turnOffBtns();
  q.innerHTML = "Ajoutez la méthode <code>public int CalculerPérimètre()</code> dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après la méthode <code>CalculerAire()</code> avant d'écrire la déclaration de la méthode." +
    "<br>Aussi, utilisez <code>2 * (largeur + hauteur)</code>";

  qh.textContent = "Question 3";
  codeText.value = "";
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(
      "class Rectangle\n" +
      "{\n" +
      "    public int hauteur;\n" +
      "    public int largeur;\n\n" +
      "    public int CalculerAire()\n" +
      "    {\n" +
      "        return largeur + hauteur;\n" +
      "    }\n" +
      "    public int CalculerPérimètre()\n" +
      "    {\n" +
      "        return 2 * (largeur + hauteur);\n" +
      "    }\n" +
      "}")) {
      questionComplete();
    }
  }
}
