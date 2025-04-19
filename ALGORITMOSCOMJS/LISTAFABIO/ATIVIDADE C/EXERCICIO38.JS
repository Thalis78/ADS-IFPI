// 38 - Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o 
// resultado em forma de fração.

import { question } from "readline-sync";

// ENTRADA:
var numerador01 = Number(question("ME INFORME O NUMERADOR DA PRIMEIRA FRACAO"))
var denominador01 = Number(question("ME INFORME O DENOMINADOR DA PRIMEIRA FRACAO"))
var numerador02 = Number(question("ME INFORME O NUMERADOR DA SEGUNDA FRACAO"))
var denominador02 = Number(question("ME INFORME O DENOMINADOR DA SEGUNDA FRACAO"))

// PROCESSAMENTO:
var mmc = denominador01 * denominador02
var formula01 = (denominador01 * numerador02)
var formula02 = (denominador02 * numerador01)

var somatorio = (formula01 + formula02)

// SAÍDA:
console.log(`
    PRIMEIRA FRAÇÃO: ${numerador01} / ${denominador01}
    SEGUNDA FRAÇÃO: ${numerador02} / ${denominador02}
    RESULTADO DO MMC: ${mmc}
    SOMATORIO: ${somatorio} / ${mmc}

`)
