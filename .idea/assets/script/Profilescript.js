var v1=document.getElementById('view1');
var v2=document.getElementById('view2');
var v3=document.getElementById('view3');

views();

function views(){
    v1.style.display='block';
    v2.style.display='none';
    v3.style.display='none';

}

$("#btnSign").click(function () {


    cheackCustomerLogin();

});

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


subcar();

function subcar(){
    g1.style.display='block';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='none';
}


$("#gCarbtn").click(function () {

    g1.style.display='block';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='none';

    getGCars();

});

$("#pCarbtn").click(function () {

    g1.style.display='none';
    g2.style.display='block';
    g3.style.display='none';
    book.style.display='none';

    getPCars();
});

$("#lCarbtn").click(function () {

    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='block';
    book.style.display='none';

    getLCars();
});

$("#btnBooking").click(function () {
    g1.style.display='none';
    g2.style.display='none';
    g3.style.display='none';
    book.style.display='block';
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
            for (let i of array) {
                let Cbrand=i.category;
                if (Cbrand==Gcar) {
                    let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg" onclick="getGCarDetail(this)"></button> </td>
                            </tr>`;
                    $("#tblGVehicle").append(row);
                }
            }
        }
    });
}

function getGCarDetail(ctl) {
_row=$(ctl).parents("tr");
var cols=_row.children("td");
console.log($(cols[0]).text());
}

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
            for (let i of array) {
                let Cbrand=i.category;
                if (Cbrand==Gcar) {
                    let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg"></button> </td>
                            </tr>`;
                    $("#tblPVehicle").append(row);
                }
            }
        }
    });
}

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
            for (let i of array) {
                let Cbrand=i.category;
                if (Cbrand==Gcar) {
                    let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td>/td>
                            <td><button id="gcarBook" class="imgg"></button> </td>
                            </tr>`;
                    $("#tblLVehicle").append(row);
                }
            }
        }
    });
}




