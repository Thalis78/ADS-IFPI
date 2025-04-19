// Leia um número e escreva se o número é inteiro ou decimal.

import { get_number, int, print } from "./apelidos.js";

function main(){
    let numero = get_number(`INFORME UM NUMERO QUALQUER: `)
    let decimal;
    if(inteiro(numero)){
        decimal = "INTEIRO"
    }
    else if(numero === 0){
        decimal = "NÃO É INTEIRO E NEM DECIMAL"
    }
    else{
        decimal = "DECIMAL"
    }
    print(`
        NUMERO ESCOLHIDO: ${numero}
        RESULTADO:${decimal}
    `)
}
function inteiro(numero){
    return numero === int(numero) && numero !==0
}main()