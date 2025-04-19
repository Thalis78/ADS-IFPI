import java.util.Date;

public class Main {
    public static void main(String[] args) {
        Banco banco = new Banco();

        Cliente cliente1 = new Cliente(1, "João", "12345678900", new Date());
        Cliente cliente2 = new Cliente(2, "Maria", "98765432100", new Date());

        banco.inserirCliente(cliente1);
        banco.inserirCliente(cliente2);

        Conta conta1 = new Conta(1, "001", 1000.00);
        Conta conta2 = new Conta(2, "002", 500.00);
        Conta conta3 = new Conta(3, "003", 200.00);

        banco.inserirConta(conta1);
        banco.inserirConta(conta2);
        banco.inserirConta(conta3);

        banco.associarContaCliente("001", "12345678900");
        banco.associarContaCliente("002", "98765432100");
        banco.associarContaCliente("003", "12345678900");

        Cliente clienteConsultado = banco.consultarClientePorCpf("12345678900");
        if (clienteConsultado != null) {
            System.out.println("Cliente encontrado: " + clienteConsultado.getNome());
        } else {
            System.out.println("Cliente não encontrado.");
        }

        System.out.println("Contas do cliente João:");
        for (Conta conta : banco.listarContasCliente("12345678900")) {
            System.out.println("Número da conta: " + conta.getNumero() + ", Saldo: " + conta.getSaldo());
        }

        double saldoTotal = banco.totalizarSaldoCliente("12345678900");
        System.out.println("Saldo total de João: " + saldoTotal);

        System.out.println("\nTestando transferência:");
        conta1.transferir(300.00, conta2);
        System.out.println("Saldo de João após transferência: " + conta1.getSaldo());
        System.out.println("Saldo de Maria após transferência: " + conta2.getSaldo());

        banco.associarContaCliente("003", "98765432100");

        Conta contaBuscada = banco.buscarContaPorNumero("001");
        if (contaBuscada != null) {
            System.out.println("Conta encontrada: " + contaBuscada.getNumero() + ", Saldo: " + contaBuscada.getSaldo());
        } else {
            System.out.println("Conta não encontrada.");
        }

        Cliente clienteDuplicado = new Cliente(1, "João", "12345678900", new Date());
        banco.inserirCliente(clienteDuplicado);

        Conta contaDuplicada = new Conta(1, "001", 1000.00);
        banco.inserirConta(contaDuplicada);
    }
}
