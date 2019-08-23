$(document).ready(function () {
    $("#serie").prop("disabled", true);

});//ready

function btnOrdenVaceado() {
    $("#agregarV").css("display", "inline");
    $("#myModal").modal("show");
}

function btnAgregarMoldes() {
    $("#myModal9").modal("show");
}

function cerrarModal() {
    $("#myModal9").modal("hide");
}

function obtenerDatosEmpleado() {
    var nombre = $("#nombreE").val();
    var datos = [nombre];

    $(document).ajaxSend(function (e, xhr, options) {
        var token = $("input[name='_csrf']").val();
        var cabecera = "X-CSRF-TOKEN";
        xhr.setRequestHeader(cabecera, token);
    });

    $.ajax({
        url: "vaceado/mostrarEmpleados",
        data: {datos: datos},
        dataType: 'html',
        type: 'POST',
        success: function (retorno) {
            var data = JSON.parse(retorno);
            $("#serie").val("");
            $("#serie").val(data[0][4]);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alertify.error("Se ha producido un error en el servidor");
        }
    });

}

function autocompleate(){
$('#nombreE').autocomplete({
        serviceUrl: 'vaceado/getEmpleados',
        paramName: "nombre",
        delimiter: ",",
        transformResult: function (response) {
            var data = JSON.parse(response);
            console.log(data);
            return {
                //must convert json to javascript object before process
                suggestions: $.map(data, function (item) {

                    return {value: item[1] + " " + item[2] + " " + item[3], data: item[0]};
                    
                })

            };
            
        },
        onSelect: function(){obtenerDatosEmpleado();}
    })
}




