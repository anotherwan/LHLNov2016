$(document).ready(function() {
  $('button').click(function(event) {
    $('.new-tweet').slideToggle()
    $('.new-tweet textarea').focus()
  });
})