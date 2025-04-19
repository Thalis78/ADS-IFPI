// Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
// peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
// boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)

import { get_number, print } from "./apelidos.js"

// CADA BOI POSSUI UM N.O - IDENTIFICAÇÃO E PESO;
// CONJUNTO DE CARTÕES E ESCREVA O N.O DE INDENTIFICAÇÃO E O PESO DO BOI MAIS MAGRO E DO BOI MAIS GORDO.

function main() {
    let indetificacao;
    let n_o = 0;
    let indetificacao_anterior = 0;
    let peso = 100;
    let peso_anterior = 100;
    let peso_maior = Math.max(peso,peso_anterior);
    let menor_peso = Math.min(peso,peso_anterior);
    while (true) {
        indetificacao = get_number("INFORME A IDENTIFICACAO DO BOI: ")

        if (indetificacao === 0) {
            break
        }
        while(Math.min(peso)){
            n_o = indetificacao_anterior;
            break
        }
        while(Math.max(peso)){
            n_o = indetificacao_anterior;
            break
        }
        while(Math.min(peso_anterior)){
            indetificacao_anterior = indetificacao;
            break
        }
        while(Math.max(peso_anterior)){
            indetificacao_anterior = indetificacao;
            break
        }
        peso = get_number("INFORME O PESO DO BOI: KG")
        let novo_maior_peso = Math.max(peso, peso_anterior)
        let novo_menor_peso = Math.min(peso, peso_anterior)  
        if(peso_maior < novo_maior_peso){
            peso_maior = novo_maior_peso
        }  
        if(menor_peso > novo_menor_peso){
        menor_peso = novo_menor_peso}

    }
    print(`
        >>>>>>>>>>>>>>>RESULTADO<<<<<<<<<<<<<<<<<<
        | ---> INDETIFICAÇÃO DO PRIMEIRO BOI(N.O):${menor_peso == peso ? n_o : indetificacao_anterior}
        | ---> INDETIFICAÇÃO DO SEGUNDO BOI(N.O): ${peso_maior == peso ? n_o : indetificacao_anterior}
        | ---> BOI COM MAIOR PESO KG: ${peso_maior}KG
        | ---> BOI COM MENOR PESO KG: ${menor_peso}KG
    `)

} main()


