$("#Stat").val('Free');


var Did=/^[0-9]{8,15}(V)$/;
$('#DriverNic').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#DriverNic').val();
    if (Did.test(inputAddress)){
        $('#lblDriverNic').text('');
        $('#DriverNic').css('border','2px solid lime');
        if (input=="Enter"){
            $('#DName').focus();
        }
    }else {
        $('#DriverNic').css('border','2px solid red');
        $('#lblDriverNic').text('Your Input Data format Is Wrong(Ex:-111111111V)');
        $('#DriverNic').focus();
    }
});

var Dname=/^[A-Z]{1}[a-z]{1,9}( )[A-Z]{1}[a-z]{1,9}$/;
$('#DName').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#DName').val();
    if (Dname.test(inputAddress)){
        $('#lblDName').text('');
        $('#DName').css('border','2px solid lime');
        if (input=="Enter"){
            $('#Address').focus();
        }
    }else {
        $('#DName').css('border','2px solid red');
        $('#lblDName').text('Your Input Data format Is Wrong(Ex:-Saman)');
        $('#DName').focus();
    }
});

var address=/^[A-Z]{1}[a-z]{1,15}$/;
$('#Address').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#Address').val();
    if (address.test(inputAddress)){
        $('#lblAddress').text('');
        $('#Address').css('border','2px solid lime');
        if (input=="Enter"){
            $('#PhoneNo').focus();
        }
    }else {
        $('#Address').css('border','2px solid red');
        $('#lblAddress').text('Your Input Data format Is Wrong(Ex:-Colombo)');
        $('#Address').focus();
    }
});

var no=/^[0-9]{10}$/;
$('#PhoneNo').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#PhoneNo').val();
    if (no.test(inputAddress)){
        $('#lblPhoneNo').text('');
        $('#PhoneNo').css('border','2px solid lime');
        if (input=="Enter"){
            $('#EmailAdd').focus();
        }
    }else {
        $('#PhoneNo').css('border','2px solid red');
        $('#lblPhoneNo').text('Your Input Data format Is Wrong(Ex:-111111111)');
        $('#PhoneNo').focus();
    }
});

var email=/^[a-z]{1,9}(@gmail.com)$/;
$('#EmailAdd').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#EmailAdd').val();
    if (email.test(inputAddress)){
        $('#lblEmailAdd').text('');
        $('#EmailAdd').css('border','2px solid lime');
        if (input=="Enter"){
            $('#Stat').focus();
        }
    }else {
        $('#EmailAdd').css('border','2px solid red');
        $('#lblEmailAdd').text('Your Input Data format Is Wrong(Ex:-name@gmail.com)');
        $('#EmailAdd').focus();
    }
});


var stat=/^[A-Z]{1}[a-z]{1,15}$/;
$('#Stat').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#Stat').val();
    if (stat.test(inputAddress)){
        $('#lblStat').text('');
        $('#Stat').css('border','2px solid lime');
        if (input=="Enter"){
        }
    }else {
        $('#Stat').css('border','2px solid red');
        $('#lblStat').text('Your Input Data format Is Wrong(Ex:-Free or Busy)');
        $('#Stat').focus();
    }
});

$("#btnDsave").click(function () {

    let did = $("#DriverNic").val();
    let name = $("#DName").val();
    let address = $("#Address").val();
    let phone_No = $("#PhoneNo").val();
    let email = $("#EmailAdd").val();
    let password = $("#Password").val();
    let status = $("#Stat").val();


    var elength = $("#EmailAdd").val().length;
    var plength = $("#Password").val().length;

    if (elength > 0 && plength > 0){
        $.ajax({
            method: "POST",
            url: "http://localhost:8079/Spring_Final_Project_war_exploded/driver",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                dnic:did,
                address:address,
                email:email,
                name:name,
                no:phone_No,
                password:password,
                status:status
            }),
            success: function (data,message) {
                console.log(data);
                  swal("Driver Save Sussesfull","success" );
            },
            error: function (data,message) {
                swal("Driver Save Fail","warning" );
            }
        });
    }else {
        swal("Fields Cannot Be Empy","warning" );
    }
});

$("#btnEupdate").click(function () {

    let did = $("#DriverNic").val();
    let name = $("#DName").val();
    let address = $("#Address").val();
    let phone_No = $("#PhoneNo").val();
    let email = $("#EmailAdd").val();
    let password = $("#Password").val();
    let status = $("#Stat").val();


    var elength = $("#EmailAdd").val().length;
    var plength = $("#Password").val().length;

    if (elength > 0 && plength > 0){
        $.ajax({
            method: "PUT",
            url: "http://localhost:8079/Spring_Final_Project_war_exploded/driver",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                dnic:did,
                address:address,
                email:email,
                name:name,
                no:phone_No,
                password:password,
                status:status
            }),
            success: function (data,message) {
                console.log(data);
                swal("Driver Update Sussesfull","success" );
            },
            error: function (data,message) {
                swal("Driver Update Fail","warning" );
            }
        });
    }else {
        swal("Fields Cannot Be Empy","warning" );
    }
});

$(".btnDriver").click(function () {

    $("#tblDriver").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                let row = `<tr><td>${i.dnic}</td><td>${i.name}</td><td>${i.address}</td><td>${i.no}</td><td>${i.email}</td><td>${i.password}</td><td>${i.status}</td></tr>`;
                $("#tblDriver").append(row);
            }

        }
    });

    console.log("aaa");
})