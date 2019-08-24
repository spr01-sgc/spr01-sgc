//$.noConflict();//trabaja diferentes versiones jquery
$(document).ready(function () {

});//ready

function btnMolde2() {
    //agregar usuario se deshabilita el boton actualizar
    $("#guardarM").css("display", "inline");
    $("#actualizarM").prop("disabled", true);
    $("#myModal").modal("show");
}

function eliminar_actualizar_molde() {
    $("#tableMoldes tbody tr").on("click", "td", function () {
        var idMoldeT = $(this).parent().children().eq(1).text();
        var iNumcol = $(this).parent().children().index($(this));
        if (iNumcol === 6) {
            $("#guardarM").css("display", "none");//oculta el boton guardar
            $("#actualizarM").prop("disabled", false);//habilita el boton actualizar
            $("#myModal").modal("show");

            $("#idMolde").val(idMoldeT);
            var serieMoldeT = $(this).parent().children().eq(2).text();
            $("#serie").val(serieMoldeT);
            var modelMoldeT = $(this).parent().children().eq(3).text();
            $("#modelo").val(modelMoldeT);
            var existMoldeT = $(this).parent().children().eq(4).text();
            $("#existencia").val(existMoldeT);
            var descripcionMoldeT = $(this).parent().children().eq(5).text();
            $("#descripcion").val(descripcionMoldeT);

        } else if (iNumcol === 7) {
            $("#idMolde").val(idMoldeT);
            var id = $("#idMolde").val();
            if (id === '') {
                alertify.error("No se ha seleccionado una opci&oacuten");
                return false;
            }
            var datos = [id];
            $(document).ajaxSend(function (e, xhr, options) {
                var token = $("input[name='_csrf']").val();
                var cabecera = "X-CSRF-TOKEN";
                xhr.setRequestHeader(cabecera, token);
            });

            $.ajax({
                url: "molde/eliminarMolde",
                data: {datos: datos},
                dataType: 'html',
                type: 'POST',
                success: function (retorno) {
                    //alert(retorno);
                    switch (retorno) {
                        case 'errorDato':
                            alertify.error("Los datos no se procesaron correctamente");
                            break;
                        case 'error':
                            alertify.error("Se ha producido un error en el servidor");
                            break;
                        case 'exito':
                            //carga lo que se indica en id DIV
                            alertify.success("Los datos se procesarón CORRECTAMENTE!");
                            setTimeout(function () {
                                location.href = "molde";
                            }, 1000);
                            break;
                        case 'errorAcceso':
                            alertify.error("No ha iniciado sesion");
                            break;
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alertify.error("Se ha producido un error en el servidor");
                }
            });
        }
    });
}
/*Funcion que permite Agregar un nuevo molde*/
function agregarMolde() {
    var serie = $("#serie").val().trim();
    var modelo = $("#modelo").val().trim();
    var existencia = $("#existencia").val().trim();
    var descripcion = $("#descripcion").val();

    if (serie === '' || modelo === '' || existencia === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var datos = [serie, modelo, existencia, descripcion];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "molde/agregarMolde",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            //alert(retorno);
            switch (retorno) {
                case 'errorDato':
                    alertify.error("Los datos no se procesaron correctamente");
                    break;
                case 'error':
                    alertify.error("Se ha producido un error en el servidor");
                    break;
                case 'exito':
                    alertify.success("Los datos se procesarón CORRECTAMENTE!");
                    setTimeout(function () {
                        location.href = "molde";
                    }, 1000);
                    break;
                case 'errorAcceso':
                    alertify.error("No ha iniciado sesion");
                    break;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}
/*Funcion que permite actualizar un molde*/
function actualizarMolde() {
    var idMolde = $("#idMolde").val().trim();
    var serie = $("#serie").val().trim();
    var modelo = $("#modelo").val().trim();
    var existencia = $("#existencia").val().trim();
    var descripcion = $("#descripcion").val();

    if (serie === '' || modelo === '' || existencia === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var datos = [idMolde, serie, modelo, existencia, descripcion];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "molde/actualizarMolde",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        async: true,
        success: function (retorno) {
            //alert(retorno);
            switch (retorno) {
                case 'errorDato':
                    alertify.error("Los datos no se procesaron correctamente");
                    break;
                case 'error':
                    alertify.error("Se ha producido un error en el servidor");
                    break;
                case 'exito':
                    alertify.success("Los datos se procesarón CORRECTAMENTE!");
                    setTimeout(function () {
                        location.href = "molde";
                    }, 1000);
                    break;
                case 'errorAcceso':
                    alertify.error("No ha iniciado sesion");
                    break;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}

/**
 * Funcion que permite verificar si existe la serie y 
 * manda llamar agregarMolde() para agregar a un 
 * molde si no existe la serie
 * */
function agregarMolde2() {
    var datos = [$("#serie").val().trim()];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "molde/verificarSerie",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            if (retorno.length !== 0) {
                $("#serie").focus();
                alertify.error("La serie " + datos + " ya existe");
                return false;
                //unBlockUI();
                //$.unblockUI();
            } else {
                alertify.success("La serie " + datos + " esta disponible");
                //unBlockUI();
                agregarMolde();
                return true;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}
/*
 function validar() {
 $('#frmMolde').validate({
 focusInvalid: false,
 onkeyup: false,
 onfocusout: false,
 errorClass: "invalid",
 errorLabelContainer: "#error",
 wrapper: "li",
 rules: {
 serie: {
 required: true,
 minlength: 2
 },
 modelo: {
 required: true
 },
 existencia: {
 required: true
 },
 descripcion: {
 required: true
 
 }
 },
 messages: {
 serie: {
 remote: "La serie ya existe",
 required: "El campo 'Serie' es requerido",
 minlength: "La serie del molde debe tener, mínimo, 2 caracteres"
 },
 modelo: {
 required: "El campo 'Modelo' es requerido"
 },
 existencia: {
 required: "El campo 'Existencia' es requerido"
 },
 descripcion: {
 required: "El campo 'Descripcion' es requerido"
 }
 },
 invalidHandler: function (event, validator) {
 window.scrollTo(0, 0);
 }
 });
 }*/




