// Leia 3 números, calcule e escreva a média dos números.

import { question } from "readline-sync";

// ENTRADA:
var numero = question("ME INFORME UM NUMERO DE TRES DIGITOS?")

// PROCESSAMENTO:
var n1 = Number(numero[0])
var n2 = Number(numero[1])
var n3 = Number(numero[2])

var media = (n1+n2+n3)/3

// SAÍDA:
console.log(`
    NUMERO ESCOLHIDO: ${numero}
    FORMULA: (${n1} + ${n2} + ${n3})/3
    MEDIA: ${media}

`)
