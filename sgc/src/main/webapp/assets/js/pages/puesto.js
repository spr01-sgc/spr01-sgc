$(document).ready(function () {
    $("#actualizarP").prop("disabled", true);
}); //ready

function btnAgregarP(){
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
            var dato = JSON.parse(retorno);
            $("#bodytablaP").html("");
            alertify.success("Los datos se procesarón CORRECTAMENTE!");
            var filas = dato.length;
            var count = 1;
            for (i = 0; i < filas; i++) {
                var tabla = "<tr>" +
                        "<td id='idpuesto' style='display:none'>" + dato[i].idpuesto + "</td>" +
                        "<td>" + count + "</td>" +
                        "<td>" + dato[i].puesto + "</td>" +
                        "<td><button id='mostrarP' onclick='mostrarPuesto();'" +
                        "class='btn btn-warning'>" +
                        "<span class='glyphicon glyphicon-pencil'></span></button></td>" +
                        "<td><button id='eliminarP' onclick='eliminarPuestos();' class='btn btn-danger'>" +
                        "<span class='glyphicon glyphicon-remove'></span> </button></td>" +
                        "</tr>";

                $("#bodytablaP").append(tabla);
                count++;
            }

            $("#nombrePuesto").val('');


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
        url: "empleado/mostrarPuestosCombo",
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
/*Funcion que muestra la informacion de la tabla puesto en el formulario*/
function mostrarPuesto() {
    $("#guardarP").prop("disabled", true);
    $("#actualizarP").prop("disabled", false);//habilita el boton actualizar
    //al dar clic lo que tiene en el renglo lo pase a la caja de texto
    $("#tablePuesto tbody").on('click', 'tr', function () {
        //id del puesto a actualizar
        var idPuesto = $('td', this).eq(0).text();
        $("#idPuesto").val(idPuesto);
        var puesto = $('td', this).eq(2).text();
        $("#nombrePuesto").val(puesto);
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
            var dato = JSON.parse(retorno);
            $("#bodytablaP").html("");
            alertify.success("Los datos se procesarón CORRECTAMENTE!");
            var filas = dato.length;
            var count = 1;
            for (i = 0; i < filas; i++) {
                var tabla = "<tr>" +
                        "<td id='idpuesto' style='display:none'>" + dato[i].idpuesto + "</td>" +
                        "<td>" + count + "</td>" +
                        "<td>" + dato[i].puesto + "</td>" +
                        "<td><button id='mostrarP' onclick='mostrarPuesto();'" +
                        "class='btn btn-warning'>" +
                        "<span class='glyphicon glyphicon-pencil'></span></button></td>" +
                        "<td><button id='eliminarP' onclick='eliminarPuestos();' class='btn btn-danger'>" +
                        "<span class='glyphicon glyphicon-remove'></span> </button></td>" +
                        "</tr>";

                $("#bodytablaP").append(tabla);
                count++;
            }
            $("#nombrePuesto").val('');
            $("#guardarP").prop("disabled", false);
            $("#actualizarP").prop("disabled", true);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}

/*Funcion que elimina un puesto*/
function eliminarPuestos() {
    $("#tablePuesto tbody").on('click', 'tr', function () {
        var idPuesto = $('td', this).eq(0).text();
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
        url: "empleado/mostrarPuestosCombo",
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
                        "<td><button id='mostrarP' onclick='mostrarPuesto();'" +
                        "class='btn btn-warning'>" +
                        "<span class='glyphicon glyphicon-pencil'></span></button></td>" +
                        "<td><button id='eliminarP' onclick='eliminarPuestos();' class='btn btn-danger'>" +
                        "<span class='glyphicon glyphicon-remove'></span> </button></td>" +
                        "</tr>";

                $("#bodytablaP").append(tabla);
                count++;
            }

            $("#nombrePuesto").val('');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}