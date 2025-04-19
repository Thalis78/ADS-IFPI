/*Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar
estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase
e mostrá-la na tela.


*/

import { input, print } from "./apelidos.js";

function main(){
    let vogais = ["A","E","I","O","U"];
    let Palavra = input("INFORME UMA FRASE: ").toUpperCase().split("");
    let countvogais = 0;
    let countPalavra = 0;
    let countLetra = 0;
    let countConso = 0;
    let PalavraCriptografada = "";
    let PalavraConso = "";
    let LetraCriptograda = "".split("");
    let PalavraDescri = "";
    while(countPalavra < Palavra.length){
        if(vogais[countvogais] == Palavra[countPalavra]){
            PalavraCriptografada += "*";
            LetraCriptograda += Palavra[countPalavra]
            countvogais = 0;
            countPalavra++;
        }else if(countvogais == 4){
            countvogais = 0;
            PalavraCriptografada += Palavra[countPalavra];
            PalavraConso += Palavra[countPalavra];
            countPalavra++;
        }else{
            countvogais++;
        }

    }
    for(let count = 0;count < PalavraCriptografada.split("").length; count++){
        if(PalavraCriptografada[count] == "*"){
            PalavraDescri += LetraCriptograda[countLetra];
            countLetra++;
        }else{
            PalavraDescri += PalavraConso[countConso];
            countConso++;
        }
    }
    print(`
        PALAVRA ESCOLHIDA: ${Palavra.join("")}
        PALAVRA CRIPTOGRADA: ${PalavraCriptografada}
        PALAVRA DESCRIPTOGRADA: ${PalavraDescri}
    `)
}main();