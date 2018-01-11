$(function(){

  // button toggle

  function AllClosed() {
    var countActive = $('.btn.active').length;
    console.log(countActive);
    return !countActive;
  }

  $('.btn').on('click', function() {
    $(this).toggleClass("active");
    var toggle = $(this).attr("toggle");
    $('.'+toggle).fadeToggle("fast");
    if (AllClosed()) {
      $('.about').show("fast");
    } else {
      $('.about').hide("fast");
    }
  });

  // html editor



});
