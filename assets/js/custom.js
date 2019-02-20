/*************************************

Template Name: Childcare | Personal Portfolio HTML5 Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Meruem | Personal Portfolio HTML5 Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/

/*global $ , alert, console*/

/* ==================================
      Start WOW
===================================== */
$(document).ready(function () {
  new WOW().init();
  }); 
  

  $(document).ready(function () {
    var scroll = new SmoothScroll('a[href*="#"]');
    }); 
    
/* ==================================
      Start niceScroll
===================================== */
  $(document).ready(function () {
    $("html").niceScroll({
      scrollspeed: "100",
      cursorcolor: "#ffd800",
      cursorborder: "3px solid #ffd800",
      cursorborderradius:0,
      sensitiverail: false,
      horizrailenabled: false,
  });
}); 

/* ==================================
      Start Navigation Bar
===================================== */
$(document).ready(function () {
  var header = $("#min-header"),
      height = header.height(),
      yOffset = 0,
      triggerPoint = 100;
  $('.header-height').css('height', height+'px');
  $(window).on( 'scroll', function() {
      yOffset = $(window).scrollTop();

      if (yOffset >= triggerPoint) {
        header.removeClass("animated cssanimation fadeIn");
          header.addClass("navbar-fixed-top  cssanimation animated fadeInDown");
      } else {
          header.removeClass("navbar-fixed-top cssanimation  animated fadeInDown");
          header.addClass("animated cssanimation fadeIn");
      }

  });
});


/* ==================================
      Start Slick slider
===================================== */
$(document).ready(function () {
   
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      loop: true,
      effect: 'fade',
      preloadImages: true,
      slidesPerView: 'auto',
      speed: 500,
      spaceBetween: 100

    },
    autoplay: {
      delay: 5000,
      speed: 500,

    },
    
  
  });

  
      });


      /* ==================================
      Start dropdown
===================================== */

$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});



// start loading 
$(window).on("load", function () {

  "use strict";

  // Loading Elements

  $(".sk-folding-cube").fadeOut(1000, function () {

      // Show The Scroll

      $("body").css("overflow", "hidden");

      $(this).parent().slideUp(1000, function () {

          $(this).remove();
      });
  });
});

