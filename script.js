const remainingTime = document.getElementById("remaining-time");
const addTime = document.getElementsByClassName("add-time-button");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
let beginTimer = 0;
let timeRunning = false;

[...addTime].forEach((button) => {
  button.addEventListener("click", () => {
    updateSeconds(+button.value);
    startButton.disabled = false;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key == "s" && remainingTime.textContent !== "0") {
    if (!timeRunning && remainingTime.textContent !== "0") {
      beginTimer = setInterval(runTimer, 1000);
      startButton.textContent = "Pause";
    } else {
      clearInterval(beginTimer);
      timeRunning = false;
      startButton.textContent = "Resume";
    }
  }
});

startButton.addEventListener("click", (event) => {
  if (!timeRunning && remainingTime.textContent !== "0") {
    beginTimer = setInterval(runTimer, 1000);
    startButton.textContent = "Pause";
  } else {
    clearInterval(beginTimer);
    timeRunning = false;
    startButton.textContent = "Resume";
  }
});

resetButton.addEventListener("click", () => {
  remainingTime.textContent = 0;
  timeRunning = false;
  startButton.textContent = "Start";
  startButton.disabled = true;
  clearInterval(beginTimer);
});

function updateSeconds(seconds) {
  remainingTime.textContent = +remainingTime.textContent + seconds;
}

function runTimer() {
  if (+remainingTime.textContent === 0) {
    startButton.textContent = "Start";
    timeRunning = false;
    startButton.disabled = true;
    clearInterval(beginTimer);
    console.log("Timer stopped!");
  } else {
    timeRunning = true;
    console.log("minus 1 second");
    remainingTime.textContent = +remainingTime.textContent - 1;
  }
}
