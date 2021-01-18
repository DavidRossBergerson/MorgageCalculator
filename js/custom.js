document.getElementById("btnUserData").addEventListener("click", MortgageCalculator);
function MortgageCalculator(){

// get user data
let loan = parseInt(document.getElementById("loanInput").value);
let term = parseInt(document.getElementById("termInput").value);
let IRate = parseInt(document.getElementById("iRateInput").value);
// Formulas
let month = new Array;

let totalMonthlyPayment = (loan) * (IRate/1200) / (1- Math.pow((1 + IRate/1200),-term));

let remainingBalance = loan;

let interestPayment = remainingBalance * IRate/1200;

let principalPayment = totalMonthlyPayment - interestPayment;

let payment = 0;

let totalInterestPayment = 0;



let tip = ``;

let Principal = ``;

let Balance = ``;

let inp = ``;

let pay = ``;


for (let i = 1; i <= term; i++) {
  
 
  totalInterestPayment += interestPayment;
  principalPayment = totalMonthlyPayment - interestPayment;
  remainingBalance = remainingBalance - principalPayment;
  interestPayment = remainingBalance * IRate/ 1200;
  payment += totalMonthlyPayment;
  totalInterest = loan - principalPayment;
  totalCost = loan + totalInterestPayment;
  month += [i];
  

  tip += `${totalInterestPayment.toFixed(2)}`;
    
  Principal += `${principalPayment.toFixed(2)}`;
    
  Balance += `${remainingBalance.toFixed(2)}`;
    
  inp += `${interestPayment.toFixed(2)}`;
    
  pay += `${payment.toFixed(2)}`;

 }








// Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
// Remaining Balance before the very first month equals the amount of the loan.
// Interest Payment = Previous Remaining Balance * rate/1200
// Principal Payment = Total Monthly Payment - Interest PaymentAt end each month, 
// Remaining Balance = Previous Remaining Balance - principal payments



document.getElementById("Mpayments1").innerHTML = totalMonthlyPayment.toFixed(2);
document.getElementById("tPrincipalOutPut").innerHTML = loan;
document.getElementById("tInterestOutput").innerHTML = totalInterestPayment.toFixed(2);
document.getElementById("tCostOutput").innerHTML = totalCost.toFixed(2);

document.getElementById("month").innerHTML = month;

document.getElementById("payment").innerHTML = pay;
document.getElementById("principal").innerHTML = Principal;
document.getElementById("interest").innerHTML = inp;
document.getElementById("totalInterest").innerHTML = tip;
document.getElementById("balance").innerHTML = Balance;




}

   

