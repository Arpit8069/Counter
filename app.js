let counter = 0;
let history = [];
let historyIndex = -1;
const counterDisplay = document.getElementById("counter");
const progressBar = document.getElementById("progress");

function updateDisplay() {
  counterDisplay.textContent = counter;
  progressBar.style.width = (counter / 150) * 100 + "%";
}

function add() {
  if (counter < 150) {
    counter++;
    saveState();
    updateDisplay();
  }
}

function subtract() {
  if (counter > 0) {
    counter--;
    saveState();
    updateDisplay();
  }
}
function saveState() {
  history = history.slice(0, historyIndex + 1);
  history.push(counter);
  historyIndex++;
}

function undo() {
  if (historyIndex > 0) {
    historyIndex--;
    counter = history[historyIndex];
    updateDisplay();
  }
}

function redo() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    counter = history[historyIndex];
    updateDisplay();
  }
}
