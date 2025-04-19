// 12 - Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import { question } from "readline-sync";

// ENTRADA:

var salario_base = Number(question("ME DIGA SEU SALARIO? R$"))

// PROCESSAMENTO:

var aumento_salario = salario_base + (salario_base * 0.25)

// SAÍDA:
console.log(`

    SALARIO INICIAL: R$${salario_base}
    AUMENTO: +${0.25*100}%
    SALARIO APÓS AUMENTO: R$${aumento_salario}


`)
