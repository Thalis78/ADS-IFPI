// Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
// crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
// crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
// necessários, para que a população da cidade A ultrapasse a população da cidade B.

import { print } from './apelidos.js'

// A = 200.000,CRESCIMENTO DE 3.5%(ANUAL)
// B = 800_000,CRESCIMENTO DE 1.35%(ANUAL)
// PROGRAMA PARA VER A QUANTIDADE DE ANOS NECESSARIO PARA CIDADE A ANTIGIR A CIDADE B
// let a = 200_000 + (200_000 * 0.035)
// let b = 800_000 + (800_000 * 0.0135)

function main(){
    let a = 200000;
    let b = 800000;
    let anos = 0;
    while(a < b){
        anos++
        a+=(a + formula(a,0.035))
        b+=(b + formula(b,0.0135))

    }
    print(`
    >>>>>>>>>>>>>>> RESULTADO <<<<<<<<<<<<<<<<
    | ----> QUANTIDADE DE ANOS: ${anos} ANOS
    -------------------------------------------
    `)
}
function formula(numero,porcentagem){
    return numero * porcentagem
}main()