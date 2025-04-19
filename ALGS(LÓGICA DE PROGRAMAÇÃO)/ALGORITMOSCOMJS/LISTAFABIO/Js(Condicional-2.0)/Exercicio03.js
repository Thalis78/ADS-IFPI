// Leia uma letra e verifique se a letra digitada é vogal ou consoante.

import { input, print } from "./apelidos.js";

function main(){
    let letra = input(`INFORME UMA LETRA:`).toUpperCase()

    if(vogal(letra)){
        print(`
            LETRA ESCOLHIDA :${letra}
            ESSA LETRA É UMA VOGAL
        `)
    }
    else{
        print(`
        LETRA ESCOLHIDA :${letra}
        ESSA LETRA É UMA CONSOANTE
        `)
    }
}

function vogal(letra){
    return (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U")
}
main()

// import { print } from "./apelidos.js"

// function mensagem(s,p,va,ns){
//     print (`
//         O SALARIO INICIAL : ${s}
//         PERCENTUAL:${p}
//         VALOR AUMENTO:${va.toFixed(2)}
//         NOVO SALARIO:${ns.toFixed(2)}
    
//     `)
// }
// mensagem(salario,percentual,valor_aumento,novo_salario)
// mensagem(1000,"10%",(1000*0.1),((1000*0.1)+ 1000))
// mensagem(2000,"10%",(2000*0.1),((2000*0.1)+ 2000))
// mensagem(3000,"10%",(3000*0.1),((3000*0.1)+ 3000))