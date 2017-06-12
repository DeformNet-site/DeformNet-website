// Magnific-Popup options
$(document).ready(function() {
  $('#results_div').easyPaginate({
    paginateElement: 'div',
    elementsPerPage: 4,
    effect: 'fade'
  });

  $("a[href$='.png']").addClass("image-popup");

  $('#results_div').magnificPopup({
    delegate: 'a',
    cursor: 'mfp-zoom-out-cur',
    type: 'image',
    tLoading: 'Loading image...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: 'Image could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
  });
});
