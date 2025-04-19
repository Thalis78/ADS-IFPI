// Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand()) 
// e  solicite  um  número  ao  usuário.  O  objetivo  é  que  o  usuário  acerte  o  número  gerado.  Se  o  número 
// digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente 
// um  número  ao  usuário.  Repita  este  processo  ate  que  o  usuário  acerte  o  número  gerado.  Após  isso, 

import { get_number, print } from "./apelidos.js";

// escreva em quantas tentativas o usuário acertou.
function main(){
    let num_aleatorio = parseInt(Math.random() * 100);
    let tentativas = 0;
    let num = 0;
    while(true){
        num = get_number("INFORME UM NUMERO INTEIRO DE 0 A 100:")
        if(num > num_aleatorio){
            print("NUMERO QUE VOCÊ ESCOLHEU É UM NUMERO MENOR DO QUE O NUMERO ALEATORIO!")
            tentativas+=1
        }
        if(num < num_aleatorio){
            print("NUMERO QUE VOCÊ ESCOLHEU É UM NUMERO MAIOR DO QUE O NUMERO ALEATORIO!")
            tentativas+=1
        }
        if(num === num_aleatorio){
            break
        }
    }
    print(`
    >>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<
    | ---> NUMERO ALEATORIO: ${num_aleatorio}
    | ---> NUMERO TENTATIVAS: ${tentativas}
    | ---> ULTIMO NUMERO ESCOLHIDO> ${num}
    | ---> VOCÊ ACERTOU O NUMERO ALEATORIO

    `)
}
main()