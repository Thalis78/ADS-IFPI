import java.util.Scanner;

public class Q1173 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int V = scanner.nextInt();
        int[] N = new int[10];
        N[0] = V;
        for (int i = 1; i < 10; i++) {
            N[i] = N[i - 1] * 2;
        }

        for (int i = 0; i < 10; i++) {
            System.out.printf("N[%d] = %d\n", i, N[i]);
        }

    }
}
