// Um  número  é  um  quadrado  perfeito  quando  a  raiz  quadrada  do  número  é  igual  à  soma  das  dezenas 
// formadas pelos seus dois primeiros e dois últimos dígitos.      
// Exemplo: √9801 = 99 = 98 + 01.  O número 9801 é um quadrado perfeito.

import { get_number, square_root , print, int} from "/users/thali/documents/javascript(condicional)/apelidos.js";


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

    return raizQd(raiz,raiz_quadrada,soma_dezena)
}
function raizQd(raiz,raiz_quadrada,soma_dezena){
if(raiz > 1000 && raiz <= 9999){
    if(raiz_quadrada === soma_dezena){
        print(`
            RAIZ ESCOLHIDA PELO USUARIO:${raiz}
            QUADRADO PERFEITO POIS A SOMA É IGUAL O DA RAIZ: ${soma_dezena} = ${raiz_quadrada} 
        `)
    }else if(raiz_quadrada === int(raiz_quadrada)){
        print(`
        RAIZ ESCOLHIDA PELO USUARIO:${raiz}
        NÃO É QUADRADO PERFEITO POIS A SOMA NÃO É IGUAL O DA RAIZ: ${soma_dezena} != ${raiz_quadrada} ,
        PORÉM O NUMERO ESCOLHIDO É RAIZ EXATA
    `)
    }else{
        print(`
            O NUMERO QUE VOCÊ ESCOLHEU NÃO TEM RAIZ EXATA

        `)
    }
}else{
    print("INFORME SOMENTE NUMEROS COM 4 DIGITOS\nEX: 1212")
}
}
main()