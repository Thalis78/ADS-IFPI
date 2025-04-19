// Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import { question } from "readline-sync";

// ENTRADA:
var n1 = Number(question("ESCOLHA UM NuMERO?"))
var n2 = Number(question("ESCOLHA OUTRO NuMERO?"))
// PROCESSAMENTO:
var soma = (n1 + n2)
var subtracao = (n1 - n2)
var divisao = (soma/subtracao)
// SAIDA:
console.log(`
    RESULTADO:

    SOMA : ${soma}
    SUBTRAÇÃO: ${subtracao}
    A DIVISÃO ENTRE A SOMA E A SUBTRAÇÃO É : ${divisao}


`)