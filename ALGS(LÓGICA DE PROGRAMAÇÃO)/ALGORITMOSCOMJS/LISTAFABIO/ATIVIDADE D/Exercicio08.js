// 08 - Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva 
// sua idade exata (em anos).

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){

    let data_atual = new Date(input(`
    INFORME UMA DATA BASEADA NA DATA AMERICANA...
    EX:. 02/19/2024  - MES/DIA/ANO    
    INFORME A DATA ATUAL:`))

    let data_aniversario = new Date(input("DA MESMA MANEIRA INFORME SUA DATA DE NASCIMENTO: "))

    return data_idade(data_atual,data_aniversario)

}
function data_idade(data_atual,data_aniversario){
    let mes = data_atual.getMonth() - data_aniversario.getMonth()
    if(mes < 0){
        if(data_atual.getDate() >= data_aniversario.getDate()){
            mes = data_aniversario.getMonth() - data_atual .getMonth()
            let ano = data_atual.getFullYear() - data_aniversario.getFullYear()
            print(`
            FALTAM ${mes} MES(ES) PARA VOCÊ COMPLENTAR ${ano}

       `)
        }
        else{
            let quantidade_mes = data_aniversario.getMonth() - data_atual .getMonth()
            let dia = data_aniversario.getDate() - data_atual.getDate() 
            let quantidade_ano = data_atual.getFullYear() - data_aniversario.getFullYear() 
            print(`
            FALTAM ${quantidade_mes} MES(ES) E ${dia} DIA(S) PARA VOCÊ COMPLENTAR ${quantidade_ano}
       `)


        }
        

    }
    else{
        var idade = data_atual.getFullYear() - data_aniversario.getFullYear() 
        print(`VOCÊ TEM ${idade} ANOS DE IDADE`)
    }

}

main()