//$.noConflict();//trabaja diferentes versiones jquery
$(document).ready(function () {

});//ready

function btnUsuario() {
    //agregar usuario se deshabilita el boton actualizar
    $("#guardarU").css("display", "inline");
    $("#actualizarU").prop("disabled", true);
    $("#myModal").modal("show");
}

function eliminar_actualizar_usuario() {
    $("#tableUsuario tbody tr").on("click", "td", function () {
        var idusuariT = $(this).parent().children().eq(0).text();
        var iNumcol = $(this).parent().children().index($(this));
        if (iNumcol === 9) {
            $("#guardarU").css("display", "none");//oculta el boton guardar
            $("#actualizarU").prop("disabled", false);//habilita el boton actualizar
            $("#myModal").modal("show");

            $("#idusuario").val(idusuariT);
            //informacion del usuario
            var nickuserT = $(this).parent().children().eq(2).text();
            $("#nick").val(nickuserT);
            var passuserT = $(this).parent().children().eq(3).text();
            $("#pass").val(passuserT);
            var emailuserT = $(this).parent().children().eq(4).text();
            $("#email").val(emailuserT);
            var roluserT = $(this).parent().children().eq(5).text();
            $("#roluser").val(roluserT);
            var talleruserT = $(this).parent().children().eq(7).text();
            $("#roltaller").val(talleruserT);

        } else if (iNumcol === 10) {
            $("#idusuario").val(idusuariT);
            var id = $("#idusuario").val();
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
                url: "usuario/eliminarUsuario",
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
                                location.href = "usuario";
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
//Permite conocer si esta disponible el nickname
function verificarUsuario() {
    var nick = [$("#nick").val().trim()];
    //var mensajeModal = "Buscando nickname";
    //$.blockUI(mensajeModal);
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "usuario/verificarUsuario",
        data: {datos: nick},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            if (retorno.length !== 0) {
                $("#nick").focus();
                alertify.error("El usuario con nickname " + nick + " ya existe");
                //unBlockUI();
                //$.unblockUI();
            } else {
                alertify.success("El nickname " + nick + " esta disponible");
                //unBlockUI();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });
}
/*Funcion que permite Agregar un nuevo usuario*/
function agregarUsuario() {
    var nick = $("#nick").val().trim();
    var pass = $("#pass").val().trim();
    var email = $("#email").val().trim();
    var rol = $("#roluser").val();
    var taller = $("#roltaller").val();

    if (nick === '' || pass === '' || email === '' || rol === '' || taller === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var rolname = $('#roluser').find(":selected").text();
    if (rol === '0' || roltaller === '0') {
        alertify.error("No ha seleccionado una opción");
        return false;
    }

    var datos = [nick, pass, email, rol, taller];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "usuario/agregarUsuario",
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
                        location.href = "usuario";
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
/*Funcion que permite actualizar un usuario*/
function actualizarUsuario() {
    var idusuario = $("#idusuario").val().trim();
    var nick = $("#nick").val().trim();
    var pass = $("#pass").val().trim();
    var email = $("#email").val().trim();
    var rol = $("#roluser").val();
    var roltaller = $("#roltaller").val();

    if (nick === '' || pass === '') {
        alertify.error("Hay campos vacios");
        return false;
    }

    var rolname = $('#roluser').find(":selected").text();

    if (rol === '0' || roltaller === '0') {
        alertify.error("No ha seleccionado una opción");
        return false;
    }

    var datos = [nick, pass, email, rol, idusuario, roltaller];
    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });
    $.ajax({
        url: "usuario/actualizarUsuario",
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
                        location.href = "usuario";
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

function mostrar() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
