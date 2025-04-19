import { writeFileSync } from "fs";
import { ulid } from "ulidx";
import { float, input, int } from "./utils.js";


export function escolhaMenu(){
    return int(input(`
    ----------- MOVIES ------------
    | 1 --> REGISTRAR FILME
    | 2 --> LISTAR FILMES
    | 3 --> ATUALIZAR FILMES
    | 4 --> EXCLUIR FILMES
    | 5 --> ORDENAR FILMES
    | 6 --> SALVAR
    | ESCOLHA:`))
}

export function voltarMenu(){
    return int(input("DIGITE QUALQUER NUMERO PARA VOLTAR AO MENU OU DIGITE 1 PARA FINALIZAR PROGRAMA : "))
}

export function criarMovies(movies){
    let moviesObject = {}
    moviesObject["id"] = ulid()
    moviesObject["nome"] = input("NOME DO FILME : ")
    moviesObject["ano"] = input("INFORME O ANO DO FILME : ")
    moviesObject["IMDB"] = float(input("INFORME A NOTA DO FILME : "))
    moviesObject["gênero"] = input("GENERO DO FILME :")
    moviesObject["bilheteria"] = float(input("ARRECADAÇÃO : ")) 

    movies.push(moviesObject)
}

export function listarMovies(movies){
    let count = 1; let String = "";
    for(let i of movies){
        String += (`
    | NUMERO        : ${count}
    | ID DO FILME   : ${i["id"]}
    | NOME DO FILME : ${i["nome"]}
    | IMDB          : ${i["IMDB"]}
    | GÊNERO        : ${i["gênero"]}
    | BILHETERIA    : ${i["bilheteria"]}
    \n`)
        count++
    }
    return String
}

export function atualizarMovies(movies,entrada){
    for(let i = 0; i < movies.length;i++){
        if(movies[i]["id"] === entrada){
            movies[i]["nome"] = input("NOME DO FILME : ")
            movies[i]["ano"] = input("INFORME O ANO DO FILME : ")
            movies[i]["IMDB"] = float(input("INFORME A NOTA DO FILME : "))
            movies[i]["gênero"] = input("GENERO DO FILME :")
            movies[i]["bilheteria"] = float(input("ARRECADAÇÃO : ")) 
        }
    }
}
export function salvar(movies){
    let saidaString = "------------- FILMES --------------- \n";
    saidaString += listarMovies(movies)

    let nomeArquivo = input("INFORME O NOME DO ARQUIVO + FORMARTO (ex:filmes.txt)")

    return writeFileSync(nomeArquivo,saidaString);
}

export function deletarMovies(movies,entrada){
    for(let i = 0; i < movies.length;i++){
        if(movies[i]["id"] === entrada){
            movies.splice(i,1)
        }
    }
}