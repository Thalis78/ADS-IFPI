// Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a 
// quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada 
// pelo usuário.

import { question } from "readline-sync";

// ENTRADA:
var peso_latao = Number(question("INFORME O PESO EM KG DO LATAO? KG"))

// PROCESSAMENTO:
var cobre = (peso_latao * 0.70)
var zinco = (peso_latao * 0.30)

// SAÍDA:
console.log(`
    COMPOSIÇÃO DO LATÃO {
        COBRE:${cobre}
        ZINCO:${zinco}
    }


`)