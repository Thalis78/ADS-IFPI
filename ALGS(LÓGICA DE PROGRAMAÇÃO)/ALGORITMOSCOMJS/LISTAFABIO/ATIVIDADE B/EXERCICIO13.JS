// 13 - Leia um valor em real (R$), calcule e escreva 70% deste valor.

import { question } from "readline-sync";

// ENTRADA:
var real = Number(question("ME INFORME UM VALOR EM REAL: R$"))

// PROCESSAMENTO:
var porcentagem = (real * 0.70)

// SAIDA:
console.log(`
      VALOR INFORMADO EM REAL: R$${real}
      70% DESSE VALOR: R$${porcentagem} 
`)