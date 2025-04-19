// Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o 
// valor  de    num2  se  opção  for  igual  a  2;  e  o  valor  de  num3  se  opção  for  igual  a  3.  Os  únicos  valores 
// possíveis para a variável opção são 1, 2 e 3.

import { print , input , int ,float,get_number} from "/users/thali/documents/javascript(condicional)/apelidos.js";


function main() {
    let data = new Date(input(`
        INFORME UMA DATA BASEADA NA DATA AMERICANA...
        EX:. 02/19/2024 -- MES/DIA/ANO
        DATA:`));

    return validar_data(data);
}

function validar_data(data) {
    if (!isNaN(data)) {
        print(`
         DATA DIGITADA PELO USUÁRIO: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}
         DATA: VÁLIDA
        `);
    } else {
        print(`
        A DATA QUE VOCÊ DIGITOU É INVÁLIDA.....
        VERIFIQUE O QUE VOCÊ ERROU E TENTE NOVAMENTE
        `);
    }
}

main();
