
import java.io.*;
import java.util.ArrayList;
import java.util.List;

import Exception.*;

public class Banco {
    private List<Conta> contas;
    private List<Cliente> clientes;

    public Banco(List<Conta> contas, List<Cliente> clientes) {
        this.contas = contas;
        this.clientes = clientes;
    }

    public Conta consultar(String numeroConta) {
        return contas.stream()
                .filter(conta -> conta.getNumero().equals(numeroConta))
                .findFirst()
                .orElseThrow(ContaInexistenteError::new);
    }

    public Conta consultarPorIndice(int indice) {
        if (indice < 0 || indice >= contas.size()) {
            throw new ContaInexistenteError();
        }
        return contas.get(indice);
    }

    public void alterar(String numeroConta, Conta novaConta) {
        Conta conta = consultar(numeroConta);
        conta.atualizarDados(novaConta.getNumero(), novaConta.cliente);
    }

    public void depositar(String numeroConta, double valor) {
        Conta conta = consultar(numeroConta);
        conta.depositar(valor);
    }

    public void sacar(String numeroConta, double valor) {
        Conta conta = consultar(numeroConta);
        conta.sacar(valor);
    }

    public void transferir(String numeroOrigem, String numeroDestino, double valor) {
        Conta origem = consultar(numeroOrigem);
        Conta destino = consultar(numeroDestino);
        origem.transferir(destino, valor);
    }

    public void renderJuros(String numeroConta) {
        Conta conta = consultar(numeroConta);
        if (!(conta instanceof ContaPoupanca)) {
            System.out.println("Invalido!");
        }
        ((ContaPoupanca) conta).renderJuros();
    }
}
