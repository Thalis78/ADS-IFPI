// Leia um valor em km, calcule e escreva o equivalente em m.

import { question } from "readline-sync";

// ENTRADA:
var km = Number(question("INFORME UMA DISTANCIA EM KM: "))

// PROCESSAMENTO:
var metros = (km * 1000)

// SAÍDA:

console.log(`
    DISTÂNCIA EM (KM): ${km}  KM
    DISTÂNCIA CONVERTIDA EM METROS: ${metros} M 

`)