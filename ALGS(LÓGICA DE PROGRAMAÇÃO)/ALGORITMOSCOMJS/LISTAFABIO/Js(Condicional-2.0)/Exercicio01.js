// Leia um número e mostre na tela se o número é positivo ou negativo.
import {get_number, print} from "../Js(Condicional-2.0)/apelidos.js"
function main(){
    let numero = get_number("INFORME UM NUMERO? ")

    let positivo = numero_positivo(numero) ? "POSITIVO" : "NEGATIVO"

    print(`
    NUMERO ESCOLHIDO: ${numero}
    ESSE NUMERO É ${positivo}.
    `)
}
function numero_positivo(num){
    return num >= 0
}
main()