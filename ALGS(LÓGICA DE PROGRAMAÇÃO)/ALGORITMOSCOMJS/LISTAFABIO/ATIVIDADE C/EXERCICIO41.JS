// custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor 
// seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e 
// escreva o custo ao consumidor.

import { question } from "readline-sync"

// ENTRADA:
var custo_fabrica = Number(question("QUAL O CUSTO DE FÁBRICA DO CARRO? "));

// PROCESSAMENTO:
var percentagem_distribuidor = 0.28;
var percentagem_impostos = 0.45;

var custo_distribuidor = custo_fabrica * percentagem_distribuidor;
var custo_impostos = custo_fabrica * percentagem_impostos;
var custo_consumidor = custo_fabrica + custo_distribuidor + custo_impostos;

// SAÍDA:
console.log(`
    VALOR TOTAL DE UM CARRO:
        CUSTO DE FÁBRICA: ${custo_fabrica}$
        CUSTO DO DISTRIBUIDOR: ${custo_distribuidor.toFixed(2)}$
        CUSTO DOS IMPOSTOS: ${custo_impostos.toFixed(2)}$
        CUSTO TOTAL AO CONSUMIDOR: ${custo_consumidor}$
`);