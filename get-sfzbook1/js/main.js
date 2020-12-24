$(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 2900){
          $(".right").addClass("fixed");
      }
      if (scroll <= 2900){
          $(".right").removeClass("fixed");

      }
      if (scroll >= 12300){
          $(".experts").addClass("hidden");

      }
      if (scroll <= 12300){
          $(".experts").removeClass("hidden");

      }
  });
});

function handleTickInit () {
  var ticker = $('.tick1');
  var value = '';
  $.ajax({
  url: 'https://new.zerouplab.com/api/total_sales',
  success: result => {
      value = result.value;
  },
  async: false
  });
  ticker.attr('data-value', value - 7);
  setTimeout(() => {
    ticker.attr('data-value', value);
  }, 500);
}