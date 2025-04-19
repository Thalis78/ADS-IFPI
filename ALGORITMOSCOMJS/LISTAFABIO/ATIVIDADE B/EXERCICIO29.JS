// Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import { question } from "readline-sync";

// ENTRADA:
var meses = Number(question("ME INFORME UMA QUANTIDADE DE MESES QUALQUER?"))

// PROCESSAMENTO:
var anos = Math.floor(meses/12)
var quant_meses = (meses%12)

// SAÍDA:
console.log(`
    QUANTIDADE DE MESES ESCOLHIDO PELO USUARIO: ${meses} MESES 
    QUANTIDADE DE ANOS EQUIVALENTE: ${anos} ANO(S)
    QUANTIDADE DE MESES EQUIVALENTE: ${quant_meses} MÊS(ES)

`)