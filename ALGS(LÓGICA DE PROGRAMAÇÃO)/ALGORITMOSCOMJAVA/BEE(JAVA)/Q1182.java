import java.util.Scanner;

public class Q1182 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int coluna = scanner.nextInt();
        char operacao = scanner.next().charAt(0);

        double[][] matriz = new double[12][12];

        for (int i = 0; i < 12; i++) {
            for (int j = 0; j < 12; j++) {
                matriz[i][j] = scanner.nextDouble();
            }
        }

        double resultado = 0;
        for (int i = 0; i < 12; i++) {
            resultado += matriz[i][coluna];
        }

        if (operacao == 'M') {
            resultado /= 12;
        }

        System.out.printf("%.1f\n", resultado);

        scanner.close();
    }
}
