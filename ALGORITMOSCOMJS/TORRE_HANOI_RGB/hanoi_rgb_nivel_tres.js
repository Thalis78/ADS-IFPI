import { clear, input, number_random, print } from "./utils.js";

function main() {
    let RGB = ["R", "G", "B"], R = [], G = [], B = []

    gerarItens(RGB, R, 9), gerarItens(RGB, G, 9), gerarItens(RGB, B, 9)

    let cloneR = [...R], cloneG = [...G], cloneB = [...B]

    let nomeJogador = input("INFORME O NOME DO JOGADOR NUMERO 1: ")

    let jogadores = []

    let count = 0;
    let countJogadas = 0

    while (count != 12 || jogadores.length !== 2) {
        count = 0

        menu(opcaoMenu(R, G, B), R, G, B)

        count += vericacao(R, "R"), count += vericacao(G, "G"), count += vericacao(B, "B"), countJogadas++;

        if (count === 27 && jogadores.length < 1) {
            R = cloneR, G = cloneG, B = cloneB
            jogadores.push([nomeJogador, countJogadas])

            countJogadas = 0;
            nomeJogador = input("INFORME O NOME DO JOGADOR NUMERO 2: ")

        } else if (count === 27) {
            jogadores.push([nomeJogador, countJogadas])
        }

        clear()

    }

    saidaPrograma(jogadores[0][0], jogadores[0][1], jogadores[1][0], jogadores[1][1])
} main()

function verificarTorre(torrer) {
    let iguais = 1;
    for (let i = 0; i < torrer.length; i++) {
        if (typeof torrer[i + 1] !== "undefined") {
            if (torrer[i] === torrer[i + 1]) {
                iguais++;
            }
        }
    }
    return iguais
}
function gerarItens(RGB, torrer, quantLetras) {
    for (let i = 0; i < quantLetras; i++) {
        torrer.push(RGB[number_random(0, RGB.length - 1)])
    }
    if (verificarTorre(torrer) === 9) {
        gerarItens(RGB, torrer, quantLetras)
    }
}
function menu(resultMenu, R, G, B) {
    if (resultMenu === 1 && R.length > 0) {
        B.unshift(R[0]);
        R.shift();
    } else if (resultMenu === 2 && R.length > 0) {
        G.unshift(R[0]);
        R.shift();
    } else if (resultMenu === 3 && G.length > 0) {
        B.unshift(G[0]);
        G.shift();
    } else if (resultMenu === 4 && G.length > 0) {
        R.unshift(G[0]);
        G.shift();
    }
    else if (resultMenu === 5 && B.length > 0) {
        G.unshift(B[0]);
        B.shift();
    }
    else if (resultMenu === 6 && B.length > 0) {
        R.unshift(B[0]);
        B.shift();
    }
    else {
        clear()
        print("VOCÊ ESCOLHEU UMA OPÇÃO INVALIDA OU NÃO EXISTE ITENS NA TORRE\nTENTE OUTRA JOGADA!!")
        menu(opcaoMenu(R, G, B), R, G, B);
    }
}

function opcaoMenu(R, G, B) {
    print(`
    ------TORRES-------
    |R --> [${R}] 
    |G --> [${G}]
    |B --> [${B}]   
    -------------------`)
    return Number(input(`
    |1 --> REMOVER DA TORRER R E LEVAR PARA O B
    |2 --> REMOVER DA TORRER R E LEVAR PARA O G
    |3 --> REMOVER DA TORRER G E LEVAR PARA O B
    |4 --> REMOVER DA TORRER G E LEVAR PARA O R
    |5 --> REMOVER DA TORRER B E LEVAR PARA O G
    |6 --> REMOVER DA TORRER B E LEVAR PARA O R
    |ESCOLHA: ` ))
}
function vericacao(torrer, texto) {
    let count = 0;
    for (let i = 0; i <= torrer.length; i++) {
        if (torrer[i] === texto) {
            count++;
        }

    }
    return count;
}

function saidaPrograma(nomeJogador01, tentativas01, nomeJogador02, tentativas02) {
    print(`
    --------------- RESULTADO ---------------
    | NOME JOGADOR 1          : ${nomeJogador01}
    | NOME JOGADOR 2          : ${nomeJogador02}
    | QUANT JOGADAS JOGADOR 1 : ${tentativas01}
    | QUANT JOGADAS JOGADOR 2 : ${tentativas02}
    | GANHADOR                : ${tentativas01 < tentativas02 ? nomeJogador01 : tentativas02 < tentativas01 ? nomeJogador02 : "EMPATE"}
    ------------------------------------------`)
}