// 04 - Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente 
// do algarismo da unidade.
import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    let numero = get_number(`
        INFORME UM NUMERO DE DOIS ALGARISMO
        ENTRE 10 A 99
        NUMERO:`)

    if(numero >= 10 && numero <=99){
        print(algarismo(numero))
    }
    else{
        print(`
        ERRO.....
        INSIRA UM NUMERO DE DOIS ALGARISMO
        `)
    }
}

function algarismo(numero){
    let dezena = Math.floor(numero/10)
    let unidade = numero%10

    if(dezena === unidade){
        print(`
            NUMERO ESCOLHIDO ${numero}
            DEZENA: ${dezena} DEZENA
            UNIDADE: ${unidade} UNIDADE
            O ALGARISMO DA DEZENA É IGUAL A O DA UNIDADE
        `)
    }
    else{
        print(`
        NUMERO ESCOLHIDO ${numero}
        DEZENA: ${dezena} DEZENA
        UNIDADE: ${unidade} UNIDADE
        O ALGARISMO DA DEZENA É DIFERENTE A O DA UNIDADE
    `)

    }
}

main()