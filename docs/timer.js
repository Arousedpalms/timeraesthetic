// timer.js

// Select the elements from the DOM
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Timer variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Function to update the timer display
function updateTime() {
  // Calculate the time elapsed
  elapsedTime = Date.now() - startTime;

  // Convert milliseconds to minutes and seconds
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  // Add leading zeros if necessary
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  minutes = (minutes < 10) ? '0' + minutes : minutes;

  // Update the display
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 1000);
  startButton.disabled = true;
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
}

// Event listeners for the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);

// Initialize the timer display
updateTime();
