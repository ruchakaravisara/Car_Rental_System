
$("#btnCarSave").click(function (){

    let carBrand = $("#txtCarBrand").val();
    let carModel = $("#txtCarModel").val();
    let carType= $("#txtCarType").val();
    let carTransmission = $("#txtCarTransmission").val();
    let carFuel = $("#txtCarFuel").val();
    let carNumberOfPassengers = $("#txtCarNumberOfPassengers").val();
    let carColor = $("#txtCarColor").val();
    let carRegistrationNumber = $("#txtCarRegistrationNumber").val();
    let carFreeMileage = $("#txtCarFreeMileage").val();
    let carFreeMonthlyMileage = $("#txtCarMonthlyFreeMileage").val();
    let carDailyRate = $("#txtCarDailyRate").val();
    let carMonthlyRate = $("#txtCarMonthlyRate").val();
    let carPriceOfExtraKm = $("#txtCarPriceOfExtraKm").val();
    let carLastServiceMileage = $("#txtCarLastServiceMileage").val();
    let availability = "Available";
    var data = new FormData();
    let file1 = $("#file1")[0].files[0];
    let file1Name = $("#file1")[0].files[0].name;
    let file2 = $("#file2")[0].files[0];
    let file2Name = $("#file2")[0].files[0].name;
    let file3 = $("#file3")[0].files[0];
    let file3Name = $("#file3")[0].files[0].name;
    let file4 = $("#file4")[0].files[0];
    let file4Name = $("#file4")[0].files[0].name;

    data.append("brand",carBrand);
    data.append("model",carModel);
    data.append("type",carType);
    data.append("transmissionType",carTransmission);
    data.append("fuelType",carFuel);
    data.append("numberOfPassengers",carNumberOfPassengers);
    data.append("color",carColor);
    data.append("registrationNumber", carRegistrationNumber);
    data.append("freeMileage",carFreeMileage);
    data.append("freeMonthlyMileage",carFreeMonthlyMileage);
    data.append("dailyRate",carDailyRate);
    data.append("monthlyRate",carMonthlyRate);
    data.append("priceForExtraKM",carPriceOfExtraKm);
    data.append("lastServiceMileage",carLastServiceMileage);
    data.append("availability",availability);

    data.append("img1", file1, file1Name);
    data.append("img2", file2, file2Name);
    data.append("img3", file3, file3Name);
    data.append("img4", file4, file4Name);
    alert(data);

    $.ajax({
        url: baseURL+"car",
        method: "post",
        data:data,
        async:true,
        contentType: false,
        processData: false,

        success: function (res) {
            alert(res.message);

            loadAllCars();
        },
        error:function(error){

        }
    });
    setcccTextFieldValues("","","","","","","","","","","","","","","","","","","");
});

loadAllCars();

function loadAllCars() {
    $("#tBodyCarDetail").empty();
    $.ajax({
        url: baseURL+"car",
        dataType: "json",
        success: function (resp) {

            for (let c of resp.data) {

                $("#tBodyCarDetail").append(
                    ` <tr>
                    <td>${c.registrationNumber}</td>
                    <td>${c.brand}</td>
                    <td>${c.model}</td>
                    <td>${c.type}</td>
                    <td>${c.transmissionType}</td>
                    <td>${c.fuelType}</td>
                    <td>${c.numberOfPassengers}</td>
                    <td>${c.color}</td>
                    <td>${c.freeMileage}</td>
                    <td>${c.freeMonthlyMileage}</td>
                    <td>${c.dailyRate}</td>
                    <td>${c.monthlyRate}</td>
                    <td>${c.priceForExtraKM}</td>
                    <td>${c.lastServiceMileage}</td>
                    <td>${c.availability}</td>

                </tr>`
                );

            }
            bindCarRowClickEvents();
            setccTextFieldValues("","","","","","","","","","","","","","","","","","","",)

        }

    });

}

function bindCarRowClickEvents() {
    $("#tBodyCarDetail>tr").click(function () {

        let carRegistrationNumber = $(this).children(":eq(0)").text();
        let carBrand = $(this).children(":eq(1)").text();
        let carModel = $(this).children(":eq(2)").text();
        let carType = $(this).children(":eq(3)").text();
        let carTransmission = $(this).children(":eq(4)").text();
        let carFuel = $(this).children(":eq(5)").text();
        let carNumberOfPassengers = $(this).children(":eq(6)").text();
        let carColor = $(this).children(":eq(7)").text();
        let  carFreeMileage = $(this).children(":eq(8)").text();
        let carFreeMonthlyMileage = $(this).children(":eq(9)").text();
        let carDailyRate = $(this).children(":eq(10)").text();
        let carMonthlyRate = $(this).children(":eq(11)").text();
        let carPriceOfExtraKm = $(this).children(":eq(12)").text();
        let carLastServiceMileage = $(this).children(":eq(13)").text();
        let availability = $(this).children(":eq(14)").text();

        $("#txtCarUpdateRegistrationNumber").val(carRegistrationNumber);
        $("#txtCarUpdateBrand").val(carBrand);
        $("#txtCarUpdateModel").val(carModel);
        $("#selectCarUpdateType").val(carType);
        $("#selectCarUpdateTransmission").val(carTransmission);
        $("#selectCarUpdateFuel").val(carFuel);
        $("#txtCarUpdateNumberOfPassengers").val(carNumberOfPassengers);
        $("#txtCarUpdateColor").val(carColor);
        $("#txtCarUpdateFreeMileage").val(carFreeMileage );
        $("#txtCarUpdateMonthlyFreeMileage").val(carFreeMonthlyMileage);
        $("#txtCarUpdateDailyRate").val(carDailyRate);
        $("#txtCarUpdateMonthlyRate").val(carMonthlyRate);
        $("#txtCarUpdatePriceOfExtraKm").val(carPriceOfExtraKm);
        $("#txtCarUpdateLastServiceMileage").val( carLastServiceMileage);
        $("#selectCarUpdateAvailability").val(availability);

        $.ajax({
            url: baseURL+"car?registrationNumber="+carRegistrationNumber,
            method: "get",
            dataType:"json",
            success: function (res) {
                $("#ucImg1").attr("src",baseURL+res.data.frontImageLocation);
                $("#ucImg2").attr("src",baseURL+res.data.backImageLocation);
                $("#ucImg3").attr("src",baseURL+res.data.bgTransparentImageLocation);
                $("#ucImg4").attr("src",baseURL+res.data.sideImageLocation);


            },
            error:function(error){
                let cause= JSON.parse(error.responseText).message;
                alert(cause);
            }
        });
    });
}
$("#btnCarDelete").click(function () {

    let id =  $("#txtCarUpdateRegistrationNumber").val();
    console.log(id);
    $.ajax({
        url: baseURL+"car?registrationNumber="+id+"",
        method: "delete",

        success: function (resp) {
            alert(resp.message);
            loadAllCars();

        },
        error:function (error){
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$("#btnCarUpdate").click(function () {



    let carRegistrationNumber =  $("#txtCarUpdateRegistrationNumber").val();
    let carBrand =  $("#txtCarUpdateBrand").val();
    let carModel =  $("#txtCarUpdateModel").val();
    let carType = $("#selectCarUpdateType").val();
    let carTransmission =$("#selectCarUpdateTransmission").val();
    let carFuel = $("#selectCarUpdateFuel").val();
    let carNumberOfPassengers =  $("#txtCarUpdateNumberOfPassengers").val();
    let carColor =$("#txtCarUpdateColor").val();
    let  carFreeMileage = $("#txtCarUpdateFreeMileage").val( );
    let carFreeMonthlyMileage =$("#txtCarUpdateMonthlyFreeMileage").val();
    let carDailyRate =$("#txtCarUpdateDailyRate").val();
    let carMonthlyRate = $("#txtCarUpdateMonthlyRate").val();
    let carPriceOfExtraKm = $("#txtCarUpdatePriceOfExtraKm").val();
    let carLastServiceMileage =  $("#txtCarUpdateLastServiceMileage").val();
    let availability =  $("#selectCarUpdateAvailability").val();
    var frontImageLocation ;
    var backImageLocation ;
    var bgTransparentImageLocation ;
    var sideImageLocation ;

    $.ajax({
        url: baseURL+"car?registrationNumber="+carRegistrationNumber,
        method: "get",
        dataType:"json",
        success: function (res) {
            frontImageLocation= res.data.frontImageLocation;
            backImageLocation=res.data.backImageLocation;
            bgTransparentImageLocation=res.data.bgTransparentImageLocation;
            sideImageLocation=res.data.sideImageLocation;

            let car={



                registrationNumber:carRegistrationNumber,
                type:carType,
                brand:carBrand,
                model: carModel,
                fuelType:carFuel,
                transmissionType:carTransmission,
                numberOfPassengers:carNumberOfPassengers,
                color:carColor,
                lastServiceMileage:carLastServiceMileage,
                freeMileage:carFreeMileage,
                freeMonthlyMileage:carFreeMonthlyMileage,
                frontImageLocation:frontImageLocation,
                sideImageLocation:sideImageLocation,
                backImageLocation:backImageLocation,
                bgTransparentImageLocation:bgTransparentImageLocation,
                dailyRate:carDailyRate,
                monthlyRate:carMonthlyRate,
                priceForExtraKM:carPriceOfExtraKm,
                availability:availability
            }

            $.ajax({
                url: baseURL+'car',
                method: 'put',
                contentType:"application/json",
                data:JSON.stringify(car),
                dataType:"json",
                success: function (res) {
                    alert(res.message);
                    loadAllCars();
                },
                error:function (error){
                    let cause= JSON.parse(error.responseText).message;
                    alert(cause);
                }

            });

        },
        error:function(error){
            // let cause= JSON.parse(error.responseText).message;
            // alert(cause);
        }
    });
    setccTextFieldValues("","","","","","","","","","","","","","","","","","","",)

});



function setccTextFieldValues(carRegistrationNumber,carBrand, carModel,carType,carTransmission,carFuel,carNumberOfPassengers,carColor,carFreeMileage,carFreeMonthlyMileage,carDailyRate,carMonthlyRate,carPriceOfExtraKm,carLastServiceMileage,availability,img1,img2,img3,img4) {
    $("#txtCarUpdateRegistrationNumber").val(carRegistrationNumber);
    $("#txtCarUpdateBrand").val(carBrand);
    $("#txtCarUpdateModel").val(carModel);
    $("#selectCarUpdateType").val(carType);
    $("#selectCarUpdateTransmission").val(carTransmission);
    $("#selectCarUpdateFuel").val(carFuel);
    $("#txtCarUpdateNumberOfPassengers").val(carNumberOfPassengers);
    $("#txtCarUpdateColor").val(carColor);
    $("#txtCarUpdateFreeMileage").val(carFreeMileage);
    $("#txtCarUpdateMonthlyFreeMileage").val(carFreeMonthlyMileage);
    $("#txtCarUpdateDailyRate").val(carDailyRate);
    $("#txtCarUpdateMonthlyRate").val(carMonthlyRate);
    $("#txtCarUpdatePriceOfExtraKm").val(carPriceOfExtraKm);
    $("#txtCarUpdateLastServiceMileage").val( carLastServiceMileage);
    $("#selectCarUpdateAvailability").val(availability);
    $("#ucImg1").attr("src",img1);
    $("#ucImg2").attr("src",img2);
    $("#ucImg3").attr("src",img3);
    $("#ucImg4").attr("src",img4);
}


function setcccTextFieldValues(carRegistrationNumber,carBrand, carModel,carType,carTransmission,carFuel,carNumberOfPassengers,carColor,carFreeMileage,carFreeMonthlyMileage,carDailyRate,carMonthlyRate,carPriceOfExtraKm,carLastServiceMileage,availability,img1,img2,img3,img4) {
    $("#txtCarBrand").val(carBrand);
    $("#txtCarModel").val(carModel);
    $("#txtCarType").val(carType);
    $("#txtCarTransmission").val(carTransmission);
    $("#txtCarFuel").val( carFuel);
    $("#txtCarNumberOfPassengers").val(carNumberOfPassengers);
    $("#txtCarColor").val(carColor);
    $("#txtCarRegistrationNumber").val(carRegistrationNumber);
    $("#txtCarFreeMileage").val(carFreeMileage);
    $("#txtCarMonthlyFreeMileage").val(carFreeMonthlyMileage);
    $("#txtCarDailyRate").val(carDailyRate);
    $("#txtCarMonthlyRate").val(carMonthlyRate);
    $("#txtCarPriceOfExtraKm").val(carPriceOfExtraKm);
    $("#txtCarLastServiceMileage").val(carLastServiceMileage);


    $("#file1").val(img1);
    $("#file2").val(img2);
    $("#file3").val(img3);
    $("#file4").val(img4);

}