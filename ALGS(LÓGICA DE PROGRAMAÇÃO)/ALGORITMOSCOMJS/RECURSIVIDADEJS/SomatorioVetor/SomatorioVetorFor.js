import { question } from "readline-sync"
import { number_random } from "../utils.js";

function main(){
    let n = Number(question("INFORME UMA QUANTIDADE DE ELEMENTOS: "))
    let min_max = question("INFORME O MIN E O MAX PRA GERAR OS ELEMENTOS: ").split(" ").map(Number)
    let numeros_gerado = "",soma_numero = 0,numeros = [];

    soma_numero = gerar_numeros(n,min_max,numeros_gerado,soma_numero,numeros)

    function gerar_numeros(n,min_max,numeros_gerado,soma_numero,numeros){
        for(let i = 0; i < n;i++){
            numeros.push(number_random(min_max[0],min_max[1]))
            numeros_gerado += `${numeros[i]} `
            soma_numero += numeros[i]
        }
        console.log(`NUMEROS GERADO : ${numeros_gerado}`)
        return soma_numero
    }

    console.log(`RESULTADO DA SOMA DOS VETORES: ${soma_numero}`)

}main()
