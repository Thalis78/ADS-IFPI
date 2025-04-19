package QUESTAO_05;

import java.time.LocalDate;
import java.util.Date;

public class ProdutoPerecivel extends Produto{
    public Date dataAtual;
    private LocalDate dataValidade;

    public ProdutoPerecivel(int id, String descricao, double valor_unitario, int quantidade_estoque) {
        super(id,descricao,valor_unitario,quantidade_estoque);
    }

    public boolean produtoValido(){
        return LocalDate.now().isBefore(dataValidade) || LocalDate.now().isEqual(dataValidade);
    }

    public void repor(ProdutoPerecivel produtoPerecivel, int quantidade){
        if(produtoValido()){
            produtoPerecivel.setQuantidade_estoque(produtoPerecivel.getQuantidade_estoque() + quantidade);
        }

    }
    public void darBaixa(ProdutoPerecivel produtoPerecivel, int quantidade){
        if(produtoValido()){
            if(produtoPerecivel.getQuantidade_estoque() >= quantidade){
                produtoPerecivel.setQuantidade_estoque(produtoPerecivel.getQuantidade_estoque() - quantidade);
            }
        }
    }

    public LocalDate getDataValidade() {
        return dataValidade;
    }

    public void setDataValidade(LocalDate dataValidade) {
        this.dataValidade = dataValidade;
    }
}
