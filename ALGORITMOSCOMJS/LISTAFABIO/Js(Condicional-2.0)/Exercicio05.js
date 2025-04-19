// Leia  o  preço  de  três  produtos  e  informe  qual  produto  deve  ser  comprado,  sabendo  que  a  decisão  é 
// sempre pelo mais barato. 

import { get_number, print } from "./apelidos.js";

function main(){
    function produto(texto){
        let produto = get_number(`INFORME O VALOR DO ${texto} PRODUTO: R$ `)
        return produto
    }
    let produto01 = produto("PRIMEIRO")
    let produto02 = produto("SEGUNDO")
    let produto03 = produto("TERCEIRO")

    let minimo = Math.min(produto01,produto02,produto03)

    if(minimo === produto01){
        menor_valor(1,produto01)
    }else if(minimo === produto02){
        menor_valor(2,produto02)
    }else{
        menor_valor(3,produto03)
    }

    function menor_valor(numero,produto){
        print(`
        O PRODUTO NUMERO ${numero} É O MAIS BARATO CUSTANDO R$${produto}
    `)
    }
}
main()