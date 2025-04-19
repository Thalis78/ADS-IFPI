// Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos 
// o  número  em  dois  números  de  dois  dígitos,  um  composto  pela  dezena  e  pela  unidade,  e  outro  pelo 
// milhar  e  pela  centena,  se  somarmos  estes  dois  novos  números  gerando  um  terceiro,  o  quadrado  deste 
// terceiro número é exatamente o número original de quatro dígitos. Por exemplo: 
// 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025. 

import { get_number , int, square_root,print} from "/users/thali/documents/javascript(condicional)/apelidos.js"

function main(){
    let raiz = get_number("INFORME UM NUMERO DE 4 DIGITOS PARA REALIZAR AS RAIZES: ")
    let milhar = Math.floor(raiz/1000)
    let centena = Math.floor((raiz%1000)/100)
    let dezena = Math.floor(((raiz%1000)%100)/10)
    let unidade = Math.floor(((raiz%1000)%100)%10)

    let raiz_quadrada = square_root(raiz)
    let soma01 = ((milhar*10)+centena) 
    let soma02 = ((dezena* 10)+unidade) 
    let soma_dezena = soma01 + soma02

    return raizQd(soma01,soma02,soma_dezena,raiz_quadrada,raiz)
}
function raizQd(soma01,soma02,soma_dezena,raiz_quadrada,raiz){
if(raiz > 1000 && raiz <= 9999){
    if(raiz_quadrada === int(raiz_quadrada)){
        print(`
            NUMERO ESCOLHIDO:${raiz}
            SOMA DO MILHAR COM A CENTENA:${soma01}
            SOMA DA DEZENA COM A UNIDADE:${soma02}
            A RAIZ É RESULTADO DA PRIMEIRA COM A SEGUNDA SOMA:${soma_dezena}
        
        `)
    }else{
        print(`
            O NUMERO ESCOLHIDO NÃO POSSUI RAIZ
        `)
    }
}else{
    print("INSIRA VALORES ENTRE 1000 A 9999")
}

}
main()