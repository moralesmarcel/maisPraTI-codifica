// Importa a biblioteca para entrada de dados 
const prompt = require("prompt-sync")(); 

// Pergunta a nota do aluno 
let nota = Number(prompt("Digite a nota do aluno: ")); 

if (nota >= 7) { 
  console.log("Aluno Aprovado"); 
} else if (nota >= 5) { 
  console.log("Aluno em Recuperação");
} else { 
  console.log("Aluno Reprovado"); }
