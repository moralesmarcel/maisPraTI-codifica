// Importa a biblioteca para entrada de dados
const prompt = require("prompt-sync")(); 

// Obtém o ano de nascimento 
let anoNascimento = Number(prompt("Digite o ano de nascimento: ")); 

let anoAtual = 2026; 
let idade = anoAtual - anoNascimento; 

console.log("Idade:", idade); 
if (idade <= 12) { 
  console.log("Classificação: Criança"); 
} else if (idade <= 17) { 
  console.log("Classificação: Adolescente"); 
} else if (idade <= 59) { 
  console.log("Classificação: Adulta"); 
} else { 
  console.log("Classificação: Idosa"); }
