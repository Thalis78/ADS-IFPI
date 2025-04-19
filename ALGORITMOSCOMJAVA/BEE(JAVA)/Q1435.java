import java.util.Scanner;

public class Q1435 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N;
        while ((N = scanner.nextInt()) != 0) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    System.out.printf("%3d", Math.min(Math.min(i, j), Math.min(N - 1 - i, N - 1 - j)) + 1);
                    if (j < N - 1) {
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
            System.out.println();
        }

        scanner.close();
    }
}
