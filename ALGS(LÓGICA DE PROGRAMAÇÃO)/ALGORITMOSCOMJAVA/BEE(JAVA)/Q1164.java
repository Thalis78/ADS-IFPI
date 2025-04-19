import java.util.Scanner;

public class Q1164 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            int x = scanner.nextInt();
            if (ehNumeroPerfeito(x)) {
                System.out.println(x + " eh perfeito");
            } else {
                System.out.println(x + " nao eh perfeito");
            }
        }

        scanner.close();
    }

    public static boolean ehNumeroPerfeito(int num) {
        int somaDivisores = 0;

        for (int i = 1; i < num; i++) {
            if (num % i == 0) {
                somaDivisores += i;
            }
        }

        return somaDivisores == num;
    }
}