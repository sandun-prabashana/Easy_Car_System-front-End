
$(".loadtbl").click(function () {

    $("#tblCustomerdata").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                let row = `<tr><td>${i.cnic}</td><td>${i.dl_No}</td><td>${i.name}</td><td>${i.address}</td><td>${i.phone_No}</td><td>${i.email_Address}</td><td>${i.password}</td></tr>`;
                $("#tblCustomerdata").append(row);
            }

        }
    });
});

