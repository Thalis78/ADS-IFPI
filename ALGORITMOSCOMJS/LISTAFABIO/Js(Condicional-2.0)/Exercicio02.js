// Leia uma letra, verifique se  letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido

import { input, print } from "./apelidos.js";

function main(){
    let letra = input(`
        INFORME O SEU GÊNERO: 
    `)
    letra = (letra[0]).toUpperCase()
if(letra == isNaN(letra)){
    if(sexo(letra)){
        print("GÊNERO FEMININO - F")
    }else{
        print("GÊNERO MASCULINO - M")
    }
}else{
    print("INFORME VALORES VALIDOS")
}
}
function sexo(letra){
    return letra === "F"
}
main()