// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  $('body').removeClass('no-fouc');
  $('.banner_content').fadeIn(2000);
  $('.quote').fadeIn(4000);
  $('#notice_wrapper').fadeOut(4000);
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if (wScroll > ($('.callout').offset().top)/3) {
    $('.callout').each(function(){
      $('.callout').addClass('is-showing');
    });
  }
  if (wScroll < ($('.callout').offset().top)/3) {
    $('.callout').each(function(){
      $('.callout').removeClass('is-showing');
    });
  }

  if (wScroll > ($('.cta-content').offset().top)/2){
    $('.cta-content').css({
      'opacity' : '1'
    });
  }
});
