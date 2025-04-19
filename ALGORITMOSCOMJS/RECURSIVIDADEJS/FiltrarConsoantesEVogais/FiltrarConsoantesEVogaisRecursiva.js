import { question } from "readline-sync";

function main(){
    let string = question("INFORME UMA PALAVRA OU UMA FRASE: ").split(" ").join("");
    string = string.split(",").join()
    let i = 0, l = 0;
    let vogais = ["a","e","i","o","u","A","E","I","O","U"],quantVogais = [],quantConsoante = [];

   console.log(verificarLetras(vogais,quantConsoante,quantVogais,string,i,l))

    function verificarLetras(vogais,quantConsoante,quantVogais,string,i,l){
        if(i == string.length){
            return `QUANTIDADE DE VOGAIS: ${quantVogais.length}\nQUANTIDADE DE CONSOANTES: ${quantConsoante.length}`
        }else{
            if(string[i] == vogais[l]){
                quantVogais.push(string[i])
                l = 0;
                return verificarLetras(vogais,quantConsoante,quantVogais,string,i+=1,l)
            }
            if(l === vogais.length - 1){
                quantConsoante.push(string[i])
                l = 0;
                return verificarLetras(vogais,quantConsoante,quantVogais,string,i+=1,l)
            }
            return verificarLetras(vogais,quantConsoante,quantVogais,string,i,l+=1)
            }
        }            
    }
main()