var username = document.getElementById('username');
var password = document.getElementById('password');
var submitBtn = document.getElementById('submit_btn');

var userDetails = [
    { UserName: "yps@12345", Password: "admin" },
    { UserName: "yps@123", Password: "reddy" }
]

function StudentInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for (let user of userDetails) {
        if (username == user.UserName && password == user.Password) {
            location.href = "studentdetails.html";
        }
    }
}



var tenthData = [
    { name: 'Ramireddy', surname: 'Palivela', place: 'Rayavaram', fname: 'Venkateswarao', mobile: 8897942269 },
    { name: 'Ayyappa', surname: 'Palivela', place: 'Yeleswaram', fname: 'Venkateswarao', mobile: 9701325598 },
    { name: 'Padmaraju', surname: 'Palivela', place: 'Yerravaram', fname: 'Venkateswarao', mobile: 8977427308 },
];

function ClickTenth(data) {
    alert('success');
    if(data == tenthData){
        let template = '';
        for (let item of tenthData) {
            template += `<tr>
                  <td>${item.name}</td>
                   <td>${item.surname}</td>
                   <td>${item.fname}</td>
                   <td>${item.place}</td>
                   <td>${item.mobile}</td>
                </tr>`
        }
        document.getElementById('table-body').innerHTML =template;
    }
    location.href= "basic.html";
   
}