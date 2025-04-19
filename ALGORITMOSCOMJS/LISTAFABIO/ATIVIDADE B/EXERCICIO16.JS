// Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado²)

import { question } from "readline-sync";

// ENTRADA:
var lado_quadrado = Number(question("INFORME UM VALOR DO LADO DE UM QUADRADO?"))

// PROCESSAMENTO:
var area = lado_quadrado**2

// SAIDA:
console.log(` 
    ÁREA DO QUADRADO: ${area}

`)