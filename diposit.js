// added event dandaler 1
document.getElementById('btn-deposit').addEventListener('click',function(){
const depositField =document.getElementById('deposit-field');
const depositFix =depositField.value ;



// use the current deposit total ............

const depositTotal =document.getElementById('DepositTotal');
    const depositElement = depositTotal.innerText;
    depositTotal.innerText=depositFix;
})

