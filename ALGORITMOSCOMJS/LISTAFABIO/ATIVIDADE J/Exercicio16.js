// Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.  
// Com  um  empréstimo  de  R$  3.000,00,  um  pagamento  de  R$  200,00  é  feito  todo  dia  útil.Escreva  um algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo. 

import { get_number, print } from "./apelidos.js"

function main(){
    let numero = 3000
    let dia = 1;
    let dias_total = 0
    while(dia > 0){
        dia = mes(numero);
        let pagar = get_number("VOCE VAI PAGAR OS 200 DIARIO? 1 - SIM OU 2 - NAO ")
        if(pagar === 1){
            numero -= 200
            print(`
            NOVO VALOR: R$ ${numero}`)
            dias_total++
        }else{
            numero -= (numero * 0.0085)
            print(`
            NOVO VALOR COM REAJUSTE R$${numero}`)
            dias_total++
        }

    }
    print(`DIAS TOTAIS: ${dias_total}`)
}
function mes(numero){
    return parseInt(numero/200)
}main()
