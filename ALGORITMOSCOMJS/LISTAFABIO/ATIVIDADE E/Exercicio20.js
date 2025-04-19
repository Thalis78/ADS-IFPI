// Leia  a  medida  de  um  ângulo  (entre  0  e  360°)  e  escreva  o  quadrante  (primeiro,  segundo,  terceiro  ou quarto) em que o ângulo se localiza. 
// Primeiro Quadrante (0° a 90°);
// Segundo Quadrante (90° a 180°);
// Terceiro Quadrante (180° a 270°);
// Quarto Quadrante (270° a 360°);

import { get_number, print } from "/users/thali/documents/javascript(condicional)/apelidos.js";

function main(){
    let angulo = get_number(`
        INFORME UM ANGULO ENTRE 0 A 360
        ANGULO:`)

   
       return(quadrante(angulo))
    

}
function quadrante(angulo){
    if(angulo >= 0 && angulo <=90 ){
        print(`
        ANGULO INFORMADO: ${angulo}°
        ESTÁ NO PRIMEIRO QUADRANTE(0° A 90°)
        `)
    }
    if(angulo > 90 && angulo <=180){
        print(`
        ANGULO INFORMADO: ${angulo}°
        ESTÁ NO SEGUNDO QUADRANTE(90° A 180°)
        `)
    }
    if(angulo > 180 && angulo <=270){
        print(`
        ANGULO INFORMADO: ${angulo}°
        ESTÁ NO TERCEIRO QUADRANTE(180° A 270°)
        `)
    }
    if(angulo > 270 && angulo <=360){
        print(`
        ANGULO INFORMADO: ${angulo}°
        ESTÁ NO QUARTO QUADRANTE(270° A 360°)
        `)
    }
}
main()