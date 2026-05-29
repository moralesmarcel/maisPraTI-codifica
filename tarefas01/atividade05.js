const prompt = require("prompt-sync")(); 

let valorCompra = Number(prompt("Digite o valor da compra: ")); 
let desconto = 0; 

// Define o desconto conforme a faixa 
if (valorCompra >= 500) { 
  desconto = 20; 
} else if (valorCompra >= 300) { 
  desconto = 15; 
} else if (valorCompra >= 100) { 
  desconto = 10; 
} 

let valorDesconto = valorCompra * desconto / 100; 
let valorFinal = valorCompra - valorDesconto; 

console.log("Valor original: R$ " + valorCompra.toFixed(2)); 
console.log("Desconto aplicado:", desconto + "%"); 
console.log("Valor final: R$ " + valorFinal.toFixed(2));
