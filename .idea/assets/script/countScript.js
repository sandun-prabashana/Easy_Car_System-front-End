function CustomerCount() {
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/customer/count',
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
                let CustomerCount = response.data;
                document.getElementById("CustCount").innerText=CustomerCount;
        }
    });
}

CustomerCount();
BookingCount();

    function BookingCount() {
         var now=new Date();
            var month=(now.getMonth()+1);
            var day=now.getDate();
            if(month<10)
                month="0"+month;
            if (day<10)
                day="0"+day;
            var today=now.getFullYear()+'-'+month+'-'+day;
           let Today=today;

        $.ajax({
            url: 'http://localhost:8079/Spring_Final_Project_war_exploded/request/count/'+Today,
            method: 'GET',
            async: true,
            dataType: 'json',
            success: function (response) {
                let Count = response.data;
                document.getElementById("bookingCount").innerText=Count;
            }
        });
    }

    VehicleFreeCount();

function VehicleFreeCount() {
        let resone='Free';
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle/count/'+resone,
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
            let CustomerCount = response.data;
            document.getElementById("AvalableCar").innerText=CustomerCount;
        }
    });
}
VehicleBusyCount();

function VehicleBusyCount() {
    let resone='Busy';
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/vehicle/count/'+resone,
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
            let CustomerCount = response.data;
            document.getElementById("BusyCar").innerText=CustomerCount;
        }
    });
}

DriverFreeCount();
function DriverFreeCount() {
    let resone='Free';
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/count/'+resone,
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
            let CustomerCount = response.data;
            document.getElementById("FreeDriver").innerText=CustomerCount;
        }
    });
}

DriverBusyCount();
function DriverBusyCount() {
    let resone='Busy';
    $.ajax({
        url: 'http://localhost:8079/Spring_Final_Project_war_exploded/driver/count/'+resone,
        method: 'GET',
        async: true,
        dataType: 'json',
        success: function (response) {
            let CustomerCount = response.data;
            document.getElementById("BusyDriver").innerText=CustomerCount;
        }
    });
}