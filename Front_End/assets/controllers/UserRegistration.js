let baseURL ="http://localhost:8080/Back_End_war/";
$("#btnSignUp").click(function () {
    let customerName = $("#txtCustomerName").val();
    let customerNIC = $("#txtCustomerNIC").val();
    let customerDrivingLicense = $("#txtCustomerDrivingLicense").val();
    let contactNumber = $("#txtCustomerContactNumber").val();
    let customerEmail = $("#txtCustomerEmail").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerPassword = $("#txtCustomerPassword").val();
    let customerStatus = "Pending";
    $('.userNameTag').text(customerName);
    $('.userEmailTag').text(customerEmail);

    var data = new FormData();
    let file = $("#file")[0].files[0];
    let fileName = $("#file")[0].files[0].name;

    data.append("name",customerName);
    data.append("nic",customerNIC);
    data.append("drivingLicense",customerDrivingLicense);
    data.append("email",customerEmail);
    data.append("password",customerPassword);
    data.append("contactNumber",contactNumber);
    data.append("address",customerAddress);
    data.append("img", file, fileName);
    data.append("status",customerStatus);

    $.ajax({
        url:baseURL+"customer",
        method:"post",
        data:data,
        async:true,
        contentType:false,
        processData:false,
        success:function (res) {
            alert(res.message);
            $('#UserViewCarRents').css('display','block');

            $('#UserDashBoard').css('display','none');
            $('#UserAccount').css('display','none');
            $('#UserLoginAccount').css('display','none');
            $('#UserStore').css('display','none');
            $('#userCarCatalogue').css('display','none');
            $('#UserCheckOut').css('display','none');

            $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
            $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
            $(' #UserDashBoardHeadNav>ul>li:nth-child(3)>a').css('font-weight','800');

            $(".Account").click(function (){
                $('#UserViewCarRents').css('display','block');

                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');
                $('#UserStore').css('display','none');
                $('#userCarCatalogue').css('display','none');
                $('#UserCheckOut').css('display','none');

                $('#UserDashBoardHeadNav>ul>li>a').css('color','black');
                $('#UserDashBoardHeadNav>ul>li>a').css('font-weight','400');
                $(' #UserDashBoardHeadNav>ul>li:nth-child(2)>a').css('font-weight','800');

            });
        },
        error:function (err) {
            alert(JSON.parse(err.responseText).message);
        }
    });

});
