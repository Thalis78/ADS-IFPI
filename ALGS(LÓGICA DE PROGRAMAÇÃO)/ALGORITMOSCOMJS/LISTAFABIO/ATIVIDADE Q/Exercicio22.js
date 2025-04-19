// Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
// nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
// numero de identificação e o peso do boi mais magro e do boi mais gordo.

import { get_number, input, print } from "./apelidos.js";

function main(){
    let nome = Nome().toUpperCase();
    let Peso;
    let N = 1;
    let PesoAnterior;
    let BoiMaisLeve = 100;
    let BoiMaisGordo = 0;
    let Num01 ;
    let Num02;
    let Mensagem01 = "";
    let Mensagem02 = "";
    for(nome;nome !== "FIM";nome = Nome().toUpperCase()){
        Peso = peso()
        if(Peso > PesoAnterior && Peso > BoiMaisGordo){
            Num01 = N;
            BoiMaisGordo = Peso;
            Mensagem01 = Mensagem("GORDO",Num01,BoiMaisGordo);
        }if(Peso < PesoAnterior && Peso < BoiMaisLeve){
            Num02 = N;
            BoiMaisLeve = Peso;
            Mensagem02 = Mensagem("LEVE",Num02,BoiMaisLeve);
        }
        PesoAnterior = Peso;
        N++;

    }
    print(Mensagem01);
    print(Mensagem02);
}
function Nome(){
    return input("INFORME O NOME DO BOI?")
}
function peso(){
    return get_number("INFORME O PESO DO BOI? KG")
}
function Mensagem(texto,Numero,peso){
    return(`
        ----------- BOI MAIS ${texto} --------------
        |--->PESO DO BOI MAIS ${texto}: ${peso}
        |--->NUMERO DE IDENTIFICAÇÃO: ${Numero}
    
    `)
}main()