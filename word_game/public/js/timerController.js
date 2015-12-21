

function myTimer() {
  console.log('Timer started')
  setTimeout(function(){ alert("TIME IS UP!"); }, 90000);
};

// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setTimeout(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//         console.log(timer)
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         var display = document.getElementById('time');
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
//
// window.onload = function  () {
//        var ninetySeconds = 90 * 1;
//        startTimer(ninetySeconds, display);
//    }
// };



function showWords() {
  console.log('Here they are!')
  self.currentWord.guess = true;
}
