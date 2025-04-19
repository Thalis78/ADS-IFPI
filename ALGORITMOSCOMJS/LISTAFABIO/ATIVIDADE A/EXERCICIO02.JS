// 02 - Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import { question } from "readline-sync"

// entrada:
let horas = Number(question("ME INFORME HORA:"))
let minutos = Number(question("ME INFORME OS MINUTOS: "))

// PROCESSAMENTO:
let converter = horas * 60
let m = minutos + converter

// SAÍDA:
console.log(`
    O HORARIO QUE VOCÊ ME INFORMOU É EQUIVALENTE: ${horas}:${minutos}
    VALOR CONVERTIDO EM MINUTOS: ${m}
    
`)

