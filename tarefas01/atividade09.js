const prompt = require("prompt-sync")(); 

let mes = Number(prompt("Digite o número do mês: ")); 
let dias = 0; 

switch (mes) { 
  case 1: 
    console.log("Janeiro"); 
    dias = 31; 
    break; 
  
  case 2: 
    console.log("Fevereiro"); 
    let bissexto = prompt("O ano é bissexto? (s/n): ").toLowerCase(); 
    if (bissexto === "s") { 
      dias = 29; 
    } else { 
      dias = 28; 
    } 
    break; 
  
  case 3: 
    console.log("Março"); 
    dias = 31; 
    break; 
  
  case 4: 
    console.log("Abril"); 
    dias = 30; 
    break; 
  
  case 5: 
    console.log("Maio"); 
    dias = 31; 
    break; 
  
  case 6: 
    console.log("Junho"); 
    dias = 30; 
    break; 
  
  case 7:
    console.log("Julho"); 
    dias = 31; 
    break; 
  
  case 8: 
    console.log("Agosto"); 
    dias = 31; 
    break; 
  
  case 9: 
    console.log("Setembro"); 
    dias = 30; 
    break; 
  
  case 10: 
    console.log("Outubro"); 
    dias = 31; 
    break; 
  
  case 11: 
    console.log("Novembro"); 
    dias = 30; 
    break; 
  
  case 12: 
    console.log("Dezembro"); 
    dias = 31; 
    break; 
  
  default: 
    console.log("Mês inválido."); 
} 

console.log("Quantidade de dias:", dias);
