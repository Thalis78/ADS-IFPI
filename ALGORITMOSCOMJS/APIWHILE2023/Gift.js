import { get_number, input, print } from "./apelidos.js"
// Uma loja presenteia suas clientes com descontos
// (cashback) progressivos de acordo com suas compras. Desta
// forma, para compras mensais de até R$ 250 reais, é feita a
// conversão (geração) de cashback de 5%; Para compras acima de
// R$ 250 até R$ 500, 7% de cashback; De R$ 500 até R$ 750, 8%
// de cashback; E para compras acima de R$ 750 é aplicado
// primeiramente as regras anteriores até R$ 750 do valor em cada
// faixa, e 25% sobre o valor acima de R$ 750. Operações de
// cashbacks progressivos têm o objetivo de incentivar as suas
// clientes a comprarem mais e ao mesmo tempo serem
// compensadas por isso.
// a. Implemente um software para auxiliar no cálculo do
// cashback mensal de suas clientes (devem ser lidos N
// compras Nome Cliente e Valor Compras).
// b. Informe quanto foi o faturamento total (soma das vendas);
// Quanto foi distribuído em cashback; Qual o valor em reais e
// percentual investido em cashback pela loja; Maior, menor e
// valor médio pago em cashback

// OBSERVAÇÕES: COMPRAS <= 250$ MENSAIS GERAM 5% DE CASHBACK; COMPRAS >250$ E <= 500$ MENSAIS GERAM UM CASHBACK DE 7%; COMPRAS  > 500$ E <=750 MENSAIS GERAM 8%;E PARA COMPRAS >750$ GERAM 25%;
// MINHA ENTRADA: N(COMPRAS); NOME DO CLIENTE E O VALOR(COMPRA);
// MINHA SAIDA: MOSTRAR A LOJA O FATURAMENTO TOTAL(SOMAS DAS VENDAS); QUANTO FOI DESTRUIBIDO EM CASHBACK(VALOR TOTAL EM REAIS); MAIOR , MENOR E VALOR MEDIO PAGO EM CASHBACK;

function main(){
    let ValorTotaldeCashback = 0;
    let ValorTotalFornecido = 0;
    let NumeroCliente = 0;
    let ValorTotalFaturamento = 0;
    let MaiorValorFornecidoDeCashback = 0;
    let MenorValorFornecidoDeCashback = 0;
    let NumeroCompras;
    let ValorCashbackAntigo;
    // FLAG = 0
    while(NumeroCompras != 0){
        let NomeCliente  = input("INFORME SEU NOME? ");
        let NumerosDeCompras = get_number("INFORME O NUMERO DE COMPRAS: ");
        let ValorCompras = get_number("INFORME O VALOR TOTAL DAS COMPRAS = R$");
    
        if(NumerosDeCompras > 0 && ValorCompras <= 250){
            ValorTotalFaturamento += ValorCompras;
            ValorTotaldeCashback = ProcessamentoCompra(ValorCompras,ValorTotalFornecido,0.05);
            FinalizarCompra(NomeCliente,NumerosDeCompras,ValorCompras,ValorTotaldeCashback);
            ValorTotalFornecido += ValorTotaldeCashback;

        }else if(NumerosDeCompras > 0 && ValorCompras > 250 && ValorCompras <=500){
            ValorTotalFaturamento += ValorCompras;
            ValorTotaldeCashback = ProcessamentoCompra(ValorCompras,ValorTotalFornecido,0.07);
            FinalizarCompra(NomeCliente,NumerosDeCompras,ValorCompras,ValorTotaldeCashback);
            ValorTotalFornecido += ValorTotaldeCashback;

        }else if(NumerosDeCompras > 0 && ValorCompras > 500 && ValorCompras <=750){
            ValorTotalFaturamento += ValorCompras;
            ValorTotaldeCashback = ProcessamentoCompra(ValorCompras,ValorTotalFornecido,0.08);
            FinalizarCompra(NomeCliente,NumerosDeCompras,ValorCompras,ValorTotaldeCashback);
            ValorTotalFornecido += ValorTotaldeCashback;

        }else if(NumerosDeCompras > 0 && (ValorCompras > 750)){
            ValorTotalFaturamento += ValorCompras;
            ValorTotaldeCashback = ProcessamentoCompra(ValorCompras,ValorTotalFornecido,0.08);
            ValorTotalFornecido += ((ValorCompras - 750) * 0.25) + ValorTotaldeCashback;
            ValorTotaldeCashback = ValorTotalFornecido;
            FinalizarCompra(NomeCliente,NumerosDeCompras,ValorCompras,ValorTotaldeCashback);

        }else{
            Total(ValorTotalFornecido,ValorTotalFaturamento,NumeroCliente,MaiorValorFornecidoDeCashback,MenorValorFornecidoDeCashback,ValorTotalFornecido/NumeroCliente);
            return ValorCompras;
        }

        MenorValorFornecidoDeCashback = Math.min(ValorTotaldeCashback,ValorCashbackAntigo);
        MaiorValorFornecidoDeCashback = Math.max(ValorTotaldeCashback,ValorCashbackAntigo);
    
        ValorCashbackAntigo = ValorTotaldeCashback;
        NumeroCliente++;
    
    }
    
}
function ProcessamentoCompra(ValorCompras,ValorTotalFornecidoDeCashback,porcentagem){
    ValorTotalFornecidoDeCashback = 0;
    ValorTotalFornecidoDeCashback += (ValorCompras * porcentagem);
    return ValorTotalFornecidoDeCashback;
}
function FinalizarCompra(Nome,QuantidadeCompra,ValorCompras,ValorCashback){
    print(`
        >>>>>>>>>>>>>>>>>>FINALIZANDO A COMPRA <<<<<<<<<<<<<<<<<<<<<<<
        NOME DO CLIENTE: ${Nome}
        QUANTIADADE DE COMPRAS: ${QuantidadeCompra}
        VALOR TOTAL DA COMPRA: ${ValorCompras}
        VALOR DE CASHBACK: ${ValorCashback}
    `);
}
function Total(ValorTotalFornecidoDeCashback,ValorTotalFaturamento,NumeroCliente,MaiorValorFornecidoDeCashback,MenorValorFornecidoDeCashback,ValorMedio){
    print(`
        VALOR TOTAL FORNECIDO EM CASHBACK : ${ValorTotalFornecidoDeCashback}
        VALOR TOTAL DO FATURAMENTO : ${ValorTotalFaturamento}
        NUMERO DE CLIENTES: ${NumeroCliente}
        MAIOR VALOR CASHBACK FORNECIDO: ${MaiorValorFornecidoDeCashback}
        MENOR VALOR CASHBACK FORNECIDO: ${MenorValorFornecidoDeCashback}
        VALOR MEDIO DE CASHBACK FORNECIDO : ${ValorMedio}
    `)
}
main();
