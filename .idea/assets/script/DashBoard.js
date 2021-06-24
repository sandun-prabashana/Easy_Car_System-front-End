
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

loadAllRequset();


 var schedule_id;
function ScheduleId() {
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/schedule',
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                try {
                    let last_rid = response.data;
                    let newId = parseInt(last_rid.substring(1, 4)) + 1;
                    if (newId < 10) {
                        schedule_id = "S00" + newId;

                    } else if (newId < 100) {
                        schedule_id = "S0" + newId;
                    } else {
                        schedule_id = "S" + newId;
                    }

                } catch (e) {
                    schedule_id = "S001";
                }
            }
        });
}



function loadAllRequset() {
    $("#tblRequsetforAdmin").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/allreq',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                    if(i.statues=="Pending"){
                        let pic=i.bankSlip;
                        let row = `<tr><td>${i.rid}</td><td>${i.driver.dnic}</td><td>${i.vid}</td><td>${i.customer.cnic}</td><td>${i.returnDate}</td><td>${i.pickupDate}</td><td>${i.ldwfee}</td>
                            <td><img src="" alt="" border=3 height=100 width=100 id="hello"></img></td>
                            <td><button id="accept" class="" onclick="acceptRq(this)"></button></td>
                            <td><button id="reject" class="" onclick="rejectRq(this)"></button></td>
                            </tr>`;
                        $("#tblRequsetforAdmin").append(row);
                    }
            }
        }
    });
}




function acceptRq(ctl) {
ScheduleId();
    _row=$(ctl).parents("tr");
    var cols=_row.children("td");
    var DriverId=$(cols[1]).text();
    let VehicleId=$(cols[2]).text();
    var RId=$(cols[0]).text();
    var Pdate=$(cols[4]).text();


    ////////////////////////////////////////////////////

        //////////////////////////////////////////////////////
    let state="Pending";
    console.log(RId);
    console.log(DriverId);
    $.ajax({
        method: "POST",
        url: "http://localhost:8079/Spring_Final_Project_war_exploded/schedule",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            requestDetail:{
                rid:RId
            },
            driver:{
                dnic:DriverId
            },
            date: Pdate,
            statues: state,
            sid: schedule_id,
        }),
        success: function (data, resp) {
            swal("Request Accept Susses", "susses");
            let state="Accept";
            $.ajax({
                method: 'PUT',
                url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/status/'+state+'/'+RId,
                async: true,
                success: function (response) {
                    loadAllRequset();
                    ScheduleId();

                }
            });

        },
        error: function (data, resp) {
            swal("Request Accept  Fail", "Fail");
        }
    });
    ///////////////////////////////////////////////////////////


}

function rejectRq(ctl) {
    let seen=$("#Reson").val().length;
    let rea=$("#Reson").val();
    if (seen>0) {
        _row = $(ctl).parents("tr");
        var cols = _row.children("td");
        var DriverId = $(cols[1]).text();
        let VehicleId = $(cols[2]).text();
        var RId = $(cols[0]).text();



        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/reason/'+rea+'/'+RId,
            async: true,
            success: function (response) {
            }
        });


        let state = 'Free';
        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/status/' + state + '/' + DriverId,
            async: true,
            success: function (response) {

            }
        });


        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle/' + state + '/' + VehicleId,
            async: true,
            success: function (response) {

            }
        });

        let Rstate = "Reject";
        $.ajax({
            method: 'PUT',
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/status/' + Rstate + '/' + RId,
            async: true,
            success: function (response) {
                loadAllRequset();
                swal("Request Rejected", "Susses");

            },
            error: function () {
                swal("Request Rejected  Fail", "Fail");
            }
        });
    }else {
        swal("What is the Reason ?","confirm")
        $("#Reson").focus();
    }

}