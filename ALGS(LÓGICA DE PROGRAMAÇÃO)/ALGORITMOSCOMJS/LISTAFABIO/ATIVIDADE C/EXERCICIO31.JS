// Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync";

// ENTRADA:
var binario = question("INFORME UM NUMERO BINARIO DE 4 DIGITOS?")

// PROCESSAMENTO:
var b1 = Number(binario[3]) * 2**0
var b2 = Number(binario[2]) * 2**1
var b3 = Number(binario[1]) * 2**2
var b4 = Number(binario[0]) * 2**3

var decimal = (b1+b2+b3+b4)

// SAIDA:
console.log(`
        NUMERO BINARIO: ${Number(binario)}
        NUMERO CONVERTIDO PARA DECIMAL: ${decimal}

`)