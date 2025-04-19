import { atualizarMovies, criarMovies, deletarMovies, escolhaMenu, listarMovies, salvar, voltarMenu } from "./app_funcionalidades.js";
import { bubble_sort, clear, input, print } from "./utils.js";


function main(){
    let movies = []
    let voltar_menu = 0;
    while(voltar_menu != 1){
        switch(escolhaMenu()){
            case 1:
                clear()
                criarMovies(movies)
                break;
            case 2:
                clear()
                print(listarMovies(movies))
                break;
            case 3:
                clear()
                print(listarMovies(movies))
                atualizarMovies(movies,input("ID DO FILME : "))
                break;
            case 4:
                clear()
                print(listarMovies(movies))
                deletarMovies(movies, input("ID DO FILME : "))
                break;
            case 5:
                clear()
                let asc_or_desc =  input("DIGITE ASC OU DESC : ").toLowerCase()
                bubble_sort(movies,asc_or_desc === "ASC" ? (i,i2) => i > i2 : (i,i2) => i < i2, "nome")
                break;
            case 6:
                clear()
                salvar(movies)
                print("SALVO COM SUCESSO!! ")
                break;
            default:
                clear()
                print("OPÇÃO INVÁLIDA.....")
                break;
        }
        voltar_menu = voltarMenu()
        clear()
    }
    
}main()