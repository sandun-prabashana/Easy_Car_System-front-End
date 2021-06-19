

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



function cheackDriverLogin() {

    let email = $("#driverEmail").val();
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
                        openWin();

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

