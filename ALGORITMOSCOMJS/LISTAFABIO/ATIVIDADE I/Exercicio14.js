// emita  o  resultado  de  uma  pesquisa  de  opinião  pública  a  respeito  das  eleições  presidenciais.    O 
// entrevistado  deverá  escolher  entre  3  candidatos  (Serra=45,  Dilma=13  ou  Ciro  Gomes=23),  ou  então 
// responder:  indeciso=99,  outros=98,  nulo/branco=0.    O  algoritmo  deve  ler  a  opinião  de  voto  de  cada 
// entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1.  Ao final, devem ser mostrados

import { get_number, print } from "./apelidos.js";

function main() {
    let opiniao = get_number("QUANTIDADE DE OPINIÕES")
    let quantidade = opiniao
    let serra = 0;
    let dilma = 0;
    let ciro = 0;
    let indeciso = 0;
    let outros = 0;
    let nulo_branco = 0;
    while (opiniao > 0) {
        let candidatos = get_number(
            `DIGITE:
             45 - SERRA
             13 - DILMA 
             23 - CIRO GOMES
             99 - INDECISO
             98 - OUTROS
             00 - NULO/BRANCO
             ESCOLHA:`);
        switch (candidatos) {
            case 45:
                serra++
                break
            case 13:
                dilma++
                break
            case 23:
                ciro++
                break
            case 99:
                indeciso++
                break
            case 98:
                outros++
                break
            case 0:
                nulo_branco++
                break

        }
        opiniao--
    }
    
    print(`
        >>>>>>>>>>>>> RESULTADO DA PESQUISA <<<<<<<<<<<<<<<<<<<<<<
        SERRA: ${(serra / quantidade) * 100}
        DILMA: ${(dilma / quantidade) * 100}
        CIRO GOMES: ${(ciro / quantidade) * 100}
        INDECISO: ${(indeciso / quantidade) * 100}
        OUTROS: ${(outros / quantidade) * 100}
        NULO OU BRANCO: ${(nulo_branco / quantidade) * 100}
        QUANTIDADE DE PARCIPANTES: ${quantidade}

    `)
}main()