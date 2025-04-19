// Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
// 1. Álcool: 
// · até 20 litros, desconto de 3% por litro 
// · acima de 20 litros, desconto de 5% por litro 
// 2. Gasolina: 
// · até 20 litros, desconto de 4% por litro 
// · acima de 20 litros, desconto de 6% por litro. 
//  Escreva  um  algoritmo  que  leia  o  número  de  litros  vendidos,  o  tipo  de  combustível  (codificado  da 
// seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que 
// o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

import { get_number, input, print } from "./apelidos.js";

function main() {
    let gasolina = input(`
        POSTO DE COMBUSTIVEL
        TIPOS DE COMBUTIVEL
        A - ALCOOL
        G - GASOLINA
        TIPO DE GASOLINA: `).toUpperCase()
    return tipo_gasolina(gasolina)
}
function tipo_gasolina(gasolina) {

    switch (gasolina[0]) {
        case "A":
            let alcool = get_number(`
        QUANTOS LITROS DE ALCOOL VOCE DESEJA COLOCAR:
        QUANTIDADE: `)
            function litro(alcool) {
                if (alcool > 20) {
                    let valor_desconto = (alcool * 3.90) * 0.05
                    let valor_total = (alcool * 3.90)
                    print(`
                    QUANTIDADE DE LITROS: ${alcool}
                    VALOR DESCONTADO: R$${valor_desconto}
                    VALOR TOTAL SEM DESCONTO : R$${valor_total}     
                    VALOT TOTAL COM DESCONTO : R$${valor_total - valor_desconto}   
                `)
                } else {
                    let valor_desconto = (alcool * 3.90) * 0.03
                    let valor_total = (alcool * 3.90)
                    print(`
                    QUANTIDADE DE LITROS: ${alcool}
                    VALOR DESCONTADO: R$${valor_desconto}
                    VALOR TOTAL SEM DESCONTO: R$${valor_total}
                    VALOT TOTAL COM DESCONTO : R$${valor_total - valor_desconto}   
                `)
                }

            }
            return litro(alcool)
            break
        case "G":
            let gasolina = get_number(`
        QUANTOS LITROS DE GASOLINA VOCE DESEJA COLOCAR:
        QUANTIDADE: `)
            function litro02(gasolina) {
                if (gasolina > 20) {
                    let valor_desconto = (gasolina * 5.40) * 0.06
                    let valor_total = (gasolina * 5.40)
                    print(`
                QUANTIDADE DE LITROS: ${alcool}
                VALOR DESCONTADO: R$${valor_desconto}
                VALOR TOTAL SEM DESCONTO: R$${valor_total}
                VALOR TOTAL COM DESCONTO: R$${valor_total - valor_desconto}        
                `)
                } else {
                    let valor_desconto = (gasolina * 5.40) * 0.04
                    let valor_total = (gasolina * 5.40)
                    print(`
                    QUANTIDADE DE LITROS: ${alcool}
                    VALOR DESCONTADO: R$${valor_desconto}
                    VALOR TOTAL SEM DESCONTO: R$${valor_total}
                    VALOR TOTAL COM DESCONTO: R$${valor_total - valor_desconto}
                `)
                }
            } 
        return litro02(gasolina)
        break
        default:
            print("ESCOLHA UMA DAS OPÇÕES ACIMA")

    }
} main()
