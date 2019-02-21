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
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
});

$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

// $(document).ready(function(){
//     $("#menu").on("click","a", function (event) {
//        event.preventDefault();
//        var id  = $(this).attr('href'),
//        top = $(id).offset().top;
//        $('body,html').animate({scrollTop: top}, 2000);
//     });
// });

$(document).ready(function(){
    $("#font1").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font6 example-font7').addClass('example-font1');
    });
    $("#font2").on("click", function (event) {
       $('body').find('.example').removeClass('example-font1 example-font3 example-font4 example-font5 example-font6 example-font7').addClass('example-font2');
    });
    $("#font3").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font1 example-font4 example-font5 example-font6 example-font7').addClass('example-font3');
    });
    $("#font4").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font1 example-font5 example-font6 example-font7').addClass('example-font4');
    });
    $("#font5").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font1 example-font6 example-font7').addClass('example-font5');
    });
    $("#font6").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font1 example-font7').addClass('example-font6');
    });
    $("#font7").on("click", function (event) {
       $('body').find('.example').removeClass('example-font2 example-font3 example-font4 example-font5 example-font6 example-font1').addClass('example-font7');
    });
});

$(document).ready(function(){
    $("#tag-picture0").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic1 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic0');
    });
    $("#tag-picture1").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic1');
    });
    $("#tag-picture2").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic1 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic2');
    });
    $("#tag-picture3").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic1 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic3');
    });
    $("#tag-picture4").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic1 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic4');
    });
    $("#tag-picture5").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic1 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic5');
    });
    $("#tag-picture6").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic1 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic6');
    });
    $("#tag-picture7").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic1 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic7');
    });
    $("#tag-picture8").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic1 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic8');
    });
    $("#tag-picture9").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic1 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic9');
    });
    $("#tag-picture10").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic1 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic10');
    });
    $("#tag-picture11").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic1 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic11');
    });
    $("#tag-picture12").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic1 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic12');
    });
    $("#tag-picture13").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic1 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic13');
    });
    $("#tag-picture14").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic1 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic14');
    });
    $("#tag-picture15").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic1 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic15');
    });
    $("#tag-picture16").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic1 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic16');
    });
    $("#tag-picture17").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic1 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic17');
    });
    $("#tag-picture18").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic1 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic18');
    });
    $("#tag-picture19").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic1 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic19');
    });
    $("#tag-picture20").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic1 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic20');
    });
    $("#tag-picture21").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic1 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic21');
    });
    $("#tag-picture22").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic1 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic22');
    });
    $("#tag-picture23").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic1 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic23');
    });
    $("#tag-picture24").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic1 example-pic25 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic24');
    });
    $("#tag-picture25").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic1 example-pic26 example-pic27 example-pic28 example-pic29 ').addClass('example-pic25');
    });
    $("#tag-picture26").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic1 example-pic27 example-pic28 example-pic29 ').addClass('example-pic26');
    });
    $("#tag-picture27").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic1 example-pic28 example-pic29 ').addClass('example-pic27');
    });
    $("#tag-picture28").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic1 example-pic29 ').addClass('example-pic28');
    });
    $("#tag-picture29").on("click", function (event) {
       $('body').find('.example').removeClass('example-pic0 example-pic2 example-pic3 example-pic4 example-pic5 example-pic6 example-pic7 example-pic8 example-pic9 example-pic10 example-pic11 example-pic12 example-pic13 example-pic14 example-pic15 example-pic16 example-pic17 example-pic18 example-pic19 example-pic20 example-pic21 example-pic22 example-pic23 example-pic24 example-pic25 example-pic26 example-pic27 example-pic28 example-pic1 ').addClass('example-pic29');
    });
});

$(document).ready(function(){
    $("#color1").on("click", function (event) {
       $('body').find('.example').removeClass('color2 color3 color4').addClass('color1');
    });
    $("#color2").on("click", function (event) {
       $('body').find('.example').removeClass('color1 color3 color4').addClass('color2');
    });
    $("#color3").on("click", function (event) {
       $('body').find('.example').removeClass('color2 color1 color4').addClass('color3');
    });
    $("#color4").on("click", function (event) {
       $('body').find('.example').removeClass('color2 color3 color1').addClass('color4');
    });
});
