var formAction = document.getElementById('formAction');

formAction.onsubmit=(e)=>{
    const name = e.target.name.value;
    const pwd = e.target.password.value;
    console.log(name,pwd)
    console.log('Submited')
    if(name == pwd && name != "" && pwd !="" ){

        formAction.action = "/OrderListingPage.html";
    }else{
        alert('Please enter valid name and password')
    }
}