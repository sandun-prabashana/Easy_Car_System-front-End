
function switchToCars() {
    $('.main-container>section').css({display: "none"});
    $('.cars-container').css({display: "block"});
}

function switchToDashboard() {
    $('.main-container>section').css({display: "none"});
    $('.dashboard-container').css({display: "block"});
}

function switchToDrivers() {
    $('.main-container>section').css({display: "none"});
    $('.view-drivers-container').css({display: "block"});
}


function switchToCustomer() {
    // loadAllCustomers();
    $('.main-container>section').css({display: "none"});
    $('.view-customers-container').css({display: "block"});

}

function switchToIncome() {
    // calculateIncome();
    $('.main-container>section').css({display: "none"});
    $('.calculate-income-container').css({display: "block"});
}

function switchToRental() {
    // calculateIncome();
    $('.main-container>section').css({display: "none"});
    $('.rental-container').css({display: "block"});
}




function assignDataToTable() {
    $("tblCustomer").empty();
    $.ajax({
        type:"GET",
        contentType: "application/json",
        url:"http://localhost:8079/Spring_Final_Project_war_exploded/customer",
        async: true,
        success: function(data) {
            var users = JSON.parse(JSON.stringify(data));
            for (var i in users) {
                $("tblCustomer").
                append("<tr> \
                            <td>" +  users[i].cnic + "</td> \
                            <td>" +  users[i].dl_No + "</td> \
                            <td>" +  users[i].name + "</td> \
                            <td>" +  users[i].address + "</td> \
                            <td>" +  users[i].phone_No + "</td> \
                            <td>" +  users[i].email_Address + "</td> \
                            <td>" +  users[i].password + "</td> \
                           \
                        </tr>");
            }
        },
        error: function(data) {
            console.log(data);
        }
    });

}
