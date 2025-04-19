// Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
// D = R+S/2 onde // R = (A+B)² // S = (B+C)²

import { question } from "readline-sync"
// ENTRADA:
var a = Number(question("INFORME UM VALOR POSITIVO PARA A? "))
var b = Number(question("INFORME UM VALOR POSITIVO PARA B? "))
var c = Number(question("INFORME UM VALOR POSITIVO PARA C? "))

// PROCESSAMENTO:
var r = (a+b)**2
var s = (b+c)**2
var d = (r+s)/2


// SAÍDA:

console.log(`
    NUMEROS INFORMADOS: {A: ${a}, B: ${b}, C: ${c}}
    VALOR R: ${r}
    VALOR S: ${s}
    VALOR D: ${d} 
`)