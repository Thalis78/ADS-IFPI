// Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
// corresponde.

import { question } from "readline-sync";

// ENTRADA:
var horas = Number(question("INFORME UMA QUANTIDADE DE HORAS QUALQUER:"))

// PROCESSAMENTO:
var semana = Math.floor(horas / 168)
var dia = Math.floor((horas%168)/24)
var quant_horas = horas%24

// SAÍDA:
console.log(`
    QUANTIDADE DE DIAS INFORMADA PELO USUARIO CORRESPONDE:
    QUANTIDADE DE SEMANAS: ${semana} SEMANA
    QUANTIDADE DE DIAS: ${dia} DIAS
    QUANTIDADE DE HORAS: ${quant_horas} HORAS

`)