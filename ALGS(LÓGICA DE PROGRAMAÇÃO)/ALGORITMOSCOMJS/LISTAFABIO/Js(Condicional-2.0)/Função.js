import { question } from "readline-sync";

function nota(){
    let nota =  Number(question("DIGITE UMA NOTA:"))
    return nota
}

let nota01 = nota()
let nota02 = nota()
let nota03 = nota()
let nota04 = nota()
console.log(nota01)
console.log(nota04)

// console.log(resultado(nota,nome))


// function resultado(n,nome){
//     if(n > 7){
//         console.log(`
//             NOTA: ${n}
//             NOME DO ALUNO: ${nome}
//             SITUAÇÃO: APROVADO
//         `)
//     }
//     else{
//         console.log(`
//         NOTA: ${n}
//         NOME DO ALUNO: ${nome}
//         SITUAÇÃO: APROVADO
//     `)
//     }
// }



