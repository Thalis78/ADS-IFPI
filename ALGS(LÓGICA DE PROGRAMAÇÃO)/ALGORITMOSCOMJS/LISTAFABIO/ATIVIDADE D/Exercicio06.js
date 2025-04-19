// 06 - Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva 
// se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam, 
// verifique  se  formam  um  triângulo  acutângulo  (3  ângulos  <  90º),  retângulo  (1  ângulo  =  90º)  ou 
// obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). 

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

// ENTRADA:
function main(){
let angulo01 = get_number("PARA FORMAR UM TRIANGULO A SOMAS DOS TRES ANGULOS PRECISAM DAR 180,SENDO ASSIM\nINFORME ANGULO: ")
let angulo02 = get_number("PARA FORMAR UM TRIANGULO A SOMAS DOS TRES ANGULOS PRECISAM DAR 180,SENDO ASSIM\nINFORME ANGULO: ")
let angulo03 = get_number("PARA FORMAR UM TRIANGULO A SOMAS DOS TRES ANGULOS PRECISAM DAR 180,SENDO ASSIM\nINFORME ANGULO: ")

let soma_angulos_internos = (angulo01 + angulo02 + angulo03)

if(angulo_zero(angulo01,angulo02,angulo03)){
    print(angulo_interno(angulo01,angulo02,angulo03,soma_angulos_internos))
}
else{
    print("NÃO É POSSIVEL FORMAR O TRIANGULO POIS ALGUNS DOS ANGULOS É IGUAL A ZERO")
}
}


// PROCESSAMENTO SAIDA:
function angulo_interno(angulo01,angulo02,angulo03,soma_angulos_internos){
if(soma_angulos_internos === 180){
    if(angulo01 < 90 && angulo02 < 90 && angulo03  < 90){
        print(`
            ÂNGULOS INFORMADO: ${angulo01}, ${angulo02}, ${angulo03}
            SOMAS DOS ANGULOS INTERNOS = ${soma_angulos_internos}
            RESULTADO: FORMAM UM TRIÂNGULO ACUTÂNGULO.
        `)
    }
    else if(angulo01 === 90 || angulo02 === 90 || angulo03 === 90){
        print(`
        AÂNGULOS INFORMADO: ${angulo01}, ${angulo02}, ${angulo03}
        SOMAS DOS ANGULOS INTERNOS = ${soma_angulos_internos}
        RESULTADO: FORMAM UM TRIÂNGULO RETÂNGULO.
        `)
    }
    else if(angulo01 > 90 || angulo02 > 90 || angulo03 > 90 ){
        print(`
        AÂNGULOS INFORMADO: ${angulo01}, ${angulo02}, ${angulo03}
        SOMAS DOS ANGULOS INTERNOS = ${soma_angulos_internos}
        RESULTADO: FORMAM UM TRIÂNGULO OBTUSÂNGULO 

    `)
}
    
    else{
        print("ERRO")
    }
}  
else{
    print(`
    A SOMA DOS ÂNGULOS INTERNO DE UM TRIÂNGULO NÃO DEU 180 GRAUS, ENTÃO NÃO É POSSIVEL FORMAR UM TRIÂNGULO
    TENTE NOVAMENTE.....
    
    `)
}
}
function angulo_zero(angulo01,angulo02,angulo03){
    return angulo01 > 0 && angulo02 > 0 && angulo03 > 0
}

main()