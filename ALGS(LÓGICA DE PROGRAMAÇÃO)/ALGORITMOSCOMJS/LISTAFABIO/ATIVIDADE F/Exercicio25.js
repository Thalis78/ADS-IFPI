// Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
// uma mensagem de permissão de acesso ou não

import { question } from "readline-sync";

function main(){
    var senha = (question(`
        INFORME UMA SENHA DE 4 DIGITOS:`))

    return senha_usuario(senha)
    
    
}
if(verificar_senha !== senha){

    senha = question(`
    ERRO.....
    VOCE TEM 3 TENTATIVAS
    DIGITE A SENHA:`)

    if(verificar_senha !== senha){
        senha = question(`
        ERRO.....
        VOCE TEM 2 TENTATIVAS
        DIGITE A SENHA:`)

        if(verificar_senha !== senha){
            senha = question(`
            ERRO.....
            VOCE TEM 1 TENTATIVAS
            DIGITE A SENHA:`)
        }    
        else{
            console.log("VOCÊ TEM PERMISSÃO")
        }
    

    }
    else{
        console.log("VOCÊ TEM PERMISSÃO")

    }

}

function senha_usuario(senha){
if(senha !== "1234"){
    var tente_novamente = 3
    var verificar_senha = "1234"
    for(tente_novamente;(verificar_senha !== senha && tente_novamente >0); tente_novamente--){
        senha = question(`
            ERRO.....
            VOCE TEM ${tente_novamente} TENTATIVAS
            DIGITE A SENHA:`)

        
    
    }
    if(verificar_senha == senha){
        console.log(`
            ULTIMA SENHA DIGITADA PELO USUARIO: ${senha}
            PERMISSÃO: AUTORIZADO
        
        `)
    }
    else if(tente_novamente == 0){
        console.log(`
            ULTIMA SENHA DIGITADA PELO USUARIO: ${senha}
            PERMISSÃO: NÃO AUTORIZADO
            TENTE NOVAMENTE

        
        `)
    }

}


else{
        console.log(`
            ULTIMA SENHA DIGITADA PELO USUARIO: ${senha}
            PERMISSÃO: AUTORIZADO
        
        `)

}
}
main()