// Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
// · Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma

import { get_number, input, print } from "./apelidos.js";

function main() {
    let jogador01 = input("INFORME SEU NOME?").toUpperCase()
    let jogador02 = input("INFORME SEU NOME?").toUpperCase()

    let pts01 = 0;
    let pts02 = 0;

    while (true) {
        pts01 += Math.floor((Math.random() * 3))
        pts02 += Math.floor((Math.random() * 3))
        if ((pts01 >= 21 && (pts01 > pts02) && (pts01 % pts02) >= 2)) {
            mensagem(jogador01,jogador02,pts01,pts02,jogador01)
            break
        }
        if ((pts02 >= 21 && (pts02 > pts01) && (pts02 % pts01) >= 2)) {
            mensagem(jogador01,jogador02,pts01,pts02,jogador02)
            break
        }
    }

}
main()
function mensagem(jogador01,jogador02,pts01,pts02,resultado){
    print(`
    JOGADOR 01 : ${jogador01} 
    PONTOS DO JOGADOR 01: ${pts01} PTS
    JOGADOR 02 : ${jogador02}
    PONTOS DO JOGADOR 02: ${pts02} PTS
    VENCEDOR DA PARTIDA : ${resultado}
    `)
}

