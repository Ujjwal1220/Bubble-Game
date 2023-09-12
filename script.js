var score = 0;
var timer = 60;
var hitrn = 0;
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 130; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    document.querySelector("#pbtm").innerHTML = clutter;
  }
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over &#128512</h1>`;
    }
  }, 1000);
}

function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increasescore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}
// EVENT BUBBLING CONCEPT IS MAIN SO STUDY CAREFULLY
// jispe click karoge wo element per event raise hoga aur event listener naa milne per event element ke parent per listener dhoodhega wha per bhi naa milne per parent ke parent per dhoodhega

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clcikednumber = Number(details.target.textContent);
  if (clcikednumber == hitrn) {
    increasescore();
    makeBubble();
    getnewhit();
  }
});
makeBubble();
runTimer();
getnewhit();
