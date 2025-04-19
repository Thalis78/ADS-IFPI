import java.util.Scanner;

public class Q1151 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

        if (N > 0 && N < 46) {
            int primeiro = 0;
            int segundo = 1;

            for (int i = 0; i < N; i++) {
                System.out.print(primeiro);
                if (i < N - 1) {
                    System.out.print(" ");
                }
                int proximo = primeiro + segundo;
                primeiro = segundo;
                segundo = proximo;
            }
            System.out.println();
        }

        scanner.close();
    }
}