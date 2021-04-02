function computeLoan() {
    const amount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest-rate').value;
    const month = document.getElementById('month').value;
    const interest = (amount * (interestRate * 0.01)) / month;
    let payment = (amount / month + interest).toFixed(2);
    payment = payment.toString().replace(/\b(?=(\d{3})+(?!\d))/g, ','); //conver into money format
    document.getElementById('payment').innerHTML = 'Monthly Payment = $' + payment; // inject the result of the computed loan repayment
}
