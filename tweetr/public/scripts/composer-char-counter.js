$(document).ready(function() {
  $('textarea').on('input', function (ev) {
    let len = $(this).val().length;
    updateCountdown(len);
  })
})


function updateCountdown(len) {
    var charsLeft = 140 - len;
    $('.counter').text(charsLeft);
      $('.counter').css('color', 'black');
    if (charsLeft < 0) {
      $('.counter').css('color', 'red');
    }
}
