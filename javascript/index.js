const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(digitalTime) {

  minDecElement.innerText = digitalTime[0];
  minUniElement.innerText = digitalTime[1];
  secDecElement.innerText = digitalTime[3];
  secUniElement.innerText = digitalTime[4];
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here

}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerText = 'STOP';
    btnRightElement.className = 'btn split';
    btnRightElement.innerText = 'SPLIT';
    chronometer.start(printTime);
  } else{
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerText = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.innerText = 'RESET';
    chronometer.stop();
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    chronometer.reset(printTime);
    let listResult = document.querySelector("#splits");
    listResult.innerText = '';
    } else{
    let listTime = document.querySelector("#splits");
    const liRow = document.createElement("li");
    liRow.innerText = chronometer.split();
    listTime.appendChild(liRow);
  };
});