// 02 - Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos. 


import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

// ENTRADA:
function entrada(){
let numero = get_number("ME DIGA UM NUMERO QUALQUER?")
let numero02 = get_number(`ME DIGA OUTRO NUMERO DA SUA PREFERENCIA? `)

return processamento(numero,numero02)

}


// PROCESSAMENTO/SAIDA:
function processamento(numero,numero02){
if(numero > numero02){
    print(`
    NUMERO ESCOLHIDO PELO USUARIO: ${numero} , ${numero02}
    MAIOR NUMERO LIDO: ${numero}
    MENOR NUMERO LIDO: ${numero02}
    `)
}
else if(numero02 > numero){
    print(`
    NUMERO ESCOLHIDO PELO USUARIO: ${numero} , ${numero02}
    MAIOR NUMERO LIDO: ${numero02}
    MENOR NUMERO LIDO: ${numero}
    `)
}
else if(numero === numero02){
    print(`
    NUMERO ESCOLHIDO PELO USUARIO: ${numero} , ${numero02}
    NÃO EXISTE NUMERO MAIOR OU MENOR, AMBOS SÃO IGUAIS.

    `)
}
else{
    print("OPS...ALGUM ERRO ACONTECEU.")
}
}

entrada()