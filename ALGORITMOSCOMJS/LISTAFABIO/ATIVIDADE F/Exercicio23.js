    // Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais 

import { question } from "readline-sync"

    // recente. 
var data_composta = function(){
    var data = new Date(question(`
        INFORME UMA DATA
        LEMBRE-SE QUE PRECISA SER PADRAO AMERICANA EX:. 01-10-2004 OR 01/10/2004 
        MES/DIA/ANO
        DATA:`))
    return data
}
function main(){
    var data01 = data_composta()
    var data02 = data_composta()

    return data_recente(data01,data02)


}
function data_recente(data01,data02){
    if(data01.getFullYear() > data02.getFullYear()){
        console.log(`
        DATA MAIS RECENTE: ${data01.getMonth()+1}/${data01.getDate()}/${data01.getFullYear()}
        `)
    }
    else if(data02.getFullYear() > data01.getFullYear()){
        console.log(`
        DATA MAIS RECENTE: ${data02.getMonth()+1}/${data02.getDate()}/${data02.getFullYear()}
        `)

    }
    else{
        if(data01.getMonth() > data02.getMonth()){
            console.log(`
            DATA MAIS RECENTE: ${data01.getMonth()+1}/${data01.getDate()}/${data01.getFullYear()}
            `)

        }
        else if(data02.getMonth()> data01.getMonth()){
            console.log(`
            DATA MAIS RECENTE: ${data02.getMonth()+1}/${data02.getDate()}/${data02.getFullYear()}
            `)
    
        }
        else{
            if(data01.getDate() > data02.getDate() ){
                console.log(`
                DATA MAIS RECENTE: ${data01.getMonth()+1}/${data01.getDate()}/${data01.getFullYear()}
                `)

            }
            else if(data02.getDate() > data01.getDate()){
                console.log(`
                DATA MAIS RECENTE: ${data02.getMonth()+1}/${data02.getDate()}/${data02.getFullYear()}
                `)     
            }
            else{
                console.log(`
                    AS DATAS SÃO IGUAIS......

                `)
            }
        }

    }
}
main()

