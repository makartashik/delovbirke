$(document).ready(function(){
  $('.page-banner').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
  });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
       top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 2000);
    });
});
