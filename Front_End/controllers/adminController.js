$("#btnAdminSave").click(function () {
    let adminData = $("#adminForm").serialize();

    $.ajax({
        url: baseURL+"admin",
        method: "post",
        data: adminData,
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllAdmins();
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});