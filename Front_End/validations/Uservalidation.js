/*
const cusNameRegEX = /^[A-z ]{5,20}$/;
const cusNicRegEX = /^[0-9V]{5,20}$/;
const cusLicenseRegEXX =/^[0-9]{5,10}$/;
const cusContactRegEXx = /^[0-9]{10,14}$/;
const cusEmailRegEx =/^[A-Za-z0-9]{5,}(@gmail.com)$/;
const cusAddressRegEx=/^[0-9/A-z. ,]{3,}$/;
const cusPasswordRegEX=/^[0-9A-z]{4,}$/;

let customerValidations =[];
customerValidations.push({reg:cusNameRegEX, field:$('#txtCustomerName'),error:'User Name Pattern Is Wrong:Ruchaka'});
customerValidations.push({reg:cusNicRegEX, field:$('#txtCustomerNIC'),error:'User NIC Pattern Is Wrong:200136597678V'});
customerValidations.push({reg:cusLicenseRegEXX, field:$('#txtCustomerDrivingLicense'),error:'User Name Pattern Is Wrong:123456'});
customerValidations.push({reg:cusContactRegEXx, field:$('#txtCustomerContactNumber'),error:'User Name Pattern Is Wrong:0772167545'});
customerValidations.push({reg:cusEmailRegEx, field:$('#txtCustomerEmail'),error:'User Name Pattern Is Wrong:user@gmail.com'});
customerValidations.push({reg:cusAddressRegEx, field:$('#txtCustomerAddress'),error:'User Name Pattern Is Wrong:Galle'});
customerValidations.push({reg:cusPasswordRegEX, field:$('#txtCustomerPassword'),error:'User Name Pattern Is Wrong:12345'});

$("#txtCustomerName,#txtCustomerNIC,#txtCustomerDrivingLicense,#txtCustomerContactNumber,#txtCustomerEmail,#txtCustomerAddress,#txtCustomerPassword").on('keyup',function (event) {
    checkValidity();
});
$("#txtCustomerName,#txtCustomerNIC,#txtCustomerDrivingLicense,#txtCustomerContactNumber,#txtCustomerEmail,#txtCustomerAddress,#txtCustomerPassword").on('blur',function (event) {
    checkValidity();
});

function checkValidity() {
    let errorCount =0;
    for (let validation of customerValidations) {
        if (validation.reg.test(validation.field.val())){
            textSuccess(validation.field,"");
        }else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}
function textSuccess(txtField,error) {
    if (txtField.val().length <=0){
        defaultText(txtField,"");
    }else {
        txtField.css('border','2px solid green');
       $("#lblcusName").text(error);
    }
}
*/
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
let customerNicField = $('#txtCustomerNic');
let customerLicenseField = $('#txtCustomerDrivingLicense');
let customerContactField = $('#txtCustomerContactNumber');
let customerEmailField = $('#txtCustomerEmail');
let customerAddressField = $('#txtCustomerAddress');
let customerPasswordField = $('#txtCustomerPassword');

// regex patterns
let cusNameRegEX = /^[A-z ]{5,20}$/;
let cusNicRegEX = /^[0-9V]{5,20}$/;
let cusLicenseRegEXX =/^[0-9]{5,10}$/;
let cusContactRegEXx = /^[0-9]{10,14}$/;
let cusEmailRegEx =/^[A-Za-z0-9]{5,}(@gmail.com)$/;
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
customerFormHideErrorMessages()

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
// Validate ID
customerNameField.on('keyup', function () {
    isValidCusName = isValid(cusNameRegEX, customerNameField.val());
    MakeChanges(isValidCusName,customerNameField,invalidNameMessage);
});

// Validate Name
customerNameField.on('keyup', function () {
    isValidName = isValid(regexName, customerNameField.val());
    MakeChanges(isValidName,customerNameField,invalidNameMessage);
});

// validate address
customerAddressField.on('keyup', function () {
    isValidAddress = isValid(regexAddress, customerAddressField.val());
    MakeChanges(isValidAddress,customerAddressField,invalidAddressMessage);
});

// validate salary
customerSalaryField.on('keyup', function () {
    isValidSalary = isValid(regexSalary, customerSalaryField.val());
    MakeChanges(isValidSalary,customerSalaryField,invalidSalaryMessage);
});

///////////////////////////////////////////////

// disable tab
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

// press enter to go next text fields (simulate tab)
$("#txtCustomerID").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerName').focus();
    }
});

$("#txtCustomerName").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerAddress').focus();
    }
});

$("#txtCustomerAddress").keydown(function (e){
    if(e.key === "Enter"){
        $('#txtCustomerSalary').focus();
    }
});


