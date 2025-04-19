// 17 - Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1 
// escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor 
// são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4 
// divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação 
// escreva o quadrado dos números lidos.

import { get_number, input , print } from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    let num = get_number("INFORME UM NUMERO INTEIRO: ")
    let num2 = get_number("\nINFORME MAIS UM NUMERO\nLEMBRE-SE DE COLOCAR UM NUMERO DISTINTO DO PRIMEIRO\nNUMERO:")

    return resultado(num,num2)
}
function resultado(n1,n2){
    var soma_valores = n1 + n2
    if((n1%n2) === 1){
        print(`A SOMA DAS VÁRIAVEIS + RESTO DA DIVISÃO É IGUAL ${soma_valores + (n1%n2)}`)
    }
    else if((n1%n2) === 2){
        if((n1%2) === 0){
            print(`
             NUMERO 01: ${n1} = PAR
             NUMERO 02: ${n2} = PAR
            `)
        }
        else{
            print(`
            NUMERO 01: ${n1} = IMPAR
            NUMERO 02: ${n2} = IMPAR
           `)
        }
    }
    else if((n1%n2) === 3){
        print(`
        SOMA DOS VALORES LIDOS: ${soma_valores}
        MULTIPLICADO PELO PRIMEIRO: ${soma_valores * n1}
        `)
    }
    else if((n1%n2) === 4 && n2 !== 0){
        print(`
        SOMA DOS VALORES LIDOS DIVIDO PELO SEGUNDO: ${soma_valores/n2}
        `)
        
    }
    else{
        print(`
        QUADRADO DO NUMERO 01 : ${n1**n1}
        QUADRADO DO NUMERO 02 : ${n2**n2}
        `)
    }
}

main()