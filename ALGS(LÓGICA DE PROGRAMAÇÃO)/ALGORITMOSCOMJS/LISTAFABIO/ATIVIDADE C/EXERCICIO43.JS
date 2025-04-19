// Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo 
// Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
// ax + by = c
// dx + ey = f
// x = (c*e - b*f)/(a*e - b*d)
// y = (a*f - c*d)/(a*e - b*d)

import { question } from "readline-sync";


// ENTRADA:
var a = Number(question("INFORME UM VALOR PARA A? "))
var b = Number(question("INFORME UM VALOR PARA B? "))
var c = Number(question("INFORME UM VALOR PARA C? "))
var d = Number(question("INFORME UM VALOR PARA D? "))
var e = Number(question("INFORME UM VALOR PARA E? "))
var f = Number(question("INFORME UM VALOR PARA F? "))

// PROCESSAMENTO:
var x = (c*e - b*f)/(a*e - b*d)
var y = (a*f - c*d)/(a*e - b*d)

// SAIDA:
console.log(`
    X:${x.toFixed(3)}
    Y:${y.toFixed(3)}
`)