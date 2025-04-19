import java.util.Scanner;

public class Q1178 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double V = scanner.nextDouble();
        double[] N = new double[100];
        for (int i = 0; i < 100; i++) {
            N[i] = V;
            V /= 2;
        }

        for (int i = 0; i < 100; i++) {
            System.out.printf("N[%d] = %.4f\n", i, N[i]);
        }

        scanner.close();
    }
}