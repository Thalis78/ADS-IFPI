import java.util.Scanner;

public class Q1165 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        for (int count = 0; count < N; count++) {
            int X = scanner.nextInt();
            if (X <= 1) {
                System.out.printf("%d nao eh primo\n", X);
                continue;
            }
            boolean isPrime = true;
            for (int i = 2; i * i <= X; i++) {
                if (X % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                System.out.printf("%d eh primo\n", X);
            } else {
                System.out.printf("%d nao eh primo\n", X);
            }
        }
    }
}