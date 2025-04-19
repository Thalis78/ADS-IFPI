import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Banco banco = new Banco();
        String opcao = "";

        do {
            System.out.println("\nBem-vindo ao Sistema Bancário");
            System.out.println("1 - Inserir Conta");
            System.out.println("2 - Consultar Conta");
            System.out.println("3 - Sacar");
            System.out.println("4 - Depositar");
            System.out.println("5 - Excluir Conta");
            System.out.println("6 - Transferir");
            System.out.println("7 - Totalizações");
            System.out.println("8 - Inserir Cliente");
            System.out.println("9 - Consultar Cliente");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");
            opcao = input.nextLine();

            switch (opcao) {
                case "1":
                    FuncionalidadesBanco.inserirConta(banco, input);
                    break;
                case "2":
                    FuncionalidadesBanco.consultarConta(banco, input);
                    break;
                case "3":
                    FuncionalidadesBanco.sacar(banco, input);
                    break;
                case "4":
                    FuncionalidadesBanco.depositar(banco, input);
                    break;
                case "5":
                    FuncionalidadesBanco.excluirConta(banco, input);
                    break;
                case "6":
                    FuncionalidadesBanco.transferir(banco, input);
                    break;
                case "7":
                    FuncionalidadesBanco.totalizacoes(banco);
                    break;
                case "8":
                    FuncionalidadesBanco.inserirCliente(banco, input);
                    break;
                case "9":
                    FuncionalidadesBanco.consultarCliente(banco, input);
                    break;
                case "0":
                    System.out.println("Aplicação encerrada.");
                    break;
                default:
                    System.out.println("Opção inválida.");
            }

        } while (!opcao.equals("0"));

        input.close();
    }
}