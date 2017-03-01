$(document).ready(function() {
 typing(); 
}); 
function typing(){ 

	$('#textArea').on('keydown',function () {
		$('#myDiv').text("")//the same as null
		$('#myDiv').text($('#textArea').val()); 
	})
}