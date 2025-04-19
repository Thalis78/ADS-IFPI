// Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
// seja utilizado.
;
import { get_number ,print} from "./apelidos.js";

function main(){
    let numero01 = get_number("INFORME UM NUMERO QUALQUER: ")
    let multi = numero01
    let numero02 = get_number("INFORME UM OUTRO NUMERO QUALQUER: ")
    let multiplicacao = 1;
    let resultado_multi = numero01 * numero02
    while(multi < resultado_multi){
        multi += numero01
        multiplicacao+=1
    }
    print(`
    >>>>>>>>>>>>> RESULTADO GERAL <<<<<<<<<<<<<
    | ---> ${numero01} x ${multiplicacao} = ${multi }
    `)
}main()