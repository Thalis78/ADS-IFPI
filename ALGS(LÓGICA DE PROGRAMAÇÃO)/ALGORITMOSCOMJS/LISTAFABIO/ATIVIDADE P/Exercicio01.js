// 01 - Leia N e escreva todos os números inteiros de 1 a N.
import { get_number, print } from "./apelidos.js"

let numero = get_number("INFORME UM NUMERO INTEIRO: ")
for(let n = 1 ; n <= numero; n++){
    print(`--> ${n}`)
}