// Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
// cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
// estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
// quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
// mostrando ao final, o número de cada canal e sua respectiva audiência.

import { get_number, print } from "./apelidos.js";

// CANAL - 2,4,5,7,10;
// QUANTIDADES DE PESSOA QUE ESTAVAM ASSISTINDO ESSE CANAL 
// QUANTIDADE DE PESSOA TOTAL; PERCENTUAL DE AUDIÊNCIA
// CANAL = 0 ; ESTRUTURA DE REPETIÇÃO PARA;

function main(){
    let canal_2 = 0;
    let canal_4 = 0;
    let canal_5 = 0;
    let canal_7 = 0;
    let canal_10 = 0;
    while(true){
        let canal  = get_number(`
        QUAL CANAL VOCE COSTUMAM ASSISTIR? 
        CANAL 2 ; CANAL 4; CANAL 5 ; CANAL 7 ; CANAL 10
        ESCOLHA:`)
        if(canal === 0){
            break
        }
        switch(canal){
            case 2:
                canal_2 += quantidade_pessoa(canal)
                break
            case 4:
                canal_4 += quantidade_pessoa(canal)
                break
            case 5:
                canal_5 += quantidade_pessoa(canal)
                break       
            case 7:
                canal_7 += quantidade_pessoa(canal)
                break
            case 10:
                canal_10 += quantidade_pessoa(canal)
                break
            default:
                print("OPÇÃO INVALIDA")        
        }

    }
    let total_pessoas = canal_2+canal_4+canal_5+canal_7+canal_10
    print(`
        >>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<
        | ---> CANAL 02 : ${canal_2 / total_pessoas * 100}%
        | ---> CANAL 04 : ${canal_4 / total_pessoas * 100}%
        | ---> CANAL 05 : ${canal_5 / total_pessoas * 100}%
        | ---> CANAL 07 : ${canal_7 / total_pessoas * 100}%
        | ---> CANAL 10 : ${canal_10 / total_pessoas * 100}%
        | ---> TOTAL_PESSOAS : ${total_pessoas}
    `)
}
function quantidade_pessoa(canal){
    let pessoas = get_number(`
    QUANTIDADE DE PESSOAS QUE ASSISTEM ESSE CANAL ${canal} NA SUA CASA?`)
    return pessoas
}main()
