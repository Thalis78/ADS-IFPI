        // 05 -Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
        import { question } from "readline-sync"

        // ENTRADA:
        let numero = Number(question("ME DIGA UM NUMERO DE 3 DIGITOS: "))

        // PROCESSAMENTO
        let centena = Math.floor(numero /100)
        let resto =  numero % 100;
        let dezena = Math.floor(resto/10)
        let unidade = resto % 10;

        const somatorio = centena + dezena + unidade

        // SAIDA:
        console.log(`
                      NUMERO ESCOLHIDO: ${numero}
                      CENTENA: ${centena}
                      DEZENA: ${dezena}
                      UNIDADE: ${unidade}
                
              `)


        // OUTRA MANEIRA DE FAZER:
        // var n =  Number(question("ESCOLHA UM NUMERO QUALQUER"))
        // var u = n%10
        // var d = (n%100) - u
        // var c = n - (d + u) 
        // console.log("O NUMERO QUE VOCÊ ESCOLHEU FOI: "+ n + "\nUNIDADE: " + u  + "\nDEZENA: "+ d + "\nCENTENA: " + c)
        // console.log("A SOMA DOS ELEMENTOS: " + (c + d + u))
      