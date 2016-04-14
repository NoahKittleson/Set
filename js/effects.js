
var clock;

var pause = document.getElementById("pause");
$(document).ready(function(event) {
  event.preventDefault;

  $("#modal-rules").click(function(event) {
    $('#myModal').modal('show');
    // clock.stop();
  });

  $("#close-btn").click(function(event) {
    $('#myModal').modal('show');
    // clock.start();
  });

  $("#modal-rules2").click(function(event) {
    $('#myModal2').modal('show');
    clock.stop();
  });

  $("#end-btn").click(function(event) {
    $('#myModal2').modal('show');
    clock.start();
  });



  $("#GOreplay").click(function()  {
    window.location.reload()
  });

  $("#double-set").click(function() {
    $("#hidden-ds").fadeIn();
  });


  clock = $('.clock').FlipClock(600, {
      clockFace: 'MinuteCounter',
      countdown: true,
      autoStart: false,
  });

	$('#start').click(function() {
		  clock.start();
      $('#modal-rules').hide();
      $(".hidden-row").hide();
      $(".initial-hide").show();
      $("#modal-rules2").show();

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

  $(".cardStyle").click(function() {
    $(this).addClass("cardShadow");
  });

  $("#submit").click(function() {
    $(".cardStyle").removeClass("cardShadow");
  });
});
