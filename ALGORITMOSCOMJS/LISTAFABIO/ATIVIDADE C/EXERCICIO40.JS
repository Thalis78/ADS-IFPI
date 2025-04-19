// Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele 
// fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import { question } from "readline-sync";

// ENTRADA:
var anos = Number(question("A QUANTOS ANOS VOCE FUMA? "))
var numero_cigarro = Number(question("QUANTOS CIGARRO VOCE FUMA POR DIA? "))
var preco_cigarro = Number(question("QUAL O VALOR DE CADA CARTEIRA? "))

// PROCESSAMENTO:
// 1 CARTEIRA EQUIVALE A 20 CIGARROS
var total_carteira = ((anos*365)*numero_cigarro)/20
var valor_gasto = (total_carteira * preco_cigarro)

// SAÍDA:
console.log(`
    INFORMAÇÕES DO USUARIO{
        USUARIO DE CIGARRO A QUANTOS ANOS: ${anos}
        NUMERO DE CIGARRO DIARIOS: ${numero_cigarro} QUANTIDADE
        PREÇO DA CARTEIRA: ${preco_cigarro}$
        TOTAL DE CARTEIRA ADIQUIRIDA DESDE DO INICIO DA UTILIZAÇÃO DO CIGARRO: ${Math.floor(total_carteira)} QUANTIDADE
        VALOR TOTAL GASTO: ${valor_gasto}$
    }
`)