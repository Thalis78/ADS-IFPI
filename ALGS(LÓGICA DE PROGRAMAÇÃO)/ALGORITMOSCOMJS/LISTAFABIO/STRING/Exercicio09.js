import { print ,inputpassword} from './apelidos.js';


function main(){
    let password = inputpassword("INFORME UMA SENHA: ")
    if(password === '1234'){
        print("VOCE TEM O ACESSO!!!")
    }else{
        print("ACESSO NEGADO!!!")
    }
}


main();
