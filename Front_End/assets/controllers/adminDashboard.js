$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');
$('#adminCarDetail').css('display','none');
$('#adminCustomerReservation').css('display','none');
$('#adminAddDriver').css('display','none');

$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
});
$('.Customer').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','block');
    $('#adminAddCar').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
});
$('.Cars').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminAddCar').css('display','block');
    $('#adminCustomer').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
});
$('#btnCarDetail').click(function () {
    $('#adminDashBoard').css('display','block');
    $('#adminCarDetail').css('display','block');
    $('#adminAddCar').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
    $('#adminAddDriver').css('display','none');
});

$('.Reservation').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomerReservation').css('display','block');
    $('#adminCarDetail').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminAddDriver').css('display','none');
});

$('.Drivers').click(function () {
    $('#adminDashBoard').css('display','block');
    $('#adminAddDriver').css('display','block');
    $('#adminCarDetail').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});