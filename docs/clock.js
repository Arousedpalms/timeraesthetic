// Get the elements from the DOM
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const setTimerBtn = document.getElementById('set-timer-btn');
const customTimer = document.getElementById('custom-timer');

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
  // Ensure your HTML includes an audio element with the ID 'alarmSound'
  const alarmSound = document.getElementById('alarmSound');
  if (alarmSound) {
    alarmSound.play();
  }
}

// Start the timer
startBtn.addEventListener('click', () => {
  const minutes = parseInt(customTimer.value);
  const seconds = isNaN(minutes) ? timerSeconds : minutes * 60;
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
  const minutes = parseInt(customTimer.value);
  if (!isNaN(minutes) && minutes >= 0) {
    timerSeconds = minutes * 60;
    displayTimeLeft(timerSeconds);
  } else {
    alert('Please enter a valid number of minutes.');
  }
});

// Initially update the display
displayTimeLeft(timerSeconds);
