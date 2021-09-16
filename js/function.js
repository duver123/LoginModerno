function mostrarContrasena(){
    var cambio = document.getElementById("password");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('far fa-eye-slash').addClass('fas fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fas fa-eye').addClass('far fa-eye-slash');
    }
}