// Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
// maior quadrado menor que 38 é 36 (quadrado de 6).

import { get_number, print } from "./apelidos.js"

function main(){
    let N = get_number("INFORME UM NUMERO E RECEBA O MAIOR QUADRADO? ")
    let Count = 1;
    let Numero = 1;
    for(Count; Count < N; Count++){
        if(Numero * Count > N){
            Numero-=1;
            break;
        }
        Numero++;
    }
    print(`---> MAIOR QUADRADO: ${Numero} = ${Numero*Numero}`)
}main()