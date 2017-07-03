/**
 * Created by paolo on 26/05/17.
 */


$(document).ready(function () {

confirmPwd();
validationForm();

});



function validationForm()
{
    $('#form').validate({
        errorClass: "my-error-class",
        validClass: "my-valid-class",
        rules: {
            nome: {
                lettersonly:true,
                required:true,
            },
            email:{
                emailRegex:true,
                required:true
            },
            email_up:{
                emailRegex:true,
                required:true
            },

            cognome:{
                lettersonly:true,
                required:true
            },
            
            pwd:{
              alphanumeric:true,
              minlength:8,
              required:true
            },
            pwd_in:{
              alphanumeric:true,
              required:true
            }
          
            
        },
        onfocusout: function(element) {
            this.element(element);
        },
    });
}


function confirmPwd(){
  $('#conf_pwd').change(function(){
    var conf_pwd = $('#conf_pwd').val();
    var pwd = $('#pwd').val();
    toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "200",
    "hideDuration": "800",
    "timeOut": "5000",
    "extendedTimeOut": "500",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }
    
    if(pwd == conf_pwd){
      toastr.success('Le password corrispondono!');
    }
    else{
      toastr.warning('Attenzione: Le password non corrispondono!');
    }
    
  });
}

