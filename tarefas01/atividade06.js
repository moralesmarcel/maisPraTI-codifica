const prompt = require("prompt-sync")(); 

let saque = Number(prompt("Digite o valor do saque: ")); 

// Calcula as notas 
let notas100 = Math.floor(saque / 100); 
saque %= 100; 

let notas50 = Math.floor(saque / 50); 
saque %= 50; 

let notas20 = Math.floor(saque / 20); 
saque %= 20; 

let notas10 = Math.floor(saque / 10); 

console.log("Notas de R$100:", notas100); 
console.log("Notas de R$50:", notas50); 
console.log("Notas de R$20:", notas20); 
console.log("Notas de R$10:", notas10);
