import java.util.Scanner;

public class Q1051 {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            double salario = scanner.nextDouble();

            double impostoDeRenda = 0;

            if (salario > 4500.00) {
                impostoDeRenda = (salario - 4500.00) * 0.28 + 1500.00 * 0.18 + 1000.00 * 0.08;
            } else if (salario > 3000.00) {
                impostoDeRenda = (salario - 3000.00) * 0.18 + 1000.00 * 0.08;
            } else if (salario > 2000.00) {
                impostoDeRenda = (salario - 2000.00) * 0.08;
            }

            if (impostoDeRenda > 0) {
                System.out.printf("R$ %.2f\n", impostoDeRenda);
            } else {
                System.out.println("Isento");
            }

            scanner.close();

        }}

