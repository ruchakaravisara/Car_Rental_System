
let isValidDriverId = false;
let isValidDriverName = false;
let isValidDriverNIC = false;
let isValidDriverAddress = false;
let isValidDriverLisence = false;


function checkValidDriver() {
    isValidDriverId = isValid(driveridRegEX, driverIdField.val());
    isValidDriverName = isValid(drivernameRegEx, drivernmaelField.val());
    isValidDriverNIC = isValid(drivernicRegEX, drivernicField.val());
    isValidDriverAddress = isValid(driveraddressRegEX, driveraddressField.val());
    isValidDriverLisence = isValid(driverlisenceRegEX, driverlisenceField.val());
    return isValidDriverId && isValidDriverName && isValidDriverNIC && isValidDriverAddress && isValidDriverLisence;
}

// text fields
let driverIdField = $('#did');
let drivernmaelField = $('#dname');
let drivernicField = $('#dnic');
let driveraddressField = $('#daddress');
let driverlisenceField = $('#dlicen');

// regex patterns
let driveridRegEX = /^(D00)[0-9]{1,}$/;
let drivernameRegEx =/^[A-z]{4,}$/;
let drivernicRegEX =/^[0-9V]{5,20}$/;
let driveraddressRegEX =/^[0-9/A-z. ,]{3,}$/;
let driverlisenceRegEX =/^[0-9]{5,10}$/;


//error labels
let invaliddriverIDMessage = $('#invalidDriverID');
let invalidDriverName = $('#invalidDriverName');
let invaliddrivernicMessage = $('#invalidDriverNic');
let invaliddriveraddressMessage = $('#invalidDriverAddress');
let invaliddriverlicenseMessage = $('#invalidDriverLisence');

//hide at beginning
driverFormHideErrorMessages();

function driverFormHideErrorMessages() {
    invaliddriverIDMessage.hide();
    invalidDriverName.hide();
    invaliddrivernicMessage.hide();
    invaliddriveraddressMessage.hide();
    invaliddriverlicenseMessage.hide();
}

// keyup functions

driverIdField.on('keyup', function () {
    isValidDriverId = isValid(driveridRegEX, driverIdField.val());
    MakeChanges(isValidDriverId,driverIdField,invaliddriverIDMessage);
});


drivernmaelField.on('keyup', function () {
    isValidDriverName = isValid(drivernameRegEx, drivernmaelField.val());
    MakeChanges(isValidDriverName,drivernmaelField,invalidDriverName);
});


drivernicField.on('keyup', function () {
    isValidDriverNIC = isValid(drivernicRegEX, drivernicField.val());
    MakeChanges(isValidDriverNIC,drivernicField,invaliddrivernicMessage);
});


driveraddressField.on('keyup', function () {
    isValidDriverAddress = isValid(driveraddressRegEX, driveraddressField.val());
    MakeChanges(isValidDriverAddress,driveraddressField,invaliddriveraddressMessage);
});
driverlisenceField.on('keyup', function () {
    isValidDriverLisence= isValid(driverlisenceRegEX, driverlisenceField.val());
    MakeChanges(isValidDriverLisence,driverlisenceField,invaliddriverlicenseMessage);
});




///////////////////////////////////////////////

// disable tab
$("#did,#dname,#dnic,#daddress,#dlicen").keydown(function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
});

// press enter to go next text fields (simulate tab)
/*$("#txtCustomerName").keydown(function (e){
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
});*/


