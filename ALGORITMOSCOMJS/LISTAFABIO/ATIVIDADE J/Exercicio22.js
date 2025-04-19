// Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
// de divisão (/ e %) sejam utilizados.

import { get_number ,print} from "./apelidos.js";

function main(){
    let numero01;
    let numero02
    while(true){
        let num01 = get_number("INFORME UM NUMERO QUALQUER: ")
        let num02 = get_number("INFORME UM OUTRO NUMERO QUALQUER: ")
        if(num02 > num01){
            print("NÃO FOI POSSIVEL REALIZAR A DIVISÃO POIS O SEGUNDO NUMERO É MAIOR QUE O PRIMEIRO")
            break
        }else{
            numero01 = num01;
            numero02 = num02;
            break
        }
    }
    let divisao = numero02
    let contador = 1;
    let resultado_divisao = (numero01 / numero02)
    while(contador < parseInt(resultado_divisao)){
        contador+=1
        divisao += numero02
        if(numero01 < numero02){
            break
        }

    }
    print(numero02 === undefined ? "TENTE NOVAMENTE" :`
    >>>>>>>>>>>>> RESULTADO GERAL <<<<<<<<<<<<<
    | ---> ${numero01} / ${numero02} = ${contador}
    | ---> RESTO DIVISÃO : ${parseInt((resultado_divisao - contador) * numero02)}`);
}main()