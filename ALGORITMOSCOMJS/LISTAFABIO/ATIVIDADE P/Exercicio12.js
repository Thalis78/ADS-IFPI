// 12 - Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { get_number, print } from "./apelidos.js";

let soma = 0;
let n = get_number("INFORME UM NUMERO QUALQUER: ");
let condicao =50 - n;
print(condicao)
for(n;n <= condicao ;n++){
    soma += n
}
let media = soma/condicao
console.log(media);
console.log(soma);