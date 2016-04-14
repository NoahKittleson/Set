
var clock;

var pause = document.getElementById("pause");
$(document).ready(function(event) {
  event.preventDefault;

  $("#modal-rules").click(function(event) {
    $('#myModal').modal('show');
    clock.stop();
  });

  $("#close-btn").click(function(event) {
    $('#myModal').modal('show');
    clock.start();
  });


  $("#GOreplay").click(function()  {
    window.location.reload()
  });

  $("#double-set").click(function() {
    $("#hidden-ds").fadeIn();
  });


  clock = $('.clock').FlipClock(60, {
      clockFace: 'MinuteCounter',
      countdown: true,
      autoStart: false,
  });

	$('#start').click(function() {
		  clock.start();
      $(".hidden-row").hide();
      $(".initial-hide").show();

    });

  $('#pause').click(function() {
    $("#pauseModal").modal('show');
		  clock.stop();
    });

  $('#resume').click(function(e) {
		  clock.start();
    });


  $("#replay").click(function()  {
    window.location.reload()
  });

});
