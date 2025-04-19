// Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino, 
//     2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva: 
//     · Média de idade das mulheres; 
//     · Média de idade dos homens; 
//     · O percentual de homens solteiros; 
//     · O percentual de mulheres solteiras; 
//     · A quantidade de mulheres divorciadas acima de 30 anos. 

import { get_number, input, print } from "./apelidos.js";


function main(){
    let Masculino = 0;
    let Feminino = 0;
    let idade_masc = 0;
    let idade_femin = 0;
    let Solteiros_masculino = 0;
    let Solteiros_feminino = 0;
    let Divorciado = 0;
    let grupo = 100;
    while(grupo > 0){
        escolha(Masculino,Feminino,Solteiros_masculino,Solteiros_feminino,Divorciado,idade_masc,idade_femin)
        grupo--
    }    
    print(`
        >>>>>>>>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<<<<<<<<<
        | ---> MEDIA DE IDADE DO SEXO MASCULINO: ${idade_masc/Masculino}
        | ---> MEDIA DE IDADE DO SEXO FEMININO: ${idade_femin/Feminino}
        | ---> PERCENTUAL DE HOMEM SOLTEIRO: ${(Solteiros_masculino/Masculino) * 100} %
        | ---> PERCENTUAL DE MULHER SOLTEIRA: ${(Solteiros_feminino/Feminino) * 100} %
        | ---> QUANTIDADE DE MULHERES DIVORCIADAS ACIMA DE 30 ANOS: ${Divorciado}
    `)
}
function idade(){
    let id  = get_number("IDADE: ")
    return id
}
function estado_civil(){
    let avaliar =  get_number(
     `>>>>>>>>>>>>>>>>>>>>> ESTADO CIVIL <<<<<<<<<<<<<<<<<<<<<<<<<<
     | ( 1 ) - CASADO, ( 2 ) - SOLTEIRO, ( 3 ) - DIVORCIADO, ( 4 ) - VIUVO 
     | ESCOLHA: `)
     return avaliar
}
function escolha(m,f,s_m,s_f,d,i_m,i_f){
    let sexo = get_number("SEXO 1 - MASCULINO , 2 - FEMININO")
    switch(sexo){
        case 1:
            m+=1
            i_m+=idade()
            if(estado_civil() === 1){
                s_m+=1
            }
            break
        case 2:
            f+=1
            let id = idade()
            i_f+=idade
            let resultado =estado_civil()
            if(resultado === 1){
                s_f+=1
            }    
            if(resultado === 3 && idade > 30){
                d+=1
            }
            
        default:
            print("ESCOLHA INVALIDA")

    }

}main()