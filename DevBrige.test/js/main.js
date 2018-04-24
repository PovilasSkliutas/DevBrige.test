/*
 * Script File
 * Author: Povilas Skliutas
*/

/* Responsive menu toggler function */
$(document).ready(function() {

    let navToggler = $('.navToggler');
        menuResponsive = $('.main-navigation');

    $(navToggler).on ('click', function(e) {
        e.preventDefault();
        menuResponsive.slideToggle();
    })

});

/* Jquery realtime form validation */

/* form variables regex */
var $regexname=/^([a-zA-Z\s]{1,16})+$/i;
var $regexmessage=/^[0-9a-zA-Z\s]+$/i;

/* First Name realtime validation function */
   $('.firstName').on('keypress keydown keyup',function(){
            if (!$(this).val().match($regexname)) {
             // there is a mismatch, show the error message
                $('.emsg-1').removeClass('hidden');
                $('.emsg-1').show();
            }
          else{
               // else, do not display message
               $('.emsg-1').addClass('hidden');
              }
        });

/* Last name realtime validation function */
   $('.lastName').on('keypress keydown keyup',function(){
            if (!$(this).val().match($regexname)) {
             // there is a mismatch, show the error message
                $('.emsg-2').removeClass('hidden');
                $('.emsg-2').show();
            }
          else{
               // else, do not display message
               $('.emsg-2').addClass('hidden');
              }
        });

/* Message realtime validation function */
   $('.message').on('keypress keydown keyup',function(){
            if (!$(this).val().match($regexmessage)) {
             // there is a mismatch, show the error message
                $('.emsg-3').removeClass('hidden');
                $('.emsg-3').show();
            }
          else{
               // else, do not display message
               $('.emsg-3').addClass('hidden');
              }
        });

/* JavaScript form validation */
function validateForm() {

    let fName = false,
        lName = false,
        msg = false;

    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let message = document.getElementById("msg").value;

	let regName=/^([a-zA-Z\s]{3,16})+$/i; // regular expression to match only alphanumeric characters and spaces
    let regMessage=/^[0-9a-zA-Z\s]+$/i; // regular expression to match only alphanumeric characters, numbers and spaces

    // validation fails if the input doesn't match our regular expression
	if(!regName.test(firstName)) {
		document.getElementById('error1').innerHTML="Name contains invalid characters";
		contactForm.firstName.focus();
    } else {
        document.getElementById('error1').innerHTML="";
        fName = true;
    }

    if(!regName.test(lastName)) {
		document.getElementById('error2').innerHTML="Last name contains invalid characters";
		contactForm.lastName.focus();

    } else {
        document.getElementById('error2').innerHTML="";
        lName = true;
    }

    if(!regMessage.test(message)) {
		document.getElementById('error3').innerHTML="Message contains invalid characters";
		contactForm.Message.focus();;
    } else {
        document.getElementById('error3').innerHTML="";
        msg = true;
    }

    if(fName == true && lName == true && msg == true) {
        // validation was successful
        alert("Form successfully submitted");
        document.getElementById("contactForm").reset();
    }
return;
};

$('#contactForm').on('submit', function(e) {
    e.preventDefault();
    validateForm();

})
