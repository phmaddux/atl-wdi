// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    document.getElementById('numeric-display').textContent = timerValue;
    var numericDisplay = document.getElementById('numeric-display');
    numericDisplay.textContent = timerValue;
    if (timerValue <= 10) {
      numericDisplay.style.color = 'red';
      var newSize = (1.5 * Math.pow(1.05, 11 - timerValue)).toFixed(2);
      numericDisplay.style.fontSize = newSize + 'em';
    }
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
  },
  drawLitFuses: function(timerValue){
    // Your Code Here
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
