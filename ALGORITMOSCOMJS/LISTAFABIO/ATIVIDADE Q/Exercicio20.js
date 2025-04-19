
import { get_number, print } from "./apelidos.js";

function main() {
    let N = get_number("INFORME O VALOR DE N: ");
    let S = "";

    for (let Count = 1; Count <= N; Count++) {
        if(Count === N){
            S += `${1}/${Count}  `; 
            break;
        }else if(Count >= 1 && Count % 2 !== 0){
            S += `${1}/${Count} -  `;
        }else{
            S += `${1}/${Count} +  `;
        }
    }

    print(S);
}
main();
