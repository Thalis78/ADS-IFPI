// O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira: Até 5 Kg Acima de 5 Kg File R$ 4,90 por Kg R$ 5,80 por Kg Alcatra R$ 5,90 por Kg R$ 6,80 por Kg Picanha R$ 6,90 por Kg R$ 7,80 por Kg Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

import { get_number, input, print } from "./apelidos.js";

function main() {
    function carne() {
        let carne = get_number(`
         ----------------CARNE NA PROMOCAO --------------------
                        (01) - FILE
                        (02) - ALCATRA
                        (03) - PICANHA
                        DIGITE O NUMERO:`)
        return carne
    }

    switch (carne()) {
        case 1:
            let tp_pagamento = input("VAI PAGAR COM O CARTÃO TABAJARA?").toUpperCase()
            let tipo = (tp_pagamento[0]=== "S"  ? (0.05): (0.00))
            let quantidade_kg = input(`
            QUANTOS DE KG QUE VOCE DESEJA: KG `)
            let preco = (quantidade_kg > 5) ? (5.80) : (4.90)
            print(`
            -----------------------PROMOÇÃO------------------------
                    CARNE ESCOLHIDA:${"FILÉ"}
                    QUANTIDADE DE KG: ${quantidade_kg}
                    DESCONTO OBTIDO PELA TABAJARA: ${tipo * 10}%
                    VALOR TOTAL: ${quantidade_kg} x ${preco} = R$${((quantidade_kg * preco)-((quantidade_kg * preco)* tipo)).toFixed(2)}
            ----------------------------------------------------------
            `)
            break
        case 2:
            let tp_pg = input("VAI PAGAR COM O CARTÃO TABAJARA?").toUpperCase()
            let t = (tp_pg[0]=== "S"  ? (0.05): (0.00))
            let quant_kg= input(`
            QUANTOS DE KG QUE VOCE DESEJA: KG `)
            let p = (quant_kg> 5) ? (6.80) : (5.90)
            print(`
            -----------------------PROMOÇÃO------------------------
                    CARNE ESCOLHIDA:${"ACALTRA"}
                    QUANTIDADE DE KG: ${quant_kg}
                    DESCONTO OBTIDO PELA TABAJARA: ${t* 10}%
                    VALOR TOTAL: ${quant_kg} x ${p} = R$${((quant_kg* p) - ((quant_kg * p) * t))}
            ---------------------------------------------------------
        `)
        break
        case 3:
            let pg = input("VAI PAGAR COM O CARTÃO TABAJARA?").toUpperCase()
            let t_p = (pg[0] === "S" ? (0.05) : (0.00)) 
            let kg = input(`
            QUANTIDADE DE KG QUE VOCE DESEJA: KG `)
            let valor = (kg > 5) ? (7.80) : (6.90)
            print(`
            -----------------------PROMOÇÃO------------------------
                    CARNE ESCOLHIDA:${"PICANHA"}
                    QUANTIDADE DE KG: ${kg}
                    DESCONTO OBTIDO PELA TABAJARA: ${t_p * 10}%
                    VALOR TOTAL: ${kg} x ${valor} = R$${((kg*valor) - ((kg * valor)*t_p))}
            --------------------------------------------------------
        `)
        break
        default:
            print(`
            ESCOLHA UMA DAS OPÇÕES ACIMA 
            `)

    }

}main()