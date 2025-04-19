// 08 - Leia  um  numero  X  e,  a  seguir,  leia  e  escreva  uma  lista  de  números  com  o  término  da  lista  ocorrendo quando a soma de dois números consecutivos da lista for igual a X.

import { get_number, print } from "./apelidos.js";

function main(){
    let x = get_number("INFORME O VALOR DE X: ")
    let numero;
    let numero01 = 0;

    while(true){
        numero = get_number("INFORME UM VALOR PARA NUMERO: ");
        numero01 +=numero
        print (numero01)
        if(numero01 === x){
            print(`
                NUMERO ESCOLHIDO:${x}
                NUMERO CONSECUNTIVOS QUE RESULTOU NO ESCOLHIDO: ${numero}, ${numero01 - numero}
                SOMA DOS NUMEROS: ${numero01}
            `)
            break
        }
        numero01 = numero;
        
        }

    }
main()
