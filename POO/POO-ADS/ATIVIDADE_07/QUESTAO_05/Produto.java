package QUESTAO_05;

public class Produto {
    private int id;
    private String descricao;
    private double valor_unitario;
    private int quantidade_estoque;

    public Produto(int id, String descricao, double valor_unitario, int quantidade_estoque) {
        this.id = id;
        this.descricao = descricao;
        this.valor_unitario = valor_unitario;
        this.quantidade_estoque = quantidade_estoque;
    }

    public int repor(int quantidade){
        return this.quantidade_estoque + quantidade;
    }
    public int darBaixa(int quantidade){
        return this.quantidade_estoque - quantidade;
    }

    public int getQuantidade_estoque() {
        return quantidade_estoque;
    }

    public void setQuantidade_estoque(int quantidade_estoque) {
        this.quantidade_estoque = quantidade_estoque;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getValor_unitario() {
        return valor_unitario;
    }

    public void setValor_unitario(double valor_unitario) {
        this.valor_unitario = valor_unitario;
    }
}
