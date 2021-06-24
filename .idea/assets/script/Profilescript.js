var v1=document.getElementById('view1');
var v2=document.getElementById('view2');
var v3=document.getElementById('view3');

views();
date();

function views(){
    v1.style.display='block';
    v2.style.display='none';
    v3.style.display='none';

}

var Today;
function date(){
    var now=new Date();
    var month=(now.getMonth()+1);
    var day=now.getDate();
    if(month<10)
        month="0"+month;
    if (day<10)
        day="0"+day;
    var today=now.getFullYear()+'-'+month+'-'+day;
    Today=today;
    $('#CDate').val(today);
    $('#RDate').val(today);
}


$("#btnSign").click(function () {


    cheackCustomerLogin();

});


$('#BRt').click(function () {
    var x = document.getElementById("BRt").value;
    if (x=='Month'){
        $("#BRf").val(mrate);
    }else if (x=='Day'){
        $("#BRf").val(drate);
    }
})

function cheackCustomerLogin() {
    let email = $("#input_email").val();
    let password = $("#input_password").val();

    let emailLength = $("#input_email").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let newemail=response.data;
                console.log(newemail);
                if (newemail==null){
                    swal("You are not registered","warning");
                }else{
                    if (newemail==password){
                        v1.style.display='none';
                        v2.style.display='block';
                        v3.style.display='none';
                        getDetailByemail();
                    }else{
                        swal("Wrong Password","warning");
                    }
                }
            }
        });
    }else{
        $('#input_email').focus();
        $('#input_email').css('border','2px solid red');
        $('#lblemail').text('Fields Can not Be Empty');
    }



}





$(".goProfile").click(function () {
    v1.style.display='none';
    v2.style.display='block';
    v3.style.display='none';
});

$(".goBooking").click(function () {
    v1.style.display='none';
    v2.style.display='none';
    v3.style.display='block';
});


var g1=document.getElementById('gtable');
var g2=document.getElementById('ptable');
var g3=document.getElementById('ltable');

var book=document.getElementById('Booking');
var request=document.getElementById('bookingRq');


subcar();

function subcar(){
    g1.style.display='block';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='none';
    request.style.display='none';
}


$("#gCarbtn").click(function () {

    g1.style.display='block';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='none';
    request.style.display='none';


    getGCars();

});

$("#pCarbtn").click(function () {

    g1.style.display='none';
    g2.style.display='block';
    g3.style.display='none';
    book.style.display='none';
    request.style.display='none';


    getPCars();
});

$("#lCarbtn").click(function () {

    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='block';
    book.style.display='none';
    request.style.display='none';


    getLCars();
});

$("#btnBooking").click(function () {
    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='block';
    request.style.display='none';

});

$("#btnRequest").click(function () {
    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='none';
    request.style.display='block';
    getRDetail();

});




getGCars();


function getGCars() {
    $("#tblGVehicle").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            var Gcar="General";
            type='g'
            for (let i of array) {
                let Cbrand=i.category;
                if (Cbrand==Gcar) {
                    if (i.status=="Free"){
                        let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg" onclick="getGCarDetail(this)"></button> </td>
                            </tr>`;
                        $("#tblGVehicle").append(row);
                    }

                }
            }
        }
    });
}

var type;

var drate;
var mrate;

function getGCarDetail(ctl) {
_row=$(ctl).parents("tr");
var cols=_row.children("td");
console.log($(cols[0]).text());
let id=$(cols[0]).text()
    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='block';
$('#BVid').val(id);
let cid=$("#Cnic").val();
    $("#BCid").val(cid);

    drate=$(cols[6]).text();
    mrate=$(cols[7]).text()


    let gpayment=10000.00;
    let ppayment=15000.00;
    let lpayment=20000.00;

    if (type=='g'){
        $("#Bldw").val(gpayment);
    } else if (type=='p'){
        $("#Bldw").val(ppayment);
    } else if (type=='l'){
        $("#Bldw").val(lpayment);
    }


}


var ptype;
function getPCars() {
    $("#tblPVehicle").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            var Gcar="Premium";
            type='p';
            for (let i of array) {
                let Cbrand=i.category;
                if (Cbrand==Gcar) {
                    if (i.status=="Free") {
                        let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg" onclick="getGCarDetail(this)"></button> </td>
                            </tr>`;
                        $("#tblPVehicle").append(row);
                    }
                }
            }
        }
    });
}

var ltype;
function getLCars() {
    $("#tblLVehicle").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            var Gcar="Luxury";
            ltype=Gcar;
            for (let i of array) {
                let Cbrand=i.category;
                type='l';
                if (Cbrand==Gcar) {
                    if (i.status=="Free") {
                        let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg" onclick="getGCarDetail(this)"></button> </td>
                            </tr>`;
                        $("#tblLVehicle").append(row);
                    }
                }
            }
        }
    });
}

function getDetailByemail() {
    let custEmail = $("#input_email").val();

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer/need/'+custEmail,
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            $("#Cnic").val(array.cnic);
            $("#custName").val(array.name);
            $("#custAddress").val(array.address);
            $("#custNo").val(array.phone_No);
            $("#custLNo").val(array.dl_No);
            $("#custEmail").val(array.email_Address);
            $("#custPassword").val(array.password);
        }
    });
}

generateRequestID();

function generateRequestID() {
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request',
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
            try {
                let last_rid = response.data;
                let newId = parseInt(last_rid.substring(1, 4)) + 1;
                if (newId < 10) {
                    request_id = "R00" + newId;
                    $('#Rno').val(request_id);
                } else if (newId < 100) {
                    request_id = "R0" + newId;
                    $('#Rno').val(request_id);
                } else {
                    request_id = "R" + newId;
                    $('#Rno').val(request_id);
                }

            } catch (e) {
                request_id = "R001";
                $('#Rno').val(request_id);
            }
        }
    });
}

var DriverID;
function searchDriver() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                let did=i.dnic;
                let dstatus=i.status;
                console.log("hello")
                if (dstatus=='Free'){
                    console.log(did)
                    DriverID=did;
                    break;
                }
            }

        }
    });
}
$("#BDid").click(function () {
    searchDriver();
});

$("#BDDid").click(function () {
    DriverID="Don't Need Driver";
});


$("#reqbtn").click(function () {
    var fileObject = $("#DlnP")[0].files[0];

    let vid=$('#BVid').val();
    let rid=$('#Rno').val();
    let pdate=$('#PD').val();
    let rdate=$('#RD').val();
    let ldp=$('#Bldw').val();
    let rtype=document.getElementById("BRt").value;
    let rate=$('#BRf').val();

    let reason='No Reason';
    let status='Pending';
    // const CustObject={};
    var DriverObject;
    let CId=$('#BCid').val();
    let VId;


    var data = new FormData(); //setup form data object to send file data
    data.append("file", fileObject); //append data
    $.ajax({
        method: 'POST',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function (resp) {
            // console.log(resp.data);
            if (resp.code == 200) {
                var bankslip=resp.data;
                $.ajax({
                    method: "POST",
                    url: "http://localhost:8079/Spring_Final_Project_war_exploded/request",
                    contentType: 'application/json',
                    async: true,
                    data: JSON.stringify({
                        customer:{
                            cnic:CId
                        },
                        driver:{
                            dnic:DriverID
                        },
                        reason: reason,
                        bankSlip: bankslip,
                        vid: vid,
                        ldwfee: ldp,
                        statues: status,
                        returnDate: rdate,
                        requestDate:Today,
                        rid: rid,
                        rentalFee: rate,
                        rateType: rtype,
                        pickupDate: pdate,
                    }),
                    success: function (data, resp) {
                        console.log(data);
                        swal("Request Send Success", "susses");
                            updateVehicleStatus();
                            updateDriverStatus();
                            searchDriver()
                        generateRequestID();
                    },
                    error: function (data, resp) {
                        swal("Request Send  Fail", "Fail");
                    }
                });

            }
        }
    });

});


function updateVehicleStatus() {
    let vid=$('#BVid').val();
    let state="Busy";
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle/'+state+'/'+vid,
        async: true,
        success: function (response) {

        }
    });
}

function updateDriverStatus() {
    let did=DriverID;
    let state="Busy";
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/status/'+state+'/'+did,
        async: true,
        success: function (response) {

        }
    });
}


function getRDetail() {
    $("#tblRequset").empty();
    let custid = $("#Cnic").val();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/allreq',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                if(custid==i.customer.cnic) {
                    let row = `<tr><td>${i.rid}</td><td>${i.driver.dnic}</td><td>${i.vid}</td><td>${i.pickupDate}</td><td>${i.returnDate}</td><td>${i.statues}</td>
                            <td>${i.reason}</td>
                            </tr>`;
                    $("#tblRequset").append(row);
                }
                console.log(i.customer.cnic==custid);
            }
        }
    });
}



