$('#toggle').click(function() {
    $('#open').toggleClass('close');
     $('#main').toggleClass('openMain');
     $('#open-brand').toggleClass('close-brand');
     $('#menu').toggleClass('open-menu');
});

$('#hamburger').click(function() {
  $('#open').toggleClass('dropdown')
});