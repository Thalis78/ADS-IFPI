// 05 - Leia 3 (três) números e escreva-os em ordem crescente.

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
let num01 = get_number("INFORME UM NUMERO: ")
let num02 = get_number("INFORME UM OUTRO NUMERO: ")
let num03 = get_number("INFORME UM OUTRO NUMERO: ")

// PROCESSAMENTO/SAIDA:
let max = Math.max(num01,num02,num03)
let min = Math.min(num01,num02,num03)
return crescente(num01,num02,num03)
}

function crescente(num01,num02,num03){
let meio;
if(num01 != max && num01 != min){
    meio = num01
}
else if(num02 != max && num02 != min){
    meio = num02
}
else{
    meio = num03
}
print(`
    NUMEROS INFORMADOS: ${num01},${num02},${num03}
    ORDEM CRESCENTE: ${min},${meio},${max}

`)
}