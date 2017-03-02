$(document).ready(function() {
  $('#textArea').keyup(function (e) {
    $('#myDiv').text($('textArea').val())
  })
})
