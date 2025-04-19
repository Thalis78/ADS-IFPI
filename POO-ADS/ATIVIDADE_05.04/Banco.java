import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Banco {
    List<Conta> contas = new ArrayList<>();
    List<Cliente> clientes = new ArrayList<>();

    void inserirConta(Conta conta) {
        contas.add(conta);
        System.out.println("Conta inserida com sucesso!");
    }

    void inserirCliente(Cliente cliente) {
        clientes.add(cliente);
        System.out.println("Cliente inserida com sucesso!");
    }

    Conta consultarConta(String numero) {
        for (Conta conta : contas) {
            if (conta.numero.equals(numero)) {
                return conta;
            }
        }
        return null;
    }

    void excluirConta(String numero) {
        Conta conta = consultarConta(numero);
        Cliente cliente = consultarClientePorCPF(conta.cliente.cpf);
        if (conta != null) {
            contas.remove(conta);
            cliente.contas.remove(conta);
            System.out.println("Conta excluída com sucesso!");
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    void excluirCliente(String numero) {
        Cliente cliente = consultarClientePorCPF(numero);
        List<Conta> contas1 = cliente.contas;
        if (cliente != null) {
            contas.remove(contas1);
            clientes.remove(cliente);
            System.out.println("Cliente excluído com sucesso!!!");
            System.out.println("Contas associadas ao cliente excluida com sucesso!");
        }else{
            System.out.println("Cliente não encontrado.");
        }
    }

    Cliente consultarClientePorCPF(String CPF) {
        for (Cliente cliente : clientes) {
            if (cliente.cpf.equals(CPF)) {
                return cliente;
            }
        }
        return null;
    }
}
