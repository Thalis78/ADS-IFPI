// 12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { get_number,print } from "/users/thali/documents/javascript(condicional)/apelidos.js";

// ENTRADA:
function main(){
let numero = get_number(`
    ESCOLHA UM NUMERO QUALQUER E IREMOS RETORNAR SE ELE É IMPAR OU PAR
    NUMERO:`)
let num = numero%2

}
    // SAIDA:
if(num === 0){
    print(`
        NUMERO ESCOLHIDO: ${numero}
        ESSE NUMERO É PAR
    `)
}
else{
    print(`
    NUMERO ESCOLHIDO: ${numero}
    ESSE NUMERO É IMPAR
`)

}