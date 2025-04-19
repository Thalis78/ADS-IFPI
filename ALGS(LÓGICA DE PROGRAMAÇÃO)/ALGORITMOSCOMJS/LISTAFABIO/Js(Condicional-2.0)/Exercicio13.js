// Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são: 
// a) "Telefonou para a vítima ?" 
// b) "Esteve no local do crime ?" 
// c) "Mora perto da vítima ?" 
// d) "Devia para a vítima ?" 
// e) "Já trabalhou com a vítima ?"  
// O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa 
// responder  positivamente  a  2  questões  ela  deve  ser  classificada  como  "Suspeita",  entre  3  e  4  como 
// "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente". 
import { input,print } from "./apelidos.js";
function main(){
    let pergunta01 = input("TELEFONOU PRA VITIMA? ").toUpperCase()
    let pergunta02 = input("ESTEVE NO LOCAL DO CRIME? ") .toUpperCase()
    let pergunta03 = input("MORA PERTO DA VITIMA? ").toUpperCase()
    let pergunta04 = input("DEVIA PARA A VITIMA? ").toUpperCase()
    let pergunta05 = input("JA TRABALHOU COM A VITIMA? ").toUpperCase()
    teste(pergunta01,pergunta02,pergunta03,pergunta04,pergunta05)
}   
function teste(p1,p2,p3,p4,p5){
    let classificacao = 0
    if(p1 === "SIM"){
        classificacao ++
    }
    if(p2 === "SIM"){
        classificacao ++
    }
    if(p3 === "SIM"){
        classificacao ++
    }
    if(p4 === "SIM"){
        classificacao ++
    }
    if(p5 === "SIM"){
        classificacao ++
    }
    switch (classificacao){
        case 5:
            print(`VOCÊ É ASSASINO`)
            break
        case (3 || 4): 
            print(`VOCÊ É CÚMPLICE`)
            break
        case 2:
            print(`VOCÊ É SUSPEITO`)
            break
        default:
            print(`VOCÊ É INOCENTE`)
    }
}main()