function validateForm(){
const emailInput = document.getElementById('email');
const validationMessage = document.getElementById('validationMessage');
const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if(emailpattern.test(emailInput.value)){
    validationMessage.textContent = "valid email address";
}else{
    validationMessage.textContent = "Invalid email address";
}

}
function radiofunc(radio){
    if(radio.checked){
        console.log("hi",radio.value)
        alert("Hello" +radio.value);
    }
}
function clearForm(){
    document.getElementById('contact_form').reset();
}
// function State(){
    var dropdown = document.getElementById('statedropdowns');
    var promoinputfield = document.getElementById('promocode');

    dropdown.addEventListener("change",function(){
        var selectedValue = dropdown.options[dropdown.selectedIndex].value;
        var newValue = selectedValue + "- PROMO";
        promoinputfield.value = newValue;
    });
// }
    // $(field).val($(field).val() + dropdown.value);
