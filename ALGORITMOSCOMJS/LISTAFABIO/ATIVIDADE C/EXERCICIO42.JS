// escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e 
// ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo

import { question } from "readline-sync";

// ENTRADA:
var x1 = Number(question("ME INFORME UM VALOR PRA X1"))
var y1 = Number(question("ME INFORME UM VALOR PRA y1"))
var x2 = Number(question("ME INFORME UM VALOR PRA X2"))
var y2 = Number(question("ME INFORME UM VALOR PRA Y2"))

// PROCESSAMENTO:
var d = Math.sqrt(((x2 - x1)**2)+((y2-y1)**2))

// SAÍDA:
console.log(`
    RESULTADO{
        PONTO01: (${x1},${y1})
        PONTO02: (${x2},${y2})
        DISTANCIA ENTRE ELES: ${d}

    }

`)