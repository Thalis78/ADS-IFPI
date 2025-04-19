// Leia 2 (duas)  notas parciais de um aluno, calcule a média e escreva a mensagem: 
// o "Aprovado", se a média alcançada for maior ou igual a sete; 
// o "Reprovado", se a média for menor do que sete; 
// o "Aprovado com Distinção", se a média for igual a dez.

import { get_number ,print} from "./apelidos.js";

function main(){
    function nota(texto){
        let nota = get_number(`INFORME A ${texto} NOTA: `)
        return nota
    }
    let n1 = nota("1")
    let n2 = nota("2")
    let media = (n1 + n2)/2

    if(distincao(media)){
        resultado("APROVADO COM DISTINÇÃO",n1,n2,media)
    }else if(aprovado(media)){
        resultado("APROVADO",n1,n2,media)
    }else{
        resultado("REPROVADO",n1,n2,media)
    }

    function resultado(texto,n1,n2,media){
        print(`
            NOTA01: ${n1}
            NOTA02: ${n2}
            MEDIA: ${media}
            SITUAÇÃO: ${texto}
        `)
    }
}
function aprovado(media){
    return (media > 7 && media < 10)
}
function distincao(media){
    return (media === 10)
}
main()