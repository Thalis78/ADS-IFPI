import java.util.Scanner;

public class Q1184 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char operacao = scanner.next().charAt(0);

        double[][] matriz = new double[12][12];

        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                matriz[i][j] = scanner.nextDouble();
            }
        }

        double resultado = 0;
        int count = 0;
        for (int i = 1; i < 12; i++) {
            for (int j = 0; j < i; j++) {
                resultado += matriz[i][j];
                count++;
            }
        }

        if (operacao == 'M') {
            resultado /= count;
        }

        System.out.printf("%.1f\n", resultado);

        scanner.close();
    }
}
