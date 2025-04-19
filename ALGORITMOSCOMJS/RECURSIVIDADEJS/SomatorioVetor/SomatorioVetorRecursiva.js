import { question } from "readline-sync"
import { number_random } from "../utils.js";

function main(){
    let n = Number(question("INFORME UMA QUANTIDADE DE ELEMENTOS: "))
    let min_max = question("INFORME O MIN E O MAX PRA GERAR OS ELEMENTOS: ").split(" ").map(Number)
    let numeros_gerado = "",soma_numero = 0,numeros = [],count = 0;
    soma_numero = gerar_numeros(n,min_max,numeros_gerado,soma_numero,numeros,count)

    function gerar_numeros(n,min_max,numeros_gerado,soma_numero,numeros,count){
        if(count >= n){
            console.log(`NUMEROS GERADO : ${numeros_gerado}`)
            return soma_numero;
        }
        numeros.push(number_random(min_max[0],min_max[1]))
        numeros_gerado += `${numeros[count]} `
        soma_numero += numeros[count]
        return gerar_numeros(n,min_max,numeros_gerado,soma_numero,numeros,count+=1)
    }

    console.log(`RESULTADO DA SOMA DOS VETORES: ${soma_numero}`)

}main()
