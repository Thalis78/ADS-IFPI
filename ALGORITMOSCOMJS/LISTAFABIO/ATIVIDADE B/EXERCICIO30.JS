// Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
// corresponde.

import { question } from "readline-sync";

// ENTRADA:
var minutos = Number(question("INFORME UM QUANTIDADE DE MINUTOS QUALQUER?"))

// PROCESSAMENTO:
var dias = Math.floor(minutos / 1440)
var horas = Math.floor((minutos%1440)/60)
var quant_minutos = (minutos%60)

// SAÍDA:

console.log(`
    QUANTIDADE DE MINUTOS INFORMADO PELO USUARIO: ${minutos} MINUTOS

    ISSO EQUIVALE:
    DIAS: ${dias} DIAS 
    HORAS: ${horas} HORAS
    MINUTOS: ${quant_minutos} MINUTOS


`)