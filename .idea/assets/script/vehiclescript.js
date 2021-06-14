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

var fmilage=/^[0-9]{1,15}$/;
$('#freemileage').on('keydown',function (event) {
    var input=(event.key);
    let inputAddress=$('#freemileage').val();
    if (fmilage.test(inputAddress)){
        $('#lblfreemileage').text('');
        $('#freemileage').css('border','2px solid lime');
        if (input=="Enter"){
            $('#totkm').focus();
        }
    }else {
        $('#freemileage').css('border','2px solid red');
        $('#lblfreemileage').text('Your Input Data format Is Wrong(Ex:-1)');
        $('#freemileage').focus();
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
            method: "POST",
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