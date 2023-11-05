
let baseURL="http://localhost:8080/Back_End_war/";
$("#btnSignnUp").click(function (){

    let driverId =  $("#txtLogID").val();
    let name = $("#txtLogName").val();

    $.ajax({
        url: baseURL+"driver?driverId="+driverId+"&name="+name,
        method: "get",
        dataType:"json",
        success: function (res) {
            alert(res.message);
            if (res.data.driverId == driverId && res.data.name == name) {
                let dataTable = $("#tblDriver");
                dataTable.empty(); // Clear existing rows

                $.each(res.data, function (index, driver) {
                    dataTable.append(
                        '<tr><td>' + driver.driverID + '</td><td>' + driver.name+ '</td><td>' + driver.nic + '</td><td>' + driver.address + '</td><td>' + driver.drivingLicense + '</td><td>' + driver.dob + '</td><td>' + driver.status+ '</td></tr>'
                        // Add more table cells for additional properties
                    );
                });
            }
        }



    });
    loadAllDrivers();
    function loadAllDrivers() {
        $("#tblDriver").empty();
        $.ajax({
            url: baseURL+"driver",
            dataType: "json",
            success: function (resp) {

                for (let driver of resp.data) {


                    var row = '<tr><td>' + driver.driverID + '</td><td>' + driver.name+ '</td><td>' + driver.nic + '</td><td>' + driver.address + '</td><td>' + driver.drivingLicense + '</td><td>' + driver.dob + '</td><td>' + driver.status+ '</td></tr>';
                    $("#tblDriver").append(row);
                }

            }
        });

    }
});
