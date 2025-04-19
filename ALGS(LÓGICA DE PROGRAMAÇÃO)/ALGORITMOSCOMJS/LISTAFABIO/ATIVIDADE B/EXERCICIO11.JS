// 11- LEIA UM NUMERO INTEIRO(TRES DIGITOS) E ESCREVA O INVERSO DO NUMERO
import {question} from "readline-sync" 
// ENTRADA:
let numero = Number(question("DIGITE UM NUMERO DE TRÊS DIGITOS: "))

// PROCESSAMENTO:
var stra = numero.toString()
// [0],[1].... = isso representa o indice(index) de um array que começa do 0
var a0 = stra[0]
var a1 = stra[1]
var a2 = stra[2]
var inverso = Number(a2+a1+a0)

// // OU

// .toString() = vai transformar a entrada(numero) em uma string(poderia ser feito de maneira direta sem a convenção para após, converter)
// .split() = é uma função em js que separa todos os elementos da string
// .reverse() = é um metodo que pertence ao array, que tem como finalidade inverter a ordem dos elementos
// .join("") = tem como finalidade juntar e formar um unico elemento string
// var stra = a.toString()
// var inverso = Number(stra.split("").reverse().join(""))

// SAÍDA:
console.log(`
    NUMERO ESCOLHIDO: ${numero}
    NUMERO INVERTIDO: ${inverso}    
`)