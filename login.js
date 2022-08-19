document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log('anowar hossain')

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
if(email === 'anowar.agrobd@gmail.com' && password === '10101970'){
    window.location.href = 'bank.html'
}
else{
    alert('Invalid User Email & Password')
}
emailField.value ='';
})