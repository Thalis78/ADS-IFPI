import java.util.Scanner;

public class Q1176 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        for (int t = 0; t < T; t++) {
            int N = scanner.nextInt();
            long result = fib(N);

            System.out.println("Fib(" + N + ") = " + result);
        }

        scanner.close();
    }

    public static long fib(int n) {
        if (n <= 1) {
            return n;
        }

        long a = 0;
        long b = 1;

        for (int i = 2; i <= n; i++) {
            long temp = b;
            b += a;
            a = temp;
        }

        return b;
    }
}