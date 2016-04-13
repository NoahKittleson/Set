
var clock;
var pause = document.getElementById("pause");
$(document).ready(function(event) {
  event.preventDefault;

  $("#modal-rules").click(function(event) {
    $('#myModal').modal('show');
  });
  $("#double-set").click(function() {
    $("#hidden-ds").fadeIn();
  });

  clock = $('.clock').FlipClock(60, {
  		        clockFace: 'MinuteCounter',
  		        countdown: true,
  		        autoStart: false,

  		    });

  		    $('#start').click(function(e) {

  		    	clock.start();
            function pauseTimer() {
                  value = timer.textContent;
                  clearTimeout(id);
              }
            pause.addEventListener("click", pauseTimer, false);
  		    });



  //   var timer = document.getElementById("timer");
  //   var start = document.getElementById("start");
  //   var pause = document.getElementById("pause");
  //   var resume = document.getElementById("resume");
  //   var id;
  //   var value = "00:00";
  //
  //   function startTimer(m, s) {
  //       timer.textContent = m + ":" + s;
  //       if (s == 0) {
  //           if (m == 0) {
  //               return;
  //           } else if (m != 0) {
  //               m = m - 1;
  //               s = 60;
  //           }
  //       }
  //
  //       s = s - 1;
  //       id = setTimeout(function () {
  //           startTimer(m, s)
  //       }, 1000);
  //   }
  //
  //   function pauseTimer() {
  //       value = timer.textContent;
  //       clearTimeout(id);
  //   }
  //
  //   function resumeTimer() {
  //       var t = value.split(":");
  //
  //       startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
  //   }
  //
  //   start.addEventListener("click", function () {
  //       startTimer(1, 0);
  //   }, false);
  //
  //   pause.addEventListener("click", pauseTimer, false);
  //
  //   resume.addEventListener("click", resumeTimer, false);
  //
  //   $("#replay").click(function()  {
  //   window.location.reload()
  // });
  // $('.countdown').final_countdown({
  //   'start': 1362139200,
  //   'end': 1388461320,
  //   'now': 1387461319
  // }, function() {
  //   // Finish Callback
  // });

});
