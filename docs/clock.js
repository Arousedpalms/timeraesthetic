// Get the elements from the DOM
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-timer');
const stopBtn = document.getElementById('stop-timer');
const resetBtn = document.getElementById('reset-timer');
const setTimerBtn = document.getElementById('set-timer-btn');
const setMinutes = document.getElementById('set-minutes');
const alarmSound = document.getElementById('alarmSound');

let countdown;
let timerSeconds = 0; // Timer set for 0 seconds initially

function timer(seconds) {
  // Clears any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds); // to display the time immediately, not after 1 second

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Check if we should stop the timer
    if (secondsLeft < 0) {
      clearInterval(countdown);
      playAlarm();
      return;
    }

    // Display the remaining time
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;
  const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display; // Also updates the tab title with the timer
}

function playAlarm() {
  alarmSound.play();
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0; // Rewind to start
}

// Start the timer
startBtn.addEventListener('click', () => {
  const seconds = parseInt(setMinutes.value) * 60 || timerSeconds;
  timer(seconds);
});

// Stop the timer
stopBtn.addEventListener('click', () => {
  clearInterval(countdown);
});

// Reset the timer
resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  timerDisplay.textContent = '00:00:00';
  document.title = 'Timer Reset';
  timerSeconds = 0; // Reset the timer seconds
});

// Set the timer
setTimerBtn.addEventListener('click', () => {
  const minutes = parseInt(setMinutes.value);
  if (!isNaN(minutes) && minutes > 0) {
    timerSeconds = minutes * 60;
    displayTimeLeft(timerSeconds);
  } else {
    alert('Please enter a positive number of minutes.');
  }
});

// Initially update the display
displayTimeLeft(timerSeconds);
