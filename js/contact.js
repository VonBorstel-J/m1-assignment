const label1 = document.getElementById('textbox1');
const label2 = document.getElementById('textbox2'); 
const email = document.getElementById('email');
const phone = document.getElementById('phone')

$(document).ready(function() {
    $('email','phone').css('cursor', 'pointer');

    jQuery('email').click(function(){
        $(this).data('clicked', true);
      });

if(jQuery('email').data('clicked')) {
   ('label1').css(display)
} else {
    //run function2
}





});