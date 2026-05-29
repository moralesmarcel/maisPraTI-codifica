// Importa a biblioteca para entrada de dados
const prompt = require("prompt-sync")(); 

// Recebe os dados do funcionário 
let salario = Number(prompt("Digite o salário: ")); 
let percentual = Number(prompt("Digite o percentual de aumento: ")); 

// Caso o salário seja menor que 1500, 
// o percentual é dobrado 
if (salario < 1500) { 
  percentual *= 2; 
} 

let aumento = salario * percentual / 100; 
let novoSalario = salario + aumento; 

console.log("Novo salário: R$ " + novoSalario.toFixed(2));
