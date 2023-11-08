document.addEventListener('DOMContentLoaded', function () {
  let timerInterval;
  let seconds = 0;
  let running = false;

  function updateTime() {
    seconds++;
    document.getElementById('time').innerText = formatTime(seconds);
  }

  function toggleTimer() {
    if (!running) {
      running = true;
      timerInterval = setInterval(updateTime, 1000);
      document.getElementById('startStopButton').innerText = 'Stop';
    } else {
      running = false;
      clearInterval(timerInterval);
      document.getElementById('startStopButton').innerText = 'Start';
    }
  }

  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds].map(v => v < 10 ? "0" + v : v).join(":");
  }

  document.getElementById('startStopButton').addEventListener('click', toggleTimer);
});
