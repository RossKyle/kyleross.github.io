let q;
let questionIndex = 0;
let btns;
let btnSkip;
let btnStart;
let btnRewind;
let codeText;
let btnPause;
let qh;
let video;
let firstplay = true;
let timer;

window.onload = function() {
  video = document.getElementsByTagName("video")[0];
  q = document.getElementById("question")
  btnStart = document.getElementById("btnStart");
  btnPause = document.getElementById("btnPause");
  btnRewind = document.getElementById("btnRewind");
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

  questionIndex = 0;
  setInterval(function() {t.textContent = msToTime(video.currentTime * 1000)}, 500);
  btnSkip.disabled = true;
  btnSkip.onclick = function() {
    questionIndex++;
    video.play();
    btnStart.disabled = false;
    btnRewind.disabled = false;
    q.textContent = "";
  }


  btns = [btnStart, btnPause, btnRewind];

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
  var hrs = (s - mins) / 60;

  return pad(mins) + ':' + pad(secs);
}

function toggleBtns() {
  for (let b of btns)
    b.disabled = true;
  btnSkip.disabled = false;
}

function question1() {
  if (Math.floor(video.currentTime) != 15)
    return;
  video.pause();
  toggleBtns();
  q.innerHTML = "Réécrivez la déclaration de la classe Rectangle et ses attributs dans l'espace désigné." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Les indentations sont de 4 espaces."

  qh.textContent = "Question 1";
  codeText.placeholder = "Écrivez le code pour la question 1 ici."
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(
      "class Rectangle\n" +
      "{\n" +
      "    public int largeur;\n" +
      "    public int hauteur;\n" +
      "}")) {
      btnStart.disabled = false;
      btnRewind.disabled = false;
      questionIndex++;
      video.play();
      q.textContent = "";
    }
  }
}

function question2() {
  if (Math.floor(video.currentTime) != 20)
    return;
  video.pause();
  toggleBtns();
  q.innerHTML = "Ajoutez la méthode <code>public int CalculerAire()</code> dans votre code." +
    "<br><br>Suivez <b>exactement</b> le même format et la même orthographe présenté dans la vidéo." +
    "<br>Faites un saut de ligne après les attributs avant d'écrire la déclaration de la méthode.";

  qh.textContent = "Question 2";
  codeText.placeholder = "Écrivez le code pour la question 1 ici."
  codeText.disabled = false;
  codeText.onkeyup = function () {
    if (codeText.value.includes(
      "class Rectangle\n" +
      "{\n" +
      "    public int hauteur;\n" +
      "    public int largeur;\n" +
      "}")) {
      toggleBtns();
      video.play();
    }
  }
}

function Timer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.rewind = function() {
    remaining += 10000;
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}


