// Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu 
// nascimento e a data (dia, mês e ano) atual.
import {question} from "readline-sync"

function main(){
let data_aniversario = new Date(question(`]
    INFORME SUA DATA DE ANIVERSARIO...
    LEMBRE-SE DO PADRÃO AMERICANO: EX:..  02-21-2024
    MES/DIA/ANO
    INSIRA A DATA:`))
let data_atual =  new Date(question("INSIRA A DATA ATUAL: "))

return comparacao(data_aniversario,data_atual)





}

function comparacao(data_aniversario,data_atual){

let ano = data_atual.getFullYear() - data_aniversario.getFullYear() 
let mes = data_atual.getMonth() - data_aniversario.getMonth()
let dia =  data_atual.getDate() - data_aniversario.getDate()  

// 
let mes_atual = data_atual.getMonth() 
let dia_atual = data_atual.getDate() 

if(mes_atual < data_aniversario.getMonth() || (mes_atual === data_aniversario.getMonth() && dia_atual < data_aniversario.getDate()) ){
    ano --
    mes += 12
}
if(dia < 0){
    const dia_anterior = new Date(data_atual.getFullYear(),data_atual.getMonth(),0)
    dia += dia_anterior.getDate()
    mes --
}

console.log(`
    IDADE EM ANOS: ${ano}
    MES: ${mes} MESES
    DIA: ${dia} DIAS

`)

}
main()