// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { get_number, print } from "./apelidos.js";

function main(){
    let N = get_number("INFORME UM NUMERO E OBTENHA A SEQUÊNCIA: ")
    let Count = 1;
    let CountAnterior = 1;
    let Sequencia = "";
    for(Count; Count <= N; Count+=CountAnterior){
        CountAnterior++;
        if(Count >= N){
            Sequencia += Count ;
            break;
        }else if(Count<= N){
            Sequencia += Count + ",";
        }
    }
    print(`---> SEQUENCIA: (${Sequencia})`)
}main();