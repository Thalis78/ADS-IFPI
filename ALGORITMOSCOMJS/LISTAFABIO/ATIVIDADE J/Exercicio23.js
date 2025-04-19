import { get_number, print } from "./apelidos.js";

function main() {
    let razao = get_number("INFORME O VALOR DA RAZÃO: ");
    let primeiro_termo = get_number("INFORME O PRIMEIRO TERMO:  ");
    let n= get_number("INFORME O NUMERO DO TERMO: ");
    let i = 0;
    print(`>>>>>>>>> OS ${n} TERMOS DA PG SÃO: <<<<<<<<<<<<<<<`);
    while (i < n) {
        let termo = primeiro_termo * Math.pow(razao, i);
        print(`TERMO ${i + 1}: ${termo}`);
        i++
    }
}

main();
