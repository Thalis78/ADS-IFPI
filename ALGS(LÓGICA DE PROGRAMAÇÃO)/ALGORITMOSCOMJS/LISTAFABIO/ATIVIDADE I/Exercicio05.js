// 05 -Leia  dois  números  X  e  N.  A  seguir,  escreva  o  resultado  das  divisões  de  X  por  N  onde,  após  cada 
// divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2. 

import { get_number, print } from "./apelidos.js";

function main(){
    let x = get_number("INFORME O VALOR DO X: ")
    let n = get_number("INFORME O VALOR DE N: ")

    while(n >= 2){
        x/=n
        n--
        if(n == 2){
            print(`
            RESULTADO DA ULTOMA DIVISÃO: ${x+x} / ${n} = ${x}`)
            break
        }
    }
}main()