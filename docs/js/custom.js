/*
* Version 1.1
* Author Harry Du 
* Mail: dumingyuan0829@163.com
*/

$(function(){
	console.log("Hello Guys! If you are interested in my App before copying scripts, pls research it ;-] or contact me!")
	$("area[rel^='prettyPhoto']").prettyPhoto();				
	$(".gallery a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	//Call contactMeFormData function.
	contactMeForm();
});

//Add a function to post Ajax requst.
function contactMeForm(){
	$('#contactMeForm').submit(function(event){
		var contactMeFormData = $(this).serialize();
		if($('#inputName').val() && $('#inputEmail').val()){
			$.ajax({
				url : 'PHP/sendMail.php',
				data : contactMeFormData,
				type : 'POST',
				success : function(response){
					//call showPrompt function			
					showPrompt("Submit successfully!");
					$('#contactMeForm input').map(function(){
	  					$(this).val('');
	  				});
	  				$('#contactMeForm #mesgInfor').val('');

				},
				error : function(error){
					//call showPrompt function	
					showPrompt("Submit failed :-( try again.");
				},
				complete : function(){
					$('#contactMeForm input').map(function(){
	  					$(this).val('');
	  				});
	  				$('#contactMeForm #mesgInfor').val('');	
				}
			});
  		}else{
  			//call showPrompt function			
			showPrompt("Please input the required field!");
  		}
  		return false;
	});

}

//Add a function to show the Prompt.
function showPrompt(msg){
	$("<span class='text-error' style='margin-left:10px'>"+ msg +"</span>").insertAfter("button[type='submit']").fadeOut(5000,function(){
		$(this).remove();
	});
}

