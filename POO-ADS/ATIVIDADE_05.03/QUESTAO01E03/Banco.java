import java.util.ArrayList;
import java.util.List;

public class Banco {
    private List<Conta> contas = new ArrayList<>();
    private List<Cliente> clientes = new ArrayList<>();

    public List<Cliente> getClientes() {
        return clientes;
    }

    public void setClientes(List<Cliente> clientes) {
        this.clientes = clientes;
    }

    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }

    public void inserirConta(Conta conta) {
        contas.add(conta);
    }

    public void inserirCliente(Cliente cliente) {
        clientes.add(cliente);
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
        if (conta != null) {
            contas.remove(conta);
            System.out.println("Conta excluída com sucesso!");
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public void alterarConta(Conta conta) {
        Conta contaExistente = consultarConta(conta.getNumero());
        if (contaExistente != null) {
            contaExistente = conta;
            System.out.println("Conta alterada com sucesso.");
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public void transferir(String numeroOrigem, String numeroDestino, double valor) {
        Conta contaOrigem = consultarConta(numeroOrigem);
        Conta contaDestino = consultarConta(numeroDestino);

        if (contaOrigem != null && contaDestino != null && contaOrigem.getSaldo() >= valor) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            System.out.println("Transferência realizada com sucesso.");
        } else {
            System.out.println("Saldo insuficiente ou contas inválidas.");
        }
    }

    public double totalSaldo() {
        double total = 0;
        for (Conta conta : contas) {
            total += conta.getSaldo();
        }
        return total;
    }

    public int quantidadeDeContas() {
        return contas.size();
    }

    public double mediaSaldo() {
        if (quantidadeDeContas() > 0) {
            return totalSaldo() / quantidadeDeContas();
        }
        return 0;
    }

    public Cliente consultarClientePorCPF(String CPF) {
        for (Cliente cliente : clientes) {
            if (cliente.getCpf() == CPF) {
                return cliente;
            }
        }
        return null;
    }
}
