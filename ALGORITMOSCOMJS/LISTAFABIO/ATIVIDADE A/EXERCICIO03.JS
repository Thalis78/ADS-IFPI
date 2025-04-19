        // 03 - Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
        import { question } from "readline-sync"
        // entrada de dados:
        let minutos = Number(question("ME INFORME A QUANTIDADES DE MINUTOS:"))

        // Processamento de dados:
        let converter = (minutos / 60) 
        let horas = ((converter) - (Math.floor(converter)))
        let totalminutos = Math.floor((horas * 60)) //Math = Objeto, Round = vai arrendondar para o numero mais proximo
        let totalhoras = Math.floor(converter) 

        // Saida de dados:
        console.log(`"O VALOR CONVERTIDO EM HORAS É EQUIVALENTE: ${totalhoras}":" ${totalminutos}`)
        
        
