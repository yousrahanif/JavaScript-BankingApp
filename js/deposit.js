//Step 1: Add Evenet Listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step 2: get the deposit amount from the deposit field
    //For input value use .value
const depositField=document.getElementById('deposit-field');
const newDepositAmountString=depositField.value;
newDepositAmount=parseFloat(newDepositAmountString);

// console.log(depositAmount);


//Step 3: get the current deposit total
//for non-input(elemnt other than input, textarea) use innertext to get the text
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
const currentDepositAmount= previousDepositTotal+newDepositAmount;
depositTotalElement.innerText=currentDepositAmount;

//Step 5: Get balance
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
const currentBalanceTotal=previousBalanceTotal+newDepositAmount;

balanceTotalElement.innerText=currentBalanceTotal;

//Step: clear the deposit field;
depositField.value='';
})