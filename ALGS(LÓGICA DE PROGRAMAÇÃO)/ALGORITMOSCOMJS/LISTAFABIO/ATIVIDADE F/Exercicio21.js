// Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for 
// maior  do  que  ou  igual  a  0,5,  o  numero  é  arredondado  para  o  inteiro  imediatamente  superior,  caso 
// contrario, é arredondado para o inteiro imediatamente inferior

import { question } from "readline-sync";

function main(){
    let numero  = 6.4

    var parte_fracionada = numero - parseInt(numero)

    return arredondar(numero,parte_fracionada)

}

function arredondar(numero,parte_fracionada){
    if(parte_fracionada > 0.5){
        console.log(`
            NUMERO ESCOLHIDO: ${numero}
            ARREDONDADO PARA O INTEIRO SUPERIOR: ${Math.round(numero)}
        `)
    }
    else{
        console.log(`
        NUMERO ESCOLHIDO: ${numero}
        ARREDONDADO PARA O INTEIRO INFERIOR: ${Math.floor(numero)}
    `)
    }
}
main()