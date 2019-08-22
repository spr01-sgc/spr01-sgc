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
