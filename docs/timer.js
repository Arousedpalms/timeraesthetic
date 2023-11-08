// timer.js
let timer = null;
let elapsedTime = 0;

function updateTimeDisplay() {
  const seconds = Math.floor(elapsedTime % 60);
  const minutes = Math.floor((elapsedTime / 60) % 60);
  const hours = Math.floor(elapsedTime / 3600);
  
  document.getElementById('timer-display').textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('start-button').addEventListener('click', () => {
  if (timer === null) {
    timer = setInterval(() => {
      elapsedTime++;
      updateTimeDisplay();
    }, 1000);
 
