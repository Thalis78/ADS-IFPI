// 15 - Leia  a  quantidade  de  horas  aula  dadas  por  dois  professores  e  o  valor  por  hora  recebido  por  cada  um. 
// Escreva na tela qual dos professores tem salário total maior. 

import { get_number, input , print } from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    function professor(){
        let nome_professor = input(`
        NOME DO PROFESSOR:
        `)
        let horas_aulas = get_number(`
        QUANTIDADE DE HORAS QUE O PROFESSOR ${nome_professor} MINISTROU
        TOTAL DE HORAS(AULA): `)
        return horas_aulas
    }
    let professor01 = professor()
    let professor02 = professor()

    let horas_valor = (get_number(`
    INSIRA O VALOR DA HORA? R$
    `))
    let salario01 = (professor01 * horas_valor)
    let salario02 = (professor02 * horas_valor)

    return maior_salario(salario01,salario02,professor01,professor02)
}
function maior_salario(salario01,salario02,professor01,professor02){
    if(salario01 > salario02){
        print(`
        O MAIOR SALARIO É DO PRIMEIRO PROFESSOR QUE É DE R$${salario01}
        ENQUANTO O PROFESSOR NUMERO DOIS POSSUI UM SALARIO DE R$${salario02}
        `)
}
    else{
        print(`
        O MAIOR SALARIO É DO SEGUNDO PROFESSOR QUE É DE R$${salario02}
        ENQUANTO O PROFESSOR NUMERO UM POSSUI R$${salario01}`)
    }
}
main()