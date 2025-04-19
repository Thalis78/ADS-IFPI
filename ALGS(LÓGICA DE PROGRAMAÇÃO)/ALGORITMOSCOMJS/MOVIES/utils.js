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
export function bubble_sort(sequenciaAleatoria,criterio,tipoDado){
    let count = sequenciaAleatoria.length - 1;
    while(count > 0){
        for(let i = 0; i < count;i++){
            if(criterio(sequenciaAleatoria[i][tipoDado],sequenciaAleatoria[i+1][tipoDado])){
                let aux = sequenciaAleatoria[i]
                sequenciaAleatoria[i] = sequenciaAleatoria[i+1]
                sequenciaAleatoria[i+1] = aux
            }
        }
        count--;
    }
}