$('#adminDashBoard').css('display','block');
$('#adminCustomer').css('display','none');
$('#adminAddCar').css('display','none');

$('.DashBoard').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','none');
    $('#adminAddCar').css('display','none');
});
$('.Customer').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminCustomer').css('display','block');
    $('#adminAddCar').css('display','none');

});
$('.Cars').click(function (){
    $('#adminDashBoard').css('display','block');
    $('#adminAddCar').css('display','block');
    $('#adminCustomer').css('display','none');

});