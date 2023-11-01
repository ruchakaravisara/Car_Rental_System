
let isValidAdminId = false;
let isValidAdminEmail = false;
let isValidAdminName = false;
let isValidAdminPassword = false;


function checkValidAdmin() {
    isValidAdminId = isValid(adminidRegEX, adminIdField.val());
    isValidAdminEmail = isValid(adminEmailRegEx, adminEmailField.val());
    isValidAdminName = isValid(adminNameRegEX, adminNameField.val());
    isValidAdminPassword = isValid(adminpasswordRegEX, adminPasswordField.val());

    return isValidAdminId && isValidAdminEmail && isValidAdminName && isValidAdminPassword ;
}

// text fields
let adminIdField = $('#txtAdminId');
let adminEmailField = $('#txtAdminEmail');
let adminNameField = $('#txtAdminUserName');
let adminPasswordField = $('#txtAdminPassword');


// regex patterns
let adminidRegEX = /^(A00)[0-9]{1,}$/;
let adminEmailRegEx =/^[A-Za-z0-9]{1,}(@gmail.com)$/;
let adminNameRegEX = /^[A-z]{4,}$/;
let adminpasswordRegEX =/^[0-9A-z]{4,}$/;



//error labels
let invalidIDMessage = $('#invalidAdminID');
let invalidemailMessage = $('#invalidADminEmail');
let invalidnameMessage = $('#invalidAdminName');
let invalidpasswordMessage = $('#invalidAdminpassword');


//hide at beginning
adminFormHideErrorMessages();

function adminFormHideErrorMessages() {
    invalidIDMessage.hide();
    invalidemailMessage.hide();
    invalidnameMessage.hide();
    invalidpasswordMessage.hide();

}

// keyup functions

adminIdField.on('keyup', function () {
    isValidAdminId = isValid(adminidRegEX, adminIdField.val());
    MakeChanges(isValidAdminId,adminIdField,invalidIDMessage);
});


adminEmailField.on('keyup', function () {
    isValidAdminEmail = isValid(adminEmailRegEx, adminEmailField.val());
    MakeChanges(isValidAdminEmail,adminEmailField,invalidemailMessage);
});


adminNameField.on('keyup', function () {
    isValidAdminName = isValid(adminNameRegEX, adminNameField.val());
    MakeChanges(isValidAdminName,adminNameField,invalidnameMessage);
});


adminPasswordField.on('keyup', function () {
    isValidAdminPassword = isValid(adminpasswordRegEX, adminPasswordField.val());
    MakeChanges(isValidAdminPassword,adminPasswordField,invalidpasswordMessage);
});




///////////////////////////////////////////////

// disable tab
$("#txtAdminId,#txtAdminEmail,#txtAdminUserName,#txtAdminPassword").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

// press enter to go next text fields (simulate tab)
$("#txtCustomerName").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerNIC').focus();
    }
});

$("#txtCustomerNIC").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerDrivingLicense').focus();
    }
});

$("#txtCustomerDrivingLicense").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerContactNumber').focus();
    }
});
$("#txtCustomerContactNumber").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerEmail').focus();
    }
});
$("#txtCustomerEmail").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerAddress').focus();
    }
});
$("#txtCustomerAddress").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerPassword').focus();
    }
});


