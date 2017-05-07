$(document).ready(function() {

//sliders
  $('.slider_air').slider();
  $('.slider_hel').slider();
  $('.slider_equip').slider();
  $('.slider_sup').slider();
  $('.slider_prod').slider();
  $('.slider_docs').slider();


//smooth scroll to anchor "#"
  $('#main_menu a[href^="#"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });

//button More...
  $(".about_us button").click(function() {
    $(this).addClass('inactive').next('div').slideDown(300);
  });

//resize menu on scroll
  $(window).scroll(function() {
    if (($(this).scrollTop() > 536) && ($('header.main_header').width() >= 784)) {
      $('header.main_header').removeClass('fixed_out').addClass('fixed').addClass('fixed_in');
      $('.main_image, .articles_page').css('margin-top', '141px');
    } else
    if (($(this).scrollTop() <= 536) && ($(this).scrollTop() > 140) && ($('header.main_header').width() >= 784)) {
      $('header.main_header').removeClass('fixed_in').addClass('fixed_out');
    }
    if (($(this).scrollTop() <= 140) && ($('header.main_header').width() >= 784)) {
      $('header.main_header').removeClass('fixed_in').removeClass('fixed_out').removeClass('fixed');
      $('.main_image, .articles_page').css('margin-top', '0px');
    }
    if (($(this).scrollTop() > 284) && ($('header.main_header').width() < 784)) {
      $('header.main_header').removeClass('fixed_out').addClass('fixed').addClass('fixed_in');
      $('.main_image, .articles_page').css('margin-top', '64px');
    } else
    if (($(this).scrollTop() <= 284) && ($(this).scrollTop() > 64) && ($('header.main_header').width() < 784)) {
      $('header.main_header').removeClass('fixed_in').addClass('fixed_out');
    }
    if (($(this).scrollTop() <= 64) && ($('header.main_header').width() < 784)) {
      $('header.main_header').removeClass('fixed_in').removeClass('fixed_out').removeClass('fixed');
      $('.main_image, .articles_page').css('margin-top', '0px');
    }
  });

//mobile menu button
  $('a.nav-opener').click(function() {
    if ($('body').width() < 784)
      $(this).toggleClass('nav-active');
      $('nav#main_menu>ul').slideToggle(300);
  });

//show menu after resize from smaller resolution
  $(window).resize(function() {
    if ($('body').width() < 784)
      $('nav#main_menu>ul').css("display", "none");
    $('a.nav-opener').removeClass('nav-active');
    //$('.offer_item_inner').css('display', 'none');
    if ($('body').width() >= 784)
      $('nav#main_menu>ul').css("display", "block");
  });

  $('button.search_switch').click(button_search);

  function button_search() {
    if ($(this).hasClass('clicked')) {
      $(this).prev('div').find('input').animate({
        'width': '0'
      }, 400);
      $(this).prev('div').animate({
        'marginRight': '170',
        'borderWidth': '0'
      }, 400).find('button').css('display', 'none');
      $(this).removeClass('clicked').animate({
        'right': '140'
      }, 400).find('i').replaceWith('<i class="fa fa-search"></i>');
      $('.social select').animate({
        'width': '80',
        'paddingLeft': '15'
      }, 400);
    } else {
      $(this).prev('div').find('input').css('display', 'block').animate({
        'width': '120'
      }, 400);
      $(this).prev('div').animate({
        'marginRight': '70',
        'borderWidth': '1'
      }, 400).find('button').css('display', 'block');
      $(this).addClass('clicked').animate({
        'right': '40'
      }, 400).find('i').replaceWith('<i class="fa fa-times"></i>');
      $('.social select').animate({
        'width': '0',
        'paddingLeft': '0'
      }, 400);
    }
  }

//what we offer item
  $('.offer_item').click(function() {
    if ($('body').width() >= 784) {
      $('.offer_item_inner').css({
        'left': '100%',
        'display': 'block'
      });
      $(this).next('.offer_item_inner').animate({
        'left': '0%'
      }, 500)
    } else {
      $(this).next('.offer_item_inner').slideToggle(500);
    }
  });
  $('.offer_item_inner .breadcrumb a').click(function() {
    event.preventDefault();
    $(this).closest('.offer_item_inner').animate({
      'left': '100%'
    }, 500);
  });

//tab panel in what we offer section
  $('.tab_list a[href^="#"]').click(tabs);

  function tabs() {
    var t = $(this);
    event.preventDefault();
    t.closest('ul').find('li').removeClass('active');
    t.closest('li').addClass('active');
    t.closest('.tab_list').next('.tab_panels').children('div').css('display', 'none');
    $(this.hash).fadeIn(500);
  }

//message box
  $('.msg_box a').click(function(){
    event.preventDefault();
    $(this).siblings('.contact_form').slideToggle(300);
  })
    
});