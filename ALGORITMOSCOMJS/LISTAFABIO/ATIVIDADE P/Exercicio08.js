import { get_number , print} from "./apelidos.js"

// 08 - Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
let N = get_number("INFORME UM NUMERO QUALQUER: "); 
let Limite_inferior = get_number("INFORME O LIMITE INFERIOR: ")
let Limite_Superior = get_number("INFORME O LIMITE SUPERIOR: ")
print(`NUMEROS MULTIPLOS DE: ${N}`)
for(Limite_inferior; Limite_inferior <= Limite_Superior;Limite_inferior++){
    let multiplos = Limite_inferior % N
    if(multiplos == 0){
        print(`---> ${Limite_inferior}`)
    }
}