// [q4_viagem] José está planejando uma viagem com sua família
// para a Capital Federal. Para isso tem juntado Milhas em
// programas de fidelidade, e também pesquisando passagens
// aéreas diretamente. No Programa Smiles é possível comprar
// Milhas Aéreas pagando 70 reais a cada 1000 unidades. Uma
// passagem Teresina(THE) para Brasília(BSB) custa em torno de
// 21200 milhas, o mesmo voo(horário) tá por R$ 431. Ou seja,
// nesse caso, é melhor comprar em R$ que comprar Milhas a R$
// 70/Milheiro para então emitir o Voo.
// Entretanto no mundo das milhas, nunca compramos milhas a esse
// valor de 70 reais por mil, o que se faz é acumular milhas por meio
// de Cartão de Crédito e Compras Bonificadas. Neste caso,
// precifica-se as Milhas (valor convencionado) como baratas a R$
// 14,50 o Milheiro. Assim, o voo exemplificado acima as 21200
// Milhas custariam em reais o total de R$ 307,40. Desta forma,
// sendo vantajoso, ou seja, custa apena 71,3% do valor em R$
// normal (R$ 431)
// Faça um programa para auxiliar José no comparativo dos valor
// das passagens com Milhas Padrão(R$ 70), Milhas Acumuladas
// Baratas (R$ 14,50) e em Reais Normal (valor do site). Peça ao
// usuário Origem, Destino, Valor em R$ no site e Valor em Milhas no
// Site. Apresente para ele o valor equivalente em R$ caso compre
// com Milhas Padrão, indicando o % em relação ao valor em R$.
// Faça o mesmo para Milhas Baratas. Ao final, indique para ele a
// melhor forma de compra dentre as 3 opções.

// 1000 UNIDADE = 70$;
// 21200 MILHAS; 431$ PREÇO DA PASSAGEM SEM MILHAS;
import {question} from "readline-sync";

function main(){
    let origem =  Origem();
    let destino = Destino();
    let milhas = Milhas();
    let valormilhas = ValorMilhas();
    let valortotalmilhas = valortotal(milhas,valormilhas);
    let valorpassagem = ValorPassagem();
    let melhorformacompra = MelhorCompra(valortotalmilhas,valorpassagem);

    mensagem(origem,destino,valormilhas,valortotalmilhas,valorpassagem,melhorformacompra);
}
function Origem(){
    return question("INFORME A ORIGEM: ")
}
function Destino(){
    return question("INFORME O DESTINO: ")
}
function Milhas(){
    return Number(question("QUANTIDADE DE MILHAS NECESSARIAS PARA REALIZAR A VIAGEM: "));
}
function ValorMilhas(){
    return Number(question("VALOR DAS MILHAS: R$"))
}
function valortotal(milhas,valormilhas){
    return (milhas/1000) * valormilhas
}
function ValorPassagem(){
    return Number(question("VALOR DA PASSAGEM: R$"))
}
function MelhorCompra(ValorMilhas,MelhorCompra){
    if(ValorMilhas < MelhorCompra){
        return "COMPENSA MAIS COMPRAS MILHAS PARA REALIZAR A VIAGEM"
    }else if(MelhorCompra > ValorMilhas){
        return "COMPENSA MAIS COMPRAR A PASSAGEM NO SEU VALOR NORMAL"
    }
    return "QUALQUER UMA DAS FORMAS DE PAGAMENTO VAI GERAR O MESMO VALOR NO FINAL"
}
function mensagem(origem,destino,valormilhas,valortotalmilhas,valorpassagem,melhorformacompra){
    console.log(`
        >>>>>>>>>>>>>>>>>>>>>>RESULTADO<<<<<<<<<<<<<<<<<<<<<<<
        | ---> ORIGEM                    : ${origem}
        | ---> DESTINO                   : ${destino}
        | ---> VALOR MILHAS              : R$${valormilhas}
        | ---> VALOR TOTAL EM MILHAS     : R$${valortotalmilhas}
        | ---> VALOR TOTAL EM PASSAGEM   : R$${valorpassagem}
        | ---> MELHOR FORMA DE PAGAMENTO : ${melhorformacompra}
    
    `)
}main()