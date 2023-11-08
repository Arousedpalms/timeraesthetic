// Get the elements from the DOM
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const setTimerBtn = document.getElementById('set-timer-btn');
const customHours = document.getElementById('custom-hours');
const customMinutes = document.getElementById('custom-minutes');
const alarmSound = document.getElementById('love-alarm-sound'); // Get the audio element

let countdown;
let timerSeconds = 0; // Timer set for 0 seconds initially

// Timer function
function timer(seconds) {
  // Clears any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // When timer hits zero
    if (secondsLeft < 0) {
      clearInterval(countdown);
      alarmSound.play(); // Play the alarm sound
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

// Display time in HH:MM:SS format
function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;
  const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

// Start Timer
startBtn.addEventListener('click', () => {
  timer(timerSeconds);
});

// Stop Timer
stopBtn.addEventListener('click', () => {
  clearInterval(countdown);
});

// Reset Timer
resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  alarmSound.pause(); // Stop the alarm sound if playing
  alarmSound.currentTime = 0; // Reset the audio file to the start
  timerDisplay.textContent = '00:00:00';
  document.title = 'Timer Reset';
  timerSeconds = 0;
});

// Set Timer
setTimerBtn.addEventListener('click', () => {
  const hours = parseInt(customHours.value, 10);
  const minutes = parseInt(customMinutes.value, 10);

  if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && minutes >= 0) {
    timerSeconds = (hours * 3600) + (minutes * 60);
    displayTimeLeft(timerSeconds);
  } else {
    alert('Please enter a valid number of hours and minutes.');
  }
});

// Initially update the display
displayTimeLeft(timerSeconds);
