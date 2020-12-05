var tableBody= document.getElementById('tableBody');
var count = document.getElementById('count')
var checkBox = document.getElementById("myCheck");
var myCheckNew = document.getElementById("myCheckNew");
var myCheck2 = document.getElementById('myCheck2');
var myCheck3 = document.getElementById('myCheck3');

myCheck2.addEventListener('click',(e)=>{
    if(e.target.checked){
        genereateFilterData('InTransit');
    }else{
        genereateWithoutData();
    }
});
myCheck3.addEventListener('click',(e)=>{
    if(e.target.checked){
        genereateFilterData('Delivered');
    }else{
        genereateWithoutData();
    }

})
myCheckNew.addEventListener('click',(e)=>{
    if(e.target.checked){
        genereateFilterData('New');
    }else{
        genereateWithoutData();
    }

})
checkBox.addEventListener('click',(e)=>{
    if(e.target.checked){
        genereateFilterData('Packed');
    }else{
        genereateWithoutData();
    }
})
var logoutAction = document.getElementById('logoutAction')
var logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click',()=>{
    logoutAction.action = "/index.html"
})

function genereateWithoutData(){
    var xhttp= new XMLHttpRequest();
    var apiEndpoint="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
    xhttp.open('GET',apiEndpoint, true );
    xhttp.onreadystatechange= function(){
        if(this.readyState===4){
            tableBody.innerHTML="";
            console.log(JSON.parse(this.responseText));
            var responseArray  =JSON.parse(this.responseText);
            for (var i=0; i<responseArray.length; i++){
                 tableBody.appendChild(generateOrders(responseArray[i]));
                    count.innerHTML = 'Count : ' + responseArray.length;
            }
        }
    }
    xhttp.send()
}
function genereateFilterData(filter){
    var xhttp= new XMLHttpRequest();
    var apiEndpoint="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
    xhttp.open('GET',apiEndpoint, true );
    xhttp.onreadystatechange= function(){
        if(this.readyState===4){
            tableBody.innerHTML="";
            console.log(JSON.parse(this.responseText));
            var responseArray  =JSON.parse(this.responseText);
            for (var i=0; i<responseArray.length; i++){
                if(responseArray[i].orderStatus === filter){
                 tableBody.appendChild(generateOrders(responseArray[i]));
                    count.innerHTML = 'Count : ' + responseArray.length;
                }
            }
        }
    }
    xhttp.send()
}
function generateOrders(obj){
    var row = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = obj.id;
    var td1 = document.createElement('td');
    td1.innerHTML = obj.customerName;
    var td2 = document.createElement('td');
    td2.innerHTML = obj.orderDate;
    var td3 = document.createElement('td');
    td3.innerHTML = obj.amount;
    var td4 = document.createElement('td');
    td4.innerHTML = obj.orderStatus;
    row.appendChild(td);
    row.appendChild(td1);
    row.appendChild(td2)
    row.appendChild(td3)
    row.appendChild(td4)
    return row;
}

var xhttp= new XMLHttpRequest();
var apiEndpoint="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
xhttp.open('GET',apiEndpoint, true );
xhttp.onreadystatechange= function(){
    if(this.readyState===4){
        console.log(JSON.parse(this.responseText));
        var responseArray  =JSON.parse(this.responseText);
        for (var i=0; i<responseArray.length; i++){
                tableBody.appendChild(generateOrders(responseArray[i]));
                count.innerHTML = 'Count : ' + responseArray.length;
        }
    }
}
xhttp.send();