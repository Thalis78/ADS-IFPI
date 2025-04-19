//01 - Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
//divisores. (flag número = 0).

import { get_number , print} from "./utils/io_utils.js"


function main(){

print(`LISTA E SEUS DIVISORES`)
let lista = get_number(`INFORME O VALOR DA LISTA: `)

calcular_RelacaoDivisores(lista)
}
while(true){
    let pergunta = get_number("VOCÊ QUER ADICIONAR UM NUMERO PARA A LISTA? 1 - SIM ; 0 - NAO")
    
    if(pergunta === 1 ){
        main()
        
    }
    else if(pergunta === 0 ){

        print(`VOCÊ ENCERROU AS LISTAS.`)
        break;

    }else{

        print(`ALGUM ERRO ACONTECEU.`)
        break;
    }

    
}

function calcular_RelacaoDivisores(lista){

    let numero = lista
    while(numero >= 0){

        if(lista % numero === 0 ){

            print(`--------->${numero}`)

        }
        numero--

    }
}
