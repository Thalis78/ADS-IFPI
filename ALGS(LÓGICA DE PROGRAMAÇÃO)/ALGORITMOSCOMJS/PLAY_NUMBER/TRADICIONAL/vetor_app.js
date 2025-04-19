import { atualizar_numero, editar_por_posicao, inicializar_vetor, media_vetor, menor_e_maior_com_suas_posicoes, menu_opcao, mostrar_vetor, novos_valores, quant_vetor, remover_por_posicao, remover_por_valor, resertar_valor, salvar, somatorio_vetor } from "./vetor_funcionalidades.js";
import { filter_negativos, filter_positivos } from "./vetor_utils.js";
import { print } from "./utils.js";

function main(){
    let vetor = [];
    let opcao = -1;
    while(opcao !== 16){
        opcao = menu_opcao()
        switch(opcao){
            case 1:
                vetor = inicializar_vetor()
                break
            case 2:
                mostrar_vetor(vetor)
                break
            case 3:
                vetor = resertar_valor(vetor)
                break
            case 4:
                print(`QUANTIDADE : ${quant_vetor(vetor)}`)
                break
            case 5:
                print(menor_e_maior_com_suas_posicoes(vetor))
                break
            case 6:
                print(`SOMATORIO DO VETOR : ${somatorio_vetor(vetor)}`)
                break 
            case 7:
                print(`MEDIA DO VETOR : ${media_vetor(somatorio_vetor(vetor),vetor)}`)
                break
            case 8:
                mostrar_vetor(filter_positivos(vetor))
                break
            case 9:
                mostrar_vetor(filter_negativos(vetor))
                break 
            case 10:
                vetor = atualizar_numero(vetor)
                break
            case 11:
                vetor = novos_valores(vetor)
                break
            case 12:
                vetor = remover_por_valor(vetor)
                break 
            case 13:
                vetor = remover_por_posicao(vetor)
                break
            case 14:
                vetor = editar_por_posicao(vetor)
                break
            case 15:
                salvar(vetor)
                print("SALVO COM SUCESSO!!!")
                break 
            case 16:
                print("PROGRAMA FINALIZADO!!!")
                break
            default:
                            
        }
    }
}main();
