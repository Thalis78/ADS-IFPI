import { get_number, print } from "./Apelido.js"
import { readFileSync, writeFileSync } from 'fs';


function Main() {

    let ListaAlunoAds = [];
    let count = 0;
    while (ListaAlunoAds.length < 62){
        ListaAlunoAds.push(ListaAluno(count));
         count++;
    }
    ResultadoMen(ListaAlunoAds)

}Main();
function Menu(Lista){
    let Escolha = get_number(`
        >>>>>>>>>>>>>>>>> MENU DO SORTEIO <<<<<<<<<<<<<<<<<<<<<<<<<<<<
        | QUANTIDADE DE ALUNOS ${Lista.length}
        | (1) - APAGAR ALGUEM DA LISTA.
        | (2) - SORTEIO.
        | (3) - SALVAR.
        | (0) - FINALIZAR O PROGRAMA.
        | OPCAO: `);
    
    return Escolha ; 
}

function ResultadoMen(Lista){
    let ResultadoMenu = Menu(Lista);
    let AtualizacaoDaLista = Lista;
    let Grupo = 0;
    while (ResultadoMenu > 3){
        ResultadoMenu = Menu(Lista);
    }
    switch(ResultadoMenu){
        case 1:
            AtualizacaoDaLista = AlunoDeletado(Lista);
            break;
        case 2:
            Grupo = QuantidadeGrupos();
            let QuantidadeEmCadaGrupo =  QuantidadeEmGrupo(Grupo, AtualizacaoDaLista.length);
            let NovaLista = [];
            let Count = 1;
            while (Count <= Grupo) {
                print(`\n>>>>>>>>>>>>>>>>>>>>>>>>GRUPO ${Count}<<<<<<<<<<<<<<<<<<<<`);
                let grupoSorteado = Sorteio(AtualizacaoDaLista, QuantidadeEmCadaGrupo);
                NovaLista.push(grupoSorteado); 
                Count++;
            }

            AtualizacaoDaLista = [].concat(...NovaLista); 
    
            let PerguntaUsuario = get_number("DIGITE (1) - PARA VOLTAR AO MENU; (2) - FINALIZAR PROGRAMA; ");
            while(PerguntaUsuario > 3 || PerguntaUsuario < 0){
                PerguntaUsuario = get_number("DIGITE (1) - PARA VOLTAR AO MENU; (2) - FINALIZAR PROGRAMA; ");
            }
            ResultadoDaSegundaOpcao(PerguntaUsuario,AtualizacaoDaLista,Grupo);
            
        case 3:
            Salvar(AtualizacaoDaLista,Grupo);
            break; 
        case 0:
            print("PROGRAMA FINALIZADO!!!!")         
            break;

    }
}
function ResultadoDaSegundaOpcao(PerguntaUsuario,Lista, AtualizacaoDaLista, grupo) {
    switch (PerguntaUsuario) {
        case 1:
            ResultadoMen(Lista);
            break;
        case 2:
            Salvar(AtualizacaoDaLista,grupo)
            break;
    }
}
function Salvar(AtualizacaoDaLista, grupo) {
    let elementosPorGrupo = Math.ceil(AtualizacaoDaLista.length / grupo);
    let conteudoParaSalvar = ''; 
    let i = 0;
    while (i < AtualizacaoDaLista.length) {
        conteudoParaSalvar += `\n>>>>>>>>>>>>>>>>>>>>>>>>GRUPO ${i / elementosPorGrupo + 1}<<<<<<<<<<<<<<<<<<<<\n`;
        let j = i;
        while (j < i + elementosPorGrupo && j < AtualizacaoDaLista.length) {
            if (AtualizacaoDaLista[j] !== undefined) {
                conteudoParaSalvar += `| ---> ${j + 1} = ${AtualizacaoDaLista[j]}\n`;
            }
            j++;
        }
        i += elementosPorGrupo;
    }
    
    writeFileSync('SORTEIO.TXT', conteudoParaSalvar);
}

function AlunoDeletado(Lista){
    let alunos = DeletarAluno(Lista);
    let ExcluirMaisUm = get_number("DIGITE (1) - PARA EXCLUIR MAIS UMA PESSOA OU (2) - PARA VOLTAR: ")
    while (ExcluirMaisUm !== 0) {

        if(ExcluirMaisUm === 1){
            alunos = DeletarAluno(Lista);
            MostrarLista(alunos);
            ExcluirMaisUm = get_number("DIGITE (1) PARA EXCLUIR MAIS UMA PESSOA OU (2) - PARA VOLTAR: ");
        }else if(ExcluirMaisUm === 2){
            ResultadoMen(Lista);
            alunos;
            break;

        }else{
            print("ALGUM ERRO ACONTECEU, DIGITE VALORES ENTRE 1 A 2 :)")
            ExcluirMaisUm = get_number("DIGITE (1) PARA EXCLUIR MAIS UMA PESSOA OU (2) PARA VOLTAR: ")
        }
    }return alunos
}
function DeletarAluno(Lista){
    MostrarLista(Lista)
    let Excluir = get_number("DIGITE O NUMERO DA CHAMADA DAS PESSOAS QUE VOCE QUER: ");
    Excluir = Excluir - 1;
    print("ALUNO EXCLUIDO DA LISTA: " + Lista[Excluir]);
    Lista.splice(Excluir,1);
    return Lista;
}
function MostrarLista(Lista){
        let Count = 0;
        while(Count < Lista.length){
            print(`|${Count+1} = ${Lista[Count]}`);
            Count++;
        }
}
function QuantidadeGrupos(){
    let Quantidade = get_number("QUANTOS GRUPOS VOCE DESEJA PARA REALIZACAO DO SORTEIO? ");
    return Quantidade;
}
function QuantidadeEmGrupo(QuantidadeGrupos,QuantiAlunos){
    let QuantidadeSorteio = Math.round(QuantiAlunos/QuantidadeGrupos);
    return QuantidadeSorteio;
}
 
function Sorteio(Lista, QuantidadeGrupo) {
    let Count = 0;
    let ListaAtualizada = Lista; 
    let ListaAtual = []
    while (Count < QuantidadeGrupo) {
        let SorteioIndex = Math.floor(Math.random() * ListaAtualizada.length);
        let Sorteio = ListaAtualizada[SorteioIndex];
        
        if (Sorteio === ListaAtualizada[SorteioIndex]) {
            ListaAtual.push(Sorteio);
            ListaAtualizada.splice(SorteioIndex, 1);
            Count++;
        }
    }
    Count = 0;
    ListaAtual.sort()
    while(Count < ListaAtual.length && ListaAtual[Count] != undefined){
        print(`| ---> ${Count + 1} = ${ListaAtual[Count]}`);
        Count++;
    }return ListaAtual;
}

function ListaAluno(numero){
    const lista = readFileSync('alunos-algoritmos-20241.csv', 'utf-8');
    let ListaAluno = lista.split('\n');
    return ListaAluno[numero];
}