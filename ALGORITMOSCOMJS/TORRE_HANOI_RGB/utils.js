import { question } from "readline-sync"

export function clear(){
    console.clear()
}

export function print(texto){
    console.log(texto)
}

export function input(texto){
    var texto_numero = question((texto))
    return texto_numero 
}
export function int(texto){
    var int = parseInt(texto)
    return int
}

export function float(texto){
    var float = parseFloat(texto)
    return float
}

export function get_number(texto){
    var numero = Number(input(texto))
    return numero
}

export function square_root(numero){
    return Math.sqrt(numero)
}
export function number_random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}