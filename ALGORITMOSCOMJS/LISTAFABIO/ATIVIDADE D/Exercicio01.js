// 01 - Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";


function main(){
    var num01 = get_number("INFORME UM NUMERO: ")
    var num02 = get_number("INFORME OUTRO NUMERO: ")
    var num03 = get_number("INFORME MAIS UM NUMERO: ")    

    return iguais(num01,num02,num03)

}

function iguais(num01,num02,num03){
    var iguais = 3
    if(num01 === num02 && num02 === num03){
        print(`
          NUMEROS FORNECIDOS: ${num01},${num02},${num03}
          EXISTE ${iguais} NUMEROS IGUAIS
        `)
    }
    else if(num01 === num02){
        iguais--
        print(`
        NUMEROS FORNECIDOS: ${num01},${num02},${num03}
        EXISTE ${iguais} NUMEROS IGUAIS
      `)
    }
    else if(num02 === num03){
        iguais--
        print(`
        NUMEROS FORNECIDOS: ${num01},${num02},${num03}
        EXISTE ${iguais} NUMEROS IGUAIS
      `)
    }
    else if(num01 === num03){
        iguais--
        print(`
        NUMEROS FORNECIDOS: ${num01},${num02},${num03}
        EXISTE ${iguais} NUMEROS IGUAIS
      `)
    }
    else{
        print(`
        NUMEROS FORNECIDOS: ${num01},${num02},${num03}
        TODOS OS NUMEROS SÃO DIFERENTES
      `)
    }
}
main()