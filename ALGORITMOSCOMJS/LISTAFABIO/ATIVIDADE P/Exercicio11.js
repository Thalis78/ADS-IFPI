// Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
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
        if(((resto(limite_inicial,2)) && resto(limite_inicial,3) && resto(limite_inicial,5))|| limite_inicial === 2 || limite_inicial === 3 || limite_inicial ===5){
            print(`---> ${limite_inicial}, PRIMO`)
        }
    }
    
    function resto(limite_inicial,porcentagem){

        return (limite_inicial%porcentagem) !== 0;
    }

}main()