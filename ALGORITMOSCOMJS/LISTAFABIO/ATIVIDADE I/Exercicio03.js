// 03 - Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos. 

import { get_number, print } from "./apelidos.js";

function main(){
    let numero01 = get_number("INFORME O PRIMEIRO NUMERO: ")
    let numero02 = get_number("INFORME O SEGUNDO NUMERO: ")

    let min = Math.min(numero01,numero02)
    let max = Math.max(numero01,numero02)
    while(true){
        if(numero01 % min === 0 && numero02 % min === 0){
            print(`
                PRIMEIRO NUMERO ESCOLHIDO:  ${numero01}
                SEGUNDO NUMERO ESCOLHIDO: ${numero02}
                RESULTADO DO MDC: ${min}
            `)
            break
        }
        min--
    }
}main()