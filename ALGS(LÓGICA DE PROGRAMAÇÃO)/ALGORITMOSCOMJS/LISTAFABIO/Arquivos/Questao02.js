import { question } from "readline-sync";
import { Palavras } from "/Users/thali/Documents/Arquivos/Funcoes.js";

function main(){
    let Array =Palavras();
    let Palavradesejada = question("INFORME UMA PALAVRA:").toLowerCase();
    for(let i = 0; i < Array.length;i++){
        console.log(Array[i])
        console.log(Palavradesejada)
        if(Palavradesejada === Array[i]){
            console.log("SUA PALAVRA FOI LOCALIZADA NO TEXTO !!!");
            break;
        }else if(i == Palavras().length-1){
            console.log("SUA PALAVRA NÃO FOI LOCALIZADA NO TEXTO!!!");
        }
    }
}main();