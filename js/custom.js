document.getElementById("btnUserData").addEventListener("click", MortgageCalculator);
function MortgageCalculator(){

// get user data/convert percent to decimal
let loan = parseInt(document.getElementById("loanInput").value);
let term = parseInt(document.getElementById("termInput").value);
let IRate = parseInt(document.getElementById("iRateInput").value);


let totalMonthlyPayment = (loan) * (IRate/1200) / (1- Math.pow((1 + IRate/1200),-term));

let totalInterest = (IRate) / 100 / 12;





// let totalCost = loan + totalInterest;

// let payment = totalMonthlyPayment

//  let principalPayment = totalMonthlyPayment - interestPayment;

//  let balance = loan - totalMonthlyPayment;

//  let interestPayment = balance * IRate/1200;

// let totalInterestPayment = interestPayment + prevInterestPayment;


// run through algo
let month = new Array;


 for (let index = 1; index <= term; index++) {
     month += [index];
     
}


    
    

     
    
      
    
     
    

 


  




   
     
 
      

     
    
    

// let remainingbalance = loan - totalMontlyPayment;
// let interestPayment =  remainingbalance * rate/1200;
// let principalPayment =  totalMonthlyPayment - interestPayment at end of each month;
// let remainingBalance =  Previous Remaining Balance - principal payments;








// output resolved Data
document.getElementById("Mpayments1").innerHTML = totalMonthlyPayment.toFixed(2);
document.getElementById("tPrincipalOutPut").innerHTML = loan;
 document.getElementById("tInterestOutput").innerHTML = totalInterest.toFixed(2);
 document.getElementById("tCostOutput").innerHTML = totalCost.toFixed(2);

document.getElementById("month").innerHTML = month;
 
  document.getElementById("principal").innerHTML = principalPayment.toFixed(2);
//   document.getElementById("interest").innerHTML = interestPayment.toFixed(2);
 document.getElementById("totalInterest").innerHTML = totalInterestPayment.toFixed(2);
document.getElementById("balance").innerHTML = balance.toFixed(2);





}

   

