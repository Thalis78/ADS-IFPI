import java.util.ArrayList;
import java.util.List;

public class Banco {
    private List<Conta> contas;
    private List<Cliente> clientes;

    public Banco() {
        this.contas = new ArrayList<>();
        this.clientes = new ArrayList<>();
    }

    public void inserirConta(Conta conta) {
        for (Conta c : contas) {
            if (c.getId() == conta.getId() || c.getNumero().equals(conta.getNumero())) {
                System.out.println("Não é possível criar a conta, pois ela já existe.");
                return;
            }
        }
        contas.add(conta);
    }

    public void inserirCliente(Cliente cliente) {
        for (Cliente c : clientes) {
            if (c.getCpf().equals(cliente.getCpf()) || c.getId() == cliente.getId()) {
                System.out.println("Não é possível criar o cliente, pois ele já existe.");
                return;
            }
        }
        clientes.add(cliente);
    }

    public Cliente consultarClientePorCpf(String cpf) {
        for (Cliente cliente : clientes) {
            if (cliente.getCpf().equals(cpf)) {
                return cliente;
            }
        }
        return null;
    }

    public Conta buscarContaPorNumero(String numero) {
        for (Conta conta : contas) {
            if (conta.getNumero().equals(numero)) {
                return conta;
            }
        }
        return null;
    }

    public void associarContaCliente(String numeroConta, String cpfCliente) {
        Cliente cliente = consultarClientePorCpf(cpfCliente);
        if (cliente == null) {
            System.out.println("Cliente não encontrado.");
            return;
        }

        Conta conta = buscarContaPorNumero(numeroConta);
        if (conta == null) {
            System.out.println("Conta não encontrada.");
            return;
        }

        if (conta.getCliente() == null) {
            cliente.adicionarConta(conta);
            conta.setCliente(cliente);
        } else {
            System.out.println("A conta já está associada a outro cliente.");
        }
    }

    public List<Conta> listarContasCliente(String cpf) {
        Cliente cliente = consultarClientePorCpf(cpf);
        if (cliente != null) {
            return cliente.getContas();
        }
        return new ArrayList<>();
    }

    public double totalizarSaldoCliente(String cpf) {
        Cliente cliente = consultarClientePorCpf(cpf);
        if (cliente != null) {
            double total = 0;
            for (Conta conta : cliente.getContas()) {
                total += conta.getSaldo();
            }
            return total;
        }
        return 0;
    }
}
