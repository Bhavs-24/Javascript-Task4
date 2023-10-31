function validateForm(){
const emailInput = document.getElementById('email');
const validationMessage = document.getElementById('validationMessage');
const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if(emailpattern.test(emailInput.value)){
    validationMessage.textContent = "";
}else{
    validationMessage.textContent = "Invalid email address";
}

var nameValue = document.getElementById("name").value;
var emailValue = document.getElementById("email").value;
var orgvale = document.getElementById("organizationname").value;

if(nameValue.trim() === "" || emailValue.trim ==="" || orgvale.trim ===""){
    document.getElementById("errorMessage").innerHTML ="Please fill all the required details below";
}
else{
    document.getElementById("errorMessage").innerHTML = "";
    alert('Succesfully Submitted!')
}
}

function phonecheck(){
    debugger
    var mobilenumber = document.getElementById('telephone');
    var message = document.getElementById('message');

    var goodcolor = "#0C6";
    var badcolor = "red";

    if(mobilenumber.value.length>10 || mobilenumber.value.length<10){
        message.style.color = badcolor;
        message.innerHTML = "must be 10 digits"
    }
    else{
        message.innerHTML = " "
    }
}


//radio button alert message
function radiofunc(radio){
    if(radio.checked){
        alert("Hello" +radio.value);
    }
}

//to clear form 
function clearForm(){
    document.getElementById('contact_form').reset();
}

//when dropdown value is selected  input value will append
var dropdown = document.getElementById('statedropdowns');
var promoinputfield = document.getElementById('promocode');
dropdown.addEventListener("change",function(){
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    var newValue = selectedValue + "- PROMO";
    promoinputfield.value = newValue;
});

function namechange(){
    var nameValue = document.getElementById("name").value;
    if(nameValue.length==0){
        document.getElementById('nameerror').innerHTML = "Please enter name"
    }
} 
function emailchange(){
    var emailValue = document.getElementById("email").value;
    if(emailValue.length==0){
        document.getElementById('emailerror').innerHTML = "Please enter email"
    }
}
function orgchange(){
    var orgvale = document.getElementById("organizationname").value;
    if(orgvale.length==0){
        document.getElementById('orgerror').innerHTML = "Please enter organization name"
    }
}
function fieldfocus(){
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var orgvale = document.getElementById("organizationname").value;
    if(nameValue.length!=0){
        document.getElementById('nameerror').innerHTML = ""
    }
    if(emailValue.length!=0){
        document.getElementById('emailerror').innerHTML = ""
    }
    if(orgvale.length!=0){
        document.getElementById('orgerror').innerHTML = "";
    }
}