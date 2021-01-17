document.getElementById("btnUserData").addEventListener("click", MortgageCalculator);
function MortgageCalculator(){

// get user data/convert percent to decimal
let loan = parseInt(document.getElementById("loanInput").value);
let term = parseInt(document.getElementById("termInput").value);
let IRate = parseInt(document.getElementById("iRateInput").value);

let month = new Array;

let totalMonthlyPayment = (loan) * (IRate/1200) / (1- Math.pow((1 + IRate/1200),-term));

let remainingBalance = loan;

let interestPayment = remainingBalance * IRate/1200;

let principalPayment = totalMonthlyPayment - interestPayment;

let payment = 0;

let totalInterestPayment = 0;




// let remainingBalance = remainingBalance - principalPayment;

for (let index = 1; index < term; index++) {

  totalInterestPayment += interestPayment;
  principalPayment = totalMonthlyPayment - interestPayment;
  remainingBalance = remainingBalance - principalPayment;
  interestPayment = remainingBalance * IRate/ 1200;
  payment += totalMonthlyPayment;
 
}



// Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)(-Number of Months) )
// Remaining Balance before the very first month equals the amount of the loan.
// Interest Payment = Previous Remaining Balance * rate/1200
// Principal Payment = Total Monthly Payment - Interest PaymentAt end each month, 
// Remaining Balance = Previous Remaining Balance - principal payments







// run through algo



 
     



    
    

     
    
      
    
     
    

 


  




   
     
 
      

     
    
  








// output resolved Data
document.getElementById("Mpayments1").innerHTML = totalMonthlyPayment.toFixed(2);
document.getElementById("tPrincipalOutPut").innerHTML = loan;
//  document.getElementById("tInterestOutput").innerHTML = totalInterest.toFixed(2);
//  document.getElementById("tCostOutput").innerHTML = totalCost.toFixed(2);

document.getElementById("month").innerHTML = month;
document.getElementById("balance").innerHTML = remainingBalance.toFixed(2);
document.getElementById("payment").innerHTML = payment.toFixed(2);
  document.getElementById("principal").innerHTML = principalPayment.toFixed(2);
 document.getElementById("interest").innerHTML = interestPayment.toFixed(2);
 document.getElementById("totalInterest").innerHTML = totalInterestPayment.toFixed(2);






}

   

