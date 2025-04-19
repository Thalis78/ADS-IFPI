// 04 - Leia um número e divida-o por dois  (sucessivamente) até que o resultado seja menor que 1. Escreva o resultado da última divisão efetuada. 

import { get_number, print } from "./apelidos.js";

function main(){
    let numero = get_number("INFORME UM NUMERO: ")
    let divisao = numero ;
    while(divisao > 1){ 
        divisao /=2
        if(divisao < 1){
            print(`
                NUMERO ESCOLHIDO: ${numero}
                ULTIMA DIVISÃO: ${divisao+divisao} / ${2} = ${divisao}
            `)
            break
        }
    }
}main()