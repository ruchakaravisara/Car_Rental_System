
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

});