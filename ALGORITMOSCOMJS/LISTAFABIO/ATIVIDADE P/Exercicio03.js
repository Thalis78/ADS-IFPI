// 03 - Leia  as  variáveis  A0,  Limite  e  R  e  escreva  os  valores  menores  que  Limite  gerados  pela  Progressão 
// Aritmética que tem por valor inicial A0 e razão R.
// A0 = TERMO; LIMITE = CONDICIONAL; R = RAZÃO DA PROGRESSÃO.; N É O INDICE
// Formula = termo +(índice - 1)*razão da progressão
import { question } from "readline-sync"
function pergunta(texto){
    let dados = Number(question(`INFORME O VALOR DE ${texto}: `))
    return dados
}
function main(){
    let A0 = pergunta("A0")
    let limite=pergunta("LIMITE")
    let R = pergunta("R")
    let N= 1;
    let formula = 0
    for(N;formula <= limite; N++){
        formula = A0 + (N - 1) * R
        console.log(`----> ${formula}`)
    } 
}
main()