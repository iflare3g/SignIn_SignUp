$(document).ready(function () {
    
        validationForm();
        whenCheckMail();
});

function crypt(){
  
        var pwd = document.getElementById('pwd').value;
        var pwd_len = pwd.length
        var pass = md5(pwd);

        var passString = pass.toString().substring(0,pwd_len);

        console.log(passString);
        
        document.getElementById('pwd').value = passString;

}

function validationForm(){
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   var alphanumeric = /^[a-zA-Z0-9_ ]*$/i;
   var minLengthPwd = 8;
   var email = $("#email").val();
   var pwd = $("#pwd").val();
   
   $("#email").keyup(function(){
       if($("#email").val().length > 0){
        if(emailRegex.test($("#email").val())){
            $("#email").css("border-color","green");
        }
        else{
            $("#email").css("border","1px solid #ccc");
        }
       }
       else{
           $("#email").css("border","1px solid #ccc");
       }
    });
    
  
   
   $("#pwd").keyup(function(){
       if($("#pwd").val().length >= minLengthPwd && alphanumeric.test($("#pwd").val())){
        $("#pwd").css("border-color","green");
         console.log($("#pwd").val().length);
        }
        else{
         $("#pwd").css("border","1px solid #ccc");
        }
   });
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
  var email_inserted = document.getElementById("email").value;

  $.get(url,{ email: email_inserted },function(response){
      var res = response[0].result_code;
      
          if(res != 1){
              toastr.error("ATTENZIONE: email non registrata!");
              $("#email").val("");
              $("#email").css("border","1px solid #ccc");
          }
    });
}

function whenCheckMail(){
    $(document).on('change','#email',function(){
        checkMail();
    });
}

