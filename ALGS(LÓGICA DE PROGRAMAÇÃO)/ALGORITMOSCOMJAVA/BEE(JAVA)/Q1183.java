import java.util.Scanner;

public class Q1183 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char operacao = scanner.next().charAt(0);

        double[][] matriz = new double[12][12];

        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                matriz[i][j] = scanner.nextDouble();
            }
        }

        double soma = 0.0;
        int elementos = 0;

        for (int i = 0; i < 12; i++) {
            for (int j = i + 1; j < 12; j++) {
                soma += matriz[i][j];
                elementos++;
            }
        }

        if (operacao == 'M') {
            double media = soma / elementos;
            System.out.printf("%.1f\n", media);
        } else if (operacao == 'S') {
            System.out.printf("%.1f\n", soma);
        }

        scanner.close();
    }
}
