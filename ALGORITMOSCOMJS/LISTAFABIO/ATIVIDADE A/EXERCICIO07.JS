// Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import { question } from "readline-sync";

// ENTRADA:
var n1 = Number(question("DIGITE O NUMERO 01: "))
var n2 = Number(question("DIGITE O NUMERO 02: "))
var n3 = Number(question("DIGITE O NUMERO 03: "))

// PROCESSAMENTO:
var soma01 = (n1 + n2)
var soma02 = (n2 + n3)
var diferenca = (soma01 - soma02)

// SAIDA:
console.log(`
        ___________________________________________
                        RESULTADO:
        SOMA DOS DOIS PRIMEIROS: ${soma01}
        SOMA DOS DOIS ULTIMOS: ${soma02}
        DIFERENÇA: ${diferenca}
        __________________________________________
`
)