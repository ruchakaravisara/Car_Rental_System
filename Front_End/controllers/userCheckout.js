$("#btnSendRentalRequest").click(function () {
    let email =  $("#userCheckOutEmailTag").text();
    $.ajax({
        url: baseURL+"customer?em="+email,
        method: "get",
        dataType:"json",
        success: function (res) {
            switch (res.data.status){
                case "Accept":

                    var data = new FormData();
                    data.append("rentalId ","")
                    data.append("pickupLocation",$('#txtPickUpVenueCheckOut').val())
                    data.append("returnLocation",$('#txtReturnVenueCheckOut').val())
                    data.append("mail",email);
                    for (const o of objectArray) {
                        data.append("rentalDetailList",JSON.stringify(o));
                        data.append("file",o.file, o.filename)
                    }
                    $.ajax({
                        url: baseURL+"rental",
                        method: "post",
                        data:data,
                        async:true,
                        contentType: false,
                        processData: false,

                        success: function (res) {
                            alert(res.message);

                        },
                        error:function(error){

                        }
                    });


                    break;
                case "Deny":
                    alert(res.data.name +" Register Denied");

                    break;
                case "Pending":
                    alert(res.data.name +" Register is still Pending ");
                    break;
                default:
                    alert(res.data.name +" try again");
            }
        },
        error:function(error){
            alert("login and try again");
        }
    });
});