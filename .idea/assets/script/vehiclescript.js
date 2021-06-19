$("#status").val('Notbooked');
$("#type").val('Good');


var vid=/^[A-Z]{1,3}(-)[0-9]{1,4}$/;
$('#vehicleid').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#vehicleid').val();
    if (vid.test(inputAddress)){
        $('#lblvehicleid').text('');
        $('#vehicleid').css('border','2px solid lime');
        if (input=="Enter"){
            $('#brand').focus();
        }
    }else {
        $('#vehicleid').css('border','2px solid red');
        $('#lblvehicleid').text('Your Input Data format Is Wrong(Ex:-AAA-1111)');
        $('#vehicleid').focus();
    }
});

var brand=/^[A-Z]{1}[a-z]{1,15}$/;
$('#brand').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#brand').val();
    if (brand.test(inputAddress)){
        $('#lblbrand').text('');
        $('#brand').css('border','2px solid lime');
        if (input=="Enter"){
            $('#color').focus();
        }
    }else {
        $('#brand').css('border','2px solid red');
        $('#lblbrand').text('Your Input Data format Is Wrong(Ex:-Toyota)');
        $('#brand').focus();
    }
});

var categary=/^[A-Z]{1}[a-z]{1,15}$/;
$('#categary').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#categary').val();
    if (categary.test(inputAddress)){
        $('#lblCategary').text('');
        $('#categary').css('border','2px solid lime');
        if (input=="Enter"){
            $('#color').focus();
        }
    }else {
        $('#categary').css('border','2px solid red');
        $('#lblCategary').text('Your Input Data format Is Wrong(Ex:-General)');
        $('#categary').focus();
    }
});
var color=/^[A-Z]{1}[a-z]{1,15}$/;
$('#color').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#color').val();
    if (color.test(inputAddress)){
        $('#lblcolor').text('');
        $('#color').css('border','2px solid lime');
        if (input=="Enter"){
            $('#noofpassengers').focus();
        }
    }else {
        $('#color').css('border','2px solid red');
        $('#lblcolor').text('Your Input Data format Is Wrong(Ex:-Red)');
        $('#color').focus();
    }
});



var no=/^[1-9]{1,2}$/;
$('#noofpassengers').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#noofpassengers').val();
    if (no.test(inputAddress)){
        $('#lblnoofpassengers').text('');
        $('#noofpassengers').css('border','2px solid lime');
        if (input=="Enter"){
            $('#transtype').focus();
        }
    }else {
        $('#noofpassengers').css('border','2px solid red');
        $('#lblnoofpassengers').text('Your Input Data format Is Wrong(Ex:-2)');
        $('#noofpassengers').focus();
    }
});

var ttype=/^[A-Z]{1}[a-z]{1,15}$/;
$('#transtype').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#transtype').val();
    if (ttype.test(inputAddress)){
        $('#lbltranstype').text('');
        $('#transtype').css('border','2px solid lime');
        if (input=="Enter"){
            $('#fueltype').focus();
        }
    }else {
        $('#transtype').css('border','2px solid red');
        $('#lbltranstype').text('Your Input Data format Is Wrong(Ex:-Auto)');
        $('#transtype').focus();
    }
});

var ftype=/^[A-Z]{1}[a-z]{1,15}$/;
$('#fueltype').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#fueltype').val();
    if (ftype.test(inputAddress)){
        $('#lblfueltype').text('');
        $('#fueltype').css('border','2px solid lime');
        if (input=="Enter"){
            $('#dailyrate').focus();
        }
    }else {
        $('#fueltype').css('border','2px solid red');
        $('#lblfueltype').text('Your Input Data format Is Wrong(Ex:-Petral)');
        $('#fueltype').focus();
    }
});

var drate=/^[0-9]{1,11}(.00)$/;
$('#dailyrate').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#dailyrate').val();
    if (drate.test(inputAddress)){
        $('#lbldailyrate').text('');
        $('#dailyrate').css('border','2px solid lime');
        if (input=="Enter"){
            $('#monthlyrate').focus();
        }
    }else {
        $('#dailyrate').css('border','2px solid red');
        $('#lbldailyrate').text('Your Input Data format Is Wrong(Ex:-1000.00)');
        $('#dailyrate').focus();
    }
});

var mrate=/^[0-9]{1,11}(.00)$/;
$('#monthlyrate').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#monthlyrate').val();
    if (mrate.test(inputAddress)){
        $('#lblmonthlyrate').text('');
        $('#monthlyrate').css('border','2px solid lime');
        if (input=="Enter"){
            $('#extrakmprice').focus();
        }
    }else {
        $('#monthlyrate').css('border','2px solid red');
        $('#lblmonthlyrate').text('Your Input Data format Is Wrong(Ex:-100000.00)');
        $('#monthlyrate').focus();
    }
});

var ekm=/^[0-9]{1,15}$/;
$('#extrakmprice').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#extrakmprice').val();
    if (ekm.test(inputAddress)){
        $('#lblextrakmprice').text('');
        $('#extrakmprice').css('border','2px solid lime');
        if (input=="Enter"){
            $('#freemileage').focus();
        }
    }else {
        $('#extrakmprice').css('border','2px solid red');
        $('#lblextrakmprice').text('Your Input Data format Is Wrong(Ex:-10)');
        $('#extrakmprice').focus();
    }
});

var fmilageD=/^[0-9]{1,15}$/;
$('#freemileageDay').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#freemileageDay').val();
    if (fmilageD.test(inputAddress)){
        $('#lblfreemileageDay').text('');
        $('#freemileageDay').css('border','2px solid lime');
        if (input=="Enter"){
            $('#freemileageMonth').focus();
        }
    }else {
        $('#freemileageDay').css('border','2px solid red');
        $('#lblfreemileageDay').text('Your Input Data format Is Wrong(Ex:-1)');
        $('#freemileageDay').focus();
    }
});
var fmilageM=/^[0-9]{1,15}$/;
$('#freemileageMonth').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#freemileageMonth').val();
    if (fmilageM.test(inputAddress)){
        $('#lblfreemileageMonth').text('');
        $('#freemileageMonth').css('border','2px solid lime');
        if (input=="Enter"){
            $('#totkm').focus();
        }
    }else {
        $('#freemileageMonth').css('border','2px solid red');
        $('#lblfreemileageMonth').text('Your Input Data format Is Wrong(Ex:-1)');
        $('#freemileageMonth').focus();
    }
});

var tkm=/^[0-9]{1,15}$/;
$('#totkm').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#totkm').val();
    if (tkm.test(inputAddress)){
        $('#lbltotkm').text('');
        $('#totkm').css('border','2px solid lime');
        if (input=="Enter"){
            $('#status').focus();
        }
    }else {
        $('#totkm').css('border','2px solid red');
        $('#lbltotkm').text('Your Input Data format Is Wrong(Ex:-0)');
        $('#totkm').focus();
    }
});

var Vstatus=/^[A-Z]{1}[a-z]{1,15}$/;
$('#status').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#status').val();
    if (Vstatus.test(inputAddress)){
        $('#lblstatus').text('');
        $('#status').css('border','2px solid lime');
        if (input=="Enter"){
            $('#type').focus();
        }
    }else {
        $('#status').css('border','2px solid red');
        $('#lblstatus').text('Your Input Data format Is Wrong(Ex:-Booked or Notbooked)');
        $('#status').focus();
    }
});

var type=/^[A-Z]{1}[a-z]{1,15}$/;
$('#type').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#type').val();
    if (type.test(inputAddress)){
        $('#lbltype').text('');
        $('#type').css('border','2px solid lime');
        if (input=="Enter"){
        }
    }else {
        $('#type').css('border','2px solid red');
        $('#lbltype').text('Your Input Data format Is Wrong(Ex:-Good or Repair)');
        $('#type').focus();
    }
});


$("#btnVsave").click(function () {
    var fileObject = $("#frontimage")[0].files[0];

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
                console.log(resp.data);
                let vid = $("#vehicleid").val();
                let brand = $("#brand").val();
                let categary=$("#categary").val();
                let color = $("#color").val();
                let no = $("#noofpassengers").val();
                let ttype = $("#transtype").val();
                let ftype = $("#fueltype").val();
                let drate = $("#dailyrate").val();
                let mrate = $("#monthlyrate").val();
                let ekp = $("#extrakmprice").val();
                let fmd = $("#freemileageDay").val();
                let fmm = $("#freemileageMonth").val();
                let tk = $("#totkm").val();
                let s = $("#status").val();
                let type = $("#type").val();


                var elength = $("#fueltype").val().length;
                var plength = $("#type").val().length;

                if (elength > 0 && plength > 0){
                    $.ajax({
                        method: "POST",
                        url: "http://localhost:8079/Spring_Final_Project_war_exploded/vehicle",
                        contentType: 'application/json',
                        async: true,
                        data: JSON.stringify({
                            color: color,
                            type: type,
                            status: s,
                            category:categary,
                            no_Of_Passenger: no,
                            transmission_Type: ttype,
                            extra_Km_Price: ekp,
                            vid: vid,
                            front_Image: resp.data,
                            daily_Rate: drate,
                            brand: brand,
                            fuel_Type: ftype,
                            monthly_Rate: mrate,
                            free_Km_For_Day:fmd,
                            free_Km_For_Month:fmm,
                            total_Km: tk,
                        }),
                        success: function (data,message) {
                            swal("Vehicle Save Sussesfull","success" );

                        },
                        error: function (data,message) {
                            swal("Vehicle Save Fail","fail" );
                        }
                    });
                }else {
                    swal("Fields Cannot Be Empy","fail" );

                }
            }
        }
    });

});



$("#btnVupdate").click(function () {

    let vid = $("#vehicleid").val();
    let brand = $("#brand").val();
    let color = $("#color").val();
    let no = $("#noofpassengers").val();
    let ttype = $("#transtype").val();
    let ftype = $("#fueltype").val();
    let drate = $("#dailyrate").val();
    let mrate = $("#monthlyrate").val();
    let ekp = $("#extrakmprice").val();
    let fm = $("#freemileage").val();
    let tk = $("#totkm").val();
    let s = $("#status").val();
    let type = $("#type").val();
    let fi = $("#frontimage").val();
    let bi = $("#backimage").val();
    let li = $("#leftimage").val();
    let ri = $("#rightimage").val();


    var elength = $("#fueltype").val().length;
    var plength = $("#type").val().length;

    if (elength > 0 && plength > 0){
        $.ajax({
            method: "PUT",
            url: "http://localhost:8079/Spring_Final_Project_war_exploded/vehicle",
            contentType: 'application/json',
            async: true,
            data: JSON.stringify({
                color: color,
                type: type,
                status: s,
                no_Of_Passenger: no,
                transmission_Type: ttype,
                extra_Km_Price: ekp,
                vid: vid,
                front_Image: fi,
                back_Image: bi,
                daily_Rate: drate,
                brand: brand,
                left_Image: li,
                fuel_Type: ftype,
                monthly_Rate: mrate,
                free_Mileage: fm,
                right_Image: ri,
                total_Km: tk,
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


$("#deleteVehicle").click(function () {
    let vid = $("#vehicleid").val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8079/Spring_Final_Project_war_exploded/vehicle/?vid="+vid,
        async: true,
        success: function (data) {
            swal("Vehicle Delete Sussesfull","success" );

        },
        error: function (err) {
            console.log(err);
            swal("Vehicle Delete Fail","fail" );
        }
    });
});

$(".btnDriver").click(function () {
    $("#tblVehicle").empty();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle',
        async: true,
        success: function (response) {
            console.log(response);
            let array = response.data;
            for (let i of array) {
                let row = `<tr><td>${i.vid}</td><td>${i.brand}</td><td>${i.color}</td><td>${i.no_Of_Passenger}</td><td>${i.transmission_Type}</td><td>${i.fuel_Type}</td><td>${i.daily_Rate}</td>
                            <td>${i.monthly_Rate}</td><td>${i.extra_Km_Price}</td><td>${i.free_Km_For_Day}</td><td>${i.free_Km_For_Month}</td><td>${i.total_Km}</td><td>${i.status}</td><td>${i.type}</td></tr>`;
                $("#tblVehicle").append(row);
            }

        }
    });

    console.log("aaa");
})

