// 07 - Leia  3  (três)  números  (cada  número  corresponde  a  um  lado  do  triângulo),  verifique  e  escreva  se  os  3 
// (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se 
// formam,  verifique  se  formam  um  triângulo  equilátero  (3  lados  iguais),  isósceles  (2  lados  iguais)  ou 
// escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero)

// NESSE CASO O DOIS LADOS TEM QUE SER MAIOR QUE O TERCEIRO LADO, CASO O CONTRARIO NÃO É POSSIVEL FORMAR O TRIÂNGULO
// A + B > C;  B+C > A; A+C > B;

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";

// ENTRADA:

function main(){
let A = get_number("LADO DO TRIANGULO: ")
let B = get_number("LADO DO TRIANGULO: ")
let C = get_number("LADO DO TRIANGULO: ")

return triangulo(A,B,C)
}

// PROCESSAMENTO/SAIDA:
function triangulo(A,B,C){
    if(A+B > C && B + C > A && C+A > B){
        if(A === B && B === C){
            print(`
                LADOS DO TRIÂNGULO INFORMADO PELO USUARIO: ${A},${B},${C}
                TODOS OS LADOS SÃO IGUAIS, ISSO SIGNIFICA QUE ELE É UM TRIÂNGULO EQUILÁTERO.
            `)
        }
        else if(A === B || B === C || A === C){
            print(`
            LADOS DO TRIÂNGULO INFORMADO PELO USUARIO: ${A},${B},${C}
            DOIS DO LADOS SÃO IGUAIS, ISSO SIGNIFICA QUE ELE É UM TRIÂNGULO ISÓSCELES.
        `)
        }
        else{
            print(`
            LADOS DO TRIÂNGULO INFORMADO PELO USUARIO: ${A},${B},${C}
            DOIS DO LADOS SÃO IGUAIS, ISSO SIGNIFICA QUE ELE É UM TRIÂNGULO ESCALENO.
            
            `)
        }
    }
    else{
        print(`
            INFORME VALORES VÁLIDOS PARA FORMAÇÃO DO TRIÂNGULO....
        
        `)
    }
    }

main()