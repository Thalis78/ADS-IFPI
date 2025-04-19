// Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de 
// um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área 
// não pode ser negativo.
// coordenadas (x1, y1) e (x2, y2). 
// Area = comprimento x largura

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    function x(numero){
        let x = get_number(`INFORME O VALOR DE X${numero}:`)
        return x
    }
    function y(numero){
        let y = get_number(`INFORME O VALOR DE Y${numero}:`)
        return y
    }

    let x1 = x("1")
    let x2 = x("2")
    let y1 = y("1")
    let y2 = y("2")

    return area_retangulo(x1,x2,y1,y2)
}
function area_retangulo(x1,x2,y1,y2){
    if(x2 > x1 && y2 > y1){
        let comprimento = (x2 - x1)
        let largura = (y2 - y1)
        let area = comprimento * largura

        print(`
            VALORES DE X : ${x1},${x2}
            VALORES DE Y : ${y1},${y2}
            VALOR DO COMPRIMENTO: ${comprimento}
            VALOR DA LARGURA: ${largura}
            AREA: ${comprimento} x ${largura} = ${area}

        `)
    }
}
main()