document.addEventListener('DOMContentLoaded', () => {
  let timer;
  const startStopButton = document.getElementById('startStopButton');
  const resetButton = document.getElementById('resetButton');
  const progressBar = document.getElementById('progressBar');
  const timeInput = document.getElementById('timeInput');
  const endTimerSound = document.getElementById('endTimerSound');

  startStopButton.addEventListener('click', function() {
    if (this.textContent === 'Start') {
      const timeInSeconds = parseInt(timeInput.value) * 60;
      if (timeInSeconds > 0) {
        startTimer(timeInSeconds);
        this.textContent = 'Stop';
        resetButton.disabled = false;
      } else {
        alert('Please enter a valid number of minutes.');
      }
    } else {
      stopTimer();
    }
  });

  resetButton.addEventListener('click', resetTimer);

  function startTimer(duration) {
    let time = duration, minutes, seconds;
    timer = setInterval(() => {
      minutes = parseInt(time / 60, 10);
      seconds = parseInt(time % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      updateDisplay(minutes, seconds);
      updateProgressBar(duration, time);

      if (--time < 0) {
        endTimerSound.play();
        stopTimer();
        resetButton.disabled = true;
        startStopButton.textContent = 'Start';
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
    startStopButton.textContent = 'Start';
  }

  function resetTimer() {
    stopTimer();
    updateDisplay("00", "00");
    progressBar.style.width = '0%';
    startStopButton.textContent = 'Start';
    resetButton.disabled = true;
  }

  function updateDisplay(minutes, seconds) {
    // Update the display with the remaining time
    const display = document.getElementById('clock');
    display.textContent = minutes + ":" + seconds;
  }

  function updateProgressBar(totalDuration, timeLeft) {
    const percentage = 100 - (timeLeft / totalDuration) * 100;
    progressBar.style.width = percentage + '%';
  }
});
