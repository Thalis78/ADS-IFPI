// Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
// número = 9534 ; soma = 9+5+3+4 = 21.

import { question } from "readline-sync";

// ENTRADA:
var numero = question("INFORME UM NUMERO DE 4 DIGITOS?")

// PROCESSAMENTO:
var n1 = Number(numero[0])
var n2 = Number(numero[1])
var n3 = Number(numero[2])
var n4 = Number(numero[3])

var soma = (n1+n2+n3+n4)

// SAÍDA:

console.log(`
    NUMERO ESCOLHIDO: ${numero}
    SOMA: ${n1} + ${n2} + ${n3} + ${n4} = ${soma}


`)