$(document).ready(function () {
    $("#serie").prop("disabled", true);
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
                    $('#serie').val(item[4]);
                })

            };

        }

    });

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

function obtenerDatosEmpleado(){
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
                console.log(data);
                console.log("mike " + data[0]);
                var tam = data.length;
                for(i = 0; i<tam; i++){
                    console.log("sad " + data[i+3]);
                    $("#serie").empty();
                    $("#serie").val(data[i]);
                }
                $("#serie").val("");
                $("#serie").val(data[4]);
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alertify.error("Se ha producido un error en el servidor");
            }
        });
   
}