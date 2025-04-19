// Escreva  um  algoritmo  que  leia  a  razão  de  uma  PA  (Progressão  Aritmética)  e  o  seu  primeiro  termo  e 
// escreva os N termos da PA.  Ler o valor de N

import { get_number, print } from "./apelidos.js";

function main() {
    let razao = get_number("INFORME A RAZÃO DA PA: ");
    let primeiro_termo = get_number("INFORME O PRIMEIRO TERMPO: ");
    let n = get_number("INFORME O NUMERO DE TERMOS: ");

    print(`>>>>>>>>> OS ${n} TERMOS DA PA SÃO: <<<<<<<<<<<<<<<`);
    while (i < n) {
        let termo = primeiro_termo + i * razao;
        print(`TERMO ${i + 1}: ${termo}`);
        i++
}}
main()
