
import { get_number, print } from "./apelidos.js";

function main() {
    let N = get_number("INFORME O VALOR DE N: ");
    let S = "";
    let CountDuplo = 1;
    for (let Count = 1; Count <= N; Count++) {
        if(Count === N){
            S += `${CountDuplo}/${Count}  `; 
            break;
        }else{
            S += `${CountDuplo}/${Count} +  `;
        }
        CountDuplo+=2;

    }

    print(S);
}
main();
