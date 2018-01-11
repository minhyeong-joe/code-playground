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

  // delete all entries on button click
  $('.btn.btn-confirm').on('click', function() {
    $('textarea').val("");
    $('body',target).empty();
    $('head',target).empty();
    $('#confirm-delete').modal('hide')
  });

  // iframe load initial textarea input
  var target = $('#output')[0].contentWindow.document;
  var html = $('#html-editor').val();
  var css = $('#css-editor').val();
  var js = $('#js-editor').val();
  $('body',target).prepend(html);
  $('head',target).append('<style>'+css+'</style>');
  $('body', target).append('<script style="text/javascript">'+js+'</script>');

  $('textarea').on('keyup', function() {

    target.open();
    target.close();

    var html = $('#html-editor').val();
    $('body',target).prepend(html);

    var css = $('#css-editor').val();
    $('head',target).append('<style>'+css+'</style>');

    var js = $('#js-editor').val();
    $('body', target).append('<script style="text/javascript">'+js+'</script>');

  });


});
