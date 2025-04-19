import { get_number, print } from "./apelidos.js";

function main() {
    let N = get_number("INFORME UM VALOR PARA N E OBTENHA A SEQUÊNCIA DE FIBONACCI: ");
    let ResultadoNovo = 1;
    let ResultadoAnterior = 0;
    let SequenciaFibonacci = "0, 1"; 

    for (let i = 2; i < N; i++) { 
        let proximoNumero = ResultadoNovo + ResultadoAnterior;
        SequenciaFibonacci += ", " + proximoNumero;
        ResultadoAnterior = ResultadoNovo;
        ResultadoNovo = proximoNumero;
    }

    print(SequenciaFibonacci);
}

main();
