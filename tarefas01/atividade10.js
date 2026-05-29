const prompt = require("prompt-sync")(); 

let horas = Number(prompt("Digite quantas horas o veículo ficou estacionado: ")); 
let valor = 0; 

switch (horas) { 
  case 1: 
    valor = 8; 
    break; 
  
  case 2: 
    valor = 8 + 6; 
    break; 
  
  case 3: 
    valor = 8 + 6 + 4; 
    break; 
  
  default: 
    // Acima de 3 horas 
    valor = 18 + ((horas - 3) * 2);
} 
console.log("Tempo estacionado:", horas, "horas"); 
console.log("Valor a pagar: R$ " + valor.toFixed(2));
