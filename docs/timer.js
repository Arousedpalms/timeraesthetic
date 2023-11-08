let timerInterval;
let seconds = 0;
let running = false;

// This function will be called every second when the timer is running
function updateTime() {
  seconds++;
  document.getElementById('time').innerText = formatTime(seconds);
}

// This function starts or stops the timer based on its current state
function toggleTimer() {
  if (!running) {
    running = true;
    timerInterval = setInterval(updateTime, 1000); // start the timer
    document.getElementById('startStopButton').innerText = 'Stop';
  } else {
    running = false;
    clearInterval(timerInterval); // stop the timer
    document.getElementById('startStopButton').innerText = 'Start';
  }
}

// Converts the time from seconds to a hh:mm:ss format
function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Pad the numbers to two digits with leading zeros
  return [hours, minutes, seconds]
    .map(v => v < 10 ? "0" + v : v)
    .join(":");
}

// Attach the event to the button for starting/stopping the timer
document.getElementById('startStopButton').addEventListener('click', toggleTimer);
