// email fiend function

document.getElementById('btn-submit').addEventListener('click',function(){
    const emailCollection =document.getElementById('email-collection');
    const email =emailCollection.value;
   
//  password field function
document.getElementById('btn-submit').addEventListener('click',function(){
    const passwordCollection =document.getElementById('password-collection');
    const password =passwordCollection.value;
    

// email and password varyfy
if(email ==="utso@gmail.com" && password === "Password"){
    window.location.href='bank.html';
}
else{
    alert("incorrect Password")
}




})

})