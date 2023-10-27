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
var userNIC;
var userDrivingLicense;
var userEmail;
let userPassword;
let userImgL;
let userStatus;
$("#btnSignnUp").click(function (){

    let email =  $("#txtLogEmail").val();
    let password = $("#txtLogPassword").val();
    $.ajax({
        url: baseURL+"customer?email="+email+"&password="+password,
        method: "get",
        dataType:"json",
        success: function (res) {
            alert(res.message);
            if (res.data.password==password  && res.data.email == email){

                $("#txtCustomerUName").val(res.data.name);
                $("#txtCustomerUContactNumber").val(res.data.contactNumber);
                $("#txtCustomerUAddress").val(res.data.address);
                userNIC=res.data.nic;
                userDrivingLicense=res.data.name;
                userEmail=res.data.email;
                userPassword=res.data.password;
                userImgL=res.data.nic;
                userStatus=res.data.status;

                $('.userNameTag').text(res.data.name);
                $('.userEmailTag').text(res.data.email);
                $('#UserViewCarRents').css('display','block');
                $('#UserStore').css('display','none');
                $('#userCarCatalogue').css('display','none');
                $('#UserCheckOut').css('display','none');
                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');


            }
            $("#txtLogEmail").val("");
            $("#txtLogPassword").val("");

            $(".Account").click(function (){
                $('.userNameTag').text(res.data.name);
                $('.userEmailTag').text(res.data.email);
                $('#UserViewCarRents').css('display','block');

                $('#UserDashBoard').css('display','none');
                $('#UserAccount').css('display','none');
                $('#UserLoginAccount').css('display','none');
                $('#UserStore').css('display','none');
                $('#userCarCatalogue').css('display','none');
                $('#UserCheckOut').css('display','none');


            });
        },
        error:function(error){
            alert("Invalid email or password");
        }
    });
});

$("#customerUpdateModalShow").click(function (){
    $("#customerUpdatePopUp").modal('show');

});

$("#btnUpdateCustomer").click(function (){
    let customername=  $("#txtCustomerUName").val();
    let customercnumber=  $("#txtCustomerUContactNumber").val();
    let customercddress=  $("#txtCustomerUAddress").val();


    let cutomer={

        name: customername,
        nic: userNIC,
        address: customercddress,
        drivingLicense: userDrivingLicense,
        email: userEmail,
        password: userPassword,
        contactNumber: customercnumber,
        imageLocation: userImgL,
        status: userStatus
    }

    $.ajax({
        url: baseURL+'customer',
        method: 'put',
        contentType:"application/json",
        data:JSON.stringify(cutomer),
        dataType:"json",
        success: function (res) {
            alert(res.message);
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });

    $("#customerUpdatePopUp").modal('toggle');
});