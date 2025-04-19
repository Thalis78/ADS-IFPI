// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
// 1 --------- n

import { get_number, print } from "./apelidos.js";

let soma = 0;
let numero01 = get_number("INFORME UM NUMERO QUALQUER: ")

for(let n = 1;n <= numero01;n++){
    soma += n
}

print(soma)
