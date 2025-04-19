// 05 Leia um número, calcule e escreva seu fatorial.
// 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1

import { get_number, int } from "./apelidos.js";


function calcularFatorial(numero) {
    if (numero < 0) {
        return "NUMERO INVALIDO, INSIRA VALORES POSITIVO PARA OBTER A FATORIAL";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; ++i) {
            fatorial *= i;
        }
        return fatorial;
    }
}

let numero = get_number("DIGITE UM NUMERO PARA CALCULAR A FATORIAL: ");
numero = int(numero);
const resultado = calcularFatorial(numero);


console.log(`O FATORIAL DE ${numero} É: ${resultado}`);
