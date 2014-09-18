$(document).ready(function(){
$("#contact-form").submit(function(){

var str = $(this).serialize();

   $.ajax({
   type: "POST",
   url: "form/contact.php",
   data: str,
   success: function(msg){
    
$("#note").ajaxComplete(function(event, request, settings){

if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
{
result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
document.getElementById('contact-form').reset();
}
else
{
result = msg;
}

$(this).html(result);

});

}

 });

return false;

});

});