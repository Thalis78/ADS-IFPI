// 21 - Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync";

// ENTRADA:
var fahrenheit = Number(question("INFORME UMA TEMPERATURA EM FAHRENHEIT? F"))

// PROCESSAMENTO:
var celsius = ((5*fahrenheit)-160)/9

// SAÍDA:
console.log(`
    TEMPERATURA EM FAHRENHEIT: F°${fahrenheit}
    TEMPERATURA CONVERTIDA EM CELSIUS: C°${celsius}

`)