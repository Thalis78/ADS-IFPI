// 24 - Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes.  Vale lembrar que o 
// coeficiente A deve ser diferente de 0 (zero). 
// ax²+bx+c=0
// FORMULA DELTA: b² - 4ac
// x = -b+-raiz de b²-4.ac/2a

import { get_number, print, square_root } from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    let a = get_number("INFORME UM VALOR INTEIRO PARA A: ")
    let b = get_number("INFORME UM VALOR INTEIRO PARA B: ")
    let c = get_number("INFORME UM VALOR INTEIRO PARA C: ")

    let delta = (b**2)  - 4*(a)*(c)

    let x1 = ((-b)+square_root(delta))/(2*a)
    let x2 = ((-b)-square_root(delta))/(2*a)

    return diferente(a,b,c,delta,x1,x2)
}
function diferente(a,b,c,d,x1,x2){
    if(a !== 0){
        print(`
        VALORES : A = ${a}, B = ${b}, C = ${c}
        DELTA: ${d}
        X¹: ${x1}
        X²: ${x2}
       `)
    }else{
        print("O VALOR DE '(A)' PRECISA SER DIFERENTE DE 0")
    }
}
main()