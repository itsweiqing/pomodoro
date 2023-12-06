export default class Timer {
    constructor(intervalTime = 25, audioFile = '') {
      this.intervalTime = intervalTime;
      this.currentTime = intervalTime;
      this.audioFile = audioFile;
      this.finished = false;
    }
  
    playSound() {
      if (this.finished) {
        // Play the sound file
        new Audio(this.audioFile).play();
      }
    }
  
    startTimer() {
      // Convert interval time to milliseconds
      this.currentTime = this.intervalTime * 60 * 1000;
  
      // Start the timer
      this.timerId = setInterval(() => {
        // Update currentTime by -1 second
        this.currentTime -= 1000;
  
        // If currentTime reaches 0, stop the timer and set finished to true
        if (this.currentTime <= 0) {
          this.finished = true;
          clearInterval(this.timerId);
          this.playSound();
        }
      }, 1000);
    }
  
    fastForward(period) {
      this.finished = true;
    
      // Set currentTime based on the period
      if (period === 'work') {
        this.currentTime = 5 * 60 * 1000; // 5 minutes break
      } else {
        this.currentTime = 25 * 60 * 1000; // 25 minutes work
      }
    
      // Stop active timer
      if (this.timerId) {
        clearInterval(this.timerId);
      }
    }
  
    extendTime() {
        // Add 5 minutes to the current timer
        this.currentTime += 5 * 60 * 1000; // Convert 5 minutes to milliseconds
      }
  
    getCurrentTime() {
      return this.currentTime;
    }
 
  }
 
