/*global $*/
$(document).ready(function(){
    whenCheckMail();
});

function sign_up(){
  var inputs = document.querySelectorAll('.input_form_sign');
document.querySelectorAll('.ul_tabs > li')[0].className="";
document.querySelectorAll('.ul_tabs > li')[1].className="active";
  
  for(var i = 0; i < inputs.length ; i++  ) {
if(i == 2  ){

}else{
document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
}
}

setTimeout( function(){
for(var d = 0; d < inputs.length ; d++  ) {
 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block active_inp";
   }


 },100 );
 document.querySelector('.link_forgot_pass').style.opacity = "0";
  document.querySelector('.link_forgot_pass').style.top = "-5px";
  document.querySelector('.btn_sign').innerHTML = "SIGN UP";
  document.querySelector('.btn_sign').setAttribute('onclick','crypt_up()');

  setTimeout(function(){

 document.querySelector('.terms_and_cons').style.opacity = "1";
  document.querySelector('.terms_and_cons').style.top = "5px";
 
  },500);
  setTimeout(function(){
    document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_none";
 document.querySelector('.terms_and_cons').className = "terms_and_cons d_block";
  },450);
  
  $('#name').val('');
  $('#email').val('');
  $('#surname').val('');
  $('label').remove();
  document.getElementById('pwd').setAttribute('name','pwd');
  document.getElementById('email').setAttribute('name','email_up');
  document.getElementById('email').setAttribute('id','email_up');
}



function sign_in(){
  var inputs = document.querySelectorAll('.input_form_sign');
document.querySelectorAll('.ul_tabs > li')[0].className = "active";
document.querySelectorAll('.ul_tabs > li')[1].className = "";
  
  for(var i = 0; i < inputs.length ; i++  ) {
switch(i) {
    case 2:
 console.log(inputs[i].name);
        break;
    case 3:
 console.log(inputs[i].name);
    break;
    default:
document.querySelectorAll('.input_form_sign')[i].className = "input_form_sign d_block";
}
}//chiusura for

setTimeout( function(){
for(var d = 0; d < inputs.length ; d++  ) {
switch(d) {
    case 2:
 console.log(inputs[d].name);
        break;
    case 3:
 console.log(inputs[d].name);
    break;
    default:
 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign d_block";
 document.querySelectorAll('.input_form_sign')[2].className = "input_form_sign d_block active_inp";
 $('label').remove();
   }
  }
 },100 ); //chiusura timeout

 document.querySelector('.terms_and_cons').style.opacity = "0";
  document.querySelector('.terms_and_cons').style.top = "-5px";

  setTimeout(function(){
 document.querySelector('.terms_and_cons').className = "terms_and_cons d_none";
document.querySelector('.link_forgot_pass').className = "link_forgot_pass d_block";

 },500); //chiusura timeout

  setTimeout(function(){

 document.querySelector('.link_forgot_pass').style.opacity = "1";
   document.querySelector('.link_forgot_pass').style.top = "5px";
    

for(var d = 0; d < inputs.length ; d++  ) {

switch(d) {
    case 2:
 console.log(inputs[d].name);
        break;
    case 3:
 console.log(inputs[d].name);

         break;
    default:
 document.querySelectorAll('.input_form_sign')[d].className = "input_form_sign";
}
  }
   },1500); //chiusura timeout
   
   document.querySelector('.btn_sign').innerHTML = "SIGN IN";
   document.querySelector('.btn_sign').setAttribute('onclick','crypt_in()');
   
   $('#name').val('');
   $('#email_up').val('');
   $('#pwd').val('');
   document.getElementById('pwd').setAttribute('name','pwd_in');
   document.getElementById('email_up').setAttribute('name','email');
   document.getElementById('email_up').setAttribute('id','email');

}//CHIUSURA FUNCTION


window.onload = function(){
  document.querySelector('.cont_centrar').className = "cont_centrar cent_active";

}



function crypt_up(){
  
        var pwd = document.getElementById('pwd').value;
        var conf_pwd = document.getElementById('conf_pwd').value;
        var pwd_len = pwd.length;
        var conf_pwd_len = conf_pwd.length;
        var pass = md5(pwd);
        var conf_pass = md5(conf_pwd);

        var passString = pass.toString().substring(0,pwd_len);
        var conf_passString = conf_pass.toString().substring(0,conf_pwd_len);

        console.log(passString);
        
        document.getElementById('pwd').value = passString;
        document.getElementById('conf_pwd').value = conf_passString;
}


function crypt_in(){
  
        var pwd = document.getElementById('pwd');
        var pwd_len = pwd.value.length;
        var pass = md5(pwd.value);

        var passString = pass.toString().substring(0,pwd_len);

        pwd.value = passString;

}


function checkMail(){
  toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
  var url = "https://drone-iflare3g.c9users.io/checkMail";
  var email_inserted = document.getElementById("email_up").value;

  $.get(url,{ email: email_inserted },function(response){
      var res = response[0].result_code;
      var email_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      
      if(email_regex.test(email_inserted)){
          if(res == 1){
              toastr.warning("ATTENZIONE: email già utilizzata!");
              $("#email_up").val("");
          }
          else{
             toastr.success("Va bene! E-mail utilizzabile!");
          }
      }
      
    });
}

function whenCheckMail(){
    $(document).on('change','#email_up',function(){
        checkMail();
    });
}