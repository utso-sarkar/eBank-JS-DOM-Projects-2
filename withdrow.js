// added withdow btn 


document.getElementById("btn-withdraw").addEventListener('click',function(){
    const withdrowCollection = document.getElementById('withdrow-amt');
    const WithdrowAmountString = withdrowCollection.value;
    const WithdrowMain =parseFloat(WithdrowAmountString);
    // box part start
   const WithDrawPrevious =document.getElementById('withdrawTotal');
   const WithdrawTotalElement =WithDrawPrevious.innerText;
   const WithdrawTotalNumber=parseFloat(WithdrawTotalElement);

//    sum 
   const currentWithdrawTotal = WithdrawTotalNumber +WithdrowMain;

   WithDrawPrevious.innerText=currentWithdrawTotal;

const balanceTotalMan =document.getElementById('balanceTotal');
const preBalanceTotalString=balanceTotalMan.innerText;
const previousBalanceTotal =parseFloat(preBalanceTotalString);

// newbalance 
const newBalanceTotal =previousBalanceTotal -WithdrowMain;

balanceTotalMan.innerText=newBalanceTotal;

   withdrowCollection.value="";

})
