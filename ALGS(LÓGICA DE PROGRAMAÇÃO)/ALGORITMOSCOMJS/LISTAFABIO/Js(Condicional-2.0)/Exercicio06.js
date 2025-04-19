// Leia o  turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e 
// escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. 

import { input, print } from "./apelidos.js";

function main(){
    let turno = input(`
        EM QUE TURNO VOCE ESTUDA
        (M) - MATUTINO
        (V) - VESPERTINO
        (N) - NOTURNO 
        ESCOLHA:`).toUpperCase()

    switch (turno){
        case "M":
            print("BOM DIA!")
            break
        case "V":
            print("BOA TARDE!")
            break
        case "N":
            print("BOA NOITE!")
            break
        default:
            print("ESCOLHA UMA DAS OPÇÕES ACIMA.")
    }
}
main()