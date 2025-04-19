
import { get_number, print } from "./apelidos.js";

// OBSERVAÇÃO: 

function main(){
    let RendaMensal = Renda();
    let ValorEmprestimo = Emprestimo();
    let PrazoDesejado = Prazo();
    let IOF = ((0.38 * ValorEmprestimo) + ((ValorEmprestimo *0.0082)* (30*PrazoDesejado))).toFixed(2);
    let JurosPagar = Juros(PrazoDesejado,ValorEmprestimo);
    let TotalPagar = JurosPagar * PrazoDesejado + ValorEmprestimo;
    let SituacaoEmprestimo = Situacao(JurosPagar,RendaMensal);
    Mensagem(ValorEmprestimo,IOF,JurosPagar,TotalPagar,PrazoDesejado,SituacaoEmprestimo,PrazoDesejado)
}
function Mensagem(ValorEmprestimo,IOF,JurosPagar,TotalPagar,PrazoDesejado,SituacaoEmprestimo,prazo){
    print(`
        ------------------- RESULTADO DO EMPRESTIMO -----------------
        | ---> VALOR PEDIDO: R$${ValorEmprestimo}
        | ---> VALOR DO IOF: R$${IOF}
        | ---> VALOR DO JUROS A PAGAR: R$${JurosPagar}
        | ---> VALOR TOTAL A PAGAR : R$${TotalPagar}
        | ---> VALOR DE PARCELAS ESCOLHIDA: ${PrazoDesejado}x DE R$${TotalPagar/prazo}
        | ---> RENDA MENSAL SUPORTE A PARCELA: ${SituacaoEmprestimo}
    `)
}
function Renda(){
    let renda = get_number("INFORME SUA RENDA: R$");
    return renda;
}
function Emprestimo(){
    let emprestimo = get_number("INFORME O VALOR DO EMPRESTIMO: R$");
    while(emprestimo < 1200){
        emprestimo = get_number("INFORME O VALOR DO EMPRESTIMO: R$");
    }
    return emprestimo;
}
function Prazo(){
    let prazo = get_number("INFORME O PRAZO(MESES) QUE VOCÊ QUER PAGAR ESSE EMPRESTIMO");
    while(prazo < 2 || prazo > 24){
        prazo =  get_number("INFORME O PRAZO(MESES) QUE VOCÊ QUER PAGAR ESSE EMPRESTIMO");
    }return prazo;
}
function Juros(PrazoDesejado,ValorEmprestimo){
    if(PrazoDesejado <= 6){
        return (ValorEmprestimo/PrazoDesejado) * 0.50;
    }else if(PrazoDesejado <= 12){
        return (ValorEmprestimo/PrazoDesejado) * 0.75;
    }else if(PrazoDesejado <= 18){
        return (ValorEmprestimo/PrazoDesejado) * 1.0;
    }
    return  (ValorEmprestimo/PrazoDesejado) * 1.3;
}
function Situacao(JurosPagar,RendaMensal){
        if(RendaMensal * 0.40 >= JurosPagar){
            return "APROVADO"
        }else{
            return "REPROVADO"
        }
}main();