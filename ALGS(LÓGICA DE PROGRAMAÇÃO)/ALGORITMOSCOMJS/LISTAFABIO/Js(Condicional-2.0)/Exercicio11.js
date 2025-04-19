// Leia  um  número  inteiro  menor  que  1000  e  imprima  a  quantidade  de  centenas,  dezenas  e  unidades  do 
// número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos: 
// o 326 = 3 centenas, 2 dezenas e 6 unidades 
// o 12 = 1 dezena e 2 unidades 

import { get_number, print,input } from "./apelidos.js";


function main(){
    let num = input("INFORME UM NUMERO ENTRE 0 A 1000: ")
    return resultado(num)
}
function resultado(num){
    function indice_num(indice){
        var teste =  num[indice]
        return teste
    }
    if(num >= 100 && num< 1000){
        let C = indice_num(0)
        let D = indice_num(1)
        let U = indice_num(2)
        print(`
            NUMERO ESCOLHIDO: ${num} = ${C} CENTENAS,${D} DEZENAS E ${U} UNIDADES 
        `)
    }
    if(num <100){
        let D = indice_num(0)
        let U = indice_num(1)
        print(`
        NUMERO ESCOLHIDO: ${num} =${D} DEZENAS E ${U} UNIDADES 
    `)
    }
    if(num < 10){
        print(`
        NUMERO ESCOLHIDO: ${num} = POSSUI APENAS UNIDADES 
    `)    }
}
main()
