var ordersPage = document.getElementById('ordersPage');
var productsPage = document.getElementById('productsPage');
var usersPage = document.getElementById('usersPage');
var mainDiv = document.getElementById('users-tbody');
var data, searchedName;

function userDertails(obj) {

    var wrapper=document.createElement('tr');

    var userId=document.createElement("td");
    userId.innerText=obj.id
    wrapper.appendChild(userId);

    var profilepic=document.createElement('td');
    var profilepicImg=document.createElement('img');
    profilepicImg.src=obj.profilePic
    profilepic.appendChild(profilepicImg);
    wrapper.appendChild(profilepic);

    var username=document.createElement('td');
    username.innerText=obj.fullName
    wrapper.appendChild(username);

    var dob=document.createElement('td');
    dob.innerText=obj.dob
    wrapper.appendChild(dob);

    var gender=document.createElement('td');
    gender.innerText=obj.gender
    wrapper.appendChild(gender);

    var CityCountry=document.createElement('td');
    CityCountry.innerText=obj.currentCity + "," + obj.currentCountry
    wrapper.appendChild(CityCountry);

    return wrapper;
}

var logoutAction = document.getElementById('logoutAction')
var logoutBtn = document.getElementById('logoutBtn')
logoutBtn.addEventListener('click',()=>{
    logoutAction.action = "/index.html"
});



var formField = document.getElementById('myForm');
formField.onsubmit = function(e) {
    e.preventDefault();
    searchedName = e.target.search.value;
    console.log(searchedName);
    if(searchedName.length < 2) {
        alert("Please enter name");
    }
    else {
        mainDiv.innerHTML = "";
        for(var z = 0; z< data.length; z++) {
            if (data[z].fullName.toLowerCase().includes(searchedName)) {
                mainDiv.appendChild(userDertails(data[z]));
            }
        }
    }
}

var reset = document.getElementById('resetButton');
reset.onclick = function() {
    mainDiv.innerHTML = "";
    for(var r=0; r<data.length; r++) {
            mainDiv.appendChild(userDertails(data[r]));
    }
}

var xhttp = new XMLHttpRequest();
xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            mainDiv.appendChild(userDertails(data[i]));
        }
    }
}
xhttp.send();