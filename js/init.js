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
      var getVideoUrl = $(this).attr("video-url");
      var getPosterUrl = $(this).attr("src");
      // $('#videoUrl').attr('src', getVideoUrl)

      players = plyr.setup(document.querySelector('.sochara-player'), [{autoplay: false, hideControls: true}]);
      players[0].source({
        type: 'video',
        sources: [{
          src:  getVideoUrl,
          type: 'video/mp4'
        }],
        poster: getPosterUrl
      });

      $('#videoPlayerPopup').addClass('is-visible');

    })
    // Working With Video Popup

  }); // end of document ready
})(jQuery); // end of jQuery name space