// Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da 
// prova  e  a  quantidade  de  nadadores.  O  fim  dos  dados  é  indicado  pelo  número  da  prova  igual  a  0  e 
// quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo, 
// clube (“a” ou “b”)  e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério

// RESULTADO : PONTOS - COLOCAÇÃO;
// DUAS EQUIPES - QUANTIDADES X DE NADADORES ;
// NADADORES - CONTEM NOME, CLASSIFICAÇÃO(LUGAR) - PONTOS +=
// NUMERO DE PROVAS

import { get_number, input, print } from "./apelidos.js";


function main(){
    let quantidade_nadadores = get_number("QUANTIDADE DE NADADORES? ")
    let clubeA = clubes(quantidade_nadadores)
    let clubeB = clubes(quantidade_nadadores)

    if(clubeA > clubeB){
        print(clubeA)
        print(clubeB)
        print("\nA EQUIPE A FOI A VENCEDORA")
    }
    if(clubeB > clubeA){
        print(clubeA)
        print(clubeB)
        print("\nA EQUIPE B FOI A VENCEDORA")
    }
    if(clubeA === clubeB){
        print("\nEMPATE!!!1")
    }

}
function clubes(quantidade_nadadores){
    let pontos = 0;
    while(quantidade_nadadores > 0){
        let nome = input("\nNOME DO NADADOR: ")
        let quantidade_provas = input(`\nQUANTIDADES DE PROVAS REALIZADA POR ${nome} : `)
        while(quantidade_provas > 0){
            let provas = 1
            let classificacao = get_number(`\nCOLOCACAO DA ${provas}: `)
            let quantidade_pontos = classificacao === 1 ? 9 : classificacao === 2 ? 6 : classificacao === 3 ? 4 : 2
            quantidade_provas--
            provas++    
            pontos+=quantidade_pontos
        }
    return pontos
    }
}main()