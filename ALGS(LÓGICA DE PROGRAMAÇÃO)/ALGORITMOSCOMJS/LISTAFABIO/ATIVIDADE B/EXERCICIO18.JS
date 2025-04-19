// 18 - Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import { question } from "readline-sync";

// ENTRADA:
var raio_circuferencia = Number(question("INFORME O RAIO DA CIRCUNFERENCIA?"))

// PROCESSAMENTO:
var pi = Math.PI
var comprimento = (2 * pi * raio_circuferencia)

SAIDA:
console.log(`
    COMPRIMENTO: ${comprimento.toFixed(2)}
`)