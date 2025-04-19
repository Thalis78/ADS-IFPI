// 18 - Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
//     Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação 
//     sobre os dois valores lidos.

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js"


function main(){
    var numero01 = get_number(`INFORME UM VALOR QUALQUER:`)
    var numero02 = get_number(`INFORME UM VALOR QUALQUER:`)

    var operador = get_number(`
        DIGITE:
        1 - ADICAO
        2 - SUBTRACAO
        3 - MULTIPLICACAO
        4 - DIVISAO
        OPERADOR ESCOLHIDO: `)

    if(operador > 0  && operador <=4){
        print(condicional(numero01,numero02,operador))
    }
    else{
        print("ESCOLHA ALGUNS DOS OPERADORES CITADO ATRAVÉS DE DIGITOS DE 1 A 4")
    }
}
function condicional(numero01, numero02, operador) {
    switch (operador) {
        case 1:
            var soma = numero01 + numero02
            return `
            NUMERO ESCOLHIDO: ${numero01},${numero02}
            OPERADOR ESCOLHIDO: SOMA (+)
            RESULTADO: ${soma}        `
            break
        case 2:
            var subtracao = numero01 - numero02
            return `
            NUMERO ESCOLHIDO: ${numero01},${numero02}
            OPERADOR ESCOLHIDO: SUBTRAÇÃO (-)
            RESULTADO: ${subtracao}        `
            break
        case 3:
            var Multiplicacao = numero01 * numero02
            return `
            NUMERO ESCOLHIDO: ${numero01},${numero02}
            OPERADOR ESCOLHIDO: MULTIPLICAÇÃO (*)
            RESULTADO: ${Multiplicacao}        `
            break
        case 4: 
            var divisao = numero01 / numero02
            return `
            NUMERO ESCOLHIDO: ${numero01},${numero02}
            OPERADOR ESCOLHIDO: DIVISÃO (/)
            RESULTADO: ${divisao}        `
            break

    }

}
main()