//     leia  o  salário  de  funcionários  de  uma  empresa,  calcule  e  escreva  o  novo  salário  (segundo  os  critérios 
//     descritos  abaixo),  a  soma  dos  salários  atuais,  a  soma  dos  salários  reajustados  e  a  diferença  entre  as  2 
//     somas. (Flag: salário=0)

import { get_number, print } from "./apelidos.js";

function main(){
    while(true){
        let pergunta = get_number(
            `VOCE QUER REAJUSTAR SALARIO?
             1 - SIM
             2 - NAO `
        )
        if(pergunta == 2){
            print(`
                A ESTRUTURA DE REPETIÇÃO FOI PARADA!!!!
            `)
            break
        }
        salario(0,2999,0.25)
        salario(3000,5999,0.20)
        salario(6000,9999,0.15)
        salario(10000,30000,0.10)

    }

    
}
function novo_salario(salário, porcentagem){
    return salário + (salário * porcentagem)
   
}
function mensagem(salário,salario_novo,diferença) {
    print(salário === 0 ? "SALARIO : $0" : `
        SALARIO ANTIGO: $${salário}
        SALARIO NOVO : $${salario_novo}
        DIFERENÇA SALARIO: $${diferença}
    `)
}
function salario(numeromin,numeromax,porcentagem){
    let salario = 0;

    if(salario >= numeromin && salario <= numeromax){
    salario = get_number(`INFORME O SEU SALARIO: $`)
        let salario_novo = novo_salario(salario,porcentagem)
        let diferença = salario_novo - salario
        mensagem(salario,salario_novo,diferença)
    }
}

main()