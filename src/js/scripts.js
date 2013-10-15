(function ($, window, document, undefined) {

  'use strict';

  //accordion init
  $(function () {
    function initAccordion(el){
      var $image = $(el).find('.media__imageContainer');
      var $content = $(el).find('.media__textContent');
      function hideUnnecessary(){
        $image.hide();
        $content.hide();
      }
      hideUnnecessary();
      $(el).each(function(){
        var $prime = $(this).find('header');
        $prime.click(function(){
          hideUnnecessary();
          $(this).find('.media__imageContainer').show();
          $(this).siblings('.media__textContent').show();
        });
      });
    }


    //add accordion on mobiles
    $(window).resize(function(){
      var viewport = $(window).width();
      if (viewport < 620){
        console.log('asdlfasd');
        $('.media--M').addClass('media-accordion');
        initAccordion('.media-accordion');
      } else if (viewport > 620){
        $('.media--M').removeClass('media-accordion');
      }
    })
  });

})(jQuery, window, document);
