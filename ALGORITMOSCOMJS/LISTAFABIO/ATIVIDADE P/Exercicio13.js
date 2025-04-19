// Leia N e uma lista de N números e escreva o maior número da lista
import { get_number, print } from "./apelidos.js"

function main(){
    const n = get_number("INFORME O TAMANHO DA LISTA? ")
    let count= 1;
    let Numero = 0;
    let NumeroAnterior = 0;
    let MaiorNumero = 0;
    for(n; count <= n ; count++){
        Numero = get_number("INFORME UM NUMERO?")
        if(Numero > NumeroAnterior && Numero > MaiorNumero){
            MaiorNumero = Numero
        }
        NumeroAnterior = Numero
    }
    print(`--->MAIOR NUMERO ${MaiorNumero}`)
}main()