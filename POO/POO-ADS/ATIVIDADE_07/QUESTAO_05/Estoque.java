package QUESTAO_05;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Estoque {
    public Scanner scanner = new Scanner(System.in);

    List<Produto> produtos = new ArrayList<Produto>();

    public void inserirProduto(Produto produto) {
        if(validarProduto(produto.getId(),produto.getDescricao())){
            produtos.add(produto);
            System.out.println("Produto inserido com sucesso!");
        }else{
            System.out.println("Produto já existe!");
        }
    }
    public void removerProduto(Produto produto) {
        produtos.remove(produto);
        System.out.println("Produto removido com sucesso!");
    }
    public Produto consultarProdutoPorId(int id) {
        for (Produto produto : produtos) {
            if(produto.getId() == id) {
                return produto;
            }
        }
        System.out.println("Produto não encontrado!");
        return null;
    }

    public void reporProduto(Produto produto) {
        System.out.println("Informe a quantidade pra repor: ");
        int quantidade = scanner.nextInt();
        if(produtoExiste(produto)){
            produto.repor(quantidade);
        }
    }

    public  void DarBaixa(Produto produto) {
        System.out.println("Informe a quantidade pra dar baixa: ");
        int quantidade = scanner.nextInt();
        if(produtoExiste(produto)){
            produto.darBaixa(quantidade);
        }

    }

    public boolean validarProduto(int id, String descri){
        for(Produto produto : produtos){
            if(produto.getId() == id || produto.getDescricao() == descri){
                return false;
            }
        }
        return true;
    }

    public boolean produtoExiste(Produto produto){
        for (Produto produto1 : produtos) {
            if(produto1 == produto){
                return true;
            }
        }
        return false;
    }
    public void listarProdutosVencidos(){
        for(Produto produto : produtos){
            if(produto instanceof ProdutoPerecivel){
                ProdutoPerecivel produtoPerecivel = new ProdutoPerecivel(produto.getId(),produto.getDescricao(),produto.getValor_unitario(), produto.getQuantidade_estoque());

                if(produtoPerecivel.produtoValido()){
                    System.out.printf("PRODUTO: \n%d\n%s\n%f\n%d",produto.getId(),produto.getDescricao(),produto.getValor_unitario(),produto.getQuantidade_estoque());
                }
            }
        }
    }

}

