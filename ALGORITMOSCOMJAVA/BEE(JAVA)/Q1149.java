import java.util.Scanner;

public class Q1149 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int A, N;
        A = scanner.nextInt();
        N = scanner.nextInt();

        while (N <= 0) {
            N = scanner.nextInt();
        }

        int soma = 0;
        for (int i = 0; i < N; i++) {
            soma += A + i;
        }

        System.out.println(soma);

    }
}
