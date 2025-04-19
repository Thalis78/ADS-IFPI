public class Postagem {
    private int id;
    private String texto;
    private int quantidade_curtidas = 0;

    public Postagem(int id,String texto, int quantidade_curtidas) {
        this.id = id;
       this.texto = texto;
        this.quantidade_curtidas = quantidade_curtidas;
    }
    public int curtidas(){
        return this.quantidade_curtidas++;
    }
    public String toString() {
        return texto + " " + quantidade_curtidas + " curtidas";
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public int getQuantidade_curtidas() {
        return quantidade_curtidas;
    }

    public void setQuantidade_curtidas(int quantidade_curtidas) {
        this.quantidade_curtidas = quantidade_curtidas;
    }
}
