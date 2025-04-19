// 06 - Escreva a tabuada dos números de 1 a 10. 
import { print } from "./apelidos.js";

function resultado(n,n1){
    print(`
    -------TABUADA DO ${n}-------`)
    return tabuada(n1)
}
function tabuada(n){
    for(let i = 10; i > 0; i--){
        print(
            `    ---> ${n} x ${i} = ${n* i}`)
}}
for(let tabuada = 1; tabuada <= 10; tabuada++){
    resultado(tabuada,tabuada)
}