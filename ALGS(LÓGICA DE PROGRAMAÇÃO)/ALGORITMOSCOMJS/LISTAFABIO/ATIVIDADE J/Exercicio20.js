// Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
// 600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
// um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
// · Distância percorrida desde a última medição;
// · Quantidade de litros consumidos para percorrer a distância indicada.
// Escreva um algoritmo que leia estas informações e escreva:
// · se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
// · se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
// · o consumo em km/l do carro

import { get_number, print } from "./apelidos.js";

function main(){
    let percurso_inicial = 0;
    let percurso = 600;
    let litros = 50;
    let km_litro = 15 
    let distancia_pecorrida = 0;
    let quantidade_litros = 0;

    while(percurso >= 0){
        distancia_pecorrida = get_number("QUANTOS KM FORAM PECORRIDOS? KM_H ")
        quantidade_litros = parseInt(distancia_pecorrida/km_litro)

        distancia_pecorrida += distancia_pecorrida
        quantidade_litros +=quantidade_litros
        percurso_inicial += distancia_pecorrida
        percurso -= distancia_pecorrida
    }
    print(`
    >>>>>>>>>RESULTADO DO PERCUSO <<<<<<<<<<<
    | ---> QUANTIDADE DE LITROS INICIAL: ${litros}L
    | ---> QUANTIDADE DE LITROS CONSUMIDA APÓS A DISTÂNCIA PECORRIDA INFORMADA: ${quantidade_litros} L
    | ---> DISTÂNCIA TOTAL PECORRIDA: ${distancia_pecorrida}
    | ---> QUANTIDADE DE KM FALTANTES PRA CHEGAR AO DESTINO: ${percurso === 0 ? 0 : "VOCÊ CHEGOU AO SEU DESTINO"}
    | ---> QUANTIDADE DE LITROS APÓS O PERCURSO PECORRIDO: ${litros - quantidade_litros >= 0 ? "QUANTIDADE DE LITROS FOI SUFICIENTE" : "QUANTIDADE DE LITROS NÃO FOI SUFICIENTE"} 
    `)
}main()