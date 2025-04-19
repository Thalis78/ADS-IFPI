import { question } from "readline-sync";

function main(){
    let string = question("INFORME UMA PALAVRA OU UMA FRASE: ").split(" ").join("");
    string = string.split(",").join()
    let vogais = ["a","e","i","o","u","A","E","I","O","U"],quantVogais = [],quantConsoante = [];

    verificarLetras(vogais,quantConsoante,quantVogais,string)

    function verificarLetras(vogais,quantConsoante,quantVogais,string){
        let i = 0, l = 0;
        while(i != string.length){
            while(l != vogais.length){
                if(string[i] == vogais[l]){
                    quantVogais.push(string[i])
                    break
                }
                if(l === vogais.length - 1){
                    quantConsoante.push(string[i])
                }
                l++
            }
            l = 0;
            i++
        }
    }
    console.log(`QUANTIDADE DE VOGAIS: ${quantVogais.length}\nQUANTIDADE DE CONSOANTES: ${quantConsoante.length}`)

}main()