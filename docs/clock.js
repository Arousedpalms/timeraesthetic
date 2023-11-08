// Get the elements from the DOM
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const setTimerBtn = document.getElementById('set-timer-btn');
const customHours = document.getElementById('custom-hours');
const customMinutes = document.getElementById('custom-minutes');

let countdown;
let timerSeconds = 0; // Timer set for 0 seconds initially

// Define the timer functions and event listeners as before...

// Set the timer
setTimerBtn.addEventListener('click', () => {
  const hours = parseInt(customHours.value) || 0;
  const minutes = parseInt(customMinutes.value) || 0;
  
  if (hours >= 0 && minutes >= 0) {
    timerSeconds = (hours * 3600) + (minutes * 60);
    displayTimeLeft(timerSeconds);
  } else {
    alert('Please enter a valid number of hours and minutes.');
  }
});

// Rest of your JavaScript code for starting, stopping, and resetting the timer...

// Initially update the display
displayTimeLeft(timerSeconds);
