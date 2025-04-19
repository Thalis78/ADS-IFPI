
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Banco banco = new Banco();
        App app = new App(banco);
        String opcao = "";
        System.out.println("\nBem-vindo ao Sistema Bancário");
        do {
            System.out.println("\nContas: \n");
            System.out.println("1 - Inserir.");
            System.out.println("2 - Consultar.");
            System.out.println("3 - Sacar.");
            System.out.println("4 - Depositar.");
            System.out.println("5 - Excluir.");
            System.out.println("6 - Transferir.");
            System.out.println("7 - Totalizações.");
            System.out.println("8 - Mudar titular.");
            System.out.println("9 - Ordem bancária.");
            System.out.println("\nClientes: \n");
            System.out.println("10 - Inserir.");
            System.out.println("11 - Consultar.");
            System.out.println("12 - Associr.");
            System.out.println("13 - Excluir.");
            System.out.println("\nFinalizar programa: \n");
            System.out.println("0 - Sair.\n");
            System.out.print("Escolha uma opção: ");
            opcao = input.nextLine();

            switch (opcao) {
                case "1":
                    app.inserirConta();
                    break;
                case "2":
                    app.consultarConta();
                    break;
                case "3":
                    app.sacarConta();
                    break;
                case "4":
                    app.depositarConta();
                    break;
                case "5":
                    app.excluirConta();
                    break;
                case "6":
                    app.transferirConta();
                    break;
                case "7":
                    app.totalizarSaldoConta();
                    break;
                case "8":
                    app.mudarTitularConta();
                    break;
                case "9":
                    app.ordemBancariaContas();
                    break;
                case "10":
                    app.inserirCliente();
                    break;
                case "11":
                    app.consultarCliente();
                    break;
                case "12":
                    app.associarCliente();
                    break;
                case "13":
                    app.excluirCliente();
                    break;
                case "0":
                    System.out.println("Aplicação encerrada.");
                    return;
                default:
                    System.out.println("Opção inválida.");
            }

            System.out.println("\nDeseja continuar? (QUALQUER TECLA) - SIM, (0) - NÃO :  ");
            opcao = input.nextLine();

        } while (!opcao.equals("0"));

        input.close();
    }
}