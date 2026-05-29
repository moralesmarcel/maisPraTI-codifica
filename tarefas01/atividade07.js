const prompt = require("prompt-sync")(); 

let num1 = Number(prompt("Digite o primeiro número: ")); 
let num2 = Number(prompt("Digite o segundo número: ")); 
let operacao = prompt("Digite a operação (+, -, *, /): "); 

switch (operacao) { 
  case "+": 
    console.log("Resultado:", num1 + num2); 
    break; 
    
  case "-": 
    console.log("Resultado:", num1 - num2); 
    break; 
  
  case "*": 
    console.log("Resultado:", num1 * num2); 
    break; 
  
  case "/": 
    // Verifica divisão por zero 
    if (num2 === 0) { 
      console.log("Erro: divisão por zero."); 
    } else { 
      console.log("Resultado:", num1 / num2); 
    } 
    
    break; 
  
  default: 
    console.log("Operação inválida."); }
