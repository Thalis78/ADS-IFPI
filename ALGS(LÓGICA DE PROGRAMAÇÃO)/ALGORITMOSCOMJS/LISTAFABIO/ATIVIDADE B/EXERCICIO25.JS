// Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import { question } from "readline-sync";

// ENTRADA:
var metros = Number(question("INFORME UMA MEDIDA EM METROS(M)? "))

// PROCESSAMENTO:
var quilometro = Math.floor(metros/1000)
var resto_metros = metros%1000

// SAÍDA:
console.log(`
    METROS INFORMADO PELO USUARIO: ${metros}
    ISSO EQUIVALE A ${quilometro} KM e ${resto_metros} M

`)