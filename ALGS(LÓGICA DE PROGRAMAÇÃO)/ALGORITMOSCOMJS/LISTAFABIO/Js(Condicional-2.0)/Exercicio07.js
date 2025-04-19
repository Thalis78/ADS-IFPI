// As  Organizações  Tabajara  resolveram  dar  um  aumento  de  salário  aos  seus  colaboradores  e  lhe 
// contrataram para desenvolver o programa que calculará os reajustes.  Escreva um algoritmo que leia o 
// salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
// o salários até R$ 280,00 (incluindo) : aumento de 20% 
// o salários entre R$ 280,00 e R$ 700,00 : aumento de 15% 
// o salários entre R$ 700,00 e R$ 1500,00 : aumento de 10% 
// o salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela: 
// · o salário antes do reajuste; 
// · o percentual de aumento aplicado; 
// · o valor do aumento; 
// · o novo salário, após o aumento.

import { get_number, print } from "./apelidos.js";

function main(){
    let salario = get_number("INFORME SEU SALARIO: R$")

    return reajuste(salario)
}
function reajuste(salario){
    var percentual = function (numero){
        let percentual = (numero)
        return percentual
    }
    let valor_aumento = salario * (percentual())
    let novo_salario = salario + valor_aumento

    if(salario < 280){
        valor_aumento = salario * percentual(0.20)
        novo_salario = salario + valor_aumento
        reajuste_salario(salario,valor_aumento,novo_salario,percentual((0.20)*100))
    }
    if(salario >280 && salario <= 700){
        valor_aumento = salario * percentual(0.15)
        novo_salario = salario + valor_aumento  
        reajuste_salario(salario,valor_aumento,novo_salario,percentual((0.15)*100))
    }
    if(salario > 700 && salario <=1500){
        valor_aumento = salario * percentual(0.10)
        novo_salario = salario + valor_aumento
        reajuste_salario(salario,valor_aumento,novo_salario,percentual((0.10)*100))
    }
    if(salario > 1500){
        valor_aumento = salario * percentual(0.05)
        novo_salario = salario + valor_aumento
        reajuste_salario(salario,valor_aumento,novo_salario,percentual((0.05)*100))
    }
    function reajuste_salario(salario,valor_aumento,novo_salario,percentual){
        print(`
            SALARIO ANTIGO:R$${salario}
            PERCENTUAL DE AUMENTO:${percentual}%
            VALOR AUMENTO:$R$${valor_aumento}
            SALARIO REAJUSTE:R$${novo_salario}
        `)
    }
}
main()