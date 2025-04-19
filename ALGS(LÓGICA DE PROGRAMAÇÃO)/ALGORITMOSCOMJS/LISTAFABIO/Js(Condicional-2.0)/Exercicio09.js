// Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro 
// valor deve aparecer valor inválido.

import { get_number , print} from "./apelidos.js";

function main(){
    let semana = get_number(`
        INFORME UM  NUMERO E OBTENHA O DIA CORRESPONDENTE A ESSE NUMERO
        ESCOLHE ENTRE 01 A 07 
        NUMERO: `)
    return dia(semana)
}
function dia(semana){
    switch (semana){
        case 1:
            print(`
            DOMINGO
            `)
            break
        case 2:
            print(`
            SEGUNDA-FEIRA
            `)
            break
        case 3: 
            print(`
            TERÇA-FEIRA
            `)
            break
        case 4:
            print(`
            QUARTA-FEIRA
            `)
            break
        case 5:
            print(`
            QUINTA-FEIRA
            `)
            break
        case 6: 
            print(`
            SEXTA-FEIRA
            `)
            break
        case 7:
            print(`
            ]SABADO
            `)
            break
        default:
            print(`
            ESCOLHA UMA DAS OPÇÕES A ACIMA
            `)
    }
}
main()