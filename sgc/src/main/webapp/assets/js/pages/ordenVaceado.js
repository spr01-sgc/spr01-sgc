$(document).ready(function () {
    $("#serie").prop("disabled", true);
});//ready

function btnOrdenVaceado(){
    $("#agregarV").css("display", "inline");
    $("#myModal").modal("show");
}

function btnAgregarMoldes(){
    $("#myModal9").modal("show");
}

function cerrarModal(){
     $("#myModal9").modal("hide");
}


