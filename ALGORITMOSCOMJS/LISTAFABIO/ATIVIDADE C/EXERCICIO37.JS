// Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import { question } from "readline-sync";

// ENTRADA:
var idade_dia = Number(question("ME INFORMA UMA QUANTIDADE DE DIAS PARA CONVERTER EM DIAS,MESES E ANOS: "))

// PROCESSAMENTO:
var anos = Math.floor(idade_dia/365)
var resto_anos = (idade_dia%365)
var meses = Math.floor(resto_anos/30)
var dias = resto_anos%30

// SAÍDA:
console.log(`
    QUANTIDADE DE DIAS EXATOS: ${idade_dia}
    DADOS CONVERTIDO:{
        ANOS: ${anos}
        MESES: ${meses}
        DIAS: ${dias}
    }
`)