import java.util.Scanner;

public class Q2028 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int caso = 1;

        while (scanner.hasNext()) {
            int N = scanner.nextInt();
            if (N < 0) break;
            String plural = (N == 0) ? "numero" : "numeros";
            System.out.printf("Caso %d: %d %s\n0%s\n\n", caso++, (N * (N + 1) / 2) + 1, plural, sequencia(N));
        }
        scanner.close();
    }

    static String sequencia(int N) {
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= N; i++) {
            for (int j = 0; j < i; j++) {
                sb.append(" ").append(i);
            }
        }
        return sb.toString();
    }
}
