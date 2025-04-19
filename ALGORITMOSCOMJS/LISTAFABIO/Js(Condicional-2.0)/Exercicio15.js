// Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
//                         Até 5 Kg           Acima de 5 Kg 
//  Morango         R$ 2,50 por Kg          R$ 2,20 por Kg 
//  Maçã               R$ 1,80 por Kg          R$ 1,50 por Kg 
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
// ainda  um  desconto  de  10%  sobre  este  total.  Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de 
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 

import { get_number ,print} from "./apelidos.js";

function main(){
    let morango = get_number("INFORME A QUANTIDADE DE KG DO MORANGO: ")
    let maca = get_number("INFORME A QUANTIDADE DE KG DE MACA: ")

    function mo(valor){
        let valor_morango = morango * (valor)
        return valor_morango
    }
    function ma(valor){
        let valor_maca = maca * (valor)
        return valor_maca
    }
    let valor_total;
    let quantidade_kg;
    if(desconto){
        valor_total = mo(2.20)+ma(1.50)
        quantidade_kg = morango + maca
        if(quantidade_kg >= 8){
            print(`
            VALORES: MORANGO:R$ ${0.22*10}; MAÇA:R$ ${(0.15*10).toFixed(2)}
            QUANTIDADE DE MORANGO EM KG:${morango.toFixed(2)}
            QUANTIDADE DE MAÇA POR KG: ${maca.toFixed(2)}
            VALOR TOTAL MORANGO:R$${mo(2.20)}
            VALOR TOTAL MACA:R$${ma(1.50)}
            DESCONTO DE 10% : R$${(valor_total*0.10)}
            VALOR TOTAL: R$${(valor_total - (valor_total*0.10)).toFixed(2)}
        `)
    }else if(quantidade_kg > 5 && quantidade_kg < 8){       
         print(`
        VALORES: MORANGO:R$ ${0.22*10}; MAÇA:R$ ${(0.15*10).toFixed(2)}
        QUANTIDADE DE MORANGO EM KG:${morango.toFixed(2)}
        QUANTIDADE DE MAÇA POR KG: ${maca.toFixed(2)}
        VALOR TOTAL MORANGO:R$${mo(2.20)}
        VALOR TOTAL MACA:R$${ma(1.50)}
        VALOR TOTAL: R$${valor_total.toFixed(2)}
`)
    }else{
    valor_total = mo(2.50)+ma(1.80)
    print(`
    VALORES: MORANGO:R$ ${0.25*10}; MAÇA:R$ ${(0.18*10).toFixed(2)}
    QUANTIDADE DE MORANGO EM KG:${morango.toFixed(2)}
    QUANTIDADE DE MAÇA POR KG: ${maca.toFixed(2)}
    VALOR TOTAL MORANGO:R$${mo(2.50)}
    VALOR TOTAL MACA:R$${ma(1.80)}
    VALOR TOTAL: R$${valor_total.toFixed(2)}
`)
    }
}
    }
function desconto(morango,maca){
    return morango > 5 && maca > 5
}main()