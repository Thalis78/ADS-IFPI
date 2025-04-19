// Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea 
// (IMC = peso / altura2).  Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso 
// (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).


import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js";


function main(){
    let altura = get_number("INFORME SUA ALTURA EM METROS: ")
    let peso = get_number("INFORME SEU PESO EM KG: ")

    const imc = (peso / (altura*altura)).toFixed(2)
    return resultado(altura,peso,imc)
}
function resultado(alt,p,imc){
    if(imc > 18 && imc <=25){
        print(`
            ALTURA: ${alt}
            PESO: ${p}
            RESULTADO DO IMC: ${imc}
            VOCÊ ESTÁ NO SEU PESO IDEAL
        `)
    }else if(imc > 25 && imc<=30){
        print(`
        ALTURA: ${alt}
        PESO: ${p}
        RESULTADO DO IMC: ${imc}
        VOCÊ ESTÁ OBESO
    `)
    }else if(imc > 30){
        print(`
        ALTURA: ${alt}
        PESO: ${p}
        RESULTADO DO IMC: ${imc}
        VOCÊ ESTÁ COM OBESIDADE MÓRBIDA
    `)
    }else{
        print(`
        ALTURA: ${alt}
        PESO: ${p}
        RESULTADO DO IMC: ${imc}
        VOCÊ ESTÁ ABAIXO DO PESO
    `)
    }
}
main()