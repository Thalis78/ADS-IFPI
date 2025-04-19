// Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { question } from "readline-sync";

// ENTRADA:
var celsius = Number(question("INFORME UMA TEMPERATURA EM GRAUS? C"))

// PROCESSAMENTO:
var fahrenheit = ((9*celsius) + 160)/5

// SAÍDA:
console.log(`
    TEMPERATURA CELSIUS: C°${celsius}
    TEMPERATURA CONVERTIDA EM FAHRENHEIT: F°${fahrenheit}
`)