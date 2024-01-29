// ==================================================
// * Project Name   :  Ventro - Ecommerce Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  06 June 2021
// * Author         :  JThemes (https://themeforest.net/user/jthemes)
// * Developer      :  jThemes
// ==================================================


import $ from 'jquery';

  // back to top - start
  // --------------------------------------------------
   $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });

  //la funcion esta en components/backtotopbutton

  /*
  $(function() {
    $(".scroll").on('click', function() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      //$("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // back to top - end
  // --------------------------------------------------
*/
  

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_section').addClass("sticky")
      $('.logo_size').addClass("logo_s")
      $('.logo_size').removeClass("logo_m")
    } else {
      $('.header_section').removeClass("sticky")
      $('.logo_size').addClass("logo_m")
      $('.logo_size').removeClass("logo_s")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  



  