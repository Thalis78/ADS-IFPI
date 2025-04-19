import java.util.Scanner;

public class Q1158 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

        for (int i = 0; i < N; i++) {
            int X = scanner.nextInt();
            int Y = scanner.nextInt();

            int soma = 0;
            int contador = 0;

            while (contador < Y) {
                if (X % 2 != 0) {
                    soma += X;
                    contador++;
                }
                X++;
            }

            System.out.println(soma);
        }

        scanner.close();
    }
}