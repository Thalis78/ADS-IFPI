// Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import { question } from "readline-sync";

// ENTRADA:
var numero = question('DIGITE UM NUMERO DE TRES DIGITOS? ')

// PROCESSAMENTO:
var inverso = numero.split("").reverse().join("")
var diferenca = Number(numero) - Number(inverso)

// SAÍDA:
console.log(`
    NUMERO ESCOLHIDO: ${numero}
    INVERSO DO NUMERO: ${inverso}
    DIFERENÇA: ${diferenca}

`)