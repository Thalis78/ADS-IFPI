
import java.util.List;
import java.util.Scanner;

import Exception.*;

public class Main {
    public static void main(String[] args) {
        try {
            Cliente cliente = new Cliente("João", "12345678910", "01/01/1990");
            Conta conta = new ContaPoupanca("001", cliente, 1000, 5);
            Banco banco = new Banco(List.of(conta), List.of(cliente));
            banco.depositar("001", 500);
            banco.sacar("001", 200);
            banco.renderJuros("001");
        } catch (AplicacaoError e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}