// Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

import { get_number, print } from "./apelidos.js";

function main(){
    let limite_superior = limite("SUPERIOR")
    let limite_inferior = limite("INFERIOR")

    print(impares(limite_inferior , limite_superior))

}
function limite(texto){
    let limite = get_number(`INFORME O LIMITE ${texto}: `)
    return limite
}
function impares(limite_inferior,limite_superior){
    let limite_inicial = limite_inferior;
    for(limite_inicial; limite_inicial <= limite_superior; limite_inicial++){
        if((limite_inicial%2) !== 0){
            print(`---> ${limite_inicial}, IMPAR`)
        }
    }


}
main()