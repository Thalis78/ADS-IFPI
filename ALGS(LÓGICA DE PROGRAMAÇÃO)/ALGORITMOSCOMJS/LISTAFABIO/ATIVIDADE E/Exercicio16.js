// 16 - Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior 
// ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média 
// final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve 
// escreva “Reprovado”

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js";


function main(){
    let nota01 = get_number("PRIMEIRA NOTA:")
    let nota02 = get_number("SEGUNDA NOTA:")

    if (isNaN(nota01) || isNaN(nota02)) {
       print(`INSIRA NÚMEROS VÁLIDOS...`);
    } else {
       print(media(nota01, nota02));
    }
}

function media(nota01,nota02){
    let M = (nota01 + nota02)/2
    if(M >= 7){
        return `
            PRIMEIRA NOTA: ${nota01}
            SEGUNDA NOTA: ${nota02}
            MEDIA:  ${media}
            APROVADO!!!!
        `
    }
    else if(M < 7 && M >=4){

        let exame_final = get_number(`
        PRIMEIRA NOTA: ${nota01}
        SEGUNDA NOTA: ${nota02}
        MEDIA:  ${media}
        VOCÊ ESTÁ DE PROVA FINAL.....
        INFORME SUA NOTA NO EXAME FINAL: `)
        let prova_final = (exame_final + media)/2
        if(prova_final >= 5){
            return `
                MEDIA FINAL: ${prova_final}
                APROVADO!!!
            `
        }
        else{
            return `
                MEDIA FINAL: ${prova_final}
                REPROVADO!!!
            `
        }

    }
    else{
        return `
        PRIMEIRA NOTA: ${nota01}
        SEGUNDA NOTA: ${nota02}
        MEDIA:  ${media}
        MEDIA INFERIOR A 4, REPROVADO DIRETO!.
        
        `
    }
}
main()

