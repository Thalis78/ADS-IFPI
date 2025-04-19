import { question } from "readline-sync";
import {readFileSync} from "fs"

// 9.0 CARREGAR A LISTA
export function file_list(){
    const dados = readFileSync('words.txt',"utf-8")
    const linhas = dados.split('\n')
    let array = [];
    for(let linha of linhas){
        array.push(linha)
    }
    return array
}
export function menu_option(){
    return `
    ------------------------- WORD PLAY ---------------------------
    | 1 - CARREGAR ARQUIVO;
    | 2 - PALAVRAS C/ 20+= LETRAS;
    | 3 - PALAVRAS S/ LETRA "E";
    | 4 - PALAVRAS C/ N E QUANTIDADE DE LETRAS;
    | 5 - PALAVRAS PROIBIDAS;
    | 6 - PALAVRAS GERADAS A PARTIR DAS ESCOLHAS DA LETRA DO USER;
    | 7 - LISTA COM PALAVRAS QUE A LETRAS ESTAO EM ORDEM ALFABETICA;
    | 8 - FINALIZAR PROGRAMA;
    | ESCOLHA:`
}
// 9.1 PALAVRA COM += VINTE
export function list_twenty_letters(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        if(listinhaComPalavra[i].length >= 20){
            array.push(listinhaComPalavra[i])
        }
    }

    return array;
}
// 9.2 PALABRA SEM LETRA E
export function has_no_e(listinhaComPalavra){
    let array = [];
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
        for(let a in palavraQuebrada){
            if(palavraQuebrada[a] == "e"){
                break;
            }
            if(a == palavraQuebrada.length - 1){
                array.push(listinhaComPalavra[i])
            }
        }
    }
    return array


}
// Adicional PALAVRAS COM A LETRA N + A QUANTIDADE DE LETRAS?
export function letter_n_list(listinhaComPalavra){
    let array = []
    let quantidadeDeLetras = Number(question("INFORME A QUANTIDADE DE LETRAS: "))
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
        if(quantidadeDeLetras == palavraQuebrada.length -1){
            for(let a = 0; a < palavraQuebrada.length;a++){
                if(palavraQuebrada[a] == "n"){
                    array.push(listinhaComPalavra[i])
                    break;
                }
            }
        }
    }
    return array
}
//9.3 - PALAVRAS PROIBIDAS;
export function avoids(listinhaComPalavra){
    let array = [];
    let letras_proibidas = question("INFORME AS LETRAS PROIBIDAS COM ESPACO('A' 'B'  'E' ...):").toLowerCase();
    let array_letras_proibidas = split_space(letras_proibidas)
    for(let i in listinhaComPalavra){
        let palavraQuebrada = letter_split(listinhaComPalavra[i])
        for(let a in palavraQuebrada){ 
            let pararEstrutura = boolean(array_letras_proibidas,palavraQuebrada,a);
            if(pararEstrutura == false){
                break;
            }
            if(a == palavraQuebrada.length - 1){
                array.push(listinhaComPalavra[i])
            }
        }    
    }

    return array    
}
//9.4 + 9.5 = PALAVRAS GERADAS A PARTIR DAS ESCOLHAS DA LETRA DO USER;
export function uses_only(listinhaComPalavra){
    let array = [];
    let letras = question("INFORME LETRAS PARA GERAR A LISTA DE PALAVRA:")
    letras = letter_split(letras)
    let count = 0;
    for(let u in listinhaComPalavra){
        let string = letter_split(listinhaComPalavra[u]);
        for(let i in string){
            for(let o in letras){
                if(string[i] == letras[o]){
                    count++;
                    break;
                }
            }
        }
        if(count == string.length){
            if(listinhaComPalavra[u] != ""){
                array.push(listinhaComPalavra[u])
            }
        }
        count = 0;
    }
    return array;
}
function boolean(array_letras_proibidas,palavraQuebrada,index){
    for(let u in array_letras_proibidas){
        if(array_letras_proibidas[u] == palavraQuebrada [index]){
            return false
        }
        if(u == array_letras_proibidas.length - 1){
            
            return true;
        }
    }
}

// 9.6 LISTA COM PALAVRAS QUE A LETRAS ESTÃO EM ORDEM ALFABETICA;
export function is_abecedarian(listinhaComPalavra){
    let array = [];
    let count = 0;
    for(let i in listinhaComPalavra){
        let string = letter_split(listinhaComPalavra[i]);
        for(let u = 0; u < string.length -1;u++){
            if(string[u+1] != undefined){
                if(string[u] <= string[u+1]){
                    count++
                }
            }
        }
        if(count == string.length - 1){
            array.push(listinhaComPalavra[i])
        }
        count = 0;
    }
    return array;
}
export function list(array){
    for(let i = 1; i <= array.length;i++){
        console.log(`${i} - ${array[i-1]}`)
    }
}
export function percentage(primeiroValor,segundoValor){
    return ((segundoValor * 100)/primeiroValor)
}
export function letter_split(texto){
    let array = []
    for(let linha of texto){
        array.push(linha)
    }
    return array
}
function split_space(texto){
    let array = []
    for(let linha of texto){
        if(linha.charCodeAt(0) != 32){
            array.push(linha)
        }
    }
    return array;
}
