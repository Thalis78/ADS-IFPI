// 09 - Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { print , input , int , float, get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
let numero = get_number(`
    INFORME UM NUMERO ENTRE 0 E 100
    NUMERO:`)

return num(numero)
}

function num(numero){
    let resto = numero%2
    if(numero < 9 && numero >= 2 ){
        if(resto > 0 || numero === 2){
            print(`
            NUMERO ESCOLHIDO: ${numero}
            NUMERO PRIMO
        `)
        }
        else{
            print(`
            NUMERO ESCOLHIDO: ${numero}
            NUMERO NÃO É PRIMO
        `)
        }
    }
    else if (numero >= 9 && numero <=100){
        if(resto > 0){
            resto = numero%3
            if(resto > 0){
                resto = numero%5
                if(resto > 0){
                    print(`
                    NUMERO ESCOLHIDO: ${numero}
                    NUMERO É PRIMO
                `)

                }else{
                    print(`
                    NUMERO ESCOLHIDO: ${numero}
                    NUMERO NÃO É PRIMO
                `)
                }
            }else{
                print(`
                NUMERO ESCOLHIDO: ${numero}
                NUMERO NÃO É PRIMO
            `)
            }
        }
        else{
            print(`
            NUMERO ESCOLHIDO: ${numero}
            NUMERO NÃO É PRIMO
        `)
        }
        
    }
    
}
main()