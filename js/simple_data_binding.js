$(document).ready(function() {
  $('#textArea').keyup(function (e) {
    $('#myDiv').text($('textArea').val())
  })
})
//$(document).ready(function() {
// typing(); 
//}); 
//function typing(){ 

	//$('#textArea').on('keydown',function () {
		//
		//$('#myDiv').text($('#textArea').val()); 
	//})
//}
