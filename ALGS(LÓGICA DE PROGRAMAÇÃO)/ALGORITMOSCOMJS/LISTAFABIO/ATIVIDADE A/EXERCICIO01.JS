// 01 - Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
import { question } from "readline-sync"

// ENTRADA:
let m_s = Number(question("INFORME UMA VELOCIDADE EM METROS POR SEGUNDO? M/S"))
// PROCESSAMENTO:
let vkm_h = (m_s * 3.6)
// SAIDA:
console.log(`VELOCIDADE EM QUILÔMETRO POR HORA:  ${vkm_h} KM/H`)

