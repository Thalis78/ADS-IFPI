// Escreva  um  algoritmo  que  leia  o  nome  de  um  produto,  o  preço  e  a  quantidade  comprada.  Escreva  o 
// nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo 
// número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”). 
// a. Até 10 unidades: valor total 
// b. de 11 a 20 unidades: 10% de desconto 
// c. de 21 a 50 unidades: 20% de desconto 
// d. acima de 50 unidades: 25% de desconto 

import { get_number, input, print } from "./apelidos.js";

function main(){
    let produto = 0;
    let preco = 0;
    let total = 0;
    let quantidade = 0;
    while(true){
        let produto = input("INFORME O NOME DO PRODUTO: ")
        if(produto === "FIM"){
            break
        }
        let preco = get_number("INFORME O PRECO DO PRODUTO: R$")
        let quantidade = get_number(`QUANTOS ${produto} VOCÊ DESEJA COMPRAR: `)
        if(quantidade > 11 ){
            total = (preco - (preco * 0.10)) * quantidade
        }
        if(quantidade > 21){
            total = (preco - (preco * 0.20)) * quantidade
        }
        if(quantidade > 50){
            total = (preco - (preco * 0.25)) * quantidade
        }
        if(quantidade <= 11){
            total = preco * quantidade
        }
        print(`
            >>>>>>>>>>>>>>>>>> PRODUTO <<<<<<<<<<<<<<<<<
            | ---> NOME DO PRODUTO: ${produto}
            | ---> QUANTIDADE: ${quantidade}
            | ---> VALOR TOTAL: R$${preco * quantidade}
            | ---> VALOR PAGO COM DESCONTO: R$ ${total.toFixed(2)}      
            `)

    }
}main()

