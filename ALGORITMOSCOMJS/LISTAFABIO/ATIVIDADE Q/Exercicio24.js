// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
// número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
// escreva:
// a) média de salário da população;
// b) média de número de filhos;
// c) percentual de pessoas com salário de até R$ 1.000,00.
import { get_number, print } from "./apelidos.js";


function main(){
    let salario;
    let QuantidadePessoa = get_number("QUANTIDADE DE PESSOAS PRA PESQUISA");
    let NumeroFilho = 0;
    let SalarioAcima1000 = 0;
    let SalarioTotal = 0;
    for(let count = 0; count < QuantidadePessoa; count++){
        salario = Salario();
        print(salario)
        SalarioTotal += salario;
        NumeroFilho += QuantiFilho();
        SalarioAcima1000 += Acima1000(salario);
    }
    let MediaSalario = SalarioTotal/ QuantidadePessoa;
    let MediaFilho = NumeroFilho / QuantidadePessoa;
    let Percentual = percentual(SalarioAcima1000,QuantidadePessoa)
    Mensagem(QuantidadePessoa,MediaFilho,MediaSalario,Percentual)


}
function Salario(){
    return get_number("QUAL E SEU SALARIO?")
}
function QuantiFilho(){
    return get_number("QUANTOS FILHOS VOCE POSSUI? ")
}
function Acima1000(Salario){
    if(Salario >= 1000){
        return 1;
    }
    return 0
}
function percentual(SalarioAcima1000,Pessoa){
    print(SalarioAcima1000)
    if(SalarioAcima1000 > 0){
        return (SalarioAcima1000 / Pessoa) * 100

    }
    return 0
}

function Mensagem(QuantidadePessoa,MediaFilho,MediaSalario,Percentual){
    print(`
        >>>>>>>>>>>>>RESULTADO DA PESQUISA<<<<<<<<<<<<<<<<
        | ---> QUANTIDADE DE PESSOAS: ${QuantidadePessoa}
        | ---> MEDIA DE FILHOS POR PESSOA: ${MediaFilho}
        | ---> MEDIA DO SALARIO: R$${MediaSalario}
        | ---> PERCENTUAL DE PESSOAS QUE GANHAM ACIMA DE 1000: ${Percentual} %
    `)
}main()
