// 11 - Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o 
// valor  de    num2  se  opção  for  igual  a  2;  e  o  valor  de  num3  se  opção  for  igual  a  3.  Os  únicos  valores 
// possíveis para a variável opção são 1, 2 e 3. 
import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
let num01 = get_number("INFORME UM NUMERO: ")
let num02 = get_number("INFORME OUTRO NUMERO: ")
let num03 = get_number("INFORME OUTRO NUMERO: ")
let num04 = get_number("INFORME OUTRO NUMERO: ")

let opcao = get_number(`
    SELECIONA UMA DAS OPCOES ABAIXO PARA MOSTRAR O NUMERO:
    OPCAO (01)
    OPCAO (02)
    OPCAO (03)
    ESCOLHA UMA DAS OPCOES : `)

    return resultado(opcao,num01,num02,num03,num04)
}



function resultado(opcao,num01,num02,num03,num04){
    switch (opcao) {
        case 1:
            print(`VOCÊ ESCOLHEU O PRIMEIRO NUMERO:${num01}`)
            break
        case 2:
            print(`VOCÊ ESCOLHEU O SEGUNDO NUMERO:${num02}`)
            break
        case 3:
            print(`VOCÊ ESCOLHEU O TERCEIRO NUMERO:${num03}`)
            break
        default:
            print(`
            VOCÊ NÃO ESCOLHEU NENHUMA DAS OPÇÕES ACIMA
            VALOR PADRÃO:${num04}`)
        }

}

main()