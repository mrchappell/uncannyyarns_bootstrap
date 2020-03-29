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

      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {
                lat: 44.540,
                lng: -78.546
            },
            zoom: 8
        });
    }
    
    $(document).ready(function() {
        initMap();
    })
});
