import { atualizar_numero, editar_por_posicao, inicializar_vetor, menor_e_maior_com_suas_posicoes, menu_opcao, mostrar_vetor, novos_valores, quant_vetor, remover_item_lista,resertar_valor, salvar, voltar_menu} from "./vetor_funcionalidades.js";
import { filter, redunce } from "./vetor_utils.js";
import { clear, input, int, print } from "./utils.js";

function main(){
    let vetor = [];
    let opcao = -1;
    while(opcao !== 16){
        opcao = menu_opcao()
        clear()
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
                print(`SOMATORIO DO VETOR : ${redunce(vetor,i => i)}`)
                break 
            case 7:
                print(`MEDIA DO VETOR : ${redunce(vetor,i => i,(acumulador,vetor) => acumulador / vetor.length)}`)
                break
            case 8:
                let valores_positivos = filter(vetor, i => i > 0)
                mostrar_vetor(valores_positivos)
                print(`QUANTIDADE : ${quant_vetor(valores_positivos)}`)
                break
            case 9:
                let valores_negativos = filter(vetor, i => i < 0)
                mostrar_vetor(valores_negativos)
                print(`QUANTIDADE : ${quant_vetor(valores_negativos)}`)
                break 
            case 10:
                vetor = atualizar_numero(vetor)
                break
            case 11:
                vetor = novos_valores(vetor)
                break
            case 12:
                mostrar_vetor(vetor)
                let valor = int(input("DIGA UM VALOR EXATO PARA REMOVER NA LISTA: "))
                vetor = remover_item_lista(vetor,i => valor != vetor[i],valor)
                break 
            case 13:
                mostrar_vetor(vetor)
                let posicao = int(input("INFORME A POSIÇÃO QUE VOCÊ DESEJA REMOVER: "))
                vetor = remover_item_lista(vetor,i => posicao - 1 != i ,posicao)
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
                print("VOCÊ ESCOLHEU UMA OPÇÃO QUE NÃO É VALIDA")                         
        }
        if(voltar_menu() === 2){
            print("PROGRAMA FINALIZADO!!!")
            break
        }else{
            clear()
        }
    }
}main();
