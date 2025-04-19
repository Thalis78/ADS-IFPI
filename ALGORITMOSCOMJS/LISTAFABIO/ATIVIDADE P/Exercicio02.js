// 02 - Leia N e escreva todos os números inteiros pares de 1 a N.
import { get_number, print } from "./apelidos.js";

let numero = get_number("INFORME UM NUMERO INTEIRO: ")
let n = 1
for(n; (n <= numero);n+=1){
    if(n%2 === 0){
        print(`--> ${n}`)
    }
}
