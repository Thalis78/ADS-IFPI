// 13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são 
// diferentes.

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js"




function main(){
var num1 = get_number("INFORME UM VALOR PARA NUMERO")
var num2 = get_number("INFORME UM VALOR PARA NUMERO")
var num3 = get_number("INFORME UM VALOR PARA NUMERO")
var num4 = get_number("INFORME UM VALOR PARA NUMERO")
var num5 = get_number("INFORME UM VALOR PARA NUMERO")
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5)) {
    condicional(num1, num2, num3, num4, num5);
} else {
    print(`INSIRA VALORES VÁLIDOS`);
}

}

function condicional(num1,num2,num3,num4,num5){
if(num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 &&
    num2 !== num3 && num2 !== num4 && num2 !== num5 &&
    num3 !== num4 && num3 !== num5 &&
    num4 !== num5){
    var min = Math.min(num1,num2,num3,num4,num5)
    var max = Math.max(num1,num2,num3,num4,num5)
    print(`
    NUMEROS ESCOLHIDOS: ${num1}, ${num2}, ${num3}, ${num4}, ${num5}
    O MENOR VALOR ENTRE ELES: ${min}
    O MAIOR VALOR ENTRE ELES: ${max}
    `)
}
else{
    print(`
    OPS.....ALGUM ERRO ACONTECEU
    INSIRA VALORES DIFERENTES OU VALORES VALIDOS E POSITIVOS PARA PEGAR O MINIO E O MAXIMO
    EX:.. 
        10 , 11, 5 , 7 , 8
    
    `)
}
}
main()