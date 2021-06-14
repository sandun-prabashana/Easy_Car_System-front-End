$('#input_email,#input_password').on('keydown',function (event) {
    var input=(event.key);
    if (input=="Tab"){
        event.preventDefault();
    }
});

function showPassword() {
var x= document.getElementById("input_password");
if(x.type === "password"){
    x.type="text";
}else {
    x.type="password";
}
}

var email=/^[a-z]{1,9}(@gmail.com)$/;

$('#input_email').on('keydown',function (event) {
    var input=(event.key);
    let inputemail=$('#input_email').val();
    if (email.test(inputemail)){
        $('#lblemail').text('');
        $('#input_email').css('border','2px solid lime');
        if (input=="Enter"){
            $('#input_password').focus();
        }
    }else {
        $('#input_email').css('border','2px solid red');
        $('#lblemail').text('Your Input Data format Is Wrong(name@gmail.com)');
        $('#input_email').focus();
    }
});

$("#btnclear").click(function () {

});


$("#btnsave").click(function () {

    let name = $("#custName").val();
    let address = $("#custAddress").val();
    let phone_No = $("#custPhone").val();
    let cnic = $("#custNic").val();
    let id_Location = $("#custNicP").val();
    let dl_No = $("#custDln").val();
    let dl_Location = $("#DlnP").val();
    let email_Address = $("#EmailAddress").val();
    let password = $("#Password").val();


    var elength = $("#EmailAddress").val().length;
    var plength = $("#Password").val().length;

    if (elength > 0 && plength > 0){
        $.ajax({
            method: "POST",
            url: "http://localhost:8079/Spring_Final_Project_war_exploded/customer",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                address: address ,
                name: name,
                password: password,
                id_Location:id_Location,
                phone_No: phone_No,
                cnic:cnic,
                dl_Location:dl_Location,
                email_Address:email_Address,
                dl_No:dl_No,
            }),
            success: function (data,message) {
                console.log(data);
                alert(message);
            },
            error: function (data,message) {
                alert(message);
            }
        });
    }else {
        alert('Fields Cannot Be Empy');
    }


});

var CustomerName=/^[A-Z]{1}[a-z]{1,9}( )[A-Z]{1}[a-z]{1,9}$/;
$('#custName').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#custName').val();
    if (CustomerName.test(inputName)){
        $('#lblname').text('');
        $('#custName').css('border','2px solid lime');
        if (input=="Enter"){
            $('#custAddress').focus();
        }
    }else {
        $('#custName').css('border','2px solid red');
        $('#lblname').text('Your Input Data format Is Wrong(Ex:-Name Name)');
        $('#custName').focus();
    }
});

var CustomerAddress=/^[A-Z]{1}[a-z]{1,15}$/;
$('#custAddress').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#custAddress').val();
    if (CustomerAddress.test(inputAddress)){
        $('#lbladdress').text('');
        $('#custAddress').css('border','2px solid lime');
        if (input=="Enter"){
            $('#custPhone').focus();
        }
    }else {
        $('#custAddress').css('border','2px solid red');
        $('#lbladdress').text('Your Input Data format Is Wrong(Ex:-Colombo)');
        $('#custAddress').focus();
    }
});

var CustomerPhone=/^[0-9]{3}(-)[0-9]{7}$/;
$('#custPhone').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#custPhone').val();
    if (CustomerPhone.test(inputName)){
        $('#lblphone').text('');
        $('#custPhone').css('border','2px solid lime');
        if (input=="Enter"){
            $('#custNic').focus();
        }
    }else {
        $('#custPhone').css('border','2px solid red');
        $('#lblphone').text('Your Input Data format Is Wrong(Ex:-111-1111111)');
        $('#custPhone').focus();
    }
});

var CustomerNic=/^[0-9]{8,16}(V)$/;
$('#custNic').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#custNic').val();
    if (CustomerNic.test(inputName)){
        $('#lblnic').text('');
        $('#custNic').css('border','2px solid lime');
        if (input=="Enter"){
            $('#custDln').focus();
        }
    }else {
        $('#custNic').css('border','2px solid red');
        $('#lblnic').text('Your Input Data format Is Wrong(Ex:-2000000000V)');
        $('#custNic').focus();
    }
});

var CustomerDlc=/^[A-Z]{1}[1-9]{1,9}$/;
$('#custDln').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#custDln').val();
    if (CustomerDlc.test(inputName)){
        $('#lbldno').text('');
        $('#custDln').css('border','2px solid lime');
        if (input=="Enter"){
            $('#EmailAddress').focus();
        }
    }else {
        $('#custDln').css('border','2px solid red');
        $('#lbldno').text('Your Input Data format Is Wrong(Ex:-B1111111)');
        $('#custDln').focus();
    }
});

var CustomerEmail=/^[a-z]{1,9}(@gmail.com)$/;
$('#EmailAddress').on('keydown',function (event) {
    var input=(event.key);
    let inputName=$('#EmailAddress').val();
    if (CustomerEmail.test(inputName)){
        $('#lble').text('');
        $('#EmailAddress').css('border','2px solid lime');
        if (input=="Enter"){
            $('#Password').focus();
        }
    }else {
        $('#EmailAddress').css('border','2px solid red');
        $('#lble').text('Your Input Data format Is Wrong(Ex:-name@gmail.com)');
        $('#EmailAddress').focus();
    }
});

// var CustomerPassword=/^[A-Z]{1}[a-z]{1,9}( )[A-Z]{1}[a-z]{1,9}$/;
// $('#Password').on('keydown',function (event) {
//     var input=(event.key);
//     let inputName=$('#Password').val();
//     if (CustomerPassword.test(inputName)){
//         $('#lblp').text('');
//         $('#Password').css('border','2px solid lime');
//         if (input=="Enter"){
//             // $('#custAddress').focus();
//         }
//     }else {
//         $('#Password').css('border','2px solid red');
//         $('#lblp').text('Your Input Data format Is Wrong(Ex:-Name Name)');
//         $('#Password').focus();
//     }
// });

