import java.util.Scanner;

public class Q1963 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double valorAntigo = scanner.nextDouble();
        double valorNovo = scanner.nextDouble();

        double diferenca = valorNovo - valorAntigo;

        double porcentagemAumento = (diferenca / valorAntigo) * 100;

        System.out.printf("%.2f%%\n", porcentagemAumento);

        scanner.close();
    }
}
