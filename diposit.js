

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositfield = document.getElementById('deposit-field');
    const newDepositAmountString = depositfield.value;    
    const newDepositAmount = parseFloat(newDepositAmountString);    
    
    depositfield.value = '';

    const depositTotalElement = document.getElementById('deposit-total')
    const previusDepositTotalString = depositTotalElement.value;
    const previusDepositTotal = parseFloat(previusDepositTotalString);

    const newDepositTotal = previusDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
})