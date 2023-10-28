function loadAllCustomers() {
    $("#tblCustomerVerification").empty();
    $.ajax({
       url:baseURL+"customer",
       dataType: "json",
        success: function (resp) {
            
        }
    });
}