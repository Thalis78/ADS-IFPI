// 03 - Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";




function main(){
    let num01 = get_number("INFORME UM NUMERO: ")
    let num02 = get_number("INFORME OUTRO NUMERO: ")
    let num03 = get_number("INFORME MAIS UM NUMERO:")

        return maior(num01,num02,num03)

 

    
}
function maior(num01,num02,num03){

    let maximo = Math.max(num01,num02,num03)
    if(maximo === num01){
        print(`
            NUMERO ESCOLHIDO: ${num01},${num02},${num03}
            O MAIOR ENTRE ELES: ${num01}
        `)
    }
    else if(maximo === num02){
        print(`
        NUMERO ESCOLHIDO: ${num01},${num02},${num03}
        O MAIOR ENTRE ELES: ${num02}
    `)
    }
    else{
        print(`
        NUMERO ESCOLHIDO: ${num01},${num02},${num03}
        O MAIOR ENTRE ELES: ${num03}
    `)
    }
    
}

main()