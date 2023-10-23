$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');
$('#adminCarDetail').css('display','none');
$('#adminCustomerReservation').css('display','none');

$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});
$('.Customer').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','block');
    $('#adminAddCar').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});
$('.Cars').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminAddCar').css('display','block');
    $('#adminCustomer').css('display','none');
    $('#adminCarDetail').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});
$('#btnCarDetail').click(function () {
    $('#adminDashBoard').css('display','block');
    $('#adminCarDetail').css('display','block');
    $('#adminAddCar').css('display','none');
    $('#adminCustomer').css('display','none');
    $('#adminCustomerReservation').css('display','none');
});

