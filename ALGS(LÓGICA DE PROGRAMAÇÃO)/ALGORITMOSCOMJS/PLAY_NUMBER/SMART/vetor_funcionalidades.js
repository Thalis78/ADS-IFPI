import { clear, input, int, number_random, print } from "./utils.js";
import { embaralhar, map,ordem, vetor_aleatorio, vetor_feito_por_usuario,vetor_por_arquivo } from "./vetor_utils.js";
import {writeFileSync} from "fs"

export function menu_opcao(){
    return int(input(`
        --------- PLAY NUMBERS ---------
        |01. --> INICIALIZAR VETOR 
        |02. --> MOSTRAR VALORES
        |03. --> RESETAR VETOR
        |04. --> QUANTIDADES DE ITENS DO VETOR
        |05. --> MOSTRAR MENOR E MAIOR VALORES DO VETOR E SUAS POSICOES
        |06. --> SOMATORIO DOS VALORES
        |07. --> MEDIA DOS VALORES
        |08. --> MOSTRAR VALORES POSITIVOS E QUANTIDADE
        |09. --> MOSTRAR VALORES NEGATIVOS E QUANTIDADE
        |10. --> ATUALIZAR TODOS OS VALORES BASEADO EM UMA REGRA
        |11. --> ADICIONAR NOVOS VALORES
        |12. --> REMOVER ITENS POR VALOR EXATO
        |13. --> REMOVER ITENS POR POSICAO
        |14. --> EDITAR VALOR ESPECIFICO POR POSICAO
        |15. --> SALVAR VALORES EM ARQUIVO
        |16. --> SAIR
        ESCOLHA:`
    ));
}

export function voltar_menu(){
    return int(input("1. PARA VOLTAR AO MENU; 2. FINALIZAR PROGRAMA; ESCOLHA:"))
}

export function inicializar_vetor(){
    let opcao_vetor = 5;
    while(opcao_vetor > 3){
        opcao_vetor = int(input(
    `--------- INICIALIZAR VETOR -----------
    1. VETOR ALEATORIO.
    2. VETOR GERADO PELO USER.
    3. VETOR GERADO PELO TXT.
    ESCOLHA:`))
    }
    
    let min = int(input("INFORME O VALOR MINIMO: "))
    let max = int(input("INFORME O VALOR MAXIMO: "))
    let tamanho = int(input("INFORME O TAMANHO DO VETOR: "))

    switch(opcao_vetor){
        case 1:
            return vetor_aleatorio(min,max,tamanho)
        case 2:
            return vetor_feito_por_usuario(min,max,tamanho)
        case 3:
            return vetor_por_arquivo(min,max,tamanho)
        default:
            clear()
            print("NÃO FOI POSSIVEL REALIZAR O PROCESSO POIS VOCÊ ESCOLHEU UMA OPÇÃO QUE NÃO É VALIDA")                         
            inicializar_vetor()
    }     
}
export function mostrar_vetor(vetor){
    if(vetor.length > 0){
        print("-------RESULTADO-------")
        for(let i = 0;i < vetor.length;i++){
            print(
        `|${i+1} --> ${vetor[i]} `)
        }
    }else{
        print(
        `NÃO EXISTE NENHUM ITEM NA LISTA!!!`)
    }

}
export function resertar_valor(vetor){
    let opcao_resetar = int(input(
    `--------- RESETAR VETOR -------------
    1. RESETAR VETOR.
    2. MANTER VETOR.
    ESCOLHA:`))
     
     switch(opcao_resetar){
        case 1:
            return inicializar_vetor();
        case 2:
            return vetor;    
     }
}
export function quant_vetor(vetor){
    let quant = 0
    for(let i = 0;i < vetor.length;i++){
        quant+=1;
    }
    return quant
}
export function menor_e_maior_com_suas_posicoes(vetor){
    let posicao_menor = 0, posicao_maior = 0,maior = 0,menor = Infinity;
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] > maior){
            posicao_maior = i+1;
            maior = vetor[i]
        }
        if(vetor[i] < menor){
            posicao_menor = i+1;
            menor = vetor[i]
        }
    }
    return(
    `
    MAIOR  :${maior}
    POSIÇÃO:${posicao_maior}
    MENOR  :${menor}
    POSIÇÃO:${posicao_menor}
    `)

}
export function atualizar_numero(vetor){
    let opcao_regra = int(input
    (
    `--------------REGRAS----------------
    1. MULTIPLICAR POR UM VALOR.
    2. ELEVAR A UM VALOR.
    3. REDUZIR UMA FRACAO.
    4. SUBSTITUIR VALORES NEGATIVOS 
    5. ORDENAR VALORES.
    6. EMBARALHAR VALORES.
    ESCOLHA:`))

    switch(opcao_regra){
        case 1:
            let num = int(input("INFORME O NUMERO PARA MULTIPLICAÇÃO"))
            return map(vetor,i => i * num)
        case 2:
            let num_exp = int(input("INFORME O NUMERO PARA EXPONENCIACAO"))
            return map(vetor, i => i ** num_exp)
        case 3:
            let numero = input("DIGITE UMA FRACAO PARA MULTIPLICAR TODOS OS VALORES DO VETOR(EX:10/2): ").split("/").map(Number);
            return map(vetor, i => i * numero[0]/numero[1],numero)
        case 4:
            let num_min_and_max = input("INFORME O MINIMO E O MAXIMO(EX: 10,20)").split(",").map(Number)
            return map(vetor,i => i = i < 0 ? number_random(num_min_and_max[0],num_min_and_max[1]) : i = i)
        case 5:
            return ordem(vetor)
        case 6: 
            return embaralhar(vetor)
        default:
            clear()
            print("VOCÊ ESCOLHEU UMA OPÇÃO QUE NÃO É VALIDA")                         
            atualizar_numero(vetor)    
    } 
}
export function novos_valores(vetor){
    let novo_vetor = vetor;
    let quant_valores = int(input("INFORME A QUANTIDADE DE VALORES PARA O VETOR: "))
    for(let i = 0; i < quant_valores;i++){
        novo_vetor.push(int(input(`${i+1} NUMERO:`)))
    }
    return novo_vetor
}
export function remover_item_lista(vetor,expressao,entrada){
    let novo_vetor = []
    for(let i in vetor){
        if(expressao(i,entrada)){
            novo_vetor.push(vetor[i])
        }
    }
    return novo_vetor
}
export function editar_por_posicao(vetor){
    let novo_vetor = []
    mostrar_vetor(vetor)
    let posicao = int(input("INFORME A POSICAO DO VETOR QUE DESEJA EDITAR:"))
    for(let i = 0; i < vetor.length; i++){
        if((posicao - 1) != i){
            novo_vetor.push(vetor[i])
        }else{
            novo_vetor.push(int(input(`INFORME UM NOVO NUMERO PARA A POSICAO ${i+1}:`)))
        }
    }
    return novo_vetor;
}
export function salvar(vetor){
    let String = "------------- PLAY NUMBER ---------------";
    let nomeArquivo = input("INFORME O NOME DO ARQUIVO + FORMARTO (ex:play_number.txt)")
    for(let i = 0; i < vetor.length;i++){
        String+=`\n|${i+1} --> ${vetor[i]}`
    }
    return writeFileSync(nomeArquivo,String);
}
