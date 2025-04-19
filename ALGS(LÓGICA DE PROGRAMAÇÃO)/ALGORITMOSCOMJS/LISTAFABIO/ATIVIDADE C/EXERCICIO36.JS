// Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import { question } from "readline-sync";

// ENTRADA:
var anos = Number(question("ME INFORME SUA IDADE EM ANOS?"))
var meses = Number(question("ME INFORME A QUANTIDADE DE MESES EXATAS ?"))
var dias = Number(question("ME INFORME A QUANTIDADE DE DIAS? "))

// PROCESSAMENTO:
var idade_dia = (anos*365)+(meses*30)+(dias)


// SAÍDA:
console.log(`
    DADOS FORNECIDO PELO USUARIO:{
        ANOS: ${anos}
        MESES: ${meses}
        DIAS: ${dias}
    }
    QUANTIDADE DE DIAS EXATOS: ${idade_dia} DIAS

`)