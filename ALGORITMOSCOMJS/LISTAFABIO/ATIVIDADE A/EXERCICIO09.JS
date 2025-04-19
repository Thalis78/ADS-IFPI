// LEIA 2 NUMEROS (A,B) E ESCREVA-OS EM ORDEM INVERSA(B,A)

import { question } from "readline-sync";

// ENTRADA:
var a = Number(question("ME DIGA UM NUMERO?"))
var b = Number(question("ME DIGA OUTRO NUMERO?"))

// PROCESSAMENTO: O PROCESSAMENTO É FEITA DE MODO DIRETA

// SAIDA:
console.log(`
    ORDEM: ${a} , ${b}
    ORDEM INVERSA: ${b} , ${a} 
`)
