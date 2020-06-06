$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
      });

      $("#loginButton").click(function(){
        $("#loginModal").modal("show");
      });
});


$('.dropdown-toggle').click(function(e) {
    if ($(document).width() > 768) {
      e.preventDefault();
  
      var url = $(this).attr('href');
  
      if (url !== '#') {
        window.location.href = url;
      }
  
    }
  });

  