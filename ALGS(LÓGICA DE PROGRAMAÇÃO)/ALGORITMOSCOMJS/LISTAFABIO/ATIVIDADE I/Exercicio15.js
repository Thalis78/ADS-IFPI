// Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária 
// e na base hexadecimal

import { get_number, print } from "./apelidos.js";

function main(){
    let numero = get_number("INFORME UM NUMERO DECIMAL ENTRE 0 A 255: ")
    numero = decimal(numero);
    let bin = binario(numero);
    hexadecimal(bin)

}

function binario(numero){
    let binario = []
    while(numero > 0){
        binario.push(numero % 2)
        numero = parseInt(numero /= 2);
    }
    binario = binario.reverse().join('')
    return binario
}

function hexadecimal(binario){
    let hexDigitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex = "";
    let i = 0;
    while(i < binario.length) {
        let n = 0;
        let j = 0;
        while(j < 4 && i + j < binario.length) {
            n = n * 2 + parseInt(binario.charAt(i + j));
            j++;
        }
        hex += hexDigitos[n];
        i += 4;
    }
    print(`O NUMERO EM BINARIO : ${binario}`);
    print(`O NUMERO EM HEXADECIMAL: ${hex}`);
}

function decimal(numero){
    while(numero < 0 || numero > 255){
        numero = get_number("INSIRA UM NUMERO VALIDO? ENTRE 0 A 255: ");
    }
    return numero;
}

main();
