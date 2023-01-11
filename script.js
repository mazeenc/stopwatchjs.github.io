let startButton = document.querySelector('#start-timer');

let stopButton = document.querySelector('#stop-timer');

let resetButton = document.querySelector('#reset-timer');

let timeValue = 0;

let timeDisplay = document.querySelector('#timer-display')
console.log(timeDisplay);

let interval;

startButton.onclick = startTimer;
stopButton.onclick = stopTimer;
resetButton.onclick = resetTimer;

function startTimer() {
  clearInterval(interval);
  interval = setInterval( function(){
    console.log('running function');
    timeValue = timeValue + 1;

    console.log(timeValue);
    timeDisplay.innerHTML = timeValue;
    
  }, 1000);
}

function stopTimer(){
  clearInterval(interval);
}

function resetTimer(){
  timeValue = 0;
  timeDisplay.innerHTML = timeValue;
  clearInterval(interval);
}

function runTimer(){}
