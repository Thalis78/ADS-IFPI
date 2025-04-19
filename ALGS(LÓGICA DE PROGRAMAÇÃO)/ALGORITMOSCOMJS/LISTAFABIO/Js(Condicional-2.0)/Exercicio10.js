// Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a 
// sua média. A atribuição de conceitos obedece à tabela abaixo: 
//   Média de Aproveitamento  Conceito 
//   Entre 9.0 e 10.0          A 
//   Entre 7.5 e 9.0           B 
//   Entre 6.0 e 7.5           C 
//   Entre 4.0 e 6.0           D 
//   Entre 4.0 e zero          E 
// O  algoritmo  deve  mostrar  na  tela  as  notas,  a  média,  o  conceito  correspondente  e  a    mensagem 
// “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

import { get_number, print } from "./apelidos.js";


function main(){
    function notas(texto){
        let notas = get_number(`
            INFORME A ${texto} NOTA
            LEMBRE-SE QUE E DE 0 A 10
            NOTA: `)
        return notas
    }
    let nota01 = notas("PRIMEIRA")
    let nota02 = notas("SEGUNDA")
    let media = (nota01 + nota02)/2

    if(AproveitamentoA(media)){
        return resposta(nota01,nota02,media,"A","APROVADO")
    }if(AproveitamentoB(media)){
        return resposta(nota01,nota02,media,"B","APROVADO")
    }if(AproveitamentoC(media)){
        return resposta(nota01,nota02,media,"C","APROVADO")
    }if(AproveitamentoD(media)){
        return resposta(nota01,nota02,media,"D","REPROVADO")
    }if(AproveitamentoE(media)){
        return resposta(nota01,nota02,media,"E","REPROVADO")

    }
}


function resposta(n1,n2,media,texto01,texto02){
    print(` 
        NOTA01: ${n1}
        NOTA02: ${n2}
        MEDIA: ${media}
        APROVEITAMENTO ${texto01}
        SITUAÇÃO:${texto02}
    `)}

AproveitamentoA()
function AproveitamentoA(media){
    return media >= 9 &&  media < 10
}
function AproveitamentoB(media){
    return media >= 7.5 &&  media < 9   
}
function AproveitamentoC(media){
    return media >= 6.5 && media < 7.5
}
function AproveitamentoD(media){
    return media >= 4.0 && media < 6.0
}
function AproveitamentoE(media){
    return media >=0  && media < 4.0
}
main()