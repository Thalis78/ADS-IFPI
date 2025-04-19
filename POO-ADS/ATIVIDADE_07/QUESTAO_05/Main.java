package QUESTAO_05;

import java.time.LocalDate;
import java.util.Date;
import java.time.format.DateTimeFormatter;

public class Main {
    public static void main(String[] args) {
        Estoque estoque = new Estoque();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDate dataValidade = LocalDate.parse("2024/01/01", formatter);

        ProdutoPerecivel produtoPerecivel = new ProdutoPerecivel(1, "Café", 5.75,100);
        produtoPerecivel.setDataValidade(dataValidade);

        estoque.inserirProduto(produtoPerecivel);

        estoque.listarProdutosVencidos();

    }
}