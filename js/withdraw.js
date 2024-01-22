/*
1. Add event handler with the withdraw button
2. Get the withdraw amount from the withdraw input field
2.5: Mkesure to convert input into number by using parse float
3. Get previous withdrw total
4. calculate total amount
4-5. set total withdraw amount
5. get the previous balace total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/

//step1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
  

//step 2: 
const withdrwField=document.getElementById('withdraw-field');

const newWithdrawAmountString=withdrwField.value;

const newWithdrawAmount=parseFloat(newWithdrawAmountString);

//Step 7:
withdrwField.value='';
if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number');
    return;
}


//step3
const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);



//step 5:
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal= parseFloat(previousBalanceTotalString);


if(newWithdrawAmount>previousBalanceTotal){
    alert('No sufficient money');
    return;
}
//step 4
const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;

//step 6
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;

//step7




})