$(document).ready(function() {
  var stickyNavTop = $('header').offset().top;

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('header').addClass('sticky');
    }
    else {
      $('header').removeClass('sticky');
    }
  });
});