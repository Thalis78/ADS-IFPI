// 27 - Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
// segundos ele corresponde.

import { question } from "readline-sync";

// ENTRADA:
var segundos = Number(question("ME INFORME UM VALOR EM SEGUNDOS?"))

// PROCESSAMENTO:
var horas  = ((segundos/60)/60)
var minutos = (horas - Math.floor(horas))*60
var quant_segundos = (minutos - Math.floor(minutos))*60

// SAÍDA:

console.log(`
    SEGUNDOS INFORMADOS PELO USUARIO:${segundos}
    QUANTIDADE DE HORAS: ${Math.floor(horas)}
    QUANTIDADE DE MINUTOS: ${Math.floor(minutos)}
    QUANTIDADE DE SEGUNDOS: ${Math.round(quant_segundos)}


`)