import java.util.ArrayList;
import java.util.List;

public class Microblog {
    private List<Postagem> postagem;

    public Microblog() {
        postagem = new ArrayList<Postagem>();
    }
    public void addPostagem(Postagem postagem) {
        this.postagem.add(postagem);
    }
    public void excluirPostagem(int id){
        for(Postagem postagem : postagem){
            if(id == postagem.getId()){
                this.postagem.remove(postagem);
            }
        }
        System.out.println("Postagem excluida com sucesso!");
    }
    public void postagemMaisCurtidas(){
        Postagem postagem1 = null;
        int quant_curtidas = 0;
        for(Postagem postagem : postagem){
            if(postagem.getQuantidade_curtidas() > quant_curtidas){
                quant_curtidas = postagem.getQuantidade_curtidas();
                postagem1 = postagem;
            }
        }
        System.out.printf("Postagem com mais curtida: %s com um total de : %d curtidas\n",postagem1.getTexto(),postagem1.getQuantidade_curtidas());;
    }

    public void curtirPostagem(int id){
        for(Postagem postagem : postagem){
            if(postagem.getId() == id){
                postagem.curtidas();
            }
        }
    }
    public void toStrings(){
        String retorno = "";
        for(Postagem postagem : postagem){
            retorno += postagem.toString() + "\n";
        }
        System.out.printf("------------RESULTADO----------------\n%s",retorno);
    }
}
