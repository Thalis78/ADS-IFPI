import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class App {
    int idConta = 1;
    int idCliente = 1;
    Banco banco;

    Scanner input = new Scanner(System.in);

    App(Banco banco) {
        this.banco = banco;
    }
    //FUNCIONALIDADE DA CONTA:
    void inserirConta() {
        input.nextLine();

        System.out.println("Digite o numero da conta: ");
        String numeroConta = input.nextLine();

        System.out.println("Digite o CPF do cliente: ");
        String cpfCliente = input.nextLine();

        Cliente cliente = banco.consultarClientePorCPF(cpfCliente);
        Conta conta = new Conta(idConta,cliente,numeroConta,0);

        if(cliente == null) {
            System.out.println("Cliente não encontrado ou não especificado!");
        }else{
            cliente.contas.add(conta);
        }


        banco.inserirConta(conta);
        idConta++;
    }
    void consultarConta() {
        input.nextLine();

        System.out.println("Digite o numero da conta: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);
        if(conta == null) {
            System.out.println("Conta não encontrada!");
        }else{
            System.out.println(conta.toStringConta());
        }
    }
    void sacarConta() {
        input.nextLine();

        System.out.println("Digite o numero da conta: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);

        if(conta == null) {
            System.out.println("Conta não encontrada!");
        }else{
            System.out.println("Informe o valor do saque? ");
            double valorSaque = input.nextDouble();

            conta.sacar(valorSaque);

            System.out.println("saldo: " + conta.saldo);
        }
    }

    void depositarConta() {
        input.nextLine();

        System.out.println("Digite o numero da conta: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);

        if(conta == null) {
            System.out.println("Conta não encontrada!");
        }else{
            System.out.println("Informe o valor do deposito? ");
            double valorDeposito = input.nextDouble();

            conta.depositar(valorDeposito);

            System.out.println("saldo: " + conta.saldo);
        }
    }

    void excluirConta(){
        input.nextLine();

        System.out.println("Digite o numero da conta: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);
        Cliente cliente = banco.consultarClientePorCPF(conta.cliente.cpf);

        if(conta == null) {
            System.out.println("Conta não encontrada!");
        }else{
            banco.excluirConta(numeroConta);
            if(cliente != null) {
                if(cliente.contas.size() == 0){
                    banco.clientes.remove(cliente);
                    System.out.println("Cliente excluido pois não tem contas associadas a ele!");
                }
            }
        }
    }

    void transferirConta(){
        input.nextLine();

        System.out.println("Digite o numero da conta origem: ");
        String numeroContaOrigem = input.nextLine();

        System.out.println("Digite o numero da conta destino: ");
        String numeroContaDestino = input.nextLine();

        Conta contaOrigem = banco.consultarConta(numeroContaOrigem);
        Conta contaDestino = banco.consultarConta(numeroContaDestino);

        if(contaOrigem == null || contaDestino == null) {
            System.out.println("Não foi possivel fazer a transferência!");
            System.out.println("A conta informada é inválida!");
        }else{
            System.out.println("Informe o valor da transferência: $");
            double valorTransferencia = input.nextDouble();

            if(valorTransferencia > 0 && valorTransferencia <= contaOrigem.saldo ){
                contaOrigem.saldo -= valorTransferencia;
                contaDestino.saldo += valorTransferencia;

                System.out.println("Transferência realizada com sucesso!");
            }else{
                System.out.println("Saldo insuficiente!");
            }
        }
    }

    void totalizarSaldoConta(){
        input.nextLine();

        double totalizar = 0;
        System.out.println("Informe o CPF do titular: ");
        String cpfTitular = input.nextLine();

        Cliente cliente = banco.consultarClientePorCPF(cpfTitular);

        if(cliente == null) {
            System.out.println("Cliente não encontrado!");
        }else{
            List<Conta> contas = cliente.contas;

            for(Conta conta : contas) {
                totalizar += conta.saldo;
            }

            System.out.println("O cliente possui um total das contas de R$ " + totalizar);
        }
    }
    void mudarTitularConta(){
        input.nextLine();

        System.out.println("Informe o numero da conta do titular: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);
        if(conta == null) {
            System.out.println("Conta não encontrada.");
        }else{

            Cliente cliente = conta.cliente == null ? null : banco.consultarClientePorCPF(conta.cliente.cpf);
            if(cliente == null) {
                System.out.println("Essa conta não possui titular!");
                System.out.println("Associe essa conta a um cliente!");
            }else{
                System.out.println(conta.toStringConta());
                System.out.println("Informe o CPF do novo titular: ");
                String cpfTitularNovo = input.nextLine();

                Cliente cliente1 = banco.consultarClientePorCPF(cpfTitularNovo);

                if(cliente1 == null) {
                    System.out.println("Cliente não existe!!");
                    System.out.println("Crie o cliente antes de mudar o titular!");
                }else{
                    conta.cliente = cliente1;
                    cliente.contas.remove(conta);
                    cliente1.contas.add(conta);
                    System.out.println("Conta atualizada com sucesso!");
                }
            }
        }
    }

    void ordemBancariaContas(){
        input.nextLine();

        System.out.println("Informe o numero da conta pra fazer a transferência: ");
        String numeroConta = input.nextLine();

        Conta conta = banco.consultarConta(numeroConta);

        if(conta == null) {
            System.out.println("A conta usada para transferência de ordem bancaria é inválida!");
            return;
        }


        System.out.println("Quantidade de contas: ");
        int quantsContas = input.nextInt();
        List<Conta> contas = new ArrayList<Conta>();

        input.nextLine();

        for(int i = 0; i < quantsContas; i++){
            System.out.println("Informe o numero da conta: ");
            String numeroConta1 = input.nextLine();

            Conta conta1 = banco.consultarConta(numeroConta1);

            if(conta != null) {
                contas.add(conta1);
            }
        }

        System.out.println("Quantidade de contas válidas: " + contas.size());


        System.out.println("Qual o valor você deseja transferir: R$");
        double valorTransferencia = input.nextDouble();

        if(valorTransferencia*contas.size() <= conta.saldo){
            conta.saldo -= valorTransferencia * contas.size();
            for(Conta conta1 : contas){
                conta1.saldo += valorTransferencia;
            }
        }else{
            System.out.println("Saldo insuficiente!");
        }
    }
    //FUNCIONALIDADE DO CLIENTE:

    void inserirCliente() {
        input.nextLine();

        System.out.println("Digite o nome da cliente: ");
        String nomeCliente = input.nextLine();

        System.out.println("Digite o CPF do cliente: ");
        String cpfCliente = input.nextLine();

        System.out.println("Digite sua data de nascimento (yyyy-MM-dd) do cliente: ");
        String dataNascimentoStr = input.nextLine();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate dataNascimento = LocalDate.parse(dataNascimentoStr, formatter);

        Cliente cliente = new Cliente(idCliente,nomeCliente,cpfCliente,dataNascimento);

        banco.inserirCliente(cliente);
        System.out.println(cliente.toStringCliente());
        idCliente++;
    }

    void consultarCliente() {
        input.nextLine();

        System.out.println("Digite o CPF da cliente: ");
        String cpfCliente = input.nextLine();

        Cliente cliente = banco.consultarClientePorCPF(cpfCliente);
        if(cliente == null) {
            System.out.println("Cliente não encontrado!");
        }else {
            System.out.println(cliente.toStringCliente());
        }
    }

    void associarCliente(){
        input.nextLine();

        System.out.println("Digite o CPF da cliente: ");
        String cpfCliente = input.nextLine();

        Cliente cliente = banco.consultarClientePorCPF(cpfCliente);

        if(cliente == null) {
            System.out.println("Cliente não encontrado");
        }
        else{
            System.out.println(cliente.toStringCliente());
            System.out.println("Informe o numero da conta: ");
            String numeroConta = input.nextLine();

            Conta conta = banco.consultarConta(numeroConta);

            if(conta == null) {
                System.out.println("Não foi possivel associar a uma conta que não existe!");
            }else{
                if(conta.cliente == null){
                    cliente.contas.add(conta);
                    conta.cliente = cliente;

                    System.out.println("Associado com sucesso!");
                }else{
                    System.out.println("Conta já possui um cliente associado!");
                }
            }
        }
    }
    void excluirCliente(){
        input.nextLine();

        System.out.println("Digite o CPF da cliente: ");
        String cpfCliente = input.nextLine();

        banco.excluirCliente(cpfCliente);

    }
}