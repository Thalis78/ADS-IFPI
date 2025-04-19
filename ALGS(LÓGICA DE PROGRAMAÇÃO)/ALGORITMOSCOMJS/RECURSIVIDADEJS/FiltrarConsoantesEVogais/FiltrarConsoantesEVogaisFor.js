import { question } from "readline-sync";

function main(){
    let string = question("INFORME UMA PALAVRA OU UMA FRASE: ").split(" ").join("");
    string = string.split(",").join()
    let vogais = ["a","e","i","o","u","A","E","I","O","U"],quantVogais = [],quantConsoante = [];

    verificarLetras(vogais,quantConsoante,quantVogais,string)

    function verificarLetras(vogais,quantConsoante,quantVogais,string){
        for(let i of string){
            for(let l = 0; l < vogais.length;l++){
                if(i == vogais[l]){
                    quantVogais.push(i)
                    break
                }
                if(l === vogais.length - 1){
                    quantConsoante.push(i)
                }
            }
        }
    }
    console.log(`QUANTIDADE DE VOGAIS: ${quantVogais.length}\nQUANTIDADE DE CONSOANTES: ${quantConsoante.length}`)

}main()