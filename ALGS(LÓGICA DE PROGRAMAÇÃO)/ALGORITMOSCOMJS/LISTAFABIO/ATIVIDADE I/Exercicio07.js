// Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido. 

import { get_number, print } from "./apelidos.js";

function main(){
    let num = get_number("INFORME UM VALOR PRO NUMERO: ")


    while(true){
        let num_igual = get_number("DIGITE UM NUMERO QUALQUER? ")
        if(num === num_igual ){
            print(`
                PRIMEIRO NUMERO: ${num}
                NUMERO ESCOLHIDO : ${num_igual}
                VOCÊ ACERTOU!!!
            `)
            break
        }
    }
}main()