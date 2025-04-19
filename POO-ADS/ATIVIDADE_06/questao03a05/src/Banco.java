import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Banco {
    private List<Conta> contas = new ArrayList<>();
    private List<Cliente> clientes = new ArrayList<>();

    public void inserirConta(Conta conta) {
        contas.add(conta);
        System.out.println("Conta inserida com sucesso!");
    }

    public void inserirCliente(Cliente cliente) {
        clientes.add(cliente);
        System.out.println("Cliente inserida com sucesso!");
    }

    public Conta consultarConta(String numero) {
        for (Conta conta : contas) {
            if (conta.getNumero().equals(numero)) {
                return conta;
            }
        }
        return null;
    }

    public void excluirConta(String numero) {
        Conta conta = consultarConta(numero);
        Cliente cliente = consultarClientePorCPF(conta.getCliente().getCpf());
        if (conta != null) {
            contas.remove(conta);
            cliente.getContas().remove(conta);
            System.out.println("Conta excluída com sucesso!");
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public void excluirCliente(String numero) {
        Cliente cliente = consultarClientePorCPF(numero);
        List<Conta> contas1 = cliente.getContas();
        if (cliente != null) {
            contas.remove(contas1);
            clientes.remove(cliente);
            System.out.println("Cliente excluído com sucesso!!!");
            System.out.println("Contas associadas ao cliente excluida com sucesso!");
        }else{
            System.out.println("Cliente não encontrado.");
        }
    }

    public Cliente consultarClientePorCPF(String CPF) {
        for (Cliente cliente : clientes) {
            if (cliente.getCpf().equals(CPF)) {
                return cliente;
            }
        }
        return null;
    }

    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }

    public List<Cliente> getClientes() {
        return clientes;
    }

    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }
}
