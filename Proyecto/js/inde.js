// Inicializacion del nav header
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  function validarNombre(){
    var elementoNombre= $('#icon_nombre');
    var nombre = $(elementoNombre).val();
    var expReg = /^[\w\s]+$/;
    if(nombre.length == 0 || !expReg.test(nombre)) {
        $(elementoNombre).addClass('error');
        return false;
    } 
}