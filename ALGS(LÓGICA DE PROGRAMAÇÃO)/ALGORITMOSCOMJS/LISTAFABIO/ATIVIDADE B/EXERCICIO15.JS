// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { question } from "readline-sync";

// ENTRADA:
var base_triangulo = Number(question("INFORME A BASE DO TRIANGULO?"))
var altura_triangulo = Number(question("INFORME A ALTURA DO TRIANGULO?"))

// PROCESSAMENTO:
var area = (base_triangulo*altura_triangulo)/2

// SAIDA:
console.log(`
    BASE DO TRIANGULO: ${base_triangulo}
    ALTURA DO TRIANGULO: ${altura_triangulo}
    AREA DO TRIANGULO: ${area}
`)