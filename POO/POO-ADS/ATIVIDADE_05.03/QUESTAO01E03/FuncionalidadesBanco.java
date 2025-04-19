import java.util.Date;
import java.util.Scanner;

public class FuncionalidadesBanco {
    private static int idConta = 1;
    private static int idCliente = 1;

    public static void inserirConta(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta: ");
        String numero = input.nextLine();
        Conta conta = new Conta(idConta, null,numero,0);
        banco.inserirConta(conta);
        System.out.println("Conta inserida com sucesso!");
        idConta++;
    }

    public static void consultarConta(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta: ");
        String numero = input.nextLine();
        Conta conta = banco.consultarConta(numero);
        if (conta != null) {
            System.out.println("Número da conta: " + conta.getNumero() + " | Saldo: " + conta.getSaldo());
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public static void sacar(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta: ");
        String numero = input.nextLine();
        System.out.print("Digite o valor a ser sacado: ");
        double valor = Double.parseDouble(input.nextLine());
        Conta conta = banco.consultarConta(numero);
        if (conta != null) {
            conta.sacar(valor);
            System.out.println("Saque realizado. Saldo atual: " + conta.getSaldo());
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public static void depositar(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta: ");
        String numero = input.nextLine();
        System.out.print("Digite o valor a ser depositado: ");
        double valor = Double.parseDouble(input.nextLine());
        Conta conta = banco.consultarConta(numero);
        if (conta != null) {
            conta.depositar(valor);
            System.out.println("Depósito realizado. Saldo atual: " + conta.getSaldo());
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    public static void excluirConta(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta a ser excluída: ");
        String numero = input.nextLine();
        banco.excluirConta(numero);
    }

    public static void transferir(Banco banco, Scanner input) {
        System.out.print("Digite o número da conta origem: ");
        String numeroOrigem = input.nextLine();
        System.out.print("Digite o número da conta destino: ");
        String numeroDestino = input.nextLine();
        System.out.print("Digite o valor a ser transferido: ");
        double valor = Double.parseDouble(input.nextLine());

        Conta contaOrigem = banco.consultarConta(numeroOrigem);
        Conta contaDestino = banco.consultarConta(numeroDestino);

        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            System.out.println("Transferência realizada com sucesso.");
            System.out.println("Saldo da conta origem: " + contaOrigem.getSaldo());
            System.out.println("Saldo da conta destino: " + contaDestino.getSaldo());
        } else {
            System.out.println("Uma ou ambas as contas não foram encontradas.");
        }
    }

    public static void totalizacoes(Banco banco) {
        int totalContas = banco.quantidadeDeContas();
        double totalDinheiro = banco.totalSaldo();
        double mediaSaldo = banco.mediaSaldo();

        System.out.println("Total de contas: " + totalContas);
        System.out.println("Total de dinheiro depositado: R$" + totalDinheiro);
        System.out.println("Média de saldo das contas: R$" + mediaSaldo);
    }


    public static void inserirCliente(Banco banco, Scanner input) {
        System.out.print("Digite o nome do cliente: ");
        String nome = input.nextLine();
        System.out.print("Digite o CPF do cliente: ");
        String cpf = input.nextLine();
        System.out.print("Digite sua data de nascimento do cliente:");
        Date dataNascimento = new Date(input.nextLine());

        Cliente cliente = new Cliente(idCliente,nome, cpf,dataNascimento);
        banco.inserirCliente(cliente);
        System.out.println("Cliente inserido com sucesso!");
        idCliente++;
    }

    public static void consultarCliente(Banco banco, Scanner input) {
        System.out.print("Digite o CPF do cliente: ");
        String cpf = input.nextLine();

        Cliente cliente = banco.consultarClientePorCPF(cpf);
        if (cliente != null) {
            System.out.println(cliente);
        } else {
            System.out.println("Cliente não encontrado.");
        }
    }
}