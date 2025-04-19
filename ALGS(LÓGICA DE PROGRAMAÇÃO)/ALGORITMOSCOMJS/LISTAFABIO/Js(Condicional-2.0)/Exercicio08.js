// Para  o  cálculo  de  uma  folha  de  pagamento,  sabendo  que  os  descontos  são  do  Imposto  de  Renda,  que 
// depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 
// 11% do salário bruto, mas não é descontado (é a empresa que deposita). O salário líquido corresponde 
// ao  salário  bruto  menos  os  descontos.  O  programa  deverá  pedir  ao  usuário  o  valor  da  sua  hora  e  a 
// quantidade de horas trabalhadas no mês. 
// Desconto do IR: 
// o Salário Bruto até R$ 900,00 (inclusive) - isento 
// o Salário Bruto até R$ 1.500,00 (inclusive) - desconto de 5% 
// o Salário Bruto até R$ 2.500,00 (inclusive) - desconto de 10% 
// o Salário Bruto acima de R$ 2.500,00 - desconto de 20%  
// Escreva na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e 
// a quantidade de hora é 220. 
//         Salário Bruto: (5 * 220)        : R$ 1100,00 
//         (-) IR (5%)                     : R$   55,00   
//         (-) INSS ( 10%)                 : R$  110,00 
//         FGTS (11%)                      : R$  121,00 
//         Total de descontos              : R$  165,00 
//         Salário Liquido                 : R$  935,00 

import { get_number, print } from "./apelidos.js";

 
function main(){
    function salario_bruto(){    
        let horas_trabalhada = get_number(`
    INFORME A QUANTIDADE DE HORAS TRABALHADA:`)
        let valor_hora = get_number(`
    VALOR DA HORA: R$ `)
        return (horas_trabalhada * valor_hora)
}
    let salario= salario_bruto()
    return descontado(salario)
}
function descontado(salario){
        function ir(numero){
            let ir = (numero)
            return ir
        }
        let imposto_renda = salario * (ir())
        let inss = salario * (0.03)
        let fgts = salario * (0.11)
        let total_descontos = imposto_renda + inss
        let salario_liquido = salario - total_descontos

        if(salario <= 900){
            imposto_renda = 0
            total_descontos = imposto_renda + inss
            salario_liquido = salario - total_descontos
        }if(salario > 900 && salario <=1500){
            imposto_renda = salario * (ir(0.05))
            total_descontos = imposto_renda + inss
            salario_liquido = salario - total_descontos
        }if(salario > 1500 && salario < 2500){
            imposto_renda = salario * (ir(0.10))
            total_descontos = imposto_renda + inss
            salario_liquido = salario - total_descontos
        }if(salario > 2500){
            imposto_renda = salario * (ir(0.20))
            total_descontos = imposto_renda + inss
            salario_liquido = salario - total_descontos
        }

            print(`
                SALARIO BRUTO: R$${salario}
                IMPOSTO DE RENDA: R$ ${imposto_renda}
                INSS: R$${inss}
                FGTS: R$${fgts}
                TOTAL DESCONTADO: R$${total_descontos}
                SALARIO LIQUIDO: ${salario_liquido}
            `)
    
}
main()
