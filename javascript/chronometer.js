class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId= setInterval(()=>{

      if(callback)
    {
      callback(this.split());
    }
      this.currentTime ++;
      
    }, 1000)
  
}

  getMinutes() {
    // ... your code goes here
    let minutes = 0;

    if(this.currentTime >= 60){
      minutes = Math.floor(this.currentTime / 60);
    }

    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0;

    seconds = Math.floor(this.currentTime % 60);

    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let number = value.toString();

    if(number.length === 1){
      number = `0${number}`;
    }

    return number;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    return `${minute}:${seconds}`;
  }

  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
