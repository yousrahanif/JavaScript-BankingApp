//Step1: Add eventHandler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Id clicked');

    //get the email address inside the email input field
//Always remember use .value to get text
const emailField=document.getElementById('user-email');
const email= emailField.value;


//Step 3: get password
//3a. set id of the html element
//3b. get the element
//3c. get the value from the element
const passwordField= document.getElementById('user-password');
const password=passwordField.value;
// console.log(email,password);
//DANGER: DO NOT VARIFY EMAIL PASSWORD

if(email==='user@bank.com' && password==='bank'){
    window.location.href='bank.html';
}
else{
   alert('Invalid User');
}


})