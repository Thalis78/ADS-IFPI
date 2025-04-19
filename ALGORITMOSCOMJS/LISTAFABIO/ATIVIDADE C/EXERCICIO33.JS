// Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
// (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import { question } from "readline-sync";

// ENTRADA:
var numero = question("DIGITE UM NUMERO DE TRES DIGITOS?")

// PROCESSAMENTO:
var inverso = numero.split("").reverse().join("")
var somatoria = Number(numero) + Number(inverso)

// SAÍDA:
console.log(`
    NUMERO ESCOLHIDO: ${numero}
    NUMERO INVERSO: ${inverso}
    RESULTADO DA SOMATÓRIA: ${somatoria}

`)