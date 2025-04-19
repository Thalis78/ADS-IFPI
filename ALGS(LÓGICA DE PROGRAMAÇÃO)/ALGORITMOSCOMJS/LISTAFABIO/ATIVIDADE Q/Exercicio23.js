// Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
// horas trabalhadas e o seu nº de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
// 40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
// Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
// funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
// líquido do funcionário.

import { get_number, print } from "./apelidos.js";

function main(){
    let codigo = 1;
    let ValorHora = 12;
    let ValorDependentes = 40;
    let HorasTrabalhada ;
    let NumeroDeDependentes;
    let QuantidadeFuncionario = Quantidade();
    let inss;
    let imposto;
    let ValorSalario;
    for(codigo; codigo <= QuantidadeFuncionario;codigo++){
        HorasTrabalhada = Horas() * ValorHora;
        NumeroDeDependentes = Dependentes() * ValorDependentes;
        inss = Inss(HorasTrabalhada);
        imposto = IR(HorasTrabalhada);
        let ValorTotalCobrado = Number(inss) + Number(imposto)
        ValorSalario = (HorasTrabalhada + NumeroDeDependentes) - ValorTotalCobrado
        Mensagem(codigo,HorasTrabalhada,ValorHora,ValorDependentes,NumeroDeDependentes,inss,imposto,ValorSalario)
    }
}
function Horas(){
    return parseInt(get_number("INFORME A QUANTIDADE DE HORAS TRABALHADA?"));
}
function Dependentes(){
    return parseInt(get_number("INFORME A QUANTIDADE DE DEPENDENTES? "));
}
function Quantidade(){
    return parseInt(get_number("QUANTIDADE DE FUNCIONARIO:"));
}
function Inss(HorasTrabalhada){
    return (HorasTrabalhada * 0.085).toFixed(2);
}
function IR(HorasTrabalhada){
    return (HorasTrabalhada * 0.05).toFixed(2);
}
function Mensagem(codigo,HorasTrabalhada,ValorHora,ValorDepentes,NumeroDeDependentes,inss,ir,ValorSalario){
    print(`
        >>>>>>>>>>>>>>>>>>>RESULTADO<<<<<<<<<<<<<<<<<<<<<
        | --->CODIGO                    :00${codigo}
        | --->TOTAL HORAS TRABALHADA    :${HorasTrabalhada/ValorHora}
        | --->GANHO DE HORAS TRABALHADAS:R$${HorasTrabalhada}
        | --->TOTAL DE DEPENDENTES      :${NumeroDeDependentes/ValorDepentes}
        | --->GANHO DE DEPENDENTES      :R$${NumeroDeDependentes}
        | --->INSS                      :R$${inss}
        | --->IR                        :R${ir}
        | --->SALARIO TOTAL             :R$${ValorSalario}
    `)
}main()