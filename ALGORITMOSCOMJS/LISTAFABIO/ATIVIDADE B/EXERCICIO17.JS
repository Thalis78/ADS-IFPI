// 17 - Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import { question } from "readline-sync";

// ENTRADA:
var base_retangulo = Number(question("INFORME A BASE DO RETANGULO?"))
var altura_retangulo = Number(question("INFORME A ALTURA DO RETANGULO?"))

// PROCESSAMENTO:
var area = (base_retangulo*altura_retangulo)

// SAIDA:
console.log(`

    BASE DO RETÂNGULO: ${base_retangulo}
    ALTURA DO RETÂNGULO: ${altura_retangulo}
    ÁREA DO RETÂNGULO: ${area}

`)