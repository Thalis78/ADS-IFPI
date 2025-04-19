// serasa.js  ] A  SERASA  começou  a  implantar  o  Serasa  Score  2.0  em  2021.  O  Score  é  uma  forma  de  avaliar  o  perfil  do  consumidor  no  momento  da 
// aquisição  de  crédito,  seja  cartão  de  crédito  ou  financiamento  de  um  veículo,  apartamento  ou  empréstimo  pessoal.  Desta  forma  são  avaliadas  algumas 
// entradas de dados históricos consumidor e, caso não esteja negativado, apresentando um valor entre 0 e 1000. 
// Baseado  nisso,  faça  um  programa  que  receba  valores  de  0  a  100  em  cada  um  dos  3  critérios  de  cálculo,  ou  seja,  como  se  fosse  uma  Escala,  no  item 
// a.  você  pode  ter  de  0  a  100,  se  for  100,  por  exemplo,  significa  100%  dos  pontos  previstos,  assim  Score  1.0  (260)  e  Score  2.0  (620),  se  fosse  50% 
// então  esse  item  a.  seria  130  e  310,  respectivamente  em  cada  Score  1.0  e  2.0.  Aplique  essa  formula  de  cada  uma  e  apresente  o  valor  do  Score  tanto 
// versão Score 1.0 quanto na versão Score 2.0. 

import { get_number, print } from "./apelidos.js";

// OBSERVAÇÕES: MEU PROGRAMA VAI TER TRÊS ENTRADAS QUE VÃO CLASSIFICADA DE 0 A 100;
// SCORE 1: A - 26% = 260; B - 57% = 570; C -17% = 170;
// SCORE 2: B - 62% = 620; B - 19% = 190; C - 19% = 190;
// SAIDA: SCORE1 - VALOR(TOTAL) - CATEGORIA 
// SAIDA: SCORE2 - VALOR(TOTAL) - CATEGORIA 

function main(){
    let A = get_number(`
        Dados positivos (cartão de crédito,consórcio,consignado, empréstimos e financiamentos) 
        comportamentos de pagamento, tempo dos contratos e tipos de contratos.
        PORCENTAGEM(ESCALA DE 0 A 100):`);
    let B = get_number(`
        Informações  de  dívidas,  histórico de regularização e em aberto
        PORCENTAGEM(ESCALA DE 0 A 100):`);
    let C = get_number(`
        Consultas para novos contratos de serviço ou crédito
        PORCENTAGEM(ESCALA DE 0 A 100):`);
    let Score1 = score(A,B,C,260,570,170);
    let Score2 = score(A,B,C,620,190,190);
    let Categoria1 = Categoria(Score1);
    let Categoria2 = Categoria(Score2)
    Mensagem(Score1,Score2,Categoria1,Categoria2);
}
function score(A,B,C,A1,B1,C1){
    A = A1 * (A/100);
    B = B1 * (B/100);
    C = C1 * (C/100);
    return (A + B + C)
}function Categoria(Score){
    if(Score < 400){
        return "BAIXO";
    }else if(Score <= 600){
        return "REGULAR";
    }else if(Score <= 800){
        return "BOM";
    }
    return "MUITO BOM"
}
function Mensagem(Score1,Score2,Categoria1,Categoria2){
    print(`
    ----------------RESULTADO --------------
    SCORE01 : ${Score1} - ${Categoria1.toFixed(2)}
    SCORE02 : ${Score2} - ${Categoria2.toFixed(2)}
    `)
}main()