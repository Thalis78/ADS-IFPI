// 23- Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from "readline-sync";

// ENTRADA:
var quilograma = Number(question("INFORME UM VALOR EM QUILOGRAMA (KG): "))

// PROCESSAMENTO:
var gramas = (quilograma*1000)

// SAÍDA:
console.log(`
        PESO EM QUILOGRAMA (KG): ${quilograma} kg
        PESO CONVERTIDO EM GRAMAS(G): ${gramas} g
`)