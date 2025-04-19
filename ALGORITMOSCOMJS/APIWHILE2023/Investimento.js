// Mariana  resolveu  investir  de  parte  de  seu  salário 
//  (um  pedaço(R$)  inferior  a  30%)  de  forma  fixa  mensal;  O  investimento 
//  escolhido  rende  mensalmente  a  uma  taxa  de  juros  de  0,01%  até  1,00 
//  %  sobre  o  saldo  do  mês.  Mariana  tem  um  dado  objetivo  com  este 
//  investimento.  Pergunte  a  ela  qual  o  objetivo  e  de  quanto  ela  precisa 
//  para  realizá-lo.  Além  disso,  peça  o  salário,  quanto(%)  ela  pretende 
//  investir   mensalmente   e   qual   a   taxa   de   juros   do   investimento 
//  escolhido.   Em   seguida   mostre   em   quantos   meses   ela   atingirá   o 
//  objetivo.  Se  for  acima  de  12  meses  mostre-o  em  anos  e  meses.  A 
//  cada   mês   você   deve   atualizar   o   saldo   primeiro   com   o   aporte 
//  (depósito  de  valor  do  salário)  e  depois  aplicar  os  créditos  dos  juros 
// sobre esse novo saldo. Faça isso enquanto o objetivo não for
// alcançado, contando os meses para serem exibidos como se pede.

// OBSERVAÇÕES: 30% DO SALARIO OU INFERIOR(INVESTIMENTO);
// TAXA DE JUROS DE 0,01% A 1,00% SOBRE O SALDO DO MÊS;
// QUAL É O OBJETIVO E QUANTO ELA PRECISA PRA REALIZAR;
// QUANTOS MESES ELA ATINGIRÁ O OBJETIVO; 
// CASO SEJA ACIMA DE 12 MESES, MOSTRE EM ANOS OU MESES;
// O SALDO MENSAL DEVE SER ATUALIZADO E DEPOIS APLICAR OS CRÉDITOS DOS JUROS;
// FAÇA ISSO ENQUANTO O OBJETIVO NÃO FOR ALCANÇADO(WHILE);

import { get_number, input, print } from "./apelidos.js"

function main(){
    let Salario = SalarioUsuario(); //SALARIO TOTAL; A PARTIR DELE VAMOS EXTRAIR O INVESTIMENTO ABAIXO DOS (30%)
    let Juros = 0.01;  // JUROS É PRA DEFINIR O VALOR DOS JUROS MENSAIS;
    let porcentagem = Porcentagem();
    let Objetivo = ValorTotalObjetivo(); //OBJETIVO VAI SERVIR PRA ELA INFORMAR O OBJETIVO E O VALOR DESSE OBJETIVO
    let Meses = MesesObjetivo(Salario,Objetivo,porcentagem);// O PROGRAMA VAI MOSTRAR A QUANTIDADE DE MESES E O TOTAL DE INVESTIMENTO PRA CHEGAR NO OBJETIVO
    let Ano = 0; 
    let TotalMeses = 0;
    let investimentoMensal = SaldoMensal(Salario,porcentagem);//SALDO MENSAL VAI MOSTRAR O SALDO ANTES DO JUROS ACRESCIDO;
    let ValorJurosAcrescido = ValorAcrescido(Salario,porcentagem,Juros);// VAI MOSTRAR O VALOR DOS JUROS MENSAIS;
    let ValorTotalMensal = investimentoMensal + ValorJurosAcrescido; //ISSO VAI GERAR O VALOR TOTAL EM CADA MES, O INVESTIDO MAIS O JURO MENSAL;
    let ValorTotalComJurosAteObjetivo = 0 ; 
    let SaldoAnterior = 0;
    while(ValorTotalComJurosAteObjetivo <= Objetivo){
        TotalMeses++;
        if(TotalMeses === 12){
            Ano++
            TotalMeses = 0;
        }
        ValorTotalComJurosAteObjetivo += ValorTotalMensal;
        print(`
            |----> SALDO ANTERIOR: ${SaldoAnterior}
            |----> INVESTIMENTO MENSAL: ${investimentoMensal}
            |----> JUROS MENSAL: ${ValorJurosAcrescido}
            |----> NOVO SALDO: ${ValorTotalComJurosAteObjetivo}
        `)
        SaldoAnterior = ValorTotalComJurosAteObjetivo;
    }
    Mensagem(investimentoMensal,Ano,TotalMeses,ValorTotalComJurosAteObjetivo)
}
function SalarioUsuario(){
    let SalarioDoUsuario = get_number("INFORME SEU SALARIO: R$");
    return SalarioDoUsuario;
}
function Porcentagem(){
    let QuantidadeInvestimento =  get_number("QUANTOS PORCENTO DO SEU SALARIO VOCÊ CONSEGUE DEPOSITAR PRA INVESTIR? NÃO PODE SER UM VALOR ALÉM DE 30%: %");
    while(QuantidadeInvestimento >= 30){
        QuantidadeInvestimento =  get_number("QUANTOS PORCENTO DO SEU SALARIO VOCÊ CONSEGUE DEPOSITAR PRA INVESTIR? NÃO PODE SER UM VALOR ALÉM DE 30%: %");
    }
    return QuantidadeInvestimento / 100;
}
function ValorTotalObjetivo(){
    let Objetivo = input("QUAL É O SEU OBJETIVO? ");
    let TotalObjetivo = get_number("INFORME QUANDO VOCÊ PRECISA PRA CUMPRIR ESSE OBJETIVO? R$");
    return TotalObjetivo;
}
function MesesObjetivo(Salario,Objetivo,porcentagem){
    return parseInt(Objetivo / (Salario * porcentagem));
}
function SaldoMensal(Salario,porcentagem){
    return (Salario * porcentagem);
}
function ValorAcrescido(Salario,porcentagem,juros){
    return (Salario * porcentagem) * juros
}
function Mensagem(investimentoMensal,anos,TotalMeses,ValorTotalComJurosAteObjetivo){
    print(`
    ------------------------TOTAL INVESTIMENTO --------------------------
    | ----> INVESTIMENTO MENSAL: ${investimentoMensal}
    | ----> ANOS: ${anos}
    | ----> MESES: ${TotalMeses}
    | ----> SALDO FINAL: R$ ${ValorTotalComJurosAteObjetivo}
    `)
}main();