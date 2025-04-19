// 14 -Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js"



function main() {
    let num01 = get_number("INFORME UM VALOR QUE SEJA UM NUMERO INTEIRO:"
    )
    let num02 = get_number("INFORME UM VALOR QUE SEJA UM NUMERO INTEIRO:"
    )
    let num03 = get_number("INFORME UM VALOR QUE SEJA UM NUMERO INTEIRO:"
    )
    let num04 = get_number("INFORME UM VALOR QUE SEJA UM NUMERO INTEIRO:"
    )
    let num05 = get_number("INFORME UM VALOR QUE SEJA UM NUMERO INTEIRO:"
    )

    // NUMBER = METODO
    // isInteger = VERIFICA SE O NUMERO É INTEIRO
    if (Number.isInteger(num01) &&
        Number.isInteger(num02) &&
        Number.isInteger(num03) &&
        Number.isInteger(num04) &&
        Number.isInteger(num05)) {
        print(condicional(num01, num02, num03, num04, num05))

    }
    else {
        print(`NÃO SÃO ACEITOS VALORES FLUTUANTES, APENAS NUMEROS INTEIROS.`)
    }
}

// PROCESSAMENTO:
function condicional(num01, num02, num03, num04, num05) {
    let numero = []
    let media = (num01 + num02 + num03 + num04 + num05) / 5

    if (num01 > media) {
        numero.push(num01)
    }
    if (num02 > media) {
        numero.push(num02)
    }
    if (num03 > media) {
        numero.push(num03)
    }
    if (num04 > media) {
        numero.push(num04)
    }
    if (num05 > media) {
        numero.push(num05)
    }


    return `
        NUMEROS ESCOLHIDOS: ${num01},${num02},${num03},${num04},${num05}
        A MEDIA ENTRE ELES: ${media}
        NUMEROS MAIORES QUE A MÉDIA: ${numero}
    `
}


main()