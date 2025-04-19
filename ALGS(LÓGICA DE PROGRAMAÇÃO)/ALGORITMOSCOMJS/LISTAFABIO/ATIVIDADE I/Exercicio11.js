// Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
// matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:
// Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3) / 10
// Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
// aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
// de alunos da turma.

import { get_number, input, print } from "./apelidos.js";

function main(){
    let numero_alunos = get_number("INFORME A QUANTIDADE DE ALUNOS?")
    let aprovados = 0;
    let reprovado = 0;
    let num = 0;
    while(num < numero_alunos){
        let nome = input("INFORME O NOME DO ALUNO: ")
        let nota1 = get_number("NOTA 01: ")
        let nota2 = get_number("NOTA 02: ")
        let nota3 = get_number("NOTA 03: ")
        let peso_total = (nota1 * 2) + (nota2 * 3) + (nota3 * 5)
        let media_total = peso_total / 10
        let resultado = "";
        if(media_total >= 7){
            resultado = "APROVADO"
            aprovados++
        }
        if(media_total < 7) {
            resultado = "REPROVADO"
            reprovado++
        }
        print(`
            NOME: ${nome}
            NOTA 01 : ${nota1}
            NOTA 02 : ${nota2}
            NOTA 03 : ${nota3}
            MEDIA : ${peso_total} / ${10} = ${media_total}
            RESULTADO: ${resultado}
        `)
        num++
    }
    print(`
        QUANTIDADE DE APROVADOS: ${aprovados}
        QUANTIDADE DE REPROVADOS: ${reprovado}
    `)
}main()