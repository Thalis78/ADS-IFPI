import { get_number, print, input } from "./apelidos.js";

function main() {
    let nome_alta = ""
    let altura_alta = 0
    let nome_baixa = ""
    let altura_baixa = Number.MAX_VALUE
    let nome_gorda = ""
    letmaior_peso = 0
    let nome_magra = ""
    let menor_peso = Number.MAX_VALUE
    while (true) {
        let nome = input("INFORME SEU NOME: ").toUpperCase()
        if (nome === "FIM") {
            break
        }
        let altura = get_number("INFORME SUA ALTURA EM METROS: ")
        let peso = get_number("INFORME SEU PESO EM KG: ")

        if (altura > altura_alta) {
            nome_alta = nome
            altura_alta = altura
        }

        if (altura < altura_baixa) {
            nome_baixa = nome
            altura_baixa = altura
        }

        if (peso >maior_peso) {
            nome_gorda = nome
           maior_peso = peso
        }

        if (peso < menor_peso) {
            nome_magra = nome
            menor_peso = peso
        }
    }
    print(`
        >>>>>>>>>>>>>>>>>>>>>>>>>RESULTADO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        CANDIDATA MAIS ALTA:  ${nome_alta}, ALTURA: ${altura_alta} METROS
        CANDIDATA MAIS BAIXA: ${nome_baixa}, ALTURA: ${altura_baixa} METROS
        CANDIDATA COM MAIOR PESO: ${nome_gorda}, PESO: ${maior_peso} KG
        CANDIDATA COM MENOR PESO: ${nome_magra}, PESO: ${menor_peso} KG
    `)
}

main();
