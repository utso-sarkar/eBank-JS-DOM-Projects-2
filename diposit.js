// added event dandaler 1
document.getElementById('btn-deposit').addEventListener('click',function(){
const depositField =document.getElementById('deposit-field');
const depositFixString =depositField.value ;
const depositFix =parseFloat(depositFixString);




// use the current deposit total ............

const depositTotal =document.getElementById('DepositTotal');
    const depositElementString = depositTotal.innerText;
    const depositElement =parseFloat(depositElementString);
  

    const currentDepositTotal = depositElement+depositFix;
    depositTotal.innerText=currentDepositTotal;

// get balance total value
const balanceTotalElement =document.getElementById('balanceTotal');
const totalBalanceTotalString =balanceTotalElement.innerText;
const balance=parseFloat(totalBalanceTotalString);
const currentBalanceTotal =balance+currentDepositTotal;
balanceTotalElement.innerText=currentBalanceTotal;
    // another operation 
    depositField.value="";
})

