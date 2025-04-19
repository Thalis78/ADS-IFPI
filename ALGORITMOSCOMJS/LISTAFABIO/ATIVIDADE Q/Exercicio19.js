
import { get_number, print } from "./apelidos.js";

function main() {
    let N = get_number("INFORME O VALOR DE N: ");
    let S = "";

    for (let Count = 1; Count <= N; Count++) {
        if(Count === N){
            S += `${Count}/${(N+1) - Count}  `; 
            break;
        }else if(Count > 1 && Count % 2 !== 0){
            S += `${Count}/${(N+1) - (Count)} -  `;
        }else if(Count > 1 && Count % 2 === 0){
            S += `${(N+1) - (Count)}/${Count} +  `;
        }else{
            S += `${Count}/${N} -  `;
        }
    }

    print(S);
}

main();
