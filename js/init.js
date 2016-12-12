(function($){
  $(function(){

    $('.button-collapse').sideNav();


    // Working With Video Popup
    $('.cd-popup-close').on('click', function (event) {
      $('#videoPlayerPopup').removeClass('is-visible');
      players.forEach(function (player) {
        player.destroy();
      })
    })

    $('.open-video-popup').on('click', function () {
      var getUrl = $(this).attr("data-url");
      $('#videoUrl').attr('src', getUrl)
      $('#videoPlayerPopup').addClass('is-visible');
      players = plyr.setup(document.querySelector('.sochara-player'), [{autoplay: false, hideControls: true}]);
    })
    // Working With Video Popup

  }); // end of document ready
})(jQuery); // end of jQuery name space