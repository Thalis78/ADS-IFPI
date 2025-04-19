// Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r³) /3) (PI = 3.14)

import { question } from "readline-sync";

// ENTRADA:
var raio_esfera = Number(question("INFORME O RAIO DA ESFERA?"))

// PROCESSAMENTO:
var pi = Math.PI
var volume_esfera = ((4*pi*raio_esfera**3)/3)

// SAIDA:
console.log(`
    RAIO DA ESFERA: ${raio_esfera}
    VOLUME DA ESFERA: ${volume_esfera}

`)