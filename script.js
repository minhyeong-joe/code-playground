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


  $('textarea').on('keyup', function() {
    var target = $('#output')[0].contentWindow.document;
    target.open();
    target.close();

    var html = $('#html-editor').val();
    $('body',target).append(html);

    var css = $('#css-editor').val();
    $('head',target).append('<style>'+css+'</style>');

    var js = $('#js-editor').val();
    $('head', target).append('<script type="text/javascript">'+js+'</script>');
    $( '#output' ).attr( 'src', function ( i, val ) { return val; });
  });


});
