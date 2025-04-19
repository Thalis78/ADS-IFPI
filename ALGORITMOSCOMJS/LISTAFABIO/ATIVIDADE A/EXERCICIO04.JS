// 04 - Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import { question } from "readline-sync"

// ENTRADA:
var dolar = Number(question("ME DIGA A COTACAO DO DOLAR NO DIA DE HOJE? U$"))
var converter = Number(question("QUANTOS DOLARES VOCE POSSUI? U$"))

// PROCESSAMENTO:
var real = (converter * dolar)

// SAÍDA:
console.log(`
    COTAÇÃO DO DOLAR: U$${dolar}
    VALOR DE DOLARES QUE VOCÊ POSSUI: U$${converter}
    VALOR CONVERTIDO PARA REAL(MOEDA BRASILEIRA): R$${real}
`)