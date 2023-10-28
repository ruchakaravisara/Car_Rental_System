
let isValidCusName = false;
let isValidNic = false;
let isValidLicense = false;
let isValidContact = false;
let isValidEmail = false;
let isValidAddress = false;
let isValidPassword = false;

function checkValidCustomer() {
    isValidCusName = isValid(cusNameRegEX, customerNameField.val());
    isValidNic = isValid(cusNicRegEX, customerNicField.val());
    isValidLicense = isValid(cusLicenseRegEXX, customerLicenseField.val());
    isValidContact = isValid(cusContactRegEXx, customerContactField.val());
    isValidEmail = isValid(cusEmailRegEx, customerEmailField.val());
    isValidAddress = isValid(cusAddressRegEx, customerAddressField.val());
    isValidPassword = isValid(cusPasswordRegEX, customerPasswordField.val());
    return isValidCusName && isValidNic && isValidLicense && isValidContact && isValidEmail && isValidAddress && isValidPassword;
}

// text fields
let customerNameField = $('#txtCustomerName');
let customerNicField = $('#txtCustomerNIC');
let customerLicenseField = $('#txtCustomerDrivingLicense');
let customerContactField = $('#txtCustomerContactNumber');
let customerEmailField = $('#txtCustomerEmail');
let customerAddressField = $('#txtCustomerAddress');
let customerPasswordField = $('#txtCustomerPassword');

// regex patterns
let cusNameRegEX = /^[A-z ]{5,20}$/;
let cusNicRegEX = /^[0-9V]{5,20}$/;
let cusLicenseRegEXX =/^[0-9]{5,10}$/;
let cusContactRegEXx = /^[0-9]{10}$/;
let cusEmailRegEx =/^[A-Za-z0-9]{1,}(@gmail.com)$/;
let cusAddressRegEx=/^[0-9/A-z. ,]{3,}$/;
let cusPasswordRegEX=/^[0-9A-z]{4,}$/;

//error labels
let invalidNameMessage = $('#invalidName');
let invalidNICMessage = $('#invalidNic');
let invalidLicenseMessage = $('#invalidLicense');
let invalidContactMessage = $('#invalidContact');
let invalidEmailMessage = $('#invalidEmail');
let invalidAddressMessage = $('#invalidAddress');
let invalidPasswordMessage = $('#invalidPassword');

//hide at beginning
customerFormHideErrorMessages();

function customerFormHideErrorMessages() {
    invalidNameMessage.hide();
    invalidNICMessage.hide();
    invalidLicenseMessage.hide();
    invalidContactMessage.hide();
    invalidEmailMessage.hide();
    invalidAddressMessage.hide();
    invalidPasswordMessage.hide();

}

// keyup functions

customerNameField.on('keyup', function () {
    isValidCusName = isValid(cusNameRegEX, customerNameField.val());
    MakeChanges(isValidCusName,customerNameField,invalidNameMessage);
});


customerNicField.on('keyup', function () {
    isValidNic = isValid(cusNicRegEX, customerNicField.val());
    MakeChanges(isValidNic,customerNicField,invalidNICMessage);
});


customerLicenseField.on('keyup', function () {
    isValidLicense = isValid(cusLicenseRegEXX, customerLicenseField.val());
    MakeChanges(isValidLicense,customerLicenseField,invalidLicenseMessage);
});


customerContactField.on('keyup', function () {
    isValidContact = isValid(cusContactRegEXx, customerContactField.val());
    MakeChanges(isValidContact,customerContactField,invalidContactMessage);
});
customerEmailField.on('keyup', function () {
    isValidEmail = isValid(cusEmailRegEx, customerEmailField.val());
    MakeChanges(isValidEmail,customerEmailField,invalidEmailMessage);
});

customerAddressField.on('keyup', function () {
    isValidAddress = isValid(cusAddressRegEx, customerAddressField.val());
    MakeChanges(isValidAddress,customerAddressField,invalidAddressMessage);
});
customerPasswordField.on('keyup', function () {
    isValidPassword = isValid(cusPasswordRegEX, customerPasswordField.val());
    MakeChanges(isValidPassword,customerPasswordField,invalidPasswordMessage);
});



///////////////////////////////////////////////

// disable tab
$("#txtCustomerName,#txtCustomerNIC,#txtCustomerDrivingLicense,#txtCustomerContactNumber,#txtCustomerEmail,#txtCustomerAddress,#txtCustomerPassword").keydown(function (e) {
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


