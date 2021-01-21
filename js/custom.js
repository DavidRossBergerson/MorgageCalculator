document.getElementById("btnUserData").addEventListener("click", MortgageCalculator);

function MortgageCalculator(){
  
  let loan = parseInt(document.getElementById("loanInput").value);
  let term = parseInt(document.getElementById("termInput").value);
  let IRate = parseInt(document.getElementById("iRateInput").value);
  // Formulas
  
  let totalMonthlyPayment = (loan) * (IRate/1200) / (1- Math.pow((1 + IRate/1200),-term));
  
  let remainingBalance = loan;
  
  let interestPayment = remainingBalance * IRate/1200;
  
  let principalPayment = totalMonthlyPayment - interestPayment;
  
  let payment = 0;
  
  let totalInterestPayment = 0;
  
  let table = ``
  
  for (let i = 1; i <= term; i++) {
    
   
    totalInterestPayment += interestPayment;
    principalPayment = totalMonthlyPayment - interestPayment;
    remainingBalance = remainingBalance - principalPayment;
    interestPayment = remainingBalance * IRate/ 1200;
    payment = totalMonthlyPayment;
    totalInterest = loan - principalPayment;
    totalCost = loan + totalInterestPayment;
    
    
  
    table += `<tr><td> ${[i]} </td>
    
    <td>$${payment.toFixed(2)}</td>
  
    <td>$${principalPayment.toFixed(2)}</td> 
    
    <td>$${interestPayment.toFixed(2)}</td> 
    
    <td>$${totalInterestPayment.toFixed(2)}</td> 
      
    <td>$${remainingBalance.toFixed(2)}</td>`;
  }
  document.getElementById("Mpayments1").innerHTML = `$${totalMonthlyPayment.toFixed(2)}`;
  document.getElementById("tPrincipalOutPut").innerHTML = `$${loan.toFixed(2)}`;
  document.getElementById("tInterestOutput").innerHTML = `$${totalInterestPayment.toFixed(2)}`;
  document.getElementById("tCostOutput").innerHTML = `$${totalCost.toFixed(2)}`;
  document.getElementById("table").innerHTML = table;
  };
  document.getElementById("btnClear").addEventListener("click", Clear)
  
  function Clear(){
    
    document.getElementById("loanInput").value = "";
    document.getElementById("termInput").value = "";
    document.getElementById("iRateInput").value = "";
    document.getElementById("Mpayments1").innerHTML = "";
    document.getElementById("tPrincipalOutPut").innerHTML = "";
    document.getElementById("tInterestOutput").innerHTML = "";
    document.getElementById("tCostOutput").innerHTML = "";
    document.getElementById("table").innerHTML = "";
  
  };