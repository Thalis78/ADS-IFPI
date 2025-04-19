// Leia um valor em m, calcule e escreva o equivalente em cm.

import { question } from "readline-sync";

// ENTRADA:
var metros = Number(question("INFORME UMA MEDIDA EM METROS(M): "))

// PROCESSAMENTO:
var centimetros = (metros*100)

// SAÍDA:
console.log(`
    VALOR EM METROS INFORMADO (M): ${metros} m
    VALOR CONVERTIDO EM CENTIMETROS(CM): ${centimetros} cm

`)