$(document).ready(function() {

        //GET
        $('#viewStudentsBtn').click(function () {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://cvrapi.dk/api?country=" + $('#optionInput').val() + "&version=6" + "&search=" + $('#cvrInput').val(), //https://cvrapi.dk/api?country=dk&search=legoland
                success: function (data) {
                    for (var x in data.owners) {
                        $('<tr>').append(
                            $('<td>').text(data.vat),
                            $('<td>').text(data.name),
                            $('<td>').text(data.address + ", " + data.zipcode + " " + data.city),
                            $('<td>').text(data.owners[x].name),
                            $('<td>').text(data.industrydesc)
                        ).appendTo('#companyTable');
                    }
                },
                error: function (err) {
                    let error = `Bad request: ${err.status} - ${err.statusText}`;
                    alert(error)
                }
            });
        });

        //POST

})