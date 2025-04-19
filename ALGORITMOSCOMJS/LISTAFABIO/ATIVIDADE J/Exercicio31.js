// Escreva  um  algoritmo  que  leia  um  número  decimal  (até  3  dígitos)  e  escreva  o  seu  equivalente  em 
// numeração romana.  Utilize  funções para  obter  cada dígito do número decimal e para a transformação 
// de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M). 

import { get_number, input, print } from "./apelidos.js"

function main(){
    let numero_usuario = input("INFORME UM NUMERO DE 0 A 999: ").split("")
    let num = numero_usuario
    let romano = ["I","II","III","IV","V","VI","VII","VIII","IX","X"]
    let romano02 = ["X","XX","XXX","XL","L","LX","LXX","LXX","XC","C"]
    let romano03 = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM","M"]

    while(true){
        if(num.length === 3){
            let num_romano = []
        
            num_romano = [romano03[Number(num[2] - 1)], romano02[Number(num[1] - 1)], romano[Number(num[0] - 1)]]
    
            print(`
                ----> NUMERO CONVERTIDO PRA ROMANO: ${num_romano.join("")}
            `)
            break
        }
        if(num.length === 2){
            let num_romano = []
        
            num_romano = [romano02[Number(num[1] - 1)], romano[Number(num[0] - 1)]]
    
            print(`
                ----> NUMERO CONVERTIDO PRA ROMANO: ${num_romano.join("")}
            `)
            break
        }
        if(num.length === 1){
            let num_romano = []
        
            num_romano = [romano[Number(num[0] - 1)]]
    
            print(`
                ----> NUMERO CONVERTIDO PRA ROMANO: ${num_romano.join("")}
            `)
            break
        }
    }
   
}main()