// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião 
// em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e 
// a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1). 
// · a média das idades das pessoas que responderam ótimo; 
// · a quantidade de pessoas que respondeu regular; 
// · o percentual de pessoas que respondeu bom entre os entrevistados. 

import { get_number, print } from "./apelidos.js";

function main(){
    let otimo = 0;
    let bom = 0.
    let regular = 0;
    let pessimo = 0;
    let media_idade_otimo = 0;
    let media_idade_bom = 0;
    let media_idade_regular = 0;
    let media_idade_pessimo = 0;
    while(true){
        let avaliar = avaliacao();
        if(avaliar === -1){
            break
        }
        switch(avaliar){
            case 1:
                otimo+=1
                media_idade_otimo+=idade()
                break
            case 2:
                bom+=1
                media_idade_bom+=idade()    
                break
            case 3:
                regular+=1
                media_idade_regular+=idade()
                break
            case 4:    
                pessimo+=1
                media_idade_pessimo+=idade()
                break
            default:
                print("ESCOLHA INVALIDA!!!")   

        }

    }

    print(`
        >>>>>>>>>>>>>>>>>>> RESULTADO DA PESQUISA <<<<<<<<<<<<<<<<<<<<<<<<
        | ---> OTIMO : ${otimo},  MEDIA DE IDADE: ${media_idade_otimo/otimo} ANOS
        | ---> BOM : ${bom}, MEDIA DE IDADE: ${media_idade_bom/bom} ANOS
        | ---> REGULAR: ${regular}, MEDIA DE IDADE: ${media_idade_regular/regular} ANOS
        | ---> PESSIMO: ${pessimo}, MEDIA DE IDADE: ${media_idade_pessimo/pessimo} ANOS
        | ---> TOTAL PARTICIPANTES: ${otimo+bom+regular+pessimo} PESSOAS
    
    `)
}
function idade(){
    let idade  = get_number("IDADE: ")
    return idade
}
function avaliacao(){
    let avaliar =  get_number(
     `>>>>>>>>>>>>>>>>>> AVALIACAO DO FILME <<<<<<<<<<<<<<<<<<<<<<<<<<
     | ( 1 ) - OTIMO, ( 2 ) - BOM, ( 3 ) - REGULAR, ( 4 ) - PESSIMO 
     | ESCOLHA: `)
     return avaliar
}main()
