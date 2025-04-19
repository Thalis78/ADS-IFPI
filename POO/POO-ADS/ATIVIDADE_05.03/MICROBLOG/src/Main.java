import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Postagem postagem = new Postagem(1,"teste1",0);
        Postagem postagem2 = new Postagem(2,"teste2",0);
        Postagem postagem3 = new Postagem(3,"teste3",0);

        Microblog microblog = new Microblog();
        microblog.addPostagem(postagem);
        microblog.addPostagem(postagem2);
        microblog.addPostagem(postagem3);

        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem.getId());
        microblog.curtirPostagem(postagem2.getId());
        microblog.curtirPostagem(postagem3.getId());
        microblog.curtirPostagem(postagem3.getId());
        microblog.curtirPostagem(postagem3.getId());
        //RESULTADO: TESTE1
        microblog.postagemMaisCurtidas();
        //VAI EXCLUIR O TESTE 2
        microblog.excluirPostagem(postagem2.getId());
        //MOSTRA SÓ teste 1 e teste 3
        microblog.toStrings();
    }
}