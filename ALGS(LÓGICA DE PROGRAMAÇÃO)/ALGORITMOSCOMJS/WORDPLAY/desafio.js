import { question } from "readline-sync";
import { avoids, file_list, has_no_e, is_abecedarian, letter_n_list, list, list_twenty_letters, menu_option, percentage, uses_only } from "./utilsStrings.js";



function main(){
    let lista_arquivo = file_list();
    let lista_palavra_mais_vinte = 0;
    let lista_palavra_sem_E = 0
    let lista_com_n_e_letras = 0;
    let letras_proibidas = 0;
    let letras_usuario = 0;
    let palavras_ordem_alfabetica = 0;

    let menu = Number(question(menu_option()))
    
    switch(menu){
        case 1:
            list(lista_arquivo)
            console.log(`
                CARREGAMENTO DE ARQUIVO FEITO COM SUCESSO
                QUANTIDADE DE PALAVRAS : ${lista_arquivo.length.toFixed(2)} %`);
            break;
        case 2:
            lista_palavra_mais_vinte = list_twenty_letters(lista_arquivo);
            list(lista_palavra_mais_vinte)
            console.log(`
                QUANTIDADE DE PALAVRAS : ${lista_palavra_mais_vinte.length}
                PORCENTAGEM            : ${percentage(lista_arquivo.length,lista_palavra_mais_vinte.length).toFixed(2)} %`);

           break;
        case 3:
            lista_palavra_sem_E = has_no_e(lista_arquivo);
            list(lista_palavra_sem_E)
                console.log(`
                QUANTIDADE DE PALAVRAS SEM A LETRA E: ${lista_palavra_sem_E.length}
                PORCENTAGEM                         : ${percentage(lista_arquivo.length,lista_palavra_sem_E.length).toFixed(2)} %`);
            break;
        case 4: 
            lista_com_n_e_letras = letter_n_list(lista_arquivo);
            list(lista_com_n_e_letras)
            console.log(`
                QUANTIDADE DE PALAVRAS COM A LETRA N: ${lista_com_n_e_letras.length}
                PORCENTAGEM                         : ${percentage(lista_arquivo.length,lista_com_n_e_letras.length).toFixed(2)} %`);
            break;
        case 5:
            letras_proibidas = avoids(lista_arquivo)
            list(letras_proibidas)
            console.log(`
                QUANTIDADE DE PALAVRAS SEM LETRAS PROIBIDAS: ${letras_proibidas.length}
                PORCENTAGEM                                : ${percentage(lista_arquivo.length,letras_proibidas.length).toFixed(2)} %`);
            break;

        case 6:
            letras_usuario = uses_only(lista_arquivo)
            list(letras_usuario)
            console.log(`
                QUANTIDADE DE PALAVRAS SEM LETRAS PROIBIDAS: ${letras_usuario.length}
                PORCENTAGEM                                : ${percentage(lista_arquivo.length,letras_usuario.length).toFixed(2)} %`);
            break;
        case 7:
            palavras_ordem_alfabetica = is_abecedarian(lista_arquivo)
            list(palavras_ordem_alfabetica)
            console.log(`
                QUANTIDADE DE PALAVRAS SEM LETRAS PROIBIDAS: ${palavras_ordem_alfabetica.length}
                PORCENTAGEM                                : ${percentage(lista_arquivo.length,palavras_ordem_alfabetica.length).toFixed(2)} %`);
                break;
        case 8:
            console.log("PROGRAMA FINALIZADO !!!")
            break;
        default:
            console.log("ALGUM ERRO ACONTECEU !!!")    
                
    }
}
main()
