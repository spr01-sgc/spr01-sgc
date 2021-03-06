$(document).ready(function () {
    $("#actualizarP").prop("disabled", true);
}); //ready

function btnAgregarP() {
    $("#myModalPuesto").modal("show");
}
/*Funcion que permite Agregar un nuevo puesto*/
function agregarPuesto() {
    var nombrePuesto = $("#nombrePuesto").val().trim();
    if (nombrePuesto === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var datos = [nombrePuesto];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/agregarPuesto",
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
                    alertify.error("No se puede eliminar porque existe en otras tablas");
                    break;
                case 'exito':
                    //carga lo que se indica en id DIV
                    alertify.success("Los datos se procesarón CORRECTAMENTE!");
                    mostrarPuestosTabla();
                    break;
                case 'errorAcceso':
                    alertify.error("No ha iniciado sesion");
                    break;
                case 'existeRegistro':
                    alertify.error("No se puede eliminar el puesto porque existe en otra tabla");
                    break
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}

/*Funcion que permite mostrar los puestos en el combo despues de cerrar el modal
 * que agrega los puestos
 * */
function mostrarPuestosCombo() {
    var dato = '';

    var datos = [dato];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/mostrarPuestos",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            var dato = JSON.parse(retorno);
            $("#puesto").html("");
            var filas = dato.length;
            var select = "<option value = '0'>Seleccione...</option>";
            $("#puesto").append(select);
            for (i = 0; i < filas; i++) {

                select = "<option value = '" + dato[i].idpuesto + "'> " + dato[i].puesto + "</option>";

                $("#puesto").append(select);
            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}
/*Funcion que permite actualizar un empelado*/
function actualizarPuesto() {
    var idPuesto = $("#idPuesto").val();
    var nombrePuesto = $("#nombrePuesto").val().trim();

    if (nombrePuesto === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var datos = [idPuesto, nombrePuesto];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/actualizarPuesto",
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
                    alertify.error("No se puede eliminar porque existe en otras tablas");
                    break;
                case 'exito':
                    //carga lo que se indica en id DIV
                    alertify.success("Los datos se procesarón CORRECTAMENTE!");
                    mostrarPuestosTabla();
                    break;
                case 'errorAcceso':
                    alertify.error("No ha iniciado sesion");
                    break;
                case 'existeRegistro':
                    alertify.error("No se puede eliminar el puesto porque existe en otra tabla");
                    break
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}

/*Funcion que elimina un puesto*/
function eliminar_actualizar() {
    $("#tablePuesto tbody tr").on("click", "td", function () {
        var idPuesto = $(this).parent().children().eq(0).text();
        var iNumcol = $(this).parent().children().index($(this));
        if (iNumcol === 3) {
            $("#guardarP").prop("disabled", true);
            $("#actualizarP").prop("disabled", false);//habilita el boton actualizar
            $("#idPuesto").val(idPuesto);
            var puesto = $(this).parent().children().eq(2).text();
            $("#nombrePuesto").val(puesto);
        } else if (iNumcol === 4) {
            $("#idPuesto").val(idPuesto);
            var id = $("#idPuesto").val();
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
                url: "empleado/eliminarPuestos",
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
                            alertify.error("No se puede eliminar porque existe en otras tablas");
                            break;
                        case 'exito':
                            //carga lo que se indica en id DIV
                            alertify.success("Los datos se procesarón CORRECTAMENTE!");
                            mostrarPuestosTabla();
                            break;
                        case 'errorAcceso':
                            alertify.error("No ha iniciado sesion");
                            break;
                        case 'existeRegistro':
                            alertify.error("No se puede eliminar el puesto porque existe en otra tabla");
                            break
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alertify.error("Se ha producido un error en el servidor");
                }
            });
        }
    });
}

function mostrarPuestosTabla() {
    var dato = '';

    var datos = [dato];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "empleado/mostrarPuestos",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            var dato = JSON.parse(retorno);
            $("#bodytablaP").html("");
            //alertify.success("Los datos se procesarón CORRECTAMENTE!");
            var filas = dato.length;
            var count = 1;
            for (i = 0; i < filas; i++) {
                var tabla = "<tr>" +
                        "<td id='idpuesto' style='display:none'>" + dato[i].idpuesto + "</td>" +
                        "<td>" + count + "</td>" +
                        "<td>" + dato[i].puesto + "</td>" +
                        "<td><button id='mostrarP' onclick='eliminar_actualizar();'" +
                        "class='btn btn-warning'>" +
                        "<span class='glyphicon glyphicon-pencil'></span></button></td>" +
                        "<td><button id='eliminarP' onclick='eliminar_actualizar();' class='btn btn-danger'>" +
                        "<span class='glyphicon glyphicon-remove'></span> </button></td>" +
                        "</tr>";

                $("#bodytablaP").append(tabla);
                count++;
            }

            $("#nombrePuesto").val('');
            $("#actualizarP").prop("disabled", true);
            $("#guardarP").prop("disabled", false);
            $("#idPuesto").val('');

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}