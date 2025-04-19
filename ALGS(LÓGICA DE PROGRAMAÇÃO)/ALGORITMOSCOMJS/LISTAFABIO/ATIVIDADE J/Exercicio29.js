// Escreva  um  algoritmo  que  calcula  o  retorno  de  um  investimento  financeiro.  O  usuário  deve  informar 
// quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo  do 
// investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se 
// deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00 
// por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída: 
// Saldo do investimento após 1 ano: 1268.25 
// Deseja processar mais um ano (S/N) ? 

import { get_number, print } from "./apelidos.js";

function main(){
    let total_investimento = 0;
    let investimento_mensal = get_number("QUANTO VOCÊ DESEJA INVESTIR MENSALMENTE? ")
    let meses = 12;
    let ano = 1;
    let investimento_total_mensal = investimento_mensal * (ano * 12) 
    let investimento = 0.01;
    while(true){
        investimento_mensal = investimento_mensal + (investimento_mensal * investimento)
        total_investimento += investimento_mensal
        meses --
        if(meses === 0){
            let novo_investimento = get_number("VOCÊ DESEJA FAZER UM INVESTIMENTO DE MAIS UM ANO? 1 - SIM , 2 - NÃO")
            if(novo_investimento === "sim"){
                ano+=1
                meses=12
            }
            else{
                break
            }

        }
    }
    print(`
        >>>>>>>>>>>>> RESULTADO DO INVESTIMENTO <<<<<<<<<<<<<
        | ---> TOTAL INVESTIDO MENSALMENTE: R$${investimento_total_mensal}
        | ---> QUANTIDADE TOTAL DE MESES: ${ano} ANOS OU ${ano * 12}  MESES
        | ---> LUCRO: R$${(total_investimento - investimento_total_mensal).toFixed(2)}
        | ---> RENDIMENTO TOTAL : R$${total_investimento.toFixed(2)}
    `
    )
}main()