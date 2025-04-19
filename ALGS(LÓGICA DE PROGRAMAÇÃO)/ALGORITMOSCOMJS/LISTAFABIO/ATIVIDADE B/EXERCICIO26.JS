// 26 - Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import { question } from "readline-sync";

// ENTRADA:
var dia = Number(question("ME INFORME UMA QUANTIDADE DE DIAS ALEATORIO?"))

// PROCESSAMENTO:
var semana = Math.floor(dia / 7)
var dias = dia%7

// SAÍDA:
console.log(`
    DIAS INFORMADO PELO USUARIO: ${dia} DIAS
    QUANTIDADE DE SEMANAS: ${semana} SEMANA
    QUANTIDADE DE DIAS: ${dias} DIAS

`)