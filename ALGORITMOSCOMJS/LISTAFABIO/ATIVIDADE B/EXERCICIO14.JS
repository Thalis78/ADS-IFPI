// 14- Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { question } from "readline-sync";

// ENTRADA: 
var n1 = Number(question("INFORME A PRIMEIRA NOTA?"))
var p1 = Number(question("INFORME O PESO DA PRIMEIRA NOTA?"))
var n2 = Number(question("INFORME A SEGUNDA NOTA?"))
var p2 = Number(question("INFORME O PESO DA SEGUNDA NOTA?"))
var n3 = Number(question("ME INFORME A TERCEIRA NOTA?"))
var p3 = Number(question("INFORME O PESO DA TERCEIRA NOTA?"))

// PROCESSAMENTO:
var media = (((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3))

// SAIDA:

console.log(`
    MEDIA PONDERADA: ${media.toFixed(2)}    
`)