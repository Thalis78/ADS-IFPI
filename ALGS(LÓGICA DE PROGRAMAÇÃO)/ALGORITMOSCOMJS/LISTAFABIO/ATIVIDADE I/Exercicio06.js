// Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { get_number,print } from "./apelidos.js";

function main(){
    let numero = get_number("INFORME UM NUMERO QUALQUER? ")
    let divisor = 1000000;
    let digitos = 7;
    while(true){

        if(((numero % divisor) < 9) && numero >= 10){
            mensagem(parseInt(numero),digitos)
            break
        }

        if(numero < 10) {
            mensagem(numero,1)
            break

        }       
        divisor/=10

        digitos-- 

    }
}
function mensagem(numero, digito){
    print(`
    NUMERO ESCOLHIDO: ${numero}
    NUMERO DE ${digito} DIGITOS`);
}
main()