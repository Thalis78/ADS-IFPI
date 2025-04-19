// Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: 
//     hora  e  minuto).    Calcule  e  escreva  a  duração  do  jogo  (horas  e  minutos),  sabendo-se  que  o  tempo 
//     máximo  de  duração  do  jogo  é  de  24  horas  e  que  ele  pode  iniciar-se  em  um  dia  e  terminar  no  dia 
//     seguinte.

import { get_number, input, print } from "/users/thali/documents/javascript(condicional)/apelidos.js"

function main() {
    function partida(texto) {
        let informacao_partida = input(`
            INFORME O ${texto} DA PARTIDA EM HORAS
            COLOQUE DESSA MANEIRA:. EX: 16:00
            HORAS:`)
        return informacao_partida
    }
    let inicio = partida("INICIO")
    let final = partida("FIM")

    function horas(texto) {
        let separador = texto.split(":")
        let horas = separador[0]
        return (horas)
    }
    function minutos(texto) {
        let separador = texto.split(":")
        let minutos = separador[1]
        return (minutos)

    }


    let horas_inicio = horas(inicio)
    let horas_fim = horas(final)
    let minutos_inicio = minutos(inicio)
    let minutos_fim = minutos(final)

    let dia = get_number(`
        A PARTIDA FOI FINALIZADA NO MESMO DIA OU NO DIA SEGUINTE? DIGITE:
        (1) - MESMO DIA
        (2) - DIA SEGUINTE
    `)

    function converter_horas(){
        let horas_finais = (horas_inicio - horas_fim)
        if(horas_fim < horas_inicio){
            return horas_finais
        }
        else{
            return horas_finais = horas_fim - horas_inicio
        }
    }

    switch (dia) {
        case 1:
            if (minutos_inicio > minutos_fim) {
                print(`
                    DURAÇÃO DA PARTIDA: ${(horas_finais) - 1}:${60 - minutos_inicio}
                `)
            }
            else {
                print(`
                DURAÇÃO DA PARTIDA: ${Math.floor(horas_finais)}:${minutos_fim - minutos_inicio}
            `)
            }
            break
        case 2:
            if (converter_horas() >= 0) {


                if (minutos_inicio > minutos_fim) {
                    print(`
                DURAÇÃO DA PARTIDA: ${((23 - converter_horas()))}:${60 - minutos_inicio}
                `)
                } else{
                    print(`
        DURAÇÃO DA PARTIDA: ${Math.floor((24 - converter_horas()))}:${minutos_fim - minutos_inicio}
    `)
                }
            } 
            else {
                print("INSIRA VALORES VÁLIDOS, LEMBRE-SE QUE A CONFERÊNCIA TEM COMO PREVISÃO DE RESULTADO ATÉ 24HR")
            }






    }
}
main()
