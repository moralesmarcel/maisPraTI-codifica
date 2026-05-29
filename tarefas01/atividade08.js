const prompt = require("prompt-sync")(); 

let tamanho = prompt("Digite o tamanho da pizza (P/M/G): ").toUpperCase(); 
let borda = prompt("Borda tradicional ou recheada? ").toLowerCase(); 
let preco = 0; 

// Define o preço pelo tamanho 
switch (tamanho) { 
  case "P": 
    preco = 25;
    break; 
  
  case "M": 
    preco = 35; 
    break; 
  
  case "G": 
    preco = 45; 
    break; 
  
  default: 
    console.log("Tamanho inválido."); 
} 

if (borda === "recheada") {
  preco += 8; 
} 

console.log("Valor total do pedido: R$ " + preco.toFixed(2));
