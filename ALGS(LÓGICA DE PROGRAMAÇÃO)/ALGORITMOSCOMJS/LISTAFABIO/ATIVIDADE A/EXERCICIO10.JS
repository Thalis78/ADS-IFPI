// LEIA 2 NUMEROS INTEIROS, CALCULE E ESCREVA O QUOCIENTE E O RESTO DA DIVISÃO DO 1º PELO 2 º.

import { question } from "readline-sync";

// ENTRADA:
var n1 = Number(question("ME DIGA UM NUMERO?"))
var n2 = Number(question("ME DIGA OUTRO NUMERO?"))

// PROCESSAMENTO:
var quociente = Math.floor(n1/n2)
var resto = (n1%n2)

// SAIDA:
console.log(`
    RESULTADO : 
    
    QUOCIENTE : ${quociente}
    RESTO DA DIVISÃO : ${resto}

`)