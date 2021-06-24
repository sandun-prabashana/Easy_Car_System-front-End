var s1=document.getElementById('login');
var s2=document.getElementById('dprofile');

var b=document.getElementById('bodyid');

s1.style.display='block';
s2.style.display='none';
// var s2=document.getElementById('driver');
//
// view1();
//
// function view1(){
//     s2.style.display='none';
// }




$("#driverLogin").click(function () {
cheackDriverLogin();
});

$(".empty").click(function () {
    $("#forgetEmail").val("");
    $("#forgetPassword").val("");
});


$("#adminLogin").click(function () {
    cheackAdminLogin()
});


$("#DriverForgetPassword").click(function () {
    getForegetPasswordForDnic();
});

$("#AdminForgetPassword").click(function () {
    getForegetPasswordForAnic();
});


var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id03');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id04');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var DriverEmail;
function cheackDriverLogin() {

    let email = $("#driverEmail").val();
    DriverEmail=email;
    let password = $("#driverPassword").val();

    let emailLength = $("#driverEmail").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/go/'+email,
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
                        swal("ok","warning");
                        s1.style.display='none';
                        s2.style.display='block';
                        b.style.background='none';
                        getDetailByemail();

                    }else{
                        swal("Wrong Password","warning");
                    }
                }
            }
        });
    }else{
        $('#driverEmail').focus();
        $('#driverEmail').css('border','2px solid red');
    }



}

function openWin() {
    window.open("index.html")
    $("#adminEmail").val("");
    $("#adminPassword").val("");
}


function cheackAdminLogin() {
    let email = $("#adminEmail").val();
    let password = $("#adminPassword").val();

    let emailLength = $("#adminEmail").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/login/go/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let newemail=response.data;
                if (newemail==null){
                    swal("You are not registered","warning");
                }else{
                    if (newemail==password){
                        swal("ok","warning");
                        openLoginWin();

                    }else{
                        swal("Wrong Password","warning");
                    }
                }
            }
        });
    }else{
        $('#adminEmail').focus();
        $('#adminEmail').css('border','2px solid red');
    }



}

function openLoginWin() {
    window.open("test.html")
    $("#adminEmail").val("");
    $("#adminPassword").val("");
}


var v1=document.getElementById('id01');
var v2=document.getElementById('id02');
var v3=document.getElementById('id03');
var v4=document.getElementById('id04');
$("#forgetbtn").click(function () {
    v1.style.display='none';
    v2.style.display='block';
});

$("#forgetAbtn").click(function () {
    v4.style.display='none';
    v3.style.display='block';
});



function getForegetPasswordForDnic() {
    let email = $("#forgetEmail").val();
    let password = $("#forgetPassword").val();

    let emailLength = $("#forgetEmail").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/goNic/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let dnewemail=response.data;
                if (dnewemail==null){
                    swal("You are not registered!!!","warning");
                }else{
                    $("#forgetPassword").val(dnewemail);

                }
            }
        });
    }else{
        $('#forgetEmail').focus();
        $('#forgetEmail').css('border','2px solid red');
    }



}


function getForegetPasswordForAnic() {
    let email = $("#forgetAEmail").val();
    let password = $("#forgetAPassword").val();

    let emailLength = $("#forgetAEmail").val().length;
    if (emailLength>0){
        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/login/goNic/'+email,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let lnewemail=response.data;
                if (lnewemail==null){
                    swal("You are not registered","warning");
                }else{
                    $("#forgetAPassword").val(lnewemail);
                }
            }
        });
    }else{
        $('#forgetAEmail').focus();
        $('#forgetAEmail').css('border','2px solid red');
    }
}

function getDetailByemail() {
    let Email = DriverEmail;

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/need/'+Email,
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            $("#dnic").val(array.password);
            $("#dname").val(array.name);
            $("#daddress").val(array.dnic);
            $("#dno").val(array.email);
            $("#demail").val(array.status);
            $("#dpassword").val(array.address);
        }
    });
}

function openWinDriver() {
    window.open("driver.html")
    $("#adminEmail").val("");
    $("#adminPassword").val("");
}
date();
function date(){
    var now=new Date();
    var month=(now.getMonth()+1);
    var day=now.getDate();
    if(month<10)
        month="0"+month;
    if (day<10)
        day="0"+day;
    var today=now.getFullYear()+'-'+month+'-'+day;
    $('#ddate').val(today);
}

var driS=document.getElementById('DriSchedule');
var driP=document.getElementById('DriProfile');
driS.style.display='none';

$("#liProfile").click(function () {
    driS.style.display='none';
    driP.style.display='block';
});

$("#lischedule").click(function () {
    driS.style.display='block';
    driP.style.display='none';

    ScheduleLoad();

});

$("#mainMenu").click(function () {
    // s1.style.display='block';
    // s2.style.display='none';
    // b.style.backgroundImage="url('../main.jpg')"
    window.location.reload(false);

});


function ScheduleLoad() {
    let did=$("#dnic").val();
    $("#tblLSchedule").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/schedule/getall',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                if(i.requestDetail.driver.dnic==did){
                    let pic=i.bankSlip;
                    let row = `<tr><td>${i.requestDetail.vid}</td><td>${i.requestDetail.customer.cnic}</td><td>${i.date}</td><td>${i.requestDetail.returnDate}</td><td>${i.statues}</td>

                            </tr>`;
                    $("#tblLSchedule").append(row);
                }
            }
        }
    });
}