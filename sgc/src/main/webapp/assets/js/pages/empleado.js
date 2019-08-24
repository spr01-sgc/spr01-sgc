//$.noConflict();//trabaja diferentes versiones jquery
$(document).ready(function () {

});//ready

function btnEmpleado() {
    //agregar empleado se deshabilita el boton actualizar
    $("#agregarE").css("display", "inline");
    $("#actualizarE").prop("disabled", true);
    $("#myModal").modal("show");
}

function eliminar_actualizar_empleado() {
    $("#tableEmpleado tbody tr").on("click", "td", function () {
        var idEmpleado = $(this).parent().children().eq(0).text();
        var iNumcol = $(this).parent().children().index($(this));
        if (iNumcol === 14) {
            $("#guardarE").prop("disabled", true);
            $("#agregarE").css("display", "none");//oculta el boton guardar
            $("#actualizarE").prop("disabled", false);//habilita el boton actualizar
            $("#myModal").modal("show");

            $("#idEmpleado").val(idEmpleado);
            var serie = $(this).parent().children().eq(2).text();
            $("#serie").val(serie);
            var nombre = $(this).parent().children().eq(3).text();
            $("#nombre").val(nombre);
            var app = $(this).parent().children().eq(4).text();
            $("#app").val(app);
            var apm = $(this).parent().children().eq(5).text();
            $("#apm").val(apm);
            var puesto = $(this).parent().children().eq(6).text();
            $("#puesto").val(puesto);
            var taller = $(this).parent().children().eq(8).text();
            $("#IDtaller").val(taller);
            var estatus = $(this).parent().children().eq(10).text();
            $("#estatus").val(estatus);
            var fechaEntrada = $(this).parent().children().eq(11).text();
            $("#fechaEstatus").val(fechaEntrada);
            var fechaSalida = $(this).parent().children().eq(12).text();
            $("#fechaEstatus").val(fechaSalida);
            var descripcion = $(this).parent().children().eq(13).text();
            $("#descripcion").val(descripcion);

        } else if (iNumcol === 15) {
            $("#idEmpleado").val(idEmpleado);
            var id = $("#idEmpleado").val();
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
                url: "empleado/eliminarEmpleado",
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
                                location.href = "empleado";
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

/*Funcion que permite actualizar un empelado*/
function actualizarEmpleado() {
    var nombre = $("#nombre").val().trim();
    var app = $("#app").val().trim();
    var apm = $("#apm").val().trim();
    var estatus = $("#estatus").val();
    var puesto = $("#puesto").val();
    var serie = $("#serie").val();
    var taller = $("#IDtaller").val();
    var descripcion = $("#descripcion").val();
    var idEmpleado = $("#idEmpleado").val();

    if (nombre === '' || app === '' || apm === '' || serie === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    if (estatus === '0' || puesto === '0' || taller === '0') {
        alertify.error("No ha seleccionado una opción");
        return false;
    }

    var datos = [nombre, app, apm, estatus, puesto, serie, taller, descripcion, idEmpleado];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/actualizarEmpleado",
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
                        location.href = "empleado";
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
 * manda llamar agregarEmpleado2() para agregar a un 
 * empleado si no existe la serie
 * */
function agregarEmpleado() {
    var datos = [$("#serie").val().trim()];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/verificarSerie",
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
                //alertify.success("La serie " + datos + " esta disponible");
                //unBlockUI();
                agregarEmpleado2();
                return true;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}
/*Funcion que permite Agregar un nuevo empleado*/
function agregarEmpleado2() {
    var nombre = $("#nombre").val().trim();
    var app = $("#app").val().trim();
    var apm = $("#apm").val().trim();
    var estatus = $("#estatus").val();
    var puesto = $("#puesto").val();
    var serie = $("#serie").val();
    var taller = $("#IDtaller").val();
    var descripcion = $("#descripcion").val();

    if (nombre === '' || app === '' || apm === '' || serie === '' || descripcion === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    if (estatus === '0' || puesto === '0' || taller === '0') {
        alertify.error("No ha seleccionado una opción");
        return false;
    }

    var datos = [nombre, app, apm, estatus, puesto, serie, taller, descripcion];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/agregarEmpleado",
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
                        location.href = "empleado";
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

function verificarSerie() {
    var datos = [$("#serie").val().trim()];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/verificarSerie",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            if (retorno.length !== 0) {
                $("#serie").focus();
                alertify.error("La serie " + datos + " ya existe");
            } else {
                alertify.success("La serie " + datos + " esta disponible");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}

